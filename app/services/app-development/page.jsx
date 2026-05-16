import Nav from '../../../components/layout/Nav';
import Footer from '../../../components/layout/Footer';
import MagneticButton from '../../../components/ui/MagneticButton';
import Tag from '../../../components/ui/Tag';
import { TOKENS } from '../../../lib/tokens';
import { serviceSchema, breadcrumbSchema, jsonLd } from '../../../lib/schema';

export const metadata = {
  title: 'App & Web Development Maldives | Metamorphosis MV',
  description: 'Custom mobile app development, web development, branding and digital marketing for businesses in the Maldives. iOS, Android, Next.js. Based in Malé.',
  openGraph: {
    title: 'App & Web Development Maldives | Metamorphosis MV',
    description: 'Custom iOS, Android and web apps for Maldivian businesses.',
    url: 'https://mv.metamorphosis.com.bd/services/app-development',
  },
  alternates: { canonical: 'https://mv.metamorphosis.com.bd/services/app-development' },
};

const SERVICES = [['Custom Web Development','Modern, fast websites and web applications built with Next.js, React, and headless tooling. SEO-optimized from day one.'],['Mobile App Development','iOS and Android apps built in-house by our team — cross-platform and native. Resort apps, booking platforms, internal tools.'],['Branding & Design','Logo design, brand identity systems, brand guidelines, packaging, and marketing collateral.'],['Digital Marketing','SEO strategy, Google Ads, social media management, and content marketing for local Maldivian growth.'],['UI/UX Design','User interface design and user experience research — wireframes, prototypes, and design systems.'],['Maintenance & Support','Ongoing website and app maintenance, updates, security patches, and performance optimization.']];

export default function AppDevelopment() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(serviceSchema({ name: 'App & Web Development', description: 'Custom mobile apps, websites, branding and digital marketing for businesses in the Maldives.', url: '/services/app-development', serviceType: 'Software Development' })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }, { name: 'App Development', url: '/services/app-development' }])) }} />
      <Nav />
      <section style={{ padding: '100px 0 72px', background: 'linear-gradient(160deg, #06102B 0%, #0d2d5e 100%)', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: -120, right: -120, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,130,246,0.2), transparent 65%)', pointerEvents: 'none' }} />
        <div className="rb-container" style={{ position: 'relative', zIndex: 1 }}>
          <Tag color={TOKENS.teal}>Digital & Creative</Tag>
          <h1 style={{ fontWeight: 900, fontSize: 'clamp(38px,5.5vw,64px)', color: '#fff', letterSpacing: '-0.025em', lineHeight: 1.05, margin: '20px 0 22px', maxWidth: 760 }}>
            App & Web Development<br /><span style={{ color: TOKENS.teal }}>Built for Maldives</span>
          </h1>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.75)', fontWeight: 300, lineHeight: 1.65, maxWidth: 600, marginBottom: 40 }}>
            Custom websites, mobile apps, and digital products — designed and built in-house. From resort booking platforms to internal business tools, we deliver production-ready software on time.
          </p>
          <MagneticButton href="/contact" variant="teal">Start Your Project →</MagneticButton>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="rb-container">
          <Tag center>Services</Tag>
          <h2 style={{ fontWeight: 900, fontSize: 'clamp(28px,4vw,40px)', color: TOKENS.navy, letterSpacing: '-0.025em', textAlign: 'center', margin: '16px 0 48px' }}>What We Build</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20, maxWidth: 960, margin: '0 auto' }}>
            {SERVICES.map(([title, desc]) => (
              <div key={title} style={{ padding: '28px 24px', borderRadius: 14, border: '1.5px solid rgba(6,16,43,0.08)', background: '#fff' }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: TOKENS.blue, marginBottom: 16 }} />
                <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: 16, color: TOKENS.navy, marginBottom: 8 }}>{title}</div>
                <div style={{ fontSize: 14, color: TOKENS.body, fontWeight: 300, lineHeight: 1.65 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: TOKENS.navy, textAlign: 'center' }}>
        <div className="rb-container">
          <h2 style={{ fontWeight: 900, fontSize: 'clamp(28px,4vw,40px)', color: '#fff', letterSpacing: '-0.025em', marginBottom: 16 }}>Have a Project in Mind?</h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', fontWeight: 300, marginBottom: 32, maxWidth: 480, margin: '0 auto 32px' }}>Free discovery call. Scope and timeline within 48 hours.</p>
          <MagneticButton href="/contact" variant="teal">Let&apos;s Build It →</MagneticButton>
        </div>
      </section>
      <Footer />
    </>
  );
}
