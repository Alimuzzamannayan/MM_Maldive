// ============================================================================
// Metamorphosis MV — React App entry
// ============================================================================
const { useEffect } = React;

function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => document.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={`rb-nav ${scrolled ? "scrolled" : ""}`}>
      <div className="rb-container rb-nav-inner">
        <a href="#" className="rb-logo-link">
          <img src="assets/logo-full.png" alt="Metamorphosis" />
        </a>
        <ul className="rb-nav-links">
          {[
            ["Services", "#services"],
            ["About", "#why"],
            ["Contact", "react/contact.html"],
            ["Blog", "#blog"],
          ].map(([label, href]) => <NavLink key={label} label={label} href={href} />)}
        </ul>
        <MagneticButton href="react/contact.html" variant="primary">
          Get a Quote
        </MagneticButton>
      </div>
    </nav>
  );
}

// Reactive nav link with cursor-following gradient + color pop
function NavLink({ label, href }) {
  const ref = React.useRef(null);
  const [pos, setPos] = React.useState({ x: 50, y: 50, on: false });
  const ctx = React.useContext(AppContext);
  const setHovering = (ctx && ctx.setHovering) || (() => {});
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    setPos({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100, on: true });
  };
  return (
    <li>
      <a
        ref={ref}
        href={href}
        className="rb-nav-link"
        onMouseMove={onMove}
        onMouseEnter={() => { setPos((p) => ({ ...p, on: true })); setHovering(true); }}
        onMouseLeave={() => { setPos((p) => ({ ...p, on: false })); setHovering(false); }}
        style={{
          "--mx": `${pos.x}%`,
          "--my": `${pos.y}%`,
          "--on": pos.on ? 1 : 0,
        }}
      >
        <span className="rb-nav-link-text">{label}</span>
      </a>
    </li>
  );
}

// Export for cross-file use
window.NavLink = NavLink;

function Hero() {
  const [waterEnabled, setWaterEnabled] = React.useState(true);

  // Tweaks panel protocol
  React.useEffect(() => {
    const handler = (e) => {
      const d = e.data || {};
      if (d.type === '__activate_edit_mode') setTweaksOpen(true);
      if (d.type === '__deactivate_edit_mode') setTweaksOpen(false);
    };
    window.addEventListener('message', handler);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', handler);
  }, []);
  const [tweaksOpen, setTweaksOpen] = React.useState(false);

  return (
    <header className="rb-hero">
      <Aurora />
      <img src="assets/logo-mark.png" alt="" className="rb-hero-mark" aria-hidden="true" />
      <div className="rb-container" style={{ position: "relative", textAlign: "center", maxWidth: 980, margin: "0 auto" }}>
        <div style={{ marginBottom: 24, animation: "rbHeroIn .7s cubic-bezier(.2,.7,.2,1) both" }}>
          <LivePill>NOW SERVING MALÉ &amp; ATOLLS</LivePill>
        </div>
        <h1 style={{
          fontFamily: "Montserrat,sans-serif", fontWeight: 900,
          fontSize: "clamp(40px, 6.4vw, 76px)", lineHeight: 1.0,
          letterSpacing: "-0.025em", marginBottom: 28,
          animation: "rbHeroIn .7s cubic-bezier(.2,.7,.2,1) .08s both",
        }}>
          <span style={{
            background: `linear-gradient(90deg, ${TOKENS.teal} 0%, #00bfa0 100%)`,
            WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent",
            display: "block",
          }}>Transforming Businesses.</span>
          <span style={{ display: "block" }}>
            <WaterText enabled={waterEnabled}>Empowering Maldives.</WaterText>
          </span>
        </h1>
        <p style={{
          fontWeight: 300, fontSize: 19, color: TOKENS.body,
          maxWidth: 680, margin: "0 auto 40px", lineHeight: 1.55,
          animation: "rbHeroIn .7s cubic-bezier(.2,.7,.2,1) .18s both",
        }}>
          From accounting to app development, we bring 17+ professional services under one roof — built for Maldivian businesses, expats, and the island economy that supports them.
        </p>
        <div style={{
          display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 80,
          animation: "rbHeroIn .7s cubic-bezier(.2,.7,.2,1) .28s both",
        }}>
          <MagneticButton href="#services" variant="primary">Explore Services →</MagneticButton>
          <MagneticButton href="react/contact.html" variant="ghost">Schedule a Call</MagneticButton>
        </div>

        <div className="rb-stats" style={{ animation: "rbHeroIn .7s cubic-bezier(.2,.7,.2,1) .4s both" }}>
          {[
            [40, "Dedicated Developers", "+"],
            [100, "Clients", "+"],
            [10, "Years Experience", "+"],
          ].map(([num, label, suffix]) => (
            <div key={label} className="rb-stat">
              <div className="rb-stat-num"><CountUp to={num} /><span style={{ color: TOKENS.teal }}>{suffix}</span></div>
              <div className="rb-stat-label">{label}</div>
            </div>
          ))}
        </div>

        <PartnerBadges />
      </div>

      {/* Tweaks Panel */}
      {tweaksOpen && (
        <div style={{
          position: "fixed", right: 24, bottom: 24, width: 300,
          background: "#fff", borderRadius: 14,
          boxShadow: "0 24px 60px rgba(6,16,43,0.22), 0 0 0 1px rgba(6,16,43,0.06)",
          fontFamily: "Open Sans, sans-serif", color: TOKENS.navy,
          zIndex: 200, overflow: "hidden",
        }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", padding: "16px 18px 12px", borderBottom: "1px solid rgba(6,16,43,0.08)" }}>
            <div>
              <div style={{ fontFamily: "Montserrat,sans-serif", fontWeight: 900, fontSize: 13, letterSpacing: "0.06em", textTransform: "uppercase" }}>Tweaks</div>
              <div style={{ fontSize: 11.5, color: "#6b7280", fontWeight: 300, marginTop: 3 }}>Hero text effects</div>
            </div>
            <button onClick={() => { setTweaksOpen(false); window.parent.postMessage({ type: '__edit_mode_dismissed' }, '*'); }}
              style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(6,16,43,0.06)", color: TOKENS.navy, fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", border: "none" }}>×</button>
          </div>
          <div style={{ padding: "14px 18px 18px" }}>
            <div style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: TOKENS.blue, marginBottom: 12 }}>// "Empowering Maldives."</div>
            <label style={{ display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer", padding: "10px 14px", borderRadius: 10, background: waterEnabled ? "rgba(0,229,192,0.08)" : "rgba(6,16,43,0.03)", border: `1px solid ${waterEnabled ? "rgba(0,229,192,0.35)" : "rgba(6,16,43,0.08)"}`, transition: "all .2s ease" }}>
              <div>
                <div style={{ fontWeight: 600, fontSize: 13.5 }}>🌊 Water Ripple</div>
                <div style={{ fontSize: 11.5, color: "#6b7280", fontWeight: 300, marginTop: 2 }}>Animated ocean gradient on text</div>
              </div>
              <div onClick={() => { const next = !waterEnabled; setWaterEnabled(next); window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { waterRipple: next } }, '*'); }}
                style={{ width: 40, height: 22, borderRadius: 99, background: waterEnabled ? TOKENS.teal : "rgba(6,16,43,0.15)", position: "relative", cursor: "pointer", transition: "background .25s ease", flexShrink: 0 }}>
                <div style={{ position: "absolute", top: 3, left: waterEnabled ? 20 : 3, width: 16, height: 16, borderRadius: "50%", background: "#fff", transition: "left .25s ease", boxShadow: "0 1px 4px rgba(0,0,0,0.2)" }} />
              </div>
            </label>
            <div style={{ marginTop: 12, padding: "10px 14px", borderRadius: 10, background: "rgba(6,16,43,0.03)", border: "1px solid rgba(6,16,43,0.08)" }}>
              <div style={{ fontWeight: 600, fontSize: 12, marginBottom: 6 }}>🎨 Effect Preview</div>
              <div style={{ fontSize: 12, color: "#6b7280", fontWeight: 300, lineHeight: 1.5 }}>
                {waterEnabled ? "Deep ocean blues shift with animated teal glints and ripple waves — live canvas render." : "Plain navy text — toggle Water Ripple to activate."}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function Services() {
  return (
    <section className="rb-band rb-services" id="services">
      <div className="rb-container">
        <Reveal className="rb-section-head">
          <Tag center>What We Do</Tag>
          <h2>Everything Your Business <span style={{ color: TOKENS.teal }}>Needs</span></h2>
          <p>Browse our service catalog by category — every offering engineered for the realities of doing business in the Maldives.</p>
        </Reveal>
        <Reveal>
          <ServiceExplorer />
        </Reveal>
      </div>
    </section>
  );
}

function OdooStrip() {
  return (
    <section className="rb-odoo-strip">
      <div className="rb-container rb-odoo-inner">
        <div className="rb-odoo-left">
          <img src="assets/odoo-silver-partner.png" alt="Odoo Silver Partner" />
        </div>
        <div className="rb-odoo-mid">
          <div style={{
            fontFamily: "JetBrains Mono,monospace", fontSize: 11, fontWeight: 500,
            letterSpacing: 2, textTransform: "uppercase", color: TOKENS.odooPrimary, marginBottom: 8,
          }}>// Certified Partnership</div>
          <h3>Odoo Silver Partner Company.</h3>
          <p>Implementation, customization and ongoing support for Odoo ERP — accounting, inventory, HR, CRM and more, delivered by certified specialists.</p>
        </div>
        <div>
          <MagneticButton href="react/contact.html" variant="odoo">Talk to an Odoo Specialist →</MagneticButton>
        </div>
      </div>
    </section>
  );
}

function Why() {
  const items = [
    ["// 01", "Maldives-Based Team", "Headquartered in Malé with relationships across atolls, ministries and the resort industry. Local fluency, every step."],
    ["// 02", "MIRA Compliant Accounting", "Tax-ready bookkeeping aligned with MIRA requirements — GST, income tax and statutory filings handled for you."],
    ["// 03", "End-to-End Solutions", "From company registration to a deployed app — one accountable partner instead of stitching together five vendors."],
  ];
  return (
    <section className="rb-band rb-why" id="why">
      <div className="rb-container" style={{ position: "relative", zIndex: 1 }}>
        <Reveal className="rb-section-head">
          <Tag color={TOKENS.teal} center>Why Metamorphosis MV</Tag>
          <h2>Built for Maldives. <span style={{ color: TOKENS.teal }}>Engineered for Scale.</span></h2>
          <p>We combine global standards with on-the-ground knowledge — so you get a partner that understands both worlds.</p>
        </Reveal>
        <div className="rb-why-grid">
          {items.map(([n, t, d], i) => (
            <Reveal key={t} delay={i * 0.08}>
              <div className="rb-why-col">
                <div style={{ fontFamily: "JetBrains Mono,monospace", color: TOKENS.teal, fontSize: 12, letterSpacing: "0.18em", marginBottom: 22 }}>{n}</div>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="rb-cta" id="contact">
      <div className="rb-container" style={{ position: "relative", zIndex: 1 }}>
        <Reveal><Tag color={TOKENS.teal} center>Get In Touch</Tag></Reveal>
        <Reveal delay={0.06}><h2 className="rb-cta-h2">Ready to Transform Your Business?</h2></Reveal>
        <Reveal delay={0.12}><p className="rb-cta-p">Tell us about your project — discovery calls are free, confidential and never templated. We'll come back with a clear scope and a realistic timeline within 48 hours.</p></Reveal>
        <Reveal delay={0.18}>
          <MagneticButton href="react/contact.html" variant="teal">Contact Us Today →</MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="rb-footer">
      <div className="rb-container">
        <div className="rb-footer-grid">
          <div>
            <img src="assets/logo-full-light.png" alt="Metamorphosis" style={{ height: 38, width: "auto", marginBottom: 22 }} />
            <p style={{ fontSize: 14, lineHeight: 1.65, fontWeight: 300, maxWidth: 280, color: "rgba(255,255,255,0.6)" }}>
              A Maldives-based multi-service company helping local businesses and expats thrive — from accounting to apps, all under one roof.
            </p>
          </div>
          {[
            ["Services", ["Business Consulting", "App Development", "Accounting & MIRA", "Expat Services", "All Services"]],
            ["Company", ["About Us", "Case Studies", "Blog", "Careers"]],
            ["Legal", ["Privacy Policy", "Terms of Service", "Cookies", "MIRA Disclosure"]],
            ["Contact", ["Malé, Maldives", "hello@metamorphosis.mv", "+960 300 0000", "Get a Quote"]],
          ].map(([h, items]) => (
            <div key={h} className="rb-foot-col">
              <h4>{h}</h4>
              <ul>{items.map((x) => <li key={x}><a href="#">{x}</a></li>)}</ul>
            </div>
          ))}
        </div>
        <div className="rb-foot-bottom">
          <div>© 2026 Metamorphosis MV. All rights reserved.</div>
          <div>Built with React.</div>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <AppProvider>
      <CursorHalo />
      <Nav />
      <Hero />
      <Services />
      <OdooStrip />
      <Why />
      <CTA />
      <Footer />
    </AppProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
