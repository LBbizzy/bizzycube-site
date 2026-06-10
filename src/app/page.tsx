import Link from "next/link";
import { CATEGORIES, DEPTS } from "@/lib/departments";

export default function HomePage() {
  return (
    <>
      <section style={{ padding: "100px 24px 70px", maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
        <div style={{ display: "inline-block", background: "rgba(83, 74, 183, 0.15)", color: "#a78bfa", fontSize: 12, fontWeight: 700, padding: "6px 14px", borderRadius: 20, letterSpacing: ".08em", textTransform: "uppercase", marginBottom: 24 }}>
          THE AI WORKFORCE FOR SMALL BUSINESS
        </div>
        <h1 style={{ fontSize: 72, fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1, margin: "0 0 26px", maxWidth: 1000, marginLeft: "auto", marginRight: "auto" }}>
          Hire one <span style={{ background: "linear-gradient(135deg, #5fd3f3, #534AB7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>AI workforce.</span><br/>
          Replace ten specialists.
        </h1>
        <p style={{ fontSize: 21, color: "#cbd5e1", lineHeight: 1.5, maxWidth: 760, margin: "0 auto 40px" }}>
          BizzyCube is an AI team that runs the parts of your business you can&apos;t do yourself — and shouldn&apos;t have to pay ten people to do. Pick what you need. Add more anytime. Pay less than one employee.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 16 }}>
          <Link href="/contact?cta=demo" style={{ background: "#2563eb", color: "#fff", padding: "17px 36px", borderRadius: 11, fontSize: 16, fontWeight: 700, boxShadow: "0 8px 24px rgba(37, 99, 235, 0.3)" }}>
            Book a 15-min demo →
          </Link>
          <Link href="/platform" style={{ background: "transparent", color: "#fff", padding: "17px 36px", borderRadius: 11, fontSize: 16, fontWeight: 600, border: "1px solid #2c333f" }}>
            How BizzyCube works
          </Link>
        </div>
        <div style={{ fontSize: 12, color: "#94a3b8" }}>
          No credit card. No pitch. We map your business live on the call.
        </div>
      </section>

      <section style={{ padding: "30px 24px 40px", borderTop: "1px solid #1f2733", borderBottom: "1px solid #1f2733", background: "#0a0d14" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 11, color: "#94a3b8", letterSpacing: ".14em", textTransform: "uppercase", fontWeight: 700, marginBottom: 18 }}>
            Built for any small business — HVAC, restaurants, salons, agencies, consultants, real estate, retail, services
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <h2 style={{ fontSize: 42, fontWeight: 800, color: "#fff", margin: "0 0 18px", letterSpacing: "-0.015em" }}>What do you need most right now?</h2>
          <p style={{ fontSize: 17, color: "#cbd5e1", lineHeight: 1.6, maxWidth: 680, margin: "0 auto" }}>
            Start with one. Add more when you&apos;re ready. Every part of BizzyCube works on its own — and works better with the others.
          </p>
        </div>
        <div className="bz-grid bz-grid-3">
          {CATEGORIES.map(c => {
            const firstDept = DEPTS[c.depts[0]];
            return (
              <Link key={c.name} href={`/${firstDept.slug}`} style={{ background: "#0e1119", border: "1px solid #1f2733", borderRadius: 16, padding: 28, display: "block", transition: "border-color 0.15s" }}>
                <div style={{ fontSize: 36, marginBottom: 14 }}>{c.emoji}</div>
                <div style={{ fontSize: 22, fontWeight: 700, color: "#fff", marginBottom: 10 }}>{c.name}</div>
                <div style={{ fontSize: 13, color: "#94a3b8", lineHeight: 1.6, marginBottom: 18 }}>
                  {c.depts.length === 1 ? "1 service" : `${c.depts.length} services`} — {c.depts.map(s => DEPTS[s].name.replace(/^AI /, "")).join(" · ")}
                </div>
                <div style={{ color: "#5fd3f3", fontSize: 14, fontWeight: 600 }}>Explore →</div>
              </Link>
            );
          })}
        </div>
      </section>

      <section style={{ padding: "80px 24px", background: "#0a0d14", borderTop: "1px solid #1f2733", borderBottom: "1px solid #1f2733" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 11, color: "#5fd3f3", letterSpacing: ".14em", textTransform: "uppercase", fontWeight: 700, marginBottom: 12 }}>The point of BizzyCube</div>
          <h2 style={{ fontSize: 42, fontWeight: 800, color: "#fff", margin: "0 0 22px", letterSpacing: "-0.015em" }}>One workforce. Every job. Less than one employee.</h2>
          <p style={{ fontSize: 18, color: "#cbd5e1", lineHeight: 1.7, marginBottom: 32 }}>
            You can&apos;t afford a marketing director, a head of sales, a controller, a CTO, and an ops lead. You also can&apos;t do all five jobs yourself. BizzyCube is the third option.
          </p>
          <Link href="/platform" style={{ display: "inline-block", background: "transparent", color: "#fff", padding: "15px 30px", borderRadius: 10, fontSize: 15, fontWeight: 600, border: "1px solid #5fd3f3" }}>
            See how BizzyCube works →
          </Link>
        </div>
      </section>

      <section style={{ padding: "80px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 11, color: "#22c55e", letterSpacing: ".14em", textTransform: "uppercase", fontWeight: 700, marginBottom: 12 }}>Proof</div>
          <h2 style={{ fontSize: 38, fontWeight: 800, color: "#fff", margin: "0 0 16px", letterSpacing: "-0.01em" }}>Crest Air — invisible to 12 leads a week.</h2>
          <p style={{ fontSize: 16, color: "#cbd5e1", lineHeight: 1.6, maxWidth: 680, margin: "0 auto" }}>
            Family-owned HVAC company in Tucson. Started with BizzyCube on day one. Here&apos;s 30 days in.
          </p>
        </div>
        <div style={{ background: "#0e1119", border: "1px solid #1f2733", borderRadius: 16, padding: 36 }}>
          <div className="bz-grid bz-grid-4" style={{ gap: 24 }}>
            {[
              ["30", "days to live"],
              ["6", "channels active"],
              ["12+/wk", "qualified leads"],
              ["< 90s", "lead → owner's phone"],
            ].map(s => (
              <div key={s[1]}>
                <div style={{ fontSize: 40, fontWeight: 800, color: "#5fd3f3", letterSpacing: "-0.02em" }}>{s[0]}</div>
                <div style={{ fontSize: 13, color: "#cbd5e1", marginTop: 6, fontWeight: 600 }}>{s[1]}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 24 }}>
            <Link href="/case-studies" style={{ color: "#5fd3f3", fontSize: 14, fontWeight: 600 }}>Read the full Crest Air case study →</Link>
          </div>
        </div>
      </section>

      <section style={{ background: "linear-gradient(135deg, #1e1b4b 0%, #0e1119 100%)", padding: "70px 24px", margin: "60px 0 0", borderTop: "1px solid #2c333f", borderBottom: "1px solid #2c333f" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: 36, fontWeight: 800, color: "#fff", margin: "0 0 18px", letterSpacing: "-0.01em" }}>See what BizzyCube would do for YOUR business.</h2>
          <p style={{ fontSize: 16, color: "#cbd5e1", lineHeight: 1.6, margin: "0 0 28px" }}>
            15-minute call. No pitch. We map your business live and show you what your AI workforce would handle.
          </p>
          <Link href="/contact?cta=demo" style={{ display: "inline-block", background: "#2563eb", color: "#fff", padding: "16px 36px", borderRadius: 11, fontSize: 15, fontWeight: 700 }}>
            Book a 15-min demo →
          </Link>
        </div>
      </section>
    </>
  );
}
