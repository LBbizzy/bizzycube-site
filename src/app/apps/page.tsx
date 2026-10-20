import Link from "next/link";

export const metadata = {
  title: "Our apps — BizzyCube",
  description:
    "Apps built and published by Bizzy Cube LLC, powered by the same BizzyCube platform: ZappHobby for collectors and card sellers, and HomeScan, the AI home pro. Coming soon to iPhone and Android.",
};

/* Every app here runs on the BizzyCube platform: the same AI assistant, inbox,
 * books and scheduling the front desk uses, aimed at one kind of customer.
 * Copy is facts only — what each app does today — and both are marked
 * "coming soon" until they are live in the stores. */
const APPS = [
  {
    name: "ZappHobby",
    href: "https://zapphobby.com",
    logo: "/apps/zapphobby.png",
    tint: "#FFE32A",
    line: "The collector's app for cards, TCG, comics and sealed.",
    body:
      "Point your phone at any card, comic, pack or box and know what it is and what it's worth. ZappHobby keeps the whole collection organized with where every piece lives — and gives sellers the business side: the card show table, live breaks, their own shop website, consignment and the books.",
    points: [
      "Scan, price and grade from a photo",
      "Collection value tracked on a schedule",
      "Card shows, breaks and live selling",
      "DJ, the built-in AI dealer",
    ],
  },
  {
    name: "HomeScan",
    href: "https://gethomescan.com",
    logo: "/apps/homescan.png",
    tint: "#FFC53D",
    line: "Your AI home pro — fix it, design it, remodel it.",
    body:
      "Snap a photo of the leak, the crack or the room you hate. HomeScan tells you what it is and what to do, shows the room redone before you spend a dime, measures, estimates, tracks every receipt and coaches you through an insurance claim — one folder per project.",
    points: [
      "Fix it, Design it and Remodel it modes",
      "Room redesigns of your actual room",
      "Measurements, estimates and receipts",
      "Insurance claim coach and project reports",
    ],
  },
];

export default function Page() {
  return (
    <div className="bz-wrap bz-tight">
      <section className="bz-sec">
        <p className="bz-kicker">Our apps</p>
        <h1 className="bz-serif" style={{ fontSize: "clamp(34px,5.4vw,60px)", marginTop: 16, maxWidth: "18ch" }}>
          The same engine,{" "}
          <em style={{ fontStyle: "italic", color: "var(--accent)" }}>pointed at one job.</em>
        </h1>
        <p style={{ fontSize: 19.5, lineHeight: 1.5, color: "var(--muted)", maxWidth: "52ch", margin: "26px 0 0" }}>
          BizzyCube is the platform that answers, quotes, chases and keeps the books for small businesses.
          We also build focused apps on top of it — each one made for a single kind of customer, each one
          powered by BizzyCube underneath.
        </p>

        <div className="bz-apps">
          {APPS.map((a) => (
            <article key={a.name} className="bz-app" style={{ ["--tint" as string]: a.tint }}>
              <div className="bz-app-top">
                <img src={a.logo} alt={`${a.name} logo`} width={72} height={72} className="bz-app-logo" />
                <div>
                  <h2 className="bz-app-name">{a.name}</h2>
                  <p className="bz-app-line">{a.line}</p>
                </div>
                <span className="bz-app-soon">Coming soon · iPhone &amp; Android</span>
              </div>
              <p className="bz-app-body">{a.body}</p>
              <ul className="bz-app-points">
                {a.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
              <div className="bz-app-foot">
                <span className="bz-app-pow">Powered by BizzyCube</span>
                <a href={a.href} className="bz-btn">Visit {a.name} →</a>
              </div>
            </article>
          ))}
        </div>

        <p className="bz-under" style={{ marginTop: 40 }}>
          ZappHobby and HomeScan are published by Bizzy Cube LLC, 115 E Plata St, Tucson, AZ 85705.
          Questions about any of our apps: <a href="mailto:support@bizzycube.com" style={{ textDecoration: "underline" }}>support@bizzycube.com</a>{" "}
          or <Link href="/support" style={{ textDecoration: "underline" }}>Support</Link>.
        </p>
      </section>
    </div>
  );
}
