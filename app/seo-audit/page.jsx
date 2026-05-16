import AdLandingLayout from '../../components/ads/AdLandingLayout';

export const metadata = {
  title: 'Free SEO Audit for Maldives Businesses | Metamorphosis MV',
  description: 'Get a free SEO and digital audit for your Maldives business website. We identify gaps in search visibility, structured data, and local rankings. Limited slots.',
  alternates: { canonical: 'https://mv.metamorphosis.com.bd/seo-audit' },
};

export default function SeoAuditLanding() {
  return (
    <AdLandingLayout
      tag="// Free Offer · Limited Slots"
      headline="Get a Free SEO & Digital Audit for Your Maldives Business Website."
      subheadline="We audit your site for search visibility, structured data, local ranking gaps, and AI search (ChatGPT / Perplexity) citations. You get a written report — no strings attached."
      bullets={[
        'Google ranking gaps vs. your local competitors',
        'Schema markup & structured data check',
        'AI search visibility (ChatGPT, Perplexity, Google AI)',
        'Core Web Vitals & mobile performance review',
        'Actionable fixes you can implement immediately',
        '100% free — delivered within 3 business days',
      ]}
      source="SEO Audit Offer"
      urgency="Only 10 free audits available per month — claim yours now"
    />
  );
}
