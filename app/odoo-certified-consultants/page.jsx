'use client';
import { useState } from 'react';
import Nav from '../../components/layout/Nav';
import Footer from '../../components/layout/Footer';
import { TOKENS } from '../../lib/tokens';

const CONSULTANTS = [
  {
    name: 'Mohammad Rukunuzzaman',
    role: 'Lead Functional Consultant',
    img: '/assets/team/rukun.jpg',
    experience: '9+ Years in ERP Implementation',
    domain: 'Finance & Supply Chain',
    cert: 'Odoo v17 Functional Certification',
    bio: 'Expert in complex multi-company accounting and high-volume retail inventory management.',
    projects: ['Grameen Danone', 'Idiya Ltd', 'Shanta Lifestyle'],
  },
  {
    name: 'Sadiq M. Alam',
    role: 'Senior Functional Consultant',
    img: '/assets/team/sadiq.jpg',
    experience: '5+ Years in Manufacturing',
    domain: 'MRP & Shop Floor Control',
    cert: 'Odoo v17 Functional Certification',
    bio: 'Specializes in streamlining production workflows for leading textile manufacturers.',
    projects: ['Textile Exporters', 'Retail Groups'],
  },
  {
    name: 'Istiaque Al Mahmud',
    role: 'Senior Functional Consultant',
    img: '/assets/team/istiaque.jpg',
    experience: '7+ Years in HR & Payroll',
    domain: 'Human Capital Management',
    cert: 'Odoo v17 Functional Certification',
    bio: 'Designed automated payroll and attendance systems for enterprises with 5,000+ employees.',
    projects: ['Corporate Headquarters', 'Manufacturing Plants'],
  },
  {
    name: 'Niaj S Shishir',
    role: 'Functional Consultant',
    img: '/assets/team/niaj.jpg',
    experience: '4+ Years in Trading & Commerce',
    domain: 'Import-Export & Commercial',
    cert: 'Odoo v16 Functional Certification',
    bio: 'Deep expertise in Letter of Credit (LC) management and commercial documentation workflows.',
    projects: ['Major Trading Houses', 'Logistics Firms'],
  },
  {
    name: 'Mehedi Hasan',
    role: 'Functional Consultant',
    img: '/assets/team/mehedi.jpg',
    experience: '3+ Years in E-Commerce',
    domain: 'Omnichannel Retail',
    cert: 'Odoo v17 Functional Certification',
    bio: 'Expert in synchronizing large-scale digital storefronts with Odoo backend operations.',
    projects: ['E-Commerce Giants', 'Fashion Brands'],
  },
  {
    name: 'Zihad Al Mamun',
    role: 'Functional Consultant',
    img: '/assets/team/zihad.jpg',
    experience: '5+ Years in Logistics',
    domain: 'Warehouse Management (WMS)',
    cert: 'Odoo v16 Functional Certification',
    bio: 'Optimizes complex logistics and multi-warehouse distribution networks for FMCG companies.',
    projects: ['FMCG Distributors', 'Multi-Warehouse Operators'],
  },
  {
    name: 'Alimuzzaman Nayan',
    role: 'Functional Consultant',
    img: '/assets/team/arafat.jpg',
    experience: '3+ Years in ERP Implementation',
    domain: 'Sales & CRM',
    cert: 'Odoo v17 Functional Certification',
    bio: 'Expert in optimizing sales pipelines and customer relationship management for service-oriented businesses.',
    projects: ['Service Businesses', 'Maldives Operations'],
  },
];

const CERT_BADGE = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

function ConsultantCard({ name, role, img, experience, domain, cert, bio, projects }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#fff',
        borderRadius: 20,
        border: `1px solid ${hovered ? TOKENS.teal + '60' : 'rgba(6,16,43,0.08)'}`,
        overflow: 'hidden',
        boxShadow: hovered ? '0 16px 48px rgba(0,229,192,0.12)' : '0 4px 20px rgba(6,16,43,0.05)',
        transition: 'all .25s ease',
        transform: hovered ? 'translateY(-4px)' : 'none',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Card top accent */}
      <div style={{ height: 4, background: `linear-gradient(90deg, ${TOKENS.teal}, #00bfa0)` }} />

      <div style={{ padding: '28px 28px 24px' }}>
        {/* Photo + name */}
        <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', marginBottom: 20 }}>
          <img
            src={img}
            alt={name}
            width={72}
            height={72}
            style={{ width: 72, height: 72, borderRadius: 14, objectFit: 'cover', flexShrink: 0, border: '2px solid rgba(0,229,192,0.25)' }}
            onError={(e) => { e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=06102B&color=00E5C0&size=72`; }}
          />
          <div>
            <h3 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 16, color: TOKENS.navy, margin: '0 0 4px', lineHeight: 1.25 }}>{name}</h3>
            <div style={{ fontSize: 12, fontWeight: 600, color: TOKENS.teal, marginBottom: 6 }}>{role}</div>
            {/* Cert badge */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '4px 10px', background: 'rgba(0,229,192,0.08)', borderRadius: 99, border: '1px solid rgba(0,229,192,0.25)' }}>
              <span style={{ color: TOKENS.teal }}>{CERT_BADGE}</span>
              <span style={{ fontSize: 10, fontWeight: 700, color: TOKENS.teal, letterSpacing: '0.5px', textTransform: 'uppercase' }}>Certified By Odoo</span>
            </div>
          </div>
        </div>

        {/* Cert version */}
        <div style={{ padding: '10px 14px', background: 'rgba(6,16,43,0.03)', borderRadius: 10, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: TOKENS.teal, flexShrink: 0 }} />
          <span style={{ fontSize: 12, fontWeight: 600, color: TOKENS.navy }}>{cert}</span>
        </div>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
          <span style={{ fontSize: 11, fontWeight: 600, padding: '5px 10px', borderRadius: 99, background: 'rgba(6,16,43,0.05)', color: TOKENS.body }}>⏱ {experience}</span>
          <span style={{ fontSize: 11, fontWeight: 600, padding: '5px 10px', borderRadius: 99, background: 'rgba(6,16,43,0.05)', color: TOKENS.body }}>⚙ {domain}</span>
        </div>

        {/* Bio */}
        <p style={{ fontSize: 13, color: TOKENS.body, fontWeight: 300, lineHeight: 1.7, margin: '0 0 16px' }}>{bio}</p>

        {/* Projects */}
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, color: TOKENS.navy, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: 8 }}>Key Projects</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {projects.map((p) => (
              <span key={p} style={{ fontSize: 12, fontWeight: 600, padding: '4px 10px', borderRadius: 6, background: `${TOKENS.navy}08`, color: TOKENS.navy, border: '1px solid rgba(6,16,43,0.10)' }}>{p}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CertifiedConsultants() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section style={{ padding: '80px 0 56px', background: 'linear-gradient(160deg, #06102B 0%, #714B67 100%)', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: -100, right: -100, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(113,75,103,0.4), transparent 65%)', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', bottom: -60, left: -60, width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,229,192,0.12), transparent 65%)', pointerEvents: 'none' }} />
        <div className="rb-container" style={{ position: 'relative' }}>
          <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: 11, fontWeight: 500, letterSpacing: '2.5px', textTransform: 'uppercase', color: TOKENS.teal, marginBottom: 14 }}>
            Certified Expertise
          </div>
          <h1 style={{ fontWeight: 900, fontSize: 'clamp(32px,5vw,58px)', color: '#fff', letterSpacing: '-0.025em', lineHeight: 1.05, marginBottom: 20, maxWidth: 760 }}>
            Odoo Certified Functional Consultants at Metamorphosis
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.7)', fontWeight: 300, lineHeight: 1.7, maxWidth: 620, marginBottom: 40 }}>
            Metamorphosis takes pride in housing a team of Odoo-certified professionals who combine technical mastery with deep industry expertise.
          </p>
          {/* Odoo Silver Partner badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, padding: '12px 20px', background: 'rgba(255,255,255,0.08)', borderRadius: 12, border: '1px solid rgba(255,255,255,0.15)' }}>
            <img src="/assets/odoo-silver-partner.png" alt="Odoo Silver Partner" style={{ height: 32, width: 'auto' }} />
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>Silver Partner</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)', fontWeight: 300 }}>Certified Odoo Expertise</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div style={{ background: TOKENS.teal, padding: '18px 0' }}>
        <div className="rb-container" style={{ display: 'flex', gap: 40, flexWrap: 'wrap', justifyContent: 'center' }}>
          {[['8', 'Certified Consultants'], ['3', 'Certification Versions'], ['10+', 'Years Combined'], ['60+', 'Enterprise Projects']].map(([num, label]) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 26, color: TOKENS.navy, lineHeight: 1 }}>{num}</div>
              <div style={{ fontSize: 11, fontWeight: 600, color: TOKENS.navy, opacity: 0.7, marginTop: 2 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Consultant grid */}
      <section style={{ padding: '72px 0 96px', background: '#f8fffe' }}>
        <div className="rb-container" style={{ maxWidth: 1100 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 24, marginBottom: 64 }}>
            {CONSULTANTS.map((c) => <ConsultantCard key={c.name} {...c} />)}
          </div>

          {/* Bottom CTA */}
          <div style={{ padding: '56px 40px', background: 'linear-gradient(135deg, #06102B 0%, #0d2d5e 100%)', borderRadius: 20, textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div aria-hidden="true" style={{ position: 'absolute', top: -60, right: -60, width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,229,192,0.08), transparent 65%)' }} />
            <div style={{ position: 'relative' }}>
              <h2 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 'clamp(22px,3.5vw,32px)', color: '#fff', marginBottom: 12, letterSpacing: '-0.02em' }}>
                Work with the best in the industry.
              </h2>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', fontWeight: 300, marginBottom: 32, maxWidth: 520, margin: '0 auto 32px', lineHeight: 1.65 }}>
                Our consultants don't just implement software — they transform business processes using global best practices localised for the Maldives market.
              </p>
              <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="/contact" style={{ padding: '14px 28px', background: TOKENS.teal, color: TOKENS.navy, fontWeight: 700, fontSize: 14, borderRadius: 10, textDecoration: 'none' }}>
                  Schedule a Consultation →
                </a>
                <a href="https://wa.me/9607417734" target="_blank" rel="noopener noreferrer" style={{ padding: '14px 28px', background: 'rgba(255,255,255,0.1)', color: '#fff', fontWeight: 600, fontSize: 14, borderRadius: 10, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>
                  Chat With Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
