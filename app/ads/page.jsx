import AdLandingLayout from '../../components/ads/AdLandingLayout';

export const metadata = {
  title: 'Free ERP & Business Consultation | Metamorphosis MV',
  description: 'Get a free consultation for Odoo ERP, accounting, expat services, or app development in Maldives. Odoo Silver Partner based in Malé.',
  robots: 'noindex',
};

export default function AdsLanding() {
  return (
    <AdLandingLayout
      tag="// Special Offer"
      headline="Transform Your Maldives Business with Expert ERP & Professional Services"
      subheadline="From Odoo ERP to MIRA-compliant accounting — everything your business needs, under one roof in Malé."
      bullets={[
        'Odoo Silver Partner — certified ERP implementation',
        'MIRA GST & income tax filing handled for you',
        'Work permit & expat visa processing',
        'Custom app & web development',
        'Free consultation — reply within 1 business day',
      ]}
      badge
      source="General Ad"
      urgency="Limited slots available this month — book your free consultation today"
    />
  );
}
