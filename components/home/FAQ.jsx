'use client';
import { useState } from 'react';
import Tag from '../ui/Tag';
import { TOKENS } from '../../lib/tokens';

const FAQS = [
  {
    q: 'Are you MIRA-compliant? Do you handle GST and income tax filings?',
    a: 'Yes. Our accounting team is fully aligned with MIRA requirements. We handle GST registration, monthly and annual GST returns, income tax filings, and audit-ready bookkeeping for businesses operating in the Maldives — including resort operators, guesthouses, trading companies, and expat-run businesses.',
  },
  {
    q: 'Can you help with work permits (DVR) and expat visa processing?',
    a: 'Yes. We manage the full DVR and work permit process — from initial application and quota verification to renewal and Ministry of Economic Development filings. We also assist with dependent visas, housing support, and banking setup for newly arrived expats.',
  },
  {
    q: 'Are you an official Odoo partner?',
    a: 'Yes. Metamorphosis MV is a certified Odoo Silver Partner, part of the Metamorphosis group — one of the region\'s most experienced Odoo implementation teams. We provide full Odoo implementation, customization, training, and ongoing support for businesses in the Maldives.',
  },
  {
    q: 'How long does an Odoo ERP implementation take?',
    a: 'A standard Odoo implementation for a small-to-medium Maldivian business takes 4–12 weeks depending on scope. A single-module rollout (e.g. accounting only) can go live in 2–3 weeks. We start every project with a free discovery call to define scope and provide a written timeline within 48 hours.',
  },
  {
    q: 'Do you work with resort and guesthouse businesses?',
    a: 'Yes — hospitality is a core vertical. We work with resort operators, guesthouse owners across atolls, and tourism businesses requiring guest house management, procurement, accounting, and government liaison support. Our team has on-the-ground experience with the realities of island-based operations.',
  },
  {
    q: 'How quickly do you respond after I get in touch?',
    a: 'We respond to all inquiries within one business day. For contact form submissions we reply within 24 hours with a written scope and next steps. For WhatsApp and phone inquiries during business hours (Mon–Sat, 9:00–18:00 MVT) we typically respond within 2 hours.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section style={{ padding: '96px 0', background: '#fff' }}>
      <div className="rb-container">
        <div className="rb-section-head" style={{ textAlign: 'center', maxWidth: 780, margin: '0 auto 56px' }}>
          <Tag center>FAQ</Tag>
          <h2 style={{ fontWeight: 900, fontSize: 'clamp(32px,4vw,48px)', margin: '16px 0 16px', letterSpacing: '-0.025em' }}>
            Common Questions
          </h2>
          <p style={{ fontWeight: 300, fontSize: 17, color: TOKENS.body }}>
            Everything you need to know before reaching out.
          </p>
        </div>

        <div style={{ maxWidth: 780, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                style={{
                  borderRadius: 14,
                  border: `1.5px solid ${isOpen ? 'rgba(0,229,192,0.4)' : 'rgba(6,16,43,0.08)'}`,
                  background: isOpen ? 'rgba(0,229,192,0.04)' : '#fff',
                  transition: 'all .25s ease',
                  overflow: 'hidden',
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  style={{
                    width: '100%', textAlign: 'left',
                    padding: '20px 24px',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
                    background: 'none', border: 'none', cursor: 'pointer',
                    fontFamily: 'Montserrat, sans-serif', fontWeight: 700,
                    fontSize: 15.5, color: TOKENS.navy, letterSpacing: '-0.01em',
                    lineHeight: 1.3,
                  }}
                >
                  <span>{faq.q}</span>
                  <span style={{
                    flexShrink: 0, width: 28, height: 28, borderRadius: '50%',
                    background: isOpen ? TOKENS.teal : 'rgba(6,16,43,0.06)',
                    color: isOpen ? TOKENS.navy : TOKENS.body,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 18, fontWeight: 300,
                    transition: 'all .25s ease',
                    transform: isOpen ? 'rotate(45deg)' : 'none',
                  }}>+</span>
                </button>
                {isOpen && (
                  <div style={{
                    padding: '0 24px 22px',
                    fontSize: 15, color: TOKENS.body,
                    fontWeight: 300, lineHeight: 1.7,
                  }}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
