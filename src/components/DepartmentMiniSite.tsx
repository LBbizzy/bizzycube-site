import Link from "next/link";
import { Dept, DEPTS } from "@/lib/departments";

export default function DepartmentMiniSite({ d }: { d: Dept }) {
  return (
    <>
      <section style={{ padding: "70px 24px 50px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ fontSize: 11, color: "#5fd3f3", letterSpacing: ".14em", textTransform: "uppercase", fontWeight: 700, marginBottom: 12 }}>
          {d.category}
        </div>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 22, flexWrap: "wrap" }}>
          <div style={{ fontSize: 56, lineHeight: 1 }}>{d.emoji}</div>
          <div style={{ flex: 1, minWidth: 280 }}>
            <h1 style={{ fontSize: 50, fontWeight: 800, color: "#fff", letterSpacing: "-0.025em", lineHeight: 1.05, margin: "0 0 16px" }}>
              {d.name}
            </h1>
            <p style={{ fontSize: 19, color: "#cbd5e1", lineHeight: 1.5, margin: "0 0 24px", maxWidth: 720 }}>
              {d.tagline}
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href={`/contact?cta=${d.slug}`} style={{ background: "#2563eb", color: "#fff", padding: "14px 28px", borderRadius: 10, fontSize: 15, fontWeight: 700 }}>
                Get {d.name} →
              </Link>
              <Link href="/pricing" style={{ background: "transparent", color: "#fff", padding: "14px 28px", borderRadius: 10, fontSize: 15, fontWeight: 600, border: "1px solid #2c333f" }}>
                See pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "50px 24px", background: "#0a0d14", borderTop: "1px solid #1f2733", borderBottom: "1px solid #1f2733" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <p style={{ fontSize: 17, color: "#cbd5e1", lineHeight: 1.7, margin: 0 }}>{d.pitch}</p>
        </div>
      </section>

      <section style={{ padding: "60px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ fontSize: 30, fontWeight: 800, color: "#fff", marginBottom: 30, letterSpacing: "-0.01em" }}>What you get</h2>
        <div className="bz-grid bz-grid-3">
          {d.outcomes.map((o) => (
            <div key={o} style={{ background: "#0e1119", border: "1px solid #1f2733", borderRadius: 14, padding: 22 }}>
              <div style={{ color: "#22c55e", fontSize: 22, marginBottom: 6 }}>✓</div>
              <div style={{ fontSize: 16, fontWeight: 600, color: "#fff", lineHeight: 1.4 }}>{o}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "10px 24px 60px", maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: "#fff", marginBottom: 20 }}>What&apos;s included</h2>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, columnCount: 2, columnGap: 32 }}>
          {d.features.map(f => (
            <li key={f} style={{ fontSize: 14, color: "#cbd5e1", lineHeight: 1.6, padding: "8px 0", breakInside: "avoid" }}>
              <span style={{ color: "#5fd3f3", marginRight: 8 }}>▸</span>{f}
            </li>
          ))}
        </ul>
      </section>

      <section style={{ padding: "50px 24px", background: "#0a0d14", borderTop: "1px solid #1f2733", borderBottom: "1px solid #1f2733" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          {d.pricing.map(p => (
            <div key={p.tier} style={{ background: "#0e1119", border: "2px solid #2563eb", borderRadius: 14, padding: 30 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 12 }}>
                <div>
                  <div style={{ fontSize: 11, color: "#5fd3f3", letterSpacing: ".14em", textTransform: "uppercase", fontWeight: 700 }}>Standalone</div>
                  <div style={{ fontSize: 22, fontWeight: 700, color: "#fff", marginTop: 4 }}>{p.tier}</div>
                </div>
                <div style={{ fontSize: 36, fontWeight: 800, color: "#fff", letterSpacing: "-0.02em" }}>{p.price}</div>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: "20px 0 22px", lineHeight: 2, fontSize: 14, color: "#cbd5e1" }}>
                {p.includes.map(i => <li key={i}>✓ {i}</li>)}
              </ul>
              <Link href={`/contact?cta=${d.slug}`} style={{ display: "block", textAlign: "center", background: "#2563eb", color: "#fff", padding: "14px 24px", borderRadius: 10, fontSize: 15, fontWeight: 700 }}>
                Get {d.name} →
              </Link>
              <div style={{ marginTop: 14, fontSize: 12, color: "#94a3b8", textAlign: "center" }}>
                Or bundle 3 departments and save 15%. <Link href="/pricing" style={{ color: "#5fd3f3" }}>See packages →</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "50px 24px", maxWidth: 800, margin: "0 auto" }}>
        <div style={{ background: "linear-gradient(135deg, #1e1b4b 0%, #0e1119 100%)", border: "1px solid #2c333f", borderRadius: 14, padding: 30 }}>
          <div style={{ fontSize: 11, color: "#22c55e", letterSpacing: ".14em", textTransform: "uppercase", fontWeight: 700, marginBottom: 8 }}>Proof</div>
          <p style={{ fontSize: 16, color: "#cbd5e1", lineHeight: 1.6, margin: 0 }}>{d.proof}</p>
          <Link href="/case-studies" style={{ color: "#5fd3f3", fontSize: 14, marginTop: 14, display: "inline-block" }}>{d.caseStudyHook} →</Link>
        </div>
      </section>

      <section style={{ padding: "50px 24px", background: "#0a0d14", borderTop: "1px solid #1f2733", borderBottom: "1px solid #1f2733" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ fontSize: 11, color: "#5fd3f3", letterSpacing: ".14em", textTransform: "uppercase", fontWeight: 700, marginBottom: 12, textAlign: "center" }}>The rest of the workforce</div>
          <h3 style={{ fontSize: 22, fontWeight: 700, color: "#fff", textAlign: "center", marginBottom: 22 }}>People who get {d.name} usually also need:</h3>
          <div className="bz-grid bz-grid-3" style={{ gap: 14 }}>
            {d.alsoBuy.map(slug => {
              const o = DEPTS[slug];
              if(!o) return null;
              return (
                <Link key={slug} href={`/${slug}`} style={{ background: "#0e1119", border: "1px solid #1f2733", borderRadius: 12, padding: 18, display: "block" }}>
                  <div style={{ fontSize: 24, marginBottom: 6 }}>{o.emoji}</div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 4 }}>{o.name}</div>
                  <div style={{ fontSize: 12, color: "#94a3b8", lineHeight: 1.5 }}>{o.tagline.slice(0, 80)}...</div>
                  <div style={{ marginTop: 10, fontSize: 12, color: "#5fd3f3" }}>Explore {o.name} →</div>
                </Link>
              );
            })}
          </div>
          <div style={{ textAlign: "center", marginTop: 24 }}>
            <Link href="/platform" style={{ color: "#cbd5e1", fontSize: 13 }}>Or see how the full BizzyCube workforce ties together →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
