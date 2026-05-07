const COLS = [
  ['Services', ['Business Consulting', 'App Development', 'Accounting & MIRA', 'Expat Services', 'All Services']],
  ['Company', ['About Us', 'Case Studies', 'Blog', 'Careers']],
  ['Legal', ['Privacy Policy', 'Terms of Service', 'Cookies', 'MIRA Disclosure']],
  ['Contact', ['Malé, Maldives', 'hello@metamorphosis.mv', '+960 300 0000', 'Get a Quote']],
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
          {COLS.map(([h, items]) => (
            <div key={h} className="rb-foot-col">
              <h4>{h}</h4>
              <ul>{items.map((x) => <li key={x}><a href="#">{x}</a></li>)}</ul>
            </div>
          ))}
        </div>
        <div className="rb-foot-bottom">
          <div>© 2026 Metamorphosis MV. All rights reserved.</div>
          <div>Built with Next.js.</div>
        </div>
      </div>
    </footer>
  );
}
