'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { label: 'Quiénes Somos', href: '#about' },
  { label: 'Servicios', href: '#services' },
  { label: 'Boutique Tour', href: '#virtual-tour' },
  { label: 'Galería', href: '#gallery' },
  { label: 'Médicos', href: '#team' },
  { label: 'Trabaja con Nosotros', href: '#careers' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <Link href="/" className="nav-logo">
       <img 
  src="/images/logo.png" 
  alt="Body Institute" 
  style={{ 
    height: '170px !important' as any,
    width: 'auto', 
    display: 'block',
    marginTop: '40px',
    maxWidth: 'none'
  }} 
/>
        </Link>

        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="nav-cta">Contáctanos</a>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span style={{ transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none' }} />
          <span style={{ opacity: menuOpen ? 0 : 1 }} />
          <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 99,
          background: 'var(--cream)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '36px',
          paddingTop: 'var(--nav-height)',
        }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
                fontWeight: 300,
                color: 'var(--ink)',
                textDecoration: 'none',
                letterSpacing: '0.02em',
              }}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary" onClick={() => setMenuOpen(false)}>
            Reservar Cita
          </a>
        </div>
      )}
    </>
  );
}