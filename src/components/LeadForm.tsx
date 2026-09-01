"use client";
import { useEffect, useRef } from "react";

/* THE ONE LEAD FORM.
 *
 * Every form on this site is this component. There is exactly one place that
 * knows the address of the lead door, one set of field names, and one set of
 * anti-robot signals — so a new landing page cannot quietly ship a form that
 * posts nowhere, which is what the old contact page did for months.
 *
 * `t` is the page's own signed token. It names the company and which page this
 * is, and it is not a secret worth hiding: the worst anyone can do with it is
 * create a BizzyCube lead. It cannot be forged, so nobody can point their own
 * form at the Rolodex.
 *
 * `website_url` is the honeypot the platform looks for — a real person never
 * sees it, a form-filling robot fills in everything it finds. `form_seconds`
 * is how long the page was open before Send: a human takes longer than a
 * script. Both are signals the screening reads; neither is a gate, and a
 * missing one costs nothing.
 *
 * The form posts natively. No fetch, no JSON, no JavaScript required to send —
 * so it still works if the script never runs, and the platform answers with
 * its own thank-you page.
 */

const DOOR = "https://dztu1141o7.execute-api.us-west-2.amazonaws.com/lead/submit";

export default function LeadForm({
  token,
  heading,
  blurb,
  submitLabel = "Send it to me",
  fine = "No card. We'll come back the same day.",
  askBusiness = true,
  messageLabel = "Anything you want us to know? (optional)",
}: {
  token: string;
  heading: string;
  blurb: string;
  submitLabel?: string;
  fine?: string;
  askBusiness?: boolean;
  messageLabel?: string;
}) {
  const secs = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const t0 = Date.now();
    const tick = setInterval(() => {
      if (secs.current) {
        secs.current.value = String(Math.round((Date.now() - t0) / 1000));
      }
    }, 1000);
    return () => clearInterval(tick);
  }, []);

  return (
    <form action={DOOR} method="POST" className="bz-form">
      <input type="hidden" name="t" value={token} />
      <input type="hidden" name="form_seconds" ref={secs} defaultValue="0" />
      {/* the honeypot — hidden from people, not from robots */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-9999px" }}>
        <label htmlFor="website_url">Leave this empty</label>
        <input id="website_url" name="website_url" type="text" tabIndex={-1}
               autoComplete="off" defaultValue="" />
      </div>

      <h3>{heading}</h3>
      <p>{blurb}</p>

      <label className="bz-label" htmlFor="lf-name">Your name</label>
      <input id="lf-name" className="bz-field" name="name" required
             minLength={2} maxLength={80} autoComplete="name" />

      <label className="bz-label" htmlFor="lf-phone">Phone</label>
      <input id="lf-phone" className="bz-field" name="phone" type="tel"
             autoComplete="tel" />

      <label className="bz-label" htmlFor="lf-email">Email</label>
      <input id="lf-email" className="bz-field" name="email" type="email"
             autoComplete="email" />

      {askBusiness && (
        <>
          <label className="bz-label" htmlFor="lf-biz">
            Business name and trade
          </label>
          <input id="lf-biz" className="bz-field" name="business"
                 maxLength={120} autoComplete="organization" />
        </>
      )}

      <label className="bz-label" htmlFor="lf-msg">{messageLabel}</label>
      <textarea id="lf-msg" className="bz-field" name="message" rows={3}
                maxLength={1000} />

      <button type="submit" className="bz-btn bz-btn--big"
              style={{ marginTop: 26 }}>
        {submitLabel}
      </button>
      {/* One of the two, not both — the platform says the same thing back if
          you send neither, but it is kinder to say it here first. */}
      <p className="bz-fine">A phone or an email, whichever you prefer — we
        just need some way to answer you. {fine}</p>
    </form>
  );
}
