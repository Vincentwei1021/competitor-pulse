import Link from "next/link";
import WaitlistForm from "@/components/WaitlistForm";
import FAQ from "@/components/FAQ";
import { faqData } from "@/data/faq";

const siteUrl = "https://competitor-pulse.vercel.app";

const webAppSchema = {
  "@context": "https://schema.org", "@type": "SoftwareApplication",
  name: "CompetitorPulse", url: siteUrl,
  description: "Automated competitor price monitoring for small e-commerce businesses. Get instant alerts when competitors change prices.",
  applicationCategory: "BusinessApplication", operatingSystem: "Any",
  offers: [
    { "@type": "Offer", name: "Starter", price: "19", priceCurrency: "USD", description: "10 URLs, daily checks, email alerts" },
    { "@type": "Offer", name: "Pro", price: "49", priceCurrency: "USD", description: "50 URLs, hourly checks, screenshot diff, Slack" },
  ],
};
const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: faqData.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
};

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <Link href="/" className="font-[family-name:var(--font-heading)] text-xl font-bold text-gray-900 tracking-tight">
            <span className="text-brand-600">●</span> CompetitorPulse
          </Link>
          <div className="flex items-center gap-1 sm:gap-2">
            <a href="#pricing" className="rounded-lg px-3 py-3 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900">Pricing</a>
            <a href="#faq" className="rounded-lg px-3 py-3 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900">FAQ</a>
            <a href="#waitlist" className="rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-brand-700">Get Early Access</a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="px-4 pt-16 pb-12 sm:px-6 sm:pt-24 sm:pb-16">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-5 inline-block rounded-full bg-brand-50 border border-brand-200 px-4 py-1.5 text-sm font-semibold text-brand-700">
              🚀 Early Access — Limited Spots
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl leading-[1.1]">
              Stop Manually Checking<br />
              <span className="text-brand-600">Competitor Prices</span>
            </h1>
            <p className="mt-5 text-lg text-gray-600 sm:text-xl max-w-2xl mx-auto leading-relaxed">
              Get instant alerts when competitors change prices, content, or inventory. Built for small e-commerce businesses. <strong className="text-gray-900">Starting at $19/mo</strong> — not $500+.
            </p>
            <div className="mt-8 flex justify-center">
              <WaitlistForm variant="hero" />
            </div>
            <p className="mt-3 text-xs text-gray-400">14-day free trial · No credit card required · Cancel anytime</p>
          </div>
        </section>

        {/* Social Proof / Pain Points */}
        <section className="px-4 py-12 sm:px-6 sm:py-16 bg-gray-50">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl mb-3">Sound Familiar?</h2>
            <p className="text-center text-gray-500 mb-10">Real quotes from real business owners</p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { quote: "Manually checking competitor prices is eating up 5 hours a week. There has to be a better way.", source: "r/ecommerce", avatar: "🛒" },
                { quote: "$500+/month for price monitoring is nuts for our size. We only track 10 competitors.", source: "r/smallbusiness", avatar: "💸" },
                { quote: "I found out my competitor dropped prices 3 weeks ago. Lost thousands in sales before I noticed.", source: "r/FulfillmentByAmazon", avatar: "📉" },
                { quote: "I have a spreadsheet where I manually log competitor prices every Monday. It's 2026. This is insane.", source: "r/ecommerce", avatar: "📊" },
                { quote: "We trialed Prisync but the $500/month minimum was a non-starter for our 8-person team.", source: "r/Entrepreneur", avatar: "🏢" },
                { quote: "By the time I notice a competitor price change, I've already lost the buy box for a week.", source: "r/FulfillmentByAmazon", avatar: "⏰" },
              ].map((item, i) => (
                <div key={i} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                  <div className="text-2xl mb-3">{item.avatar}</div>
                  <blockquote className="text-sm text-gray-700 leading-relaxed italic">&ldquo;{item.quote}&rdquo;</blockquote>
                  <p className="mt-3 text-xs font-medium text-gray-400">— {item.source}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center text-3xl font-bold text-gray-900 mb-3">How It Works</h2>
            <p className="text-center text-gray-500 mb-12">Three steps. Five minutes. Done.</p>
            <div className="grid gap-8 sm:grid-cols-3">
              {[
                { step: "1", icon: "🔗", title: "Add Competitor URLs", desc: "Paste the product pages you want to monitor. No setup, no browser extensions, no code." },
                { step: "2", icon: "🔄", title: "We Monitor 24/7", desc: "CompetitorPulse checks your competitors daily (or hourly on Pro). Price changes, content edits, stock status — we catch it all." },
                { step: "3", icon: "🔔", title: "Get Instant Alerts", desc: "The moment something changes, you get an email (and Slack on Pro) with the exact change: old price → new price, with screenshots." },
              ].map((s) => (
                <div key={s.step} className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-50 text-3xl">{s.icon}</div>
                  <div className="mb-2 inline-block rounded-full bg-brand-600 px-2.5 py-0.5 text-xs font-bold text-white">Step {s.step}</div>
                  <h3 className="text-lg font-bold text-gray-900">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="px-4 py-16 sm:px-6 sm:py-20 bg-gray-50">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center text-3xl font-bold text-gray-900 mb-10">Everything You Need to Stay Ahead</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: "💰", title: "Price Change Alerts", desc: "Instant notifications when a competitor raises or drops a price. See old vs. new with percentage change." },
                { icon: "📸", title: "Screenshot Diffs", desc: "Visual before/after comparisons so you can see exactly what changed on the page. Pro plan." },
                { icon: "📈", title: "Price History Charts", desc: "Track competitor pricing trends over time. Spot patterns, seasonal changes, and promotional cycles." },
                { icon: "🏪", title: "Stock Monitoring", desc: "Know when competitors go out of stock — or come back. Perfect for timing your own inventory." },
                { icon: "⚡", title: "Hourly Checks", desc: "Pro plan monitors up to every hour. Never miss a time-sensitive price change again." },
                { icon: "💬", title: "Slack Integration", desc: "Get alerts directly in your team's Slack channel. No more checking email. Pro plan." },
              ].map((f) => (
                <div key={f.title} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                  <div className="text-2xl mb-3">{f.icon}</div>
                  <h3 className="text-base font-bold text-gray-900">{f.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-gray-600">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center text-3xl font-bold text-gray-900 mb-3">Simple, Honest Pricing</h2>
            <p className="text-center text-gray-500 mb-12">No hidden fees. No annual contracts. Cancel anytime.</p>

            <div className="grid gap-8 sm:grid-cols-2 max-w-3xl mx-auto">
              {/* Starter */}
              <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Starter</div>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-5xl font-extrabold text-gray-900">$19</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <p className="mt-3 text-sm text-gray-600">Perfect for small shops tracking a few key competitors.</p>
                <ul className="mt-6 space-y-3">
                  {["10 monitored URLs", "Daily price checks", "Email alerts", "Price history (30 days)", "Dashboard access", "Email support"].map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-gray-700">
                      <span className="text-green-500">✓</span>{f}
                    </li>
                  ))}
                </ul>
                <a href="#waitlist" className="mt-8 block rounded-lg border-2 border-brand-600 py-3 text-center text-sm font-bold text-brand-600 transition-colors hover:bg-brand-50">
                  Get Early Access
                </a>
              </div>

              {/* Pro */}
              <div className="relative rounded-2xl border-2 border-brand-600 bg-white p-8 shadow-lg">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-600 px-4 py-1 text-xs font-bold text-white">MOST POPULAR</div>
                <div className="text-sm font-semibold text-brand-600 uppercase tracking-wider">Pro</div>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-5xl font-extrabold text-gray-900">$49</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <p className="mt-3 text-sm text-gray-600">For growing businesses that need real-time competitive intelligence.</p>
                <ul className="mt-6 space-y-3">
                  {["50 monitored URLs", "Hourly price checks", "Email + Slack alerts", "Screenshot diffs", "Price history (1 year)", "CSV export", "Priority support", "API access"].map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-gray-700">
                      <span className="text-green-500">✓</span>{f}
                    </li>
                  ))}
                </ul>
                <a href="#waitlist" className="mt-8 block rounded-lg bg-brand-600 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-brand-700 shadow-lg shadow-brand-600/25">
                  Get Early Access
                </a>
              </div>
            </div>

            {/* Comparison table */}
            <div className="mt-16 mx-auto max-w-3xl">
              <h3 className="text-xl font-bold text-gray-900 text-center mb-6">How We Compare</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 text-left font-semibold text-gray-900">Feature</th>
                      <th className="py-3 text-center font-semibold text-brand-600">CompetitorPulse</th>
                      <th className="py-3 text-center font-semibold text-gray-400">Enterprise Tools</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      ["Starting price", "$19/mo", "$500+/mo"],
                      ["Setup time", "5 minutes", "Days–weeks"],
                      ["Minimum commitment", "None", "Annual contract"],
                      ["Small business focus", "✅ Built for you", "❌ Enterprise-first"],
                      ["Price alerts", "✅ Instant", "✅ Instant"],
                      ["Screenshot diffs", "✅ Pro plan", "✅ Most plans"],
                      ["API access", "✅ Pro plan", "✅ Enterprise"],
                    ].map(([feature, us, them]) => (
                      <tr key={feature}>
                        <td className="py-3 text-gray-700">{feature}</td>
                        <td className="py-3 text-center font-medium text-gray-900">{us}</td>
                        <td className="py-3 text-center text-gray-500">{them}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <FAQ />

        {/* CTA Footer */}
        <section id="waitlist" className="px-4 py-16 sm:px-6 sm:py-20 bg-brand-600">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to Stop Guessing?</h2>
            <p className="mt-4 text-lg text-brand-100">
              Join the waitlist for early access. Be the first to know when competitors change prices — before you lose sales.
            </p>
            <div className="mt-8 flex justify-center">
              <WaitlistForm variant="footer" />
            </div>
            <p className="mt-4 text-sm text-brand-200">14-day free trial · No credit card · Cancel anytime</p>
          </div>
        </section>

        {/* SEO content */}
        <section className="px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">Why Competitor Price Monitoring Matters</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                In the fast-paced world of e-commerce, <strong className="text-gray-900">pricing is your most powerful competitive lever</strong>. Studies show that 87% of online shoppers consider price as the primary factor in their purchasing decisions. Yet most small businesses still rely on manual competitor checks — opening tabs, scrolling through product pages, jotting down numbers in spreadsheets.
              </p>
              <p>
                This manual approach has three critical problems: it&apos;s <strong className="text-gray-900">slow</strong> (competitors can change prices and you won&apos;t know for days), it&apos;s <strong className="text-gray-900">expensive</strong> (5+ hours per week of valuable time), and it&apos;s <strong className="text-gray-900">unreliable</strong> (human error means missed changes).
              </p>
              <h3 className="text-xl font-bold text-gray-900 pt-2">The Enterprise Problem</h3>
              <p>
                Enterprise price intelligence tools like Prisync, Competera, and Intelligence Node solve this problem — but at enterprise prices. Starting at $500–$2,000+ per month with annual contracts, they&apos;re designed for large retailers with thousands of SKUs. For a small Shopify store tracking 10 competitors, this is overkill.
              </p>
              <h3 className="text-xl font-bold text-gray-900 pt-2">CompetitorPulse: Built for Small Business</h3>
              <p>
                <strong className="text-gray-900">CompetitorPulse</strong> fills the gap between manual tracking and enterprise solutions. For just $19/month, you get automated daily monitoring of up to 10 competitor URLs with instant email alerts when prices change. No setup, no contracts, no enterprise sales calls.
              </p>
              <p>
                The Pro plan at $49/month adds hourly checks, screenshot comparisons, price history charts, Slack integration, and CSV exports — everything a growing business needs to stay competitive without the enterprise price tag.
              </p>
              <h3 className="text-xl font-bold text-gray-900 pt-2">How Automated Price Monitoring Works</h3>
              <p>
                CompetitorPulse works by automatically visiting your specified competitor product pages on a regular schedule. Our system intelligently extracts pricing data, inventory status, and content changes. When something changes, you receive an instant alert with the exact details: old price vs. new price, percentage change, and a direct link to verify.
              </p>
              <p>
                Pro users also receive visual screenshot diffs — side-by-side before/after comparisons that show exactly what changed on the page, not just the price. This catches content changes, promotional banners, and layout shifts that pure data scraping might miss.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-8 text-sm text-gray-500 sm:flex-row sm:justify-between sm:px-6">
          <p>&copy; {new Date().getFullYear()} CompetitorPulse. All rights reserved.</p>
          <div className="flex gap-2">
            <Link href="/" className="rounded-lg px-3 py-3 transition-colors hover:text-gray-900">Home</Link>
            <Link href="/privacy" className="rounded-lg px-3 py-3 transition-colors hover:text-gray-900">Privacy</Link>
            <Link href="/terms" className="rounded-lg px-3 py-3 transition-colors hover:text-gray-900">Terms</Link>
          </div>
        </div>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
