export const metadata = {
  title: "Privacy Policy · BizzyCube",
  description: "Privacy Policy for BizzyCube — AI-powered agency platform.",
};

export default function PrivacyPage() {
  return (
    <main style={{maxWidth: 820, margin: "0 auto", padding: "48px 24px", fontFamily: "system-ui, -apple-system, sans-serif", color: "#1f2937", lineHeight: 1.7}}>
      <h1 style={{fontSize: 36, fontWeight: 800, marginBottom: 8}}>Privacy Policy</h1>
      <p style={{color: "#6b7280", marginBottom: 32}}>Last updated: June 25, 2026</p>

      <p>This Privacy Policy describes how BizzyCube LLC (&quot;BizzyCube&quot;, &quot;we&quot;, &quot;us&quot;) collects, uses, and shares information when you use our multi-tenant SaaS platform and related services (the &quot;Service&quot;).</p>

      <h2>1. Information We Collect</h2>
      <p><strong>Account information:</strong> Name, business name, email, phone, billing address, payment method (processed by Stripe).</p>
      <p><strong>Customer Data:</strong> Contacts, leads, projects, calendar entries, communication content, financial data (when QuickBooks or bank accounts are connected), and other data you upload or generate within the Service.</p>
      <p><strong>Usage data:</strong> Pages visited, features used, API call volumes, performance and error logs.</p>
      <p><strong>Cookies and similar technologies:</strong> Session identifiers, preference cookies, and analytics cookies (when enabled).</p>

      <h2>2. How We Use Information</h2>
      <p>We use information to operate the Service, authenticate users, fulfill subscriptions, route communications to the correct tenant, fire AI-assisted workflows you configure, improve the Service, and meet legal obligations.</p>

      <h2>3. Third-Party Integrations</h2>
      <p>When you connect third-party platforms (such as QuickBooks Online, Plaid, Twilio, Mailgun, Google Workspace, Meta, TikTok, GoHighLevel, or Housecall Pro), we transmit credentials and data between your account and those platforms strictly as configured by you. We store API tokens encrypted at rest in AWS Secrets Manager or DynamoDB-backed vaults and use them only on your tenant&apos;s behalf.</p>

      <h2>4. How We Share Information</h2>
      <p>We do not sell personal information. We share information only:</p>
      <ul style={{marginLeft: 24}}>
        <li>with service providers (cloud hosting on AWS, payment processing on Stripe, email delivery, etc.) under data-processing terms;</li>
        <li>with third-party platforms you have authorized us to connect;</li>
        <li>when required by law or to protect rights, property, or safety.</li>
      </ul>

      <h2>5. Data Retention</h2>
      <p>We retain Customer Data for the duration of your subscription and for a commercially reasonable period after termination to handle disputes and meet legal obligations. You may request earlier deletion subject to legal retention requirements.</p>

      <h2>6. Security</h2>
      <p>We use industry-standard safeguards including encryption in transit (TLS), encryption at rest (AWS-managed keys), least-privilege access controls, audit logging, and per-tenant data isolation. No system is perfectly secure; we cannot guarantee absolute security.</p>

      <h2>7. Your Rights</h2>
      <p>Depending on your jurisdiction (including California CCPA/CPRA), you may have the right to access, correct, or delete your personal information, and to opt out of certain processing. Submit requests to <a href="mailto:lb@bizzycube.com">lb@bizzycube.com</a>.</p>

      <h2>8. Children</h2>
      <p>The Service is not directed to children under 16, and we do not knowingly collect personal information from children under 16.</p>

      <h2>9. International Data Transfers</h2>
      <p>The Service is hosted in the United States. If you access the Service from outside the U.S., your information will be transferred to and processed in the U.S.</p>

      <h2>10. Changes to This Policy</h2>
      <p>We may update this Policy from time to time. Material changes will be announced via the Service or by email. The &quot;Last updated&quot; date at the top reflects the most recent revision.</p>

      <h2>11. Contact</h2>
      <p>Questions about this Privacy Policy: <a href="mailto:lb@bizzycube.com">lb@bizzycube.com</a> · BizzyCube LLC, Tucson, Arizona, USA.</p>
    </main>
  );
}
