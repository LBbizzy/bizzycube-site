import { FUNNELS } from "@/lib/funnels";
import { listNeeds } from "@/lib/needs";
import { listPosts } from "@/lib/blog";
import { TRADES } from "@/lib/trades";
import { SITE, PRODUCT } from "@/lib/seo";

/* bizzycube.com/llms.txt — the plain-words summary AI answer engines read to
 * learn what a company does and where its pages are (llmstxt.org). Built from
 * the same data as the site, so it never says something the pages don't. */
export const revalidate = 3600;

export async function GET() {
  const needs = await listNeeds().catch(() => []);
  const seen = new Set<string>();
  const pages = [...FUNNELS, ...needs].filter((f) => !seen.has(f.slug) && seen.add(f.slug));
  const posts = await listPosts().catch(() => []);
  const lines = [
    "# BizzyCube",
    "",
    `> ${PRODUCT.description}`,
    "",
    "BizzyCube is built for owner-operated service businesses — roofers, HVAC, plumbers, electricians, contractors, med spas, real estate agents and similar — where the owner is also the front desk. It works from one iPhone app and a web office. Call or text (833) 725-8858.",
    "",
    "## Problems it solves",
    ...pages.map((f) => `- [${f.source}](${SITE}/${f.slug}): ${f.description}`),
    "",
    "## By trade",
    ...TRADES.map((t) => `- [${t.people}](${SITE}/${t.slug}): ${t.description}`),
    "",
    "## Blog",
    ...posts.slice(0, 40).map((p) => `- [${p.title}](${SITE}/blog/${p.slug})`),
    "",
    "## Company",
    `- [About](${SITE}/about)`,
    `- [Contact](${SITE}/contact)`,
  ];
  return new Response(lines.join("\n") + "\n", {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
