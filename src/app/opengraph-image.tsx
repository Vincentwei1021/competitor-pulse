import { ImageResponse } from "next/og";
export const runtime = "edge";
export const alt = "CompetitorPulse — Competitor Price Monitoring";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #2563eb 50%, #3b82f6 100%)", width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontFamily: "sans-serif" }}>
        <div style={{ fontSize: 80, marginBottom: 8 }}>📊</div>
        <div style={{ fontSize: 56, fontWeight: 800, color: "#ffffff", marginBottom: 12, letterSpacing: "-1px" }}>CompetitorPulse</div>
        <div style={{ fontSize: 28, color: "rgba(255,255,255,0.8)", fontWeight: 400 }}>Stop Manually Checking Competitor Prices</div>
        <div style={{ marginTop: 32, display: "flex", gap: 16 }}>
          <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: 12, padding: "10px 24px", fontSize: 20, color: "rgba(255,255,255,0.9)" }}>From $19/mo</div>
          <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: 12, padding: "10px 24px", fontSize: 20, color: "rgba(255,255,255,0.9)" }}>14-day Free Trial</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
