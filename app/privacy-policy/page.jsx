import Nav from '../../components/layout/Nav';
import Footer from '../../components/layout/Footer';
import { TOKENS } from '../../lib/tokens';

export const metadata = {
  title: 'Privacy Policy | Metamorphosis MV',
  description: 'Privacy Policy for Metamorphosis MV. Learn how we collect, use, and protect your personal information.',
  alternates: { canonical: 'https://mv.metamorphosis.com.bd/privacy-policy' },
};

const SECTIONS = [
  {
    title: '1. Who We Are',
    body: `Metamorphosis MV is a multi-service company headquartered in Malé, Maldives, providing business consulting, Odoo ERP implementation, accounting, expat services, app development, and related professional services. Our website is mv.metamorphosis.com.bd.

For privacy-related inquiries, contact us at: marketing@metamorphosis.com.bd`,
  },
  {
    title: '2. Information We Collect',
    body: `We collect information you provide directly to us, including:

• Contact form submissions: full name, work email, company name, phone number, service of interest, company size, and project details.
• Communications: any information you share when contacting us via email, WhatsApp, Viber, or phone.
• Usage data: pages visited, time spent, browser type, device type, and referring URL — collected automatically via Vercel Analytics.

We do not collect sensitive personal data (health, financial account numbers, government ID) through our website.`,
  },
  {
    title: '3. How We Use Your Information',
    body: `We use the information we collect to:

• Respond to your enquiries and provide requested services.
• Prepare and deliver project proposals, scopes of work, and quotations.
• Send service-related communications (not marketing unless you opt in).
• Improve our website and understand how visitors use it.
• Comply with applicable legal and regulatory obligations in the Maldives.

We do not sell, rent, or trade your personal information to third parties.`,
  },
  {
    title: '4. Legal Basis for Processing',
    body: `We process your personal data on the following grounds:

• Contractual necessity: to respond to your enquiry and deliver services you request.
• Legitimate interests: to improve our services and website experience.
• Legal obligation: to comply with applicable Maldivian laws and regulations.`,
  },
  {
    title: '5. How We Share Your Information',
    body: `We share your information only in the following limited circumstances:

• Service providers: we use Zoho Mail (SMTP) to send and receive emails. Your contact form submission is transmitted to our team inbox via Zoho's infrastructure.
• Analytics: Vercel Analytics collects anonymised usage data. No personally identifiable information is shared.
• Legal requirements: we may disclose information if required by law, court order, or government authority in the Maldives.
• Business transfer: in the event of a merger or acquisition, your information may be transferred as part of that transaction.

All third-party providers are required to maintain confidentiality and use your data only for the purposes we specify.`,
  },
  {
    title: '6. Cookies and Tracking',
    body: `Our website uses minimal tracking:

• Vercel Analytics: anonymised, privacy-friendly analytics with no cookies required.
• No advertising cookies, no cross-site tracking, no third-party marketing pixels are deployed on this website.

You can disable JavaScript in your browser to prevent any analytics collection without affecting most site functionality.`,
  },
  {
    title: '7. Data Retention',
    body: `We retain your personal information for as long as necessary to:

• Fulfil the purpose for which it was collected (e.g. respond to your enquiry).
• Comply with our legal obligations (typically 5 years for business records under Maldivian law).
• Resolve disputes and enforce agreements.

Contact form submissions are stored in our email system and deleted when no longer needed for business purposes.`,
  },
  {
    title: '8. Your Rights',
    body: `You have the right to:

• Access the personal information we hold about you.
• Request correction of inaccurate or incomplete information.
• Request deletion of your personal information, subject to legal retention requirements.
• Object to or restrict our processing of your information.
• Withdraw consent at any time where processing is based on consent.

To exercise any of these rights, contact us at marketing@metamorphosis.com.bd. We will respond within 30 days.`,
  },
  {
    title: '9. Data Security',
    body: `We take reasonable technical and organisational measures to protect your information from unauthorised access, loss, or disclosure, including:

• Encrypted email transmission (TLS) via Zoho SMTP.
• HTTPS encryption on all website communications.
• Access controls limiting who within our organisation can access submitted data.

No method of transmission over the internet is 100% secure. If you have concerns about a specific communication, please contact us directly.`,
  },
  {
    title: '10. International Transfers',
    body: `Our website is hosted on Vercel (USA). By submitting information through our website, you acknowledge that your data may be processed in countries outside the Maldives, including the United States. We ensure appropriate safeguards are in place for any such transfers.`,
  },
  {
    title: '11. Children\'s Privacy',
    body: `Our services are directed at businesses and professionals. We do not knowingly collect personal information from individuals under the age of 18. If you believe we have inadvertently collected such information, contact us immediately.`,
  },
  {
    title: '12. Links to Third-Party Sites',
    body: `Our website may contain links to third-party websites (including our parent company metamorphosis.com.bd). This Privacy Policy applies only to mv.metamorphosis.com.bd. We are not responsible for the privacy practices of external sites.`,
  },
  {
    title: '13. Changes to This Policy',
    body: `We may update this Privacy Policy from time to time. The "Last Updated" date at the top of this page reflects the most recent revision. Continued use of our website after changes are posted constitutes acceptance of the updated policy.`,
  },
  {
    title: '14. Contact Us',
    body: `For any questions, requests, or concerns about this Privacy Policy or our data practices:

Metamorphosis MV
Malé, Maldives
Email: marketing@metamorphosis.com.bd
Phone: +960 741 7734
WhatsApp: +960 741 7734`,
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section style={{ padding: '80px 0 48px', background: 'linear-gradient(180deg, #f8fffe 0%, #fff 100%)', borderBottom: '1px solid rgba(6,16,43,0.06)' }}>
        <div className="rb-container" style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: 11, fontWeight: 500, letterSpacing: '2.5px', textTransform: 'uppercase', color: TOKENS.teal, marginBottom: 16 }}>// Legal</div>
          <h1 style={{ fontWeight: 900, fontSize: 'clamp(36px,5vw,56px)', letterSpacing: '-0.025em', color: TOKENS.navy, marginBottom: 16, lineHeight: 1.05 }}>
            Privacy Policy
          </h1>
          <p style={{ fontSize: 15, color: TOKENS.body, fontWeight: 300 }}>
            Last updated: 9 May 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '64px 0 96px', background: '#fff' }}>
        <div className="rb-container" style={{ maxWidth: 860, margin: '0 auto' }}>
          <p style={{ fontSize: 16, color: TOKENS.body, fontWeight: 300, lineHeight: 1.75, marginBottom: 48, padding: '24px 28px', background: 'rgba(0,229,192,0.06)', borderRadius: 12, border: '1px solid rgba(0,229,192,0.2)' }}>
            This Privacy Policy explains how Metamorphosis MV collects, uses, shares, and protects personal information when you visit our website or contact us about our services. Please read it carefully.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
            {SECTIONS.map(({ title, body }) => (
              <div key={title}>
                <h2 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: 18, color: TOKENS.navy, marginBottom: 14, letterSpacing: '-0.01em' }}>
                  {title}
                </h2>
                <div style={{ fontSize: 15, color: TOKENS.body, fontWeight: 300, lineHeight: 1.8, whiteSpace: 'pre-line' }}>
                  {body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
