import CTAStrip from "@/components/CTAStrip";
export const metadata = { title: "About — BizzyCube" };
export default function Page() {
  return (
    <>
      <section style={{ padding: "70px 24px 40px", maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
        <div style={{ fontSize: 11, color: "#5fd3f3", letterSpacing: ".14em", textTransform: "uppercase", fontWeight: 700, marginBottom: 12 }}>About</div>
        <h1 style={{ fontSize: 50, fontWeight: 800, color: "#fff", letterSpacing: "-0.025em", lineHeight: 1.1, margin: "0 0 22px" }}>We built BizzyCube because we needed it ourselves.</h1>
        <p style={{ fontSize: 18, color: "#cbd5e1", lineHeight: 1.7 }}>
          BizzyCube runs on the War Room platform — an AI agency operating system built from the ground up to do what hiring a marketing team usually does, without the overhead, the turnover, or the channel silos.
        </p>
      </section>

      <section style={{ padding: "30px 24px 60px", maxWidth: 800, margin: "0 auto" }}>
        <div style={{ background: "#0e1119", border: "1px solid #1f2733", borderRadius: 14, padding: 32 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: "#fff", marginTop: 0, marginBottom: 16 }}>The bet</h2>
          <p style={{ fontSize: 15, color: "#cbd5e1", lineHeight: 1.7, margin: "0 0 14px" }}>
            Most small businesses don&apos;t need a full marketing team. They need <b style={{ color: "#fff" }}>one person who actually understands all of marketing</b>, runs every channel, never sleeps, and costs less than a part-time hire.
          </p>
          <p style={{ fontSize: 15, color: "#cbd5e1", lineHeight: 1.7, margin: "0 0 14px" }}>
            That person doesn&apos;t exist. So we built one out of AI.
          </p>
          <p style={{ fontSize: 15, color: "#cbd5e1", lineHeight: 1.7, margin: 0 }}>
            DJ is your single point of contact. Behind DJ is the fleet — nine specialist departments working in real-time coordination. They don&apos;t fight each other. They don&apos;t need a Monday status meeting. And they never miss a lead.
          </p>
        </div>
      </section>

      <CTAStrip />
    </>
  );
}
