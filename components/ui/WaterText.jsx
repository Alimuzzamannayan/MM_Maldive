import { TOKENS } from '../../lib/tokens';

export default function WaterText({ children, enabled = true }) {
  if (!enabled) return <span style={{ color: TOKENS.navy }}>{children}</span>;

  return (
    <>
      <svg width="0" height="0" style={{ position: 'absolute', overflow: 'hidden' }} aria-hidden="true">
        <defs>
          <filter id="wt-turb" x="-5%" y="-30%" width="110%" height="160%" colorInterpolationFilters="sRGB">
            <feTurbulence type="fractalNoise" baseFrequency="0.018 0.06" numOctaves="3" seed="2" result="noise">
              <animate attributeName="baseFrequency" values="0.018 0.06;0.022 0.08;0.018 0.06" dur="6s" repeatCount="indefinite" />
              <animate attributeName="seed" values="2;8;2" dur="12s" repeatCount="indefinite" />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>
      <span
        className="water-text"
        style={{
          display: 'inline-block',
          background: 'linear-gradient(270deg, #00E5C0, #0099CC, #0066AA, #017E84, #0099CC, #00E5C0)',
          backgroundSize: '400% 400%',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          color: 'transparent',
          animation: 'oceanShift 5s ease infinite',
          filter: 'url(#wt-turb)',
        }}
      >
        {children}
      </span>
    </>
  );
}
