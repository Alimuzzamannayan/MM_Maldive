import AdLandingLayout from '../../components/ads/AdLandingLayout';

export const metadata = {
  title: 'Odoo ERP Implementation Maldives | Free Consultation | Metamorphosis MV',
  description: 'Certified Odoo Silver Partner in Maldives. Free ERP consultation. MIRA-compliant accounting, inventory, HR & payroll for Maldivian businesses.',
  robots: 'noindex',
};

export default function GoogleAdsLanding() {
  return (
    <AdLandingLayout
      tag="// Odoo ERP · Maldives"
      headline="Odoo ERP Implementation for Maldivian Businesses — Done Right."
      subheadline="Certified Silver Partner. MIRA-compliant setup. Local support in Malé. 60+ enterprise clients globally."
      bullets={[
        'Full Odoo ERP — accounting, inventory, HR, POS, CRM',
        'MIRA GST & BPT filing automated from day one',
        'Resort, trading, construction & guesthouse specialists',
        'Implementation in 8–12 weeks with dedicated support',
        'Free discovery call + written scope within 48 hours',
      ]}
      badge
      source="Google Ads"
      urgency="Free ERP Consultation — Limited to 5 businesses per month"
    />
  );
}
