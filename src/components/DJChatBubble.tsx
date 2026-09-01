"use client";
import { useCallback, useEffect, useRef, useState } from "react";

/* THE CHAT ON THE WEBSITE.
 *
 * Three things were wrong with what was here and all three are fixed.
 *
 * 1. It gated the conversation. You had to hand over a name and a phone
 *    number before you could ask a single question — which is a contact form
 *    wearing a chat bubble. The platform stopped requiring that; this now
 *    lets somebody just ask, and asks who they are only if the conversation
 *    gets somewhere.
 *
 * 2. It never showed the answer. The assistant replies a moment AFTER the
 *    door returns — that's what `thinking` in the response means — and this
 *    widget only ever rendered what came back in the same breath. So the
 *    reply was written, filed in the War Room, and never seen by the visitor
 *    who asked. It now waits for it.
 *
 * 3. It was styled like a different website.
 *
 * What it is, honestly: the assistant answers about BizzyCube and can note
 * what you want and ask a person to call you. It cannot look anything up
 * about you, and it cannot change anything. Every word of it lands in the
 * same inbox as a phone call.
 */

const API = "https://dztu1141o7.execute-api.us-west-2.amazonaws.com";
const SITE_TOKEN =
  "d3NpdGV8Yml6enljdWJlfHdzX2Jpenp5Y3ViZXNpdGV8cHVi.WdDN_E3h_D11Drw1xTlhi2bHnTeBZz0J";

type Msg = { body: string; direction: string; at?: string };

/* How long to wait for the assistant before saying so. It is a model call,
 * so it is usually a couple of seconds and occasionally not. Saying "a person
 * will pick this up" after twenty seconds is better than a spinner forever. */
const WAIT_MS = 22000;
const POLL_MS = 1800;

export default function DJChatBubble() {
  const [open, setOpen] = useState(false);
  const [vt, setVt] = useState("");
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [draft, setDraft] = useState("");
  const [busy, setBusy] = useState(false);
  const [waiting, setWaiting] = useState(false);
  const [slow, setSlow] = useState(false);
  const [err, setErr] = useState("");
  const endRef = useRef<HTMLDivElement>(null);
  const stop = useRef(false);

  useEffect(() => {
    try {
      const saved = sessionStorage.getItem("bc_chat_vt");
      if (saved) setVt(saved);
    } catch {}
    return () => { stop.current = true; };
  }, []);
  useEffect(() => {
    if (vt) { try { sessionStorage.setItem("bc_chat_vt", vt); } catch {} }
  }, [vt]);
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [msgs, open, waiting]);

  async function post(path: string, body: unknown) {
    const r = await fetch(API + path, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const d = await r.json().catch(() => ({}));
    // The platform's own words reach the visitor. "A phone or an email — some
    // way to answer you" is useful; "something went wrong" is not.
    if (!r.ok || d.ok === false) throw new Error(d.error || "That didn't send.");
    return d;
  }

  /* Wait for the reply that is being written right now. */
  const awaitReply = useCallback(async (token: string, had: number) => {
    setWaiting(true); setSlow(false);
    const until = Date.now() + WAIT_MS;
    while (Date.now() < until && !stop.current) {
      await new Promise((r) => setTimeout(r, POLL_MS));
      try {
        const r = await fetch(
          `${API}/chat/thread?vt=${encodeURIComponent(token)}`);
        const d = await r.json();
        const list: Msg[] = d.messages || [];
        if (list.length > had) { setMsgs(list); setWaiting(false); return; }
      } catch { /* a dropped poll is not an error worth showing */ }
    }
    setWaiting(false); setSlow(true);
  }, []);

  async function send(e: React.FormEvent) {
    e.preventDefault();
    const mine = draft.trim();
    if (!mine || busy) return;
    setErr(""); setBusy(true); setDraft(""); setSlow(false);
    try {
      if (!vt) {
        const d = await post("/chat/start", { t: SITE_TOKEN, message: mine });
        const list: Msg[] = d.messages || [];
        setVt(d.vt); setMsgs(list);
        if (d.thinking) await awaitReply(d.vt, list.length);
      } else {
        const d = await post("/chat/say", { vt, message: mine });
        const list: Msg[] = d.messages || [];
        setMsgs(list);
        if (d.thinking) await awaitReply(vt, list.length);
      }
    } catch (e) {
      setDraft(mine);
      setErr(e instanceof Error ? e.message : "That didn't send.");
    } finally { setBusy(false); }
  }

  const panel: React.CSSProperties = {
    width: 348, maxWidth: "calc(100vw - 44px)", background: "var(--raise)",
    border: "1px solid var(--line)", borderRadius: 14, padding: 18,
    marginBottom: 12, boxShadow: "0 18px 50px rgba(11,12,13,.16)",
  };

  return (
    <div style={{ position: "fixed", right: 22, bottom: 22, zIndex: 60 }}>
      {open && (
        <div style={panel} role="dialog" aria-label="Chat with BizzyCube">
          <div style={{ display: "flex", justifyContent: "space-between",
                        alignItems: "center", marginBottom: 12 }}>
            <span style={{ fontSize: 15, fontWeight: 500 }}>Ask us anything</span>
            <button onClick={() => setOpen(false)} aria-label="Close chat"
              style={{ background: "transparent", border: "none", padding: 0,
                       color: "var(--muted)", fontSize: 22, lineHeight: 1,
                       cursor: "pointer" }}>×</button>
          </div>

          {msgs.length === 0 && (
            <p style={{ fontSize: 13.5, color: "var(--muted)", lineHeight: 1.6 }}>
              No form first. Ask whether we&apos;d suit your business, what
              we&apos;d fix first, or anything else — and say the word if
              you&apos;d rather a person rang you.
            </p>
          )}

          {msgs.length > 0 && (
            <div style={{ maxHeight: 280, overflowY: "auto",
                          margin: "0 -4px 12px", padding: "0 4px" }}>
              {msgs.map((m, i) => (
                <div key={i} style={{
                  display: "flex",
                  justifyContent: m.direction === "out" ? "flex-start" : "flex-end",
                  marginBottom: 8,
                }}>
                  <span style={{
                    maxWidth: "86%",
                    background: m.direction === "out"
                      ? "var(--bg)" : "var(--accent)",
                    border: `1px solid ${m.direction === "out"
                      ? "var(--line)" : "var(--accent)"}`,
                    color: m.direction === "out" ? "var(--ink)" : "#fff",
                    padding: "9px 12px", borderRadius: 12, fontSize: 14,
                    lineHeight: 1.5, whiteSpace: "pre-wrap",
                  }}>{m.body}</span>
                </div>
              ))}
              {waiting && (
                <p style={{ fontSize: 13, color: "var(--muted)", margin: "2px 0" }}>
                  Typing…
                </p>
              )}
              {slow && (
                <p style={{ fontSize: 13, color: "var(--muted)", margin: "2px 0" }}>
                  Still thinking about that one — it&apos;s in the inbox either
                  way, so a person will pick it up if the answer doesn&apos;t
                  land here.
                </p>
              )}
              <div ref={endRef} />
            </div>
          )}

          <form onSubmit={send}>
            <textarea
              className="bz-field"
              style={{ minHeight: 58, marginTop: msgs.length ? 0 : 12 }}
              placeholder="Type a message…"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  send(e as unknown as React.FormEvent);
                }
              }}
            />
            <button type="submit" className="bz-btn"
                    style={{ width: "100%", marginTop: 14 }} disabled={busy}>
              {busy ? "Sending…" : "Send"}
            </button>
          </form>

          {err && (
            <p style={{ fontSize: 13, color: "#B3261E", marginTop: 10 }}>{err}</p>
          )}
        </div>
      )}

      <button onClick={() => setOpen(!open)}
        aria-label={open ? "Close chat" : "Chat with BizzyCube"}
        style={{
          width: 54, height: 54, borderRadius: "50%", border: "none",
          cursor: "pointer", background: "var(--ink)", color: "var(--bg)",
          fontSize: 14, fontWeight: 500, fontFamily: "inherit",
          boxShadow: "0 10px 26px rgba(11,12,13,.22)",
        }}>{open ? "×" : "Chat"}</button>
    </div>
  );
}
