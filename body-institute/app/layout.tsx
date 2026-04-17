import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Body Institute | Clínica Estética',
  description:
    'Body Institute — Clínica estética de referencia en Bogotá. Medicina estética, tratamientos faciales, remodelación corporal y bienestar integral.',
  keywords: 'clínica estética, medicina estética, botox, rellenos, Bogotá, body institute',
  openGraph: {
    title: 'Body Institute | Clínica Estética',
    description: 'El arte de realzar tu belleza. Tratamientos de vanguardia en Bogotá.',
    type: 'website',
    locale: 'es_CO',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}