import { notFound } from "next/navigation";
import FunnelPage from "@/components/FunnelPage";
import { TRADES, TRADE_BY_KEY } from "@/lib/trades";

/* bizzycube.com/for/roofers, /for/plumbers … — one page per trade. */
export const dynamicParams = false;
export function generateStaticParams() {
  return TRADES.map((t) => ({ trade: t.key }));
}

type Props = { params: Promise<{ trade: string }> };

export async function generateMetadata({ params }: Props) {
  const { trade } = await params;
  const t = TRADE_BY_KEY[trade];
  return t ? { title: t.title, description: t.description } : {};
}

export default async function Page({ params }: Props) {
  const { trade } = await params;
  const t = TRADE_BY_KEY[trade];
  if (!t) notFound();
  return <FunnelPage f={t} />;
}
