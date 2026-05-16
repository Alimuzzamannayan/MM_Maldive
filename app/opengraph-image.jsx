import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Metamorphosis MV — Business Services Maldives';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%', height: '100%',
          background: 'linear-gradient(135deg, #06102B 0%, #0d2d5e 100%)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          padding: '60px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ color: '#00E5C0', fontSize: 14, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: 24, fontWeight: 600 }}>
          ODOO SILVER PARTNER · MALÉ, MALDIVES
        </div>
        <div style={{ color: '#ffffff', fontSize: 56, fontWeight: 900, textAlign: 'center', lineHeight: 1.1, marginBottom: 20, letterSpacing: '-1px' }}>
          Metamorphosis MV
        </div>
        <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 24, fontWeight: 300, textAlign: 'center', maxWidth: 700 }}>
          Business Services · Odoo ERP · MIRA Accounting · Expat Visa · App Development
        </div>
        <div style={{ marginTop: 40, color: '#00E5C0', fontSize: 16, fontWeight: 600 }}>
          mv.metamorphosis.com.bd
        </div>
      </div>
    ),
    { ...size }
  );
}
