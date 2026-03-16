import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "waitlist.json");

async function readWaitlist(): Promise<string[]> {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

async function writeWaitlist(emails: string[]): Promise<void> {
  await fs.writeFile(DATA_FILE, JSON.stringify(emails, null, 2), "utf-8");
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const email = (body.email || "").trim().toLowerCase();

    if (!email || !email.includes("@") || !email.includes(".")) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const emails = await readWaitlist();

    if (emails.includes(email)) {
      return NextResponse.json({ message: "You're already on the waitlist! We'll reach out soon." });
    }

    emails.push(email);
    await writeWaitlist(emails);

    return NextResponse.json({ message: `Welcome aboard! You're #${emails.length} on the waitlist. We'll email you when early access opens.` });
  } catch {
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}

export async function GET() {
  const emails = await readWaitlist();
  return NextResponse.json({ count: emails.length });
}
