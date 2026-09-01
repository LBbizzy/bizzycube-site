import Link from "next/link";
import Logo from "./Logo";

/* The footer used to list every department by name — a tidy index of the
 * whole product for anyone who wanted to copy it. It now says what the
 * business does and where to reach it, and links only to the pages a real
 * visitor needs. */
export default function Footer() {
  return (
    <div className="bz-wrap">
      <footer className="bz-foot">
        <Logo size={22} />
        <p>
          The front desk, the paperwork and the follow-up, for businesses too
          small to hire all three. Nationwide.
        </p>
        <div className="bz-foot-line">
          <span>© {new Date().getFullYear()} BizzyCube</span>
          <span style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
            <Link href="/contact">Contact</Link>
            <Link href="/about">About</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <a href="https://app.bizzycube.com">Sign in</a>
          </span>
        </div>
      </footer>
    </div>
  );
}
