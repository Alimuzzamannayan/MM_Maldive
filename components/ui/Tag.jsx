import { TOKENS } from '../../lib/tokens';

export default function Tag({ children, color = TOKENS.blue, center = false }) {
  return (
    <span style={{
      fontFamily: 'Open Sans, sans-serif',
      fontWeight: 600, textTransform: 'uppercase',
      letterSpacing: '2.5px', fontSize: 11,
      color, display: 'inline-flex', alignItems: 'center', gap: 8,
      justifyContent: center ? 'center' : 'flex-start',
    }}>
      <span style={{ width: 22, height: 1.5, background: color }} />
      {children}
    </span>
  );
}
