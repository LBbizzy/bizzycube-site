"""Generate the Bizzy180 websites: bizzy180.com (the brand, a page per trade) and one full site per trade.

    python3 scripts/bizzy180/gen.py      → public/sites/bizzy180/…, public/sites/<trade>/…

Each trade site is its own website in its own words — its tools are that trade's tools. Nothing describes how the
platform is built. Everything says Coming soon. Footer: Powered by BizzyCube.
"""
import html
import json
import os
import shutil
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(os.path.dirname(HERE))
sys.path.insert(0, HERE)
from tools import T, CATS, ICONS  # noqa: E402
from niches import N, HIDDEN  # noqa: E402

KITS = json.load(open(os.path.join(HERE, "kits.json")))
OUT = os.path.join(ROOT, "public", "sites")
LEAD_DOOR = "https://dztu1141o7.execute-api.us-west-2.amazonaws.com/lead/submit"
LEAD_TOKEN = "d3NpdGV8Yml6enljdWJlfHdzX2Jpenp5Y3ViZXNpdGV8cHVi.WdDN_E3h_D11Drw1xTlhi2bHnTeBZz0J"
PRICE = "$199"

LOGO = ('<img src="data:image/png;base64,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" width="34" height="34" alt="" style="border-radius:9px;display:block">')   # LB's own Bizzy180 logo
FAV = "data:image/png;base64,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"

CSS = open(os.path.join(HERE, "site.css")).read()


def esc(s):
    return html.escape(s, quote=True)


def words(s, n):
    """Fill a niche's words into tool copy."""
    return (s.replace("{works_title}", n["works_title"]).replace("{custs}", n["custs"]).replace("{cust}", n["cust"])
             .replace("{works}", n["works"]).replace("{work}", n["work"]).replace("{trade}", n["trade"])
             .replace("{season}", n.get("season", "")).replace("{season_line}", n.get("season_line", ""))
             .replace("{plan}", n.get("plan", "")).replace("{plan_line}", n.get("plan_line", "")))


def cap(s):
    return s[:1].upper() + s[1:]


def tools_for(n):
    ids = list(KITS[n["kit"]]["tools"])
    for k in n.get("extra_kits", []):
        ids += [t for t in KITS[k]["tools"] if t not in ids]
    return [t for t in ids if t in T and t not in HIDDEN]


# every tool reads as this trade's own — a default name with the trade in it, unless the trade names it itself
TRADE_NAMED = {"ai-receptionist": "{T} AI receptionist", "phone-line": "{T} business line", "booking": "{T} online booking",
               "forms-intake": "{T} forms & intake", "proposals": "{T} proposals", "price-books": "{T} price book",
               "esignature": "{T} e-signature", "money": "{T} invoicing & payments", "quickbooks": "{T} books & QuickBooks",
               "payroll": "{T} payroll", "plans-memberships": "{T} plans & memberships", "website": "{T} website",
               "marketing": "{T} marketing", "publishing": "{T} social posting", "studio": "{T} content studio",
               "video-editor": "{T} video editor", "reputation": "{T} reviews", "brand-kit": "{T} brand kit",
               "workflows": "Circle of Life", "referral-network": "{T} referral network", "email-domain": "{T} company email",
               "time-tracking": "{T} time clock", "projects": "{T} projects", "standing-orders": "{T} repeat work",
               "properties-buildings": "{T} properties", "walkthroughs": "{T} walkthroughs", "dj-field": "DJ in the field",
               "compliance-office": "{T} safety & compliance", "subs-vendors": "{T} sub paperwork", "coaching": "{T} plans & coaching",
               "recruiting": "{T} recruiting", "onboarding": "{T} onboarding", "training": "{T} training"}


def tool_name(n, tid):
    if tid in n["names"]:
        return n["names"][tid]
    if tid in TRADE_NAMED:
        return TRADE_NAMED[tid].replace("{T}", n["name"])
    return cap(words(T[tid][1], n))


def page(n, slug, title, desc, body, depth=0, brand=False):
    up = "../" * depth
    if brand:
        nav = [("Trades", f"{up}trades.html"), ("How it works", f"{up}how-it-works.html"), ("Pricing", f"{up}pricing.html"), ("FAQ", f"{up}faq.html")]
        label, home, cta_href = "", f"{up}index.html", f"{up}early-access.html"
        foot_name = "Bizzy<span>180</span>"
    else:
        nav = [("Features", f"{up}features.html"), ("Circle of Life", f"{up}circle-of-life.html"), ("Grow", f"{up}grow.html"),
               ("Pricing", f"{up}pricing.html"), ("FAQ", f"{up}faq.html")]
        label, home, cta_href = n["name"], f"{up}index.html", f"{up}early-access.html"
        foot_name = f"Bizzy<span>180</span> {esc(n['name'])}"
    navh = "".join(f'<a href="{h}">{esc(t)}</a>' for t, h in nav)
    small = f"<small>{esc(label)}</small>" if label else ""
    more = ('<a href="https://bizzy180.com">All Bizzy180 trades</a>' if not brand else "")
    return f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{esc(title)}</title><meta name="description" content="{esc(desc)}"><meta name="theme-color" content="#0F2A4A">
<meta property="og:title" content="{esc(title)}"><meta property="og:description" content="{esc(desc)}"><meta property="og:type" content="website">
<link rel="icon" href="{FAV}"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@700;800;900&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="{up}site.css"></head><body>
<div class="soon">Coming soon — we’re opening a few at a time. <a href="{cta_href}">Get early access</a></div>
<header class="nav"><div class="wrap"><a class="brand" href="{home}">{LOGO}<b>Bizzy<span>180</span></b>{small}</a>
<nav class="links">{navh}</nav><a class="btn navcta" href="{cta_href}">Get early access</a></div>
<nav class="mnav">{navh}</nav></header>
<main>{body}</main>
<footer><div class="wrap"><div><b class="fb">{foot_name}</b><p>Coming soon. Powered by <a href="https://bizzycube.com">BizzyCube</a>.</p></div>
<nav>{more}<a href="{cta_href}">Early access</a><a href="https://bizzycube.com/terms">Terms</a><a href="https://bizzycube.com/sms-privacy.html">Privacy</a><a href="https://bizzycube.com/support">Support</a></nav></div></footer>
<script>(function(){{var t0=Date.now(),f=document.getElementById('fs');if(f)setInterval(function(){{f.value=Math.round((Date.now()-t0)/1000)}},1000)}})();</script>
</body></html>"""


def cta(href="early-access.html", line="Coming soon. Be one of the first in."):
    return f'<section class="band"><div class="wrap ctaband"><div><h2>{esc(line)}</h2><p>We’re opening a few at a time — get on the early-access list and we’ll set you up.</p></div><a class="btn big" href="{href}">Get early access</a></div></section>'


def card(title, text, href=None, icon=""):
    i = f'<span class="ico">{icon}</span>' if icon else ""
    inner = f'{i}<h3>{esc(title)}</h3><p>{esc(text)}</p>' + ('<span class="more">Learn more →</span>' if href else "")
    return f'<a class="card link" href="{href}">{inner}</a>' if href else f'<div class="card">{inner}</div>'


def grouped(n):
    ids = tools_for(n)
    out = []
    for cid, cname, cline in CATS:
        mine = [t for t in ids if T[t][0] == cid]
        if mine:
            out.append((cid, words(cname, n), words(cline, n), mine))
    first = n.get("first_cat")
    if first:
        out.sort(key=lambda g: g[0] != first)
    return out


def form(n, via, label):
    return f"""<form class="form" action="{LEAD_DOOR}" method="POST">
<input type="hidden" name="t" value="{LEAD_TOKEN}"><input type="hidden" name="form_seconds" id="fs" value="0"><input type="hidden" name="bz_via" value="{via}">
<div aria-hidden="true" style="position:absolute;left:-9999px"><label for="website_url">Leave this empty</label><input id="website_url" name="website_url" type="text" tabindex="-1" autocomplete="off"></div>
<label for="n">Your name</label><input id="n" name="name" required minlength="2" maxlength="80" autocomplete="name">
<label for="p">Phone</label><input id="p" name="phone" type="tel" autocomplete="tel">
<label for="e">Email</label><input id="e" name="email" type="email" autocomplete="email">
<label for="b">Business name</label><input id="b" name="business" maxlength="120" autocomplete="organization">
<input type="hidden" name="message" value="{esc(label)} — early access">
<button class="btn big" type="submit" style="width:100%;margin-top:20px">Save my spot</button>
<p class="fine">A phone or an email, whichever you prefer. No card. We’ll reach out when your spot opens.</p></form>"""


# ------------------------------------------------------------------ a trade's site
def trade_site(slug, n):
    d = os.path.join(OUT, slug)
    if os.path.isdir(d):
        shutil.rmtree(d)
    os.makedirs(os.path.join(d, "features"))
    open(os.path.join(d, "site.css"), "w").write(CSS)
    groups = grouped(n)
    nm = n["name"]
    W = lambda s: words(s, n)  # noqa: E731

    # home
    rows = "".join(f'<div class="row"><span><b>{esc(a)}</b> — {esc(b)}</span><span class="pill">{esc(c)}</span></div>' for a, b, c in n["rows"])
    pains = "".join(card(a, b) for a, b in n["pains"])
    cats = "".join(card(cname, cline, f"features.html#{cid}", ICONS[cid]) for cid, cname, cline, _ in groups)
    steps = "".join(f'<div class="step"><small>{esc(a)}</small><b>{esc(W(b))}</b><span>{esc(W(c))}</span></div>' for a, b, c in n["circle"][:4])
    body = f"""<section class="hero"><div class="wrap two"><div><span class="kicker">Coming soon · For {esc(n['who'])}</span>
<h1>{n['h1']}</h1><p class="lead">{esc(n['lead'])}</p>
<div class="cta-row"><a class="btn big" href="early-access.html">Get early access</a><a class="btn ghost" href="features.html">See the features</a></div>
<p class="fine light">Coming soon · {PRICE} a month · 14 days free · no card to start</p></div>
<div class="board"><h4>Today at {esc(n['board'])}</h4>{rows}</div></div></section>
<section class="tint"><div class="wrap"><div class="sec-h"><span class="eyebrow">Sound familiar?</span><h2>The work is good. The business around it leaks.</h2></div><div class="grid g3">{pains}</div></div></section>
<section><div class="wrap"><div class="sec-h"><span class="eyebrow">Built for your {esc(n['trade'])}</span><h2>Everything you need, in one place.</h2><p>Every part of Bizzy180 {esc(nm)} was built around how a {esc(n['trade'])} actually works.</p></div><div class="grid g4">{cats}</div>
<p style="margin-top:22px"><a class="btn ghost" href="features.html">See every feature</a></p></div></section>
<section class="dark"><div class="wrap"><div class="sec-h"><span class="eyebrow">The Circle of Life</span><h2>The {esc(n['work'])} isn’t the end. It’s the start of the next one.</h2><p>Repeat business and referrals from people who already trust you — kept warm for you, automatically.</p></div>
<div class="steps s4">{steps}</div><p style="margin-top:22px"><a class="btn" href="circle-of-life.html">How the Circle of Life works</a></p></div></section>
<section><div class="wrap two"><div><span class="eyebrow">Meet DJ</span><h2>An AI partner who knows your trade.</h2><p class="big">Ask DJ anything, out loud or by text — he answers from your own {esc(n['custs'])}, {esc(n['works'])} and numbers, takes the busywork off your plate, and asks before anything important goes out.</p></div>
<div class="card"><h3>“DJ, who still owes us money?”</h3><p>“Three invoices are past due, $4,860 in all. Want me to send friendly reminders?”</p></div></div></section>
{cta()}"""
    open(os.path.join(d, "index.html"), "w").write(page(n, slug, f"Bizzy180 {nm} — coming soon", n["lead"], body))

    # features
    blocks = []
    for cid, cname, cline, ids in groups:
        cards = "".join(card(tool_name(n, t), W(T[t][2]), f"features/{t}.html") for t in ids)
        blocks.append(f'<section id="{cid}" class="fsec"><div class="wrap"><div class="sec-h"><span class="eyebrow">{ICONS[cid]} {esc(cname)}</span><h2>{esc(cline)}</h2></div><div class="grid g3">{cards}</div></div></section>')
    body = (f'<section class="phero"><div class="wrap"><span class="kicker">Coming soon</span><h1>Every feature in Bizzy180 {esc(nm)}</h1><p class="lead">Built for {esc(n["who"])} — from the first call to the review, the referral and the next {esc(n["work"])}.</p></div></section>'
            + "".join(blocks) + cta())
    open(os.path.join(d, "features.html"), "w").write(page(n, slug, f"Features — Bizzy180 {nm}", f"Every feature in Bizzy180 {nm}.", body))

    # a page per feature
    all_ids = [t for _, _, _, ids in groups for t in ids]
    for t in all_ids:
        cid, _, line, para, bullets = T[t]
        name = tool_name(n, t)
        cname = next(c for c, _, _, ids in groups if t in ids)
        related = [x for x in next(ids for c, _, _, ids in groups if c == cname) if x != t][:3]
        rel = "".join(card(tool_name(n, x), W(T[x][2]), f"{x}.html") for x in related)
        bl = "".join(f"<li>{esc(W(b))}</li>" for b in bullets)
        body = f"""<section class="phero"><div class="wrap two"><div><a class="crumb" href="../features.html">← All features</a><span class="kicker">Coming soon · Bizzy180 {esc(nm)}</span>
<h1>{esc(name)}</h1><p class="lead">{esc(W(line))}</p><div class="cta-row"><a class="btn big" href="../early-access.html">Get early access</a></div></div>
<div class="card feat"><span class="ico big">{ICONS[cid]}</span><p>{esc(W(para))}</p><ul class="ticks">{bl}</ul><p class="fine">Built into Bizzy180 {esc(nm)} for {esc(n['who'])}.</p></div></div></section>
{"<section class='tint'><div class='wrap'><div class='sec-h'><h2>Goes hand in hand with</h2></div><div class='grid g3'>" + rel + "</div></div></section>" if rel else ""}
{cta("../early-access.html", f"{name} is coming soon.")}"""
        open(os.path.join(d, "features", f"{t}.html"), "w").write(page(n, slug, f"{name} — Bizzy180 {nm}", W(line), body, depth=1))

    # circle of life
    steps = "".join(f'<div class="step"><small>{esc(a)}</small><b>{esc(W(b))}</b><span>{esc(W(c))}</span></div>' for a, b, c in n["circle"])
    body = f"""<section class="phero"><div class="wrap"><span class="kicker">Coming soon · The Circle of Life</span><h1>The follow-up nobody has time for — done for you.</h1>
<p class="lead">The cheapest {esc(n['work'])} you’ll ever get comes from someone who already trusts you. The Circle of Life keeps in touch after every {esc(n['work'])}, so they think of you first — and send their friends.</p></div></section>
<section class="dark"><div class="wrap"><div class="steps">{steps}</div>
<div class="rules"><span>Never more than twice a month</span><span>Pauses for anyone with an open problem</span><span>Stops the moment someone asks</span><span>Your days, your words — make it your own</span></div></div></section>
<section><div class="wrap"><div class="sec-h"><span class="eyebrow">Referrers</span><h2>The people who send you work get a circle of their own.</h2><p>A thank-you the next day, an update when their friend hires you, and levels that recognize your best people.</p></div>
<div class="grid g3">{card("Referrer", "1 referral — thanked the next day, and told when their friend hires you.")}{card("Partner", "3 referrals — they move up, and you see it on their card.")}{card("VIP", "5 referrals — your best people, never forgotten.")}</div></div></section>
<section class="tint"><div class="wrap two"><div><h2>Starts off. You switch it on.</h2><p class="big">Nothing goes out until you’ve looked it over and said go. Review asks always land on your desk for you to send — it’s your relationship.</p></div>
<div class="card"><h3>Respectful by design</h3><ul class="ticks"><li>At most two touches a month per person</li><li>Paused for anyone with a complaint or open problem</li><li>Opt-outs honored instantly</li><li>Every touch written down on their card</li></ul></div></div></section>{cta()}"""
    open(os.path.join(d, "circle-of-life.html"), "w").write(page(n, slug, f"The Circle of Life — Bizzy180 {nm}", "The follow-up after every job, done for you.", body))

    # grow
    is_realty = slug == "realestate"
    shapes = ([("Agent", "Your own book, and an assistant if you have one."),
               ("Team", "Agents in their own accounts; leads you hand out stay tied to you and the split is automatic."),
               ("Brokerage & franchise", "Recruiting, the Broker’s Office and splits; offices under a brand, every book walled off.")]
              if is_realty else
              [("Solo", "Your own book, and a helper if you have one."),
               ("Locations & teams", "Open locations under your company, each running itself — you see the totals, never what’s inside."),
               ("Franchise", "A brand on top, franchisees under it, every book walled off.")])
    sc = "".join(card(a, b) for a, b in shapes)
    body = f"""<section class="phero"><div class="wrap"><span class="kicker">Coming soon · Built to grow</span><h1>{"An agent today. A team or a brokerage tomorrow." if is_realty else "Solo today. Locations, teams or a franchise tomorrow."}</h1>
<p class="lead">Bizzy180 {esc(nm)} grows with you. Add people, open locations, run a brand — without switching systems.</p></div></section>
<section><div class="wrap"><div class="grid g3">{sc}</div></div></section>
<section class="tint"><div class="wrap two"><div><h2>Your people, your rules.</h2><p class="big">Everyone gets their own login and only sees what their role allows. Office staff, managers, crews — each set up in a minute.</p></div>
<div class="card"><h3>One login, every business</h3><p>Own more than one business? Open the app and see every one of them on one screen, each with today’s leads, calls and money — tap one to go in.</p></div></div></section>{cta()}"""
    open(os.path.join(d, "grow.html"), "w").write(page(n, slug, f"Grow — Bizzy180 {nm}", "Solo to franchise without switching systems.", body))

    # pricing
    dayone = [tool_name(n, t) for t in KITS[n["kit"]]["on"] if t in T and t not in HIDDEN]
    li = "".join(f"<li>{esc(x)}</li>" for x in dayone)
    body = f"""<section class="phero"><div class="wrap"><span class="kicker">Coming soon · Pricing</span><h1>One simple price.</h1><p class="lead">Everything you need on day one, and more one tap away when you want it.</p></div></section>
<section><div class="wrap two"><div class="plan"><span class="eyebrow">Bizzy180 {esc(nm)}</span><div class="amt">{PRICE}<small> / month</small></div>
<p class="fine">Coming soon · 14 days free · no card to start</p><ul class="ticks">{li}<li>DJ, your AI partner</li><li>The Circle of Life after every {esc(n['work'])}</li><li>Starter content for your {esc(n['trade'])}, loaded for you</li></ul>
<a class="btn big" href="early-access.html" style="width:100%">Get early access</a></div>
<div><h2>Add more when you’re ready.</h2><p class="big">Every other feature on our <a href="features.html">features page</a> is one tap away, so you only turn on what you’ll use.</p>
<div class="card"><h3>Early access</h3><p>We’re opening Bizzy180 {esc(nm)} a few at a time. Early members get set up personally.</p></div></div></div></section>{cta()}"""
    open(os.path.join(d, "pricing.html"), "w").write(page(n, slug, f"Pricing — Bizzy180 {nm}", f"{PRICE} a month, 14 days free.", body))

    # faq
    faqs = [("When can I start?", f"Bizzy180 {nm} is coming soon. We’re opening it a few at a time — join the early-access list and we’ll reach out when your spot opens."),
            ("What does it cost?", f"{PRICE} a month, with 14 days free and no card to start."),
            ("Do I need to be good with computers?", "No. If you can text, you can run it. DJ, your AI partner, sets most of it up with you by asking simple yes-or-no questions."),
            ("Is there a phone app?", "Yes — iPhone first, with everything you need in the field. The desktop is there for the office."),
            ("Can I bring my contacts and my numbers?", f"Yes. Bring your {n['custs']} from a spreadsheet or the system you use now, and keep your business phone number."),
            ("Will it send messages to my customers without asking?", "No. Nothing goes out until you switch it on, and review asks always land on your desk for you to send."),
            ("Is my data private?", f"Your {n['custs']}, {n['works']} and numbers are yours alone. Nobody else sees them."),
            ("I own more than one business. Can I use one login?", "Yes. One login opens every business you own, each kept separate.")]
    fq = "".join(f"<details><summary>{esc(q)}</summary><p>{esc(a)}</p></details>" for q, a in faqs)
    body = f'<section class="phero"><div class="wrap"><span class="kicker">Coming soon · FAQ</span><h1>Questions, answered.</h1></div></section><section><div class="wrap narrow">{fq}</div></section>{cta()}'
    open(os.path.join(d, "faq.html"), "w").write(page(n, slug, f"FAQ — Bizzy180 {nm}", f"Questions about Bizzy180 {nm}.", body))

    # early access
    body = f"""<section class="phero"><div class="wrap two"><div><span class="kicker">Coming soon</span><h1>Get early access to Bizzy180 {esc(nm)}.</h1>
<p class="lead">We’re opening to {esc(n['who'])} a few at a time. Save your spot and we’ll set you up personally when it opens.</p>
<ul class="ticks light"><li>{PRICE} a month when you start</li><li>14 days free, no card</li><li>Set up with you, not left to figure it out</li></ul></div>
<div class="card">{form(n, f"{slug}.bizzy180.com", f"Bizzy180 {nm}")}</div></div></section>"""
    open(os.path.join(d, "early-access.html"), "w").write(page(n, slug, f"Early access — Bizzy180 {nm}", "Save your spot.", body))
    return 7 + len(all_ids)


# ------------------------------------------------------------------ bizzy180.com
BLURB = {"construction": "For contractors and remodelers — bids, jobs, subs and the follow-up after the job.",
         "roofing": "For roofing companies — measure from the address, bid the same day, keep every roof.",
         "hvac": "For heating and cooling — every call booked, plans that renew, customers kept.",
         "plumbing": "For plumbers — emergencies booked, quotes on site, paid in the driveway.",
         "electrical": "For electricians — quotes out fast, crews on the clock, licenses watched.",
         "realestate": "For agents, teams and brokerages — every lead, every deadline, every client for life.",
         "medspa": "For med spas — bookings caught, memberships that renew, clients back.",
         "chiro": "For chiropractic offices — new patients booked, care plans kept.",
         "homeinspection": "For home inspectors — booked online, signed before you arrive, realtors kept close."}


def brand_site():
    d = os.path.join(OUT, "bizzy180")
    if os.path.isdir(d):
        shutil.rmtree(d)
    os.makedirs(os.path.join(d, "trades"))
    open(os.path.join(d, "site.css"), "w").write(CSS)
    B = {"name": "Bizzy180"}
    tiles = "".join(f'<a class="card link" href="trades/{s}.html"><span class="ico">{esc(n["name"][0])}</span><h3>Bizzy180 {esc(n["name"])}</h3><p>{esc(BLURB[s])}</p><span class="more">See Bizzy180 {esc(n["name"])} →</span></a>' for s, n in N.items())
    body = f"""<section class="hero"><div class="wrap"><span class="kicker">Coming soon</span><h1>Turn your business around. <em>All the way around.</em></h1>
<p class="lead">Bizzy180 is the system that runs a business for you — the calls, the work, the money, and the follow-up that brings customers back — built separately for each trade, in that trade’s own words.</p>
<div class="cta-row"><a class="btn big" href="trades.html">Find your trade</a><a class="btn ghost" href="how-it-works.html">How it works</a></div></div></section>
<section><div class="wrap"><div class="sec-h"><span class="eyebrow">Pick your trade</span><h2>A Bizzy180 for every kind of business.</h2><p>Each one has its own website, its own features and its own way of working.</p></div><div class="grid g3">{tiles}</div></div></section>
<section class="dark"><div class="wrap"><div class="sec-h"><span class="eyebrow">Why Bizzy180</span><h2>The 180 is the full circle.</h2><p>Every customer comes back around — the call, the work, the payment, the thank-you, the referral, the next job. Bizzy180 keeps the circle turning.</p></div>
<div class="grid g3">{card("Never miss the call", "An AI receptionist answers like a person, day or night, and books it.")}{card("Run it from your phone", "The work, the team and the money in one app — the desktop for the office.")}{card("Keep every customer", "The Circle of Life follows up after every job, so they come back and send friends.")}</div></div></section>{cta()}"""
    open(os.path.join(d, "index.html"), "w").write(page(B, "bizzy180", "Bizzy180 — coming soon", "Bizzy180: the system that runs your business, built for your trade.", body, brand=True))
    body = f'<section class="phero"><div class="wrap"><span class="kicker">Coming soon</span><h1>Find your trade.</h1><p class="lead">Every Bizzy180 is built for one kind of business — its words, its features, its way of working.</p></div></section><section><div class="wrap"><div class="grid g3">{tiles}</div></div></section>{cta()}'
    open(os.path.join(d, "trades.html"), "w").write(page(B, "bizzy180", "Trades — Bizzy180", "Every Bizzy180 trade.", body, brand=True))
    for s, n in N.items():
        feats = [t for t in tools_for(n)][:9]
        fc = "".join(card(tool_name(n, t), words(T[t][2], n)) for t in feats)
        pains = "".join(card(a, b) for a, b in n["pains"])
        url = f"https://{s}.bizzy180.com"
        body = f"""<section class="hero"><div class="wrap"><a class="crumb light" href="../trades.html">← All trades</a><span class="kicker">Coming soon · For {esc(n['who'])}</span><h1>Bizzy180 {esc(n['name'])}</h1>
<p class="lead">{esc(n['lead'])}</p><div class="cta-row"><a class="btn big" href="{url}">Visit Bizzy180 {esc(n['name'])}</a><a class="btn ghost" href="{url}/early-access">Get early access</a></div></div></section>
<section class="tint"><div class="wrap"><div class="sec-h"><h2>What it fixes</h2></div><div class="grid g3">{pains}</div></div></section>
<section><div class="wrap"><div class="sec-h"><h2>A few of the features</h2></div><div class="grid g3">{fc}</div>
<p style="margin-top:22px"><a class="btn" href="{url}/features">See every Bizzy180 {esc(n['name'])} feature</a></p></div></section>{cta(url + "/early-access")}"""
        open(os.path.join(d, "trades", f"{s}.html"), "w").write(page(B, "bizzy180", f"Bizzy180 {n['name']}", BLURB[s], body, depth=1, brand=True))
    steps = [("Pick your trade", "Each Bizzy180 is built for one kind of business, so it speaks your language from day one."),
             ("DJ sets it up with you", "Your AI partner asks simple yes-or-no questions and loads what your business needs."),
             ("Run it from your phone", "Calls answered, work on one board, money collected — wherever you are."),
             ("Keep the circle turning", "After every job, the Circle of Life keeps customers coming back and sending friends.")]
    sc = "".join(f'<div class="step light"><small>Step {i + 1}</small><b>{esc(a)}</b><span>{esc(b)}</span></div>' for i, (a, b) in enumerate(steps))
    body = f'<section class="phero"><div class="wrap"><span class="kicker">Coming soon</span><h1>How Bizzy180 works.</h1></div></section><section><div class="wrap"><div class="steps s4">{sc}</div></div></section>{cta()}'
    open(os.path.join(d, "how-it-works.html"), "w").write(page(B, "bizzy180", "How it works — Bizzy180", "How Bizzy180 works.", body, brand=True))
    body = f"""<section class="phero"><div class="wrap"><span class="kicker">Coming soon · Pricing</span><h1>One simple price for every trade.</h1></div></section>
<section><div class="wrap two"><div class="plan"><div class="amt">{PRICE}<small> / month</small></div><p class="fine">Coming soon · 14 days free · no card to start</p>
<ul class="ticks"><li>Everything your trade needs on day one</li><li>DJ, your AI partner</li><li>The Circle of Life</li><li>More features one tap away</li></ul><a class="btn big" href="early-access.html" style="width:100%">Get early access</a></div>
<div><h2>Every trade has its own site.</h2><p class="big">See exactly what’s included for your business on your trade’s own website.</p><a class="btn ghost" href="trades.html">Find your trade</a></div></div></section>{cta()}"""
    open(os.path.join(d, "pricing.html"), "w").write(page(B, "bizzy180", "Pricing — Bizzy180", f"{PRICE} a month.", body, brand=True))
    faqs = [("When does Bizzy180 open?", "Soon. We’re opening each trade a few at a time — join the early-access list and we’ll reach out when your spot opens."),
            ("Which trades are there?", "Construction, roofing, HVAC, plumbing, electrical, real estate, med spa, chiropractic and home inspection — each with its own website."),
            ("What does it cost?", f"{PRICE} a month, with 14 days free and no card to start."),
            ("I own businesses in different trades.", "One login opens every business you own, each in its own trade’s Bizzy180, each kept separate."),
            ("Who’s behind Bizzy180?", "Bizzy180 is powered by BizzyCube.")]
    fq = "".join(f"<details><summary>{esc(q)}</summary><p>{esc(a)}</p></details>" for q, a in faqs)
    body = f'<section class="phero"><div class="wrap"><span class="kicker">Coming soon · FAQ</span><h1>Questions, answered.</h1></div></section><section><div class="wrap narrow">{fq}</div></section>{cta()}'
    open(os.path.join(d, "faq.html"), "w").write(page(B, "bizzy180", "FAQ — Bizzy180", "Questions about Bizzy180.", body, brand=True))
    opts = "".join(f'<a class="card link" href="https://{s}.bizzy180.com/early-access"><h3>Bizzy180 {esc(n["name"])}</h3><span class="more">Get early access →</span></a>' for s, n in N.items())
    body = f'<section class="phero"><div class="wrap"><span class="kicker">Coming soon</span><h1>Get early access.</h1><p class="lead">Pick your trade to save your spot.</p></div></section><section><div class="wrap"><div class="grid g3">{opts}</div></div></section>'
    open(os.path.join(d, "early-access.html"), "w").write(page(B, "bizzy180", "Early access — Bizzy180", "Save your spot.", body, brand=True))
    return 6 + len(N)


if __name__ == "__main__":
    total = brand_site()
    for slug, n in N.items():
        total += trade_site(slug, n)
    print("pages:", total)
