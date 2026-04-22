import Link from 'next/link';

export default function ImageEditingPricing() {
  const plans = [
    {
      name: "Basic",
      price: "$0.49",
      unit: "per image",
      features: [
        "Basic Clipping Path",
        "Background Removal",
        "Simple Retouching",
        "24-48 Hour Delivery",
        "JPEG Format"
      ]
    },
    {
      name: "Standard",
      price: "$1.99",
      unit: "per image",
      popular: true,
      features: [
        "Complex Clipping Path",
        "Advanced Retouching",
        "Color Correction",
        "Shadow Creation",
        "12-24 Hour Delivery",
        "Multiple Formats"
      ]
    },
    {
      name: "Premium",
      price: "$4.99",
      unit: "per image",
      features: [
        "Super Complex Path",
        "Professional Retouching",
        "Advanced Color Grading",
        "Multiple Shadows",
        "6-12 Hour Delivery",
        "All Formats + RAW"
      ]
    }
  ];

  return (
    <section id="image-editing-pricing" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden mb-16">
          <img 
            src="https://readdy.ai/api/search-image?query=Professional%20photo%20editing%20workspace%20banner%20showing%20image%20clipping%20path%20and%20background%20removal%20process%20on%20large%20monitor%2C%20photographer%20editing%20product%20photos%20with%20graphics%20tablet%2C%20clean%20modern%20studio%20with%20professional%20photography%20equipment%20and%20editing%20software%20interface%2C%20high-quality%20commercial%20photography%20retouching%20workspace&width=1400&height=400&seq=image-editing-banner&orientation=landscape"
            alt="Image Editing Services"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90 flex items-center">
            <div className="container mx-auto px-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Image Editing & Clipping Path</h2>
              <p className="text-xl text-white/90 max-w-2xl">
                Professional photo editing services with fast turnaround and exceptional quality
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-2xl p-8 border-2 transition-all hover:shadow-2xl ${
                plan.popular 
                  ? 'border-blue-600 shadow-xl scale-105' 
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">/{plan.unit}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <i className="ri-check-line w-5 h-5 flex items-center justify-center text-green-500 mr-3 mt-0.5"></i>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href="/order/image-editing" target="_blank">
                <button className={`w-full py-3 rounded-lg font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  plan.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  Get Started
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
