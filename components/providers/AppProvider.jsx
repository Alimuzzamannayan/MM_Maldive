'use client';
import { createContext, useCallback, useContext, useEffect, useState } from 'react';

export const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [cursor, setCursor] = useState({ x: -100, y: -100, hovering: false });

  useEffect(() => {
    const onMove = (e) => setCursor((c) => ({ ...c, x: e.clientX, y: e.clientY }));
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const setHovering = useCallback((v) => setCursor((c) => ({ ...c, hovering: v })), []);

  return (
    <AppContext.Provider value={{ cursor, setHovering }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
