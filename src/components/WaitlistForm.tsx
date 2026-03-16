"use client";
import { useState } from "react";

interface WaitlistFormProps {
  variant?: "hero" | "footer";
}

export default function WaitlistForm({ variant = "hero" }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) { setMessage("Please enter a valid email"); setStatus("error"); return; }
    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email: email.trim() }) });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setMessage(data.message || "You're on the list! We'll be in touch soon.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className={`rounded-xl border ${variant === "footer" ? "border-brand-300/30 bg-brand-700/50" : "border-green-200 bg-green-50"} p-5 text-center animate-fade-in`}>
        <p className="text-lg font-bold text-green-600">🎉 You&apos;re in!</p>
        <p className={`mt-1 text-sm ${variant === "footer" ? "text-brand-200" : "text-gray-600"}`}>{message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@company.com"
        className={`flex-1 rounded-lg border px-4 py-3 text-sm outline-none transition-colors ${
          variant === "footer"
            ? "border-brand-400/30 bg-brand-800/50 text-white placeholder-brand-300/60 focus:border-brand-300"
            : "border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
        }`} />
      <button type="submit" disabled={status === "loading"}
        className={`rounded-lg px-6 py-3 text-sm font-bold transition-all disabled:opacity-60 ${
          variant === "footer"
            ? "bg-white text-brand-700 hover:bg-gray-100"
            : "bg-brand-600 text-white hover:bg-brand-700 shadow-lg shadow-brand-600/25"
        }`}>
        {status === "loading" ? "Joining..." : "Get Early Access"}
      </button>
      {status === "error" && <p className="text-xs text-red-500 sm:col-span-2">{message}</p>}
    </form>
  );
}
