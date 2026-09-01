import LeadForm from "@/components/LeadForm";

/* The site's own contact page. Same door, same form component, same signed
 * token discipline as every landing page — the only difference is that this
 * token names the SITE rather than a funnel, so the Rolodex shows the lead as
 * "Website contact form" instead of naming a problem. */
const SITE_TOKEN =
  "d3NpdGV8Yml6enljdWJlfHdzX2Jpenp5Y3ViZXNpdGV8cHVi.WdDN_E3h_D11Drw1xTlhi2bHnTeBZz0J";

export const metadata = {
  title: "Book a call — BizzyCube",
  description:
    "Fifteen minutes. We look at how work reaches you today and tell you what's falling through.",
};

export default function Page() {
  return (
    <div className="bz-wrap bz-tight">
      <section className="bz-sec">
        <p className="bz-kicker">Contact</p>
        <h1 className="bz-serif" style={{
          fontSize: "clamp(36px,5.6vw,64px)", marginTop: 16, maxWidth: "15ch",
        }}>
          Fifteen minutes. We&apos;ll show you where it&apos;s{" "}
          <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
            leaking.
          </em>
        </h1>
        <p style={{
          fontSize: 19.5, lineHeight: 1.5, color: "var(--muted)",
          maxWidth: "46ch", margin: "26px 0 40px",
        }}>
          Nothing to prepare. We look at how work reaches you today — the
          phone, the inbox, the quotes sitting in a folder — and tell you
          straight what&apos;s falling through, whether or not you hire us.
        </p>

        <LeadForm
          token={SITE_TOKEN}
          heading="Book the call"
          blurb="Tell us how to reach you and we'll come back with a couple of times. No pitch on the call and no card at any point."
          submitLabel="Book my call"
          messageLabel="What's the one thing you'd fix? (optional)"
        />

        <p className="bz-fine" style={{ marginTop: 26 }}>
          Or call{" "}
          <a href="tel:+18337258858" style={{ color: "var(--accent)" }}>
            (833) 725-8858
          </a>
          . We use what you send only to answer you — no list resale, ever.
        </p>
      </section>
    </div>
  );
}
