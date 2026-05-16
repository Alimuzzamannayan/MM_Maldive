import Nav from '../../../components/layout/Nav';
import Footer from '../../../components/layout/Footer';
import MagneticButton from '../../../components/ui/MagneticButton';
import Tag from '../../../components/ui/Tag';
import { TOKENS } from '../../../lib/tokens';
import { serviceSchema, breadcrumbSchema, jsonLd } from '../../../lib/schema';

export const metadata = {
  title: 'MIRA-Compliant Accounting Maldives | Metamorphosis MV',
  description: 'Professional accounting, GST filing, income tax returns and MIRA-compliant bookkeeping for businesses in the Maldives. Serving Malé, resorts, guesthouses and expat-run companies.',
  openGraph: {
    title: 'MIRA-Compliant Accounting Maldives | Metamorphosis MV',
    description: 'GST filing, income tax, bookkeeping — fully aligned with MIRA requirements.',
    url: 'https://mv.metamorphosis.com.bd/services/accounting-mira',
  },
  alternates: { canonical: 'https://mv.metamorphosis.com.bd/services/accounting-mira' },
};

const SERVICES = [['GST Registration & Returns','Monthly and annual GST filings aligned with MIRA requirements — accurate, on time, audit-ready.'],['Income Tax Filing','Corporate income tax returns prepared and filed in compliance with the Maldives Income Tax Act.'],['Bookkeeping','Day-to-day transaction recording, bank reconciliation, and ledger maintenance.'],['Payroll Processing','Monthly payroll calculations, payslips, and pension (MPAO) contribution management.'],['Financial Reporting','Monthly P&L, balance sheet, and cash flow statements for management and audit purposes.'],['Audit Support','Year-end audit preparation and liaison with external auditors — documentation, reconciliations, and schedules.']];

export default function AccountingMIRA() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(serviceSchema({ name: 'MIRA-Compliant Accounting', description: 'GST registration and returns, income tax filings, bookkeeping and payroll — fully aligned with MIRA regulations in the Maldives.', url: '/services/accounting-mira', serviceType: 'Accounting Services' })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }, { name: 'Accounting & MIRA', url: '/services/accounting-mira' }])) }} />
      <Nav />
      <section style={{ padding: '100px 0 72px', background: 'linear-gradient(160deg, #06102B 0%, #0d2d5e 100%)', position: 'relative', overflow: 'hidden' }}>
        <div className="rb-container" style={{ position: 'relative', zIndex: 1 }}>
          <Tag color={TOKENS.teal}>Accounting & Finance</Tag>
          <h1 style={{ fontWeight: 900, fontSize: 'clamp(38px,5.5vw,64px)', color: '#fff', letterSpacing: '-0.025em', lineHeight: 1.05, margin: '20px 0 22px', maxWidth: 760 }}>
            MIRA-Compliant Accounting<br /><span style={{ color: TOKENS.teal }}>for Maldivian Businesses</span>
          </h1>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.75)', fontWeight: 300, lineHeight: 1.65, maxWidth: 600, marginBottom: 40 }}>
            Tax-ready bookkeeping, GST returns, income tax filings, and financial reporting — fully aligned with MIRA regulations. We handle the numbers so you can focus on running your business.
          </p>
          <MagneticButton href="/contact" variant="teal">Get a Free Consultation →</MagneticButton>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="rb-container">
          <Tag center>What We Cover</Tag>
          <h2 style={{ fontWeight: 900, fontSize: 'clamp(28px,4vw,40px)', color: TOKENS.navy, letterSpacing: '-0.025em', textAlign: 'center', margin: '16px 0 48px' }}>Full Accounting Service</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20, maxWidth: 960, margin: '0 auto' }}>
            {SERVICES.map(([title, desc]) => (
              <div key={title} style={{ padding: '28px 24px', borderRadius: 14, border: '1.5px solid rgba(6,16,43,0.08)', background: '#fff' }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: TOKENS.teal, marginBottom: 16 }} />
                <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: 16, color: TOKENS.navy, marginBottom: 8 }}>{title}</div>
                <div style={{ fontSize: 14, color: TOKENS.body, fontWeight: 300, lineHeight: 1.65 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '64px 0', background: 'var(--mint)' }}>
        <div className="rb-container" style={{ maxWidth: 760 }}>
          <div style={{ padding: '36px 40px', borderRadius: 16, background: '#fff', border: '1.5px solid rgba(0,229,192,0.3)' }}>
            <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: 11, fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase', color: TOKENS.teal, marginBottom: 14 }}>// Who We Serve</div>
            <p style={{ fontSize: 16, color: TOKENS.body, fontWeight: 300, lineHeight: 1.75 }}>
              We work with trading companies, resorts, guesthouses, construction firms, expat-owned businesses, and SMEs across the Maldives — any business required to file GST, income tax, or maintain MIRA-compliant records.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: '48px 0', background: '#fff', borderTop: '1px solid rgba(6,16,43,0.06)' }}>
        <div className="rb-container">
          <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: 11, fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase', color: TOKENS.blue, marginBottom: 16 }}>// Related Services</div>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            {[['Odoo ERP Implementation', '/services/odoo-erp'], ['Business Consulting', '/services/business-consulting']].map(([label, href]) => (
              <a key={label} href={href} style={{ padding: '12px 20px', borderRadius: 99, border: '1.5px solid rgba(6,16,43,0.12)', fontSize: 14, fontWeight: 600, color: TOKENS.navy, textDecoration: 'none' }}>
                {label} →
              </a>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: TOKENS.navy, textAlign: 'center' }}>
        <div className="rb-container">
          <h2 style={{ fontWeight: 900, fontSize: 'clamp(28px,4vw,40px)', color: '#fff', letterSpacing: '-0.025em', marginBottom: 16 }}>Stop Worrying About MIRA.</h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', fontWeight: 300, marginBottom: 32, maxWidth: 480, margin: '0 auto 32px' }}>We handle compliance. You handle your business.</p>
          <MagneticButton href="/contact" variant="teal">Talk to an Accountant →</MagneticButton>
        </div>
      </section>
      <Footer />
    </>
  );
}
