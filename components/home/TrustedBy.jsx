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
  { file: 'Bangladesh-protidin.webp', alt: 'Bangladesh Protidin', href: 'https://www.bd-pratidin.com/campus-online/2025/11/25/1184063' },
  { file: 'Brand-Practitioners-Bangladesh.webp', alt: 'Brand Practitioners Bangladesh', href: 'https://brandpractitioners.com/metamorphosis-ltd-emerged-the-partnership-with-classic-chemical-industries-ltd-to-ensure-optimized-operation-across-country/' },
  { file: 'TBS-news.webp', alt: 'TBS News', href: 'https://www.tbsnews.net/economy/corporates/metamorphosis-ltd-implement-odoo-erp-classic-chemical-industries-1112991' },
  { file: 'Times-of-Bangladesh.webp', alt: 'Times of Bangladesh', href: 'https://tob.news/iubat-partners-with-odoo-on-erp-education-program/' },
  { file: 'amar-desh.webp', alt: 'Amar Desh', href: 'https://www.dailyamardesh.com/education/campus/amd3su0ftgahi' },
  { file: 'bd24live.webp', alt: 'BD24 Live', href: 'https://www.bd24live.com/bangla/778448' },
  { file: 'bonik-barta.png', alt: 'Bonik Barta', href: 'https://www.bonikbarta.com/economy/r6XLrH3cczH6E0Cy' },
  { file: 'bss-news.webp', alt: 'BSS News', href: 'https://www.bssnews.net/news/334943' },
  { file: 'jagojanata.webp', alt: 'Jago Janata', href: 'https://dailyjagojanata.com/' },
  { file: 'desh-rupantor.webp', alt: 'Desh Rupantor', href: 'https://www.deshrupantor.com/641444/' },
  { file: 'deshkal-news.webp', alt: 'Deshkal News', href: 'https://bangla.deshkalnews.com/education/33853' },
  { file: 'ittefaq.webp', alt: 'Daily Ittefaq', href: 'https://www.ittefaq.com.bd/727063/' },
  { file: 'daily-campus.webp', alt: 'The Daily Campus', href: 'https://thedailycampus.com/private-university/228913' },
  { file: 'daily-star.webp', alt: 'The Daily Star', href: 'https://www.thedailystar.net/business/organisation-news/press-releases/news/iubat-signs-mou-odoo-launch-industry-focused-erp' },
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
                style={{ height: 32, width: 'auto', objectFit: 'contain', flexShrink: 0 }}
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
            {MEDIA_LOGOS.map(({ file, alt, href }) => (
              <a key={file} href={href} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', opacity: 0.75, transition: 'opacity .2s ease' }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
                onMouseLeave={(e) => e.currentTarget.style.opacity = 0.75}
              >
                <img src={`/assets/media/${file}`} alt={alt} style={{ height: 28, width: 'auto', objectFit: 'contain' }} />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
