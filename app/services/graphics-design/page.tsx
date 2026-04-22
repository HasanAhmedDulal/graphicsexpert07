'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import { useState } from 'react';

export default function GraphicsDesignPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const benefits = [
    {
      icon: "ri-palette-line",
      title: "Strong Brand Identity",
      description: "Create memorable visual identity that sets you apart from competitors"
    },
    {
      icon: "ri-file-list-3-line",
      title: "High-Quality Files",
      description: "Receive print-ready and web-optimized files in all required formats"
    },
    {
      icon: "ri-layout-grid-line",
      title: "Consistent Visual Style",
      description: "Maintain brand consistency across all marketing materials"
    },
    {
      icon: "ri-time-line",
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising on quality"
    }
  ];

  const services = [
    {
      title: "Logo Design",
      items: ["Custom Logo Creation", "Multiple Concepts", "Unlimited Revisions", "Vector Files Included"]
    },
    {
      title: "Brand Identity & Stationery",
      items: ["Business Cards", "Letterheads", "Envelopes", "Brand Guidelines"]
    },
    {
      title: "Packaging Design",
      items: ["Product Packaging", "Label Design", "Box Design", "3D Mockups"]
    },
    {
      title: "Social Media Graphics",
      items: ["Post Templates", "Cover Images", "Story Designs", "Ad Creatives"]
    },
    {
      title: "Print Design",
      items: ["Brochures & Flyers", "Posters & Banners", "Catalogs", "Magazine Layouts"]
    },
    {
      title: "Marketing Materials",
      items: ["Presentation Decks", "Infographics", "Email Templates", "Digital Ads"]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Share Your Brief",
      description: "Tell us about your brand, target audience, and design preferences"
    },
    {
      step: "02",
      title: "Concept & Draft",
      description: "We create initial design concepts based on your requirements"
    },
    {
      step: "03",
      title: "Revisions & Feedback",
      description: "Refine the design with your feedback until it's perfect"
    },
    {
      step: "04",
      title: "Final Delivery",
      description: "Receive all files in required formats with full ownership rights"
    }
  ];

  const portfolio = [
    "https://readdy.ai/api/search-image?query=Professional%20minimalist%20logo%20design%20collection%20showcase%20with%20modern%20brand%20identity%20logos%20on%20white%20background%2C%20clean%20corporate%20logo%20designs%2C%20elegant%20business%20branding%20samples%2C%20premium%20logo%20portfolio%20grid%20layout&width=600&height=450&seq=graphics-portfolio-1&orientation=landscape",
    "https://readdy.ai/api/search-image?query=Creative%20brand%20identity%20design%20mockup%20showing%20business%20cards%20letterhead%20and%20stationery%20set%2C%20professional%20corporate%20branding%20materials%2C%20elegant%20brand%20collateral%20on%20desk%2C%20premium%20stationery%20design%20showcase&width=600&height=450&seq=graphics-portfolio-2&orientation=landscape",
    "https://readdy.ai/api/search-image?query=Modern%20packaging%20design%20mockup%20with%20product%20boxes%20and%20labels%2C%20creative%20package%20branding%20showcase%2C%20professional%20product%20packaging%20collection%2C%20premium%20box%20design%20samples%20on%20white%20background&width=600&height=450&seq=graphics-portfolio-3&orientation=landscape",
    "https://readdy.ai/api/search-image?query=Social%20media%20graphics%20template%20collection%20showing%20Instagram%20posts%20and%20stories%2C%20modern%20social%20media%20design%20layouts%2C%20creative%20digital%20marketing%20graphics%2C%20professional%20social%20content%20designs&width=600&height=450&seq=graphics-portfolio-4&orientation=landscape",
    "https://readdy.ai/api/search-image?query=Professional%20print%20design%20collection%20with%20brochures%20flyers%20and%20posters%2C%20modern%20marketing%20materials%20layout%2C%20creative%20print%20advertising%20designs%2C%20premium%20brochure%20design%20showcase&width=600&height=450&seq=graphics-portfolio-5&orientation=landscape",
    "https://readdy.ai/api/search-image?query=Creative%20infographic%20design%20collection%20with%20data%20visualization%20and%20charts%2C%20modern%20presentation%20graphics%2C%20professional%20business%20infographics%2C%20clean%20information%20design%20layouts&width=600&height=450&seq=graphics-portfolio-6&orientation=landscape"
  ];

  const faqs = [
    {
      question: "What file formats will I receive?",
      answer: "You'll receive vector files (AI, EPS, SVG) for scalability, plus high-resolution raster files (PNG, JPG) for immediate use. All files are optimized for both print and web."
    },
    {
      question: "How many revisions are included?",
      answer: "Our Standard and Premium packages include unlimited revisions until you're 100% satisfied. Basic package includes up to 3 revision rounds."
    },
    {
      question: "Do I own the rights to the final design?",
      answer: "Yes! Upon final payment, you receive full ownership and commercial rights to use the design however you wish."
    },
    {
      question: "What's your typical turnaround time?",
      answer: "Initial concepts are delivered within 3-5 business days. Complete projects typically take 7-14 days depending on complexity and revision rounds."
    },
    {
      question: "Can you match my existing brand style?",
      answer: "Absolutely! We can work within your existing brand guidelines or help you develop a completely new visual identity."
    },
    {
      question: "Do you provide brand guidelines?",
      answer: "Yes, our Premium packages include comprehensive brand guidelines covering logo usage, color codes, typography, and application examples."
    },
    {
      question: "What if I need rush delivery?",
      answer: "We offer expedited services for urgent projects. Contact us to discuss your timeline and we'll accommodate your needs with priority handling."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      <section className="relative h-[600px] flex items-center mt-20">
        <img 
          src="https://readdy.ai/api/search-image?query=Professional%20graphic%20design%20hero%20banner%20showing%20designer%20creating%20brand%20identity%20and%20logo%20design%20on%20large%20monitor%2C%20creative%20studio%20workspace%20with%20color%20swatches%20and%20design%20materials%2C%20modern%20minimalist%20office%20with%20natural%20lighting%2C%20premium%20branding%20mockups%20and%20design%20tools&width=1920&height=800&seq=graphics-hero-banner&orientation=landscape"
          alt="Graphics Design Services"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-purple-900/90"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Graphics Design Services</h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Transform your brand with stunning visual designs that captivate your audience and drive results. From logos to complete brand identities, we create designs that make you stand out.
            </p>
            <Link href="/order/graphics-design" target="_blank">
              <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer shadow-xl">
                Get a Custom Quote
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Graphics Design Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional design solutions that elevate your brand
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all">
                <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-2xl mb-6">
                  <i className={`${benefit.icon} w-8 h-8 flex items-center justify-center text-blue-600 text-3xl`}></i>
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
              Comprehensive design services for all your branding needs
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
              A streamlined workflow that ensures exceptional results
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-2xl border-2 border-blue-200 hover:shadow-xl transition-all">
                  <div className="text-5xl font-bold text-blue-600 mb-4">{step.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-300"></div>
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
              See examples of our graphics design work
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
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
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
              Everything you need to know about our graphics design services
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

      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Get in touch and we'll bring your vision to life.
          </p>
          <Link href="/order/graphics-design" target="_blank">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer shadow-xl">
              Start Your Project
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
