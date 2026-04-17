'use client';

import { useState, useRef } from 'react';

export default function VirtualTour() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <section className="virtual-tour" id="virtual-tour">
      {/* VIDEO TOUR — reemplaza con tu video real de recorrido */}
      <video
        ref={videoRef}
        src="/videos/tour.mp4"
        poster="/images/tour-poster.png"
        loop
        playsInline
        style={{ opacity: playing ? 1 : 0.7 }}
      />

      {/* Fallback: imagen si no hay video */}
      {/* <img src="/images/tour-poster.jpg" alt="Virtual Tour" /> */}

      <div className="virtual-tour-overlay" style={{ opacity: playing ? 0.2 : 0.45 }} />

      {!playing && (
        <div className="virtual-tour-content">
          <p className="section-label">Virtual Tour</p>
          <h2 className="section-title">
            Conoce nuestras<br />
            <em>instalaciones</em>
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 200,
            fontSize: 'clamp(0.85rem, 1.5vw, 1rem)',
            color: 'rgba(255,255,255,0.7)',
            marginBottom: 36,
            lineHeight: 1.8,
            maxWidth: 480,
            margin: '0 auto 36px',
          }}>
            Recorre cada espacio de Body Institute desde la comodidad
            de tu hogar. Ambientes diseñados para tu tranquilidad
            y bienestar.
          </p>
          <button className="play-btn" onClick={handlePlay} aria-label="Reproducir tour">
            ▶
          </button>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 200,
            fontSize: '0.7rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.5)',
          }}>
            Ver Recorrido
          </p>
        </div>
      )}
    </section>
  );
}