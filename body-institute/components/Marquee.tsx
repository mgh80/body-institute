export default function Marquee() {
  const items = [
    'Medicina Estética',
    'Tratamientos Faciales',
    'Remodelación Corporal',
    'Bienestar Integral',
    'Tecnología Avanzada',
    'Resultados Naturales',
    'Medicina Estética',
    'Tratamientos Faciales',
    'Remodelación Corporal',
    'Bienestar Integral',
    'Tecnología Avanzada',
    'Resultados Naturales',
  ];

  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {items.map((item, i) => (
          <span key={i} className="marquee-item">{item}</span>
        ))}
      </div>
    </div>
  );
}