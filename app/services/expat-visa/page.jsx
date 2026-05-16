import Nav from '../../../components/layout/Nav';
import Footer from '../../../components/layout/Footer';
import MagneticButton from '../../../components/ui/MagneticButton';
import Tag from '../../../components/ui/Tag';
import { TOKENS } from '../../../lib/tokens';
import { serviceSchema, breadcrumbSchema, jsonLd } from '../../../lib/schema';

export const metadata = {
  title: 'Expat & Visa Services Maldives | DVR Work Permit | Metamorphosis MV',
  description: 'Work permit (DVR) processing, expat visa renewals, dependent visas, and government liaison in the Maldives. Based in Malé. Fast, compliant, end-to-end service.',
  openGraph: {
    title: 'Expat & Visa Services Maldives | Metamorphosis MV',
    description: 'DVR work permits, dependent visas, expat relocation support — Malé, Maldives.',
    url: 'https://mv.metamorphosis.com.bd/services/expat-visa',
  },
  alternates: { canonical: 'https://mv.metamorphosis.com.bd/services/expat-visa' },
};

const SERVICES = [['DVR & Work Permit Processing','Initial work permit applications, quota verification, Ministry of Economic Development filings, and renewal management.'],['Dependent Visa','Dependent visa applications and renewals for family members of expatriate workers.'],['Expat Relocation','Housing search, banking setup, school enrollment, and practical onboarding into Malé life.'],['Government Liaison','Direct representation with ministries, MED, and licensing bodies — we navigate bureaucracy on your behalf.'],['Company Registration','Full company incorporation in the Maldives — trade name reservation, MED registration, and statutory filings.'],['Compliance Advisory','Stay aligned with MED regulations, employment law, and sector-specific licensing requirements.']];

export default function ExpatVisa() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(serviceSchema({ name: 'Expat & Visa Services', description: 'DVR work permits, dependent visas, expat relocation and government liaison for expatriates in the Maldives.', url: '/services/expat-visa', serviceType: 'Immigration Services' })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }, { name: 'Expat & Visa', url: '/services/expat-visa' }])) }} />
      <Nav />
      <section style={{ padding: '100px 0 72px', background: 'linear-gradient(160deg, #06102B 0%, #0d2d5e 100%)', position: 'relative', overflow: 'hidden' }}>
        <div className="rb-container" style={{ position: 'relative', zIndex: 1 }}>
          <Tag color={TOKENS.teal}>Expat & Government Services</Tag>
          <h1 style={{ fontWeight: 900, fontSize: 'clamp(38px,5.5vw,64px)', color: '#fff', letterSpacing: '-0.025em', lineHeight: 1.05, margin: '20px 0 22px', maxWidth: 760 }}>
            Expat & Visa Services<br /><span style={{ color: TOKENS.teal }}>in the Maldives</span>
          </h1>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.75)', fontWeight: 300, lineHeight: 1.65, maxWidth: 600, marginBottom: 40 }}>
            Work permits, DVR processing, dependent visas, government liaison, and full relocation support. We handle the paperwork — you focus on your work.
          </p>
          <MagneticButton href="/contact" variant="teal">Get Started →</MagneticButton>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="rb-container">
          <Tag center>Our Services</Tag>
          <h2 style={{ fontWeight: 900, fontSize: 'clamp(28px,4vw,40px)', color: TOKENS.navy, letterSpacing: '-0.025em', textAlign: 'center', margin: '16px 0 48px' }}>End-to-End Expat Support</h2>
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
            {[['Business Consulting', '/services/business-consulting'], ['Accounting & MIRA', '/services/accounting-mira']].map(([label, href]) => (
              <a key={label} href={href} style={{ padding: '12px 20px', borderRadius: 99, border: '1.5px solid rgba(6,16,43,0.12)', fontSize: 14, fontWeight: 600, color: TOKENS.navy, textDecoration: 'none' }}>
                {label} →
              </a>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: TOKENS.navy, textAlign: 'center' }}>
        <div className="rb-container">
          <h2 style={{ fontWeight: 900, fontSize: 'clamp(28px,4vw,40px)', color: '#fff', letterSpacing: '-0.025em', marginBottom: 16 }}>Ready to Get Your Work Permit?</h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', fontWeight: 300, marginBottom: 32, maxWidth: 480, margin: '0 auto 32px' }}>We reply within one business day with a clear process and timeline.</p>
          <MagneticButton href="/contact" variant="teal">Contact Us Today →</MagneticButton>
        </div>
      </section>
      <Footer />
    </>
  );
}
