'use client';
import { useEffect, useRef, useState } from 'react';

export default function CountUp({ to, duration = 1400 }) {
  const [n, setN] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    let raf;
    let started = false;
    const tick = (ts, start) => {
      const t = Math.min(1, (ts - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setN(Math.round(to * eased));
      if (t < 1) raf = requestAnimationFrame((tt) => tick(tt, start));
    };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started) {
          started = true;
          raf = requestAnimationFrame((ts) => tick(ts, ts));
          io.disconnect();
        }
      });
    }, { threshold: 0.4 });
    if (ref.current) io.observe(ref.current);
    setTimeout(() => {
      if (ref.current && !started) {
        const r = ref.current.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) {
          started = true;
          raf = requestAnimationFrame((ts) => tick(ts, ts));
        }
      }
    }, 50);
    return () => { cancelAnimationFrame(raf); io.disconnect(); };
  }, [to, duration]);

  return <span ref={ref}>{n}</span>;
}
