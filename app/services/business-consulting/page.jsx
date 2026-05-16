import Nav from '../../../components/layout/Nav';
import Footer from '../../../components/layout/Footer';
import MagneticButton from '../../../components/ui/MagneticButton';
import Tag from '../../../components/ui/Tag';
import { TOKENS } from '../../../lib/tokens';
import { serviceSchema, breadcrumbSchema, jsonLd } from '../../../lib/schema';

export const metadata = {
  title: 'Business Consulting Maldives | Metamorphosis MV',
  description: 'Business consulting, project management, HR & recruitment, operations outsourcing, and guest house management for companies in the Maldives. Based in Malé.',
  openGraph: {
    title: 'Business Consulting Maldives | Metamorphosis MV',
    description: 'Strategy, operations, HR, and project management for Maldivian businesses.',
    url: 'https://mv.metamorphosis.com.bd/services/business-consulting',
  },
  alternates: { canonical: 'https://mv.metamorphosis.com.bd/services/business-consulting' },
};

const SERVICES = [['Business Consulting','Growth strategy, market entry, operational efficiency, and organisational design — tailored to the Maldivian economy.'],['Project Management','End-to-end coordination for capital projects, IT rollouts, and business transformation initiatives.'],['HR & Recruitment','Talent sourcing, onboarding, employment contracts, HR policy, and staff management across resorts and tech.'],['Operations Outsourcing','Run your back-office through us — payroll, admin, procurement, vendor management, and reporting.'],['Guest House Management','Full-service operations management for guesthouse owners across the Maldives — front desk to financials.'],['Procurement Support','Supplier identification, cost negotiation, purchase orders, and inter-atoll logistics coordination.']];

export default function BusinessConsulting() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(serviceSchema({ name: 'Business Consulting', description: 'Growth strategy, project management, HR, operations outsourcing and guesthouse management for businesses in the Maldives.', url: '/services/business-consulting', serviceType: 'Business Consulting' })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }, { name: 'Business Consulting', url: '/services/business-consulting' }])) }} />
      <Nav />
      <section style={{ padding: '100px 0 72px', background: 'linear-gradient(160deg, #06102B 0%, #0d2d5e 100%)', position: 'relative', overflow: 'hidden' }}>
        <div className="rb-container" style={{ position: 'relative', zIndex: 1 }}>
          <Tag color={TOKENS.teal}>Business & Management</Tag>
          <h1 style={{ fontWeight: 900, fontSize: 'clamp(38px,5.5vw,64px)', color: '#fff', letterSpacing: '-0.025em', lineHeight: 1.05, margin: '20px 0 22px', maxWidth: 760 }}>
            Business Consulting<br /><span style={{ color: TOKENS.teal }}>for Maldivian Companies</span>
          </h1>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.75)', fontWeight: 300, lineHeight: 1.65, maxWidth: 600, marginBottom: 40 }}>
            Strategy, operations, HR, and project management — from a team with on-the-ground experience across atolls, ministries, and the resort industry. One partner for everything.
          </p>
          <MagneticButton href="/contact" variant="teal">Talk to a Consultant →</MagneticButton>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="rb-container">
          <Tag center>Services</Tag>
          <h2 style={{ fontWeight: 900, fontSize: 'clamp(28px,4vw,40px)', color: TOKENS.navy, letterSpacing: '-0.025em', textAlign: 'center', margin: '16px 0 48px' }}>How We Help</h2>
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

      <section style={{ padding: '48px 0', background: '#fff', borderTop: '1px solid rgba(6,16,43,0.06)' }}>
        <div className="rb-container">
          <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: 11, fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase', color: TOKENS.blue, marginBottom: 16 }}>// Related Services</div>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            {[['Odoo ERP Implementation', '/services/odoo-erp'], ['Expat & Visa Services', '/services/expat-visa']].map(([label, href]) => (
              <a key={label} href={href} style={{ padding: '12px 20px', borderRadius: 99, border: '1.5px solid rgba(6,16,43,0.12)', fontSize: 14, fontWeight: 600, color: TOKENS.navy, textDecoration: 'none' }}>
                {label} →
              </a>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: TOKENS.navy, textAlign: 'center' }}>
        <div className="rb-container">
          <h2 style={{ fontWeight: 900, fontSize: 'clamp(28px,4vw,40px)', color: '#fff', letterSpacing: '-0.025em', marginBottom: 16 }}>Let&apos;s Talk About Your Business</h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', fontWeight: 300, marginBottom: 32, maxWidth: 480, margin: '0 auto 32px' }}>Discovery calls are free. We come back with a clear plan within 48 hours.</p>
          <MagneticButton href="/contact" variant="teal">Get in Touch →</MagneticButton>
        </div>
      </section>
      <Footer />
    </>
  );
}
