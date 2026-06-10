import CTAStrip from "@/components/CTAStrip";
import Link from "next/link";
export const metadata = { title: "How it works — BizzyCube", description: "Nine AI departments. One orchestrator. Less than 30 minutes of your time per week." };
export default function Page() {
  return (
    <>
      <section style={{ padding: "70px 24px 40px", maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
        <div style={{ fontSize: 11, color: "#5fd3f3", letterSpacing: ".14em", textTransform: "uppercase", fontWeight: 700, marginBottom: 12 }}>How it works</div>
        <h1 style={{ fontSize: 50, fontWeight: 800, color: "#fff", letterSpacing: "-0.025em", lineHeight: 1.1, margin: "0 0 18px" }}>An AI team that runs your business — and reports to you weekly.</h1>
        <p style={{ fontSize: 18, color: "#cbd5e1", lineHeight: 1.6, maxWidth: 720, margin: "0 auto" }}>
          You don&apos;t manage AI. You manage one person — DJ — who manages everything else.
        </p>
      </section>

      <section style={{ padding: "20px 24px 60px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: 20 }}>
          {[
            { n: "01", t: "You talk to DJ", b: "Chat, voice, app, email — whatever you prefer. DJ understands plain English. No dashboards to learn." },
            { n: "02", t: "DJ dispatches the fleet", b: "Marketing strategist plans the campaign. Writer drafts the post. Developer builds the page. They handle the work; you don&apos;t see the noise." },
            { n: "03", t: "You approve, they ship", b: "Everything goes through your approval queue first. You see what&apos;s planned, what&apos;s ready, what posted, what leads came in." },
            { n: "04", t: "Weekly digest", b: "Every Monday: what shipped last week, what&apos;s queued, where leads came from, what to decide. 5-minute read." },
          ].map(s => (
            <div key={s.n} style={{ background: "#0e1119", border: "1px solid #1f2733", borderRadius: 14, padding: 24 }}>
              <div style={{ fontSize: 32, fontWeight: 800, color: "#534AB7" }}>{s.n}</div>
              <div style={{ fontSize: 17, fontWeight: 700, color: "#fff", margin: "8px 0" }}>{s.t}</div>
              <div style={{ fontSize: 13.5, color: "#94a3b8", lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: s.b }} />
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "50px 24px", background: "#0a0d14", borderTop: "1px solid #1f2733", borderBottom: "1px solid #1f2733" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: 32, fontWeight: 800, color: "#fff", margin: "0 0 14px" }}>What you actually do each week</h2>
          <p style={{ fontSize: 16, color: "#cbd5e1", lineHeight: 1.7, maxWidth: 700, margin: "0 auto 30px" }}>
            Approve content the team drafted. Review leads that came in. Make the 1-2 business decisions DJ flagged. Done.
          </p>
          <div style={{ background: "#0e1119", border: "1px solid #1f2733", borderRadius: 14, padding: 24, textAlign: "left", maxWidth: 600, margin: "0 auto" }}>
            <div style={{ fontSize: 13, color: "#22c55e", fontWeight: 700, marginBottom: 12 }}>YOUR TYPICAL TUESDAY MORNING</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 2.1, fontSize: 14, color: "#cbd5e1" }}>
              <li>✓ Open the app — see 5 content drafts ready to approve (2 min)</li>
              <li>✓ Tap approve on 4, reject 1 with a note (1 min)</li>
              <li>✓ Look at the 3 new leads from last 24h (3 min)</li>
              <li>✓ DJ asks: &quot;run the spring promo same as last year?&quot; — yes (10 sec)</li>
              <li>✓ Close the app</li>
            </ul>
            <div style={{ fontSize: 13, color: "#fbbf24", fontWeight: 700, marginTop: 16, paddingTop: 14, borderTop: "1px solid #2c333f" }}>Total: 7 minutes. Repeat 3x/week.</div>
          </div>
        </div>
      </section>

      <CTAStrip title="See it in action with your business" sub="We map your funnel live on the 15-min call. No prep needed." />
    </>
  );
}
