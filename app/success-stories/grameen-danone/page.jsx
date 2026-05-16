import Nav from '../../../components/layout/Nav';
import Footer from '../../../components/layout/Footer';
import { TOKENS } from '../../../lib/tokens';
import { breadcrumbSchema, jsonLd } from '../../../lib/schema';

export const metadata = {
  title: 'Grameen Danone Case Study | Odoo ERP | Metamorphosis MV',
  description: 'How Metamorphosis streamlined operations for Grameen Danone using Odoo ERP — achieving 100% data accuracy, 40% reduction in reporting time, and full supply chain visibility.',
  alternates: { canonical: 'https://mv.metamorphosis.com.bd/success-stories/grameen-danone' },
};

const STATS = [['+50%', 'Operational Agility'], ['100%', 'Data Accuracy'], ['-40%', 'Reporting Time'], ['100%', 'Supply Chain Vis.']];
const MODULES = [
  { name: 'Manufacturing', img: '/assets/odoo-module-inventory.png' },
  { name: 'Inventory', img: '/assets/odoo-module-inventory.png' },
  { name: 'Sales', img: '/assets/odoo-module-sales.png' },
  { name: 'Accounting', img: '/assets/odoo-module-inventory.png' },
];
const TEAM = [
  { name: 'Alex', role: 'Project Manager', img: '/assets/team-alexis.webp' },
  { name: 'Dominic', role: 'Lead Architect', img: '/assets/team-dominic.webp' },
  { name: 'James', role: 'Integration Specialist', img: '/assets/team-james.webp' },
  { name: 'Maya', role: 'Data Analyst', img: '/assets/team-maya.webp' },
];

export default function GrameenDanone() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Case Studies', url: '/case-studies' }, { name: 'Grameen Danone', url: '/success-stories/grameen-danone' }])) }} />
      <Nav />

      {/* Hero */}
      <section style={{ padding: '80px 0 60px', background: 'linear-gradient(160deg, #06102B 0%, #0d2d5e 100%)', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: -100, right: -100, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,229,192,0.15), transparent 65%)', pointerEvents: 'none' }} />
        <div className="rb-container" style={{ maxWidth: 900, position: 'relative' }}>
          <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: 11, fontWeight: 500, letterSpacing: '2.5px', textTransform: 'uppercase', color: TOKENS.teal, marginBottom: 16 }}>// Case Study: Grameen Danone</div>
          <h1 style={{ fontWeight: 900, fontSize: 'clamp(32px,5vw,54px)', color: '#fff', letterSpacing: '-0.025em', lineHeight: 1.05, marginBottom: 20, maxWidth: 720 }}>
            Empowering Social Enterprise with Odoo ERP
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.7)', fontWeight: 300, lineHeight: 1.65, maxWidth: 600, marginBottom: 48 }}>
            How Metamorphosis streamlined operations for Grameen Danone, bringing unprecedented accuracy, adaptability, and accessibility to their mission of improving nutrition in Bangladesh.
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
            <h2 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 24, color: TOKENS.navy, marginBottom: 18 }}>About Grameen Danone</h2>
            <p style={{ fontSize: 16, color: TOKENS.body, fontWeight: 300, lineHeight: 1.8 }}>
              Grameen Danone Foods Limited is a pioneering social business enterprise launched in 2006, aimed at reducing poverty and bringing daily nutrition to the children of Bangladesh. A joint venture between the Grameen Group and Danone, their operations balance strict social objectives with the need for operational sustainability.
            </p>
          </div>

          <div style={{ marginBottom: 56 }}>
            <h2 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 24, color: TOKENS.navy, marginBottom: 18 }}>The Challenge</h2>
            <p style={{ fontSize: 16, color: TOKENS.body, fontWeight: 300, lineHeight: 1.8 }}>
              As a fast-growing social enterprise dealing in fast-moving consumer goods (FMCG), Grameen Danone needed a robust system to handle complex production, supply chain, and financial reporting. Legacy systems lacked the agility required to scale and often led to disjointed data between the factory floor and the executive team.
            </p>
          </div>

          <div style={{ marginBottom: 56 }}>
            <h2 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 24, color: TOKENS.navy, marginBottom: 18 }}>The Solution</h2>
            <p style={{ fontSize: 16, color: TOKENS.body, fontWeight: 300, lineHeight: 1.8 }}>
              Metamorphosis deployed a comprehensive Odoo ERP framework to unify Grameen Danone's core business units. This provided a centralized platform for manufacturing resource planning (MRP), inventory control, and financial operations — giving every layer of the business access to the same real-time data.
            </p>
          </div>

          {/* Testimonial */}
          <div style={{ padding: '36px 40px', background: `linear-gradient(135deg, ${TOKENS.teal}12 0%, ${TOKENS.teal}04 100%)`, borderRadius: 16, border: `1px solid ${TOKENS.teal}30`, marginBottom: 56 }}>
            <div style={{ fontSize: 40, color: TOKENS.teal, lineHeight: 1, marginBottom: 16 }}>"</div>
            <p style={{ fontSize: 17, color: TOKENS.navy, fontWeight: 400, lineHeight: 1.75, marginBottom: 20, fontStyle: 'italic' }}>
              Our experience with Odoo is excellent. It gave us the accuracy, adaptability, and accessibility of information. I am very much thankful to Odoo and very happy with the partnership of Metamorphosis Ltd. I would definitely recommend it to any other organization looking to become a more agile entity and drive their business performance.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <img src="/assets/dipesh-nag.webp" alt="Dipesh Nag" width={48} height={48} style={{ width: 48, height: 48, borderRadius: '50%', objectFit: 'cover' }} />
              <div>
                <div style={{ fontWeight: 700, fontSize: 15, color: TOKENS.navy }}>Dipesh Nag</div>
                <div style={{ fontSize: 13, color: TOKENS.body, fontWeight: 300 }}>Managing Director, Grameen Danone Foods Limited</div>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div style={{ marginBottom: 56 }}>
            <h2 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 24, color: TOKENS.navy, marginBottom: 24 }}>Technical Stack Delivered</h2>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              {MODULES.map(({ name }) => (
                <div key={name} style={{ padding: '12px 20px', borderRadius: 10, border: '1.5px solid rgba(6,16,43,0.10)', fontSize: 14, fontWeight: 600, color: TOKENS.navy, display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: TOKENS.teal }} />{name}
                </div>
              ))}
            </div>
          </div>

          {/* Team */}
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
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', fontWeight: 300, marginBottom: 32 }}>Free discovery call. Scope within 48 hours. No commitment.</p>
          <a href="/contact" style={{ display: 'inline-block', padding: '14px 28px', background: TOKENS.teal, color: TOKENS.navy, fontWeight: 700, fontSize: 15, borderRadius: 10, textDecoration: 'none' }}>
            Start Your ERP Journey →
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
}
