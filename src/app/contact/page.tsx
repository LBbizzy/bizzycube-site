export const metadata = { title: "Contact — BizzyCube" };
export default function Page() {
  return (
    <>
      <section style={{ padding: "70px 24px 40px", maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
        <div style={{ fontSize: 11, color: "#5fd3f3", letterSpacing: ".14em", textTransform: "uppercase", fontWeight: 700, marginBottom: 12 }}>Contact</div>
        <h1 style={{ fontSize: 50, fontWeight: 800, color: "#fff", letterSpacing: "-0.025em", lineHeight: 1.1, margin: "0 0 18px" }}>Book a 15-min mapping call.</h1>
        <p style={{ fontSize: 17, color: "#cbd5e1", lineHeight: 1.6 }}>
          We map your funnel live. No prep, no pitch. You leave with a real diagnosis — even if you don&apos;t hire us.
        </p>
      </section>

      <section style={{ padding: "20px 24px 60px", maxWidth: 640, margin: "0 auto" }}>
        {/* THIS FORM USED TO GO NOWHERE.
            It posted to the old stack's /leads/capture, which requires an
            x-lead-key header a plain HTML form cannot send, so every
            submission came back 401 and was discarded in silence — no row
            in any table, and a visitor who saw no error. It now posts to
            the War Room's own lead door, which screens it, matches or
            creates the contact, writes the note and the activity line, and
            answers with a thank-you page.

            `t` is the signed token naming the company and this site. It is
            not a secret worth hiding — it can only ever create a lead for
            BizzyCube — but it cannot be forged, so nobody can point their
            own form at your Rolodex. */}
        <form action="https://dztu1141o7.execute-api.us-west-2.amazonaws.com/lead/submit" method="POST" style={{ background: "#0e1119", border: "1px solid #1f2733", borderRadius: 14, padding: 28 }}>
          <input type="hidden" name="t" value="d3NpdGV8Yml6enljdWJlfHdzX2Jpenp5Y3ViZXNpdGV8cHVi.WdDN_E3h_D11Drw1xTlhi2bHnTeBZz0J" />
          {[
            ["name", "Your name", "text", true],
            ["phone", "Phone", "tel", true],
            ["email", "Email", "email", true],
            ["business", "Business name + industry", "text", true],
          ].map(([n, l, t, req]) => (
            <div key={n as string} style={{ marginBottom: 16 }}>
              <label style={{ display: "block", fontSize: 13, color: "#cbd5e1", marginBottom: 6, fontWeight: 500 }}>{l as string}{req && <span style={{ color: "#ef4444" }}> *</span>}</label>
              <input name={n as string} type={t as string} required={!!req} style={{ width: "100%", background: "#0a0d14", border: "1px solid #2c333f", color: "#fff", padding: "11px 14px", borderRadius: 8, fontSize: 14 }} />
            </div>
          ))}
          <div style={{ marginBottom: 20 }}>
            <label style={{ display: "block", fontSize: 13, color: "#cbd5e1", marginBottom: 6, fontWeight: 500 }}>What&apos;s the #1 thing you&apos;d fix? (optional)</label>
            <textarea name="message" rows={3} style={{ width: "100%", background: "#0a0d14", border: "1px solid #2c333f", color: "#fff", padding: "11px 14px", borderRadius: 8, fontSize: 14, fontFamily: "inherit" }} />
          </div>
          <button type="submit" style={{ width: "100%", background: "#2563eb", color: "#fff", border: "none", padding: "14px 24px", borderRadius: 10, fontSize: 15, fontWeight: 700, cursor: "pointer" }}>
            Send → DJ will book you in &lt;1 business hour
          </button>
          <div style={{ marginTop: 14, fontSize: 11, color: "#64748b", textAlign: "center" }}>
            We use your info only to schedule the call and follow up. No spam, no list resale.
          </div>
        </form>
      </section>
    </>
  );
}
