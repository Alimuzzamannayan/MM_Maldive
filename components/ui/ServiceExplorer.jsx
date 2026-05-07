'use client';
import { useEffect, useState } from 'react';
import { TOKENS, SERVICES } from '../../lib/tokens';

function useIsMobile(breakpoint = 768) {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const check = () => setMobile(window.innerWidth <= breakpoint);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, [breakpoint]);
  return mobile;
}

export default function ServiceExplorer() {
  const [activeCat, setActiveCat] = useState(0);
  const [hoverIdx, setHoverIdx] = useState(null);
  const isMobile = useIsMobile();
  const cat = SERVICES[activeCat];

  if (isMobile) {
    return (
      <div>
        <div style={{ display: 'flex', gap: 10, overflowX: 'auto', paddingBottom: 12, scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch', marginBottom: 20 }}>
          {SERVICES.map((s, i) => {
            const active = i === activeCat;
            return (
              <button key={s.cat} onClick={() => setActiveCat(i)} style={{
                flexShrink: 0, padding: '10px 16px', borderRadius: 99,
                background: active ? TOKENS.navy : 'rgba(255,255,255,0.9)',
                color: active ? TOKENS.teal : TOKENS.navy,
                border: `1.5px solid ${active ? TOKENS.navy : 'rgba(6,16,43,0.12)'}`,
                cursor: 'pointer', fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: 13,
                whiteSpace: 'nowrap', transition: 'all .2s ease',
              }}>{s.cat}</button>
            );
          })}
        </div>
        <div style={{ background: '#fff', borderRadius: 14, boxShadow: '0 4px 24px rgba(0,0,0,0.06)', border: '1px solid rgba(6,16,43,0.04)', padding: '20px 16px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${TOKENS.teal}, ${TOKENS.blue})` }} />
          <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: 10, color: TOKENS.blue, letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 500, marginBottom: 4 }}>// {cat.cat}</div>
          <h3 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 18, color: TOKENS.navy, marginBottom: 16, letterSpacing: '-0.02em' }}>
            {cat.items.length} service{cat.items.length > 1 ? 's' : ''} in this category
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {cat.items.map(([name, desc]) => (
              <div key={name} style={{ padding: '14px 16px', borderRadius: 10, background: TOKENS.mint, border: '1px solid rgba(0,229,192,0.2)' }}>
                <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: 14, color: TOKENS.navy, marginBottom: 4 }}>{name}</div>
                <div style={{ fontSize: 13, color: TOKENS.body, fontWeight: 300, lineHeight: 1.55 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: 32, alignItems: 'stretch' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {SERVICES.map((s, i) => {
          const active = i === activeCat;
          return (
            <button key={s.cat} onClick={() => setActiveCat(i)} style={{
              textAlign: 'left', padding: '16px 18px', borderRadius: 12,
              background: active ? TOKENS.navy : 'rgba(255,255,255,0.7)',
              color: active ? '#fff' : TOKENS.navy,
              border: `1px solid ${active ? TOKENS.navy : 'rgba(6,16,43,0.08)'}`,
              cursor: 'pointer', transition: 'all .25s cubic-bezier(.2,.7,.2,1)',
              fontFamily: 'inherit', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            }}>
              <span style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: 14, letterSpacing: '-0.01em' }}>{s.cat}</span>
              <span style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: 10.5, color: active ? TOKENS.teal : TOKENS.blue, letterSpacing: '1.5px', fontWeight: 500 }}>// 0{s.count}</span>
            </button>
          );
        })}
      </div>
      <div style={{ background: '#fff', borderRadius: 14, boxShadow: '0 4px 24px rgba(0,0,0,0.06)', border: '1px solid rgba(6,16,43,0.04)', padding: 28, position: 'relative', overflow: 'hidden', minHeight: 360 }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${TOKENS.teal}, ${TOKENS.blue})` }} />
        <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: 11, color: TOKENS.blue, letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 500, marginBottom: 6 }}>// {cat.cat}</div>
        <h3 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 24, color: TOKENS.navy, marginBottom: 20, letterSpacing: '-0.02em' }}>
          {cat.items.length} service{cat.items.length > 1 ? 's' : ''} in this category
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 12 }}>
          {cat.items.map(([name, desc], i) => {
            const active = hoverIdx === i;
            return (
              <div key={name} onMouseEnter={() => setHoverIdx(i)} onMouseLeave={() => setHoverIdx(null)} style={{
                padding: '14px 16px', borderRadius: 10,
                background: active ? TOKENS.mint : 'transparent',
                border: `1px solid ${active ? 'rgba(0,229,192,0.4)' : 'rgba(6,16,43,0.06)'}`,
                transition: 'all .2s ease', cursor: 'pointer',
              }}>
                <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: 14, color: TOKENS.navy, marginBottom: 4 }}>{name}</div>
                <div style={{ fontSize: 12.5, color: TOKENS.body, fontWeight: 300, lineHeight: 1.5 }}>{desc}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* SEO: all services rendered in DOM, invisible to users */}
      <div style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap' }} aria-hidden="true">
        {SERVICES.map((s) => s.items.map(([name, desc]) => (
          <div key={name}><h3>{name}</h3><p>{desc}</p></div>
        )))}
      </div>
    </div>
  );
}
