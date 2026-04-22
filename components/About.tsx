export default function About() {
  const stats = [
    { number: "200+", label: "Happy Clients" },
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Countries Served" },
    { number: "15+", label: "Years Experience" }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About graphicsexpert07</h2>
            <p className="text-lg text-gray-600 mb-6">
              We are a passionate team of creative professionals dedicated to bringing your vision to life through exceptional design and development services.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              With over 15 years of experience in the industry, graphicsexpert07 has established itself as a trusted partner for businesses worldwide, delivering innovative solutions that drive results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
