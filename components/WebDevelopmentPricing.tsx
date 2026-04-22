import Link from 'next/link';

export default function WebDevelopmentPricing() {
  const packages = [
    {
      name: "Starter Website",
      price: "$499",
      description: "Perfect for small businesses and startups",
      features: [
        "5 Pages Website",
        "Responsive Design",
        "Contact Form",
        "Basic SEO",
        "1 Month Support"
      ]
    },
    {
      name: "Business Website",
      price: "$999",
      description: "Ideal for growing businesses",
      popular: true,
      features: [
        "10 Pages Website",
        "Advanced Responsive Design",
        "CMS Integration",
        "Advanced SEO",
        "E-Commerce Ready",
        "3 Months Support"
      ]
    },
    {
      name: "Enterprise Solution",
      price: "$2,499+",
      description: "Custom solutions for large organizations",
      features: [
        "Unlimited Pages",
        "Custom Functionality",
        "Advanced CMS",
        "Full E-Commerce",
        "API Integration",
        "6 Months Support",
        "Priority Support"
      ]
    }
  ];

  return (
    <section id="web-development-pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden mb-16">
          <img 
            src="https://readdy.ai/api/search-image?query=Modern%20web%20development%20banner%20showing%20responsive%20website%20design%20on%20multiple%20devices%2C%20UI%20UX%20dashboard%20interface%20on%20computer%20screens%2C%20professional%20web%20developer%20workspace%20with%20code%20editor%20and%20design%20mockups%2C%20clean%20contemporary%20office%20with%20laptop%20and%20monitors%20displaying%20modern%20web%20applications%20and%20landing%20pages&width=1400&height=400&seq=web-dev-banner&orientation=landscape"
            alt="Website Development Services"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-blue-900/90 flex items-center">
            <div className="container mx-auto px-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Website Development Packages</h2>
              <p className="text-xl text-white/90 max-w-2xl">
                Professional web solutions tailored to your business needs
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-2xl p-8 border-2 transition-all hover:shadow-2xl ${
                pkg.popular 
                  ? 'border-blue-600 shadow-xl scale-105' 
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>
                <div className="text-4xl font-bold text-gray-900">{pkg.price}</div>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <i className="ri-check-line w-5 h-5 flex items-center justify-center text-green-500 mr-3 mt-0.5"></i>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href="/order/website-development" target="_blank">
                <button className={`w-full py-3 rounded-lg font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  pkg.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  Get Started
                </button>
              </Link>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 border-2 border-blue-200 max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Need a Custom Solution?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Every business is unique. Let's discuss your specific requirements and create a tailored package that fits your needs and budget perfectly.
            </p>
            <Link href="/order/website-development" target="_blank">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
                Request Custom Quote
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
