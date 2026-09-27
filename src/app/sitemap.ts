import type { MetadataRoute } from "next";
import { FUNNELS } from "@/lib/funnels";
import { listNeeds } from "@/lib/needs";
import { listPosts } from "@/lib/blog";
import { TRADES } from "@/lib/trades";
import { SITE } from "@/lib/seo";

/* Every public page, for Google and the AI crawlers. Landing pages and blog
 * posts published from the War Room join on their own (the feeds are read
 * here), so a new page is listed without a deploy. */
export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const fixed = ["", "/about", "/contact", "/blog", "/privacy", "/terms"].map((p) => ({
    url: `${SITE}${p}`, lastModified: now, changeFrequency: "weekly" as const, priority: p === "" ? 1 : 0.5,
  }));
  const needs = await listNeeds().catch(() => []);
  const slugs = new Set([...FUNNELS.map((f) => f.slug), ...needs.map((n) => n.slug)]);
  const landing = [...slugs].map((s) => ({
    url: `${SITE}/${s}`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.9,
  }));
  const trades = TRADES.map((t) => ({
    url: `${SITE}/${t.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.9,
  }));
  const posts = (await listPosts().catch(() => [])).map((p) => ({
    url: `${SITE}/blog/${p.slug}`, lastModified: new Date(p.updated_at || p.published_at || now),
    changeFrequency: "monthly" as const, priority: 0.7,
  }));
  return [...fixed, ...landing, ...trades, ...posts];
}
