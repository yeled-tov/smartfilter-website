import { NextRequest, NextResponse } from "next/server";

// Simple in-memory rate limiter
const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW = 60_000; // 1 minute
const RATE_LIMIT_MAX = 3;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return true;
  }

  entry.count++;
  return false;
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for") || "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "יותר מדי בקשות. נסו שוב בעוד דקה." },
      { status: 429 }
    );
  }

  try {
    const body = await request.json();
    const { name, phone, message } = body;

    // Validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json({ error: "נא להזין שם תקין" }, { status: 400 });
    }

    if (!phone || typeof phone !== "string" || phone.trim().length < 9) {
      return NextResponse.json({ error: "נא להזין מספר טלפון תקין" }, { status: 400 });
    }

    if (!message || typeof message !== "string" || message.trim().length < 5) {
      return NextResponse.json({ error: "נא להזין הודעה (לפחות 5 תווים)" }, { status: 400 });
    }

    // In production, send email via Resend or another service
    // For now, log the contact submission
    console.log("New contact form submission:", {
      name: name.trim(),
      phone: phone.trim(),
      message: message.trim(),
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true, message: "ההודעה נשלחה בהצלחה" });
  } catch {
    return NextResponse.json({ error: "שגיאה בעיבוד הבקשה" }, { status: 500 });
  }
}
