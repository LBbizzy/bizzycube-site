import CTAStrip from "@/components/CTAStrip";
import Link from "next/link";
export const metadata = { title: "Case studies — BizzyCube" };
export default function Page() {
  return (
    <>
      <section style={{ padding: "70px 24px 40px", maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
        <div style={{ fontSize: 11, color: "#B2D235", letterSpacing: ".14em", textTransform: "uppercase", fontWeight: 700, marginBottom: 12 }}>Case studies</div>
        <h1 style={{ fontSize: 50, fontWeight: 800, color: "#fff", letterSpacing: "-0.025em", lineHeight: 1.1, margin: "0 0 18px" }}>Real businesses. Real outcomes.</h1>
      </section>

      <section style={{ padding: "20px 24px 60px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ background: "#0e1119", border: "1px solid #1f2733", borderRadius: 14, padding: 32 }}>
          <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 18 }}>
            <div style={{ width: 56, height: 56, borderRadius: 12, background: "linear-gradient(135deg, #134e4a, #0f172a)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28 }}>🌵</div>
            <div>
              <div style={{ fontSize: 22, fontWeight: 700, color: "#fff" }}>Crest Air LLC</div>
              <div style={{ fontSize: 13, color: "#94a3b8" }}>HVAC · Tucson, AZ · Family-owned, 1 owner-operator</div>
            </div>
          </div>
          <p style={{ fontSize: 15, color: "#cbd5e1", lineHeight: 1.7, marginBottom: 22 }}>
            Crest Air came to us with no website that was converting, a Facebook page that hadn&apos;t been posted to in 4 months, and a Google Business Profile that was outranked by every Tucson competitor. The owner answered the phone himself between jobs.
          </p>
          <div className="bz-grid bz-grid-4" style={{ gap: 18, marginBottom: 22 }}>
            {[["30", "days to live"], ["6", "channels active"], ["3/week", "content drafts"], ["< 90s", "lead → owner"]].map(s => (
              <div key={s[1] as string}>
                <div style={{ fontSize: 32, fontWeight: 800, color: "#B2D235" }}>{s[0]}</div>
                <div style={{ fontSize: 12, color: "#94a3b8", marginTop: 2 }}>{s[1]}</div>
              </div>
            ))}
          </div>
          <div style={{ fontSize: 13, color: "#cbd5e1", borderLeft: "3px solid #B2D235", padding: "8px 14px", background: "#0a0d14", borderRadius: 6 }}>
            &quot;Phone&apos;s ringing again. That&apos;s the whole report.&quot; — Owner, Crest Air
          </div>
        </div>

        <div style={{ marginTop: 24, textAlign: "center", color: "#94a3b8", fontSize: 13 }}>
          More case studies shipping soon — restaurants, salons, consultants. <Link href="/contact?cta=case-study" style={{ color: "#B2D235" }}>Want to be next? →</Link>
        </div>
      </section>

      <CTAStrip />
    </>
  );
}
