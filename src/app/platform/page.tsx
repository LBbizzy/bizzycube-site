import Link from "next/link";
import { DEPTS, DEPT_ORDER } from "@/lib/departments";

export const metadata = { title: "How BizzyCube works — the AI workforce", description: "The platform behind BizzyCube — how nine AI departments work together as one unified workforce." };

export default function PlatformPage() {
  return (
    <>
      <section style={{ padding: "90px 24px 50px", maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
        <div style={{ fontSize: 11, color: "#5fd3f3", letterSpacing: ".14em", textTransform: "uppercase", fontWeight: 700, marginBottom: 14 }}>
          The BizzyCube platform
        </div>
        <h1 style={{ fontSize: 60, fontWeight: 800, color: "#fff", letterSpacing: "-0.025em", lineHeight: 1.05, margin: "0 0 22px", maxWidth: 900, marginLeft: "auto", marginRight: "auto" }}>
          One AI workforce. Nine specialists. Zero handoffs.
        </h1>
        <p style={{ fontSize: 19, color: "#cbd5e1", lineHeight: 1.6, maxWidth: 760, margin: "0 auto" }}>
          BizzyCube is not nine separate tools you stitch together. It&apos;s one unified workforce — built so the parts actually work as a whole. The lead your AI receptionist takes flows into your CRM, triggers a follow-up sequence, posts to your content calendar, and shows up in your weekly digest. All on its own. No prompts. No connectors. No IT department.
        </p>
      </section>

      <section style={{ padding: "30px 24px 60px", maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ background: "#0e1119", border: "1px solid #1f2733", borderRadius: 16, padding: 36 }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: "#fff", margin: "0 0 16px", letterSpacing: "-0.01em" }}>The third option</h2>
          <p style={{ fontSize: 16, color: "#cbd5e1", lineHeight: 1.7, margin: "0 0 14px" }}>
            Small business owners have always had two bad options. <b style={{ color: "#fff" }}>Hire ten specialists</b> — at $300k+/yr in salary and benefits — to run marketing, sales, accounting, web, social, ads, content, customer service, and ops. Or <b style={{ color: "#fff" }}>do it all yourself</b> — at the cost of your evenings, your weekends, and any chance of growing past where you are.
          </p>
          <p style={{ fontSize: 16, color: "#cbd5e1", lineHeight: 1.7, margin: "0 0 14px" }}>
            BizzyCube is the third option. One AI workforce that does the work of a full team — for a single monthly fee that costs less than one part-time hire.
          </p>
          <p style={{ fontSize: 16, color: "#cbd5e1", lineHeight: 1.7, margin: 0 }}>
            You stay the owner. You stay in control. You don&apos;t do the work.
          </p>
        </div>
      </section>

      <section style={{ padding: "70px 24px", background: "#0a0d14", borderTop: "1px solid #1f2733", borderBottom: "1px solid #1f2733" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 50 }}>
            <h2 style={{ fontSize: 38, fontWeight: 800, color: "#fff", margin: "0 0 16px", letterSpacing: "-0.01em" }}>How it works in your business</h2>
          </div>
          <div className="bz-grid bz-grid-4" style={{ gap: 18 }}>
            {[
              { n: "01", t: "You talk to DJ", b: "DJ is your AI orchestrator — your single point of contact. Chat, voice, text, email. You don&apos;t manage nine AIs. You manage DJ. DJ runs everything else." },
              { n: "02", t: "DJ dispatches the workforce", b: "Need a campaign? Marketing strategist designs it. Writer drafts copy. Web department builds the page. Sales department wires the form. They coordinate in real time — no Slack channels, no meetings." },
              { n: "03", t: "You approve. They ship.", b: "Everything routes through your approval queue. You see what&apos;s planned, what&apos;s ready, what shipped, what leads came in. Click approve, click reject. Less than 30 min/week." },
              { n: "04", t: "Weekly digest. Everything visible.", b: "Monday morning: what your AI workforce did last week, what they&apos;re planning this week, what leads came in, what to decide, what to celebrate. 5-minute read." },
            ].map(s => (
              <div key={s.n} style={{ background: "#0e1119", border: "1px solid #1f2733", borderRadius: 14, padding: 26 }}>
                <div style={{ fontSize: 36, fontWeight: 800, color: "#534AB7", letterSpacing: "-0.02em" }}>{s.n}</div>
                <div style={{ fontSize: 18, fontWeight: 700, color: "#fff", margin: "8px 0" }}>{s.t}</div>
                <div style={{ fontSize: 13.5, color: "#94a3b8", lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: s.b }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "70px 24px", maxWidth: 900, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <h2 style={{ fontSize: 38, fontWeight: 800, color: "#fff", margin: "0 0 16px", letterSpacing: "-0.01em" }}>Why integrated &gt; assembled</h2>
        </div>
        <div style={{ background: "#0e1119", border: "1px solid #1f2733", borderRadius: 14, padding: 30 }}>
          <p style={{ fontSize: 16, color: "#cbd5e1", lineHeight: 1.7, margin: "0 0 14px" }}>
            You could buy a marketing AI here, a CRM there, an AI receptionist somewhere else. You&apos;d spend the next year stitching them together — and they&apos;d still drop the ball every time data crossed a boundary.
          </p>
          <p style={{ fontSize: 16, color: "#cbd5e1", lineHeight: 1.7, margin: "0 0 14px" }}>
            BizzyCube was built as <b style={{ color: "#fff" }}>one product</b>. When the AI receptionist takes a call about an emergency AC repair, the lead is in your CRM in 12 seconds, the AI SDR follow-up sequence is queued, the content team logs a future blog idea about that pain point, and the owner gets a push notification with name, phone, and intent.
          </p>
          <p style={{ fontSize: 16, color: "#cbd5e1", lineHeight: 1.7, margin: 0 }}>
            That is a workforce. The stitched-together version is a Frankenstack.
          </p>
        </div>
      </section>

      <section style={{ padding: "70px 24px", background: "#0a0d14", borderTop: "1px solid #1f2733", borderBottom: "1px solid #1f2733" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ fontSize: 38, fontWeight: 800, color: "#fff", margin: "0 0 16px", letterSpacing: "-0.01em" }}>The nine departments behind DJ</h2>
            <p style={{ fontSize: 15, color: "#cbd5e1", lineHeight: 1.6, maxWidth: 700, margin: "0 auto" }}>
              You don&apos;t have to buy all of them. Pick the ones you need. Add more anytime. Each works alone — and works better with the others.
            </p>
          </div>
          <div className="bz-grid bz-grid-3" style={{ gap: 14 }}>
            {DEPT_ORDER.map(slug => {
              const d = DEPTS[slug];
              return (
                <Link key={slug} href={`/${slug}`} style={{ background: "#0e1119", border: "1px solid #1f2733", borderRadius: 12, padding: 20, display: "block" }}>
                  <div style={{ fontSize: 26, marginBottom: 8 }}>{d.emoji}</div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 6 }}>{d.name}</div>
                  <div style={{ fontSize: 12, color: "#94a3b8", lineHeight: 1.5 }}>{d.tagline.slice(0, 75)}...</div>
                  <div style={{ marginTop: 10, fontSize: 12, color: "#5fd3f3" }}>Explore →</div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section style={{ background: "linear-gradient(135deg, #1e1b4b 0%, #0e1119 100%)", padding: "70px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: 34, fontWeight: 800, color: "#fff", margin: "0 0 16px", letterSpacing: "-0.01em" }}>Want to see what your AI workforce would look like?</h2>
          <p style={{ fontSize: 16, color: "#cbd5e1", margin: "0 0 26px", lineHeight: 1.6 }}>15 minutes. We map your business. You leave with a real plan — even if you don&apos;t hire us.</p>
          <Link href="/contact?cta=demo" style={{ display: "inline-block", background: "#2563eb", color: "#fff", padding: "16px 36px", borderRadius: 11, fontSize: 15, fontWeight: 700 }}>
            Book a 15-min demo →
          </Link>
        </div>
      </section>
    </>
  );
}
