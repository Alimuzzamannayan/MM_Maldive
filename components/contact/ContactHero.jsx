import Reveal from '../ui/Reveal';
import Tag from '../ui/Tag';

const STEPS = [
  ['01', '📨', 'You reach out', "Drop a note via the form, WhatsApp, Viber or email. No salesy gatekeeping — your message lands directly with our team."],
  ['02', '🔍', 'We listen first', "A specialist reviews what you've shared and prepares thoughtful questions. We schedule a 30-minute discovery call at your convenience."],
  ['03', '📝', 'You get a real plan', 'Within 48 hours of the call, you receive a written scope, timeline and transparent quote — tailored to your project, not a template.'],
];

export default function ContactHero() {
  return (
    <section className="contact-hero">
      <div className="rb-container">
        <Tag>// Contact</Tag>
        <h1>Let&apos;s build <span className="accent">something remarkable</span> together.</h1>
        <p>Tell us about your project — discovery calls are free, confidential and never templated. We come back within 48 hours with a clear scope and realistic timeline.</p>
        <div className="steps-grid">
          {STEPS.map(([n, ico, t, d]) => (
            <Reveal key={n}>
              <div className="step-card">
                <div className="step-icon">{ico}</div>
                <div className="step-num">// STEP {n}</div>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
