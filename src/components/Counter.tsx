"use client";
/* The counter — build 197. One small beacon per page so the Monday note can
 * say how many people came to the site and where from. It sends: the path,
 * the referrer, our own ?via= tag (which platform, which post), and a random
 * visitor id the browser keeps for itself. No third party, no cookies. */
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { SITE_TOKEN } from "@/lib/blog";

const DOOR = "https://dztu1141o7.execute-api.us-west-2.amazonaws.com/w/visit";

declare global { interface Window { __bzTrack?: (kind: string) => void } }

function id() {
  try {
    let v = localStorage.getItem("bz_v");
    if (!v) { v = Math.random().toString(36).slice(2, 12) + Date.now().toString(36); localStorage.setItem("bz_v", v); }
    return v;
  } catch { return ""; }
}

function send(kind: string, path: string) {
  let via = "";
  try {
    const q = new URLSearchParams(window.location.search).get("via");
    if (q) { via = q; sessionStorage.setItem("bz_via", q); } else { via = sessionStorage.getItem("bz_via") || ""; }
  } catch {}
  const body = JSON.stringify({ t: SITE_TOKEN, kind, path, ref: document.referrer || "", via, v: id(), title: document.title.slice(0, 120) });
  try {
    if (navigator.sendBeacon) { navigator.sendBeacon(DOOR, new Blob([body], { type: "text/plain" })); return; }
  } catch {}
  fetch(DOOR, { method: "POST", body, keepalive: true, headers: { "content-type": "text/plain" } }).catch(() => {});
}

export default function Counter() {
  const path = usePathname();
  useEffect(() => {
    let entry = false;
    try { entry = !sessionStorage.getItem("bz_in"); sessionStorage.setItem("bz_in", "1"); } catch {}
    send(entry ? "entry" : "page", path || "/");
  }, [path]);
  useEffect(() => {
    window.__bzTrack = (kind: string) => send(kind, window.location.pathname);
    const onSubmit = () => send("form", window.location.pathname);
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest?.("a[href^='tel:']");
      if (a) send("call", window.location.pathname);
    };
    document.addEventListener("submit", onSubmit, true);
    document.addEventListener("click", onClick, true);
    return () => { document.removeEventListener("submit", onSubmit, true); document.removeEventListener("click", onClick, true); };
  }, []);
  return null;
}
