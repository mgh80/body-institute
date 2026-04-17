'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

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
        <Image
          src="/images/logo.png"
          alt="Body Institute"
          width={380}
          height={100}
          priority
        />
      </div>
      <div className="splash-line" />
      <p className="splash-tagline">Estética · Bienestar · Confianza</p>
    </div>
  );
}