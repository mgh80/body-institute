import Image from 'next/image';

export default function About() {
  return (
    <section className="about" id="about">
      {/* TEXT */}
      <div className="about-text">
        <p className="section-label">Quiénes Somos</p>
        <h2 className="section-title">
          Un espacio donde<br />
          la <em>confianza</em><br />
          se transforma
        </h2>

        <div style={{ marginTop: 40 }}>
          <p>
            Body Institute es una clínica estética de referencia, fundada
            sobre la convicción de que cada persona merece sentirse plena
            en su propio cuerpo. Nuestro equipo de especialistas combina
            formación médica de alto nivel con una mirada sensible hacia
            la estética natural.
          </p>
          <p>
            Ofrecemos un entorno de confianza, tecnología de última
            generación y protocolos personalizados que respetan tu
            individualidad. Aquí, el bienestar no es un lujo — es
            tu derecho.
          </p>
          <a href="#services" className="btn-outline-dark" style={{ marginTop: 16 }}>
            Nuestros Servicios
          </a>
        </div>

        <div className="about-stats">
          <div>
            <div className="about-stat-num">12+</div>
            <div className="about-stat-label">Años de experiencia</div>
          </div>
          <div>
            <div className="about-stat-num">5K+</div>
            <div className="about-stat-label">Pacientes satisfechos</div>
          </div>
          <div>
            <div className="about-stat-num">30+</div>
            <div className="about-stat-label">Tratamientos disponibles</div>
          </div>
          <div>
            <div className="about-stat-num">8</div>
            <div className="about-stat-label">Especialistas certificados</div>
          </div>
        </div>
      </div>

      {/* VISUAL */}
      <div className="about-visual">
        {/* Reemplaza con imágenes reales de la clínica */}
        <img
          src="/images/about-main.png"
          alt="Body Institute interior"
          className="about-image-main"
          style={{ background: '#e8d5cc' }}
        />
        <img
          src="/images/about-accent.png"
          alt="Equipo médico"
          className="about-image-accent"
          style={{ background: '#f0ddd5' }}
        />
      </div>
    </section>
  );
}