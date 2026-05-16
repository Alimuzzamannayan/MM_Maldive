import { Montserrat, Open_Sans, JetBrains_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { AppProvider } from '../components/providers/AppProvider';
import CursorHalo from '../components/ui/CursorHalo';
import ChatFABs from '../components/layout/WhatsAppFAB';
import '../styles/globals.css';
import { localBusinessSchema, organizationSchema, websiteSchema, jsonLd } from '../lib/schema';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '600', '700', '900'],
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  weight: ['300', '400', '600', '700'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  weight: ['400', '500'],
});

export const metadata = {
  title: 'Business Services Maldives | Odoo ERP, Accounting & Consulting | Metamorphosis MV',
  description: 'Maldives\' leading multi-service company. Odoo Silver Partner offering ERP implementation, MIRA-compliant accounting, expat & visa services, app development and business consulting in Malé.',
  openGraph: {
    title: 'Business Services Maldives | Odoo ERP, Accounting & Consulting | Metamorphosis MV',
    description: 'Odoo Silver Partner. MIRA-compliant accounting. Expat visa services. App development. 17+ services for Maldivian businesses.',
    url: 'https://mv.metamorphosis.com.bd',
    siteName: 'Metamorphosis MV',
    images: [{ url: 'https://mv.metamorphosis.com.bd/assets/logo-full.png', width: 375, height: 100, alt: 'Metamorphosis MV' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Metamorphosis MV — Business Services Maldives',
    description: 'Odoo ERP, accounting, expat visa, app development — Malé, Maldives.',
    images: ['https://mv.metamorphosis.com.bd/assets/logo-full.png'],
  },
  metadataBase: new URL('https://mv.metamorphosis.com.bd'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="alternate" hrefLang="en" href="https://mv.metamorphosis.com.bd" />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(localBusinessSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(websiteSchema()) }}
        />
        <AppProvider>
          <CursorHalo />
          {children}
          <ChatFABs />
        </AppProvider>
        <Analytics />
      </body>
    </html>
  );
}
