'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import About from '@/components/About';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import TrustedWorldwide from '@/components/TrustedWorldwide';
import ToolsTechnologies from '@/components/ToolsTechnologies';
import Pricing from '@/components/Pricing';
import Script from 'next/script';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Creative Design Services",
    "provider": {
      "@type": "Organization",
      "name": "graphicsexpert07"
    },
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Creative Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Graphics Design Services",
            "description": "Professional logo design, brand identity, print design, and social media graphics"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Development Services",
            "description": "Custom websites, e-commerce platforms, web applications, and responsive design"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "3D Design Services",
            "description": "Architectural visualization, interior rendering, product rendering, and 3D modeling"
          }
        }
      ]
    }
  };

  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <div className="min-h-screen">
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <main>
          <Hero />
          <Portfolio />
          <Services />
          <Pricing />
          <TrustedWorldwide />
          <Team />
          <Testimonials />
          <ToolsTechnologies />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
