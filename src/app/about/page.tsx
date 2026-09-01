import Link from "next/link";

export const metadata = {
  title: "About — BizzyCube",
  description:
    "Built for businesses where the owner is also the front desk, the bookkeeper and the person who forgot to post something.",
};

export default function Page() {
  return (
    <div className="bz-wrap bz-tight">
      <section className="bz-sec">
        <p className="bz-kicker">About</p>
        <h1 className="bz-serif" style={{
          fontSize: "clamp(34px,5.4vw,60px)", marginTop: 16, maxWidth: "16ch",
        }}>
          Small businesses don&apos;t lose to better competitors. They lose to{" "}
          <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
            a busy Tuesday.
          </em>
        </h1>
        <p style={{ fontSize: 19.5, lineHeight: 1.5, color: "var(--muted)",
                    maxWidth: "48ch", margin: "26px 0 0" }}>
          A big company has somebody whose entire job is answering the phone.
          Somebody else sends the quotes. Somebody else chases them. A small
          business has one person doing all of it between jobs — and that
          person is very good at the actual work and has no time left for the
          rest of it.
        </p>

        <div className="bz-checks">
          <div>
            <p className="bz-q">Why it exists</p>
            <p className="bz-a">
              Not because owners are disorganised. Because the work that keeps
              a business alive — answering, quoting, chasing, billing, being
              findable — all happens at exactly the hours you are busiest.
              Nobody can be in both places, so the cheapest part of the
              business quietly goes undone.
            </p>
          </div>
          <div>
            <p className="bz-q">What we do about it</p>
            <p className="bz-a">
              Those jobs get done whether or not you are at a desk, and every
              one of them ends up in one list you can actually see. You keep
              the judgement calls. You stop losing work to the parts that
              never needed you.
            </p>
          </div>
          <div>
            <p className="bz-q">What we won&apos;t do</p>
            <p className="bz-a">
              Sell you a number before we&apos;ve seen your week, or a stack of
              things you never open. If two of the eight problems on the front
              page are yours, you should be paying for two.
            </p>
          </div>
          <div>
            <p className="bz-q">Where we are</p>
            <p className="bz-a">
              Tucson, Arizona — and it makes no difference to you. This works
              the same way anywhere in the United States, because the week
              looks the same everywhere.
            </p>
          </div>
        </div>

        <div className="bz-row" style={{ marginTop: 48 }}>
          <Link href="/contact" className="bz-btn bz-btn--big">
            Book a 15-minute call
          </Link>
          <a href="tel:+18337258858" className="bz-btn bz-btn--big bz-btn--out">
            Or call (833) 725-8858
          </a>
        </div>
      </section>
    </div>
  );
}
