import { TOKENS } from '../../lib/tokens';

const PHONE_RAW = '+9607417734';
const PHONE_DISPLAY = '+960 741 7734';

const WA_PATH = 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z';

const PHONE_SVG = 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z';

const CHANNELS = [
  {
    label: 'WhatsApp',
    sub: 'Fastest response — reply within 2 hours',
    href: `https://wa.me/${PHONE_RAW.replace(/\D/g, '')}`,
    color: '#25D366',
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d={WA_PATH} /></svg>,
  },
  {
    label: 'Call Us',
    sub: PHONE_DISPLAY + ' · Mon–Sat, 9:00–18:00 MVT',
    href: `tel:${PHONE_RAW}`,
    color: TOKENS.blue,
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={PHONE_SVG} /></svg>,
  },
  {
    label: 'Viber',
    sub: 'Same number on Viber',
    href: `viber://chat?number=${PHONE_RAW}`,
    color: '#7360f2',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.4.8C9 .9 4 1.6 1.2 4.2c-2.1 2-2.8 5-2.9 8.7-.1 3.7-.2 10.7 6.6 12.6h.1l-.1 2.9s0 1.2.7 1.4c1 .3 1.5-.6 2.4-1.5l1.9-2.1c4.6.4 8.2-.5 8.6-.6 1-.3 6.3-1 7.2-8.1.9-7.4-.5-12-3-14.2C19.9 1.7 14.2.7 11.4.8" />
      </svg>
    ),
  },
];

export default function BookACall() {
  return (
    <section style={{ padding: '80px 0', background: 'var(--mint)' }}>
      <div className="rb-container">
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: 11, fontWeight: 500, letterSpacing: '2.5px', textTransform: 'uppercase', color: TOKENS.blue, marginBottom: 12 }}>// Talk to Us Now</div>
          <h2 style={{ fontWeight: 900, fontSize: 'clamp(28px,3.5vw,40px)', letterSpacing: '-0.025em', color: TOKENS.navy, marginBottom: 14 }}>
            Prefer to Talk First?
          </h2>
          <p style={{ fontWeight: 300, fontSize: 17, color: TOKENS.body, maxWidth: 500, margin: '0 auto' }}>
            Discovery calls are free and take 30 minutes. Reach us on whichever channel works for you — we respond fast.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, maxWidth: 860, margin: '0 auto' }}>
          {CHANNELS.map(({ label, sub, href, color, icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                gap: 14, padding: '32px 24px', borderRadius: 16,
                background: '#fff',
                border: '1.5px solid rgba(6,16,43,0.08)',
                textDecoration: 'none', color: TOKENS.navy,
                transition: 'all .25s ease',
                boxShadow: '0 4px 20px rgba(6,16,43,0.04)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = color; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(6,16,43,0.10)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(6,16,43,0.08)'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(6,16,43,0.04)'; }}
            >
              <div style={{ width: 56, height: 56, borderRadius: 16, background: `${color}18`, color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {icon}
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: 17, color: TOKENS.navy, marginBottom: 6 }}>{label}</div>
                <div style={{ fontSize: 13, fontWeight: 300, color: TOKENS.body, lineHeight: 1.5 }}>{sub}</div>
              </div>
            </a>
          ))}
        </div>

        <p style={{ textAlign: 'center', marginTop: 32, fontSize: 13, color: TOKENS.body, fontWeight: 300 }}>
          Or fill the form below — we reply within one business day.
        </p>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .book-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
