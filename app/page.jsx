import Nav from '../components/layout/Nav';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import OdooStrip from '../components/home/OdooStrip';
import Why from '../components/home/Why';
import FAQ from '../components/home/FAQ';
import ERPRescue from '../components/home/ERPRescue';
import CTA from '../components/home/CTA';
import TrustedBy from '../components/home/TrustedBy';
import Footer from '../components/layout/Footer';
import { organizationSchema, faqSchema, jsonLd } from '../lib/schema';
import { HOME_FAQS } from '../lib/faq-data';

export const metadata = {
  alternates: { canonical: 'https://mv.metamorphosis.com.bd' },
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema(HOME_FAQS)) }} />
      <Nav />
      <Hero />
      <Services />
      <TrustedBy />
      <OdooStrip />
      <Why />
      <FAQ />
      <ERPRescue />
      <CTA />
      <Footer />
    </>
  );
}
