import CTAStrip from "@/components/CTAStrip";
import Link from "next/link";
export const metadata = { title: "Pricing — BizzyCube", description: "One flat monthly fee. Less than a part-time marketing hire." };
export default function Page() {
  return (
    <>
      <section style={{ padding: "70px 24px 40px", maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
        <div style={{ fontSize: 11, color: "#5fd3f3", letterSpacing: ".14em", textTransform: "uppercase", fontWeight: 700, marginBottom: 12 }}>Pricing</div>
        <h1 style={{ fontSize: 50, fontWeight: 800, color: "#fff", letterSpacing: "-0.025em", lineHeight: 1.1, margin: "0 0 18px" }}>Less than one part-time hire. More work done than a full team.</h1>
      </section>

      <section style={{ padding: "20px 24px 60px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: 20 }}>
          {[
            { name: "Starter", price: "$497/mo", best: false, features: ["DJ AI receptionist", "1 social channel", "Weekly blog post", "Lead capture forms", "CRM + auto follow-up", "Weekly digest"], cta: "/contact?cta=starter" },
            { name: "Growth", price: "$1,497/mo", best: true, features: ["Everything in Starter", "All 6 social platforms", "Video + thumbnail generation", "Full content calendar", "AI Search SEO", "Industry-specific funnel", "Custom landing pages"], cta: "/contact?cta=growth" },
            { name: "Scale", price: "Talk to us", best: false, features: ["Everything in Growth", "Multi-location support", "Custom integrations", "Dedicated department AI", "Priority response", "Strategic call quarterly"], cta: "/contact?cta=scale" },
          ].map(p => (
            <div key={p.name} style={{ background: p.best ? "linear-gradient(180deg, rgba(83, 74, 183, 0.12), #0e1119)" : "#0e1119", border: p.best ? "2px solid #2563eb" : "1px solid #1f2733", borderRadius: 14, padding: 28, position: "relative" }}>
              {p.best && <div style={{ position: "absolute", top: -12, left: 24, background: "#2563eb", color: "#fff", padding: "4px 12px", borderRadius: 6, fontSize: 11, fontWeight: 700, letterSpacing: ".06em" }}>MOST POPULAR</div>}
              <div style={{ fontSize: 20, fontWeight: 700, color: "#fff" }}>{p.name}</div>
              <div style={{ fontSize: 36, fontWeight: 800, color: "#fff", margin: "10px 0 18px", letterSpacing: "-0.02em" }}>{p.price}</div>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", lineHeight: 2, fontSize: 14, color: "#cbd5e1" }}>
                {p.features.map(f => <li key={f}>✓ {f}</li>)}
              </ul>
              <Link href={p.cta} style={{ display: "block", textAlign: "center", background: p.best ? "#2563eb" : "transparent", color: "#fff", border: p.best ? "none" : "1px solid #2c333f", padding: "12px 16px", borderRadius: 10, fontSize: 14, fontWeight: 700 }}>
                Get started →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "50px 24px", background: "#0a0d14", borderTop: "1px solid #1f2733", borderBottom: "1px solid #1f2733" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: "#fff", marginBottom: 24, textAlign: "center" }}>vs. the alternatives</h2>
          <div style={{ background: "#0e1119", border: "1px solid #1f2733", borderRadius: 14, overflow: "hidden" }}>
            {[
              ["BizzyCube Growth", "$1,497/mo", "All 9 depts, 24/7", "✓"],
              ["Part-time marketing person", "$2,500–$4,000/mo", "1-2 channels", "limited"],
              ["Full-service agency", "$5,000+/mo", "All channels", "✓"],
              ["DIY (you + 4 tools)", "$300/mo + 20 hrs/wk", "Whatever you can do", "no"],
            ].map((r, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1.5fr 0.5fr", padding: "14px 18px", borderTop: i ? "1px solid #1f2733" : "none", fontSize: 13.5, alignItems: "center", background: i === 0 ? "rgba(83, 74, 183, 0.08)" : "transparent" }}>
                <div style={{ color: i === 0 ? "#5fd3f3" : "#fff", fontWeight: i === 0 ? 700 : 500 }}>{r[0]}</div>
                <div style={{ color: "#cbd5e1" }}>{r[1]}</div>
                <div style={{ color: "#cbd5e1" }}>{r[2]}</div>
                <div style={{ color: r[3] === "✓" ? "#22c55e" : "#94a3b8", fontWeight: 700 }}>{r[3]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip />
    </>
  );
}
