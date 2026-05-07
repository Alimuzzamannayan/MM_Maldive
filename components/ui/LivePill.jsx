import { TOKENS } from '../../lib/tokens';

export default function LivePill({ children }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 8,
      padding: '7px 14px 7px 12px', borderRadius: 99,
      background: 'rgba(0,229,192,0.12)',
      border: '1px solid rgba(0,229,192,0.30)',
      color: TOKENS.navy,
      fontFamily: 'JetBrains Mono, monospace',
      fontWeight: 500, fontSize: 11.5, letterSpacing: '0.04em',
    }}>
      <span style={{
        width: 7, height: 7, borderRadius: '50%',
        background: TOKENS.teal,
        animation: 'rbPulse 2s ease-out infinite',
      }} />
      <span>{children}</span>
    </div>
  );
}
