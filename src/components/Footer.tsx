import Link from "next/link";
import Logo from "./Logo";
import { DEPTS, DEPT_ORDER } from "@/lib/departments";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #1f2733", marginTop: 0, padding: "60px 24px 32px", background: "#0a0d14" }}>
      <div className="bz-footer-grid" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 32 }}>
        <div>
          <Logo />
          <p style={{ color: "#94a3b8", fontSize: 13, marginTop: 14, lineHeight: 1.6, maxWidth: 320 }}>
            The AI workforce for small business. One team. Every job. Less than one employee.
          </p>
        </div>
        <div>
          <div style={{ fontSize: 11, color: "#B2D235", textTransform: "uppercase", letterSpacing: ".1em", fontWeight: 700, marginBottom: 12 }}>BizzyCube</div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 2, fontSize: 13, color: "#cbd5e1" }}>
            <li><Link href="/platform">How it works</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
            <li><Link href="/case-studies">Case studies</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
        </div>
        <div>
          <div style={{ fontSize: 11, color: "#B2D235", textTransform: "uppercase", letterSpacing: ".1em", fontWeight: 700, marginBottom: 12 }}>Departments</div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 2, fontSize: 13, color: "#cbd5e1" }}>
            {DEPT_ORDER.slice(0, 5).map(s => <li key={s}><Link href={`/${s}`}>{DEPTS[s].name}</Link></li>)}
            <li><Link href="/departments" style={{ color: "#B2D235" }}>See all 9 →</Link></li>
          </ul>
        </div>
        <div>
          <div style={{ fontSize: 11, color: "#B2D235", textTransform: "uppercase", letterSpacing: ".1em", fontWeight: 700, marginBottom: 12 }}>Talk to us</div>
          <Link href="/contact?cta=demo" style={{ display: "inline-block", background: "#483A84", color: "#fff", padding: "9px 16px", borderRadius: 8, fontSize: 13, fontWeight: 600 }}>
            Book a 15-min demo →
          </Link>
        </div>
      </div>
      <div style={{ maxWidth: 1200, margin: "32px auto 0", paddingTop: 24, borderTop: "1px solid #1f2733", display: "flex", justifyContent: "space-between", fontSize: 11, color: "#64748b" }}>
        <span>© 2026 BizzyCube. Built by the BizzyCube AI workforce.</span>
        <span style={{ display: "flex", gap: 16 }}>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
          <span>bizzycube.com</span>
        </span>
      </div>
    </footer>
  );
}
