import Link from 'next/link';

export default function Pricing() {
  const packages = [
    {
      name: "Basic",
      price: "$299",
      description: "Perfect for startups and small projects",
      delivery: "5-7 Days",
      revisions: "3 Revisions",
      features: [
        "Logo Design (3 Concepts)",
        "Business Card Design",
        "Social Media Kit",
        "High-Resolution Files",
        "Vector Files (AI, EPS, SVG)",
        "Commercial Use Rights",
        "Email Support"
      ],
      popular: false,
      cta: "Order Now",
      link: "/order/graphics-design"
    },
    {
      name: "Standard",
      price: "$599",
      description: "Ideal for growing businesses",
      delivery: "7-10 Days",
      revisions: "5 Revisions",
      features: [
        "Everything in Basic",
        "Brand Identity Package",
        "Letterhead & Envelope Design",
        "Email Signature Design",
        "Brand Style Guide",
        "Print-Ready Files",
        "Unlimited Revisions",
        "Priority Support",
        "Source Files Included"
      ],
      popular: true,
      cta: "Order Now",
      link: "/order/graphics-design"
    },
    {
      name: "Premium",
      price: "$999",
      description: "Complete branding solution",
      delivery: "10-14 Days",
      revisions: "Unlimited",
      features: [
        "Everything in Standard",
        "Complete Brand Identity",
        "Packaging Design",
        "Marketing Materials",
        "Social Media Templates",
        "Presentation Deck",
        "Brand Guidelines Book",
        "3D Mockups",
        "Dedicated Account Manager",
        "24/7 Priority Support",
        "Lifetime Support"
      ],
      popular: false,
      cta: "Order Now",
      link: "/order/graphics-design"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Packages & Pricing</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect package for your project needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-3xl overflow-hidden border-2 transition-all duration-300 hover:shadow-2xl ${
                pkg.popular 
                  ? 'border-blue-600 shadow-xl scale-105' 
                  : 'border-gray-200 hover:border-blue-400'
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-blue-600 text-white px-6 py-2 text-sm font-semibold rounded-bl-2xl">
                  Most Popular
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <p className="text-gray-600 mb-6">{pkg.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-baseline mb-2">
                    <span className="text-5xl font-bold text-gray-900">{pkg.price}</span>
                    <span className="text-gray-600 ml-2">/project</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-700">
                    <i className="ri-time-line w-5 h-5 flex items-center justify-center text-blue-600 mr-3"></i>
                    <span className="font-medium">{pkg.delivery} Delivery</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <i className="ri-refresh-line w-5 h-5 flex items-center justify-center text-blue-600 mr-3"></i>
                    <span className="font-medium">{pkg.revisions}</span>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6 mb-8">
                  <ul className="space-y-4">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <i className="ri-check-line w-5 h-5 flex items-center justify-center text-green-500 mr-3 mt-0.5"></i>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href={pkg.link} target="_blank">
                  <button 
                    className={`w-full py-4 rounded-xl font-semibold text-lg transition-all whitespace-nowrap cursor-pointer ${
                      pkg.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg'
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}
                  >
                    {pkg.cta}
                  </button>
                </Link>

                <div className="mt-4 text-center">
                  <Link href="/#contact">
                    <button className="text-blue-600 hover:text-blue-700 font-medium whitespace-nowrap cursor-pointer">
                      Contact Us for Custom Quote
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Need a custom package? We can create a tailored solution for your specific needs.
          </p>
          <Link href="/#contact">
            <button className="bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer">
              Request Custom Quote
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
