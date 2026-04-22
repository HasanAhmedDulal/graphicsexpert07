'use client';

import { useState } from 'react';
import Link from 'next/link';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export default function Header({ isMenuOpen, setIsMenuOpen }: HeaderProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-100 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2 cursor-pointer">
            <div className="text-2xl font-bold text-gray-900 font-['Pacifico']">graphicsexpert07</div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/services/graphics-design"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium cursor-pointer"
            >
              Graphics Design
            </Link>
            <Link 
              href="/services/website-development"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium cursor-pointer"
            >
              Web Development
            </Link>
            <Link 
              href="/services/3d-design"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium cursor-pointer"
            >
              3D Design
            </Link>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium cursor-pointer"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium cursor-pointer"
            >
              Services
            </button>
            <Link 
              href="/packages-pricing"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium cursor-pointer"
            >
              Pricing
            </Link>
            <button 
              onClick={() => scrollToSection('team')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium cursor-pointer"
            >
              Team
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium cursor-pointer"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap"
            >
              Contact Us
            </button>
          </nav>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-gray-700 cursor-pointer"
          >
            <i className="ri-menu-line w-6 h-6 flex items-center justify-center"></i>
          </button>
        </div>
      </div>
    </header>
  );
}
