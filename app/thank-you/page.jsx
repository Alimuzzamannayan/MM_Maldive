'use client';
import { useEffect } from 'react';
import Nav from '../../components/layout/Nav';
import Footer from '../../components/layout/Footer';
import { TOKENS } from '../../lib/tokens';

export default function ThankYou() {
  useEffect(() => {
    // Fire conversion events on page load (catches any missed form submissions)
    if (window.dataLayer) window.dataLayer.push({ event: 'thank_you_page_view' });
    if (window.fbq) window.fbq('track', 'Lead');
    if (window.uetq) window.uetq.push('event', 'submit_lead_form', {});
    // Google Ads conversion (configure tag ID in GTM)
    if (window.gtag) window.gtag('event', 'conversion', { send_to: process.env.NEXT_PUBLIC_GADS_CONVERSION_LABEL });
  }, []);

  return (
    <>
      <Nav />
      <section style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(160deg, #f8fffe 0%, #fff 100%)', padding: '80px 24px' }}>
        <div style={{ textAlign: 'center', maxWidth: 600 }}>
          <div style={{ width: 72, height: 72, borderRadius: '50%', background: `${TOKENS.teal}18`, border: `2px solid ${TOKENS.teal}`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 28px' }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={TOKENS.teal} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: 11, fontWeight: 500, letterSpacing: '2.5px', textTransform: 'uppercase', color: TOKENS.teal, marginBottom: 16 }}>// Message Received</div>
          <h1 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 'clamp(30px,4vw,44px)', color: TOKENS.navy, letterSpacing: '-0.025em', marginBottom: 16, lineHeight: 1.1 }}>
            Thanks — we'll be in touch.
          </h1>
          <p style={{ fontSize: 17, color: TOKENS.body, fontWeight: 300, lineHeight: 1.7, marginBottom: 36 }}>
            A specialist will reply within one business day. In the meantime, feel free to reach us directly on WhatsApp or Viber.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://wa.me/9607417734" target="_blank" rel="noopener noreferrer" style={{ padding: '13px 24px', background: '#25D366', color: '#fff', fontWeight: 700, fontSize: 14, borderRadius: 10, textDecoration: 'none' }}>
              WhatsApp Now →
            </a>
            <a href="/" style={{ padding: '13px 24px', background: TOKENS.navy, color: '#fff', fontWeight: 600, fontSize: 14, borderRadius: 10, textDecoration: 'none' }}>
              Back to Home
            </a>
          </div>

          {/* Trust signals */}
          <div style={{ marginTop: 56, paddingTop: 32, borderTop: '1px solid rgba(6,16,43,0.08)', display: 'flex', gap: 32, justifyContent: 'center', flexWrap: 'wrap' }}>
            {[['< 1 Business Day', 'Response time'], ['10+ Years', 'Experience'], ['60+ Clients', 'Globally served']].map(([val, label]) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 20, color: TOKENS.teal }}>{val}</div>
                <div style={{ fontSize: 12, color: TOKENS.body, fontWeight: 300 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
