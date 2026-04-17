import Image from 'next/image';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="contact">
      <div className="footer-top">
        <div className="footer-brand">
          <Image src="/images/logo.png" alt="Body Institute" width={160} height={42} />
          <p style={{ marginTop: 24 }}>
            Clínica estética de referencia comprometida con tu
            bienestar, tu confianza y la excelencia médica.
          </p>
          <p style={{ marginTop: 16, color: 'rgba(255,255,255,0.6)', fontSize: '0.82rem' }}>
            📍 Bogotá, Colombia<br />
            📞 +57 (1) 000-0000<br />
            ✉️ info@bodyinstitute.com
          </p>
        </div>

        <div className="footer-col">
          <p className="footer-col-title">Servicios</p>
          <ul>
            <li><a href="#services">Medicina Estética</a></li>
            <li><a href="#services">Tratamientos Faciales</a></li>
            <li><a href="#services">Remodelación Corporal</a></li>
            <li><a href="#services">Depilación Láser</a></li>
            <li><a href="#services">Bienestar & Spa</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <p className="footer-col-title">Clínica</p>
          <ul>
            <li><a href="#about">Quiénes Somos</a></li>
            <li><a href="#virtual-tour">Virtual Tour</a></li>
            <li><a href="#gallery">Galería</a></li>
            <li><a href="#careers">Trabaja con Nosotros</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <p className="footer-col-title">Horarios</p>
          <ul>
            <li><a href="#">Lun – Vie: 8am – 7pm</a></li>
            <li><a href="#">Sábado: 9am – 5pm</a></li>
            <li><a href="#">Domingo: Cerrado</a></li>
          </ul>
          <div style={{ marginTop: 32 }}>
            <p className="footer-col-title">Síguenos</p>
            <ul>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">TikTok</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">
          © {year} Body Institute. Todos los derechos reservados.
        </p>
        <div className="footer-social">
          <a href="#">Política de Privacidad</a>
          <a href="#">Términos y Condiciones</a>
        </div>
      </div>
    </footer>
  );
}