import { NextResponse } from "next/server";

const N8N_WEBHOOK_URL = process.env.N8N_CHATBOT_WEBHOOK_URL;
const N8N_API_KEY = process.env.N8N_CHATBOT_API_KEY;
const MAX_MESSAGE_LENGTH = 2000;
const ALLOWED_ORIGINS = new Set([
  "https://agentic4biz.com",
  "https://www.agentic4biz.com",
  "http://localhost:3000",
  "http://localhost:3001"
]);

export async function POST(request: Request) {
  // Sin Origin se deja pasar (clientes legítimos que no lo envían); el rate limit lo hace Cloudflare.
  const origin = request.headers.get("origin");
  if (origin && !ALLOWED_ORIGINS.has(origin)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  if (!N8N_WEBHOOK_URL) {
    return NextResponse.json({ error: "Missing N8N_CHATBOT_WEBHOOK_URL" }, { status: 500 });
  }

  let body: { message?: string; language?: string; sessionId?: string };

  try {
    body = (await request.json()) as { message?: string; language?: string; sessionId?: string };
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const message = body.message?.trim();

  if (!message) {
    return NextResponse.json({ error: "Message is required" }, { status: 400 });
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    return NextResponse.json({ error: "Message too long" }, { status: 400 });
  }

  let upstream: Response;

  try {
    upstream = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(N8N_API_KEY ? { Authorization: `Bearer ${N8N_API_KEY}` } : {})
      },
      body: JSON.stringify({
        message,
        chatInput: message,
        language: body.language || "es",
        sessionId: body.sessionId || "a4b-landing"
      })
    });
  } catch {
    return NextResponse.json({ error: "n8n webhook is unreachable" }, { status: 502 });
  }

  if (!upstream.ok) {
    return NextResponse.json(
      { error: `n8n webhook returned ${upstream.status}` },
      { status: 502 }
    );
  }

  const contentType = upstream.headers.get("content-type") || "";
  const responseText = await upstream.text();

  if (!responseText) {
    return NextResponse.json({ reply: "OK" });
  }

  const data = contentType.includes("application/json")
    ? (JSON.parse(responseText) as
        | { reply?: string; output?: string; message?: string; text?: string }
        | Array<{ reply?: string; output?: string; message?: string; text?: string }>)
    : responseText;

  if (typeof data === "string") {
    return NextResponse.json({ reply: data || "OK" });
  }

  const responseData = Array.isArray(data) ? data[0] : data;

  return NextResponse.json({
    reply: responseData?.reply || responseData?.output || responseData?.message || responseData?.text || "OK"
  });
}
