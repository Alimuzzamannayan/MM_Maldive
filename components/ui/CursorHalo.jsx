'use client';
import { useApp } from '../providers/AppProvider';
import { TOKENS } from '../../lib/tokens';

export default function CursorHalo() {
  const { cursor } = useApp();
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        left: cursor.x,
        top: cursor.y,
        width: cursor.hovering ? 80 : 28,
        height: cursor.hovering ? 80 : 28,
        marginLeft: cursor.hovering ? -40 : -14,
        marginTop: cursor.hovering ? -40 : -14,
        borderRadius: '50%',
        border: `1.5px solid ${TOKENS.teal}`,
        background: cursor.hovering ? 'rgba(0,229,192,0.08)' : 'transparent',
        pointerEvents: 'none',
        zIndex: 200,
        transition: 'width .25s ease, height .25s ease, margin .25s ease, background .25s ease',
        mixBlendMode: 'difference',
      }}
    />
  );
}
