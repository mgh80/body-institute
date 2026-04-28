'use client';

import { useRef, useState } from 'react';

const team = [
  {    
    name: 'Dr. Andrés Mejía',
    role: 'Médico Estético',
    specialty: 'Medicina Regenerativa',
    img: '/images/team-1.png',
  },
  {
    name: 'Dra. Valentina Ríos',
    role: 'Cirujana Plástica',
    specialty: 'Cirugía Facial & Corporal',
    img: '/images/team-2.png',
  },
  {
    name: 'Dra. Camila Torres',
    role: 'Especialista Facial',
    specialty: 'Tratamientos Anti-Edad',
    img: '/images/team-3.png',
  },
  {
    name: 'Dra. Sofía Herrera',
    role: 'Dermatóloga',
    specialty: 'Dermatología Estética',
    img: '/images/team-4.png',
  },
  {
    name: 'Dr. Felipe Castro',
    role: 'Médico Estético',
    specialty: 'Remodelación Corporal',
    img: '/images/team-5.png',
  },
  {
    name: 'Dra. Laura Gómez',
    role: 'Esteticista Clínica',
    specialty: 'Tratamientos Corporales',
    img: '/images/team-6.png',
  },
];

export default function Team() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const visible = 4;

  const scroll = (dir: 'left' | 'right') => {
    const next = dir === 'right'
      ? Math.min(activeIndex + 1, team.length - visible)
      : Math.max(activeIndex - 1, 0);
    setActiveIndex(next);
    if (trackRef.current) {
      const cardWidth = trackRef.current.children[0]?.clientWidth + 24 || 0;
      trackRef.current.scrollTo({ left: next * cardWidth, behavior: 'smooth' });
    }
  };

  return (
    <section className="team" id="team">
      <div className="team-header">
  <div className="team-header-inner">
    <div>
      <p className="section-label">Nuestro Equipo</p>
      <h2 className="section-title">
        Especialistas que<br />
        <em>transforman</em> vidas
      </h2>
    </div>
    <p className="team-subtitle">
      Profesionales certificados con años de experiencia y una pasión
      genuina por realzar tu bienestar y confianza. Cada miembro de
      nuestro equipo está comprometido con resultados naturales,
      seguros y duraderos.
    </p>
  </div>
</div>

      <div className="team-carousel-wrap">
        {/* Flecha izquierda */}
        <button
          className="team-arrow team-arrow-left"
          onClick={() => scroll('left')}
          disabled={activeIndex === 0}
          aria-label="Anterior"
        >
          ←
        </button>

        {/* Track */}
        <div className="team-track" ref={trackRef}>
          {team.map((member, i) => (
            <div className="team-card" key={i}>
              <div className="team-img-wrap">
                <img
                  src={member.img}
                  alt={member.name}
                  className="team-img"
                  onError={(e) => {
                    // Placeholder si no hay imagen
                    const el = e.target as HTMLImageElement;
                    el.style.display = 'none';
                    if (el.parentElement) {
                      el.parentElement.style.background =
                        `hsl(${10 + i * 20}, 25%, ${82 - i * 3}%)`;
                    }
                  }}
                />
              </div>
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-specialty">{member.specialty}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Flecha derecha */}
        <button
          className="team-arrow team-arrow-right"
          onClick={() => scroll('right')}
          disabled={activeIndex >= team.length - visible}
          aria-label="Siguiente"
        >
          →
        </button>
      </div>

      {/* Dots */}
      <div className="team-dots">
        {Array.from({ length: team.length - visible + 1 }).map((_, i) => (
          <button
            key={i}
            className={`team-dot${i === activeIndex ? ' active' : ''}`}
            onClick={() => {
              setActiveIndex(i);
              if (trackRef.current) {
                const cardWidth = trackRef.current.children[0]?.clientWidth + 24 || 0;
                trackRef.current.scrollTo({ left: i * cardWidth, behavior: 'smooth' });
              }
            }}
            aria-label={`Ir a ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}