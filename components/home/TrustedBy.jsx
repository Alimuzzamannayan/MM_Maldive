'use client';
import { TOKENS } from '../../lib/tokens';

const CLIENT_LOGOS = [
  '71tv-B77KBqPi.webp','Adarsha-DYEgjPz-.webp','agami-BdteQwhp.webp',
  'Agile-Minds-Solutions-Limited-KXHPVGAW.webp','Alchem-Enterprise-yFVWPXM4.webp',
  'Anan-Enterprise-DsdtrNaW.webp','ATM-C43mqZwm.webp','BAATHIGHAR-fKqAnQjy.webp',
  'BASB-kvZS5W0a.webp','Bhaiya-Housing-Limited-MXFwY_06.webp','Celestial-Tech-Limited-DZzj3qiM.webp',
  'Colorjet-DltjT9lv.webp','Cross-World-c2FDniqx.webp','dhaka-papers-C7ZMe_DF.webp',
  'EASY-DHAKA-CkpSMZR_.webp','ExpoPro-_5MfWYv_.webp','Friendship-B23j0Mvj.webp',
  'Grameen-Danone-CRlvfMkV.webp','GREEN-TIGER-WBSf01dz.webp','IDIYA-DGn4nL9Y.webp',
  'IPTEC-CWeMy2wR.webp','Jabed-Food-g1VIrIRP.webp','Metakave-Ddd9PSdN.webp',
  'Opsora-BT7t3gea.webp','Premier-1888-DjRSDwUo.webp','RD-Industries-Limited-DHfusVu_.webp',
  'Surge-Engineering-uTGixA15.webp','Tetra-Private-Limited-DUwX41iY.webp','Tree-DSe-rULV.webp','ZESS-D5N8nPbN.webp',
];

const MEDIA_LOGOS = [
  { file: 'Bangladesh-protidin.webp', alt: 'Bangladesh Protidin' },
  { file: 'Brand-Practitioners-Bangladesh.webp', alt: 'Brand Practitioners Bangladesh' },
  { file: 'TBS-news.webp', alt: 'TBS News' },
  { file: 'Times-of-Bangladesh.webp', alt: 'Times of Bangladesh' },
  { file: 'bd24live.webp', alt: 'BD24 Live' },
  { file: 'bonik-barta.png', alt: 'Bonik Barta' },
  { file: 'bss-news.webp', alt: 'BSS News' },
  { file: 'desh-rupantor.webp', alt: 'Desh Rupantor' },
  { file: 'daily-star.webp', alt: 'The Daily Star' },
  { file: 'daily-campus.webp', alt: 'The Daily Campus' },
  { file: 'ittefaq.webp', alt: 'Daily Ittefaq' },
];

export default function TrustedBy() {
  return (
    <>
      {/* Client logo marquee */}
      <section style={{ padding: '56px 0', background: '#fff', borderTop: '1px solid rgba(6,16,43,0.06)', borderBottom: '1px solid rgba(6,16,43,0.06)', overflow: 'hidden' }}>
        <div className="rb-container" style={{ marginBottom: 28 }}>
          <p style={{ textAlign: 'center', fontFamily: 'JetBrains Mono,monospace', fontSize: 11, fontWeight: 500, letterSpacing: '2.5px', textTransform: 'uppercase', color: 'rgba(6,16,43,0.4)' }}>
            Trusted by 60+ Enterprise Clients Globally
          </p>
        </div>
        <div className="rb-marquee-track">
          <div className="rb-marquee-inner">
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, i) => (
              <img
                key={i}
                src={`/assets/clients/${logo}`}
                alt=""
                aria-hidden="true"
                style={{ height: 32, width: 'auto', objectFit: 'contain', filter: 'grayscale(100%) opacity(0.55)', flexShrink: 0 }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured In media */}
      <section style={{ padding: '48px 0', background: '#fafafa', borderBottom: '1px solid rgba(6,16,43,0.06)' }}>
        <div className="rb-container">
          <p style={{ textAlign: 'center', fontFamily: 'JetBrains Mono,monospace', fontSize: 11, fontWeight: 500, letterSpacing: '2.5px', textTransform: 'uppercase', color: 'rgba(6,16,43,0.4)', marginBottom: 28 }}>
            As Featured In the Media
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'center', alignItems: 'center' }}>
            {MEDIA_LOGOS.map(({ file, alt }) => (
              <img
                key={file}
                src={`/assets/media/${file}`}
                alt={alt}
                style={{ height: 28, width: 'auto', objectFit: 'contain', filter: 'grayscale(100%) opacity(0.5)' }}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
