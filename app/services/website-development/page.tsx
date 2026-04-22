'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import { useState } from 'react';

export default function WebsiteDevelopmentPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const benefits = [
    {
      icon: "ri-smartphone-line",
      title: "Fully Responsive",
      description: "Perfect display on all devices from mobile to desktop"
    },
    {
      icon: "ri-rocket-line",
      title: "Fast Performance",
      description: "Optimized for speed with lightning-fast load times"
    },
    {
      icon: "ri-search-line",
      title: "SEO Optimized",
      description: "Built with best practices to rank higher in search results"
    },
    {
      icon: "ri-shield-check-line",
      title: "Secure & Reliable",
      description: "Enterprise-grade security and 99.9% uptime guarantee"
    }
  ];

  const services = [
    {
      title: "Custom Website",
      items: ["Unique Design", "Custom Functionality", "Content Management", "Brand Integration"]
    },
    {
      title: "E-Commerce Store",
      items: ["Product Catalog", "Shopping Cart", "Payment Gateway", "Inventory Management"]
    },
    {
      title: "Landing Pages",
      items: ["High Conversion Design", "A/B Testing Ready", "Lead Capture Forms", "Analytics Integration"]
    },
    {
      title: "Web Applications",
      items: ["Custom Dashboards", "User Authentication", "Database Integration", "API Development"]
    },
    {
      title: "SEO & Performance",
      items: ["On-Page SEO", "Speed Optimization", "Mobile Optimization", "Schema Markup"]
    },
    {
      title: "Maintenance & Support",
      items: ["Regular Updates", "Security Patches", "Backup Services", "Technical Support"]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Share Your Brief",
      description: "Discuss your business goals, target audience, and website requirements"
    },
    {
      step: "02",
      title: "Concept & Draft",
      description: "Create wireframes and design mockups for your approval"
    },
    {
      step: "03",
      title: "Revisions & Feedback",
      description: "Refine the design and functionality based on your feedback"
    },
    {
      step: "04",
      title: "Final Delivery",
      description: "Launch your website with full training and documentation"
    }
  ];

  const portfolio = [
    "https://readdy.ai/api/search-image?query=Modern%20e-commerce%20website%20design%20showing%20product%20catalog%20and%20shopping%20cart%20interface%20on%20laptop%20screen%2C%20professional%20online%20store%20UI%20with%20clean%20layout%2C%20contemporary%20web%20shop%20dashboard%2C%20premium%20ecommerce%20platform%20design&width=600&height=450&seq=web-portfolio-1&orientation=landscape",
    "https://readdy.ai/api/search-image?query=Professional%20business%20dashboard%20UI%20design%20with%20analytics%20charts%20and%20data%20visualization%2C%20modern%20web%20application%20interface%20on%20computer%20screen%2C%20clean%20admin%20panel%20layout%2C%20contemporary%20SaaS%20dashboard%20design&width=600&height=450&seq=web-portfolio-2&orientation=landscape",
    "https://readdy.ai/api/search-image?query=Creative%20landing%20page%20design%20mockup%20showing%20hero%20section%20and%20call-to-action%2C%20modern%20website%20homepage%20on%20desktop%20display%2C%20professional%20marketing%20landing%20page%2C%20clean%20conversion-focused%20web%20design&width=600&height=450&seq=web-portfolio-3&orientation=landscape",
    "https://readdy.ai/api/search-image?query=Modern%20portfolio%20website%20design%20showing%20creative%20work%20showcase%2C%20professional%20personal%20website%20UI%20on%20laptop%2C%20clean%20portfolio%20layout%20with%20project%20gallery%2C%20contemporary%20freelancer%20website%20design&width=600&height=450&seq=web-portfolio-4&orientation=landscape",
    "https://readdy.ai/api/search-image?query=Responsive%20mobile%20website%20design%20showing%20smartphone%20and%20tablet%20views%2C%20modern%20mobile-first%20web%20interface%2C%20professional%20responsive%20design%20mockup%2C%20clean%20mobile%20web%20application%20UI&width=600&height=450&seq=web-portfolio-5&orientation=landscape",
    "https://readdy.ai/api/search-image?query=Professional%20corporate%20website%20design%20with%20modern%20business%20layout%2C%20clean%20company%20website%20UI%20on%20desktop%20screen%2C%20contemporary%20business%20web%20design%2C%20premium%20corporate%20web%20interface&width=600&height=450&seq=web-portfolio-6&orientation=landscape"
  ];

  const faqs = [
    {
      question: "What technologies do you use?",
      answer: "We use modern technologies like React, Next.js, Node.js, and other cutting-edge frameworks to build fast, scalable, and maintainable websites."
    },
    {
      question: "How long does it take to build a website?",
      answer: "Timeline varies based on complexity. A basic website takes 2-3 weeks, while complex e-commerce or web applications may take 6-12 weeks."
    },
    {
      question: "Will my website be mobile-friendly?",
      answer: "Absolutely! All our websites are fully responsive and optimized for mobile, tablet, and desktop devices."
    },
    {
      question: "Can I update the website content myself?",
      answer: "Yes! We integrate user-friendly content management systems that allow you to easily update text, images, and other content without technical knowledge."
    },
    {
      question: "Do you provide hosting and domain services?",
      answer: "We can help you set up hosting and domain registration, or work with your existing providers. We offer recommendations based on your needs."
    },
    {
      question: "What about SEO and search engine rankings?",
      answer: "All our websites are built with SEO best practices including proper structure, meta tags, fast loading speeds, and mobile optimization."
    },
    {
      question: "Do you offer ongoing maintenance and support?",
      answer: "Yes! We provide maintenance packages that include regular updates, security monitoring, backups, and technical support to keep your website running smoothly."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      <section className="relative h-[600px] flex items-center mt-20">
        <img 
          src="https://readdy.ai/api/search-image?query=Professional%20web%20development%20hero%20banner%20showing%20modern%20website%20UI%20design%20on%20multiple%20screens%2C%20developer%20workspace%20with%20code%20editor%20and%20design%20mockups%2C%20contemporary%20office%20with%20laptop%20and%20monitors%20displaying%20responsive%20web%20applications%2C%20clean%20tech%20workspace%20with%20UI%20UX%20design%20elements&width=1920&height=800&seq=web-hero-banner&orientation=landscape"
          alt="Website Development Services"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/95 to-blue-900/90"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Website Development Services</h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Build powerful, responsive websites that drive results. We create modern web solutions tailored to your business needs with cutting-edge technology and exceptional user experience.
            </p>
            <Link href="/order/website-development" target="_blank">
              <button className="bg-white text-indigo-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer shadow-xl">
                Get a Custom Quote
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Web Development Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Modern web solutions built for performance and growth
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all">
                <div className="w-16 h-16 flex items-center justify-center bg-indigo-100 rounded-2xl mb-6">
                  <i className={`${benefit.icon} w-8 h-8 flex items-center justify-center text-indigo-600 text-3xl`}></i>
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
              Comprehensive web development services for your business
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Development Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven workflow that delivers exceptional websites
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-2xl border-2 border-indigo-200 hover:shadow-xl transition-all">
                  <div className="text-5xl font-bold text-indigo-600 mb-4">{step.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-indigo-300"></div>
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
              See examples of our web development work
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
              <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-colors whitespace-nowrap cursor-pointer">
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
              Everything you need to know about our web development services
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

      <section className="py-20 bg-indigo-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's build something amazing together. Get in touch and we'll create the perfect website for your business.
          </p>
          <Link href="/order/website-development" target="_blank">
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer shadow-xl">
              Start Your Project
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
