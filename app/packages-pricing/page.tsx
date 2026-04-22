'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GraphicsDesignPricing from '@/components/GraphicsDesignPricing';
import WebDevelopmentPricing from '@/components/WebDevelopmentPricing';
import ThreeDDesignPricing from '@/components/ThreeDDesignPricing';
import ImageEditingPricing from '@/components/ImageEditingPricing';
import Link from 'next/link';
import { useState } from 'react';

export default function PackagesPricingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-100 z-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center space-x-2 cursor-pointer">
              <div className="text-2xl font-bold text-gray-900 font-['Pacifico']">graphicsexpert07</div>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                href="/"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium cursor-pointer"
              >
                Home
              </Link>
              <div className="relative">
                <button 
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium cursor-pointer flex items-center space-x-1"
                >
                  <span>Services</span>
                  <i className={`ri-arrow-down-s-line w-5 h-5 flex items-center justify-center transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}></i>
                </button>
                {isServicesOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <Link 
                      href="/services/graphics-design"
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors cursor-pointer"
                    >
                      Graphics Design
                    </Link>
                    <Link 
                      href="/services/website-development"
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors cursor-pointer"
                    >
                      Web Development
                    </Link>
                    <Link 
                      href="/services/3d-design"
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors cursor-pointer"
                    >
                      3D Design
                    </Link>
                  </div>
                )}
              </div>
              <Link 
                href="/packages-pricing"
                className="text-blue-600 font-semibold cursor-pointer"
              >
                Pricing
              </Link>
              <Link 
                href="/#team"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium cursor-pointer"
              >
                Team
              </Link>
              <Link 
                href="/#about"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium cursor-pointer"
              >
                About
              </Link>
              <Link 
                href="/#contact"
                className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap"
              >
                Contact Us
              </Link>
            </nav>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center text-gray-700 cursor-pointer"
            >
              <i className="ri-menu-line w-6 h-6 flex items-center justify-center"></i>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="container mx-auto px-6 py-4 space-y-4">
              <Link 
                href="/"
                className="block text-gray-700 hover:text-blue-600 transition-colors font-medium cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <div>
                <button 
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="w-full text-left text-gray-700 hover:text-blue-600 transition-colors font-medium cursor-pointer flex items-center justify-between"
                >
                  <span>Services</span>
                  <i className={`ri-arrow-down-s-line w-5 h-5 flex items-center justify-center transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}></i>
                </button>
                {isServicesOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    <Link 
                      href="/services/graphics-design"
                      className="block text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Graphics Design
                    </Link>
                    <Link 
                      href="/services/website-development"
                      className="block text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Web Development
                    </Link>
                    <Link 
                      href="/services/3d-design"
                      className="block text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      3D Design
                    </Link>
                  </div>
                )}
              </div>
              <Link 
                href="/packages-pricing"
                className="block text-blue-600 font-semibold cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                href="/#team"
                className="block text-gray-700 hover:text-blue-600 transition-colors font-medium cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Team
              </Link>
              <Link 
                href="/#about"
                className="block text-gray-700 hover:text-blue-600 transition-colors font-medium cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/#contact"
                className="block px-6 py-2.5 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer text-center whitespace-nowrap"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </header>
      
      <main className="pt-20">
        <section className="relative bg-gradient-to-br from-blue-600 to-purple-700 text-white py-24">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Packages & Pricing
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                Choose the perfect package for Graphics Design, Web Development, 3D Design, and Image Editing
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-6">
            <GraphicsDesignPricing />
            <WebDevelopmentPricing />
            <ThreeDDesignPricing />
            <ImageEditingPricing />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
