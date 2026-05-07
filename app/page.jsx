import Nav from '../components/layout/Nav';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import OdooStrip from '../components/home/OdooStrip';
import Why from '../components/home/Why';
import FAQ from '../components/home/FAQ';
import CTA from '../components/home/CTA';
import Footer from '../components/layout/Footer';
import WhatsAppFAB from '../components/layout/WhatsAppFAB';

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Services />
      <OdooStrip />
      <Why />
      <FAQ />
      <CTA />
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
