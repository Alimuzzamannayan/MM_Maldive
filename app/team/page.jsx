import Nav from '../../components/layout/Nav';
import Footer from '../../components/layout/Footer';
import { TOKENS } from '../../lib/tokens';

export const metadata = {
  title: 'Our Team | Expert ERP & Business Consultants | Metamorphosis MV',
  description: 'Meet the Metamorphosis team — certified Odoo consultants, software engineers, business analysts, and project managers serving businesses in the Maldives and beyond.',
  alternates: { canonical: 'https://mv.metamorphosis.com.bd/team' },
};

const LEADERSHIP = [
  { name: 'Mohammad Rukunuzzaman', role: 'CEO & Co-Founder', bio: '13+ years in Communication Technology and Financial Planning. Former Head of Core, Network Operations at Banglalink. Graduated from BUET.', img: '/assets/team-ceo.jpg' },
  { name: 'Sadiq M. Alam', role: 'COO & Co-Founder', bio: 'Serial entrepreneur with expertise in information architecture and content strategy. Graduated from BUET, Masters from NUS, Fellowship from UCLA.', img: '/assets/team-coo.jpg' },
  { name: 'Istiaque Al Mahmud', role: 'Director, Marketing', bio: '12+ years experience in Telecom and Facilities Services. MBA in Finance from NSU, B.Sc. from IUT.', img: '/assets/team-director.jpg' },
];

const TECH_TEAM = [
  { name: 'Niaj S Shishir', role: 'Head of Technology', img: '/assets/team-dominic.webp' },
  { name: 'Joyanto Chandra Barmon', role: 'Sr. Software Engineer', img: '/assets/team-james.webp' },
];

const CONSULTANTS = [
  { name: 'Alex', role: 'Project Manager', img: '/assets/team-alexis.webp' },
  { name: 'Maya', role: 'Data Analyst', img: '/assets/team-maya.webp' },
];

function MemberCard({ name, role, bio, img, large }) {
  return (
    <div style={{ background: '#fff', borderRadius: 16, border: '1px solid rgba(6,16,43,0.08)', padding: large ? '32px' : '24px', display: 'flex', flexDirection: large ? 'row' : 'column', gap: large ? 24 : 16, alignItems: large ? 'flex-start' : 'center', textAlign: large ? 'left' : 'center' }}>
      <img
        src={img}
        alt={name}
        width={large ? 88 : 64}
        height={large ? 88 : 64}
        style={{ width: large ? 88 : 64, height: large ? 88 : 64, borderRadius: '50%', objectFit: 'cover', flexShrink: 0, border: `2px solid ${TOKENS.teal}40` }}
      />
      <div>
        <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: large ? 17 : 15, color: TOKENS.navy, marginBottom: 4 }}>{name}</div>
        <div style={{ fontSize: 12, fontWeight: 600, color: TOKENS.teal, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: bio ? 10 : 0 }}>{role}</div>
        {bio && <p style={{ fontSize: 14, color: TOKENS.body, fontWeight: 300, lineHeight: 1.65, margin: 0 }}>{bio}</p>}
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <>
      <Nav />

      <section style={{ padding: '80px 0 48px', background: 'linear-gradient(180deg, #f8fffe 0%, #fff 100%)', borderBottom: '1px solid rgba(6,16,43,0.06)' }}>
        <div className="rb-container" style={{ maxWidth: 900 }}>
          <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: 11, fontWeight: 500, letterSpacing: '2.5px', textTransform: 'uppercase', color: TOKENS.teal, marginBottom: 16 }}>// The Team</div>
          <h1 style={{ fontWeight: 900, fontSize: 'clamp(36px,5vw,56px)', letterSpacing: '-0.025em', color: TOKENS.navy, marginBottom: 20, lineHeight: 1.05 }}>
            Meet Team Metamorphosis
          </h1>
          <p style={{ fontSize: 17, color: TOKENS.body, fontWeight: 300, maxWidth: 620, lineHeight: 1.65 }}>
            A dynamic team of certified Odoo consultants, software engineers, business analysts, and project managers — united by a commitment to transforming businesses across the Maldives and beyond.
          </p>
        </div>
      </section>

      <section style={{ padding: '72px 0 96px', background: '#fff' }}>
        <div className="rb-container" style={{ maxWidth: 1000 }}>

          <div style={{ marginBottom: 64 }}>
            <h2 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 20, color: TOKENS.navy, marginBottom: 28, letterSpacing: '-0.01em' }}>Organisation Leadership</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {LEADERSHIP.map((m) => <MemberCard key={m.name} {...m} large />)}
            </div>
          </div>

          <div style={{ marginBottom: 64 }}>
            <h2 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 20, color: TOKENS.navy, marginBottom: 28, letterSpacing: '-0.01em' }}>Tech Leadership</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 16 }}>
              {TECH_TEAM.map((m) => <MemberCard key={m.name} {...m} />)}
            </div>
          </div>

          <div style={{ marginBottom: 64 }}>
            <h2 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 20, color: TOKENS.navy, marginBottom: 28, letterSpacing: '-0.01em' }}>ERP Consultants & Project Managers</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 16 }}>
              {CONSULTANTS.map((m) => <MemberCard key={m.name} {...m} />)}
            </div>
          </div>

          <div style={{ padding: '40px', background: 'linear-gradient(135deg, rgba(0,229,192,0.08) 0%, rgba(0,229,192,0.03) 100%)', borderRadius: 20, border: '1px solid rgba(0,229,192,0.2)', textAlign: 'center' }}>
            <h3 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 900, fontSize: 22, color: TOKENS.navy, marginBottom: 12 }}>Want to join the mission?</h3>
            <p style={{ fontSize: 15, color: TOKENS.body, fontWeight: 300, marginBottom: 24 }}>We are always looking for talented individuals to help shape the future of enterprise software in the Maldives.</p>
            <a href="/contact" style={{ display: 'inline-block', padding: '13px 26px', background: TOKENS.teal, color: TOKENS.navy, fontWeight: 700, fontSize: 14, borderRadius: 10, textDecoration: 'none' }}>
              Get in Touch →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
