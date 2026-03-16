import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Privacy Policy | CompetitorPulse", description: "CompetitorPulse privacy policy.", robots: { index: true, follow: true } };

export default function PrivacyPage() {
  return (
    <>
      <header className="border-b border-gray-100 bg-white">
        <nav className="mx-auto flex max-w-6xl items-center px-4 py-3 sm:px-6">
          <Link href="/" className="font-[family-name:var(--font-heading)] text-xl font-bold text-gray-900 tracking-tight"><span className="text-brand-600">●</span> CompetitorPulse</Link>
        </nav>
      </header>
      <main className="px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Privacy Policy</h1>
          <p className="mt-2 text-sm text-gray-400">Last updated: March 16, 2026</p>
          <div className="mt-8 space-y-6 text-gray-700 leading-relaxed">
            <h2 className="text-xl font-bold text-gray-900">Information We Collect</h2>
            <p>When you join our waitlist, we collect your email address. This is the only personal information we store.</p>
            <h2 className="text-xl font-bold text-gray-900">How We Use Your Information</h2>
            <p>Your email is used exclusively to notify you about CompetitorPulse early access, product updates, and launch information. We will never sell, rent, or share your email with third parties.</p>
            <h2 className="text-xl font-bold text-gray-900">Data Storage</h2>
            <p>Waitlist emails are stored securely on our Vercel-hosted infrastructure. We implement reasonable security measures to protect your data.</p>
            <h2 className="text-xl font-bold text-gray-900">Advertising</h2>
            <p>We display advertisements through Google AdSense. These services may use cookies. Opt out at <a href="https://adssettings.google.com" className="text-brand-600 hover:underline" rel="noopener noreferrer" target="_blank">Google Ad Settings</a>.</p>
            <h2 className="text-xl font-bold text-gray-900">Your Rights</h2>
            <p>You can request deletion of your email from our waitlist at any time by contacting us.</p>
            <h2 className="text-xl font-bold text-gray-900">Contact</h2>
            <p>Questions? <a href="mailto:privacy@toolboxlite.com" className="text-brand-600 hover:underline">privacy@toolboxlite.com</a></p>
          </div>
        </div>
      </main>
    </>
  );
}
