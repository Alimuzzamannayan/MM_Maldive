'use client';
import { useEffect, useState } from 'react';
import MagneticButton from '../ui/MagneticButton';
import { useApp } from '../providers/AppProvider';

function NavLink({ label, href }) {
  const [pos, setPos] = useState({ x: 50, y: 50, on: false });
  const { setHovering } = useApp();

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    setPos({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100, on: true });
  };

  return (
    <li>
      <a
        href={href}
        className="rb-nav-link"
        onMouseMove={onMove}
        onMouseEnter={() => { setPos((p) => ({ ...p, on: true })); setHovering(true); }}
        onMouseLeave={() => { setPos((p) => ({ ...p, on: false })); setHovering(false); }}
        style={{ '--mx': `${pos.x}%`, '--my': `${pos.y}%`, '--on': pos.on ? 1 : 0 }}
      >
        <span className="rb-nav-link-text">{label}</span>
      </a>
    </li>
  );
}

const NAV_LINKS = [
  ['Services', '/services'],
  ['About', '/about'],
  ['Contact', '/contact'],
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    document.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => document.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      <nav className={`rb-nav ${scrolled ? 'scrolled' : ''}`} style={{ position: 'sticky', top: 0, zIndex: 150 }}>
        <div className="rb-container rb-nav-inner">
          <a href="/" className="rb-logo-link" onClick={close}>
            <img src="/assets/logo-full.png" alt="Metamorphosis" width={180} height={36} style={{ height: 36, width: 'auto' }} />
          </a>
          <ul className="rb-nav-links">
            {NAV_LINKS.map(([label, href]) => <NavLink key={label} label={label} href={href} />)}
          </ul>
          <MagneticButton href="/contact" variant="primary">Get a Quote</MagneticButton>
          <button
            className={`rb-hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>
      <div className={`rb-mobile-menu ${menuOpen ? 'open' : ''}`}>
        {NAV_LINKS.map(([label, href]) => (
          <a key={label} href={href} onClick={close}>{label}</a>
        ))}
        <a href="/contact" className="rb-mobile-cta" onClick={close}>Get a Quote →</a>
      </div>
    </>
  );
}
