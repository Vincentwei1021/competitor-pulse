import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Terms of Service | CompetitorPulse", description: "CompetitorPulse terms of service.", robots: { index: true, follow: true } };

export default function TermsPage() {
  return (
    <>
      <header className="border-b border-gray-100 bg-white">
        <nav className="mx-auto flex max-w-6xl items-center px-4 py-3 sm:px-6">
          <Link href="/" className="font-[family-name:var(--font-heading)] text-xl font-bold text-gray-900 tracking-tight"><span className="text-brand-600">●</span> CompetitorPulse</Link>
        </nav>
      </header>
      <main className="px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Terms of Service</h1>
          <p className="mt-2 text-sm text-gray-400">Last updated: March 16, 2026</p>
          <div className="mt-8 space-y-6 text-gray-700 leading-relaxed">
            <h2 className="text-xl font-bold text-gray-900">Acceptance of Terms</h2>
            <p>By using CompetitorPulse or joining our waitlist, you agree to these Terms. If you disagree, please do not use the service.</p>
            <h2 className="text-xl font-bold text-gray-900">Description of Service</h2>
            <p>CompetitorPulse is a competitor price monitoring SaaS tool currently in development. The waitlist is for early access notification only.</p>
            <h2 className="text-xl font-bold text-gray-900">Waitlist</h2>
            <p>Joining the waitlist does not constitute a purchase or subscription. You will be notified by email when early access opens. No payment is required until you actively subscribe.</p>
            <h2 className="text-xl font-bold text-gray-900">Pricing</h2>
            <p>Prices shown on the landing page are indicative and may change before launch. Early access members may receive promotional pricing.</p>
            <h2 className="text-xl font-bold text-gray-900">No Warranty</h2>
            <p>The service is provided &quot;as is&quot; without warranties of any kind.</p>
            <h2 className="text-xl font-bold text-gray-900">Limitation of Liability</h2>
            <p>We are not liable for any damages arising from your use of the service or reliance on competitor data.</p>
            <h2 className="text-xl font-bold text-gray-900">Contact</h2>
            <p>Questions? <a href="mailto:legal@toolboxlite.com" className="text-brand-600 hover:underline">legal@toolboxlite.com</a></p>
          </div>
        </div>
      </main>
    </>
  );
}
