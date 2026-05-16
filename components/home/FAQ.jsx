'use client';
import { useState } from 'react';
import Tag from '../ui/Tag';
import { TOKENS } from '../../lib/tokens';
import { HOME_FAQS as FAQS } from '../../lib/faq-data';

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
