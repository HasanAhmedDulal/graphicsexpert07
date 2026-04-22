
export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerSections = {
    services: [
      { name: "Graphics Design", action: () => scrollToSection('services') },
      { name: "Web Development", action: () => scrollToSection('services') },
      { name: "3D Design", action: () => scrollToSection('services') },
      { name: "Image Editing", action: () => scrollToSection('services') }
    ],
    quickLinks: [
      { name: "Portfolio", action: () => scrollToSection('portfolio') },
      { name: "Our Team", action: () => scrollToSection('team') },
      { name: "About Us", action: () => scrollToSection('about') },
      { name: "Contact", action: () => scrollToSection('contact') },
      { name: "Made with Readdy", href: "https://readdy.ai/?origin=logo", external: true }
    ]
  };

  const socialLinks = [
    { icon: "ri-linkedin-fill", href: "#" },
    { icon: "ri-behance-fill", href: "#" }, 
    { icon: "ri-dribbble-fill", href: "#" }
  ];

  const contactInfo = [
    { icon: "ri-mail-line", text: "hello@creativestudiopro.com" },
    { icon: "ri-phone-line", text: "+1 (555) 123-4567" },
    { icon: "ri-map-pin-line", text: "123 Creative Street, New York, NY 10001" }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 font-['Pacifico']">graphicsexpert07</h3>
            <p className="text-gray-400 mb-4">
              Professional creative agency delivering premium digital solutions worldwide.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer"
                >
                  <i className={`${link.icon} w-5 h-5 flex items-center justify-center`}></i>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerSections.services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={service.action}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerSections.quickLinks.map((link, index) => (
                <li key={index}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <button
                      onClick={link.action}
                      className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                    >
                      {link.name}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start">
                  <i className={`${info.icon} w-5 h-5 flex items-center justify-center mr-2 mt-0.5`}></i>
                  {info.text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© 2024 graphicsexpert07. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
