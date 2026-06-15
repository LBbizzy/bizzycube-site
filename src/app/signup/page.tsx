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

const API = "https://api.warroom.lmbhub.com";

export default function SignupPage() {
  const [plan, setPlan] = useState<Plan>("bundle_of_3");
  const [cycle, setCycle] = useState<Cycle>("monthly");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [busy, setBusy] = useState(false);
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
    if (password.length < 10 || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password)) {
      setErr("Password must be at least 10 characters and include uppercase, lowercase, and a number.");
      return;
    }
    setBusy(true);
    try {
      const r = await fetch(`${API}/public/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          plan,
          cycle,
          name: name.trim(),
          email: email.trim().toLowerCase(),
          company: company.trim(),
          password,
          success_url: `${window.location.origin}/signup/welcome?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${window.location.origin}/signup?canceled=1`,
        }),
      });
      const data = await r.json();
      if (!r.ok || !data.checkout_url) {
        throw new Error(data.error || `Signup failed (${r.status})`);
      }
      window.location.href = data.checkout_url;
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "Something went wrong.";
      setErr(msg);
      setBusy(false);
    }
  }

  return (
    <main style={{ minHeight: "100vh", background: "#0a0d14", color: "#fff" }}>
      <section style={{ padding: "60px 24px 24px", maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
        <div style={{ fontSize: 11, color: "#5fd3f3", letterSpacing: ".14em", textTransform: "uppercase", fontWeight: 700, marginBottom: 14 }}>Sign up</div>
        <h1 style={{ fontSize: 44, fontWeight: 800, color: "#fff", letterSpacing: "-0.025em", lineHeight: 1.05, margin: "0 0 14px" }}>Start your BizzyCube workforce.</h1>
        <p style={{ fontSize: 17, color: "#cbd5e1", lineHeight: 1.6, maxWidth: 640, margin: "0 auto" }}>
          Pick a plan, create your account, pay through Stripe. You&apos;re running 10 minutes from now.
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
                  background: cycle === c ? "#2563eb" : "transparent",
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
                    border: active ? "2px solid #2563eb" : "1px solid #1f2733",
                    borderRadius: 14,
                    padding: 22,
                    cursor: "pointer",
                    position: "relative",
                    color: "#fff",
                  }}
                >
                  {best && (
                    <div style={{ position: "absolute", top: -10, left: 18, background: "#2563eb", color: "#fff", padding: "3px 10px", borderRadius: 6, fontSize: 10, fontWeight: 700, letterSpacing: ".06em" }}>
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
              {planDef.name} · <span style={{ color: "#5fd3f3", fontWeight: 600 }}>{priceLabel}</span>
              {annualSave > 0 && <span style={{ marginLeft: 8, color: "#22c55e" }}>save {annualSave}%</span>}
            </div>

            <Field label="Your name" value={name} onChange={setName} placeholder="Jordan Smith" />
            <Field label="Work email" value={email} onChange={setEmail} type="email" placeholder="you@yourcompany.com" />
            <Field label="Company name" value={company} onChange={setCompany} placeholder="Acme Co." />

            <label style={{ display: "block", fontSize: 12, color: "#94a3b8", marginBottom: 6, marginTop: 14 }}>Password (you&apos;ll use this to log in to lmbhub.com)</label>
            <div style={{ position: "relative" }}>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={showPw ? "text" : "password"}
                placeholder="At least 10 characters, with uppercase, lowercase, number"
                autoComplete="new-password"
                style={inputStyle}
              />
              <button
                type="button"
                onClick={() => setShowPw((s) => !s)}
                style={{ position: "absolute", right: 10, top: 9, background: "transparent", border: "none", color: "#94a3b8", fontSize: 12, cursor: "pointer" }}
              >
                {showPw ? "Hide" : "Show"}
              </button>
            </div>

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
                background: busy ? "#1f2733" : "#2563eb",
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
              Already have an account? <a href="https://lmbhub.com" style={{ color: "#5fd3f3" }}>Sign in</a>.
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
