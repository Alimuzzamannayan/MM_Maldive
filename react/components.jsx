// ============================================================================
// Metamorphosis MV — React Components
// Native React base framework with dynamic, futuristic interactions.
// ============================================================================
const { useState, useEffect, useRef, useMemo, useCallback, createContext, useContext } = React;

// ---------- Design tokens (mirrored from CSS for use in JS) ----------
const TOKENS = {
  navy: "#06102B",
  navy2: "#0d2d5e",
  teal: "#00E5C0",
  blue: "#3B82F6",
  mint: "#E8FDF9",
  body: "#495057",
  odooPrimary: "#714B67",
  odooSecondary: "#017E84",
  odooGray: "#8F8F8F",
};

// ---------- Theme + Cursor Context ----------
const AppContext = createContext(null);

function AppProvider({ children }) {
  const [cursor, setCursor] = useState({ x: -100, y: -100, hovering: false });

  useEffect(() => {
    const onMove = (e) => setCursor((c) => ({ ...c, x: e.clientX, y: e.clientY }));
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const setHovering = useCallback((v) => setCursor((c) => ({ ...c, hovering: v })), []);

  return (
    <AppContext.Provider value={{ cursor, setHovering }}>
      {children}
    </AppContext.Provider>
  );
}

// ---------- Custom hover-aware cursor halo ----------
function CursorHalo() {
  const { cursor } = useContext(AppContext);
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        left: cursor.x,
        top: cursor.y,
        width: cursor.hovering ? 80 : 28,
        height: cursor.hovering ? 80 : 28,
        marginLeft: cursor.hovering ? -40 : -14,
        marginTop: cursor.hovering ? -40 : -14,
        borderRadius: "50%",
        border: `1.5px solid ${TOKENS.teal}`,
        background: cursor.hovering ? "rgba(0,229,192,0.08)" : "transparent",
        pointerEvents: "none",
        zIndex: 200,
        transition: "width .25s ease, height .25s ease, margin .25s ease, background .25s ease",
        mixBlendMode: "difference",
      }}
    />
  );
}

// ---------- Magnetic button (futuristic CTA) ----------
function MagneticButton({ children, variant = "primary", href = "#", onClick }) {
  const ref = useRef(null);
  const [t, setT] = useState({ x: 0, y: 0 });
  const { setHovering } = useContext(AppContext);

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    setT({ x: (e.clientX - cx) * 0.18, y: (e.clientY - cy) * 0.32 });
  };
  const reset = () => { setT({ x: 0, y: 0 }); setHovering(false); };

  const styles = {
    primary: { background: TOKENS.navy, color: TOKENS.teal },
    teal: { background: TOKENS.teal, color: TOKENS.navy },
    ghost: { background: "transparent", color: TOKENS.navy, border: `1.5px solid rgba(6,16,43,0.18)` },
    odoo: { background: TOKENS.odooPrimary, color: "#fff" },
  }[variant];

  return (
    <a
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={onMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={reset}
      style={{
        ...styles,
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "14px 30px",
        borderRadius: 50,
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 600,
        fontSize: 14.5,
        textDecoration: "none",
        transform: `translate(${t.x}px, ${t.y}px)`,
        transition: "transform .15s ease, box-shadow .25s ease, background .25s ease",
        willChange: "transform",
        boxShadow: t.x || t.y ? "0 14px 32px rgba(6,16,43,0.20)" : "none",
        cursor: "pointer",
      }}
    >
      {children}
    </a>
  );
}

// ---------- Animated count-up ----------
function CountUp({ to, duration = 1400 }) {
  const [n, setN] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    let raf, started = false;
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
    // Fallback: if already in view at mount
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

// ---------- Reveal on scroll (CSS-keyframe based; safe for above-fold) ----------
function Reveal({ children, delay = 0, as: Tag = "div", style, className }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    if (r.top < window.innerHeight) { setVisible(true); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { setVisible(true); io.disconnect(); }
      });
    }, { threshold: 0.12 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        ...style,
        animation: visible ? `revealUp .7s cubic-bezier(.2,.7,.2,1) ${delay}s both` : "none",
      }}
    >
      {children}
    </Tag>
  );
}

// ---------- Aurora background (animated blobs) ----------
function Aurora() {
  return (
    <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: -1, overflow: "hidden", pointerEvents: "none" }}>
      <div className="rb-blob rb-blob-1" />
      <div className="rb-blob rb-blob-2" />
      <div className="rb-blob rb-blob-3" />
    </div>
  );
}

// ---------- Live status pill ----------
function LivePill({ children }) {
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: 8,
      padding: "7px 14px 7px 12px", borderRadius: 99,
      background: "rgba(0,229,192,0.12)",
      border: "1px solid rgba(0,229,192,0.30)",
      color: TOKENS.navy,
      fontFamily: "JetBrains Mono, monospace",
      fontWeight: 500, fontSize: 11.5, letterSpacing: "0.04em",
    }}>
      <span style={{
        width: 7, height: 7, borderRadius: "50%",
        background: TOKENS.teal,
        animation: "rbPulse 2s ease-out infinite",
      }} />
      <span>{children}</span>
    </div>
  );
}

// ---------- Section eyebrow tag ----------
function Tag({ children, color = TOKENS.blue, center = false }) {
  return (
    <span style={{
      fontFamily: "Open Sans, sans-serif",
      fontWeight: 600, textTransform: "uppercase",
      letterSpacing: "2.5px", fontSize: 11,
      color, display: "inline-flex", alignItems: "center", gap: 8,
      justifyContent: center ? "center" : "flex-start",
    }}>
      <span style={{ width: 22, height: 1.5, background: color }} />
      {children}
    </span>
  );
}

// ---------- Service Explorer (interactive, futuristic) ----------
const SERVICES = [
  { cat: "Business & Management", count: 6, items: [
    ["Business Consulting", "Strategy and growth advisory tailored to the Maldivian economy."],
    ["Project Management", "End-to-end coordination for capital projects and rollouts."],
    ["Operations Outsourcing", "Run your back-office through us — payroll, admin, vendors."],
    ["HR & Recruitment", "Source, onboard and retain talent across resorts and tech."],
    ["Guest House Management", "Full-service property operations for guest house owners."],
    ["Procurement Support", "Sourcing, logistics and supplier negotiation across atolls."],
  ]},
  { cat: "Digital & Creative", count: 4, items: [
    ["Web Development", "Modern, fast websites built with Next.js and headless tooling."],
    ["Custom App Development", "iOS, Android and cross-platform apps shipped in-house."],
    ["Branding & Design", "Identity systems, packaging and marketing collateral."],
    ["Digital Marketing", "SEO, paid media and social management for local growth."],
  ]},
  { cat: "Legal & Documentation", count: 3, items: [
    ["Company Registration", "Incorporation, trade name reservation and Ministry filings."],
    ["Contracts & Agreements", "Draft, review and localize commercial contracts."],
    ["Compliance Advisory", "Stay aligned with MIRA, MED and sector regulators."],
  ]},
  { cat: "Expat & Government", count: 3, items: [
    ["DVR & Visa Processing", "Work permits, dependent visas and renewal handling."],
    ["Expat Relocation", "Housing, banking, schooling and onboarding into Malé life."],
    ["Government Liaison", "Direct representation with ministries and licensing bodies."],
  ]},
  { cat: "Financial", count: 1, items: [
    ["MIRA-Compliant Accounting", "Bookkeeping, GST/income tax filings and audit-ready reporting."],
  ]},
];

function ServiceExplorer() {
  const [activeCat, setActiveCat] = useState(0);
  const [hoverIdx, setHoverIdx] = useState(null);
  const cat = SERVICES[activeCat];

  return (
    <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 32, alignItems: "stretch" }}>
      {/* Category rail */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {SERVICES.map((s, i) => {
          const active = i === activeCat;
          return (
            <button
              key={s.cat}
              onClick={() => setActiveCat(i)}
              style={{
                textAlign: "left",
                padding: "16px 18px",
                borderRadius: 12,
                background: active ? TOKENS.navy : "rgba(255,255,255,0.7)",
                color: active ? "#fff" : TOKENS.navy,
                border: `1px solid ${active ? TOKENS.navy : "rgba(6,16,43,0.08)"}`,
                cursor: "pointer",
                transition: "all .25s cubic-bezier(.2,.7,.2,1)",
                fontFamily: "inherit",
                display: "flex", alignItems: "center", justifyContent: "space-between",
              }}
            >
              <span style={{ fontFamily: "Montserrat,sans-serif", fontWeight: 700, fontSize: 14, letterSpacing: "-0.01em" }}>{s.cat}</span>
              <span style={{
                fontFamily: "JetBrains Mono,monospace", fontSize: 10.5,
                color: active ? TOKENS.teal : TOKENS.blue,
                letterSpacing: "1.5px", fontWeight: 500,
              }}>// 0{s.count}</span>
            </button>
          );
        })}
      </div>

      {/* Item panel */}
      <div style={{
        background: "#fff",
        borderRadius: 14,
        boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
        border: "1px solid rgba(6,16,43,0.04)",
        padding: 28,
        position: "relative",
        overflow: "hidden",
        minHeight: 360,
      }}>
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0,
          height: 3, background: `linear-gradient(90deg, ${TOKENS.teal}, ${TOKENS.blue})`,
        }} />
        <div style={{
          fontFamily: "JetBrains Mono,monospace", fontSize: 11, color: TOKENS.blue,
          letterSpacing: "2px", textTransform: "uppercase", fontWeight: 500, marginBottom: 6,
        }}>// {cat.cat}</div>
        <h3 style={{
          fontFamily: "Montserrat,sans-serif", fontWeight: 900, fontSize: 24,
          color: TOKENS.navy, marginBottom: 20, letterSpacing: "-0.02em",
        }}>
          {cat.items.length} service{cat.items.length > 1 ? "s" : ""} in this category
        </h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 12 }}>
          {cat.items.map(([name, desc], i) => {
            const active = hoverIdx === i;
            return (
              <div
                key={name}
                onMouseEnter={() => setHoverIdx(i)}
                onMouseLeave={() => setHoverIdx(null)}
                style={{
                  padding: "14px 16px",
                  borderRadius: 10,
                  background: active ? TOKENS.mint : "transparent",
                  border: `1px solid ${active ? "rgba(0,229,192,0.4)" : "rgba(6,16,43,0.06)"}`,
                  transition: "all .2s ease",
                  cursor: "pointer",
                }}
              >
                <div style={{ fontFamily: "Montserrat,sans-serif", fontWeight: 700, fontSize: 14, color: TOKENS.navy, marginBottom: 4 }}>{name}</div>
                <div style={{ fontSize: 12.5, color: TOKENS.body, fontWeight: 300, lineHeight: 1.5 }}>{desc}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ---------- Partnership Badges ----------
function PartnerBadges() {
  return (
    <div style={{ maxWidth: 760, margin: "36px auto 0", textAlign: "center" }}>
      <div style={{
        fontFamily: "JetBrains Mono,monospace", fontSize: 11, fontWeight: 500,
        letterSpacing: "2.5px", textTransform: "uppercase",
        color: TOKENS.odooPrimary, marginBottom: 20,
      }}>// Trusted Partnerships</div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 56, flexWrap: "wrap" }}>
        <a href="#" style={{ height: 88, display: "inline-flex", transition: "transform .25s ease" }}
           onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px) scale(1.04)"}
           onMouseLeave={(e) => e.currentTarget.style.transform = "none"}>
          <img src="assets/odoo-silver-partner.png" alt="Odoo Silver Partner" style={{ height: "100%", width: "auto" }} />
        </a>
        <span style={{ width: 1, height: 56, background: "linear-gradient(180deg, transparent, rgba(6,16,43,0.18), transparent)" }} />
        <a href="#" style={{ height: 88, display: "inline-flex", transition: "transform .25s ease" }}
           onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px) scale(1.04)"}
           onMouseLeave={(e) => e.currentTarget.style.transform = "none"}>
          <img src="assets/bop-alliance.png" alt="BOP Alliance" style={{ height: "100%", width: "auto" }} />
        </a>
      </div>
    </div>
  );
}

// ---- Water ripple text — CSS background-clip approach (sandboxed-iframe safe) ----
function WaterText({ children, enabled = true }) {
  if (!enabled) return <span style={{ color: TOKENS.navy }}>{children}</span>;

  return (
    <>
      {/* Inline SVG filter — lives in document, no cross-origin issues */}
      <svg width="0" height="0" style={{ position: "absolute", overflow: "hidden" }} aria-hidden="true">
        <defs>
          <filter id="wt-turb" x="-5%" y="-30%" width="110%" height="160%" colorInterpolationFilters="sRGB">
            <feTurbulence type="fractalNoise" baseFrequency="0.018 0.06" numOctaves="3" seed="2" result="noise">
              <animate attributeName="baseFrequency" values="0.018 0.06;0.022 0.08;0.018 0.06" dur="6s" repeatCount="indefinite" />
              <animate attributeName="seed" values="2;8;2" dur="12s" repeatCount="indefinite" />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>
      <span
        className="water-text"
        style={{
          display: "inline-block",
          background: "linear-gradient(270deg, #00E5C0, #0099CC, #0066AA, #017E84, #0099CC, #00E5C0)",
          backgroundSize: "400% 400%",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
          color: "transparent",
          animation: "oceanShift 5s ease infinite",
          filter: "url(#wt-turb)",
        }}
      >
        {children}
      </span>
    </>
  );
}

window.WaterText = WaterText;
Object.assign(window, {
  AppProvider, AppContext, CursorHalo, MagneticButton, CountUp, Reveal,
  Aurora, LivePill, Tag, ServiceExplorer, PartnerBadges, TOKENS, SERVICES,
});
