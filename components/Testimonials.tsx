'use client';

import { useState } from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc",
      image: "https://readdy.ai/api/search-image?query=Professional%20business%20woman%20CEO%20headshot%20portrait%2C%20confident%20female%20executive%20in%20modern%20office%2C%20corporate%20professional%20photo%20with%20clean%20background%2C%20high-quality%20business%20portrait%20photography&width=200&height=200&seq=testimonial-1&orientation=squarish",
      company: "TechStart Inc",
      rating: 5,
      text: "Creative Studio Pro transformed our brand identity completely. Their attention to detail and creative approach exceeded our expectations. The team is professional, responsive, and truly understands modern design."
    },
    {
      name: "Michael Chen",
      role: "Founder, Digital Solutions",
      image: "https://readdy.ai/api/search-image?query=Professional%20Asian%20businessman%20founder%20headshot%20portrait%2C%20confident%20male%20entrepreneur%20in%20business%20attire%2C%20corporate%20professional%20photo%20with%20clean%20background%2C%20high-quality%20executive%20portrait%20photography&width=200&height=200&seq=testimonial-2&orientation=squarish",
      company: "Digital Solutions",
      rating: 5,
      text: "Outstanding web development service! They built our e-commerce platform from scratch and it's been performing flawlessly. The brothers are incredibly talented and deliver on time, every time."
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, BrandCo",
      image: "https://readdy.ai/api/search-image?query=Professional%20Hispanic%20businesswoman%20marketing%20director%20headshot%20portrait%2C%20confident%20female%20professional%20in%20modern%20office%2C%20corporate%20professional%20photo%20with%20clean%20background%2C%20high-quality%20business%20portrait%20photography&width=200&height=200&seq=testimonial-3&orientation=squarish",
      company: "BrandCo",
      rating: 5,
      text: "The 3D visualizations they created for our real estate project were absolutely stunning. Clients were blown away by the photorealistic quality. Highly recommend their services!"
    },
    {
      name: "David Thompson",
      role: "Owner, Thompson Architects",
      image: "https://readdy.ai/api/search-image?query=Professional%20architect%20business%20owner%20headshot%20portrait%2C%20confident%20male%20professional%20in%20business%20casual%20attire%2C%20corporate%20professional%20photo%20with%20clean%20background%2C%20high-quality%20business%20portrait%20photography&width=200&height=200&seq=testimonial-4&orientation=squarish",
      company: "Thompson Architects",
      rating: 5,
      text: "Working with Creative Studio Pro has been a game-changer for our architectural firm. Their 3D renderings help us win more projects and communicate our vision clearly to clients."
    },
    {
      name: "Lisa Anderson",
      role: "E-commerce Manager, StyleHub",
      image: "https://readdy.ai/api/search-image?query=Professional%20businesswoman%20e-commerce%20manager%20headshot%20portrait%2C%20confident%20female%20professional%20in%20modern%20office%2C%20corporate%20professional%20photo%20with%20clean%20background%2C%20high-quality%20business%20portrait%20photography&width=200&height=200&seq=testimonial-5&orientation=squarish",
      company: "StyleHub",
      rating: 5,
      text: "Their image editing service is top-notch! Fast turnaround, excellent quality, and very affordable. They've edited thousands of product photos for us with consistent quality."
    },
    {
      name: "James Wilson",
      role: "Creative Director, MediaWorks",
      image: "https://readdy.ai/api/search-image?query=Professional%20creative%20director%20businessman%20headshot%20portrait%2C%20confident%20male%20professional%20in%20creative%20business%20attire%2C%20corporate%20professional%20photo%20with%20clean%20background%2C%20high-quality%20business%20portrait%20photography&width=200&height=200&seq=testimonial-6&orientation=squarish",
      company: "MediaWorks",
      rating: 5,
      text: "Exceptional creativity and professionalism! The team delivered a complete brand identity package that perfectly captured our vision. Communication was smooth throughout the entire process."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all"
              >
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-blue-100"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    <p className="text-blue-600 text-sm font-semibold">{testimonial.company}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="ri-star-fill w-5 h-5 flex items-center justify-center text-yellow-400"></i>
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
