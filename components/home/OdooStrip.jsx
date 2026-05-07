import MagneticButton from '../ui/MagneticButton';
import { TOKENS } from '../../lib/tokens';

export default function OdooStrip() {
  return (
    <section className="rb-odoo-strip">
      <div className="rb-container rb-odoo-inner">
        <div className="rb-odoo-left">
          <img src="/assets/odoo-silver-partner.png" alt="Odoo Silver Partner" />
        </div>
        <div className="rb-odoo-mid">
          <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: 11, fontWeight: 500, letterSpacing: 2, textTransform: 'uppercase', color: TOKENS.odooPrimary, marginBottom: 8 }}>// Certified Partnership</div>
          <h3>Odoo Silver Partner Company.</h3>
          <p>Implementation, customization and ongoing support for Odoo ERP — accounting, inventory, HR, CRM and more, delivered by certified specialists.</p>
        </div>
        <div>
          <MagneticButton href="/contact" variant="odoo">Talk to an Odoo Specialist →</MagneticButton>
        </div>
      </div>
    </section>
  );
}
