'use client';
import { useState } from 'react';
import Nav from '../../components/layout/Nav';
import Footer from '../../components/layout/Footer';
import { TOKENS } from '../../lib/tokens';

const SECTIONS = [
  {
    title: 'Organisation Leadership',
    members: [
      { name: 'Mohammad Rukunuzzaman', role: 'Chief Executive Officer', img: '/assets/team/rukun.jpg' },
      { name: 'Sadiq M. Alam', role: 'Chief Operating Officer', img: '/assets/team/sadiq.jpg' },
      { name: 'Istiaque Al Mahmud', role: 'Director', img: '/assets/team/istiaque.jpg' },
    ],
  },
  {
    title: 'Tech Leadership',
    members: [
      { name: 'Niaj S Shishir', role: 'Head of Tech', img: '/assets/team/niaj.jpg' },
      { name: 'Zihad Al Mamun', role: 'Solution Architect', img: '/assets/team/zihad.jpg' },
      { name: 'Joyanto Chandra Barmon', role: 'Sr. Software Engineer', img: '/assets/team/joyanto.jpg' },
    ],
  },
  {
    title: 'Software, AI & ML Engineering',
    members: [
      { name: 'Zahid Hasan', role: 'Software Engineer', img: '/assets/team/zahid.jpg' },
      { name: 'Fazle Rabbi', role: 'Software Developer', img: '/assets/team/fazle.jpg' },
      { name: 'Md. Musfiqur Rahman', role: 'Machine Learning (ML) Engineer', img: '/assets/team/musfiq.jpg', href: 'https://metamorphosis.com.bd/our-team/md-musfiqur-rahman' },
      { name: 'Abrar Ahmed', role: 'Software Engineer', img: '/assets/team/abrar.jpg' },
    ],
  },
  {
    title: 'Business Development, Analyst & Project Managers',
    members: [
      { name: 'Zahidul Islam', role: 'Business Analyst', img: '/assets/team/zahidul.jpg' },
      { name: 'Mehedi Hasan', role: 'Business Analyst', img: '/assets/team/mehedi.jpg' },
      { name: 'Hasib Mahi', role: 'Business Analyst', img: '/assets/team/hasib.jpg' },
      { name: 'Md Abdullah Al Mamun', role: 'Associate Business Development Manager', img: '/assets/team/abdullah.jpg' },
      { name: 'Sajjatul Islam Suja', role: 'Project Manager', img: '/assets/team/sajjat.jpg' },
      { name: 'Junayed Hasan', role: 'Business Analyst', img: '/assets/team/junayed.jpg' },
      { name: 'Mahade Hasan', role: 'Business Analyst', img: '/assets/team/mahade.jpg' },
      { name: 'Mrinmoy Karmoker', role: 'Associate Business Analyst', img: '/assets/team/mrinmoy.jpg' },
      { name: 'Marzan Begum', role: 'Business Analyst', img: '/assets/team/marzan.jpg' },
      { name: 'Md. Rakib', role: 'Business Analyst', img: '/assets/team/rakib.jpg' },
    ],
  },
  {
    title: 'Data, Visuals & Customer Support',
    members: [
      { name: 'Mohammad Tarek Hasan', role: 'Data Executive', img: '/assets/team/tarek.jpg' },
      { name: 'Kaniz Fatema', role: 'Customer Support', img: '/assets/team/kaniz.jpg' },
      { name: 'Md Naim Khan', role: 'Visual Executive', img: '/assets/team/naim.jpg' },
      { name: 'Shawkat Zawhar', role: 'Data Executive', img: '/assets/team/shawkat.jpg' },
    ],
  },
  {
    title: 'Admin & Executives',
    members: [
      { name: 'S M Yasir Arafat', role: 'Admin Executive', img: '/assets/team/arafat.jpg' },
      { name: 'Momin Hossain', role: 'Support Executive', img: '/assets/team/momin.jpg' },
      { name: 'Hasina Akhter', role: 'Support Executive', img: '/assets/team/hasina.jpg' },
    ],
  },
  {
    title: 'Interns',
    members: [
      { name: 'Turza Hasan', role: 'Intern Software Engineer', img: '/assets/team/turza.jpg' },
      { name: 'Md. Nazmus Sazzad Naiem', role: 'Intern Software Engineer', img: '/assets/team/nazmus.jpg' },
      { name: 'Saidur Rahman Protik', role: 'Intern Software Engineer', img: '/assets/team/protik.jpg' },
    ],
  },
];

function MemberCard({ name, role, img, href }) {
  const [hovered, setHovered] = useState(false);
  const card = (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12,
        padding: '28px 20px', borderRadius: 16, textAlign: 'center', cursor: href ? 'pointer' : 'default',
        border: `1px solid ${hovered ? TOKENS.teal + '50' : 'rgba(6,16,43,0.07)'}`,
        background: hovered ? `${TOKENS.teal}06` : '#fff',
        boxShadow: hovered ? '0 8px 32px rgba(0,229,192,0.12)' : '0 2px 12px rgba(6,16,43,0.04)',
        transition: 'all .2s ease',
      }}
    >
      <div style={{ position: 'relative' }}>
        <img
          src={img}
          alt={name}
          width={88}
          height={88}
          style={{ width: 88, height: 88, borderRadius: '50%', objectFit: 'cover', border: `2.5px solid ${hovered ? TOKENS.teal : 'rgba(6,16,43,0.10)'}`, transition: 'border-color .2s ease' }}
          onError={(e) => { e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=06102B&color=00E5C0&size=88`; }}
        />
        {href && (
          <div style={{ position: 'absolute', bottom: 2, right: 2, width: 22, height: 22, borderRadius: '50%', background: TOKENS.teal, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="#06102B"><path d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
          </div>
        )}
      </div>
      <div>
        <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: 14, color: TOKENS.navy, marginBottom: 4, lineHeight: 1.3 }}>{name}</div>
        <div style={{ fontSize: 12, color: TOKENS.body, fontWeight: 300 }}>{role}</div>
      </div>
    </div>
  );
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>{card}</a>;
  return card;
}

export default function Team() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section style={{ padding: '80px 0 56px', background: 'linear-gradient(160deg, #06102B 0%, #0d2d5e 100%)', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -80, width: 480, height: 480, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,229,192,0.12), transparent 65%)', pointerEvents: 'none' }} />
        <div className="rb-container" style={{ position: 'relative' }}>
          <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: 11, fontWeight: 500, letterSpacing: '2.5px', textTransform: 'uppercase', color: TOKENS.teal, marginBottom: 14 }}>
            The Metamorphosis Family
          </div>
          <h1 style={{ fontWeight: 900, fontSize: 'clamp(36px,5.5vw,62px)', color: '#fff', letterSpacing: '-0.025em', lineHeight: 1.05, marginBottom: 20, maxWidth: 700 }}>
            Meet Team Metamorphosis
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.65)', fontWeight: 300, lineHeight: 1.7, maxWidth: 640 }}>
            Our dynamic team consists of experienced leadership, competent software engineers, expert business analysts and project managers, AI & ML engineers, a versatile data team, friendly customer service, server specialists, and efficient executives.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <div style={{ background: TOKENS.teal, padding: '20px 0' }}>
        <div className="rb-container" style={{ display: 'flex', gap: 40, flexWrap: 'wrap', justifyContent: 'center' }}>
          {[['27', 'Team Members'], ['8', 'Certified Consultants'], ['10+', 'Years Experience'], ['60+', 'Enterprise Clients']].map(([num, label]) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 28, color: TOKENS.navy, lineHeight: 1 }}>{num}</div>
              <div style={{ fontSize: 12, fontWeight: 600, color: TOKENS.navy, opacity: 0.7, marginTop: 2 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Team sections */}
      <section style={{ padding: '72px 0 96px', background: '#f8fffe' }}>
        <div className="rb-container" style={{ maxWidth: 1100 }}>
          {SECTIONS.map(({ title, members }) => (
            <div key={title} style={{ marginBottom: 64 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28 }}>
                <h2 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 18, color: TOKENS.navy, letterSpacing: '-0.01em', margin: 0 }}>{title}</h2>
                <div style={{ flex: 1, height: 1, background: 'rgba(6,16,43,0.08)' }} />
                <span style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: 11, color: TOKENS.teal, fontWeight: 500 }}>{members.length} Members</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 16 }}>
                {members.map((m) => <MemberCard key={m.name} {...m} />)}
              </div>
            </div>
          ))}

          {/* Join CTA */}
          <div style={{ padding: '48px 40px', background: 'linear-gradient(135deg, #06102B 0%, #0d2d5e 100%)', borderRadius: 20, textAlign: 'center' }}>
            <h3 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 24, color: '#fff', marginBottom: 12 }}>Want to join the mission?</h3>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', fontWeight: 300, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px' }}>
              We're always looking for talented individuals to help shape the future of enterprise software.
            </p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/contact" style={{ padding: '13px 26px', background: TOKENS.teal, color: TOKENS.navy, fontWeight: 700, fontSize: 14, borderRadius: 10, textDecoration: 'none' }}>Apply Now</a>
              <a href="https://wa.me/9607417734" target="_blank" rel="noopener noreferrer" style={{ padding: '13px 26px', background: 'rgba(255,255,255,0.1)', color: '#fff', fontWeight: 600, fontSize: 14, borderRadius: 10, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.15)' }}>Chat With Us</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
