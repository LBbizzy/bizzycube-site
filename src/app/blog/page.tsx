import Link from "next/link";
import { listPosts, excerpt, dateWords } from "@/lib/blog";

export const metadata = {
  title: "Blog — BizzyCube",
  description:
    "Plain notes on the work that falls through in a small business — missed calls, late quotes, follow-up nobody did — and what to do about it.",
};

export const revalidate = 300;

export default async function Page() {
  const posts = await listPosts();
  return (
    <div className="bz-wrap bz-tight">
      <section className="bz-sec">
        <p className="bz-kicker">Blog</p>
        <h1 className="bz-serif" style={{
          fontSize: "clamp(34px,5.4vw,60px)", marginTop: 16, maxWidth: "16ch",
        }}>
          Notes from the{" "}
          <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
            front desk.
          </em>
        </h1>
        <p style={{ fontSize: 19.5, lineHeight: 1.5, color: "var(--muted)",
                    maxWidth: "48ch", margin: "26px 0 0" }}>
          Short, plain pieces on the work that slips in a small business, and
          what it looks like when it stops slipping.
        </p>

        {posts.length === 0 ? (
          <p className="bz-dim" style={{ marginTop: 48 }}>
            The first post is on its way.
          </p>
        ) : (
          <div style={{ marginTop: 56, display: "grid", gap: 36, maxWidth: "62ch" }}>
            {posts.map((p) => (
              <article key={p.slug} style={{ display: "grid", gridTemplateColumns: p.image ? "minmax(0,1fr) 148px" : "1fr", gap: 22, alignItems: "start" }}>
                <div>
                <p className="bz-kicker">{dateWords(p.published_at)}</p>
                <h2 className="bz-serif" style={{ fontSize: "clamp(24px,3vw,32px)", margin: "8px 0 10px" }}>
                  <Link href={`/blog/${p.slug}`} style={{ color: "inherit", textDecoration: "none" }}>
                    {p.title}
                  </Link>
                </h2>
                <p style={{ color: "var(--muted)", lineHeight: 1.55, margin: 0 }}>
                  {excerpt(p.body)}
                </p>
                <p style={{ marginTop: 10 }}>
                  <Link href={`/blog/${p.slug}`} style={{ color: "var(--accent)" }}>
                    Read it →
                  </Link>
                </p>
                </div>
                {p.image ? (
                  <Link href={`/blog/${p.slug}`} aria-hidden tabIndex={-1}>
                    <img src={p.image} alt="" loading="lazy"
                         style={{ width: 148, height: 148, objectFit: "cover", borderRadius: 10, display: "block" }} />
                  </Link>
                ) : null}
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
