import Link from "next/link";
export default function CTAStrip({ title = "See how BizzyCube would run your business", sub = "15-minute demo. No pitch. We map your funnel live and show you what's broken." }: { title?: string; sub?: string }) {
  return (
    <section style={{ background: "linear-gradient(135deg, #1e1b4b 0%, #0e1119 100%)", padding: "56px 24px", margin: "56px 0 0", borderTop: "1px solid #2c333f", borderBottom: "1px solid #2c333f" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontSize: 32, fontWeight: 800, color: "#fff", margin: "0 0 14px", letterSpacing: "-0.01em" }}>{title}</h2>
        <p style={{ fontSize: 16, color: "#cbd5e1", lineHeight: 1.6, margin: "0 0 26px" }}>{sub}</p>
        <Link href="/contact?cta=demo" style={{ display: "inline-block", background: "#483A84", color: "#fff", padding: "14px 32px", borderRadius: 10, fontSize: 15, fontWeight: 700 }}>
          Book a 15-min demo →
        </Link>
      </div>
    </section>
  );
}
