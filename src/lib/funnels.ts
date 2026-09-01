/* THE LANDING PAGES.
 *
 * One page per problem, not one per product. The main site is for people who
 * already know who we are; these are for everyone else — someone who searched
 * a symptom, clicked an ad, or scanned a code.
 *
 * The pattern, on every one of them:
 *   - the headline is the symptom in the visitor's own words
 *   - one ask, and it is smaller than a phone call
 *   - nothing is named and nothing is priced
 *   - the form carries this page's own signed token, so the lead lands in the
 *     Rolodex tagged with which problem brought them in
 *
 * The tokens are signed by the platform and name company + funnel + published.
 * They are not secrets: the only thing anyone can do with one is create a
 * BizzyCube lead. They cannot be forged.
 */

export type Check = { q: string; a: string };

export type Funnel = {
  slug: string;
  token: string;
  /** what the Rolodex will call it — must match the funnel record's name */
  source: string;
  title: string;
  description: string;
  kicker: string;
  headLead: string;
  headEm: string;
  sub: string;
  cta: string;
  checks: Check[];
  trail?: { h3: string; p: string[]; rows: [string, string][] };
  more?: Check[];
  form: { heading: string; blurb: string; submit: string; message: string };
};

export const FUNNELS: Funnel[] = [
  {
    slug: "missed-calls",
    token: "Zm5sfGJpenp5Y3ViZXxmbl9taXNzZWRjYWxsc3xwdWI.aKSzMOEGHzQhS8AaOkDwtHkbInQauc6S",
    source: "Missed calls",
    title: "Six missed calls yesterday — BizzyCube",
    description:
      "See how many calls you actually missed last week, and what they were worth. Free, on your real number.",
    kicker: "For owners who work with their hands full",
    headLead: "Six missed calls yesterday. No idea",
    headEm: "who any of them were.",
    sub:
      "They didn't leave a message. They rang the next name on the list. You'll never find out what that Tuesday cost you — unless somebody counts.",
    cta: "Show me what I'm missing",
    checks: [
      {
        q: "How many did you actually miss last week?",
        a: "Not a feeling — a number. Most owners guess two or three and the real figure is closer to a dozen once evenings and lunch hours are counted.",
      },
      {
        q: "What happens at 6pm on a Friday?",
        a: "The busiest hours for a homeowner deciding to call somebody are the hours you are least able to answer. That is not a scheduling problem you can fix by trying harder.",
      },
      {
        q: "How long before they try somebody else?",
        a: "Minutes, usually. The first business to answer wins the job far more often than the cheapest one does, and nobody rings back a number that rang out.",
      },
      {
        q: "Would you know if it got worse?",
        a: "A missed call leaves no trace anywhere. It is the only part of your business that can double without a single number on a screen changing.",
      },
    ],
    form: {
      heading: "Show me what I'm missing",
      blurb:
        "A week of missed-call tracking on your real number. Nothing changes about how your phone works — we just count. Free, and the number is yours either way.",
      submit: "Count mine for a week",
      message: "What number should we watch? (optional)",
    },
  },

  {
    slug: "what-did-i-make",
    token: "Zm5sfGJpenp5Y3ViZXxmbl93aGF0aW1hZGV8cHVi.XCuEqbt-oVZMxcbkmQm2LBn4Lx450uha",
    source: "What did I make",
    title: "You'll find out how March went sometime in July — BizzyCube",
    description:
      "A one-page picture of where your money actually went last quarter. Free, no software to install.",
    kicker: "For owners who are also the bookkeeper",
    headLead: "You'll find out how March went",
    headEm: "sometime in July.",
    sub:
      "By then you can't do anything about it. The jobs that lost money already lost it, the customer who never paid has gone quiet, and the receipts are in a box.",
    cta: "Show me where my money went",
    checks: [
      {
        q: "Which jobs actually made money?",
        a: "Most owners can name their biggest job and not their most profitable one. Those are rarely the same job — and the difference is usually labour nobody wrote down.",
      },
      {
        q: "Who owes you right now?",
        a: "Not what you invoiced. What's actually outstanding today, how old it is, and who's stopped replying.",
      },
      {
        q: "What did that cost you to deliver?",
        a: "Materials, hours, the second trip nobody logged. If it isn't captured as it happens, it never gets captured.",
      },
      {
        q: "Can you prove any of it?",
        a: "If an accountant, a lender or an auditor asks for the paperwork behind a number, how long does finding it take — and does all of it still exist?",
      },
    ],
    trail: {
      h3: "The part nobody thinks about until they need it.",
      p: [
        "Bookkeeping tells you what happened. A record proves it happened, when, and who did it. Those are different things, and the second is the one people wish they had.",
        "Everything is written down as it happens — not typed up afterwards. So when somebody asks, the answer already exists.",
      ],
      rows: [
        ["14 Mar · 09:12", "Enquiry came in by phone. Recorded, with what they asked for."],
        ["14 Mar · 16:40", "Price sent. The version they saw, kept as sent."],
        ["16 Mar · 11:02", "Accepted and signed. Who signed, from where, at what time."],
        ["02 Apr · 08:30", "Hours logged against the job as the crew worked it."],
        ["09 Apr · 17:15", "Invoice raised from the job. Paid 12 Apr."],
        ["Any time after", "All of it still there, in order, with the numbers attached."],
      ],
    },
    more: [
      {
        q: "My bookkeeper costs $800 a month and is still six weeks behind.",
        a: "They're behind because they're waiting on you — for receipts, for what a job was, for why that transfer happened. The answers exist by the time they ask.",
      },
      {
        q: "Tax time is a fortnight of my life.",
        a: "It's a fortnight because it's reconstruction. There's nothing to reconstruct if it was written down the day it happened.",
      },
      {
        q: "We got audited and I nearly had a heart attack.",
        a: "An audit is only frightening when the records are thin. Every quote, signature, invoice, payment and change already has a time and a name against it.",
      },
    ],
    form: {
      heading: "Show me where my money went",
      blurb:
        "One page back, on your last quarter. Free, and yours whether or not you go further.",
      submit: "Send it to me",
      message: "What worries you most about the numbers? (optional)",
    },
  },

  {
    slug: "quotes",
    token: "Zm5sfGJpenp5Y3ViZXxmbl9xdW90ZXN8cHVi.xgt_3yIBkN75npp6gPR6T-Z_HFhKSX8J",
    source: "Quotes late and homemade",
    title: "I typed the quote on my phone at eleven at night — BizzyCube",
    description:
      "A sample quote in your branding, built from your own rates. Free, and yours to use.",
    kicker: "For anyone who prices work after hours",
    headLead: "You typed it on your phone at eleven at night.",
    headEm: "It looked like it.",
    sub:
      "The price was right. The document wasn't. Somewhere between the text message and the PDF that never opened, the job went to the outfit whose paperwork looked like a business.",
    cta: "Send me a sample quote",
    checks: [
      {
        q: "How long between the visit and the price?",
        a: "Every day it sits is a day they're collecting other numbers. The quote that arrives first is read carefully; the third one gets skimmed for the total.",
      },
      {
        q: "Does it look like the same business they met?",
        a: "A tidy van and a text message with a number in it are two different companies as far as the customer is concerned, and only one of them looks like it will still exist in a year.",
      },
      {
        q: "Can they say yes without finding a printer?",
        a: "Every extra step between wanting it and agreeing to it is a place the job goes cold. Signing should take a thumb, not an office.",
      },
      {
        q: "Do you price the same job the same way twice?",
        a: "If the rates live in your head, they move. Two customers get two prices for the same work and neither of them was wrong on purpose.",
      },
    ],
    form: {
      heading: "Send me a sample quote",
      blurb:
        "Tell us the kind of work you do and roughly what you charge. We'll build one real, branded quote and send it over. Free, and it's yours to keep using.",
      submit: "Build me one",
      message: "What kind of job should we price? (optional)",
    },
  },

  {
    slug: "follow-up",
    token: "Zm5sfGJpenp5Y3ViZXxmbl9mb2xsb3d1cHxwdWI.ZPn9MQZKVW9RKcBvtlFHoBwbpLM4eEvF",
    source: "Nobody follows up",
    title: "Forty quotes out, six chased — BizzyCube",
    description:
      "A free teardown of what your follow-up actually looks like to a customer today.",
    kicker: "For businesses with a pile of maybes",
    headLead: "Forty quotes went out last quarter.",
    headEm: "You chased maybe six.",
    sub:
      "The other thirty-four weren't noes. They were people who got busy — and quietly became somebody else's customer while your best-priced work sat in a folder.",
    cta: "Tear down my follow-up",
    checks: [
      {
        q: "What happens on day three?",
        a: "For most businesses, nothing. The single highest-value message in the whole process is the one nobody has time to send.",
      },
      {
        q: "Who is following up — and how do they feel about it?",
        a: "Chasing feels like begging when you do it yourself. That is exactly why it doesn't happen, and why it has to stop depending on how you feel that day.",
      },
      {
        q: "How many times before you stop?",
        a: "Most people stop after one. Most yeses arrive after the third or fourth, from someone who genuinely meant to reply and forgot.",
      },
      {
        q: "Do you know who went quiet?",
        a: "If the answer lives across a phone, an inbox and your memory, then no. You know about the ones who annoyed you, not the ones worth money.",
      },
    ],
    form: {
      heading: "Tear down my follow-up",
      blurb:
        "We'll walk through what happens today after you send a price — and show you where it stops. Free, written down, yours to act on with or without us.",
      submit: "Send me the teardown",
      message: "Roughly how many quotes go out a month? (optional)",
    },
  },

  {
    slug: "found-online",
    token: "Zm5sfGJpenp5Y3ViZXxmbl9pbnZpc2libGV8cHVi.PG5pJj2-3Q5jmagHV9wA4ZbXdkTVxkW6",
    source: "You look dead online",
    title: "Last post March. Two reviews, both 2023 — BizzyCube",
    description:
      "A free visibility check: exactly what someone finds when they look your business up.",
    kicker: "For businesses that get checked before they get called",
    headLead: "Last post was March.",
    headEm: "Two reviews, both from 2023.",
    sub:
      "Nobody rings a business that looks closed. They look you up, they can't tell whether you're still trading, and they call the one with forty recent reviews instead.",
    cta: "Check what people see",
    checks: [
      {
        q: "What does your business look like at a glance?",
        a: "Hours, photos, phone number, recent activity. A stranger decides in about four seconds whether you're a going concern, and they're not being unfair about it.",
      },
      {
        q: "When was your last review — and did you ask?",
        a: "Happy customers almost never leave one unprompted. The ones who post without being asked are usually the ones who are cross.",
      },
      {
        q: "Does the same information appear everywhere?",
        a: "An old address, a disconnected number or last year's hours in one place is enough to make somebody give up and try the next result.",
      },
      {
        q: "Who's posting when you're on a job?",
        a: "Nobody. That's the honest answer for most owners, and it's why the account goes quiet for four months at exactly the time business is good.",
      },
    ],
    form: {
      heading: "Check what people see",
      blurb:
        "We'll look you up the way a customer would and send back what we find — good and bad. Free, no obligation, and useful even if you fix it yourself.",
      submit: "Run the check",
      message: "Business name and town? (optional)",
    },
  },

  {
    slug: "one-list",
    token: "Zm5sfGJpenp5Y3ViZXxmbl9vbmVsaXN0fHB1Yg.5bzt-fmKNSCn0zZ7RXum8XhprV35KfIk",
    source: "Enquiries everywhere",
    title: "Texts, emails, a Post-it, and my head — BizzyCube",
    description:
      "A ten-minute walkthrough of one list instead of five. No software to install to see it.",
    kicker: "For owners keeping it all in five places",
    headLead: "Texts, emails, a Post-it,",
    headEm: "and your head.",
    sub:
      "Nothing is lost, exactly. It's just that finding out where a job got to means checking four places and remembering the fifth — and one day you won't.",
    cta: "Show me the one list",
    checks: [
      {
        q: "Where does a new enquiry go?",
        a: "Wherever it arrived. That's the whole problem: the filing system is decided by the customer's choice of app, not by you.",
      },
      {
        q: "Could somebody else run your week?",
        a: "If the answer is no because nobody else could find anything, then you can't take a holiday and you can't hire — those are the same problem.",
      },
      {
        q: "What did you promise that person on Tuesday?",
        a: "It was a phone call, so it isn't written anywhere. The customer remembers it exactly.",
      },
      {
        q: "How many are open right now?",
        a: "Not invoices — conversations. Most owners are carrying twice what they'd guess, and the weight of it is the part that's actually tiring.",
      },
    ],
    form: {
      heading: "Show me the one list",
      blurb:
        "Ten minutes, screen shared, using your own week as the example. Nothing to install and nothing to decide on the call.",
      submit: "Book the ten minutes",
      message: "Where does most of it arrive? (optional)",
    },
  },

  {
    slug: "bottleneck",
    token: "Zm5sfGJpenp5Y3ViZXxmbl9ib3R0bGVuZWNrfHB1Yg.1aq7XbK1UmYP8jJKLibmmcyq4VNMvmAJ",
    source: "You are the bottleneck",
    title: "Nothing happens unless I do it — BizzyCube",
    description:
      "Free: which three jobs to hand over first, and what happens to each one when you do.",
    kicker: "For the owner everything waits on",
    headLead: "Nothing happens",
    headEm: "unless you do it.",
    sub:
      "You're not short of work. You're the narrowest part of your own business — and every extra job makes the queue behind you longer, not the business bigger.",
    cta: "Which three should I hand over?",
    checks: [
      {
        q: "What only you can do — really?",
        a: "Usually two or three things. Everything else is habit, and most of it is habit because handing it over once went badly years ago.",
      },
      {
        q: "What are you doing at nine at night?",
        a: "Whatever it is, it's the thing to move first. Work that only fits into the evening is work that isn't getting your judgement anyway.",
      },
      {
        q: "What happens to the business when you're ill?",
        a: "For a week, it copes. For a month, it doesn't. That gap is the actual risk, and it doesn't show up anywhere in the accounts.",
      },
      {
        q: "Are you growing, or just busier?",
        a: "More hours worked is not more business. If the only lever is you working later, the ceiling is already in sight.",
      },
    ],
    form: {
      heading: "Which three should I hand over?",
      blurb:
        "Tell us roughly how your week goes. We'll come back with the three jobs to move off your plate first and what happens to each one. Free.",
      submit: "Tell me the three",
      message: "What eats the most of your week? (optional)",
    },
  },

  {
    slug: "for-your-trade",
    token: "Zm5sfGJpenp5Y3ViZXxmbl90cmFkZXN8cHVi.5JyqZvP4CYTXiQMda6b9WSo7UeHmshcY",
    source: "By trade",
    title: "Your week, described back to you — BizzyCube",
    description:
      "Med spa, restaurant, salon, contractor, clinic — the same problems, in the language of your trade.",
    kicker: "Med spa · restaurant · salon · contractor · clinic",
    headLead: "You know the week.",
    headEm: "We'll describe it back to you.",
    sub:
      "The trades look nothing alike and the week is identical: the phone goes while your hands are full, the price goes out late, and nobody follows up on any of it.",
    cta: "Talk to us about mine",
    checks: [
      {
        q: "Med spa or clinic: who answers mid-treatment?",
        a: "Voicemail, and a new patient who is already dialling the next clinic. The call that pays for the afternoon is the one you can't take.",
      },
      {
        q: "Restaurant: who calls the catering enquiry back?",
        a: "It came in at half past seven on a Friday. By Monday it's three days old and they've booked, and nobody did anything wrong.",
      },
      {
        q: "Salon: who reminds them about Thursday?",
        a: "An empty chair costs the same as a busy one. A reminder the day before is the cheapest money in the business and it never gets sent.",
      },
      {
        q: "Contractor or auto shop: where did that estimate go?",
        a: "It was quoted over the phone from the side of a road. There's no copy, no follow-up, and no way to tell later what was actually promised.",
      },
    ],
    form: {
      heading: "Talk to us about mine",
      blurb:
        "Tell us your trade and we'll come back with what the week normally looks like in it — and which part we'd fix first. Free, and specific to you.",
      submit: "Send it over",
      message: "What trade are you in? (optional)",
    },
  },
];

export const BY_SLUG: Record<string, Funnel> = Object.fromEntries(
  FUNNELS.map((f) => [f.slug, f])
);
