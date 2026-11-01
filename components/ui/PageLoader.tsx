'use client';

import { useEffect, useState } from 'react';

export default function PageLoader() {
  const [show, setShow] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = window.setTimeout(() => setFadeOut(true), 1000);
    const removeTimer = window.setTimeout(() => setShow(false), 1400);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-navy-950 transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
      aria-live="polite"
      aria-busy="true"
    >
      <div className="relative flex h-28 w-28 items-center justify-center">
        <div className="absolute inset-0 rounded-sm border border-gold-400/80 animate-spin [animation-duration:1.4s]" />
        <div
          className="absolute inset-4 rounded-sm border border-gold-300/80"
          style={{
            background:
              'repeating-linear-gradient(180deg, rgba(240,213,138,1) 0 8px, rgba(11,18,38,0.96) 8px 18px)',
            boxShadow: '0 0 24px rgba(212,164,55,0.25)',
          }}
        />
        <div className="absolute inset-[10px] border border-navy-950/80 bg-navy-900/90" />
        <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-navy-950/80" />
      </div>
    </div>
  );
}
