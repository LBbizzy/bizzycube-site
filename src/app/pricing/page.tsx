import Link from "next/link";
import { DEPTS, DEPT_ORDER } from "@/lib/departments";

export const metadata = { title: "Pricing — BizzyCube" };

export default function Page() {
  const min = Math.min(...DEPT_ORDER.map(s => parseInt(DEPTS[s].pricing[0].price.replace(/[^0-9]/g, "")) || 0));
  return (
    <>
      <section style={{ padding: "80px 24px 40px", maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
        <div style={{ fontSize: 11, color: "#5fd3f3", letterSpacing: ".14em", textTransform: "uppercase", fontWeight: 700, marginBottom: 14 }}>Pricing</div>
        <h1 style={{ fontSize: 56, fontWeight: 800, color: "#fff", letterSpacing: "-0.025em", lineHeight: 1.05, margin: "0 0 20px" }}>Pay for what you need. Add more when you&apos;re ready.</h1>
        <p style={{ fontSize: 18, color: "#cbd5e1", lineHeight: 1.6, maxWidth: 720, margin: "0 auto" }}>
          Every BizzyCube department works standalone or together. Start small. Scale when you see the ROI.
        </p>
      </section>

      <section style={{ padding: "30px 24px 60px", maxWidth: 1200, margin: "0 auto" }}>
        <div className="bz-grid bz-grid-3" style={{ gap: 18 }}>
          {[
            { name: "Single department", price: `From $${min}/mo`, sub: "Pick any one department. Pay only for what you need.", features: ["Full department, standalone", "Weekly approval queue", "DJ orchestrator access", "Mobile + web app", "Cancel anytime"], cta: "/departments", ctaLabel: "Pick a department →", best: false },
            { name: "Bundle of 3", price: "Save 15%", sub: "Mix and match any 3 departments. Best for businesses with multiple gaps to close.", features: ["Any 3 departments", "Integrated workflow (lead → CRM → follow-up)", "Combined approval queue", "Weekly cross-dept digest", "Priority response"], cta: "/contact?cta=bundle", ctaLabel: "Build my bundle →", best: true },
            { name: "Full workforce", price: "Save 25%", sub: "All 9 departments. Replaces a marketing person, a CRM admin, a bookkeeper, a content writer, an ad manager — and a few more.", features: ["All 9 departments", "Full DJ orchestrator", "Cross-department automation", "Custom integrations", "Dedicated onboarding"], cta: "/contact?cta=full", ctaLabel: "Get the workforce →", best: false },
          ].map(p => (
            <div key={p.name} style={{ background: p.best ? "linear-gradient(180deg, rgba(83, 74, 183, 0.12), #0e1119)" : "#0e1119", border: p.best ? "2px solid #2563eb" : "1px solid #1f2733", borderRadius: 14, padding: 28, position: "relative" }}>
              {p.best && <div style={{ position: "absolute", top: -12, left: 24, background: "#2563eb", color: "#fff", padding: "4px 12px", borderRadius: 6, fontSize: 11, fontWeight: 700, letterSpacing: ".06em" }}>MOST POPULAR</div>}
              <div style={{ fontSize: 20, fontWeight: 700, color: "#fff" }}>{p.name}</div>
              <div style={{ fontSize: 32, fontWeight: 800, color: "#fff", margin: "10px 0 8px", letterSpacing: "-0.02em" }}>{p.price}</div>
              <div style={{ fontSize: 13, color: "#94a3b8", lineHeight: 1.5, margin: "0 0 18px" }}>{p.sub}</div>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 22px", lineHeight: 2, fontSize: 14, color: "#cbd5e1" }}>
                {p.features.map(f => <li key={f}>✓ {f}</li>)}
              </ul>
              <Link href={p.cta} style={{ display: "block", textAlign: "center", background: p.best ? "#2563eb" : "transparent", color: "#fff", border: p.best ? "none" : "1px solid #2c333f", padding: "12px 16px", borderRadius: 10, fontSize: 14, fontWeight: 700 }}>
                {p.ctaLabel}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "60px 24px", background: "#0a0d14", borderTop: "1px solid #1f2733", borderBottom: "1px solid #1f2733" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontSize: 26, fontWeight: 800, color: "#fff", marginBottom: 22, textAlign: "center" }}>Department-by-department pricing</h2>
          <div style={{ background: "#0e1119", border: "1px solid #1f2733", borderRadius: 14, overflow: "hidden" }}>
            {DEPT_ORDER.map((slug, i) => {
              const d = DEPTS[slug];
              return (
                <Link key={slug} href={`/${slug}`} style={{ display: "grid", gridTemplateColumns: "50px 1fr 130px 30px", gap: 14, padding: "14px 18px", borderTop: i ? "1px solid #1f2733" : "none", fontSize: 14, alignItems: "center" }}>
                  <div style={{ fontSize: 24 }}>{d.emoji}</div>
                  <div>
                    <div style={{ color: "#fff", fontWeight: 600 }}>{d.name}</div>
                    <div style={{ color: "#94a3b8", fontSize: 12, marginTop: 2 }}>{d.tagline.slice(0, 70)}...</div>
                  </div>
                  <div style={{ color: "#fff", fontWeight: 700, textAlign: "right" }}>{d.pricing[0].price}</div>
                  <div style={{ color: "#5fd3f3", textAlign: "right" }}>→</div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section style={{ padding: "60px 24px", maxWidth: 900, margin: "0 auto" }}>
        <h2 style={{ fontSize: 26, fontWeight: 800, color: "#fff", marginBottom: 22, textAlign: "center" }}>BizzyCube vs the alternatives</h2>
        <div style={{ background: "#0e1119", border: "1px solid #1f2733", borderRadius: 14, overflow: "hidden" }}>
          {[
            ["BizzyCube full workforce", "~$3,000/mo", "All 9 depts, 24/7, integrated", "✓"],
            ["Hire your own team", "$25,000+/mo", "1 person per role, 40hr/wk", "limited"],
            ["Generic AI tools (Wix + ChatGPT + Mailchimp + …)", "$300-600/mo", "Whatever you can stitch together", "no"],
            ["DIY (you + nights and weekends)", "Your sanity", "Whatever survives the week", "no"],
          ].map((r, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1.6fr 0.4fr", padding: "16px 20px", borderTop: i ? "1px solid #1f2733" : "none", fontSize: 13.5, alignItems: "center", background: i === 0 ? "rgba(83, 74, 183, 0.08)" : "transparent" }}>
              <div style={{ color: i === 0 ? "#5fd3f3" : "#fff", fontWeight: i === 0 ? 700 : 500 }}>{r[0]}</div>
              <div style={{ color: "#cbd5e1" }}>{r[1]}</div>
              <div style={{ color: "#cbd5e1" }}>{r[2]}</div>
              <div style={{ color: r[3] === "✓" ? "#22c55e" : "#94a3b8", fontWeight: 700 }}>{r[3]}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: "linear-gradient(135deg, #1e1b4b 0%, #0e1119 100%)", padding: "70px 24px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: 32, fontWeight: 800, color: "#fff", margin: "0 0 14px" }}>Not sure which to pick?</h2>
          <p style={{ fontSize: 16, color: "#cbd5e1", margin: "0 0 26px", lineHeight: 1.6 }}>15-minute mapping call. We tell you exactly which 1-3 departments would move the needle first.</p>
          <Link href="/contact?cta=demo" style={{ display: "inline-block", background: "#2563eb", color: "#fff", padding: "15px 30px", borderRadius: 11, fontSize: 15, fontWeight: 700 }}>
            Book a 15-min demo →
          </Link>
        </div>
      </section>
    </>
  );
}
