'use client';
import { TOKENS } from '../../lib/tokens';

export default function PartnerBadges() {
  return (
    <div style={{ maxWidth: 760, margin: '36px auto 0', textAlign: 'center' }}>
      <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: 11, fontWeight: 500, letterSpacing: '2.5px', textTransform: 'uppercase', color: TOKENS.odooPrimary, marginBottom: 20 }}>// Trusted Partnerships</div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 56, flexWrap: 'wrap' }}>
        <a href="#" style={{ height: 88, display: 'inline-flex', transition: 'transform .25s ease' }}
           onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px) scale(1.04)'}
           onMouseLeave={(e) => e.currentTarget.style.transform = 'none'}>
          <img src="/assets/odoo-silver-partner.png" alt="Odoo Silver Partner" style={{ height: '100%', width: 'auto' }} />
        </a>
        <span style={{ width: 1, height: 56, background: 'linear-gradient(180deg, transparent, rgba(6,16,43,0.18), transparent)' }} />
        <a href="#" style={{ height: 88, display: 'inline-flex', transition: 'transform .25s ease' }}
           onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px) scale(1.04)'}
           onMouseLeave={(e) => e.currentTarget.style.transform = 'none'}>
          <img src="/assets/bop-alliance.png" alt="BOP Alliance" style={{ height: '100%', width: 'auto' }} />
        </a>
      </div>
    </div>
  );
}
