import Reveal from '../ui/Reveal';
import Tag from '../ui/Tag';
import ServiceExplorer from '../ui/ServiceExplorer';
import { TOKENS } from '../../lib/tokens';

export default function Services() {
  return (
    <section className="rb-band rb-services" id="services">
      <div className="rb-container">
        <Reveal className="rb-section-head">
          <Tag center>What We Do</Tag>
          <h2>Everything Your Business <span style={{ color: TOKENS.teal }}>Needs</span></h2>
          <p>Browse our service catalog by category — every offering engineered for the realities of doing business in the Maldives.</p>
        </Reveal>
        <Reveal>
          <ServiceExplorer />
        </Reveal>
      </div>
    </section>
  );
}
