import Nav from '../../../components/layout/Nav';
import Footer from '../../../components/layout/Footer';
import { TOKENS } from '../../../lib/tokens';
import { breadcrumbSchema, jsonLd } from '../../../lib/schema';

export const metadata = {
  title: 'Idiya Ltd Case Study | E-Commerce & Retail ERP | Metamorphosis MV',
  description: 'How Metamorphosis engineered a seamless Odoo digital ecosystem for Idiya Ltd — a New Zealand furniture retailer — achieving 65% e-commerce growth and 40% logistics efficiency gain.',
  alternates: { canonical: 'https://mv.metamorphosis.com.bd/success-stories/idiya' },
};

const STATS = [['+65%', 'E-Commerce Growth'], ['+40%', 'Logistics Efficiency'], ['-30%', 'Delivery Lead Time'], ['100%', 'Inventory Accuracy']];
const STACK = [['Platform', 'Odoo 19 Enterprise'], ['AI Architecture', 'RAG Integration'], ['E-Commerce', 'Native Odoo Shop'], ['Logistics', 'WMS + RFID Sync'], ['Finance', 'Multi-Currency GL'], ['Hosting', 'Odoo.sh + Cloud'], ['Database', 'PostgreSQL Hybrid'], ['Support', '24/7 SLA Management']];
const TEAM = [
  { name: 'Sadiq M Alam', role: 'Project Manager', img: '/assets/team-coo.jpg' },
  { name: 'Niaj S Shishir', role: 'Lead Developer', img: '/assets/team-dominic.webp' },
  { name: 'Joyanto C Barmon', role: 'Backend Developer', img: '/assets/team-james.webp' },
  { name: 'Tarek Hasan', role: 'Data Specialist', img: '/assets/team-maya.webp' },
];

const CHALLENGES = [
  ['High-Complexity Logistics', 'Serving customers across both islands created a logistical puzzle. Inventory was difficult to track across regional warehouses.'],
  ['The Kitset Nightmare', 'Furniture arrives in multiple boxes with dozens of components. Tracking Bill of Materials (BOM) parts was a major operational pain.'],
  ['Inefficient Order Processing', 'The team struggled with real-time order tracking and lacked automated delivery timelines — a major bottleneck to growth.'],
  ['Technical Fragmentation', 'Syncing stock across multiple marketplaces, integrating BNPL payment schemes, and sending automated SMS notifications all required separate systems.'],
];

const SOLUTIONS = [
  ['Intelligent Routing & Shipping', 'Completely overhauled the logistics framework with automated shipping rate calculations based on volume and weight.'],
  ['Tailored E-Commerce Checkout', 'Customized the storefront with dynamic inventory visibility and a calendar-based delivery booking tool.'],
  ['Omnichannel Synchronization', 'Integrated with leading marketplaces, ensuring centralized inventory and complex BOM tracking in real-time.'],
  ['Full Localization & Payment', 'Regional payment gateways, BNPL schemes, and SMS gateway for order notifications deployed across the platform.'],
];

export default function Idiya() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Case Studies', url: '/case-studies' }, { name: 'Idiya Ltd', url: '/success-stories/idiya' }])) }} />
      <Nav />

      <section style={{ padding: '80px 0 60px', background: 'linear-gradient(160deg, #06102B 0%, #714B67 100%)', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: -80, left: -80, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(113,75,103,0.4), transparent 65%)', pointerEvents: 'none' }} />
        <div className="rb-container" style={{ maxWidth: 900, position: 'relative' }}>
          <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: 11, fontWeight: 500, letterSpacing: '2.5px', textTransform: 'uppercase', color: TOKENS.teal, marginBottom: 16 }}>// Case Study: Idiya Ltd · New Zealand</div>
          <h1 style={{ fontWeight: 900, fontSize: 'clamp(32px,5vw,54px)', color: '#fff', letterSpacing: '-0.025em', lineHeight: 1.05, marginBottom: 20, maxWidth: 720 }}>
            Unifying Furniture Retail with Odoo Neural Systems
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.7)', fontWeight: 300, lineHeight: 1.65, maxWidth: 600, marginBottom: 48 }}>
            How Metamorphosis engineered a seamless digital ecosystem for New Zealand's premier furniture leader, resulting in 100% stock accuracy and +65% e-commerce growth.
          </p>
          <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
            {STATS.map(([val, label]) => (
              <div key={label}>
                <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 36, color: TOKENS.teal, lineHeight: 1 }}>{val}</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', fontWeight: 300, marginTop: 4 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '72px 0', background: '#fff' }}>
        <div className="rb-container" style={{ maxWidth: 820 }}>
          <div style={{ marginBottom: 56 }}>
            <h2 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 24, color: TOKENS.navy, marginBottom: 18 }}>About Idiya</h2>
            <p style={{ fontSize: 16, color: TOKENS.body, fontWeight: 300, lineHeight: 1.8 }}>
              Idiya Ltd. is a prominent New Zealand-based furniture retailer dedicated to transforming houses into homes through smart, functional, and affordable design. Operating under the philosophy "Solved by Idiya," the company offers an extensive catalog spanning living room, bedroom, kitchen, dining, office, and outdoor furniture — serving customers across both the North and South Islands.
            </p>
          </div>

          <div style={{ marginBottom: 56 }}>
            <h2 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 24, color: TOKENS.navy, marginBottom: 24 }}>The Challenges</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {CHALLENGES.map(([title, body], i) => (
                <div key={title} style={{ display: 'flex', gap: 20, padding: '20px 24px', borderRadius: 12, border: '1px solid rgba(6,16,43,0.08)', background: '#fafafa' }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: TOKENS.navy, color: TOKENS.teal, fontWeight: 900, fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{i + 1}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 15, color: TOKENS.navy, marginBottom: 6 }}>{title}</div>
                    <div style={{ fontSize: 14, color: TOKENS.body, fontWeight: 300, lineHeight: 1.65 }}>{body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: 56 }}>
            <h2 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 24, color: TOKENS.navy, marginBottom: 24 }}>The Solution</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {SOLUTIONS.map(([title, body], i) => (
                <div key={title} style={{ display: 'flex', gap: 20, padding: '20px 24px', borderRadius: 12, border: `1px solid ${TOKENS.teal}30`, background: `${TOKENS.teal}06` }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: TOKENS.teal, color: TOKENS.navy, fontWeight: 900, fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{i + 1}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 15, color: TOKENS.navy, marginBottom: 6 }}>{title}</div>
                    <div style={{ fontSize: 14, color: TOKENS.body, fontWeight: 300, lineHeight: 1.65 }}>{body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: 56 }}>
            <h2 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 24, color: TOKENS.navy, marginBottom: 24 }}>Technical Stack</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 12 }}>
              {STACK.map(([k, v]) => (
                <div key={k} style={{ padding: '14px 18px', borderRadius: 10, border: '1px solid rgba(6,16,43,0.08)', background: '#fafafa' }}>
                  <div style={{ fontSize: 11, fontWeight: 600, color: TOKENS.teal, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: 4 }}>{k}</div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: TOKENS.navy }}>{v}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 24, color: TOKENS.navy, marginBottom: 24 }}>The Implementation Team</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 20 }}>
              {TEAM.map(({ name, role, img }) => (
                <div key={name} style={{ textAlign: 'center' }}>
                  <img src={img} alt={name} width={72} height={72} style={{ width: 72, height: 72, borderRadius: '50%', objectFit: 'cover', marginBottom: 10, border: '2px solid rgba(0,229,192,0.3)' }} />
                  <div style={{ fontWeight: 700, fontSize: 14, color: TOKENS.navy }}>{name}</div>
                  <div style={{ fontSize: 12, color: TOKENS.body, fontWeight: 300 }}>{role}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '64px 0', background: TOKENS.navy, textAlign: 'center' }}>
        <div className="rb-container">
          <h2 style={{ fontWeight: 900, fontSize: 'clamp(24px,3.5vw,36px)', color: '#fff', letterSpacing: '-0.02em', marginBottom: 12 }}>Ready for your transformation?</h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', fontWeight: 300, marginBottom: 32 }}>Our experts can design a similar neural ecosystem for your enterprise.</p>
          <a href="/contact" style={{ display: 'inline-block', padding: '14px 28px', background: TOKENS.teal, color: TOKENS.navy, fontWeight: 700, fontSize: 15, borderRadius: 10, textDecoration: 'none' }}>
            Get a Free Consultation →
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
}
