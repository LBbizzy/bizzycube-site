"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function WelcomeInner() {
  const params = useSearchParams();
  const sessionId = params.get("session_id");
  const [status, setStatus] = useState<"loading" | "ready" | "pending">("loading");
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    if (!sessionId) {
      setStatus("ready");
      return;
    }
    let tries = 0;
    const poll = async () => {
      try {
        const r = await fetch(`https://api.warroom.lmbhub.com/public/signup/status?session_id=${encodeURIComponent(sessionId)}`);
        const d = await r.json();
        if (d.status === "active") {
          setEmail(d.email || null);
          setStatus("ready");
          return;
        }
      } catch {
        /* keep polling */
      }
      tries++;
      if (tries < 20) {
        setTimeout(poll, 1500);
      } else {
        setStatus("pending");
      }
    };
    poll();
  }, [sessionId]);

  return (
    <main style={{ minHeight: "100vh", background: "#0a0d14", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <div style={{ maxWidth: 540, width: "100%", background: "#0e1119", border: "1px solid #1f2733", borderRadius: 16, padding: 36, textAlign: "center" }}>
        {status === "loading" && (
          <>
            <div style={{ fontSize: 40, marginBottom: 14 }}>⏳</div>
            <h1 style={{ fontSize: 26, fontWeight: 800, margin: "0 0 10px" }}>Finalizing your account…</h1>
            <p style={{ color: "#94a3b8", lineHeight: 1.6, margin: 0 }}>Stripe is confirming your payment. This usually takes 5–10 seconds.</p>
          </>
        )}

        {status === "pending" && (
          <>
            <div style={{ fontSize: 40, marginBottom: 14 }}>📬</div>
            <h1 style={{ fontSize: 26, fontWeight: 800, margin: "0 0 10px" }}>Payment received — finishing setup</h1>
            <p style={{ color: "#cbd5e1", lineHeight: 1.6, margin: "0 0 18px" }}>
              Your account is being provisioned. We&apos;ll email you the moment it&apos;s ready (usually within a minute).
            </p>
            <a
              href="https://lmbhub.com"
              style={{ display: "inline-block", background: "#2563eb", color: "#fff", padding: "13px 24px", borderRadius: 10, fontSize: 14, fontWeight: 700, textDecoration: "none" }}
            >
              Go to lmbhub.com →
            </a>
          </>
        )}

        {status === "ready" && (
          <>
            <div style={{ fontSize: 44, marginBottom: 14 }}>🎉</div>
            <h1 style={{ fontSize: 28, fontWeight: 800, margin: "0 0 10px" }}>You&apos;re in.</h1>
            <p style={{ color: "#cbd5e1", lineHeight: 1.6, margin: "0 0 24px" }}>
              Your BizzyCube workforce is live{email ? ` — login with ${email} and the password you set` : ""}. Sign in at lmbhub.com to start the 10-minute onboarding wizard.
            </p>
            <a
              href="https://lmbhub.com"
              style={{ display: "inline-block", background: "#2563eb", color: "#fff", padding: "14px 28px", borderRadius: 10, fontSize: 15, fontWeight: 700, textDecoration: "none" }}
            >
              Sign in → lmbhub.com
            </a>
            <div style={{ fontSize: 12, color: "#64748b", marginTop: 18, lineHeight: 1.5 }}>
              Welcome email is also on its way. Check your inbox (and your spam folder, just in case).
            </div>
          </>
        )}
      </div>
    </main>
  );
}

export default function WelcomePage() {
  return (
    <Suspense fallback={null}>
      <WelcomeInner />
    </Suspense>
  );
}
