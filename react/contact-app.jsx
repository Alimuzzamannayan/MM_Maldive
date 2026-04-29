// ============================================================================
// Contact Page — Metamorphosis MV
// Inspired by portcities.net/contact: 3-step expectation flow + form + channels.
// ============================================================================
const { useState } = React;

const PHONE_RAW = "+9607417734";
const PHONE_DISPLAY = "+960 741 7734";
const EMAIL = "marketing@metamorphosis.com.bd";

function ContactNav() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => document.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={`rb-nav ${scrolled ? "scrolled" : ""}`}>
      <div className="rb-container rb-nav-inner">
        <a href="../index.html" className="rb-logo-link"><img src="../assets/logo-full.png" alt="Metamorphosis" /></a>
        <ul className="rb-nav-links">
          {[["Home","../index.html"],["Services","../index.html#services"],["About","../index.html#why"],["Contact","contact.html"]]
            .map(([l,h]) => (
              <li key={l}><a href={h} className="rb-nav-link"><span className="rb-nav-link-text">{l}</span></a></li>
            ))}
        </ul>
        <MagneticButton href={`tel:${PHONE_RAW}`} variant="primary">Call Us</MagneticButton>
      </div>
    </nav>
  );
}

function ContactHero() {
  return (
    <section className="contact-hero">
      <div className="rb-container">
        <Tag>// Contact</Tag>
        <h1>Let's build <span className="accent">something remarkable</span> together.</h1>
        <p>Tell us about your project — discovery calls are free, confidential and never templated. We come back within 48 hours with a clear scope and realistic timeline.</p>

        <div className="steps-grid">
          {[
            ["01", "📨", "You reach out", "Drop a note via the form, WhatsApp, Viber or email. No salesy gatekeeping — your message lands directly with our team."],
            ["02", "🔍", "We listen first", "A specialist reviews what you've shared and prepares thoughtful questions. We schedule a 30-minute discovery call at your convenience."],
            ["03", "📝", "You get a real plan", "Within 48 hours of the call, you receive a written scope, timeline and transparent quote — tailored to your project, not a template."],
          ].map(([n, ico, t, d]) => (
            <Reveal key={n}>
              <div className="step-card">
                <div className="step-icon">{ico}</div>
                <div className="step-num">// STEP {n}</div>
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

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", company: "", phone: "", service: "", budget: "", message: "" });
  const [budget, setBudget] = useState("");
  const [sent, setSent] = useState(false);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const submit = (e) => { e.preventDefault(); setSent(true); };

  return (
    <section className="contact-main">
      <div className="rb-container">
        <div className="contact-grid">
          <div className="contact-pitch">
            <h2>Get a personalised quote — built for your project, not a template.</h2>
            <p>One of our specialists will reply within one business day. Prefer to talk now? Reach us on WhatsApp, Viber, phone or email.</p>
            <div className="contact-channels">
              <a className="channel" href={`https://wa.me/${PHONE_RAW.replace(/\D/g,"")}`} target="_blank" rel="noopener">
                <span className="channel-ico wa">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                </span>
                <div>
                  <div className="channel-meta">WhatsApp</div>
                  <div className="channel-val">{PHONE_DISPLAY}</div>
                </div>
              </a>
              <a className="channel" href={`viber://chat?number=${PHONE_RAW}`}>
                <span className="channel-ico viber">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M11.4.8C9 .9 4 1.6 1.2 4.2c-2.1 2-2.8 5-2.9 8.7-.1 3.7-.2 10.7 6.6 12.6h.1l-.1 2.9s0 1.2.7 1.4c1 .3 1.5-.6 2.4-1.5l1.9-2.1c4.6.4 8.2-.5 8.6-.6 1-.3 6.3-1 7.2-8.1.9-7.4-.5-12-3-14.2C19.9 1.7 14.2.7 11.4.8m6.5 14.5c-.5.7-1.6 1.2-2.4.7l-3.1-1.6c-.4-.2-.6-.6-.5-1l.4-1.5c.1-.4-.1-.8-.5-1l-2.4-1.4c-.4-.2-.5-.6-.4-1l.6-1.5c.2-.5.7-.7 1.2-.5 1 .4 2.6 1.4 4.3 3.1 1.7 1.7 2.4 3.4 2.6 4.4 0 .5-.3 1-.8 1.3M12 4c.4 0 .8.3.8.8s-.4.7-.8.7c-.4 0-.8-.3-.8-.7s.4-.8.8-.8m4 .8c.1-.4.5-.7.9-.6 2.1.4 3.7 2 4.1 4.1.1.4-.2.8-.6.9h-.1c-.4 0-.7-.3-.7-.6-.3-1.5-1.5-2.7-3-2.9-.4-.2-.7-.5-.6-.9m-4 1.5c.1-.4.5-.7.9-.6 1.5.2 2.7 1.4 2.9 2.9.1.4-.2.8-.6.9h-.1c-.4 0-.7-.3-.7-.6-.1-.9-.9-1.7-1.8-1.8-.4 0-.7-.4-.6-.8m-2.6.5c.4 0 .8.3.8.7 0 .5-.4.8-.8.8s-.7-.3-.7-.7.3-.8.7-.8m4 1.5c.5 0 .8.3.8.7s-.3.8-.7.8c-.5 0-.8-.3-.8-.7s.3-.8.7-.8M12 9.6c.5 0 .8.3.8.7 0 .5-.3.8-.7.8-.5 0-.8-.3-.8-.7s.3-.8.7-.8"/></svg>
                </span>
                <div>
                  <div className="channel-meta">Viber</div>
                  <div className="channel-val">{PHONE_DISPLAY}</div>
                </div>
              </a>
              <a className="channel" href={`mailto:${EMAIL}`}>
                <span className="channel-ico"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 7L2 7"/></svg></span>
                <div>
                  <div className="channel-meta">Email</div>
                  <div className="channel-val">{EMAIL}</div>
                </div>
              </a>
              <a className="channel" href={`tel:${PHONE_RAW}`}>
                <span className="channel-ico"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z"/></svg></span>
                <div>
                  <div className="channel-meta">Direct Call</div>
                  <div className="channel-val">{PHONE_DISPLAY}</div>
                </div>
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={submit}>
            <div className="form-eyebrow">// Project Brief</div>
            <h2>Tell us about your project</h2>
            <p className="sub">The more context you share, the sharper our reply will be.</p>

            {sent ? (
              <div style={{ padding: "32px 0", textAlign: "center" }}>
                <div style={{ fontSize: 40, marginBottom: 12 }}>✓</div>
                <h3 style={{ fontSize: 22, marginBottom: 8 }}>Thanks — message received.</h3>
                <p style={{ color: "var(--body)", fontWeight: 300 }}>A specialist will reply within one business day to <b>{form.email}</b>.</p>
              </div>
            ) : (
              <>
                <div className="form-row">
                  <div className="field"><label>Full name</label><input required value={form.name} onChange={set("name")} /></div>
                  <div className="field"><label>Work email</label><input required type="email" value={form.email} onChange={set("email")} /></div>
                </div>
                <div className="form-row">
                  <div className="field"><label>Company</label><input value={form.company} onChange={set("company")} /></div>
                  <div className="field"><label>Phone</label><input value={form.phone} onChange={set("phone")} placeholder="+960 …" /></div>
                </div>
                <div className="field" style={{ marginBottom: 14 }}>
                  <label>Service of interest</label>
                  <select value={form.service} onChange={set("service")}>
                    <option value="">Select a service…</option>
                    <option>Odoo ERP Implementation</option>
                    <option>Custom App Development</option>
                    <option>Web Development</option>
                    <option>Accounting & MIRA</option>
                    <option>Business Consulting</option>
                    <option>Expat & Visa Services</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="field" style={{ marginBottom: 14 }}>
                  <label>Estimated budget</label>
                  <div className="budget-pills">
                    {["< $5k","$5k–$15k","$15k–$50k","$50k+","Not sure yet"].map((b) => (
                      <button type="button" key={b} className={`budget-pill ${budget === b ? "active" : ""}`} onClick={() => setBudget(b)}>{b}</button>
                    ))}
                  </div>
                </div>
                <div className="field"><label>Project details</label><textarea value={form.message} onChange={set("message")} placeholder="A short brief, goals, timeline, anything we should know…" /></div>
                <button type="submit" className="submit-btn">Send Message →</button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactLocations() {
  return (
    <section className="contact-footer">
      <div className="rb-container">
        <Tag>// Where We Work</Tag>
        <h2 style={{ fontWeight: 900, fontSize: 32, letterSpacing: "-0.02em", margin: "12px 0 32px" }}>Reach us through any channel.</h2>
        <div className="cf-grid">
          <div className="cf-card">
            <h4>Headquarters</h4>
            <p>Malé, Maldives<br/>Open Mon–Sat, 9:00 — 18:00 MVT</p>
          </div>
          <div className="cf-card">
            <h4>Phone / WhatsApp / Viber</h4>
            <p><a href={`tel:${PHONE_RAW}`}>{PHONE_DISPLAY}</a><br/>One number, three channels — pick what works for you.</p>
          </div>
          <div className="cf-card">
            <h4>Email</h4>
            <p><a href={`mailto:${EMAIL}`}>{EMAIL}</a><br/>For partnerships, briefs and detailed inquiries.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactApp() {
  return (
    <AppProvider>
      <CursorHalo />
      <ContactNav />
      <ContactHero />
      <ContactForm />
      <ContactLocations />
      <Footer />
    </AppProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<ContactApp />);
