import Link from "next/link";

/* Some pages went away on purpose. The department pages published the whole
 * feature list and a rate card that isn't settled; the case-study page made
 * claims nothing behind it could back up. A 404 that says where to go next is
 * a better answer than keeping them up. */
export default function NotFound() {
  return (
    <div className="bz-wrap bz-tight">
      <section className="bz-sec">
        <p className="bz-kicker">404</p>
        <h1 className="bz-serif" style={{
          fontSize: "clamp(32px,5vw,56px)", marginTop: 16, maxWidth: "15ch",
        }}>
          That page isn&apos;t here any more.
        </h1>
        <p style={{ fontSize: 19, color: "var(--muted)", maxWidth: "44ch",
                    margin: "24px 0 32px" }}>
          Try the front page, or just tell us what you were after — the chat
          in the corner reaches a real inbox.
        </p>
        <div className="bz-row">
          <Link href="/" className="bz-btn bz-btn--big">Front page</Link>
          <Link href="/contact" className="bz-btn bz-btn--big bz-btn--out">
            Book a call
          </Link>
        </div>
      </section>
    </div>
  );
}
