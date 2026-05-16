import Nav from '../layout/Nav';
import Footer from '../layout/Footer';
import MagneticButton from '../ui/MagneticButton';
import Tag from '../ui/Tag';
import { TOKENS } from '../../lib/tokens';

export default function LandingPage({ tag, h1, intro, services, faqs, ctaText = 'Get a Free Consultation →', ctaHref = '/contact' }) {
  return (
    <>
      <Nav />

      <section style={{ padding: '96px 0 72px', background: 'linear-gradient(160deg, #06102B 0%, #0d2d5e 100%)', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -120, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,229,192,0.12), transparent 65%)', pointerEvents: 'none' }} />
        <div className="rb-container" style={{ position: 'relative', zIndex: 1 }}>
          <Tag color={TOKENS.teal}>{tag}</Tag>
          <h1 style={{ fontWeight: 900, fontSize: 'clamp(36px,5vw,60px)', color: '#fff', letterSpacing: '-0.025em', lineHeight: 1.05, margin: '20px 0 22px', maxWidth: 800 }}>{h1}</h1>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.75)', fontWeight: 300, lineHeight: 1.65, maxWidth: 620, marginBottom: 40 }}>{intro}</p>
          <MagneticButton href={ctaHref} variant="teal">{ctaText}</MagneticButton>
        </div>
      </section>

      {services && services.length > 0 && (
        <section style={{ padding: '72px 0', background: '#fff' }}>
          <div className="rb-container">
            <Tag center>Services Included</Tag>
            <h2 style={{ fontWeight: 900, fontSize: 'clamp(26px,3.5vw,38px)', color: TOKENS.navy, letterSpacing: '-0.025em', textAlign: 'center', margin: '16px 0 40px' }}>What We Provide</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 14, maxWidth: 920, margin: '0 auto' }}>
              {services.map((s) => (
                <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 18px', borderRadius: 12, border: '1.5px solid rgba(6,16,43,0.08)', background: '#fff' }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: TOKENS.teal, flexShrink: 0 }} />
                  <span style={{ fontSize: 14, fontWeight: 600, color: TOKENS.navy }}>{s}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {faqs && faqs.length > 0 && (
        <section style={{ padding: '72px 0', background: 'var(--mint)' }}>
          <div className="rb-container" style={{ maxWidth: 780 }}>
            <Tag center>FAQ</Tag>
            <h2 style={{ fontWeight: 900, fontSize: 'clamp(26px,3.5vw,38px)', color: TOKENS.navy, letterSpacing: '-0.025em', textAlign: 'center', margin: '16px 0 40px' }}>Common Questions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {faqs.map(({ q, a }) => (
                <div key={q} style={{ padding: '24px 28px', borderRadius: 14, background: '#fff', border: '1px solid rgba(6,16,43,0.06)' }}>
                  <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: 15, color: TOKENS.navy, marginBottom: 10 }}>{q}</div>
                  <div style={{ fontSize: 14.5, color: TOKENS.body, fontWeight: 300, lineHeight: 1.7 }}>{a}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section style={{ padding: '72px 0', background: TOKENS.navy, textAlign: 'center' }}>
        <div className="rb-container">
          <h2 style={{ fontWeight: 900, fontSize: 'clamp(26px,3.5vw,38px)', color: '#fff', letterSpacing: '-0.025em', marginBottom: 16 }}>Ready to Get Started?</h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', fontWeight: 300, maxWidth: 440, margin: '0 auto 32px' }}>Free discovery call. Written scope within 48 hours.</p>
          <MagneticButton href="/contact" variant="teal">{ctaText}</MagneticButton>
        </div>
      </section>

      <Footer />
    </>
  );
}
