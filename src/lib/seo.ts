/* SEARCH ENGINES AND AI ANSWERS (2026-09-27).
 *
 * LB: "all optimized to come up on search engines and AI search engines."
 * Google and the AI answer engines (ChatGPT, Claude, Perplexity, Gemini) read
 * the same three things: a sitemap that lists every page, plain words about
 * what the company does, and structured data that labels each page for what
 * it is. This file is the one place those labels are built, so every page —
 * hand-written, fed from the War Room, trade page or blog post — says the
 * same thing about BizzyCube. */
import type { Check } from "./funnels";

export const SITE = "https://bizzycube.com";
export const PHONE = "+1-833-725-8858";

export const ORG = {
  "@type": "Organization",
  "@id": `${SITE}/#org`,
  name: "BizzyCube",
  legalName: "BizzyCube LLC",
  url: SITE,
  logo: `${SITE}/bizzycube-mark.png`,
  telephone: PHONE,
  areaServed: "US",
  sameAs: [
    "https://www.instagram.com/bizzycubeapp/",
    "https://www.youtube.com/@bizzycubeapp",
  ],
};

export const PRODUCT = {
  "@type": "SoftwareApplication",
  "@id": `${SITE}/#app`,
  name: "BizzyCube",
  applicationCategory: "BusinessApplication",
  operatingSystem: "iOS, Web",
  url: SITE,
  publisher: { "@id": `${SITE}/#org` },
  description:
    "BizzyCube runs the office side of small service businesses: it answers and texts back calls the owner can't take, books jobs into the schedule, follows up quotes, sends invoices, keeps the time clock and posts to social media.",
};

export function faq(checks: Check[] = []) {
  return {
    "@type": "FAQPage",
    mainEntity: checks.map((c) => ({
      "@type": "Question",
      name: c.q,
      acceptedAnswer: { "@type": "Answer", text: c.a },
    })),
  };
}

export function webPage(path: string, title: string, description: string) {
  return {
    "@type": "WebPage",
    "@id": `${SITE}${path}#page`,
    url: `${SITE}${path}`,
    name: title,
    description,
    isPartOf: { "@type": "WebSite", "@id": `${SITE}/#site`, url: SITE, name: "BizzyCube" },
    about: { "@id": `${SITE}/#app` },
    publisher: { "@id": `${SITE}/#org` },
  };
}

/** A <script type="application/ld+json"> body, with < escaped (Next's advice). */
export function ld(...nodes: object[]) {
  return JSON.stringify({ "@context": "https://schema.org", "@graph": nodes }).replace(/</g, "\\u003c");
}
