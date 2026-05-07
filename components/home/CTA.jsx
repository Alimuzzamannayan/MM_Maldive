import Reveal from '../ui/Reveal';
import Tag from '../ui/Tag';
import MagneticButton from '../ui/MagneticButton';
import { TOKENS } from '../../lib/tokens';

export default function CTA() {
  return (
    <section className="rb-cta" id="contact">
      <div className="rb-container" style={{ position: 'relative', zIndex: 1 }}>
        <Reveal><Tag color={TOKENS.teal} center>Get In Touch</Tag></Reveal>
        <Reveal delay={0.06}><h2 className="rb-cta-h2">Ready to Transform Your Business?</h2></Reveal>
        <Reveal delay={0.12}><p className="rb-cta-p">Tell us about your project — discovery calls are free, confidential and never templated. We&apos;ll come back with a clear scope and a realistic timeline within 48 hours.</p></Reveal>
        <Reveal delay={0.18}>
          <MagneticButton href="/contact" variant="teal">Contact Us Today →</MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}
