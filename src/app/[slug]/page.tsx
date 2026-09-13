import { notFound } from "next/navigation";
import FunnelPage from "@/components/FunnelPage";
import { getNeed } from "@/lib/needs";

/* Any landing page the War Room has published. The hand-written pages in
 * src/app/<slug>/ still win (Next matches static routes first); everything
 * else comes from the feed. Unknown slug → the honest 404. */
export const revalidate = 300;

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const f = await getNeed(slug);
  return f ? { title: f.title, description: f.description } : {};
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const f = await getNeed(slug);
  if (!f) notFound();
  return <FunnelPage f={f} />;
}
