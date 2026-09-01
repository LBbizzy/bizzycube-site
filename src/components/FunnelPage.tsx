import LeadForm from "./LeadForm";
import type { Funnel } from "@/lib/funnels";

/* One landing page, rendered from one funnel's data.
 *
 * Every page is this component. That is on purpose: eight hand-written pages
 * drift, and the one that drifts is the one whose form quietly stops posting
 * anywhere. Here there is a single form, a single door and a single shape, and
 * the only thing that changes between pages is the words. */
export default function FunnelPage({ f }: { f: Funnel }) {
  return (
    <div className="bz-wrap bz-tight">
      <section className="bz-sec">
        <p className="bz-kicker">{f.kicker}</p>
        <h1 className="bz-serif" style={{
          fontSize: "clamp(36px,5.6vw,68px)", marginTop: 16, maxWidth: "15ch",
        }}>
          {f.headLead}{" "}
          <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
            {f.headEm}
          </em>
        </h1>
        <p style={{
          fontSize: 19.5, lineHeight: 1.5, color: "var(--muted)",
          maxWidth: "46ch", margin: "26px 0 32px",
        }}>
          {f.sub}
        </p>
        <div className="bz-row">
          <a href="#ask" className="bz-btn bz-btn--big">{f.cta}</a>
        </div>
        <p className="bz-under">
          Free. Nothing to install, no card, and yours whether or not you go
          further.
        </p>

        <div className="bz-checks">
          {f.checks.map((c) => (
            <div key={c.q}>
              <p className="bz-q">{"“" + c.q + "”"}</p>
              <p className="bz-a">{c.a}</p>
            </div>
          ))}
        </div>

        {f.trail && (
          <div className="bz-trail">
            <h3 className="bz-serif">{f.trail.h3}</h3>
            {f.trail.p.map((t) => <p key={t}>{t}</p>)}
            <div className="bz-tl">
              {f.trail.rows.map(([when, what]) => (
                <div key={when}>
                  <span className="bz-when">{when}</span>
                  <span>{what}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {f.more && (
          <div className="bz-checks" style={{ marginTop: 56 }}>
            {f.more.map((c) => (
              <div key={c.q}>
                <p className="bz-q">{"“" + c.q + "”"}</p>
                <p className="bz-a">{c.a}</p>
              </div>
            ))}
          </div>
        )}

        <div id="ask" style={{ marginTop: 64, scrollMarginTop: 24 }}>
          <LeadForm
            token={f.token}
            heading={f.form.heading}
            blurb={f.form.blurb}
            submitLabel={f.form.submit}
            messageLabel={f.form.message}
          />
        </div>
      </section>
    </div>
  );
}
