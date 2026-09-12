/* THE BLOG.
 *
 * The War Room is the newsroom; this site is the newsstand. Posts are written
 * (by a person or by the content cadence), approved and published inside
 * BizzyCube, and this site reads them off a signed feed. Nothing is authored
 * here, so the blog never drifts from what the company actually said.
 *
 * The token names company + site + published. It is the same token the
 * contact form carries; the only thing anyone can do with it is read what is
 * already public. */

const FEED =
  "https://dztu1141o7.execute-api.us-west-2.amazonaws.com/w/blog.json";
export const SITE_TOKEN =
  "d3NpdGV8Yml6enljdWJlfHdzX2Jpenp5Y3ViZXNpdGV8cHVi.WdDN_E3h_D11Drw1xTlhi2bHnTeBZz0J";

export type Post = {
  slug: string;
  title: string;
  body: string;
  published_at: string;
  updated_at: string;
  image?: string;
};

/* Text → pieces, with links made clickable. The writer puts addresses in
 * plain words ("bizzycube.com/missed-calls", "https://…"); a reader should be
 * able to tap them. Only http(s) and our own bare domain are linked. */
export type Piece = { t: "text"; s: string } | { t: "link"; s: string; href: string };
const LINK_RE = /(https?:\/\/[^\s)]+|(?:^|(?<=\s|\())bizzycube\.com(?:\/[^\s).,]*)?)/g;
export function pieces(text: string): Piece[] {
  const out: Piece[] = [];
  let i = 0;
  for (const m of text.matchAll(LINK_RE)) {
    const start = m.index ?? 0;
    if (start > i) out.push({ t: "text", s: text.slice(i, start) });
    const raw = m[0].replace(/[.,]$/, "");
    out.push({ t: "link", s: raw, href: raw.startsWith("http") ? raw : `https://${raw}` });
    i = start + raw.length;
  }
  if (i < text.length) out.push({ t: "text", s: text.slice(i) });
  return out;
}

async function feed(params = ""): Promise<Post[]> {
  const res = await fetch(`${FEED}?t=${SITE_TOKEN}${params}`, {
    next: { revalidate: 300 },
  });
  if (!res.ok) return [];
  const j = (await res.json()) as { ok: boolean; posts?: Post[] };
  return j.ok && j.posts ? j.posts : [];
}

export const listPosts = () => feed();
export const getPost = async (slug: string) =>
  (await feed(`&slug=${encodeURIComponent(slug)}`))[0] ?? null;

export function paragraphs(body: string): string[] {
  return body
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);
}

export function excerpt(body: string, n = 180): string {
  const flat = body.replace(/\s+/g, " ").trim();
  if (flat.length <= n) return flat;
  return flat.slice(0, n).replace(/\s+\S*$/, "") + "…";
}

export function dateWords(iso: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric", timeZone: "America/Phoenix",
  });
}
