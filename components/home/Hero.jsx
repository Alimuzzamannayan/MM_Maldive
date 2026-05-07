'use client';
import { useState } from 'react';
import Aurora from '../ui/Aurora';
import LivePill from '../ui/LivePill';
import WaterText from '../ui/WaterText';
import MagneticButton from '../ui/MagneticButton';
import CountUp from '../ui/CountUp';
import PartnerBadges from '../ui/PartnerBadges';
import { TOKENS } from '../../lib/tokens';

const STATS = [[40, 'Dedicated Developers', '+'], [100, 'Clients', '+'], [10, 'Years Experience', '+']];

export default function Hero() {
  const [waterEnabled] = useState(true);

  return (
    <header className="rb-hero">
      <Aurora />
      <img src="/assets/logo-mark.png" alt="" className="rb-hero-mark" aria-hidden="true" />
      <div className="rb-container" style={{ position: 'relative', textAlign: 'center', maxWidth: 980, margin: '0 auto' }}>
        <div style={{ marginBottom: 24, animation: 'rbHeroIn .7s cubic-bezier(.2,.7,.2,1) both' }}>
          <LivePill>NOW SERVING MALÉ &amp; ATOLLS</LivePill>
        </div>
        <h1 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 'clamp(40px, 6.4vw, 76px)', lineHeight: 1.0, letterSpacing: '-0.025em', marginBottom: 28, animation: 'rbHeroIn .7s cubic-bezier(.2,.7,.2,1) .08s both' }}>
          <span style={{ background: `linear-gradient(90deg, ${TOKENS.teal} 0%, #00bfa0 100%)`, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', display: 'block' }}>Transforming Businesses.</span>
          <span style={{ display: 'block' }}>
            <WaterText enabled={waterEnabled}>Empowering Maldives.</WaterText>
          </span>
        </h1>
        <p style={{ fontWeight: 300, fontSize: 19, color: TOKENS.body, maxWidth: 680, margin: '0 auto 40px', lineHeight: 1.55, animation: 'rbHeroIn .7s cubic-bezier(.2,.7,.2,1) .18s both' }}>
          From accounting to app development, we bring 17+ professional services under one roof — built for Maldivian businesses, expats, and the island economy that supports them.
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 80, animation: 'rbHeroIn .7s cubic-bezier(.2,.7,.2,1) .28s both' }}>
          <MagneticButton href="#services" variant="primary">Explore Services →</MagneticButton>
          <MagneticButton href="/contact" variant="ghost">Schedule a Call</MagneticButton>
        </div>
        <div className="rb-stats" style={{ animation: 'rbHeroIn .7s cubic-bezier(.2,.7,.2,1) .4s both' }}>
          {STATS.map(([num, label, suffix]) => (
            <div key={label} className="rb-stat">
              <div className="rb-stat-num"><CountUp to={num} /><span style={{ color: TOKENS.teal }}>{suffix}</span></div>
              <div className="rb-stat-label">{label}</div>
            </div>
          ))}
        </div>
        <PartnerBadges />
      </div>
    </header>
  );
}
