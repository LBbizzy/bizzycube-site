import Link from "next/link";

export const metadata = {
  title: "Support — BizzyCube",
  description: "How to reach Bizzy Cube LLC for help with BizzyCube, ZappHobby or HomeScan.",
};

export default function Page() {
  return (
    <div className="bz-wrap bz-tight">
      <section className="bz-sec">
        <p className="bz-kicker">Support</p>
        <h1 className="bz-serif" style={{ fontSize: "clamp(34px,5.4vw,56px)", marginTop: 16 }}>
          Real people, in Tucson.
        </h1>
        <div className="bz-prose" style={{ marginTop: 28 }}>
          <h2>Reach us</h2>
          <ul>
            <li>Email: <a href="mailto:support@bizzycube.com">support@bizzycube.com</a> — we answer within one business day.</li>
            <li>Phone: <a href="tel:+18337258858">(833) 725-8858</a> — answered 24/7.</li>
            <li>Mail: Bizzy Cube LLC, 115 E Plata St, Tucson, AZ 85705</li>
          </ul>
          <h2>Our apps</h2>
          <ul>
            <li><a href="https://zapphobby.com/support">ZappHobby support</a> · <a href="https://zapphobby.com/delete-account">delete a ZappHobby account</a></li>
            <li><a href="https://gethomescan.com/support">HomeScan support</a> · <a href="https://gethomescan.com/delete-account">delete a HomeScan account</a></li>
          </ul>
          <h2>BizzyCube customers</h2>
          <p>
            Sign in at <a href="https://app.bizzycube.com">app.bizzycube.com</a>, or call the number above.
            To delete your data, see <Link href="/data-deletion">data deletion</Link>. Our{" "}
            <Link href="/privacy">privacy policy</Link> and <Link href="/terms">terms</Link> cover everything we publish.
          </p>
        </div>
      </section>
    </div>
  );
}
