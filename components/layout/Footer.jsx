const SERVICES_COL = [
  ['Business Consulting', '#services'],
  ['App Development', '#services'],
  ['Accounting & MIRA', '#services'],
  ['Expat Services', '#services'],
  ['Odoo ERP', '#services'],
];

const CONTACT_COL = [
  { label: 'Malé, Maldives', href: null },
  { label: 'marketing@metamorphosis.com.bd', href: 'mailto:marketing@metamorphosis.com.bd' },
  { label: '+960 741 7734', href: 'tel:+9607417734' },
  { label: 'Get a Quote →', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="rb-footer">
      <div className="rb-container">
        <div className="rb-footer-grid">
          <div>
            <img src="/assets/logo-full-light.png" alt="Metamorphosis" style={{ height: 38, width: 'auto', marginBottom: 22 }} />
            <p style={{ fontSize: 14, lineHeight: 1.65, fontWeight: 300, maxWidth: 280, color: 'rgba(255,255,255,0.6)' }}>
              A Maldives-based multi-service company helping local businesses and expats thrive — from accounting to apps, all under one roof.
            </p>
          </div>

          <div className="rb-foot-col">
            <h4>Services</h4>
            <ul>
              {SERVICES_COL.map(([label, href]) => (
                <li key={label}><a href={href}>{label}</a></li>
              ))}
            </ul>
          </div>

          <div className="rb-foot-col">
            <h4>Company</h4>
            <ul>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="https://wa.me/9607417734" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              <li><a href="https://metamorphosis.com.bd" target="_blank" rel="noopener noreferrer">Global Site</a></li>
            </ul>
          </div>

          <div className="rb-foot-col">
            <h4>Contact</h4>
            <ul>
              {CONTACT_COL.map(({ label, href }) => (
                <li key={label}>
                  {href ? <a href={href}>{label}</a> : <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, fontWeight: 300 }}>{label}</span>}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="rb-foot-bottom">
          <div>© 2026 Metamorphosis MV. All rights reserved.</div>
          <div>Built with Next.js.</div>
        </div>
      </div>
    </footer>
  );
}
