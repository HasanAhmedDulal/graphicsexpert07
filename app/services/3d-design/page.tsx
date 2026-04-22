'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import { useState } from 'react';

export default function ThreeDDesignPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const benefits = [
    {
      icon: "ri-eye-line",
      title: "Photorealistic Quality",
      description: "Stunning visualizations that look like real photographs"
    },
    {
      icon: "ri-time-line",
      title: "Fast Turnaround",
      description: "Quick delivery without compromising on quality"
    },
    {
      icon: "ri-edit-box-line",
      title: "Unlimited Revisions",
      description: "Refine until it perfectly matches your vision"
    },
    {
      icon: "ri-file-list-3-line",
      title: "Multiple Formats",
      description: "Receive files in all required formats for any use"
    }
  ];

  const services = [
    {
      title: "Interior Rendering",
      items: ["Residential Interiors", "Commercial Spaces", "Furniture Visualization", "Material & Lighting"]
    },
    {
      title: "Exterior Rendering",
      items: ["Building Facades", "Landscape Design", "Aerial Views", "Day & Night Renders"]
    },
    {
      title: "Product Visualization",
      items: ["Product Renders", "360° Views", "Exploded Views", "Marketing Materials"]
    },
    {
      title: "Architectural Walkthroughs",
      items: ["Virtual Tours", "Animation Videos", "Interactive 3D", "VR Ready"]
    },
    {
      title: "3D Modeling",
      items: ["Custom 3D Models", "CAD Conversion", "Furniture Design", "Object Modeling"]
    },
    {
      title: "Post-Production",
      items: ["Color Grading", "Compositing", "Background Enhancement", "Final Touches"]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Share Your Brief",
      description: "Provide plans, sketches, or references for your 3D project"
    },
    {
      step: "02",
      title: "Concept & Draft",
      description: "Create initial 3D models and basic renders for approval"
    },
    {
      step: "03",
      title: "Revisions & Feedback",
      description: "Refine materials, lighting, and details based on your input"
    },
    {
      step: "04",
      title: "Final Delivery",
      description: "Deliver high-resolution renders in all required formats"
    }
  ];

  const portfolio = [
    "https://readdy.ai/api/search-image?query=Photorealistic%203D%20interior%20rendering%20of%20modern%20luxury%20living%20room%20with%20contemporary%20furniture%2C%20professional%20architectural%20visualization%20with%20natural%20lighting%2C%20high-quality%20interior%20design%20render%2C%20premium%20residential%20space%203D%20visualization&width=600&height=450&seq=3d-portfolio-1&orientation=landscape",
    "https://readdy.ai/api/search-image?query=Stunning%203D%20exterior%20architectural%20rendering%20of%20modern%20building%20facade%2C%20photorealistic%20commercial%20architecture%20visualization%2C%20professional%20building%20exterior%20render%20with%20landscape%2C%20contemporary%20architectural%20design%203D%20visualization&width=600&height=450&seq=3d-portfolio-2&orientation=landscape",
    "https://readdy.ai/api/search-image?query=Professional%203D%20product%20rendering%20showing%20luxury%20item%20with%20studio%20lighting%2C%20photorealistic%20product%20visualization%20on%20white%20background%2C%20high-quality%20commercial%20product%20render%2C%20premium%20product%20design%203D%20mockup&width=600&height=450&seq=3d-portfolio-3&orientation=landscape",
    "https://readdy.ai/api/search-image?query=Modern%203D%20furniture%20design%20rendering%20showing%20contemporary%20chair%20or%20sofa%2C%20photorealistic%20furniture%20visualization%20with%20materials%20and%20textures%2C%20professional%20furniture%20product%20render%2C%20premium%20interior%20design%203D%20model&width=600&height=450&seq=3d-portfolio-4&orientation=landscape",
    "https://readdy.ai/api/search-image?query=Photorealistic%203D%20commercial%20interior%20rendering%20of%20modern%20office%20or%20retail%20space%2C%20professional%20business%20interior%20visualization%2C%20high-quality%20commercial%20space%20design%20render%2C%20contemporary%20workspace%203D%20visualization&width=600&height=450&seq=3d-portfolio-5&orientation=landscape",
    "https://readdy.ai/api/search-image?query=Stunning%203D%20architectural%20visualization%20showing%20modern%20building%20with%20environment%2C%20photorealistic%20exterior%20render%20with%20landscape%20and%20sky%2C%20professional%20real%20estate%20visualization%2C%20premium%20architectural%20design%203D%20render&width=600&height=450&seq=3d-portfolio-6&orientation=landscape"
  ];

  const faqs = [
    {
      question: "What do you need to start a 3D project?",
      answer: "We need floor plans, elevations, reference images, material preferences, and any specific requirements. CAD files are helpful but not required."
    },
    {
      question: "How long does a 3D rendering take?",
      answer: "Simple renders take 3-5 days, while complex architectural visualizations may take 1-2 weeks depending on detail level and number of views."
    },
    {
      question: "What file formats do you deliver?",
      answer: "We deliver high-resolution images in JPG, PNG, and TIFF formats. We can also provide 3D model files in various formats if needed."
    },
    {
      question: "Can you create animations and walkthroughs?",
      answer: "Yes! We create professional architectural walkthroughs, product animations, and 360° virtual tours for immersive presentations."
    },
    {
      question: "How realistic will the renders look?",
      answer: "Our renders are photorealistic with accurate lighting, materials, and details that make them indistinguishable from real photographs."
    },
    {
      question: "Can you work with existing 3D models?",
      answer: "Absolutely! We can work with your existing 3D models, enhance them, or convert CAD files into photorealistic renders."
    },
    {
      question: "What resolution are the final renders?",
      answer: "We deliver high-resolution renders suitable for large format printing (typically 4K or higher). Custom resolutions are available upon request."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      <section className="relative h-[600px] flex items-center mt-20">
        <img 
          src="https://readdy.ai/api/search-image?query=Professional%203D%20design%20hero%20banner%20showing%20photorealistic%20architectural%20visualization%20and%20interior%20rendering%20on%20large%20monitors%2C%203D%20artist%20workspace%20with%20powerful%20workstation%2C%20modern%20creative%20studio%20with%20dual%20screens%20displaying%20stunning%203D%20renders%2C%20premium%203D%20modeling%20and%20rendering%20workspace&width=1920&height=800&seq=3d-hero-banner&orientation=landscape"
          alt="3D Design Services"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/95 to-pink-900/90"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">3D Design Services</h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Bring your ideas to life with photorealistic 3D visualizations. From architectural renders to product designs, we create stunning 3D experiences that captivate and inspire.
            </p>
            <Link href="/order/3d-design" target="_blank">
              <button className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer shadow-xl">
                Get a Custom Quote
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our 3D Design Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional 3D visualization that brings your vision to life
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all">
                <div className="w-16 h-16 flex items-center justify-center bg-purple-100 rounded-2xl mb-6">
                  <i className={`${benefit.icon} w-8 h-8 flex items-center justify-center text-purple-600 text-3xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What's Included</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive 3D design services for all your visualization needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{service.title}</h3>
                <ul className="space-y-3">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <i className="ri-check-line w-5 h-5 flex items-center justify-center text-green-500 mr-3 mt-0.5"></i>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Design Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A streamlined workflow for exceptional 3D visualizations
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-2xl border-2 border-purple-200 hover:shadow-xl transition-all">
                  <div className="text-5xl font-bold text-purple-600 mb-4">{step.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-purple-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Portfolio Preview</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See examples of our 3D design work
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {portfolio.map((image, index) => (
              <div key={index} className="relative aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer">
                <img 
                  src={image}
                  alt={`Portfolio ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/#portfolio">
              <button className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-700 transition-colors whitespace-nowrap cursor-pointer">
                View Full Portfolio
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about our 3D design services
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-purple-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's create stunning 3D visualizations together. Get in touch and we'll bring your vision to life.
          </p>
          <Link href="/order/3d-design" target="_blank">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer shadow-xl">
              Start Your Project
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
