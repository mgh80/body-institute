const services = [
  {
    num: '01',
    name: 'Medicina Estética',
    desc: 'Botox, rellenos dérmicos, bioestimuladores y tratamientos inyectables con resultados naturales y duraderos.',
  },
  {
    num: '02',
    name: 'Tratamientos Faciales',
    desc: 'Hidrafacial, peelings químicos, radiofrecuencia y protocolos personalizados para el rejuvenecimiento facial.',
  },
  {
    num: '03',
    name: 'Remodelación Corporal',
    desc: 'Tecnologías no invasivas para moldear y tonificar el cuerpo: criolipólisis, ultracavitación y más.',
  },
  {
    num: '04',
    name: 'Depilación Láser',
    desc: 'Eliminación permanente del vello con tecnología láser de diodo de última generación, apta para todo tipo de piel.',
  },
  {
    num: '05',
    name: 'Bienestar & Spa',
    desc: 'Masajes terapéuticos, drenaje linfático, tratamientos anticelulíticos y rituales de relajación profunda.',
  },
  {
    num: '06',
    name: 'Consulta Personalizada',
    desc: 'Evaluación integral con nuestros especialistas para diseñar un plan de tratamiento adaptado a tus objetivos.',
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="services-header">
        <div>
          <p className="section-label">Servicios</p>
          <h2 className="section-title">
            Tratamientos<br />
            <em>diseñados</em> para ti
          </h2>
        </div>
        <a href="#contact" className="btn-outline-dark">
          Reservar Consulta
        </a>
      </div>

      <div className="services-grid">
        {services.map((s) => (
          <div key={s.num} className="service-card">
            <span className="service-number">{s.num}</span>
            <h3 className="service-name">{s.name}</h3>
            <p className="service-desc">{s.desc}</p>
            <span className="service-arrow">→</span>
          </div>
        ))}
      </div>
    </section>
  );
}