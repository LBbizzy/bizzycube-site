export const metadata = {
  title: "Privacy Policy · BizzyCube",
  description: "Privacy Policy for BizzyCube — AI-powered agency platform.",
};

export default function PrivacyPage() {
  return (
<div className="bz-wrap bz-tight"><section className="bz-sec bz-prose">
<h1 className="bz-serif" style={{fontSize:"clamp(32px,5vw,52px)",marginBottom:10}}>Privacy Policy</h1>
<p>Last updated: September 9, 2026</p>

<p>This Privacy Policy describes how BizzyCube LLC (&quot;BizzyCube&quot;, &quot;we&quot;, &quot;us&quot;) collects, uses, and shares information when you use our multi-tenant SaaS platform and related services (the &quot;Service&quot;). It applies to our website at bizzycube.com, our web and mobile applications, and the messages we send you.</p>

<h2>1. Information We Collect</h2>
<p><strong>Account information:</strong> Name, business name, email address, mobile phone number, billing address, and payment method (payment card details are collected and processed by Stripe; we never store full card numbers).</p>
<p><strong>Customer Data:</strong> Contacts, leads, projects, calendar entries, communication content, financial data (when QuickBooks or bank accounts are connected), and other data you upload or generate within the Service.</p>
<p><strong>Communications content:</strong> The content and metadata of calls, text messages, voicemails, and emails sent or received through the Service, including phone numbers, timestamps, delivery results, and — where you have switched call recording on — call recordings and transcripts.</p>
<p><strong>Usage data:</strong> Pages visited, features used, API call volumes, performance and error logs.</p>
<p><strong>Cookies and similar technologies:</strong> Session identifiers, preference cookies, and analytics cookies (when enabled).</p>

<h2>2. How We Use Information</h2>
<p>We use information to operate the Service, authenticate users, fulfill subscriptions, route communications to the correct tenant, send you the messages described in Section 3, fire AI-assisted workflows you configure, improve the Service, and meet legal obligations.</p>
<p>We do not use the content of your calls, texts, or emails to train general-purpose machine-learning models, and we do not sell it.</p>

<h2>3. Text Messaging (SMS) and Mobile Information</h2>
<p><strong>What we send.</strong> If you give us your mobile number, BizzyCube may send you text messages as part of a conversational, one-to-one program: replies to messages you send us, automatic replies when we miss your call, appointment and follow-up coordination, account and service notifications, and answers to questions you have asked. We do not send marketing or promotional text messages, and we do not send bulk text messages.</p>
<p><strong>How you opt in.</strong> We text you only after you have given your number to us and agreed to be contacted — by submitting a form on our website, asking us to contact you, becoming a customer, or texting us first. Consent to receive text messages is never a condition of purchasing anything from us.</p>
<p><strong>Message frequency.</strong> Message frequency varies and depends on your activity with us. Most people receive messages only in reply to something they started.</p>
<p><strong>Cost.</strong> Message and data rates may apply. Your mobile carrier&apos;s standard rates apply to every message you send or receive; BizzyCube does not charge you for the messages themselves.</p>
<p><strong>How to stop.</strong> Reply <strong>STOP</strong> to any message to opt out at any time. You will receive one confirmation and no further messages. Reply <strong>START</strong> to opt back in. Reply <strong>HELP</strong> for help, or email <a href="mailto:lb@bizzycube.com">lb@bizzycube.com</a> or call (833) 725-8858.</p>
<p><strong>Carriers.</strong> Carriers are not liable for delayed or undelivered messages. Delivery is not guaranteed and can be affected by your carrier, device, and coverage.</p>
<p><strong>Your mobile information is never sold or shared for marketing.</strong> No mobile information — including your phone number and your consent to be texted — will be sold, rented, or shared with third parties or affiliates for marketing or promotional purposes. Text messaging originator opt-in data and consent are excluded from every category of information sharing described in Section 6 of this Policy and are not shared with any third party. We disclose your mobile number only to the communications providers that carry the message on our behalf (for example Twilio), strictly so the message can be delivered to you, and only under contracts that forbid them from using it for their own purposes.</p>

<h2>4. Google User Data and Limited Use</h2>
<p>If you choose to connect a Google account to the Service, we request only the access needed for the features you have switched on, and we tell you which those are before you approve them:</p>
<ul>
<li><strong>Google Business Profile</strong> (business.manage) — to read and publish posts, respond to reviews, and read the questions and insights for the business locations you manage.</li>
<li><strong>Google Calendar</strong> (calendar.events) — to read your availability and create, update, or cancel the appointments booked through the Service.</li>
<li><strong>YouTube</strong> (youtube, youtube.upload) — to upload and manage videos you publish to your own channel through the Service.</li>
</ul>
<p>BizzyCube&apos;s use and transfer of information received from Google APIs to any other app will adhere to the <a href="https://developers.google.com/terms/api-services-user-data-policy" rel="noopener noreferrer" target="_blank">Google API Services User Data Policy</a>, including the Limited Use requirements. Specifically: we use Google user data only to provide and improve the user-facing features described above; we do not transfer it to others except as necessary to provide those features, to comply with applicable law, or as part of a merger or acquisition with notice to you; we do not use it for advertising; we do not sell it; and no human at BizzyCube reads it except with your explicit permission, to resolve a support issue you have raised, for security purposes, or where required by law.</p>
<p>You can disconnect a Google account at any time from within the Service, or revoke our access directly at <a href="https://myaccount.google.com/permissions" rel="noopener noreferrer" target="_blank">myaccount.google.com/permissions</a>. When you disconnect, we delete the stored access and refresh tokens for that account.</p>

<h2>5. Third-Party Integrations</h2>
<p>When you connect third-party platforms (such as QuickBooks Online, Plaid, Twilio, Mailgun, Stripe, DocuSign, Google, Meta, LinkedIn, TikTok, or YouTube), we transmit credentials and data between your account and those platforms strictly as configured by you. We store API tokens encrypted at rest in AWS Secrets Manager and use them only on your tenant&apos;s behalf. Your use of any connected platform is also governed by that platform&apos;s own privacy policy.</p>

<h2>6. How We Share Information</h2>
<p><strong>We do not sell personal information</strong>, and we do not share it for cross-context behavioral advertising. We share information only:</p>
<ul>
<li>with service providers who process it on our behalf under written data-processing terms — cloud hosting (Amazon Web Services), payment processing (Stripe), telephony and messaging delivery (Twilio), email delivery (Mailgun), and electronic signature (DocuSign);</li>
<li>with third-party platforms you have specifically authorized us to connect;</li>
<li>when required by law, or to protect the rights, property, or safety of BizzyCube, our customers, or the public;</li>
<li>in connection with a merger, acquisition, or sale of assets, with notice to you.</li>
</ul>
<p>As stated in Section 3, mobile phone numbers and text-messaging consent are excluded from all of the above except delivery by our messaging provider, and are never shared for marketing or promotional purposes by us or by anyone else.</p>

<h2>7. Data Retention</h2>
<p>We retain Customer Data for the duration of your subscription and for a commercially reasonable period after termination to handle disputes and meet legal obligations. Call recordings are retained for the period you set in the Service. You may request earlier deletion subject to legal retention requirements.</p>

<h2>8. Security</h2>
<p>We use industry-standard safeguards including encryption in transit (TLS), encryption at rest (AWS-managed keys), secret storage in AWS Secrets Manager, least-privilege access controls, audit logging, and per-tenant data isolation enforced on every request. No system is perfectly secure; we cannot guarantee absolute security.</p>

<h2>9. Your Rights and Choices</h2>
<p>Depending on your jurisdiction (including the California Consumer Privacy Act as amended by the CPRA), you may have the right to know what personal information we hold, to access or receive a copy of it, to correct it, to delete it, and to opt out of certain processing. We do not sell personal information or share it for cross-context behavioral advertising, so there is nothing to opt out of in that respect. We will not discriminate against you for exercising any of these rights.</p>
<p>To make a request, email <a href="mailto:lb@bizzycube.com">lb@bizzycube.com</a>. We will verify your identity before acting and respond within the time required by law. To stop text messages, reply STOP to any message (see Section 3).</p>

<h2>10. Children</h2>
<p>The Service is not directed to children under 16, and we do not knowingly collect personal information from children under 16. If you believe a child has provided us information, email <a href="mailto:lb@bizzycube.com">lb@bizzycube.com</a> and we will delete it.</p>

<h2>11. International Data Transfers</h2>
<p>The Service is hosted in the United States. If you access the Service from outside the U.S., your information will be transferred to and processed in the U.S.</p>

<h2>12. Changes to This Policy</h2>
<p>We may update this Policy from time to time. Material changes will be announced via the Service or by email. The &quot;Last updated&quot; date at the top reflects the most recent revision.</p>

<h2>13. Contact</h2>
<p>Questions about this Privacy Policy, or to exercise any right described above: <a href="mailto:lb@bizzycube.com">lb@bizzycube.com</a> · (833) 725-8858 · BizzyCube LLC, 115 E. Plata St, Tucson, Arizona 85705, USA.</p>
</section></div>
  );
}
