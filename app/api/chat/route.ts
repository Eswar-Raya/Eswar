import { NextResponse } from "next/server";

const BACKEND_URL =
  process.env.PORTFOLIO_BACKEND_URL ?? "http://localhost:8000";

type ChatRequest = {
  question?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ChatRequest;
    const question = body.question?.trim();

    if (!question) {
      return NextResponse.json(
        { error: "Question is required." },
        { status: 400 },
      );
    }

    const response = await fetch(`${BACKEND_URL}/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question }),
      cache: "no-store",
    });

    if (!response.ok) {
      const detail = await response.text();
      return NextResponse.json(
        { error: "Assistant backend error.", detail },
        { status: response.status },
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to reach assistant.";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
