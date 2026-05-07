import Reveal from '../ui/Reveal';
import Tag from '../ui/Tag';
import { TOKENS } from '../../lib/tokens';

const ITEMS = [
  ['// 01', 'Maldives-Based Team', 'Headquartered in Malé with relationships across atolls, ministries and the resort industry. Local fluency, every step.'],
  ['// 02', 'MIRA Compliant Accounting', 'Tax-ready bookkeeping aligned with MIRA requirements — GST, income tax and statutory filings handled for you.'],
  ['// 03', 'End-to-End Solutions', 'From company registration to a deployed app — one accountable partner instead of stitching together five vendors.'],
];

export default function Why() {
  return (
    <section className="rb-band rb-why" id="why">
      <div className="rb-container" style={{ position: 'relative', zIndex: 1 }}>
        <Reveal className="rb-section-head">
          <Tag color={TOKENS.teal} center>Why Metamorphosis MV</Tag>
          <h2>Built for Maldives. <span style={{ color: TOKENS.teal }}>Engineered for Scale.</span></h2>
          <p>We combine global standards with on-the-ground knowledge — so you get a partner that understands both worlds.</p>
        </Reveal>
        <div className="rb-why-grid">
          {ITEMS.map(([n, t, d], i) => (
            <Reveal key={t} delay={i * 0.08}>
              <div className="rb-why-col">
                <div style={{ fontFamily: 'JetBrains Mono,monospace', color: TOKENS.teal, fontSize: 12, letterSpacing: '0.18em', marginBottom: 22 }}>{n}</div>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
