import Nav from '../../components/layout/Nav';
import Footer from '../../components/layout/Footer';
import MagneticButton from '../../components/ui/MagneticButton';
import Tag from '../../components/ui/Tag';
import { TOKENS } from '../../lib/tokens';

export const metadata = {
  title: 'Our Services | Business Services Maldives | Metamorphosis MV',
  description: 'Odoo ERP, MIRA-compliant accounting, business consulting, app development, expat & visa services — 17+ professional services for Maldivian businesses.',
  openGraph: {
    title: 'Our Services | Metamorphosis MV',
    description: '17+ professional services for Maldivian businesses. Odoo ERP, accounting, consulting, app development, expat visa.',
    url: 'https://mv.metamorphosis.com.bd/services',
  },
};

const CATEGORIES = [
  {
    tag: '// Odoo Silver Partner',
    title: 'Odoo ERP',
    desc: 'Full Odoo implementation, customization, training and support. Accounting, inventory, HR, CRM, POS and more — certified specialists.',
    href: '/services/odoo-erp',
    color: TOKENS.odooPrimary,
    services: ['ERP Implementation', 'Odoo Customization', 'Module Configuration', 'User Training', 'Ongoing Support', 'Odoo Migration'],
  },
  {
    tag: '// MIRA Compliant',
    title: 'Accounting & Finance',
    desc: 'GST registration and returns, income tax filings, bookkeeping, payroll, and audit support — fully aligned with MIRA regulations.',
    href: '/services/accounting-mira',
    color: TOKENS.teal,
    services: ['GST Filing', 'Income Tax Returns', 'Bookkeeping', 'Payroll Processing', 'Financial Reporting', 'Audit Support'],
  },
  {
    tag: '// Strategy & Ops',
    title: 'Business Consulting',
    desc: 'Growth strategy, project management, HR & recruitment, operations outsourcing, guesthouse management, and procurement support.',
    href: '/services/business-consulting',
    color: TOKENS.blue,
    services: ['Business Strategy', 'Project Management', 'HR & Recruitment', 'Operations Outsourcing', 'Guest House Management', 'Procurement'],
  },
  {
    tag: '// Digital & Creative',
    title: 'App & Web Development',
    desc: 'Custom websites, iOS & Android apps, branding, UI/UX design, and digital marketing — built for Maldivian businesses.',
    href: '/services/app-development',
    color: TOKENS.blue,
    services: ['Web Development', 'Mobile Apps', 'Branding & Design', 'Digital Marketing', 'UI/UX Design', 'Maintenance'],
  },
  {
    tag: '// Government & Legal',
    title: 'Expat & Visa Services',
    desc: 'DVR work permits, dependent visas, expat relocation, government liaison, company registration, and compliance advisory.',
    href: '/services/expat-visa',
    color: TOKENS.teal,
    services: ['Work Permit (DVR)', 'Dependent Visa', 'Expat Relocation', 'Government Liaison', 'Company Registration', 'Compliance Advisory'],
  },
];

export default function Services() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section style={{ padding: '96px 0 72px', background: 'linear-gradient(160deg, #06102B 0%, #0d2d5e 100%)', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -120, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,229,192,0.12), transparent 65%)', pointerEvents: 'none' }} />
        <div className="rb-container" style={{ position: 'relative', zIndex: 1 }}>
          <Tag color={TOKENS.teal}>17+ Services</Tag>
          <h1 style={{ fontWeight: 900, fontSize: 'clamp(38px,5.5vw,64px)', color: '#fff', letterSpacing: '-0.025em', lineHeight: 1.05, margin: '20px 0 22px', maxWidth: 760 }}>
            Everything Your Business<br /><span style={{ color: TOKENS.teal }}>Needs. Under One Roof.</span>
          </h1>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.75)', fontWeight: 300, lineHeight: 1.65, maxWidth: 600, marginBottom: 40 }}>
            From ERP implementation to work permit processing — we bring 17+ professional services to Maldivian businesses, resorts, and expats. One partner. Full accountability.
          </p>
          <MagneticButton href="/contact" variant="teal">Get a Free Consultation →</MagneticButton>
        </div>
      </section>

      {/* Service Cards */}
      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="rb-container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {CATEGORIES.map(({ tag, title, desc, href, color, services }) => (
              <div key={title} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, borderRadius: 18, border: '1.5px solid rgba(6,16,43,0.08)', overflow: 'hidden', background: '#fff', boxShadow: '0 4px 24px rgba(6,16,43,0.04)' }}>
                {/* Left */}
                <div style={{ padding: '40px 40px', borderRight: '1px solid rgba(6,16,43,0.06)' }}>
                  <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: 11, fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase', color, marginBottom: 14 }}>{tag}</div>
                  <h2 style={{ fontWeight: 900, fontSize: 26, color: TOKENS.navy, letterSpacing: '-0.02em', marginBottom: 14 }}>{title}</h2>
                  <p style={{ fontSize: 15, color: TOKENS.body, fontWeight: 300, lineHeight: 1.7, marginBottom: 28 }}>{desc}</p>
                  <a href={href} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'Open Sans,sans-serif', fontWeight: 700, fontSize: 14, color, textDecoration: 'none', letterSpacing: '0.01em' }}>
                    Learn more →
                  </a>
                </div>
                {/* Right — service list */}
                <div style={{ padding: '40px 40px', background: 'rgba(248,252,255,0.6)' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                    {services.map((s) => (
                      <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', borderRadius: 10, background: '#fff', border: '1px solid rgba(6,16,43,0.06)' }}>
                        <div style={{ width: 7, height: 7, borderRadius: '50%', background: color, flexShrink: 0 }} />
                        <span style={{ fontSize: 13, fontWeight: 600, color: TOKENS.navy }}>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 0', background: TOKENS.navy, textAlign: 'center' }}>
        <div className="rb-container">
          <h2 style={{ fontWeight: 900, fontSize: 'clamp(28px,4vw,40px)', color: '#fff', letterSpacing: '-0.025em', marginBottom: 16 }}>Not Sure Where to Start?</h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', fontWeight: 300, maxWidth: 480, margin: '0 auto 32px' }}>Tell us your challenge. Free discovery call. Clear scope within 48 hours.</p>
          <MagneticButton href="/contact" variant="teal">Talk to Us Today →</MagneticButton>
        </div>
      </section>

      <Footer />
    </>
  );
}
