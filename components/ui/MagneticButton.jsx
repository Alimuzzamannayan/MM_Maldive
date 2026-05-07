'use client';
import { useRef, useState } from 'react';
import { useApp } from '../providers/AppProvider';
import { TOKENS } from '../../lib/tokens';

const VARIANTS = {
  primary: { background: TOKENS.navy, color: TOKENS.teal },
  teal:    { background: TOKENS.teal, color: TOKENS.navy },
  ghost:   { background: 'transparent', color: TOKENS.navy, border: '1.5px solid rgba(6,16,43,0.18)' },
  odoo:    { background: TOKENS.odooPrimary, color: '#fff' },
};

export default function MagneticButton({ children, variant = 'primary', href = '#', onClick }) {
  const ref = useRef(null);
  const [t, setT] = useState({ x: 0, y: 0 });
  const { setHovering } = useApp();

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    setT({ x: (e.clientX - (r.left + r.width / 2)) * 0.18, y: (e.clientY - (r.top + r.height / 2)) * 0.32 });
  };
  const reset = () => { setT({ x: 0, y: 0 }); setHovering(false); };

  return (
    <a
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={onMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={reset}
      style={{
        ...VARIANTS[variant],
        display: 'inline-flex', alignItems: 'center', gap: 8,
        padding: '14px 30px', borderRadius: 50,
        fontFamily: 'Open Sans, sans-serif', fontWeight: 600, fontSize: 14.5,
        textDecoration: 'none',
        transform: `translate(${t.x}px, ${t.y}px)`,
        transition: 'transform .15s ease, box-shadow .25s ease, background .25s ease',
        willChange: 'transform',
        boxShadow: t.x || t.y ? '0 14px 32px rgba(6,16,43,0.20)' : 'none',
        cursor: 'pointer',
      }}
    >
      {children}
    </a>
  );
}
