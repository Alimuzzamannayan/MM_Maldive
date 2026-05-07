'use client';
import { useEffect } from 'react';
import { TOKENS } from '../../lib/tokens';

// Replace this with your actual Calendly URL
const CALENDLY_URL = 'https://calendly.com/metamorphosis-mv';

export default function CalendlyEmbed() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  return (
    <section style={{ padding: '80px 0', background: 'var(--mint)' }}>
      <div className="rb-container">
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: 11, fontWeight: 500, letterSpacing: '2.5px', textTransform: 'uppercase', color: TOKENS.blue, marginBottom: 12 }}>// Book Directly</div>
          <h2 style={{ fontWeight: 900, fontSize: 'clamp(28px,3.5vw,40px)', letterSpacing: '-0.025em', marginBottom: 12 }}>
            Schedule a Free Discovery Call
          </h2>
          <p style={{ fontWeight: 300, fontSize: 16, color: TOKENS.body, maxWidth: 520, margin: '0 auto' }}>
            30 minutes. No commitment. Pick a time that works and we&apos;ll come prepared.
          </p>
        </div>
        <div
          className="calendly-inline-widget"
          data-url={`${CALENDLY_URL}?hide_gdpr_banner=1&primary_color=00e5c0`}
          style={{ minWidth: 320, height: 700, borderRadius: 16, overflow: 'hidden' }}
        />
      </div>
    </section>
  );
}
