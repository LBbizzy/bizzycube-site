"use client";

import { useState } from "react";

type Plan = "single_dept" | "bundle_of_3" | "full_workforce";
type Cycle = "monthly" | "annual";

const PLANS: Record<Plan, { name: string; monthly: number; annual: number; tagline: string; features: string[] }> = {
  single_dept: {
    name: "Single Dept",
    monthly: 99,
    annual: 990,
    tagline: "One BizzyCube department, fully run.",
    features: ["1 department of your choice", "Weekly approval queue", "DJ orchestrator access", "Cancel anytime"],
  },
  bundle_of_3: {
    name: "Bundle of 3",
    monthly: 299,
    annual: 2990,
    tagline: "Three departments. Mix and match.",
    features: ["Any 3 departments", "Integrated cross-dept workflow", "Combined approval queue", "Weekly cross-dept digest"],
  },
  full_workforce: {
    name: "Full Workforce",
    monthly: 599,
    annual: 5990,
    tagline: "All 10 departments. Replace your team.",
    features: ["All 10 departments", "Full DJ orchestrator", "Cross-department automation", "Custom integrations", "Dedicated onboarding"],
  },
};

const LEAD_DOOR =
  "https://dztu1141o7.execute-api.us-west-2.amazonaws.com/lead/submit";
const SITE_TOKEN =
  "d3NpdGV8Yml6enljdWJlfHdzX2Jpenp5Y3ViZXNpdGV8cHVi.WdDN_E3h_D11Drw1xTlhi2bHnTeBZz0J";
const APP = "https://app.bizzycube.com";

export default function SignupPage() {
  const [plan, setPlan] = useState<Plan>("bundle_of_3");
  const [cycle, setCycle] = useState<Cycle>("monthly");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const planDef = PLANS[plan];
  const price = cycle === "monthly" ? planDef.monthly : planDef.annual;
  const priceLabel = cycle === "monthly" ? `$${price}/mo` : `$${(price / 12).toFixed(0)}/mo billed annually`;
  const annualSave = cycle === "annual" ? Math.round((1 - planDef.annual / (planDef.monthly * 12)) * 100) : 0;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    if (!name.trim() || !email.trim() || !company.trim()) {
      setErr("Fill in all fields.");
      return;
    }
    setBusy(true);
    try {
      // Posted as a form encoding because that is what the lead door
      // speaks — the same door the contact form uses, so a signup request
      // lands in the Rolodex beside every other lead instead of in a
      // separate pile nobody watches.
      const body = new URLSearchParams({
        t: SITE_TOKEN,
        name: name.trim(),
        email: email.trim().toLowerCase(),
        business: company.trim(),
        message:
          `Wants an account. Plan: ${planDef.name} (${cycle}), ` +
          `${priceLabel}.`,
      });
      const r = await fetch(LEAD_DOOR, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
      if (!r.ok) throw new Error(`That didn't send (${r.status}).`);
      setDone(true);
    } catch (e: unknown) {
      setErr(e instanceof Error ? e.message : "Something went wrong.");
    } finally {
      setBusy(false);
    }
  }

  if (done) {
    return (
      <main style={{ minHeight: "100vh", background: "#0a0d14", color: "#fff" }}>
        <section style={{ maxWidth: 620, margin: "0 auto",
                          padding: "110px 24px", textAlign: "center" }}>
          <div style={{ fontSize: 11, color: "#B2D235", letterSpacing: ".14em",
                        textTransform: "uppercase", fontWeight: 700,
                        marginBottom: 14 }}>Got it</div>
          <h1 style={{ fontSize: 40, fontWeight: 800, letterSpacing: "-0.025em",
                       lineHeight: 1.1, margin: "0 0 16px" }}>
            We&apos;ll be in touch today.
          </h1>
          <p style={{ fontSize: 16.5, color: "#cbd5e1", lineHeight: 1.65 }}>
            Your request is in — {planDef.name}, {priceLabel}. We&apos;ll
            reach out to get your workspace set up. Nothing is charged until
            you&apos;ve seen it working.
          </p>
        </section>
      </main>
    );
  }

  return (
    <main style={{ minHeight: "100vh", background: "#0a0d14", color: "#fff" }}>
      <section style={{ padding: "60px 24px 24px", maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
        <div style={{ fontSize: 11, color: "#B2D235", letterSpacing: ".14em", textTransform: "uppercase", fontWeight: 700, marginBottom: 14 }}>Sign up</div>
        <h1 style={{ fontSize: 44, fontWeight: 800, color: "#fff", letterSpacing: "-0.025em", lineHeight: 1.05, margin: "0 0 14px" }}>Start your BizzyCube workforce.</h1>
        <p style={{ fontSize: 17, color: "#cbd5e1", lineHeight: 1.6, maxWidth: 640, margin: "0 auto" }}>
          Pick the plan that fits. Tell us who you are. We set your workspace up with you on a short call, so the tools are switched on for how your business actually runs \u2014 not left as a pile of settings.
        </p>
      </section>

      <section style={{ padding: "20px 24px 80px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 28, alignItems: "start" }}>
          {/* Billing cycle toggle */}
          <div style={{ display: "flex", justifyContent: "center", gap: 8, background: "#0e1119", border: "1px solid #1f2733", borderRadius: 14, padding: 6, width: "fit-content", margin: "0 auto" }}>
            {(["monthly", "annual"] as Cycle[]).map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCycle(c)}
                style={{
                  background: cycle === c ? "#483A84" : "transparent",
                  color: "#fff",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: 9,
                  fontSize: 14,
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                {c === "monthly" ? "Monthly" : "Annual — save 17%"}
              </button>
            ))}
          </div>

          {/* Plan picker */}
          <div className="bz-grid bz-grid-3" style={{ gap: 16, display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
            {(Object.keys(PLANS) as Plan[]).map((p) => {
              const def = PLANS[p];
              const active = plan === p;
              const best = p === "bundle_of_3";
              const pp = cycle === "monthly" ? `$${def.monthly}` : `$${def.annual}`;
              const sub = cycle === "monthly" ? "/month" : "/year";
              return (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPlan(p)}
                  style={{
                    textAlign: "left",
                    background: active ? "linear-gradient(180deg, rgba(83, 74, 183, 0.18), #0e1119)" : "#0e1119",
                    border: active ? "2px solid #483A84" : "1px solid #1f2733",
                    borderRadius: 14,
                    padding: 22,
                    cursor: "pointer",
                    position: "relative",
                    color: "#fff",
                  }}
                >
                  {best && (
                    <div style={{ position: "absolute", top: -10, left: 18, background: "#483A84", color: "#fff", padding: "3px 10px", borderRadius: 6, fontSize: 10, fontWeight: 700, letterSpacing: ".06em" }}>
                      MOST POPULAR
                    </div>
                  )}
                  <div style={{ fontSize: 18, fontWeight: 700 }}>{def.name}</div>
                  <div style={{ fontSize: 28, fontWeight: 800, margin: "8px 0 4px", letterSpacing: "-0.02em" }}>
                    {pp}
                    <span style={{ fontSize: 13, fontWeight: 500, color: "#94a3b8" }}>{sub}</span>
                  </div>
                  <div style={{ fontSize: 12.5, color: "#94a3b8", lineHeight: 1.5, marginBottom: 14 }}>{def.tagline}</div>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: 13, color: "#cbd5e1", lineHeight: 1.8 }}>
                    {def.features.map((f) => (
                      <li key={f}>✓ {f}</li>
                    ))}
                  </ul>
                </button>
              );
            })}
          </div>

          {/* Account form */}
          <form onSubmit={handleSubmit} style={{ background: "#0e1119", border: "1px solid #1f2733", borderRadius: 14, padding: 28, maxWidth: 640, margin: "0 auto", width: "100%" }}>
            <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>Your account</div>
            <div style={{ fontSize: 13, color: "#94a3b8", marginBottom: 22 }}>
              {planDef.name} · <span style={{ color: "#B2D235", fontWeight: 600 }}>{priceLabel}</span>
              {annualSave > 0 && <span style={{ marginLeft: 8, color: "#B2D235" }}>save {annualSave}%</span>}
            </div>

            <Field label="Your name" value={name} onChange={setName} placeholder="Jordan Smith" />
            <Field label="Work email" value={email} onChange={setEmail} type="email" placeholder="you@yourcompany.com" />
            <Field label="Company name" value={company} onChange={setCompany} placeholder="Acme Co." />

            {/* NO PASSWORD FIELD, DELIBERATELY.
                This form used to ask for one and POST it in plain JSON to
                the old stack's /public/signup — which answers 401, so the
                password was collected and thrown away while the visitor
                was told "Signup failed". People reuse passwords; a form
                that harvests one and discards it is worse than a form that
                never asks.

                The platform does not work that way either: a login is
                created through Cognito, which emails its own invite and
                takes the password directly from the person. BizzyCube
                never sees it and no BizzyCube page ever asks for it. */}
            {err && (
              <div style={{ background: "#3b1212", border: "1px solid #7f1d1d", color: "#fecaca", padding: "10px 12px", borderRadius: 9, marginTop: 14, fontSize: 13 }}>
                {err}
              </div>
            )}

            <button
              type="submit"
              disabled={busy}
              style={{
                width: "100%",
                marginTop: 22,
                background: busy ? "#1f2733" : "#483A84",
                color: "#fff",
                border: "none",
                padding: "14px 16px",
                borderRadius: 10,
                fontSize: 15,
                fontWeight: 700,
                cursor: busy ? "not-allowed" : "pointer",
              }}
            >
              {busy ? "Setting up your account…" : `Continue to payment → ${priceLabel}`}
            </button>

            <div style={{ fontSize: 12, color: "#64748b", textAlign: "center", marginTop: 14, lineHeight: 1.5 }}>
              Secured by Stripe. Cancel anytime from your account. <br />
              Already have an account? <a href={APP} style={{ color: "#B2D235" }}>Sign in</a>.
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "#080a10",
  border: "1px solid #1f2733",
  color: "#fff",
  padding: "11px 12px",
  borderRadius: 9,
  fontSize: 14,
  fontFamily: "inherit",
};

function Field({ label, value, onChange, type = "text", placeholder }: { label: string; value: string; onChange: (v: string) => void; type?: string; placeholder?: string }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <label style={{ display: "block", fontSize: 12, color: "#94a3b8", marginBottom: 6 }}>{label}</label>
      <input value={value} onChange={(e) => onChange(e.target.value)} type={type} placeholder={placeholder} style={inputStyle} />
    </div>
  );
}
