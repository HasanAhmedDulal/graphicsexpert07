'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  tools: string[];
  tags: string[];
  image: string;
  category?: string;
}

interface Project {
  title: string;
  category: string;
  intro: string;
  subcategories: string[];
  items: PortfolioItem[];
}

export default function PortfolioDetailClient({ project }: { project: Project }) {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubcategory, setActiveSubcategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleBackClick = () => {
    router.back();
  };

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  const filteredItems = activeSubcategory === 'All' 
    ? project.items 
    : project.items.filter(item => item.category === activeSubcategory);

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={handleBackClick}
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold mb-6 whitespace-nowrap cursor-pointer"
          >
            <i className="ri-arrow-left-line mr-2 w-5 h-5 flex items-center justify-center"></i>
            Back to Previous Page
          </button>
          <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4 whitespace-nowrap">
            {project.category}
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">{project.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl">{project.intro}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap gap-3 mb-12">
          <button
            onClick={() => setActiveSubcategory('All')}
            className={`px-6 py-3 rounded-full font-semibold transition-all whitespace-nowrap cursor-pointer ${
              activeSubcategory === 'All'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All
          </button>
          {project.subcategories.map((sub) => (
            <button
              key={sub}
              onClick={() => setActiveSubcategory(sub)}
              className={`px-6 py-3 rounded-full font-semibold transition-all whitespace-nowrap cursor-pointer ${
                activeSubcategory === sub
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {sub}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <i className="ri-eye-line text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-10 h-10 flex items-center justify-center"></i>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full whitespace-nowrap">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors cursor-pointer whitespace-nowrap"
          >
            <i className="ri-close-line text-4xl w-10 h-10 flex items-center justify-center"></i>
          </button>

          <button
            onClick={prevImage}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors cursor-pointer whitespace-nowrap"
          >
            <i className="ri-arrow-left-s-line text-5xl w-12 h-12 flex items-center justify-center"></i>
          </button>

          <button
            onClick={nextImage}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors cursor-pointer whitespace-nowrap"
          >
            <i className="ri-arrow-right-s-line text-5xl w-12 h-12 flex items-center justify-center"></i>
          </button>

          <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <img
                src={filteredItems[currentImageIndex].image}
                alt={filteredItems[currentImageIndex].title}
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute bottom-4 right-4 bg-black/70 text-white px-4 py-2 rounded-full text-sm whitespace-nowrap">
                {currentImageIndex + 1} / {filteredItems.length}
              </div>
            </div>

            <div className="text-white">
              <h2 className="text-4xl font-bold mb-4">{filteredItems[currentImageIndex].title}</h2>
              <p className="text-gray-300 text-lg mb-6">{filteredItems[currentImageIndex].description}</p>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Tools Used</h3>
                <div className="flex flex-wrap gap-2">
                  {filteredItems[currentImageIndex].tools.map((tool) => (
                    <span key={tool} className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm whitespace-nowrap">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {filteredItems[currentImageIndex].tags.map((tag) => (
                    <span key={tag} className="bg-gray-700 text-white px-4 py-2 rounded-full text-sm whitespace-nowrap">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
