import Link from "next/link";
import CTAStrip from "@/components/CTAStrip";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section style={{ padding: "80px 24px 60px", maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
        <div style={{ display: "inline-block", background: "rgba(83, 74, 183, 0.15)", color: "#a78bfa", fontSize: 12, fontWeight: 700, padding: "6px 14px", borderRadius: 20, letterSpacing: ".08em", textTransform: "uppercase", marginBottom: 20 }}>
          BUILT FOR SMBs THAT CAN&apos;T AFFORD A FULL MARKETING TEAM
        </div>
        <h1 style={{ fontSize: 60, fontWeight: 800, color: "#fff", letterSpacing: "-0.025em", lineHeight: 1.05, margin: "0 0 22px", maxWidth: 900, marginLeft: "auto", marginRight: "auto" }}>
          One AI team that runs your <span style={{ background: "linear-gradient(135deg, #5fd3f3, #534AB7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>entire marketing operation.</span>
        </h1>
        <p style={{ fontSize: 19, color: "#cbd5e1", lineHeight: 1.6, maxWidth: 680, margin: "0 auto 36px" }}>
          Content, social, ads, blog, email, SMS, lead routing, and follow-up — all run by one AI team that costs less than a single part-time hire. Built on the War Room platform.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 18 }}>
          <Link href="/contact?cta=demo" style={{ background: "#2563eb", color: "#fff", padding: "16px 32px", borderRadius: 10, fontSize: 16, fontWeight: 700, boxShadow: "0 8px 24px rgba(37, 99, 235, 0.3)" }}>
            Book a 15-min demo →
          </Link>
          <Link href="/how-it-works" style={{ background: "transparent", color: "#fff", padding: "16px 32px", borderRadius: 10, fontSize: 16, fontWeight: 600, border: "1px solid #2c333f" }}>
            See how it works
          </Link>
        </div>
        <div style={{ fontSize: 12, color: "#94a3b8" }}>
          No credit card. No sales pressure. We map your funnel live in the call.
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section style={{ padding: "30px 24px 40px", borderTop: "1px solid #1f2733", borderBottom: "1px solid #1f2733", background: "#0a0d14" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 11, color: "#94a3b8", letterSpacing: ".14em", textTransform: "uppercase", fontWeight: 700, marginBottom: 18 }}>
            Built for businesses like
          </div>
          <div style={{ display: "flex", gap: 32, justifyContent: "center", flexWrap: "wrap", color: "#cbd5e1", fontSize: 15, fontWeight: 600 }}>
            <span>HVAC</span><span>·</span><span>Roofing</span><span>·</span><span>Real estate</span><span>·</span><span>Restaurants</span><span>·</span><span>Salons</span><span>·</span><span>Consultants</span>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section style={{ padding: "70px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <div style={{ fontSize: 11, color: "#5fd3f3", letterSpacing: ".14em", textTransform: "uppercase", fontWeight: 700, marginBottom: 10 }}>The problem</div>
          <h2 style={{ fontSize: 38, fontWeight: 800, color: "#fff", margin: "0 0 16px", letterSpacing: "-0.01em" }}>You&apos;re paying for marketing that doesn&apos;t talk to itself.</h2>
          <p style={{ fontSize: 16, color: "#cbd5e1", lineHeight: 1.6, maxWidth: 720, margin: "0 auto" }}>
            One person posts to Instagram. Another writes the blog. A third runs Google Ads. Your CRM lives in a fourth place. Nobody is connecting the dots — and the leads that come in get cold within an hour.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
          {[
            { icon: "💸", title: "$3,000+/mo on a marketing person", body: "Who handles two channels. Maybe three. And takes vacation." },
            { icon: "🕐", title: "Leads die in the inbox", body: "The average small business takes 47 hours to call back a web lead. Most are gone by then." },
            { icon: "📉", title: "No idea what's working", body: "Posts go out. Ads run. But you can't say which one made the phone ring." },
          ].map(c => (
            <div key={c.title} style={{ background: "#0e1119", border: "1px solid #1f2733", borderRadius: 14, padding: 24 }}>
              <div style={{ fontSize: 28, marginBottom: 10 }}>{c.icon}</div>
              <div style={{ fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 8 }}>{c.title}</div>
              <div style={{ fontSize: 13, color: "#94a3b8", lineHeight: 1.5 }}>{c.body}</div>
            </div>
          ))}
        </div>
      </section>

      {/* THE SOLUTION */}
      <section style={{ padding: "70px 24px", background: "#0a0d14", borderTop: "1px solid #1f2733", borderBottom: "1px solid #1f2733" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 50 }}>
            <div style={{ fontSize: 11, color: "#22c55e", letterSpacing: ".14em", textTransform: "uppercase", fontWeight: 700, marginBottom: 10 }}>The BizzyCube way</div>
            <h2 style={{ fontSize: 38, fontWeight: 800, color: "#fff", margin: "0 0 16px", letterSpacing: "-0.01em" }}>One AI team. Nine departments. Zero silos.</h2>
            <p style={{ fontSize: 16, color: "#cbd5e1", lineHeight: 1.6, maxWidth: 720, margin: "0 auto" }}>
              DJ — your AI orchestrator — runs nine specialist AI departments. They talk to each other in real time. A lead from Instagram is in your CRM, qualified, and getting a follow-up SMS in under 90 seconds.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 14 }}>
            {[
              { icon: "💬", name: "Sales & CRM", body: "Captures, qualifies, routes. AI SDR follows up like a tireless rep." },
              { icon: "📢", name: "Marketing", body: "Plans campaigns, runs ads, A/B tests, kills losers, scales winners." },
              { icon: "✍️", name: "Content", body: "Blog, social, video, thumbnails. Approves through you, posts when scheduled." },
              { icon: "🌐", name: "Web", body: "Your site stays current. New pages, SEO, AI search visibility — automatic." },
              { icon: "📞", name: "Comms", body: "AI receptionist takes calls. Routes hot leads to your phone in seconds." },
              { icon: "📊", name: "Accounting", body: "Books, tax lots, P&L. Bookkeeper agent reconciles weekly." },
              { icon: "🔬", name: "R&D", body: "Competitive teardowns. What's working in your industry, in real time." },
              { icon: "⚙️", name: "Ops", body: "Dashboards, alerts, weekly digest. You see exactly what shipped." },
              { icon: "🤝", name: "Onboarding", body: "First 30 days — we set up everything. You approve, we ship." },
            ].map(d => (
              <div key={d.name} style={{ background: "#0e1119", border: "1px solid #1f2733", borderRadius: 12, padding: 18 }}>
                <div style={{ fontSize: 24, marginBottom: 8 }}>{d.icon}</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 5 }}>{d.name}</div>
                <div style={{ fontSize: 12, color: "#94a3b8", lineHeight: 1.5 }}>{d.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3-STEP PROCESS */}
      <section style={{ padding: "70px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <div style={{ fontSize: 11, color: "#5fd3f3", letterSpacing: ".14em", textTransform: "uppercase", fontWeight: 700, marginBottom: 10 }}>How we start</div>
          <h2 style={{ fontSize: 38, fontWeight: 800, color: "#fff", margin: "0 0 16px", letterSpacing: "-0.01em" }}>Live in 30 days. Real leads in week one.</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          {[
            { n: "01", title: "15-min mapping call", body: "We map your current funnel live. Show you what&apos;s leaking. No pitch — just real diagnosis." },
            { n: "02", title: "Onboarding week", body: "We wire your CRM, set up DJ as your AI receptionist, build your first 6 web pages, and stand up content automation." },
            { n: "03", title: "Weekly approval rhythm", body: "Every week you see the content queue, approve what ships, see the leads, hear DJ&apos;s analysis. Less than 30 min of your time." },
          ].map(s => (
            <div key={s.n} style={{ background: "#0e1119", border: "1px solid #1f2733", borderRadius: 14, padding: 26 }}>
              <div style={{ fontSize: 36, fontWeight: 800, color: "#534AB7", letterSpacing: "-0.02em" }}>{s.n}</div>
              <div style={{ fontSize: 18, fontWeight: 700, color: "#fff", margin: "8px 0" }}>{s.title}</div>
              <div style={{ fontSize: 13.5, color: "#94a3b8", lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: s.body }} />
            </div>
          ))}
        </div>
      </section>

      {/* CASE STUDY TEASER */}
      <section style={{ padding: "70px 24px", background: "#0a0d14", borderTop: "1px solid #1f2733", borderBottom: "1px solid #1f2733" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div style={{ fontSize: 11, color: "#22c55e", letterSpacing: ".14em", textTransform: "uppercase", fontWeight: 700, marginBottom: 10 }}>Proof</div>
            <h2 style={{ fontSize: 38, fontWeight: 800, color: "#fff", margin: "0 0 16px", letterSpacing: "-0.01em" }}>Crest Air — Tucson HVAC, 0 to live in 30 days.</h2>
          </div>
          <div style={{ background: "#0e1119", border: "1px solid #1f2733", borderRadius: 14, padding: 32 }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 24, marginBottom: 24 }}>
              {[
                ["6", "platforms live", "FB, IG, GBP, YouTube, blog, TikTok"],
                ["12", "AI content drafts / week", "Approved & posted on your schedule"],
                ["< 90s", "lead → text to owner", "AI receptionist + Ship 548 routing"],
                ["$0", "extra hires", "DJ runs the team"],
              ].map((s) => (
                <div key={s[1]}>
                  <div style={{ fontSize: 36, fontWeight: 800, color: "#5fd3f3", letterSpacing: "-0.02em" }}>{s[0]}</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#fff", marginTop: 4 }}>{s[1]}</div>
                  <div style={{ fontSize: 12, color: "#94a3b8", marginTop: 4, lineHeight: 1.5 }}>{s[2]}</div>
                </div>
              ))}
            </div>
            <Link href="/case-studies" style={{ display: "inline-block", color: "#5fd3f3", fontSize: 14, fontWeight: 600 }}>
              Read the full Crest Air case study →
            </Link>
          </div>
        </div>
      </section>

      <CTAStrip />
    </>
  );
}
