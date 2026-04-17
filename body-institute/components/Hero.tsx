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

      <div className="hero-content">
        <p className="hero-eyebrow">Body Institute · Clínica Estética</p>
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

      {/* ✅ ECG reemplaza la línea vieja */}
      <div className="hero-scroll">
        <svg
          className="hero-scroll-ecg"
          viewBox="0 0 60 28"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="ecg-path"
            d="M0,14 L8,14 L12,14 L15,4 L18,24 L21,10 L24,18 L27,14 L36,14 L60,14"
          />
        </svg>
        <span>Scroll</span>
      </div>
    </section>
  );
}