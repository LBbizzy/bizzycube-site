import Link from "next/link";
import FunnelPage from "@/components/FunnelPage";
import { BY_SLUG } from "@/lib/funnels";
import { TRADES } from "@/lib/trades";

const f = BY_SLUG["for-your-trade"];
export const metadata = { title: f.title, description: f.description };
export default function Page() {
  return (
    <>
      <FunnelPage f={f} />
      {/* one page per trade — found by people (and search engines) looking for theirs */}
      <div className="bz-wrap bz-tight">
        <section className="bz-sec" style={{ paddingTop: 0 }}>
          <p className="bz-kicker">Pick your trade</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 16 }}>
            {TRADES.map((t) => (
              <Link key={t.key} href={`/${t.slug}`} className="bz-btn bz-btn--out">{t.people}</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
