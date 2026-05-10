import MagneticButton from '../ui/MagneticButton';
import { TOKENS } from '../../lib/tokens';

const SIGNS = [
  'Your ERP went live but half the features don\'t work',
  'Your implementation partner stopped responding',
  'Data is missing, duplicated, or incorrectly migrated',
  'Staff refuse to use the system — no proper training was done',
  'You\'re paying support fees but getting no support',
  'The system was customized but nobody documented what was changed',
];

export default function ERPRescue() {
  return (
    <section style={{ padding: '96px 0', background: TOKENS.navy, position: 'relative', overflow: 'hidden' }}>
      {/* Background glow */}
      <div aria-hidden="true" style={{ position: 'absolute', top: -100, right: -100, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(239,68,68,0.12), transparent 65%)', pointerEvents: 'none' }} />
      <div aria-hidden="true" style={{ position: 'absolute', bottom: -100, left: -100, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,229,192,0.08), transparent 65%)', pointerEvents: 'none' }} />

      <div className="rb-container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>

          {/* Left */}
          <div>
            <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: 11, fontWeight: 500, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#ef4444', marginBottom: 16 }}>// ERP Rescue</div>
            <h2 style={{ fontWeight: 900, fontSize: 'clamp(32px,4vw,48px)', color: '#fff', letterSpacing: '-0.025em', lineHeight: 1.1, marginBottom: 20 }}>
              Bad Implementation?<br />
              <span style={{ color: TOKENS.teal }}>We Fix It.</span>
            </h2>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.72)', fontWeight: 300, lineHeight: 1.7, marginBottom: 32, maxWidth: 460 }}>
              Not every ERP project goes to plan. If your Odoo implementation was rushed, abandoned, or delivered poorly — we step in, audit what was done, and get your system working the way it should.
            </p>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', fontWeight: 300, marginBottom: 32 }}>
              No blame. No judgment. Just a clear plan to fix the problem.
            </p>
            <MagneticButton href="/contact" variant="teal">Rescue My ERP →</MagneticButton>
          </div>

          {/* Right — warning signs */}
          <div>
            <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: 11, fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 20 }}>
              Signs you need an ERP rescue:
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {SIGNS.map((sign, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 14, padding: '14px 18px', borderRadius: 10, background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.18)' }}>
                  <span style={{ flexShrink: 0, width: 20, height: 20, borderRadius: '50%', background: 'rgba(239,68,68,0.25)', color: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, marginTop: 1 }}>!</span>
                  <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.82)', fontWeight: 300, lineHeight: 1.5 }}>{sign}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .erp-rescue-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
