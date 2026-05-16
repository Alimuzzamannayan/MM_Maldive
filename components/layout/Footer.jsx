'use client';
const SERVICES_COL = [
  ['Odoo ERP', '/services/odoo-erp'],
  ['Accounting & MIRA', '/services/accounting-mira'],
  ['Business Consulting', '/services/business-consulting'],
  ['App Development', '/services/app-development'],
  ['Expat & Visa', '/services/expat-visa'],
];

const CONTACT_COL = [
  { label: 'Malé, Maldives', href: null },
  { label: 'marketing@metamorphosis.com.bd', href: 'mailto:marketing@metamorphosis.com.bd' },
  { label: '+960 741 7734', href: 'tel:+9607417734' },
  { label: 'Get a Quote →', href: '/contact' },
];

const LI_SVG = <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;
const FB_SVG = <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>;

export default function Footer() {
  return (
    <footer className="rb-footer">
      <div className="rb-container">
        <div className="rb-footer-grid">
          <div>
            <img src="/assets/logo-full-light.png" alt="Metamorphosis" width={180} height={38} style={{ height: 38, width: 'auto', marginBottom: 22 }} />
            <p style={{ fontSize: 14, lineHeight: 1.65, fontWeight: 300, maxWidth: 280, color: 'rgba(255,255,255,0.6)', marginBottom: 20 }}>
              A Maldives-based multi-service company helping local businesses and expats thrive — from accounting to apps, all under one roof.
            </p>
            {/* Social links */}
            <div style={{ display: 'flex', gap: 10 }}>
              {[
                { href: 'https://www.linkedin.com/company/metamorphosis-odoo-erp', icon: LI_SVG, label: 'LinkedIn' },
                { href: 'https://www.facebook.com/metamorphosis.com.bd', icon: FB_SVG, label: 'Facebook' },
              ].map(({ href, icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  style={{ width: 34, height: 34, borderRadius: 8, background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all .2s ease' }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(0,229,192,0.2)'; e.currentTarget.style.color = '#00E5C0'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}
                >{icon}</a>
              ))}
            </div>
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
              <li><a href="/about">About Us</a></li>
              <li><a href="/team">Our Team</a></li>
              <li><a href="/case-studies">Case Studies</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="https://wa.me/9607417734" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              <li><a href="https://metamorphosis.com.bd" target="_blank" rel="noopener noreferrer">Global Site</a></li>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
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
