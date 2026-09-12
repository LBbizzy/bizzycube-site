import Link from "next/link";
import { notFound } from "next/navigation";
import LeadForm from "@/components/LeadForm";
import { getPost, listPosts, paragraphs, dateWords, excerpt, SITE_TOKEN } from "@/lib/blog";

export const revalidate = 300;

export async function generateStaticParams() {
  const posts = await listPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Not found — BizzyCube" };
  return { title: `${post.title} — BizzyCube`, description: excerpt(post.body, 155) };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();
  const paras = paragraphs(post.body);
  return (
    <div className="bz-wrap bz-tight">
      <section className="bz-sec">
        <p className="bz-kicker">
          <Link href="/blog" style={{ color: "inherit", textDecoration: "none" }}>Blog</Link>
          {" · "}{dateWords(post.published_at)}
        </p>
        <h1 className="bz-serif" style={{
          fontSize: "clamp(32px,4.8vw,54px)", marginTop: 16, maxWidth: "20ch",
        }}>
          {post.title}
        </h1>
        <div style={{ maxWidth: "62ch", marginTop: 30 }}>
          {paras.map((p, i) => {
            const head = p.match(/^\*\*(.+)\*\*$/) || p.match(/^#+\s*(.+)$/);
            return head ? (
              <h2 key={i} className="bz-serif" style={{ fontSize: "clamp(22px,2.6vw,28px)", margin: "1.6em 0 .5em" }}>{head[1]}</h2>
            ) : (
              <p key={i} style={{ fontSize: 18.5, lineHeight: 1.6, margin: "0 0 1.2em" }}>{p.replace(/\*\*/g, "")}</p>
            );
          })}
        </div>

        <div style={{ marginTop: 56 }}>
          <LeadForm
            token={SITE_TOKEN}
            heading="Sound familiar?"
            blurb="Tell us how to reach you. We'll look at how work reaches you today and tell you straight what's falling through."
            submitLabel="Book a 15-minute call"
            messageLabel="What's the one thing you'd fix? (optional)"
          />
          <p className="bz-fine" style={{ marginTop: 22 }}>
            Or call or text{" "}
            <a href="tel:+18337258858" style={{ color: "var(--accent)" }}>(833) 725-8858</a>.
          </p>
        </div>
      </section>
    </div>
  );
}
