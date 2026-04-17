'use client';

import { useState } from 'react';
import Splash from '@/components/Splash';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import About from '@/components/About';
import Services from '@/components/Services';
import VirtualTour from '@/components/VirtualTour';
import Gallery from '@/components/Gallery';
import Careers from '@/components/Careers';
import Footer from '@/components/Footer';

export default function Home() {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <>
      {!splashDone && <Splash onComplete={() => setSplashDone(true)} />}

      <div style={{
        opacity: splashDone ? 1 : 0,
        transition: 'opacity 0.6s ease 0.2s',
        pointerEvents: splashDone ? 'auto' : 'none',
      }}>
        <Navbar />
        <Hero />
        <Marquee />
        <About />
        <Services />
        <VirtualTour />
        <Gallery />
        <Careers />
        <Footer />
      </div>
    </>
  );
}