import Nav from '../../../components/layout/Nav';
import Footer from '../../../components/layout/Footer';
import MagneticButton from '../../../components/ui/MagneticButton';
import Tag from '../../../components/ui/Tag';
import { TOKENS } from '../../../lib/tokens';
import { serviceSchema, breadcrumbSchema, jsonLd } from '../../../lib/schema';

export const metadata = {
  title: 'Odoo ERP Implementation Maldives | Metamorphosis MV',
  description: 'Certified Odoo Silver Partner in Maldives. ERP implementation, customization, training and support for Maldivian businesses. Accounting, inventory, HR, CRM and more.',
  openGraph: {
    title: 'Odoo ERP Implementation Maldives | Metamorphosis MV',
    description: 'Certified Odoo Silver Partner. Full ERP implementation for Maldivian businesses.',
    url: 'https://mv.metamorphosis.com.bd/services/odoo-erp',
  },
  alternates: { canonical: 'https://mv.metamorphosis.com.bd/services/odoo-erp' },
};

const MODULES = ['Accounting & Finance','Inventory & Warehouse','Human Resources & Payroll','CRM & Sales','Project Management','Purchase & Procurement','Point of Sale (POS)','Manufacturing','Website & E-commerce','Field Service'];
const STEPS = [['Discovery','We map your business processes, pain points and requirements — no assumptions.'],['Design','We propose a tailored Odoo configuration and customization plan with a fixed scope and timeline.'],['Build','Our certified developers implement, customize and integrate Odoo with your existing tools.'],['Train','Every user gets hands-on training. We don\'t go live until your team is confident.'],['Support','Ongoing support, upgrades and optimization after go-live — we stay with you.']];

export default function OdooERP() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(serviceSchema({ name: 'Odoo ERP Implementation', description: 'Certified Odoo Silver Partner offering ERP implementation, customization, training and support for businesses in the Maldives.', url: '/services/odoo-erp', serviceType: 'ERP Implementation' })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }, { name: 'Odoo ERP', url: '/services/odoo-erp' }])) }} />
      <Nav />
      <section style={{ padding: '100px 0 72px', background: 'linear-gradient(160deg, #06102B 0%, #0d2d5e 100%)', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -120, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(113,75,103,0.3), transparent 65%)', pointerEvents: 'none' }} />
        <div className="rb-container" style={{ position: 'relative', zIndex: 1 }}>
          <Tag color={TOKENS.teal}>Odoo ERP · Silver Partner</Tag>
          <h1 style={{ fontWeight: 900, fontSize: 'clamp(38px,5.5vw,64px)', color: '#fff', letterSpacing: '-0.025em', lineHeight: 1.05, margin: '20px 0 22px', maxWidth: 760 }}>
            Odoo ERP Implementation<br /><span style={{ color: TOKENS.teal }}>for Maldivian Businesses</span>
          </h1>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.75)', fontWeight: 300, lineHeight: 1.65, maxWidth: 600, marginBottom: 40 }}>
            We are a certified Odoo Silver Partner — one of the few in the Maldives with the team and experience to implement, customize and support Odoo ERP for local businesses, resorts, and government-linked entities.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <MagneticButton href="/contact" variant="teal">Get a Free Consultation →</MagneticButton>
            <MagneticButton href="/about" variant="ghost">About Us</MagneticButton>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="rb-container">
          <Tag center>Odoo Modules</Tag>
          <h2 style={{ fontWeight: 900, fontSize: 'clamp(28px,4vw,40px)', color: TOKENS.navy, letterSpacing: '-0.025em', textAlign: 'center', margin: '16px 0 48px' }}>Everything in One Platform</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 14, maxWidth: 900, margin: '0 auto' }}>
            {MODULES.map((m) => (
              <div key={m} style={{ padding: '16px 20px', borderRadius: 12, border: '1.5px solid rgba(6,16,43,0.08)', display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: TOKENS.teal, flexShrink: 0 }} />
                <span style={{ fontSize: 14, fontWeight: 600, color: TOKENS.navy }}>{m}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: 'var(--mint)' }}>
        <div className="rb-container">
          <Tag center>Our Process</Tag>
          <h2 style={{ fontWeight: 900, fontSize: 'clamp(28px,4vw,40px)', color: TOKENS.navy, letterSpacing: '-0.025em', textAlign: 'center', margin: '16px 0 48px' }}>How We Implement</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 760, margin: '0 auto' }}>
            {STEPS.map(([title, desc], i) => (
              <div key={title} style={{ display: 'flex', gap: 24, alignItems: 'flex-start', padding: '24px 28px', borderRadius: 14, background: '#fff', border: '1px solid rgba(6,16,43,0.06)' }}>
                <div style={{ width: 40, height: 40, borderRadius: 12, background: TOKENS.navy, color: TOKENS.teal, fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 15, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>0{i + 1}</div>
                <div>
                  <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: 16, color: TOKENS.navy, marginBottom: 6 }}>{title}</div>
                  <div style={{ fontSize: 14, color: TOKENS.body, fontWeight: 300, lineHeight: 1.6 }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '48px 0', background: '#fff', borderTop: '1px solid rgba(6,16,43,0.06)' }}>
        <div className="rb-container">
          <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: 11, fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase', color: TOKENS.blue, marginBottom: 16 }}>// Related Services</div>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            {[['MIRA-Compliant Accounting', '/services/accounting-mira'], ['Business Consulting', '/services/business-consulting']].map(([label, href]) => (
              <a key={label} href={href} style={{ padding: '12px 20px', borderRadius: 99, border: '1.5px solid rgba(6,16,43,0.12)', fontSize: 14, fontWeight: 600, color: TOKENS.navy, textDecoration: 'none' }}>
                {label} →
              </a>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: TOKENS.navy, textAlign: 'center' }}>
        <div className="rb-container">
          <h2 style={{ fontWeight: 900, fontSize: 'clamp(28px,4vw,40px)', color: '#fff', letterSpacing: '-0.025em', marginBottom: 16 }}>Ready to Implement Odoo?</h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', fontWeight: 300, marginBottom: 32, maxWidth: 480, margin: '0 auto 32px' }}>Free discovery call. Written scope within 48 hours. No commitment.</p>
          <MagneticButton href="/contact" variant="teal">Talk to an Odoo Specialist →</MagneticButton>
        </div>
      </section>
      <Footer />
    </>
  );
}
