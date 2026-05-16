'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { TOKENS } from '../../lib/tokens';
import { fireLeadEvent } from '../layout/TrackingScripts';

const SERVICES = ['Odoo ERP Implementation', 'Accounting & MIRA Filing', 'Business Consulting', 'App Development', 'Expat & Visa Services', 'Company Registration', 'Other'];

function MiniForm({ source, redirectTo = '/thank-you' }) {
  const router = useRouter();
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, company: source }),
      });
      if (!res.ok) throw new Error();
      fireLeadEvent({ content_name: form.service || source });
      router.push(redirectTo);
    } catch {
      setError('Failed to send. Email us: marketing@metamorphosis.com.bd');
      setSending(false);
    }
  };

  return (
    <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <input required value={form.name} onChange={set('name')} placeholder="Your full name *" style={inputStyle} />
      <input required type="email" value={form.email} onChange={set('email')} placeholder="Work email *" style={inputStyle} />
      <input value={form.phone} onChange={set('phone')} placeholder="Phone / WhatsApp" style={inputStyle} />
      <select value={form.service} onChange={set('service')} style={inputStyle}>
        <option value="">Select service of interest…</option>
        {SERVICES.map((s) => <option key={s}>{s}</option>)}
      </select>
      <textarea value={form.message} onChange={set('message')} placeholder="Brief project description…" rows={3} style={{ ...inputStyle, resize: 'vertical' }} />
      <button type="submit" disabled={sending} style={{ padding: '15px', background: TOKENS.teal, color: TOKENS.navy, fontWeight: 800, fontSize: 15, borderRadius: 10, border: 'none', cursor: sending ? 'not-allowed' : 'pointer', opacity: sending ? 0.7 : 1, letterSpacing: '-0.01em' }}>
        {sending ? 'Sending…' : 'Get a Free Consultation →'}
      </button>
      {error && <p style={{ color: '#e53e3e', fontSize: 12, textAlign: 'center', margin: 0 }}>{error}</p>}
      <p style={{ fontSize: 11, color: 'rgba(6,16,43,0.45)', textAlign: 'center', margin: 0 }}>No spam. Reply within 1 business day.</p>
    </form>
  );
}

const inputStyle = { padding: '12px 14px', borderRadius: 8, border: '1.5px solid rgba(6,16,43,0.12)', fontSize: 14, fontFamily: 'inherit', outline: 'none', background: '#fff', color: '#06102B', width: '100%', boxSizing: 'border-box' };

export default function AdLandingLayout({ tag, headline, subheadline, bullets, source, badge, urgency }) {
  return (
    <div style={{ minHeight: '100vh', background: '#fff', fontFamily: 'Open Sans, sans-serif' }}>
      {/* Minimal header — logo only, no nav links */}
      <header style={{ padding: '16px 24px', borderBottom: '1px solid rgba(6,16,43,0.06)', background: '#fff', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 1060, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/"><img src="/assets/logo-full.png" alt="Metamorphosis MV" height={32} style={{ height: 32, width: 'auto' }} /></a>
          <a href="https://wa.me/9607417734" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 16px', background: '#25D366', color: '#fff', fontWeight: 700, fontSize: 13, borderRadius: 8, textDecoration: 'none' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
            WhatsApp Us
          </a>
        </div>
      </header>

      {/* Urgency bar */}
      {urgency && (
        <div style={{ background: TOKENS.navy, color: TOKENS.teal, fontSize: 13, fontWeight: 600, textAlign: 'center', padding: '10px 16px', letterSpacing: '0.3px' }}>
          {urgency}
        </div>
      )}

      {/* Hero + Form */}
      <section style={{ padding: '56px 24px 64px', background: 'linear-gradient(160deg, #06102B 0%, #0d2d5e 100%)', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: -80, right: -80, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,229,192,0.12), transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1060, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 400px', gap: 48, alignItems: 'center', position: 'relative' }}>
          <div>
            {tag && <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: 11, fontWeight: 500, letterSpacing: '2.5px', textTransform: 'uppercase', color: TOKENS.teal, marginBottom: 16 }}>{tag}</div>}
            <h1 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 'clamp(30px,4vw,50px)', color: '#fff', letterSpacing: '-0.025em', lineHeight: 1.1, marginBottom: 16 }}>{headline}</h1>
            {subheadline && <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.7)', fontWeight: 300, lineHeight: 1.7, marginBottom: 28, maxWidth: 520 }}>{subheadline}</p>}
            {bullets && (
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {bullets.map((b) => (
                  <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, color: 'rgba(255,255,255,0.85)', fontSize: 15, fontWeight: 300 }}>
                    <span style={{ color: TOKENS.teal, flexShrink: 0, marginTop: 2 }}>✓</span>{b}
                  </li>
                ))}
              </ul>
            )}
            {badge && (
              <div style={{ marginTop: 28, display: 'inline-flex', alignItems: 'center', gap: 10, padding: '10px 16px', background: 'rgba(255,255,255,0.08)', borderRadius: 10, border: '1px solid rgba(255,255,255,0.15)' }}>
                <img src="/assets/odoo-silver-partner.png" alt="Odoo Silver Partner" style={{ height: 28, width: 'auto' }} />
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>Odoo Silver Partner · Malé, Maldives</span>
              </div>
            )}
          </div>

          {/* Form card */}
          <div style={{ background: '#fff', borderRadius: 20, padding: '32px 28px', boxShadow: '0 24px 64px rgba(0,0,0,0.3)' }}>
            <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: 10, fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase', color: TOKENS.teal, marginBottom: 8 }}>// Free Consultation</div>
            <h2 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 18, color: TOKENS.navy, marginBottom: 4 }}>Get a Quote Today</h2>
            <p style={{ fontSize: 13, color: TOKENS.body, fontWeight: 300, marginBottom: 20 }}>Reply within 1 business day. No commitment.</p>
            <MiniForm source={source} />
          </div>
        </div>
      </section>

      {/* Social proof strip */}
      <section style={{ padding: '40px 24px', background: '#fafafa', borderBottom: '1px solid rgba(6,16,43,0.06)' }}>
        <div style={{ maxWidth: 1060, margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
            {[['60+', 'Enterprise Clients'], ['10+', 'Years Experience'], ['8', 'Certified Consultants'], ['< 1 Day', 'Response Time']].map(([val, label]) => (
              <div key={label} style={{ textAlign: 'center', minWidth: 100 }}>
                <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 28, color: TOKENS.teal, lineHeight: 1 }}>{val}</div>
                <div style={{ fontSize: 12, color: TOKENS.body, fontWeight: 300, marginTop: 4 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust + testimonial */}
      <section style={{ padding: '56px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            <div style={{ padding: '28px', background: '#f8fffe', borderRadius: 16, border: '1px solid rgba(0,229,192,0.2)' }}>
              <div style={{ fontSize: 32, color: TOKENS.teal, lineHeight: 1, marginBottom: 12 }}>"</div>
              <p style={{ fontSize: 15, color: TOKENS.body, fontWeight: 300, lineHeight: 1.75, marginBottom: 16, fontStyle: 'italic' }}>
                Our experience with Odoo is excellent. It gave us accuracy, adaptability, and accessibility. I would definitely recommend Metamorphosis to any organisation looking to become more agile.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <img src="/assets/dipesh-nag.webp" alt="Dipesh Nag" width={40} height={40} style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover' }} />
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: TOKENS.navy }}>Dipesh Nag</div>
                  <div style={{ fontSize: 11, color: TOKENS.body, fontWeight: 300 }}>MD, Grameen Danone Foods</div>
                </div>
              </div>
            </div>
            <div style={{ padding: '28px', background: '#f8fffe', borderRadius: 16, border: '1px solid rgba(0,229,192,0.2)' }}>
              <div style={{ fontSize: 32, color: TOKENS.teal, lineHeight: 1, marginBottom: 12 }}>"</div>
              <p style={{ fontSize: 15, color: TOKENS.body, fontWeight: 300, lineHeight: 1.75, marginBottom: 16, fontStyle: 'italic' }}>
                Before Odoo, every month-end was a scramble. Now our GST return is generated in a click and our management accounts are always current.
              </p>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: TOKENS.navy }}>Operations Manager</div>
                <div style={{ fontSize: 11, color: TOKENS.body, fontWeight: 300 }}>Resort client, Malé Atoll</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Minimal footer */}
      <footer style={{ padding: '24px', background: TOKENS.navy, textAlign: 'center' }}>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, margin: 0 }}>
          © 2026 Metamorphosis MV · Malé, Maldives · <a href="mailto:marketing@metamorphosis.com.bd" style={{ color: TOKENS.teal, textDecoration: 'none' }}>marketing@metamorphosis.com.bd</a> · <a href="/privacy-policy" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Privacy Policy</a>
        </p>
      </footer>
    </div>
  );
}
