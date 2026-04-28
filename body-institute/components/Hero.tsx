'use client';

import { useEffect, useRef } from 'react';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.4;
    }
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-video-wrap">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-poster.png"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="hero-overlay" />

      {/* Logo centrado grande sobre el video */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 3,
        textAlign: 'center',
        opacity: 0,
        animation: 'heroReveal 1.2s cubic-bezier(0.16,1,0.3,1) 2.6s forwards',
      }}>
        <img
          src="/images/logo.png"
          alt="Body Institute"
          style={{
            width: 'clamp(280px, 35vw, 520px)',
            height: 'auto',
            filter: 'brightness(0) invert(1)',
            display: 'block',
          }}
        />
      </div>

      <div className="hero-content">
        <p className="hero-eyebrow">Body Institute · Boutique Estética</p>
        <h1 className="hero-title">
          El arte de<br />
          <em>realzar</em> tu<br />
          belleza
        </h1>
        <p className="hero-subtitle">
          Tratamientos de vanguardia diseñados para ti.
          Donde la ciencia médica y la estética se unen
          para transformar tu bienestar.
        </p>
        <div className="hero-actions">
          <a href="#services" className="btn-primary">Ver Servicios</a>
          <a href="#about" className="btn-outline-white">Conocernos</a>
        </div>
      </div>

      {/* ECG vertical lineal hacia arriba */}
      <div className="hero-scroll">
        <svg
          className="hero-scroll-ecg"
          viewBox="0 0 24 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="ecg-path"
            d="M12,0 L12,18 L6,26 L18,42 L8,54 L16,60 L12,66 L12,80
               L12,98 L6,106 L18,122 L8,134 L16,140 L12,146 L12,160
               L12,178 L6,186 L18,202"
          />
        </svg>
        <span>Scroll</span>
      </div>
    </section>
  );
}