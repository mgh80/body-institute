'use client';

import { useEffect, useState } from 'react';

export default function Splash({ onComplete }: { onComplete: () => void }) {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExiting(true);
      setTimeout(onComplete, 900);
    }, 2800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`splash-overlay${exiting ? ' splash-exiting' : ''}`}>
      <div className="splash-logo-wrap">
        <img
          src="/images/logo.png"
          alt="Body Institute"
          style={{
            width: 'clamp(320px, 55vw, 640px)',
            height: 'auto',
            display: 'block',
          }}
        />
      </div>
      <div className="splash-line" />
      <p className="splash-tagline">Estética · Bienestar · Confianza</p>
    </div>
  );
}