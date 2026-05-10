import Nav from '../../components/layout/Nav';
import Footer from '../../components/layout/Footer';
import MagneticButton from '../../components/ui/MagneticButton';
import Tag from '../../components/ui/Tag';
import { TOKENS } from '../../lib/tokens';

export const metadata = {
  title: 'About Us | Metamorphosis MV — Business Services Maldives',
  description: 'Metamorphosis MV is a Maldives-based multi-service company. Odoo Silver Partner, MIRA-compliant accounting specialists, and end-to-end business solutions for Maldivian businesses and expats.',
  openGraph: {
    title: 'About Metamorphosis MV',
    description: 'Maldives-based business services company. Odoo Silver Partner, 10+ years experience, 40+ professionals.',
    url: 'https://mv.metamorphosis.com.bd/about',
    images: [{ url: 'https://mv.metamorphosis.com.bd/assets/logo-full.png' }],
  },
};

const STATS = [
  ['10+', 'Years Experience'],
  ['40+', 'Professionals'],
  ['100+', 'Clients Served'],
  ['17+', 'Services'],
];

const VALUES = [
  {
    n: '// 01',
    title: 'Listen First',
    body: 'We listen carefully to your challenges before presenting options. Your input shapes the solution — not the other way around.',
  },
  {
    n: '// 02',
    title: 'Local Fluency',
    body: 'Headquartered in Malé with deep relationships across atolls, ministries, and the resort industry. We understand the realities of doing business in the Maldives.',
  },
  {
    n: '// 03',
    title: 'One Partner',
    body: 'From company registration to a deployed ERP — one accountable team instead of five separate vendors. We own the outcome end to end.',
  },
];

const TEAM = [
  {
    name: 'Mohammad Rukunuzzaman',
    role: 'CEO & Co-Founder',
    bio: '13+ years in Communication Technology and Financial Planning. Former Head of Core Network Operations at Banglalink. Graduate of BUET.',
  },
  {
    name: 'Sadiq M. Alam',
    role: 'COO & Co-Founder',
    bio: 'Serial entrepreneur specialising in information architecture and business strategy. Graduate of BUET, Masters from NUS Singapore, Fellowship from UCLA.',
  },
  {
    name: 'Ishtiaque Al Mahmud',
    role: 'Director, Marketing',
    bio: '12+ years in Telecom and Facilities Services. MBA in Finance from NSU. B.Sc. from IUT.',
  },
];

export default function About() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section style={{ padding: '100px 0 72px', background: 'linear-gradient(160deg, #06102B 0%, #0d2d5e 100%)', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: -100, right: -100, width: 540, height: 540, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,229,192,0.15), transparent 65%)', pointerEvents: 'none' }} />
        <div className="rb-container" style={{ position: 'relative', zIndex: 1 }}>
          <Tag color={TOKENS.teal}>About Us</Tag>
          <h1 style={{ fontWeight: 900, fontSize: 'clamp(40px,6vw,68px)', color: '#fff', letterSpacing: '-0.025em', lineHeight: 1.05, margin: '20px 0 24px', maxWidth: 780 }}>
            Maldives-Based.<br />
            <span style={{ color: TOKENS.teal }}>Built for Scale.</span>
          </h1>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.75)', fontWeight: 300, lineHeight: 1.65, maxWidth: 600, marginBottom: 40 }}>
            Metamorphosis MV is the Maldives arm of the Metamorphosis group — one of the region&apos;s most experienced Odoo Silver Partners, bringing global ERP expertise to Maldivian businesses, resorts, and expats since 2016.
          </p>
          <MagneticButton href="/contact" variant="teal">Work With Us →</MagneticButton>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: '#fff', borderBottom: '1px solid rgba(6,16,43,0.06)' }}>
        <div className="rb-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', padding: '40px 0' }}>
            {STATS.map(([num, label]) => (
              <div key={label} style={{ textAlign: 'center', padding: '8px 16px', borderRight: '1px solid rgba(6,16,43,0.08)' }}>
                <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 40, color: TOKENS.navy, letterSpacing: '-0.03em', lineHeight: 1 }}>{num}</div>
                <div style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '1.8px', color: TOKENS.body, fontWeight: 600, marginTop: 8 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section style={{ padding: '96px 0', background: '#fff' }}>
        <div className="rb-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <div>
              <Tag>Our Mission</Tag>
              <h2 style={{ fontWeight: 900, fontSize: 'clamp(30px,4vw,44px)', color: TOKENS.navy, letterSpacing: '-0.025em', margin: '16px 0 20px', lineHeight: 1.1 }}>
                You Dream It.<br />We Build It.
              </h2>
              <p style={{ fontSize: 16, color: TOKENS.body, fontWeight: 300, lineHeight: 1.75, marginBottom: 20 }}>
                Our mission is to turn your business vision into reality through expert technology and professional services. Since 2016, we have been a trusted partner delivering Odoo ERP, accounting, legal, and digital solutions to businesses across the region.
              </p>
              <p style={{ fontSize: 16, color: TOKENS.body, fontWeight: 300, lineHeight: 1.75 }}>
                We are a team of driven professionals with the right mix of skill, knowledge, and on-the-ground experience to transform businesses — professionally, scalably, and sustainably. We listen first, present options clearly, and empower you to make informed decisions.
              </p>
            </div>
            <div>
              <div style={{ background: 'var(--mint)', borderRadius: 20, padding: '40px 36px', border: '1px solid rgba(0,229,192,0.2)' }}>
                <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: 11, fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase', color: TOKENS.teal, marginBottom: 20 }}>// Our Vision</div>
                <p style={{ fontSize: 20, fontFamily: 'Montserrat,sans-serif', fontWeight: 800, color: TOKENS.navy, lineHeight: 1.4, letterSpacing: '-0.02em', marginBottom: 24 }}>
                  &ldquo;Reshaping possibilities and empowering businesses through innovative solutions.&rdquo;
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {[['Odoo Silver Partner', 'Certified since 2016'], ['MIRA Compliant', 'Maldives tax specialists'], ['End-to-End', '17+ services under one roof']].map(([t, s]) => (
                    <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                      <div style={{ width: 8, height: 8, borderRadius: '50%', background: TOKENS.teal, flexShrink: 0 }} />
                      <div>
                        <span style={{ fontWeight: 700, fontSize: 14, color: TOKENS.navy }}>{t}</span>
                        <span style={{ fontSize: 13, color: TOKENS.body, fontWeight: 300 }}> — {s}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: '96px 0', background: 'var(--mint)' }}>
        <div className="rb-container">
          <div className="rb-section-head" style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 56px' }}>
            <Tag center>How We Work</Tag>
            <h2 style={{ fontWeight: 900, fontSize: 'clamp(30px,4vw,44px)', color: TOKENS.navy, letterSpacing: '-0.025em', margin: '16px 0 16px' }}>Our Principles</h2>
          </div>
          <div className="rb-why-grid">
            {VALUES.map(({ n, title, body }) => (
              <div key={title} className="rb-why-col" style={{ background: '#fff', border: '1px solid rgba(6,16,43,0.08)' }}>
                <div style={{ fontFamily: 'JetBrains Mono,monospace', color: TOKENS.teal, fontSize: 12, letterSpacing: '0.18em', marginBottom: 22 }}>{n}</div>
                <h3 style={{ color: TOKENS.navy }}>{title}</h3>
                <p style={{ color: TOKENS.body }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section style={{ padding: '96px 0', background: '#fff' }}>
        <div className="rb-container">
          <div className="rb-section-head" style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 56px' }}>
            <Tag center>Leadership</Tag>
            <h2 style={{ fontWeight: 900, fontSize: 'clamp(30px,4vw,44px)', color: TOKENS.navy, letterSpacing: '-0.025em', margin: '16px 0 16px' }}>The Founders</h2>
            <p style={{ fontWeight: 300, fontSize: 16, color: TOKENS.body }}>The team behind Metamorphosis — carrying 9+ years of ERP and business transformation experience.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, maxWidth: 960, margin: '0 auto' }}>
            {TEAM.map(({ name, role, bio }) => (
              <div key={name} style={{ padding: '32px 28px', borderRadius: 16, border: '1.5px solid rgba(6,16,43,0.08)', background: '#fff', transition: 'all .25s ease' }}
                onMouseEnter={undefined} onMouseLeave={undefined}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: `linear-gradient(135deg, ${TOKENS.teal}, ${TOKENS.blue})`, marginBottom: 20 }} />
                <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: 16, color: TOKENS.navy, marginBottom: 4 }}>{name}</div>
                <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: 11, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: TOKENS.teal, marginBottom: 14 }}>{role}</div>
                <p style={{ fontSize: 13.5, color: TOKENS.body, fontWeight: 300, lineHeight: 1.65 }}>{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section style={{ padding: '80px 0', background: TOKENS.navy }}>
        <div className="rb-container" style={{ maxWidth: 760, textAlign: 'center' }}>
          <div style={{ fontSize: 48, color: TOKENS.teal, fontFamily: 'Georgia,serif', lineHeight: 1, marginBottom: 24 }}>&ldquo;</div>
          <p style={{ fontSize: 20, color: '#fff', fontWeight: 300, lineHeight: 1.7, marginBottom: 28, fontStyle: 'italic' }}>
            Before using Odoo, it was really difficult to get real-time accurate data. Now, we are getting all kinds of financial reports just on a click. All of our business processes are integrated — we have full visibility of our company resources.
          </p>
          <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: 15, color: TOKENS.teal }}>Nafiz Ahmed</div>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', fontWeight: 300, marginTop: 4 }}>Head of Finance, Grameen Danone Foods Limited</div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 0', background: '#fff', textAlign: 'center' }}>
        <div className="rb-container">
          <h2 style={{ fontWeight: 900, fontSize: 'clamp(28px,4vw,40px)', color: TOKENS.navy, letterSpacing: '-0.025em', marginBottom: 16 }}>Ready to Work Together?</h2>
          <p style={{ fontSize: 16, color: TOKENS.body, fontWeight: 300, marginBottom: 32, maxWidth: 480, margin: '0 auto 32px' }}>Discovery calls are free. Tell us about your project and we&apos;ll come back with a clear scope within 48 hours.</p>
          <MagneticButton href="/contact" variant="primary">Get in Touch →</MagneticButton>
        </div>
      </section>

      <Footer />
    </>
  );
}
