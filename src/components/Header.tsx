import Link from "next/link";
import Logo from "./Logo";

const NAV = [
  { href: "/platform", label: "How it works" },
  { href: "/departments", label: "Departments" },
  { href: "/pricing", label: "Pricing" },
  { href: "/case-studies", label: "Case studies" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(10,13,20,0.85)", backdropFilter: "blur(10px)", borderBottom: "1px solid #1f2733" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/"><Logo /></Link>
        <nav className="bz-hide-on-mobile" style={{ display: "flex", gap: 28, alignItems: "center" }}>
          {NAV.map(n => (
            <Link key={n.href} href={n.href} style={{ fontSize: 14, color: "#cbd5e1", fontWeight: 500 }}>{n.label}</Link>
          ))}
          <Link href="/contact?cta=demo" style={{ background: "#483A84", color: "#fff", padding: "9px 18px", borderRadius: 8, fontSize: 14, fontWeight: 600 }}>
            Book a demo →
          </Link>
        </nav>
      </div>
    </header>
  );
}
