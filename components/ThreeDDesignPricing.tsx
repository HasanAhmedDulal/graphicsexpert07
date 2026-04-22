export default function ThreeDDesignPricing() {
  const packages = [
    {
      name: "Product Visualization",
      price: "$499",
      description: "High-quality 3D product renders perfect for e-commerce and marketing materials",
      delivery: "5-7 days",
      revisions: "3 revisions",
      features: [
        "3D product modeling",
        "3-5 photorealistic renders",
        "Multiple angles and views",
        "Basic lighting setup",
        "High-resolution output (4K)",
        "Transparent background option",
        "Web-optimized versions",
        "Commercial usage rights"
      ],
      popular: false
    },
    {
      name: "Interior/Exterior Visualization",
      price: "$899",
      description: "Stunning architectural renders for real estate, interior design, and construction projects",
      delivery: "10-14 days",
      revisions: "5 revisions",
      features: [
        "Detailed 3D modeling",
        "5-8 photorealistic renders",
        "Professional lighting & materials",
        "Furniture and decor placement",
        "Landscape and environment",
        "Day and night views",
        "8K resolution output",
        "360° panoramic view",
        "Virtual tour ready"
      ],
      popular: true
    },
    {
      name: "Full 3D Package",
      price: "$1,499",
      description: "Complete 3D solution with modeling, rendering, and animation for maximum impact",
      delivery: "14-21 days",
      revisions: "Unlimited",
      features: [
        "Complex 3D modeling",
        "10+ photorealistic renders",
        "30-60 second animation",
        "Advanced lighting & texturing",
        "Multiple camera angles",
        "Post-production editing",
        "8K resolution renders",
        "4K video animation",
        "Interactive 3D viewer",
        "VR-ready output",
        "Dedicated project manager",
        "Priority support"
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
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">3D Design Packages</h3>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Photorealistic 3D visualization and rendering services for any project
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
                Order 3D Package
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
