import { Montserrat, Open_Sans } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { AppProvider } from '../components/providers/AppProvider';
import CursorHalo from '../components/ui/CursorHalo';
import '../styles/globals.css';

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

export const metadata = {
  title: 'Metamorphosis MV — Driving Business Transformation',
  description: 'From accounting to app development, we bring 17+ professional services under one roof — built for Maldivian businesses, expats, and the island economy.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <AppProvider>
          <CursorHalo />
          {children}
        </AppProvider>
        <Analytics />
      </body>
    </html>
  );
}
