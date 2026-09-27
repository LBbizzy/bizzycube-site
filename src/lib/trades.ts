/* ONE PAGE PER TRADE (2026-09-27).
 *
 * A roofer searches "roofing answering service", not "for your trade". Each
 * trade gets its own address, its own words and its own questions, so both
 * Google and the AI answer engines have a page that is plainly about THAT
 * trade. The form is the By-trade funnel's, so every lead still lands in the
 * Rolodex tagged with where it came from; the trade rides in the message.
 *
 * No invented numbers here — the pain in the trade's own day, and what
 * BizzyCube does about it. */
import { BY_SLUG, type Funnel } from "./funnels";

const base = BY_SLUG["for-your-trade"];

type T = {
  key: string; name: string; people: string; title: string; description: string;
  headLead: string; headEm: string; sub: string;
  checks: { q: string; a: string }[];
};

const T: T[] = [
  {
    key: "roofers", name: "Roofing", people: "Roofers",
    title: "Answering service and follow-up for roofing companies — BizzyCube",
    description: "BizzyCube answers the calls roofers miss on the roof, texts the homeowner back, books the inspection and chases every estimate.",
    headLead: "You're on a roof.", headEm: "The next job is calling.",
    sub: "Leak calls come in while both hands are full. Whoever answers first gets the inspection — BizzyCube answers for you, books it and texts you the address.",
    checks: [
      { q: "Who answers a leak call while I'm on a roof?", a: "BizzyCube does, in your company's name. It takes the address and the problem, books the inspection into your schedule and texts you the details." },
      { q: "What happens to estimates after I send them?", a: "They get followed up automatically until the homeowner says yes or no, so a good estimate doesn't die in an inbox." },
      { q: "Can it handle storm-season call volume?", a: "Every call is answered at once, day or night, so a busy week doesn't turn into a list of voicemails nobody returns." },
      { q: "Do I need new software on the crew's phones?", a: "No. You get one app; the crew keeps working. Calls, texts, estimates and invoices sit in one list." },
    ],
  },
  {
    key: "hvac", name: "HVAC", people: "HVAC techs",
    title: "Answering service and scheduling for HVAC companies — BizzyCube",
    description: "BizzyCube answers no-heat and no-AC calls while your techs are in attics and crawlspaces, books the service call and texts the customer back.",
    headLead: "You're in the attic.", headEm: "Their AC just quit.",
    sub: "A no-cool call won't wait for a callback. BizzyCube answers it, books the service call and texts the homeowner that you're coming.",
    checks: [
      { q: "Who picks up when my techs are on a job?", a: "BizzyCube answers every call in your company's name, takes the details and books the visit into the schedule." },
      { q: "What about calls at night and on weekends?", a: "They're answered the same way. Emergencies are flagged to you right away; routine work is booked for the next opening." },
      { q: "Do maintenance quotes get followed up?", a: "Yes. Every quote gets followed up automatically until the customer decides." },
      { q: "Does it work with how we already schedule?", a: "Jobs land in one shared schedule the whole team sees on their phones." },
    ],
  },
  {
    key: "plumbers", name: "Plumbing", people: "Plumbers",
    title: "Answering service and follow-up for plumbing companies — BizzyCube",
    description: "BizzyCube answers the calls plumbers can't take under a sink, books the job and follows up every quote so it doesn't go to the next plumber.",
    headLead: "You're under a sink.", headEm: "A burst pipe is calling.",
    sub: "Emergency calls go to whoever picks up. BizzyCube answers for you, gets the address and the problem, and puts the job on your schedule.",
    checks: [
      { q: "Who answers while my hands are wet?", a: "BizzyCube answers every call in your company's name and books the job, so the customer isn't left dialing the next plumber." },
      { q: "How do water-heater quotes get chased?", a: "Automatically. Every quote is followed up by text until the customer says yes or no." },
      { q: "Can customers book themselves?", a: "Yes — callers are booked straight into open slots and get a text confirming the time." },
      { q: "Will I know who called?", a: "Every call, text and booking lands in one list on your phone with the caller's name and what they need." },
    ],
  },
  {
    key: "electricians", name: "Electrical", people: "Electricians",
    title: "Answering service and scheduling for electricians — BizzyCube",
    description: "BizzyCube answers calls while electricians are in the panel, sorts emergencies from quotes, books the work and follows up every estimate.",
    headLead: "Both hands in a panel.", headEm: "The phone won't stop.",
    sub: "The outage call and the remodel quote both land in voicemail. BizzyCube answers both, sorts the urgent from the routine and books them.",
    checks: [
      { q: "Who answers when I can't touch my phone?", a: "BizzyCube answers every call in your company's name and books the work into your schedule." },
      { q: "How are emergencies handled?", a: "Urgent calls are flagged to you straight away; routine work is booked into the next opening." },
      { q: "Do panel-upgrade quotes get followed up?", a: "Yes, automatically, until the customer decides — no more estimates that quietly go cold." },
      { q: "Can the office see the day's jobs?", a: "Everyone sees one shared schedule with every job, address and note." },
    ],
  },
  {
    key: "general-contractors", name: "General contracting", people: "General contractors",
    title: "Office software for general contractors — BizzyCube",
    description: "BizzyCube answers calls, follows up bids, keeps the schedule and sends invoices for general contractors who are on site all day.",
    headLead: "You're running a site.", headEm: "Nobody's running the office.",
    sub: "Calls, bids, subs and invoices all wait on you. BizzyCube answers the phone, chases the bids and keeps the paperwork moving while you build.",
    checks: [
      { q: "Who answers new-project calls during the day?", a: "BizzyCube answers in your company's name, takes the scope and books a walkthrough." },
      { q: "What happens to bids after they go out?", a: "Each one is followed up automatically until the client decides." },
      { q: "Can I send invoices from the job?", a: "Yes — invoices and payment links go out from your phone and are tracked until paid." },
      { q: "Does it keep a record of what was agreed?", a: "Every quote, signature, change and payment is kept in order with a time and a name." },
    ],
  },
  {
    key: "drywall", name: "Drywall", people: "Drywall crews",
    title: "Answering service and follow-up for drywall contractors — BizzyCube",
    description: "BizzyCube answers calls while drywall crews are taping and mudding, books the job and follows up every quote.",
    headLead: "Mud on your hands.", headEm: "Another call you can't take.",
    sub: "Patch jobs and full hangs both start with a phone call. BizzyCube answers it, books the visit and chases the quote.",
    checks: [
      { q: "Who takes calls while we're mid-coat?", a: "BizzyCube answers every call in your company's name and books the estimate visit." },
      { q: "Do quotes get chased?", a: "Automatically, by text, until the customer says yes or no." },
      { q: "Can homeowners send photos of the damage?", a: "Yes — they text them in and the photos land on the job." },
      { q: "Will the crew see the schedule?", a: "Everyone sees the same schedule on their phone." },
    ],
  },
  {
    key: "excavation", name: "Excavation", people: "Excavation contractors",
    title: "Answering service and bid follow-up for excavation contractors — BizzyCube",
    description: "BizzyCube answers calls from the cab, follows up every bid and keeps the schedule for excavation and site-work contractors.",
    headLead: "You're in the cab.", headEm: "A new site is calling.",
    sub: "You can't answer from the excavator. BizzyCube answers for you, takes the job details and books the site visit.",
    checks: [
      { q: "Who answers while I'm running equipment?", a: "BizzyCube answers every call in your company's name and books the site visit." },
      { q: "What happens to bids after they go out?", a: "Each one is followed up automatically until the client decides." },
      { q: "Can I invoice from the site?", a: "Yes — invoices go out from your phone and are tracked until paid." },
      { q: "Is there one list of every job?", a: "Calls, bids, jobs and invoices sit in one list." },
    ],
  },
  {
    key: "landscapers", name: "Landscaping", people: "Landscapers",
    title: "Answering service and scheduling for landscaping companies — BizzyCube",
    description: "BizzyCube answers calls while landscapers are on the mower, books estimates and recurring work, and follows up every quote.",
    headLead: "The mower's running.", headEm: "You didn't hear it ring.",
    sub: "New-customer calls come in while you're working. BizzyCube answers, books the estimate and follows up the quote.",
    checks: [
      { q: "Who answers when I can't hear the phone?", a: "BizzyCube answers every call in your company's name and books the estimate." },
      { q: "Do quotes get followed up?", a: "Automatically, by text, until the customer decides." },
      { q: "Can it handle recurring customers?", a: "Yes — recurring visits sit on the same schedule and customers get reminders." },
      { q: "Can I send invoices from the truck?", a: "Yes, from your phone, with a payment link." },
    ],
  },
  {
    key: "med-spas", name: "Med spa", people: "Med spas",
    title: "Answering service and booking for med spas — BizzyCube",
    description: "BizzyCube answers calls during treatments, books appointments, sends reminders and texts clients back for med spas.",
    headLead: "You're mid-treatment.", headEm: "A new client is calling.",
    sub: "The call that fills tomorrow's book comes in while you're with a client. BizzyCube answers, books the appointment and texts the confirmation.",
    checks: [
      { q: "Who answers during treatments?", a: "BizzyCube answers every call in your business's name and books the appointment." },
      { q: "Do clients get reminders?", a: "Yes — a text before every appointment, so fewer chairs sit empty." },
      { q: "Can clients book outside business hours?", a: "Yes, any time, straight into open slots." },
      { q: "Is everything in one place?", a: "Calls, texts, bookings and payments sit in one list." },
    ],
  },
  {
    key: "real-estate-agents", name: "Real estate", people: "Real estate agents",
    title: "Lead follow-up and answering for real estate agents — BizzyCube",
    description: "BizzyCube answers calls during showings, follows up every lead and books showings for real estate agents.",
    headLead: "You're showing a house.", headEm: "A buyer is calling.",
    sub: "Leads go cold while you're with clients. BizzyCube answers, follows up every lead and books the showing.",
    checks: [
      { q: "Who answers during a showing?", a: "BizzyCube answers every call, takes the buyer's details and books the next step." },
      { q: "Do leads get followed up?", a: "Automatically, by text and email, until they're ready or say no." },
      { q: "Can buyers book showings themselves?", a: "Yes, straight into your open times, with a confirmation text." },
      { q: "Is every lead in one list?", a: "Calls, texts, emails and form leads land in one list on your phone." },
    ],
  },
];

export const TRADES: (Funnel & { key: string; people: string })[] = T.map((t) => ({
  ...base,
  key: t.key,
  people: t.people,
  slug: `for/${t.key}`,
  title: t.title,
  description: t.description,
  kicker: `For ${t.people.toLowerCase()}`,
  headLead: t.headLead,
  headEm: t.headEm,
  sub: t.sub,
  cta: "Show me how it works",
  checks: t.checks,
  trail: undefined,
  more: undefined,
  form: {
    heading: "Show me how it works",
    blurb: `Tell us how to reach you. We'll show you how BizzyCube answers, books and follows up for ${t.people.toLowerCase()} — using your own week. Free.`,
    submit: "Show me",
    message: `${t.name} — what's the one thing you'd fix first? (optional)`,
  },
}));

export const TRADE_BY_KEY = Object.fromEntries(TRADES.map((t) => [t.key, t]));
