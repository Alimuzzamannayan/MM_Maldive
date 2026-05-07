import Tag from '../ui/Tag';

const PHONE_RAW = '+9607417734';
const PHONE_DISPLAY = '+960 741 7734';
const EMAIL = 'marketing@metamorphosis.com.bd';

export default function ContactLocations() {
  return (
    <section className="contact-footer">
      <div className="rb-container">
        <Tag>// Where We Work</Tag>
        <h2 style={{ fontWeight: 900, fontSize: 32, letterSpacing: '-0.02em', margin: '12px 0 32px' }}>Reach us through any channel.</h2>
        <div className="cf-grid">
          <div className="cf-card">
            <h4>Headquarters</h4>
            <p>Malé, Maldives<br />Open Mon–Sat, 9:00 — 18:00 MVT</p>
          </div>
          <div className="cf-card">
            <h4>Phone / WhatsApp / Viber</h4>
            <p><a href={`tel:${PHONE_RAW}`}>{PHONE_DISPLAY}</a><br />One number, three channels — pick what works for you.</p>
          </div>
          <div className="cf-card">
            <h4>Email</h4>
            <p><a href={`mailto:${EMAIL}`}>{EMAIL}</a><br />For partnerships, briefs and detailed inquiries.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
