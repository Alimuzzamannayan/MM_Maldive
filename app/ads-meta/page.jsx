import AdLandingLayout from '../../components/ads/AdLandingLayout';

export const metadata = {
  title: 'Is Your Maldives Business Running on Spreadsheets? | Metamorphosis MV',
  description: 'Odoo ERP and professional services for Maldivian businesses. Accounting, HR, inventory, and MIRA compliance — all in one platform.',
  robots: 'noindex',
};

export default function MetaAdsLanding() {
  return (
    <AdLandingLayout
      tag="// Grow Your Business"
      headline="Still Running Your Maldives Business on Spreadsheets?"
      subheadline="Join 60+ businesses that switched to Odoo ERP. Automate your MIRA filings, payroll, inventory, and reporting — all from one platform built for the island economy."
      bullets={[
        'Stop the month-end scramble — GST returns in minutes',
        'Manage staff & work permits without the headache',
        'Real-time inventory across all your locations',
        'Built for resorts, guesthouses, trading & construction',
        'Talk to a real consultant — not a bot',
      ]}
      badge
      source="Meta Ads"
      urgency="Book your free slot this week — our consultants fill up fast"
    />
  );
}
