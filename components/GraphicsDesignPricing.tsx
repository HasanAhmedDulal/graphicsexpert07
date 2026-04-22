export default function GraphicsDesignPricing() {
  const packages = [
    {
      name: "Starter",
      price: "$299",
      description: "Perfect for startups and small businesses looking to establish their brand identity",
      delivery: "5-7 days",
      revisions: "3 revisions",
      features: [
        "Logo design (3 concepts)",
        "Business card design",
        "Social media profile graphics",
        "High-resolution files (PNG, JPG)",
        "Vector files (AI, EPS)",
        "Brand color palette",
        "Basic brand guidelines"
      ],
      popular: false
    },
    {
      name: "Standard",
      price: "$599",
      description: "Complete branding solution for growing businesses ready to make an impact",
      delivery: "7-10 days",
      revisions: "5 revisions",
      features: [
        "Logo design (5 concepts)",
        "Complete stationery set",
        "Social media graphics kit (10+ templates)",
        "Print materials (flyer, brochure)",
        "Email signature design",
        "Brand style guide",
        "All file formats included",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Premium",
      price: "$999",
      description: "Full-scale brand identity package with comprehensive marketing materials",
      delivery: "10-14 days",
      revisions: "Unlimited",
      features: [
        "Logo design (unlimited concepts)",
        "Complete brand identity system",
        "Marketing collateral package",
        "Social media content templates (30+)",
        "Packaging design mockups",
        "Presentation templates",
        "Comprehensive brand guidelines",
        "Dedicated account manager",
        "24/7 priority support",
        "3 months post-launch support"
      ],
      popular: false
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="mb-20">
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Graphics Design Packages</h3>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Professional branding and design solutions tailored to your business needs
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.map((pkg, index) => (
          <div 
            key={index}
            className={`relative bg-white rounded-2xl border-2 ${
              pkg.popular ? 'border-blue-500 shadow-2xl scale-105' : 'border-gray-200'
            } hover:shadow-xl transition-all duration-300 overflow-hidden`}
          >
            {pkg.popular && (
              <div className="absolute top-0 right-0 bg-blue-500 text-white px-6 py-2 text-sm font-bold rounded-bl-2xl">
                Most Popular
              </div>
            )}

            <div className="p-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h4>
              <div className="mb-4">
                <span className="text-4xl font-bold text-blue-600">{pkg.price}</span>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">{pkg.description}</p>

              <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-200">
                <div className="text-center">
                  <i className="ri-time-line w-5 h-5 flex items-center justify-center text-blue-600 text-xl mb-1 mx-auto"></i>
                  <p className="text-sm text-gray-600">{pkg.delivery}</p>
                </div>
                <div className="text-center">
                  <i className="ri-refresh-line w-5 h-5 flex items-center justify-center text-blue-600 text-xl mb-1 mx-auto"></i>
                  <p className="text-sm text-gray-600">{pkg.revisions}</p>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-gray-700">
                    <i className="ri-check-line w-5 h-5 flex items-center justify-center text-green-500 mr-3 mt-0.5 flex-shrink-0"></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={scrollToContact}
                className={`w-full ${
                  pkg.popular 
                    ? 'bg-blue-600 hover:bg-blue-700' 
                    : 'bg-gray-900 hover:bg-gray-800'
                } text-white px-6 py-4 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer`}
              >
                Get Custom Quote
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
