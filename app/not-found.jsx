import Nav from '../components/layout/Nav';
import Footer from '../components/layout/Footer';
import MagneticButton from '../components/ui/MagneticButton';
import { TOKENS } from '../lib/tokens';

export default function NotFound() {
  return (
    <>
      <Nav />
      <section style={{ padding: '120px 0', textAlign: 'center', minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className="rb-container">
          <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: 11, fontWeight: 500, letterSpacing: '2.5px', textTransform: 'uppercase', color: TOKENS.teal, marginBottom: 16 }}>// 404</div>
          <h1 style={{ fontWeight: 900, fontSize: 'clamp(36px,5vw,56px)', color: TOKENS.navy, letterSpacing: '-0.025em', marginBottom: 16 }}>Page Not Found</h1>
          <p style={{ fontSize: 17, color: TOKENS.body, fontWeight: 300, maxWidth: 480, margin: '0 auto 36px', lineHeight: 1.65 }}>
            This page doesn&apos;t exist. Try our services page or get in touch directly.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <MagneticButton href="/services" variant="primary">Browse Services →</MagneticButton>
            <MagneticButton href="/contact" variant="ghost">Contact Us</MagneticButton>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
