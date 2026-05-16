'use client';
import { useState } from 'react';

const WA_PATH = 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z';

const VIBER_PATH = 'M11.4 0C6.39.0 2.76 1.72 1.16 5.1-.27 8.11-.35 11.65.97 14.87L.03 19.77c-.1.49.04 1 .37 1.36.27.28.63.43 1 .43.11 0 .23-.01.34-.04l5.1-1.18c1.47.65 3.05.99 4.65.99 5.22 0 9.32-2.62 10.65-6.84.67-2.11.64-4.52-.07-6.72C21.1 5.57 19.46 3.5 17.17 2.1 15.3.91 13.26.02 11.4 0zm.18 2c1.46.01 3.17.7 4.79 1.73 1.85 1.14 3.17 2.83 3.73 4.88.58 2.04.62 4.24-.01 6.08-1.04 3.29-4.35 5.51-8.72 5.51-1.44 0-2.86-.32-4.15-.93-.18-.09-.38-.12-.58-.08l-4.24.98.81-4.1c.06-.27.01-.55-.13-.78C1.78 14 1.2 11.87 1.45 9.62 1.82 6.37 4.16 3.76 7.53 2.5A10.1 10.1 0 0 1 11.58 2zM8.5 5.5c-.33-.01-.68.08-.87.44-.27.52-.83 1.68-.9 1.83-.07.15-.13.39.08.64.21.25.75.86 1.11 1.21.37.36.83.73 1.29.96.46.23.73.21 1 .08.27-.13.54-.53.79-.87.25-.34.5-.38.85-.25.35.13 2.06 1.01 2.38 1.2.32.19.54.28.6.42.09.21.09.94-.27 1.68-.36.74-1.48 1.29-2.16 1.32-.6.03-1.36-.07-4.08-1.32-2.73-1.25-4.4-4.01-4.54-4.2-.13-.19-1-1.36-.95-2.57.05-1.21.69-1.78 1-2.04.31-.26.63-.32.85-.31z';

function FAB({ href, label, tooltip, color, pulse, children }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        width: 52,
        height: 52,
        borderRadius: '50%',
        background: color,
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: hovered ? `0 6px 28px ${color}99` : `0 4px 20px ${color}66`,
        transform: hovered ? 'scale(1.12)' : 'scale(1)',
        transition: 'all .2s ease',
        textDecoration: 'none',
        animation: pulse ? 'wa-pulse 2s ease-in-out infinite' : 'none',
      }}
    >
      {/* Tooltip */}
      <span style={{
        position: 'absolute',
        right: 60,
        top: '50%',
        transform: hovered ? 'translateY(-50%) translateX(0)' : 'translateY(-50%) translateX(6px)',
        opacity: hovered ? 1 : 0,
        transition: 'all .2s ease',
        background: '#111',
        color: '#fff',
        fontSize: 12,
        fontWeight: 600,
        padding: '6px 10px',
        borderRadius: 6,
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
      }}>
        {tooltip}
        <span style={{ position: 'absolute', left: '100%', top: '50%', transform: 'translateY(-50%)', borderWidth: 5, borderStyle: 'solid', borderColor: 'transparent transparent transparent #111' }} />
      </span>
      <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 26, height: 26 }}>
        {children}
      </svg>
    </a>
  );
}

export default function ChatFABs() {
  return (
    <div style={{
      position: 'fixed',
      bottom: 24,
      right: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      zIndex: 999,
    }}>
      <FAB
        href="viber://chat?number=9607417734"
        label="Chat on Viber"
        tooltip="Chat on Viber"
        color="#7360f2"
      >
        <path d={VIBER_PATH} />
      </FAB>
      <FAB
        href="https://wa.me/9607417734"
        label="Chat on WhatsApp"
        tooltip="Chat on WhatsApp"
        color="#25D366"
        pulse
      >
        <path d={WA_PATH} />
      </FAB>
    </div>
  );
}
