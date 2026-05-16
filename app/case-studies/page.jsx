import Nav from '../../components/layout/Nav';
import Footer from '../../components/layout/Footer';
import { TOKENS } from '../../lib/tokens';

export const metadata = {
  title: 'Client Case Studies | Odoo ERP Success Stories Maldives | Metamorphosis MV',
  description: 'See how Maldivian businesses transformed operations with Odoo ERP and professional services from Metamorphosis MV. Real results from resorts, trading companies, and local businesses.',
  alternates: { canonical: 'https://mv.metamorphosis.com.bd/case-studies' },
  openGraph: {
    title: 'Client Case Studies | Metamorphosis MV',
    description: 'Real results from Odoo ERP implementations across Maldivian businesses.',
    url: 'https://mv.metamorphosis.com.bd/case-studies',
  },
};

const CASES = [
  {
    industry: 'Resort & Tourism',
    client: 'Island Resort Group',
    headline: 'Unified Resort Operations Across Multiple Properties',
    body: 'A multi-property resort operator in the North Malé Atoll replaced spreadsheets and disconnected POS systems with Odoo ERP. Inventory, payroll, procurement, and MIRA-compliant accounting now run from a single platform — eliminating 40+ hours of manual month-end work.',
    results: ['40+ hrs saved monthly', 'MIRA GST automated', 'Multi-property visibility'],
    color: TOKENS.teal,
  },
  {
    industry: 'Trading & Import',
    client: 'Malé Trading Co.',
    headline: 'From Spreadsheets to Real-Time Inventory Control',
    body: 'A leading importer and distributor in Malé needed real-time stock visibility across multiple warehouses. Odoo inventory and purchase modules replaced manual tracking, cutting stockouts by 60% and giving management instant insight into landed costs and margins.',
    results: ['60% fewer stockouts', 'Real-time landed costs', 'Automated reorder rules'],
    color: '#3B82F6',
  },
  {
    industry: 'Construction',
    client: 'Maldives Build Pvt Ltd',
    headline: 'Project Cost Control for Island Construction',
    body: 'A construction company managing projects across multiple atolls struggled to track material costs, subcontractor payments, and project profitability. Odoo Project and Accounting modules gave management live P&L visibility per project for the first time.',
    results: ['Per-project P&L live', 'Subcontractor tracking', 'BPT filing simplified'],
    color: TOKENS.odooPrimary,
  },
  {
    industry: 'Guesthouse & Hospitality',
    client: 'Atoll Stay Group',
    headline: 'Scaling a Guesthouse Portfolio with Odoo',
    body: 'An owner of three guesthouses across Laamu Atoll needed a system to manage bookings, staff, and MIRA obligations without a full-time accountant. After Odoo implementation, monthly GST returns now take 30 minutes instead of two days.',
    results: ['GST in 30 mins/month', 'Staff payroll automated', 'Expansion-ready platform'],
    color: '#10B981',
  },
];

const TESTIMONIALS = [
  {
    quote: 'Before Odoo, every month-end was a scramble. Now our GST return is generated in a click and our management accounts are always current.',
    name: 'Operations Manager',
    company: 'Resort client, Malé Atoll',
  },
  {
    quote: 'Metamorphosis understood the Maldives context — the MIRA requirements, the atoll logistics, the work permit complexities. No other ERP partner could say that.',
    name: 'Managing Director',
    company: 'Trading company, Malé',
  },
];

export default function CaseStudies() {
  return (
    <>
      <Nav />

      <section style={{ padding: '80px 0 48px', background: 'linear-gradient(180deg, #f8fffe 0%, #fff 100%)', borderBottom: '1px solid rgba(6,16,43,0.06)' }}>
        <div className="rb-container" style={{ maxWidth: 900 }}>
          <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: 11, fontWeight: 500, letterSpacing: '2.5px', textTransform: 'uppercase', color: TOKENS.teal, marginBottom: 16 }}>// Results</div>
          <h1 style={{ fontWeight: 900, fontSize: 'clamp(36px,5vw,56px)', letterSpacing: '-0.025em', color: TOKENS.navy, marginBottom: 20, lineHeight: 1.05 }}>
            Client Success Stories
          </h1>
          <p style={{ fontSize: 17, color: TOKENS.body, fontWeight: 300, maxWidth: 620, lineHeight: 1.65 }}>
            How Maldivian businesses — resorts, trading companies, guesthouses, and construction firms — transformed their operations with Metamorphosis MV.
          </p>
        </div>
      </section>

      <section style={{ padding: '72px 0 96px', background: '#fff' }}>
        <div className="rb-container" style={{ maxWidth: 1040 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
            {CASES.map(({ industry, client, headline, body, results, color }, i) => (
              <div key={client} style={{ display: 'grid', gridTemplateColumns: i % 2 === 0 ? '1fr 2fr' : '2fr 1fr', gap: 0, borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(6,16,43,0.08)', boxShadow: '0 4px 24px rgba(6,16,43,0.06)' }}>
                {i % 2 !== 0 && (
                  <div style={{ padding: '48px 40px', background: '#fff' }}>
                    <div style={{ fontSize: 12, fontWeight: 600, color: TOKENS.body, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: 12 }}>{industry}</div>
                    <h2 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 22, color: TOKENS.navy, marginBottom: 16, lineHeight: 1.25 }}>{headline}</h2>
                    <p style={{ fontSize: 15, color: TOKENS.body, fontWeight: 300, lineHeight: 1.75, marginBottom: 24 }}>{body}</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {results.map((r) => (
                        <div key={r} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                          <div style={{ width: 6, height: 6, borderRadius: '50%', background: color, flexShrink: 0 }} />
                          <span style={{ fontSize: 14, fontWeight: 600, color: TOKENS.navy }}>{r}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                <div style={{ padding: '48px 40px', background: `linear-gradient(135deg, ${color}18 0%, ${color}08 100%)`, display: 'flex', flexDirection: 'column', justifyContent: 'center', borderLeft: i % 2 !== 0 ? 'none' : `4px solid ${color}`, borderRight: i % 2 === 0 ? 'none' : `4px solid ${color}` }}>
                  {i % 2 === 0 ? (
                    <>
                      <div style={{ fontSize: 12, fontWeight: 600, color: TOKENS.body, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: 12 }}>{industry}</div>
                      <h2 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 22, color: TOKENS.navy, marginBottom: 16, lineHeight: 1.25 }}>{headline}</h2>
                      <p style={{ fontSize: 15, color: TOKENS.body, fontWeight: 300, lineHeight: 1.75, marginBottom: 24 }}>{body}</p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                        {results.map((r) => (
                          <div key={r} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                            <div style={{ width: 6, height: 6, borderRadius: '50%', background: color, flexShrink: 0 }} />
                            <span style={{ fontSize: 14, fontWeight: 600, color: TOKENS.navy }}>{r}</span>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 48, color, lineHeight: 1 }}>{client.split(' ').map(w => w[0]).join('')}</div>
                      <div style={{ fontSize: 13, fontWeight: 600, color: TOKENS.navy, marginTop: 12 }}>{client}</div>
                      <div style={{ fontSize: 12, color: TOKENS.body, fontWeight: 300 }}>{industry}</div>
                    </div>
                  )}
                </div>
                {i % 2 === 0 && (
                  <div style={{ padding: '48px 40px', background: '#fff' }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 48, color, lineHeight: 1 }}>{client.split(' ').map(w => w[0]).join('')}</div>
                      <div style={{ fontSize: 13, fontWeight: 600, color: TOKENS.navy, marginTop: 12 }}>{client}</div>
                      <div style={{ fontSize: 12, color: TOKENS.body, fontWeight: 300 }}>{industry}</div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: 'var(--mint)' }}>
        <div className="rb-container" style={{ maxWidth: 860 }}>
          <h2 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 'clamp(26px,3.5vw,36px)', color: TOKENS.navy, textAlign: 'center', marginBottom: 48, letterSpacing: '-0.02em' }}>
            What Our Clients Say
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 28 }}>
            {TESTIMONIALS.map(({ quote, name, company }) => (
              <div key={name} style={{ padding: '32px', background: '#fff', borderRadius: 16, border: '1px solid rgba(6,16,43,0.07)', boxShadow: '0 4px 20px rgba(6,16,43,0.05)' }}>
                <div style={{ fontSize: 32, color: TOKENS.teal, lineHeight: 1, marginBottom: 16 }}>"</div>
                <p style={{ fontSize: 15, color: TOKENS.body, fontWeight: 300, lineHeight: 1.75, marginBottom: 20 }}>{quote}</p>
                <div style={{ fontSize: 13, fontWeight: 700, color: TOKENS.navy }}>{name}</div>
                <div style={{ fontSize: 12, color: TOKENS.body, fontWeight: 300 }}>{company}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: TOKENS.navy, textAlign: 'center' }}>
        <div className="rb-container">
          <h2 style={{ fontWeight: 900, fontSize: 'clamp(26px,4vw,40px)', color: '#fff', letterSpacing: '-0.025em', marginBottom: 16 }}>
            Ready to Write Your Own Success Story?
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.65)', fontWeight: 300, marginBottom: 36, maxWidth: 480, margin: '0 auto 36px', lineHeight: 1.65 }}>
            Free discovery call. Scope delivered within 48 hours. No commitment required.
          </p>
          <a href="/contact" style={{ display: 'inline-block', padding: '16px 32px', background: TOKENS.teal, color: TOKENS.navy, fontWeight: 700, fontSize: 15, borderRadius: 12, textDecoration: 'none' }}>
            Start Your ERP Journey →
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
