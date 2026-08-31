import Link from "next/link";
import { DEPTS, DEPT_ORDER, CATEGORIES } from "@/lib/departments";

export const metadata = { title: "All departments — BizzyCube", description: "Every department in the BizzyCube AI workforce. Pick one, pick three, pick all nine." };

export default function DepartmentsPage() {
  return (
    <>
      <section style={{ padding: "80px 24px 40px", maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
        <div style={{ fontSize: 11, color: "#B2D235", letterSpacing: ".14em", textTransform: "uppercase", fontWeight: 700, marginBottom: 14 }}>The workforce</div>
        <h1 style={{ fontSize: 56, fontWeight: 800, color: "#fff", letterSpacing: "-0.025em", lineHeight: 1.05, margin: "0 0 20px" }}>Nine departments. One workforce.</h1>
        <p style={{ fontSize: 18, color: "#cbd5e1", lineHeight: 1.6, maxWidth: 720, margin: "0 auto" }}>
          Each department runs as its own service — pick one if that&apos;s all you need. Bundle three for a discount. Or hire the full workforce.
        </p>
      </section>

      {CATEGORIES.map(c => (
        <section key={c.name} style={{ padding: "40px 24px", maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 28, fontWeight: 800, color: "#fff", letterSpacing: "-0.01em" }}>{c.emoji} {c.name}</div>
          </div>
          <div className="bz-grid bz-grid-3">
            {c.depts.map(slug => {
              const d = DEPTS[slug];
              return (
                <Link key={slug} href={`/${slug}`} style={{ background: "#0e1119", border: "1px solid #1f2733", borderRadius: 14, padding: 22, display: "block" }}>
                  <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <div style={{ fontSize: 32 }}>{d.emoji}</div>
                    <div style={{ minWidth: 0, flex: 1 }}>
                      <div style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 6 }}>{d.name}</div>
                      <div style={{ fontSize: 13, color: "#94a3b8", lineHeight: 1.5 }}>{d.tagline}</div>
                      <div style={{ marginTop: 14, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ fontSize: 12, color: "#cbd5e1" }}>From <b style={{ color: "#fff" }}>{d.pricing[0].price}</b></span>
                        <span style={{ color: "#B2D235", fontSize: 13, fontWeight: 600 }}>Explore →</span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      ))}

      <section style={{ background: "linear-gradient(135deg, #1e1b4b 0%, #0e1119 100%)", padding: "70px 24px", marginTop: 40 }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: 32, fontWeight: 800, color: "#fff", margin: "0 0 14px" }}>Not sure where to start?</h2>
          <p style={{ fontSize: 16, color: "#cbd5e1", margin: "0 0 26px", lineHeight: 1.6 }}>The 15-min mapping call shows you exactly which 1-3 departments would move the needle for YOUR business first.</p>
          <Link href="/contact?cta=demo" style={{ display: "inline-block", background: "#483A84", color: "#fff", padding: "15px 30px", borderRadius: 11, fontSize: 15, fontWeight: 700 }}>
            Book a 15-min demo →
          </Link>
        </div>
      </section>
    </>
  );
}
