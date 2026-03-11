import { NextResponse } from "next/server";

/**
 * Serverless profile chatbot implemented directly on Vercel.
 * The widget sends { message, history } and expects { reply }.
 *
 * Requires:
 * - OPENAI_API_KEY (Vercel env)
 * - optional OPENAI_MODEL (defaults to gpt-4o-mini)
 */

const OPENAI_API_KEY = process.env.OPENAI_API_KEY ?? "";
const OPENAI_MODEL = process.env.OPENAI_MODEL ?? "gpt-4o-mini";

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
  clientId: string,
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

const SYSTEM_PROMPT = `
You are a helpful AI assistant that lives on Eswar Raviteja Rayavarapu's public portfolio website (eswarrayavarapu.com).
Visitors are recruiters, hiring managers, or peers who want to quickly understand Eswar's background.
You are NOT talking to Eswar; you are describing him in the third person.

Goals:
- Give short, clear answers (1–2 sentences, or at most 3 short bullets).
- When relevant, point visitors to the right page on the site:
  - Experience page: https://eswarrayavarapu.com/experience
  - Transformation programs: https://eswarrayavarapu.com/projects
  - Contact page: https://eswarrayavarapu.com/contact

Style rules (follow strictly):
- Always refer to Eswar in the third person (\"Eswar\", \"he\", \"his\"). Never say \"you\" when you mean Eswar.
- Keep answers concise and easy to scan.
- If you include a URL, do NOT put a period or comma immediately after it. End the sentence before or after the link.
- When asked broad questions (\"strengths\", \"top skills\", \"summary\"), mention at most 3 key points and then suggest where to read more.
  Example: \"You can see more detail on the Experience page: https://eswarrayavarapu.com/experience\"
`;

export async function POST(request: Request) {
  if (!OPENAI_API_KEY) {
    return NextResponse.json(
      {
        detail:
          "Profile chat is not configured. Set OPENAI_API_KEY in your Vercel environment.",
      },
      { status: 503 },
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
      },
    );
  }

  const contentType = request.headers.get("content-type");
  if (!contentType?.includes("application/json")) {
    return NextResponse.json(
      { detail: "Request must be JSON." },
      { status: 415 },
    );
  }

  let body: ChatRequest;
  try {
    body = (await request.json()) as ChatRequest;
  } catch {
    return NextResponse.json(
      { detail: "Invalid JSON payload." },
      { status: 400 },
    );
  }

  const message = (body.message ?? "").trim();
  if (!message) {
    return NextResponse.json(
      { detail: "message is required." },
      { status: 400 },
    );
  }

  const history = Array.isArray(body.history) ? body.history : [];
  const apiUrl = "https://api.openai.com/v1/chat/completions";
  const abortController = new AbortController();
  const timeoutId = setTimeout(
    () => abortController.abort(),
    BACKEND_TIMEOUT_MS,
  );

  const messages = [
    { role: "system", content: SYSTEM_PROMPT },
    ...history
      .filter(
        (h) =>
          h &&
          (h.role === "user" || h.role === "assistant") &&
          typeof h.content === "string" &&
          h.content.trim(),
      )
      .slice(-8),
    { role: "user", content: message },
  ];

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: OPENAI_MODEL,
        messages,
        temperature: 0.4,
      }),
      cache: "no-store",
      signal: abortController.signal,
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      const detail =
        (data && (data.error?.message || data.detail)) ||
        "Chat backend error.";
      const status =
        typeof data?.error?.code === "string" &&
        data.error.code.toLowerCase().includes("quota")
          ? 429
          : response.status;

      return NextResponse.json({ detail }, { status });
    }

    const reply: string =
      data.choices?.[0]?.message?.content && typeof data.choices[0].message.content === "string"
        ? data.choices[0].message.content
        : "";

    return NextResponse.json({ reply });
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      return NextResponse.json(
        { detail: "Assistant backend timed out." },
        { status: 504 },
      );
    }
    return NextResponse.json(
      { detail: "Unable to reach assistant backend." },
      { status: 502 },
    );
  } finally {
    clearTimeout(timeoutId);
  }
}
