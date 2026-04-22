export default function TrustedWorldwide() {
  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Countries Served" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Trusted Worldwide</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Delivering excellence to clients across the globe
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-blue-100 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="relative rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm p-8">
          <img 
            src="https://readdy.ai/api/search-image?query=Modern%20world%20map%20visualization%20showing%20global%20network%20connections%20with%20glowing%20markers%20on%20continents%2C%20clean%20minimalist%20corporate%20infographic%20style%20with%20blue%20and%20white%20color%20scheme%2C%20professional%20business%20map%20showing%20North%20America%20Europe%20Asia%20Pacific%20highlighted%2C%20contemporary%20geographic%20data%20visualization%20on%20dark%20blue%20background&width=1200&height=600&seq=world-map-visual&orientation=landscape"
            alt="Global Reach"
            className="w-full h-auto rounded-xl"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
                Serving Clients in 50+ Countries
              </h3>
              <p className="text-xl text-white/90 drop-shadow-lg">
                North America • Europe • Asia Pacific • Middle East • Africa
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
