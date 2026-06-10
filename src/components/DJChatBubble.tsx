"use client";
import { useState } from "react";

export default function DJChatBubble() {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ position: "fixed", bottom: 24, right: 24, zIndex: 100 }}>
      {open && (
        <div style={{ position: "absolute", bottom: 72, right: 0, width: 340, background: "#0e1119", border: "1px solid #2c333f", borderRadius: 14, padding: 18, boxShadow: "0 20px 60px rgba(0,0,0,0.4)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
            <div style={{ fontSize: 15, fontWeight: 700, color: "#fff" }}>👋 Chat with DJ</div>
            <button onClick={() => setOpen(false)} style={{ background: "transparent", border: "none", color: "#94a3b8", fontSize: 20, cursor: "pointer" }}>×</button>
          </div>
          <p style={{ fontSize: 13, color: "#cbd5e1", lineHeight: 1.6, marginBottom: 14 }}>
            Ask anything about how BizzyCube would run YOUR business — pricing, fit, what we&apos;d build first. DJ is our agency AI, runs 24/7.
          </p>
          <a href="/contact?cta=chat" style={{ display: "block", textAlign: "center", background: "#2563eb", color: "#fff", padding: "10px 16px", borderRadius: 8, fontSize: 13, fontWeight: 600 }}>
            Start a conversation →
          </a>
        </div>
      )}
      <button onClick={() => setOpen(!open)} aria-label="Chat with DJ" style={{ width: 56, height: 56, borderRadius: "50%", background: "linear-gradient(135deg, #534AB7, #5fd3f3)", border: "none", cursor: "pointer", fontSize: 26, color: "#fff", boxShadow: "0 8px 24px rgba(83, 74, 183, 0.4)" }}>
        💬
      </button>
    </div>
  );
}
