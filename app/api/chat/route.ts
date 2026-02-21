import { NextResponse } from "next/server";

const BACKEND_URL =
  process.env.PORTFOLIO_BACKEND_URL ?? "http://localhost:8000";
const MAX_QUESTION_LENGTH = Number(
  process.env.CHAT_MAX_QUESTION_LENGTH ?? "2000",
);
const RATE_LIMIT_WINDOW_MS = Number(
  process.env.CHAT_RATE_LIMIT_WINDOW_MS ?? "60000",
);
const RATE_LIMIT_MAX_REQUESTS = Number(
  process.env.CHAT_RATE_LIMIT_MAX_REQUESTS ?? "30",
);
const BACKEND_TIMEOUT_MS = Number(
  process.env.CHAT_BACKEND_TIMEOUT_MS ?? "20000",
);

type ChatRequest = {
  question?: string;
};

type RateLimitEntry = {
  count: number;
  windowStartedAt: number;
};

const rateLimitStore = new Map<string, RateLimitEntry>();

function getClientId(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() ?? "unknown";
  }
  const realIp = request.headers.get("x-real-ip");
  if (realIp) {
    return realIp.trim();
  }
  return "unknown";
}

function checkRateLimit(clientId: string): { allowed: true } | { allowed: false; retryAfterSeconds: number } {
  const now = Date.now();
  const currentEntry = rateLimitStore.get(clientId);

  if (!currentEntry || now - currentEntry.windowStartedAt >= RATE_LIMIT_WINDOW_MS) {
    rateLimitStore.set(clientId, { count: 1, windowStartedAt: now });
    return { allowed: true };
  }

  if (currentEntry.count >= RATE_LIMIT_MAX_REQUESTS) {
    const retryAfterMs =
      RATE_LIMIT_WINDOW_MS - (now - currentEntry.windowStartedAt);
    return {
      allowed: false,
      retryAfterSeconds: Math.max(1, Math.ceil(retryAfterMs / 1000)),
    };
  }

  currentEntry.count += 1;
  rateLimitStore.set(clientId, currentEntry);
  return { allowed: true };
}

function cleanupRateLimitStore() {
  const now = Date.now();
  for (const [key, entry] of rateLimitStore.entries()) {
    if (now - entry.windowStartedAt >= RATE_LIMIT_WINDOW_MS) {
      rateLimitStore.delete(key);
    }
  }
}

export async function POST(request: Request) {
  cleanupRateLimitStore();
  const clientId = getClientId(request);
  const rateLimit = checkRateLimit(clientId);
  if (!rateLimit.allowed) {
    return NextResponse.json(
      {
        error: "Too many requests. Please try again shortly.",
      },
      {
        status: 429,
        headers: { "Retry-After": String(rateLimit.retryAfterSeconds) },
      },
    );
  }

  const contentType = request.headers.get("content-type");
  if (!contentType?.includes("application/json")) {
    return NextResponse.json(
      { error: "Request must be JSON." },
      { status: 415 },
    );
  }

  let body: ChatRequest;
  try {
    body = (await request.json()) as ChatRequest;
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  const question = body.question?.trim();
  if (!question) {
    return NextResponse.json(
      { error: "Question is required." },
      { status: 400 },
    );
  }
  if (question.length > MAX_QUESTION_LENGTH) {
    return NextResponse.json(
      {
        error: `Question exceeds max length (${MAX_QUESTION_LENGTH} characters).`,
      },
      { status: 400 },
    );
  }

  const abortController = new AbortController();
  const timeoutId = setTimeout(() => {
    abortController.abort();
  }, BACKEND_TIMEOUT_MS);

  try {
    const response = await fetch(`${BACKEND_URL}/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question }),
      cache: "no-store",
      signal: abortController.signal,
    });

    if (!response.ok) {
      const backendDetail = await response.text();
      console.error(
        "[chat-api] Backend returned non-OK status",
        response.status,
        backendDetail.slice(0, 500),
      );
      return NextResponse.json(
        { error: "Assistant backend error." },
        { status: 502 },
      );
    }

    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      return NextResponse.json(
        { error: "Assistant backend timed out." },
        { status: 504 },
      );
    }
    console.error("[chat-api] Failed to reach backend:", error);
    return NextResponse.json(
      { error: "Unable to reach assistant backend." },
      { status: 502 },
    );
  } finally {
    clearTimeout(timeoutId);
  }
}
