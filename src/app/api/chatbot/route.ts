import { NextResponse } from "next/server";

const N8N_WEBHOOK_URL = process.env.N8N_CHATBOT_WEBHOOK_URL;
const N8N_API_KEY = process.env.N8N_CHATBOT_API_KEY;

export async function POST(request: Request) {
  if (!N8N_WEBHOOK_URL) {
    return NextResponse.json({ error: "Missing N8N_CHATBOT_WEBHOOK_URL" }, { status: 500 });
  }

  const body = (await request.json()) as { message?: string; language?: string };
  const message = body.message?.trim();

  if (!message) {
    return NextResponse.json({ error: "Message is required" }, { status: 400 });
  }

  const upstream = await fetch(N8N_WEBHOOK_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(N8N_API_KEY ? { Authorization: `Bearer ${N8N_API_KEY}` } : {})
    },
    body: JSON.stringify({
      message,
      language: body.language || "es"
    })
  });

  if (!upstream.ok) {
    return NextResponse.json({ error: "Upstream n8n webhook error" }, { status: 502 });
  }

  const data = (await upstream.json()) as { reply?: string; output?: string; message?: string };

  return NextResponse.json({ reply: data.reply || data.output || data.message || "OK" });
}
