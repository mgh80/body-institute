const positions = [
  { title: 'Médico Estético', dept: 'Área Médica' },
  { title: 'Enfermera Especialista', dept: 'Área Médica' },
  { title: 'Esteticista Certificada', dept: 'Tratamientos' },
  { title: 'Recepcionista / Asistente', dept: 'Administración' },
  { title: 'Marketing Digital', dept: 'Comunicaciones' },
];

export default function Careers() {
  return (
    <section className="careers" id="careers">
      {/* TEXT */}
      <div className="careers-text">
        <p className="section-label">Trabaja con Nosotros</p>
        <h2 className="section-title">
          Crece con<br />
          el mejor<br />
          <em>equipo</em>
        </h2>
        <p>
          En Body Institute creemos que un equipo apasionado
          es la base de resultados extraordinarios. Buscamos
          profesionales comprometidos, empáticos y con vocación
          por la excelencia.
        </p>
        <a
          href="mailto:careers@bodyinstitute.com"
          className="btn-outline-white"
        >
          Enviar Hoja de Vida
        </a>
      </div>

      {/* POSITIONS */}
      <div>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontWeight: 200,
          fontSize: '0.65rem',
          letterSpacing: '0.35em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.3)',
          marginBottom: 24,
        }}>
          Vacantes Abiertas
        </p>
        <div className="careers-positions">
          {positions.map((pos, i) => (
            <div key={i} className="career-item">
              <div>
                <div className="career-title">{pos.title}</div>
                <div className="career-dept">{pos.dept}</div>
              </div>
              <span className="career-arrow">→</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}