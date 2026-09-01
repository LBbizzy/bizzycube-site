import Link from "next/link";

/* THE HOME PAGE.
 *
 * Problem in the visitor's own words on the left, outcome beside it. No
 * department names, no feature lists, no mechanism, no price. Someone
 * scanning reads only the left column and diagnoses themselves — and a
 * competitor reading the whole thing learns what we're good at, not how it
 * is built.
 */

const LEAKS: [string, string][] = [
  [
    "I was up a ladder. By the time I rang back they'd booked someone else.",
    "Somebody answers properly, in a real voice, whatever time it is — finds out what's needed, writes it down, and it's on your list before you've wiped your hands.",
  ],
  [
    "Six missed calls yesterday. No idea who any of them were.",
    "A missed call gets a text back within seconds, while they're still deciding. Most reply. All of them end up on your list with a number you can ring.",
  ],
  [
    "Some are texts, some are emails, some are on a Post-it, some are in my head.",
    "Calls, texts, website messages, chats and forms all land in one place — with what each person wanted and when they asked.",
  ],
  [
    "I typed the quote on my phone at eleven at night. It looked like it.",
    "A priced offer that looks like a real business sent it, built from your own rates, out the same day — and signed without anyone printing anything.",
  ],
  [
    "They said go ahead three weeks ago. I still haven't billed them.",
    "The bill follows the yes on its own, with a pay button on it. You can see what's owed without going looking for it.",
  ],
  [
    "I sent forty quotes last quarter. I chased maybe six.",
    "Anyone who goes quiet gets followed up on a schedule, in your voice, until they answer either way. You just see who replied.",
  ],
  [
    "Last post was March. Two reviews, both from 2023.",
    "Posts and photos go out every week without you writing them, and happy customers get asked for a review at the moment they're happiest.",
  ],
  [
    "I find out what I made in March sometime in July.",
    "What came in, what went out and what's actually left — current, tied to the real bank account and the real ledger, not a spreadsheet you maintain.",
  ],
];

const WHO: [string, string][] = [
  ["Med spas", "Bookings lost to voicemail mid-treatment"],
  ["Restaurants", "Catering enquiries nobody calls back"],
  ["Salons", "No-shows and empty chairs, no reminders out"],
  ["Contractors", "Quotes written at midnight, chased never"],
  ["Clinics", "New-patient calls that ring out at lunch"],
  ["Home services", "Six missed calls a day, none returned"],
  ["Agencies", "Proposals out, follow-up forgotten"],
  ["Real estate", "Enquiries buried across three inboxes"],
  ["Auto shops", "Estimates by phone, nothing written down"],
  ["Everyone else", "If the phone matters, it works the same"],
];

const REPLACES: [string, string][] = [
  ["Part-time receptionist", "~$2,400/mo"],
  ["Bookkeeper", "~$800/mo"],
  ["Freelance marketer", "~$1,500/mo"],
  ["Somebody to chase quotes", "never hired"],
];

export default function HomePage() {
  return (
    <>
      <div className="bz-wrap">
        <section className="bz-hero">
          <p className="bz-kicker">The front desk you can&apos;t afford to hire</p>
          <h1 className="bz-serif" style={{ marginTop: 18 }}>
            The work you lose, you never <em>hear about.</em>
          </h1>
          <p className="bz-sub">
            Nobody tells you about the call that rang out, the quote that never
            went, or the customer who booked somewhere else on Tuesday. We pick
            it all up — and chase it.
          </p>
          <div className="bz-row">
            <Link href="/contact" className="bz-btn bz-btn--big">
              Book a 15-minute call
            </Link>
            <Link href="/#what-we-fix" className="bz-btn bz-btn--big bz-btn--out">
              See what we fix
            </Link>
          </div>
          <p className="bz-under">
            No card. No pitch. We map where your business leaks, live on the call.
          </p>
        </section>
      </div>

      <div className="bz-wrap">
        <div className="bz-strip">
          <div>
            <span className="bz-n bz-serif">24/7</span>
            <span className="bz-t">Somebody answers the phone, including Sunday night</span>
          </div>
          <div>
            <span className="bz-n bz-serif">Seconds</span>
            <span className="bz-t">A missed call gets a text back before they try the next name</span>
          </div>
          <div>
            <span className="bz-n bz-serif">One</span>
            <span className="bz-t">Every enquiry, from every direction, in one list</span>
          </div>
          <div>
            <span className="bz-n bz-serif">Same day</span>
            <span className="bz-t">Quotes out, signed, invoiced without you at a desk</span>
          </div>
        </div>
      </div>

      <div className="bz-wrap">
        <section className="bz-sec" id="what-we-fix">
          <div className="bz-head">
            <p className="bz-kicker">What&apos;s going on · what we do about it</p>
            <h2 className="bz-serif">You already know where it&apos;s going wrong.</h2>
            <p>
              Eight ordinary leaks. Read the left-hand column — if two or more
              sound like your week, we should talk.
            </p>
          </div>

          {LEAKS.map(([said, does], i) => (
            <div className="bz-item" key={i}>
              <span className="bz-idx">{String(i + 1).padStart(2, "0")}</span>
              <p className="bz-said">{"“" + said + "”"}</p>
              <div className="bz-does">
                <span className="bz-lab">What we do</span>
                <p>{does}</p>
              </div>
            </div>
          ))}
        </section>
      </div>

      <div className="bz-wrap">
        <section className="bz-sec bz-sec--top0" id="who-its-for">
          <div className="bz-head">
            <p className="bz-kicker">Who it&apos;s for</p>
            <h2 className="bz-serif">
              Businesses where the owner is also the front desk.
            </h2>
            <p>
              Different trades, same week. If you&apos;re the one who answers,
              quotes and remembers to post something, it was built for you.
            </p>
          </div>
          <div className="bz-who">
            {WHO.map(([who, why]) => (
              <div key={who}>
                <b>{who}</b>
                <span>{why}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="bz-band">
        <div className="bz-wrap">
          <div className="bz-cols">
            <div>
              <p className="bz-kicker">What it costs</p>
              <h2 className="bz-serif" style={{ marginTop: 14 }}>
                Less than the person you&apos;d otherwise have to hire.
              </h2>
              <p style={{ marginTop: 20 }}>
                You don&apos;t need a receptionist, a bookkeeper, a marketer and
                somebody to chase quotes. You need those jobs done.
              </p>
              <p>
                You&apos;ll get a straight number on the call, once we&apos;ve
                seen which parts you actually need. Quoting before that is how
                people end up paying for software they never open.
              </p>
              <Link
                href="/contact"
                className="bz-btn bz-btn--pale"
                style={{ marginTop: 12 }}
              >
                Get a number
              </Link>
            </div>
            <div>
              <p className="bz-kicker" style={{ marginBottom: 16 }}>
                What it replaces
              </p>
              <div className="bz-repl">
                {REPLACES.map(([what, cost]) => (
                  <div key={what}>
                    <span>{what}</span>
                    <span>{cost}</span>
                  </div>
                ))}
                <div className="bz-us">
                  <span>BizzyCube</span>
                  <span>one number, on the call</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bz-wrap">
        <section className="bz-close">
          <h2 className="bz-serif">
            Fifteen minutes. We&apos;ll show you where it&apos;s leaking.
          </h2>
          <p>
            Nothing to prepare. We look at how work reaches you today and tell
            you straight what&apos;s falling through — whether or not you hire
            us.
          </p>
          <div className="bz-row">
            <Link href="/contact" className="bz-btn bz-btn--big">
              Book a 15-minute call
            </Link>
            <a href="tel:+18337258858" className="bz-btn bz-btn--big bz-btn--out">
              Or call (833) 725-8858
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
