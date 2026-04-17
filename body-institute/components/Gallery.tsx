'use client';

import { useState } from 'react';

// Reemplaza los src con tus imágenes reales
const galleryItems = [
  { src: '/images/gallery-1.png', alt: 'Sala de tratamiento' },
  { src: '/images/gallery-2.png', alt: 'Área de recepción' },
  { src: '/images/gallery-3.png', alt: 'Cabina facial' },
  { src: '/images/gallery-4.png', alt: 'Equipos médicos' },
  { src: '/images/gallery-5.png', alt: 'Sala de espera' },
  { src: '/images/gallery-6.png', alt: 'Tratamiento corporal' },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section className="gallery" id="gallery">
      <div className="gallery-header">
        <p className="section-label">Galería</p>
        <h2 className="section-title">
          Nuestro espacio,<br />
          <em>tu bienestar</em>
        </h2>
      </div>

      <div className="gallery-track">
        {galleryItems.map((item, i) => (
          <div
            key={i}
            className="gallery-item"
            onClick={() => setLightbox(item.src)}
            style={{ cursor: 'zoom-in' }}
          >
            {/* Placeholder con color hasta tener imágenes reales */}
            <div style={{
              width: '100%',
              height: '100%',
              background: i % 2 === 0
                ? `hsl(${10 + i * 8}, 30%, ${82 - i * 3}%)`
                : `hsl(${20 + i * 5}, 25%, ${78 - i * 2}%)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: 300,
              transition: 'transform 0.7s cubic-bezier(0.16,1,0.3,1)',
            }}>
              <img
                src={item.src}
                alt={item.alt}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="gallery-cta">
        <a href="#contact" className="btn-outline-dark">Ver Galería Completa</a>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.92)',
            zIndex: 200,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'zoom-out',
          }}
        >
          <img
            src={lightbox}
            alt="Gallery"
            style={{ maxWidth: '90vw', maxHeight: '90vh', objectFit: 'contain' }}
          />
        </div>
      )}
    </section>
  );
}