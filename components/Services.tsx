import Link from 'next/link';

export default function Services() {
  const services = [
    {
      icon: "ri-palette-line",
      title: "Graphics Design",
      description: "Transform your brand with stunning visual designs. From logos to complete brand identities, we create designs that captivate and convert.",
      features: ["Logo Design", "Brand Identity", "Print Design", "Social Media Graphics"],
      image: "https://readdy.ai/api/search-image?query=Modern%20graphic%20design%20workspace%20with%20designer%20working%20on%20brand%20identity%20and%20logo%20design%20on%20large%20monitor%2C%20creative%20studio%20environment%20with%20color%20swatches%20and%20design%20materials%2C%20professional%20branding%20mockups%20on%20desk%2C%20clean%20minimalist%20office%20with%20natural%20lighting%20and%20contemporary%20furniture&width=800&height=600&seq=service-graphics-new&orientation=landscape",
      link: "/services/graphics-design",
      alt: "Professional graphics design services including logo design and brand identity"
    },
    {
      icon: "ri-code-s-slash-line",
      title: "Website Development",
      description: "Build powerful, responsive websites that drive results. We create modern web solutions tailored to your business needs with cutting-edge technology.",
      features: ["Custom Websites", "E-Commerce", "Web Applications", "Responsive Design"],
      image: "https://readdy.ai/api/search-image?query=Modern%20web%20development%20workspace%20showing%20website%20UI%20design%20on%20multiple%20screens%2C%20developer%20coding%20responsive%20website%20interface%2C%20clean%20contemporary%20office%20with%20laptop%20and%20desktop%20monitors%20displaying%20modern%20web%20dashboard%2C%20professional%20tech%20workspace%20with%20minimalist%20design&width=800&height=600&seq=service-web-new&orientation=landscape",
      link: "/services/website-development",
      alt: "Custom website development and e-commerce solutions"
    },
    {
      icon: "ri-box-3-line",
      title: "3D Design",
      description: "Bring your ideas to life with photorealistic 3D visualizations. From architectural renders to product designs, we create stunning 3D experiences.",
      features: ["Architectural Visualization", "Interior Design", "Product Rendering", "3D Modeling"],
      image: "https://readdy.ai/api/search-image?query=Professional%203D%20design%20studio%20workspace%20with%20designer%20working%20on%20architectural%20visualization%20and%203D%20rendering%20on%20powerful%20workstation%2C%20dual%20monitors%20showing%20photorealistic%203D%20interior%20and%20exterior%20renders%2C%20modern%20creative%20office%20with%20graphics%20tablet%20and%20professional%20equipment&width=800&height=600&seq=service-3d-new&orientation=landscape",
      link: "/services/3d-design",
      alt: "Photorealistic 3D design and architectural visualization services"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <header className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive creative solutions to elevate your brand
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <article 
              key={index} 
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-500 hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src={service.image} 
                  alt={service.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  width="800"
                  height="600"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <div className="w-16 h-16 flex items-center justify-center bg-white rounded-2xl shadow-lg">
                    <i className={`${service.icon} w-8 h-8 flex items-center justify-center text-blue-600 text-3xl`} aria-hidden="true"></i>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <i className="ri-check-line w-5 h-5 flex items-center justify-center text-green-500 mr-3" aria-hidden="true"></i>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href={service.link} target="_blank" aria-label={`Learn more about ${service.title} services`}>
                  <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer group-hover:shadow-lg">
                    Learn More
                  </button>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
