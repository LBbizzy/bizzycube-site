import Link from "next/link";
export const metadata = { title: "About — BizzyCube" };
export default function Page() {
  return (
    <>
      <section style={{ padding: "80px 24px 40px", maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
        <div style={{ fontSize: 11, color: "#B2D235", letterSpacing: ".14em", textTransform: "uppercase", fontWeight: 700, marginBottom: 14 }}>About</div>
        <h1 style={{ fontSize: 52, fontWeight: 800, color: "#fff", letterSpacing: "-0.025em", lineHeight: 1.1, margin: "0 0 22px" }}>We built BizzyCube because small business deserves a fair fight.</h1>
        <p style={{ fontSize: 18, color: "#cbd5e1", lineHeight: 1.7 }}>
          Enterprise has 200-person marketing teams. Small business has the owner, two part-timers, and a Wix subscription. BizzyCube closes the gap.
        </p>
      </section>

      <section style={{ padding: "30px 24px 60px", maxWidth: 800, margin: "0 auto" }}>
        <div style={{ background: "#0e1119", border: "1px solid #1f2733", borderRadius: 14, padding: 32, marginBottom: 18 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: "#fff", marginTop: 0, marginBottom: 16 }}>The bet</h2>
          <p style={{ fontSize: 15, color: "#cbd5e1", lineHeight: 1.7, margin: "0 0 14px" }}>
            Most small businesses don&apos;t need a marketing person. They don&apos;t need a CRM admin. They don&apos;t need a bookkeeper, an ads manager, a content writer, a web developer, or a receptionist.
          </p>
          <p style={{ fontSize: 15, color: "#cbd5e1", lineHeight: 1.7, margin: "0 0 14px" }}>
            They need <b style={{ color: "#fff" }}>all nine of them at once</b> — and they can&apos;t afford any of them at $50-200k apiece.
          </p>
          <p style={{ fontSize: 15, color: "#cbd5e1", lineHeight: 1.7, margin: 0 }}>
            So we built one AI workforce that covers all nine. One DJ orchestrator. Nine specialist departments. One monthly fee.
          </p>
        </div>

        <div style={{ background: "#0e1119", border: "1px solid #1f2733", borderRadius: 14, padding: 32 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: "#fff", marginTop: 0, marginBottom: 16 }}>What we&apos;re NOT</h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 2.2, fontSize: 14.5, color: "#cbd5e1" }}>
            <li>✗ Not a marketing agency (we do marketing AND eight other things)</li>
            <li>✗ Not a chatbot you bolt onto your site</li>
            <li>✗ Not a SaaS platform with 100 features you&apos;ll never use</li>
            <li>✗ Not a consultant who shows up for 30 days and disappears</li>
          </ul>
          <h3 style={{ fontSize: 17, fontWeight: 700, color: "#B2D235", margin: "20px 0 8px" }}>What we ARE</h3>
          <p style={{ fontSize: 15, color: "#cbd5e1", lineHeight: 1.7, margin: 0 }}>
            An AI workforce. We do the work. You approve and ship. We integrate with each other. We never quit. We don&apos;t take vacation. And we cost less than one part-time hire.
          </p>
        </div>
      </section>

      <section style={{ background: "linear-gradient(135deg, #1e1b4b 0%, #0e1119 100%)", padding: "70px 24px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <Link href="/contact?cta=demo" style={{ display: "inline-block", background: "#483A84", color: "#fff", padding: "15px 30px", borderRadius: 11, fontSize: 15, fontWeight: 700 }}>
            Book a 15-min demo →
          </Link>
        </div>
      </section>
    </>
  );
}
