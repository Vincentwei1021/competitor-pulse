import FeedbackWidget from "@/components/FeedbackWidget";
import type { Metadata } from "next";
import Script from "next/script";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-heading", weight: ["400","500","600","700","800"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-body" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://competitor-pulse-indol.vercel.app";

export const metadata: Metadata = {
  title: "CompetitorPulse — Competitor Price Monitoring for Small Business | $19/mo",
  description: "Stop manually checking competitor prices. Get instant alerts when competitors change prices, content, or inventory. Built for small e-commerce businesses. Starting at $19/mo.",
  keywords: ["competitor price monitoring", "price tracking", "competitor analysis", "e-commerce pricing", "price alerts", "competitor watch", "price intelligence"],
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  openGraph: {
    title: "CompetitorPulse — Know When Competitors Change Prices",
    description: "Automated competitor price monitoring for small businesses. Get alerts when prices change. From $19/mo — not $500+.",
    url: siteUrl, siteName: "CompetitorPulse", type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "CompetitorPulse" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CompetitorPulse — Competitor Price Monitoring from $19/mo",
    description: "Stop manually checking competitor prices. Automated alerts for small e-commerce businesses.",
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5881105388002876" crossOrigin="anonymous" strategy="afterInteractive" />
      </head>
      <body className={`${jakarta.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <FeedbackWidget />
      </body>
    </html>
  );
}
