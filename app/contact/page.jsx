import Nav from '../../components/layout/Nav';
import ContactHero from '../../components/contact/ContactHero';
import CalendlyEmbed from '../../components/contact/CalendlyEmbed';
import ContactForm from '../../components/contact/ContactForm';
import ContactLocations from '../../components/contact/ContactLocations';
import Footer from '../../components/layout/Footer';

export const metadata = {
  title: 'Contact — Metamorphosis MV',
  description: "Tell us about your project. Discovery calls are free, confidential and never templated. We'll reply within 48 hours.",
  alternates: { canonical: 'https://mv.metamorphosis.com.bd/contact' },
};

export default function Contact() {
  return (
    <>
      <Nav />
      <ContactHero />
      <CalendlyEmbed />
      <ContactForm />
      <ContactLocations />
      <Footer />
    </>
  );
}
