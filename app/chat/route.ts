import { NextResponse } from "next/server";

/**
 * Proxy for the profile chatbot (AI_Chatbot / services/profile-chat).
 * The widget sends { message, history } and expects { reply }.
 * Set CHATBOT_API_URL in Vercel to your deployed profile-chat API (e.g. Railway, Render).
 */
const CHATBOT_API_URL = process.env.CHATBOT_API_URL ?? "";
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
  message?: string;
  history?: Array<{ role: string; content: string }>;
};

type RateLimitEntry = { count: number; windowStartedAt: number };
const rateLimitStore = new Map<string, RateLimitEntry>();

function getClientId(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0]?.trim() ?? "unknown";
  const realIp = request.headers.get("x-real-ip");
  if (realIp) return realIp.trim();
  return "unknown";
}

function checkRateLimit(
  clientId: string
): { allowed: true } | { allowed: false; retryAfterSeconds: number } {
  const now = Date.now();
  const currentEntry = rateLimitStore.get(clientId);
  if (
    !currentEntry ||
    now - currentEntry.windowStartedAt >= RATE_LIMIT_WINDOW_MS
  ) {
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
  if (!CHATBOT_API_URL) {
    return NextResponse.json(
      {
        detail:
          "Profile chat is not configured. Set CHATBOT_API_URL to your deployed chatbot API.",
      },
      { status: 503 }
    );
  }

  cleanupRateLimitStore();
  const clientId = getClientId(request);
  const rateLimit = checkRateLimit(clientId);
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { detail: "Too many requests. Please try again shortly." },
      {
        status: 429,
        headers: { "Retry-After": String(rateLimit.retryAfterSeconds) },
      }
    );
  }

  const contentType = request.headers.get("content-type");
  if (!contentType?.includes("application/json")) {
    return NextResponse.json(
      { detail: "Request must be JSON." },
      { status: 415 }
    );
  }

  let body: ChatRequest;
  try {
    body = (await request.json()) as ChatRequest;
  } catch {
    return NextResponse.json(
      { detail: "Invalid JSON payload." },
      { status: 400 }
    );
  }

  const message = (body.message ?? "").trim();
  if (!message) {
    return NextResponse.json(
      { detail: "message is required." },
      { status: 400 }
    );
  }

  const history = Array.isArray(body.history) ? body.history : [];
  const backendUrl = CHATBOT_API_URL.replace(/\/$/, "");
  const abortController = new AbortController();
  const timeoutId = setTimeout(
    () => abortController.abort(),
    BACKEND_TIMEOUT_MS
  );

  try {
    const response = await fetch(`${backendUrl}/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, history }),
      cache: "no-store",
      signal: abortController.signal,
    });

    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      return NextResponse.json(
        { detail: data.detail ?? "Chat backend error." },
        { status: response.status === 503 ? 503 : 502 }
      );
    }

    return NextResponse.json({ reply: data.reply ?? "" });
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      return NextResponse.json(
        { detail: "Assistant backend timed out." },
        { status: 504 }
      );
    }
    return NextResponse.json(
      { detail: "Unable to reach chatbot backend." },
      { status: 502 }
    );
  } finally {
    clearTimeout(timeoutId);
  }
}
