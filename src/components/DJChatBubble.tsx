"use client";
import { useEffect, useRef, useState } from "react";

/* A REAL CHAT, not a link dressed up as one.
 *
 * What was here before looked like a chat widget and was a link to the
 * contact form — you clicked "Start a conversation" and the contact page
 * reloaded. Meanwhile the platform has had a working web chat the whole
 * time: it captures the visitor as a contact, opens a thread in the War
 * Room inbox, and lets the conversation continue on a visitor token.
 *
 * HONEST ABOUT WHAT IT IS: this puts a real person's message in front of a
 * real person. It is not an instant-answer bot — nothing auto-replies yet.
 * So the widget promises a fast human reply rather than pretending to be
 * an AI that answers on the spot, because a bot that never speaks is worse
 * than an honest contact form.
 */

const API = "https://dztu1141o7.execute-api.us-west-2.amazonaws.com";
const SITE_TOKEN =
  "d3NpdGV8Yml6enljdWJlfHdzX2Jpenp5Y3ViZXNpdGV8cHVi.WdDN_E3h_D11Drw1xTlhi2bHnTeBZz0J";

type Msg = { body: string; direction: string; at?: string };

const C = {
  ink: "#0e1119",
  line: "#1f2733",
  field: "#0a0d14",
  edge: "#2c333f",
  text: "#e8eef5",
  dim: "#9aa8b8",
  green: "#B2D235",
  purple: "#483A84",
  teal: "#0E94B5",
};

export default function DJChatBubble() {
  const [open, setOpen] = useState(false);
  const [vt, setVt] = useState("");
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [name, setName] = useState("");
  const [reach, setReach] = useState("");
  const [draft, setDraft] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  // Keep the thread across a page change — a visitor who clicks Pricing
  // mid-conversation should not have to introduce themselves again.
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem("bc_chat_vt");
      if (saved) setVt(saved);
    } catch {}
  }, []);
  useEffect(() => {
    if (vt) { try { sessionStorage.setItem("bc_chat_vt", vt); } catch {} }
  }, [vt]);
  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); },
    [msgs, open]);

  async function post(path: string, body: unknown) {
    const r = await fetch(API + path, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const d = await r.json().catch(() => ({}));
    // The platform's own words reach the visitor. "A phone or an email —
    // some way to answer you" is useful; "something went wrong" is not.
    if (!r.ok || d.ok === false) throw new Error(d.error || "That didn't send.");
    return d;
  }

  async function start(e: React.FormEvent) {
    e.preventDefault();
    setErr(""); setBusy(true);
    try {
      const d = await post("/chat/start", {
        t: SITE_TOKEN, name, contact: reach, message: draft,
      });
      setVt(d.vt); setMsgs(d.messages || []); setDraft("");
    } catch (e) {
      setErr(e instanceof Error ? e.message : "That didn't send.");
    } finally { setBusy(false); }
  }

  async function say(e: React.FormEvent) {
    e.preventDefault();
    if (!draft.trim()) return;
    setErr(""); setBusy(true);
    const mine = draft;
    setDraft("");
    try {
      const d = await post("/chat/say", { vt, message: mine });
      setMsgs(d.messages || []);
    } catch (e) {
      setDraft(mine);
      setErr(e instanceof Error ? e.message : "That didn't send.");
    } finally { setBusy(false); }
  }

  const input: React.CSSProperties = {
    width: "100%", background: C.field, border: `1px solid ${C.edge}`,
    color: C.text, padding: "10px 12px", borderRadius: 8, fontSize: 13,
    fontFamily: "inherit", marginBottom: 8,
  };
  const send: React.CSSProperties = {
    width: "100%", background: C.green, color: "#14210a", border: "none",
    padding: "11px 16px", borderRadius: 8, fontSize: 13, fontWeight: 700,
    cursor: busy ? "wait" : "pointer", opacity: busy ? 0.6 : 1,
  };

  return (
    <div style={{ position: "fixed", right: 22, bottom: 22, zIndex: 60 }}>
      {open && (
        <div style={{
          width: 340, maxWidth: "calc(100vw - 44px)", background: C.ink,
          border: `1px solid ${C.line}`, borderRadius: 14, padding: 18,
          marginBottom: 12, boxShadow: "0 18px 50px rgba(0,0,0,.55)",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between",
                        alignItems: "center", marginBottom: 10 }}>
            <div style={{ fontSize: 15, fontWeight: 700, color: C.text }}>
              Chat with BizzyCube
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close chat"
              style={{ background: "transparent", border: "none",
                       color: C.dim, fontSize: 20, cursor: "pointer" }}>×</button>
          </div>

          {!vt ? (
            <form onSubmit={start}>
              <p style={{ fontSize: 12.5, color: C.dim, lineHeight: 1.6,
                          marginBottom: 12 }}>
                Ask anything — pricing, whether we fit your business, what
                we&apos;d build first. A real person answers, usually within
                the hour.
              </p>
              <input style={input} placeholder="Your name" required
                value={name} onChange={(e) => setName(e.target.value)} />
              <input style={input} placeholder="Phone or email" required
                value={reach} onChange={(e) => setReach(e.target.value)} />
              <textarea style={{ ...input, minHeight: 74, resize: "vertical" }}
                placeholder="What do you want to know?" required
                value={draft} onChange={(e) => setDraft(e.target.value)} />
              <button type="submit" style={send} disabled={busy}>
                {busy ? "Sending…" : "Start the conversation →"}
              </button>
            </form>
          ) : (
            <>
              <div style={{ maxHeight: 260, overflowY: "auto",
                            margin: "0 -4px 10px", padding: "0 4px" }}>
                {msgs.map((m, i) => (
                  <div key={i} style={{
                    textAlign: m.direction === "out" ? "left" : "right",
                    marginBottom: 8,
                  }}>
                    <span style={{
                      display: "inline-block", maxWidth: "86%",
                      background: m.direction === "out" ? C.purple : C.field,
                      border: `1px solid ${m.direction === "out" ? C.purple : C.edge}`,
                      color: C.text, padding: "8px 11px", borderRadius: 10,
                      fontSize: 13, lineHeight: 1.5, textAlign: "left",
                      whiteSpace: "pre-wrap",
                    }}>{m.body}</span>
                  </div>
                ))}
                <div ref={endRef} />
              </div>
              <form onSubmit={say}>
                <textarea style={{ ...input, minHeight: 56, resize: "vertical" }}
                  placeholder="Type a message…" value={draft}
                  onChange={(e) => setDraft(e.target.value)} />
                <button type="submit" style={send} disabled={busy}>
                  {busy ? "Sending…" : "Send"}
                </button>
              </form>
            </>
          )}

          {err && (
            <p style={{ fontSize: 12, color: "#f2a5a5", marginTop: 8 }}>{err}</p>
          )}
        </div>
      )}

      <button onClick={() => setOpen(!open)} aria-label="Chat with BizzyCube"
        style={{
          width: 56, height: 56, borderRadius: "50%", border: "none",
          cursor: "pointer", fontSize: 24, color: "#fff",
          background: `linear-gradient(135deg, ${C.purple}, ${C.teal})`,
          boxShadow: `0 8px 24px rgba(72,58,132,.45)`,
        }}>💬</button>
    </div>
  );
}
