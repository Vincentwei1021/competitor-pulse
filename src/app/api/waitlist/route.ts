import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

// Vercel serverless: /tmp is writable (ephemeral per instance)
const DATA_FILE = path.join("/tmp", "waitlist.json");

interface WaitlistEntry {
  email: string;
  timestamp: string;
  ip?: string;
}

async function readWaitlist(): Promise<WaitlistEntry[]> {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const email = (body.email || "").trim().toLowerCase();

    if (!email || !email.includes("@") || !email.includes(".")) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    // Always log to stdout (appears in Vercel function logs — permanent record)
    console.log(`[WAITLIST] ${email} — ${new Date().toISOString()}`);

    // Also persist to /tmp (survives within same instance)
    try {
      const entries = await readWaitlist();
      if (entries.some(e => e.email === email)) {
        return NextResponse.json({ message: "You're already on the waitlist! We'll reach out soon." });
      }
      entries.push({ email, timestamp: new Date().toISOString() });
      await fs.writeFile(DATA_FILE, JSON.stringify(entries, null, 2), "utf-8");
      return NextResponse.json({ message: `Welcome aboard! You're #${entries.length} on the waitlist. We'll email you when early access opens.` });
    } catch {
      // /tmp write failed — still return success since we logged to stdout
      return NextResponse.json({ message: "You're on the list! We'll email you when early access opens." });
    }
  } catch {
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}

export async function GET() {
  const entries = await readWaitlist();
  return NextResponse.json({ count: entries.length });
}
