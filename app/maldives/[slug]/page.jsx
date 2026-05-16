import { notFound } from 'next/navigation';
import Nav from '../../../components/layout/Nav';
import Footer from '../../../components/layout/Footer';
import LandingPage from '../../../components/programmatic/LandingPage';
import { serviceSchema, breadcrumbSchema, faqSchema, jsonLd } from '../../../lib/schema';
import { LOCATION_PAGES } from '../../../lib/pages-config';

export function generateStaticParams() {
  return LOCATION_PAGES.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const page = LOCATION_PAGES.find((p) => p.slug === params.slug);
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `https://mv.metamorphosis.com.bd/maldives/${page.slug}` },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `https://mv.metamorphosis.com.bd/maldives/${page.slug}`,
    },
  };
}

export default function MaldivesPage({ params }) {
  const page = LOCATION_PAGES.find((p) => p.slug === params.slug);
  if (!page) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(serviceSchema({
            name: page.h1,
            description: page.description,
            url: `/maldives/${page.slug}`,
            serviceType: page.serviceType,
          })),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Maldives', url: '/maldives' },
            { name: page.h1, url: `/maldives/${page.slug}` },
          ])),
        }}
      />
      {page.faqs && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema(page.faqs)) }}
        />
      )}
      <Nav />
      <LandingPage
        tag={`// ${page.keyword}`}
        h1={page.h1}
        intro={page.intro}
        services={page.services}
        faqs={page.faqs}
        ctaText="Get Local Support →"
        ctaHref="/contact"
      />
      <Footer />
    </>
  );
}
