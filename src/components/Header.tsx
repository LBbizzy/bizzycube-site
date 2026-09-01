import Link from "next/link";
import Logo from "./Logo";

/* The nav names what a visitor came to find out, not how the product is
 * organised. There is no "Departments" and no "Pricing": the department pages
 * published the feature list, and there is no rate card to stand behind yet.
 * Both were decisions, not omissions. */
const NAV = [
  { href: "/#what-we-fix", label: "What we fix" },
  { href: "/#who-its-for", label: "Who it's for" },
  { href: "/about", label: "About" },
];

export default function Header() {
  return (
    <div className="bz-wrap">
      <header className="bz-nav">
        <Link href="/" aria-label="BizzyCube home"><Logo /></Link>
        <nav className="bz-links">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href}>{n.label}</Link>
          ))}
        </nav>
        <Link href="/contact" className="bz-btn">Book a call</Link>
      </header>
    </div>
  );
}
