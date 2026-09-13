/* THE LANDING PAGES THAT LIVE IN THE WAR ROOM (build 231).
 *
 * The eight pages in funnels.ts were written by hand. Every page after them
 * is written by the platform — one row per need, copy drafted by the writer,
 * published from the War Room — and served here from a signed feed, the same
 * way the blog is. A new need is live in minutes, no deploy. Same FunnelPage,
 * same form, same door: only the words change. */
import type { Funnel } from "./funnels";
import { SITE_TOKEN } from "./blog";

const FEED =
  "https://dztu1141o7.execute-api.us-west-2.amazonaws.com/w/funnels.json";

async function feed(params = ""): Promise<Funnel[]> {
  try {
    const res = await fetch(`${FEED}?t=${SITE_TOKEN}${params}`, {
      next: { revalidate: 300 },
    });
    if (!res.ok) return [];
    const j = (await res.json()) as { ok: boolean; pages?: Funnel[] };
    return j.ok && j.pages ? j.pages : [];
  } catch {
    return [];
  }
}

export const listNeeds = () => feed();
export const getNeed = async (slug: string) =>
  (await feed(`&slug=${encodeURIComponent(slug)}`))[0] ?? null;
