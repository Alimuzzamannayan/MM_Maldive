import AdLandingLayout from '../../components/ads/AdLandingLayout';

export const metadata = {
  title: 'Odoo ERP & Business Services Maldives | Metamorphosis MV',
  description: 'Enterprise-grade Odoo ERP implementation for Maldivian businesses. Certified partner with 10+ years experience. Free consultation available.',
  robots: 'noindex',
};

export default function MicrosoftAdsLanding() {
  return (
    <AdLandingLayout
      tag="// Enterprise ERP · Maldives"
      headline="Enterprise-Grade Odoo ERP for Maldives — Implemented by Certified Experts."
      subheadline="Metamorphosis MV is the only Odoo Silver Partner with a dedicated team serving businesses across Malé and the atolls. We handle ERP, accounting, HR, and MIRA compliance end-to-end."
      bullets={[
        'Odoo Silver Partner — 8 certified functional consultants',
        'Multi-company, multi-currency, multi-location support',
        'MIRA GST, BPT, and payroll compliance built-in',
        'Proven across resorts, trading, construction & services',
        'On-site and remote implementation & training',
      ]}
      badge
      source="Microsoft Ads"
      urgency="Enterprise consultation available — request a scoped proposal within 48 hours"
    />
  );
}
