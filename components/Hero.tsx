'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Hero() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-cover bg-center" style={{backgroundImage: "url('https://readdy.ai/api/search-image?query=Modern%20creative%20design%20studio%20workspace%20with%20minimalist%20aesthetic%20featuring%20clean%20white%20desk%20setup%20professional%20design%20tools%20sleek%20computer%20monitors%20ambient%20lighting%20plants%20and%20contemporary%20furniture%20creating%20inspiring%20productive%20atmosphere%20for%20digital%20creative%20work%20with%20soft%20natural%20light%20streaming%20through%20large%20windows%20highlighting%20the%20professional%20yet%20welcoming%20environment%20perfect%20for%20innovative%20design%20projects&width=1920&height=1080&seq=hero-bg-1&orientation=landscape')"}}>
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      
      <div className="relative z-10 w-full container mx-auto px-6 py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            graphicsexpert07
          </h1>
          <h2 className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
            Professional Graphics Design, Web Development & 3D Solutions
          </h2>
          <p className="text-lg text-white mb-10 max-w-2xl opacity-90">
            Transform your ideas into stunning visual experiences with our expert team of designers and developers
          </p>
          
          <div className="flex flex-wrap gap-4 mb-10">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg whitespace-nowrap cursor-pointer"
              aria-label="Get started with Creative Studio Pro services"
            >
              Get Started Today
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors text-lg whitespace-nowrap cursor-pointer"
              aria-label="View our portfolio of creative work"
            >
              View Our Work
            </button>
          </div>

          <div className="mb-12">
            <a
              href="https://www.freelancer.com/u/graphicsexpert07"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-yellow-400/80 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400/20 hover:border-yellow-300 hover:scale-105 transition-all duration-300 cursor-pointer whitespace-nowrap"
              aria-label="View our top-rated Freelancer profile"
            >
              <span className="text-yellow-400">⭐</span>
              <span>Trusted Freelancer — 4.9/5 Rating | 500+ Projects</span>
              <i className="ri-arrow-right-line"></i>
            </a>
            <p className="text-sm text-white/80 mt-3">
              Over 2000+ completed projects with a 4.9/5 client satisfaction rating on Freelancer
            </p>
          </div>

          <nav className="flex flex-wrap gap-3 mb-12" aria-label="Quick service navigation">
            <Link href="/services/graphics-design" target="_blank" aria-label="Learn more about our graphics design services">
              <button className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-white/20 transition-all text-sm whitespace-nowrap cursor-pointer">
                <i className="ri-palette-line mr-2" aria-hidden="true"></i>
                Graphics Design
              </button>
            </Link>
            <Link href="/services/website-development" target="_blank" aria-label="Learn more about our website development services">
              <button className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-white/20 transition-all text-sm whitespace-nowrap cursor-pointer">
                <i className="ri-code-s-slash-line mr-2" aria-hidden="true"></i>
                Website Development
              </button>
            </Link>
            <Link href="/services/3d-design" target="_blank" aria-label="Learn more about our 3D design services">
              <button className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-white/20 transition-all text-sm whitespace-nowrap cursor-pointer">
                <i className="ri-box-3-line mr-2" aria-hidden="true"></i>
                3D Design
              </button>
            </Link>
          </nav>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-sm md:text-base text-white opacity-90">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">200+</div>
              <div className="text-sm md:text-base text-white opacity-90">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">5+</div>
              <div className="text-sm md:text-base text-white opacity-90">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-sm md:text-base text-white opacity-90">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
