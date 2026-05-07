'use client';
import { useEffect, useRef, useState } from 'react';

export default function Reveal({ children, delay = 0, as: AsTag = 'div', style, className }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    if (r.top < window.innerHeight) { setVisible(true); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { setVisible(true); io.disconnect(); } });
    }, { threshold: 0.12 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <AsTag
      ref={ref}
      className={className}
      style={{
        ...style,
        animation: visible ? `revealUp .7s cubic-bezier(.2,.7,.2,1) ${delay}s both` : 'none',
      }}
    >
      {children}
    </AsTag>
  );
}
