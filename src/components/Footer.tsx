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
        <address className="bz-foot-co">
          Bizzy Cube LLC · 115 E Plata St, Tucson, AZ 85705 ·{" "}
          <a href="mailto:support@bizzycube.com">support@bizzycube.com</a> ·{" "}
          <a href="tel:+18337258858">(833) 725-8858</a>
          <br />
          Makers of <a href="https://zapphobby.com">ZappHobby</a> and{" "}
          <a href="https://gethomescan.com">HomeScan</a>.
        </address>
        <div className="bz-foot-line">
          <span>© {new Date().getFullYear()} Bizzy Cube LLC</span>
          <span style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
            <Link href="/contact">Contact</Link>
            <Link href="/apps">Our apps</Link>
            <Link href="/about">About</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/for-your-trade">By trade</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/support">Support</Link>
            <a href="https://app.bizzycube.com">Sign in</a>
          </span>
        </div>
      </footer>
    </div>
  );
}
