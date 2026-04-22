'use client';

import { useState } from 'react';
import Link from 'next/link';

const portfolioItems = [
  {
    id: 1,
    title: "Brand Identity Design",
    category: "Graphics Design",
    slug: "brand-identity-design",
    description: "Complete brand identity system including logo design, color palette, typography, and brand guidelines for a modern tech startup.",
    image: "https://readdy.ai/api/search-image?query=Professional%20brand%20identity%20design%20mockup%20with%20elegant%20logo%20on%20business%20cards%2C%20letterhead%2C%20and%20envelope%20on%20white%20marble%20surface%2C%20modern%20minimalist%20corporate%20branding%20materials%2C%20clean%20layout%20with%20navy%20blue%20and%20gold%20accents%2C%20premium%20stationery%20design%2C%20high-end%20professional%20photography%20with%20soft%20shadows&width=800&height=450&seq=portfolio-brand-1&orientation=landscape",
    alt: "Professional brand identity design with logo, business cards, and stationery mockup",
    galleryImages: [
      "https://readdy.ai/api/search-image?query=Modern%20minimalist%20logo%20design%20on%20white%20background%2C%20professional%20brand%20mark%20with%20geometric%20shapes%2C%20clean%20corporate%20identity%2C%20premium%20logo%20showcase&width=1200&height=800&seq=brand-gallery-1&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Business%20card%20mockup%20on%20marble%20surface%2C%20elegant%20corporate%20stationery%20design%2C%20premium%20brand%20identity%20materials%2C%20professional%20photography&width=1200&height=800&seq=brand-gallery-2&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Letterhead%20and%20envelope%20design%20mockup%2C%20professional%20corporate%20stationery%2C%20clean%20brand%20identity%20materials%20on%20white%20background&width=1200&height=800&seq=brand-gallery-3&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Brand%20style%20guide%20pages%20showing%20color%20palette%2C%20typography%2C%20and%20logo%20usage%20rules%2C%20professional%20brand%20guidelines%20design&width=1200&height=800&seq=brand-gallery-4&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Social%20media%20profile%20templates%20with%20brand%20colors%2C%20professional%20digital%20brand%20assets%2C%20modern%20social%20media%20branding&width=1200&height=800&seq=brand-gallery-5&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Email%20signature%20design%20with%20logo%20and%20brand%20colors%2C%20professional%20corporate%20email%20template%2C%20clean%20digital%20branding&width=1200&height=800&seq=brand-gallery-6&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Brand%20pattern%20design%20and%20textures%2C%20professional%20brand%20identity%20elements%2C%20modern%20graphic%20design%20patterns&width=1200&height=800&seq=brand-gallery-7&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Presentation%20template%20with%20brand%20identity%2C%20professional%20corporate%20slide%20design%2C%20modern%20business%20presentation&width=1200&height=800&seq=brand-gallery-8&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Branded%20merchandise%20mockup%20with%20logo%20on%20products%2C%20professional%20brand%20application%2C%20modern%20corporate%20swag&width=1200&height=800&seq=brand-gallery-9&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Complete%20brand%20identity%20showcase%20on%20white%20background%2C%20all%20branding%20materials%20together%2C%20professional%20brand%20system%20overview&width=1200&height=800&seq=brand-gallery-10&orientation=landscape"
    ]
  },
  {
    id: 2,
    title: "Marketing Campaign",
    category: "Graphics Design",
    slug: "marketing-campaign",
    description: "Comprehensive marketing campaign design including social media graphics, digital ads, and promotional materials for product launch.",
    image: "https://readdy.ai/api/search-image?query=Modern%20marketing%20campaign%20showcase%20with%20social%20media%20posts%20on%20phone%20screens%2C%20colorful%20poster%20designs%2C%20and%20digital%20advertisement%20mockups%20on%20white%20background%2C%20vibrant%20promotional%20materials%2C%20professional%20graphic%20design%20presentation%2C%20clean%20corporate%20marketing%20collateral%20with%20engaging%20visuals&width=800&height=450&seq=portfolio-marketing-2&orientation=landscape",
    alt: "Marketing campaign design with social media graphics and digital advertisements",
    galleryImages: [
      "https://readdy.ai/api/search-image?query=Instagram%20post%20design%20with%20vibrant%20colors%2C%20modern%20social%20media%20graphic%2C%20professional%20digital%20marketing%20content&width=1200&height=800&seq=marketing-gallery-1&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Facebook%20ad%20design%20mockup%2C%20professional%20social%20media%20advertisement%2C%20clean%20digital%20marketing%20banner&width=1200&height=800&seq=marketing-gallery-2&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Digital%20banner%20ads%20in%20multiple%20sizes%2C%20professional%20display%20advertising%2C%20modern%20web%20banner%20design&width=1200&height=800&seq=marketing-gallery-3&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Email%20marketing%20template%20design%2C%20professional%20newsletter%20layout%2C%20modern%20email%20campaign%20graphics&width=1200&height=800&seq=marketing-gallery-4&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Promotional%20poster%20design%20with%20bold%20typography%2C%20modern%20marketing%20poster%2C%20professional%20print%20advertisement&width=1200&height=800&seq=marketing-gallery-5&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Instagram%20story%20templates%20with%20brand%20colors%2C%20modern%20social%20media%20stories%2C%20professional%20vertical%20graphics&width=1200&height=800&seq=marketing-gallery-6&orientation=landscape",
      "https://readdy.ai/api/search-image?query=LinkedIn%20post%20design%20for%20business%2C%20professional%20social%20media%20content%2C%20corporate%20marketing%20graphics&width=1200&height=800&seq=marketing-gallery-7&orientation=landscape",
      "https://readdy.ai/api/search-image?query=YouTube%20thumbnail%20design%20with%20engaging%20visuals%2C%20professional%20video%20marketing%20graphics%2C%20modern%20thumbnail%20template&width=1200&height=800&seq=marketing-gallery-8&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Google%20display%20ads%20mockup%2C%20professional%20digital%20advertising%2C%20modern%20banner%20ad%20campaign&width=1200&height=800&seq=marketing-gallery-9&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Complete%20marketing%20campaign%20overview%20with%20all%20materials%2C%20professional%20campaign%20showcase%2C%20modern%20marketing%20collateral&width=1200&height=800&seq=marketing-gallery-10&orientation=landscape"
    ]
  },
  {
    id: 3,
    title: "Logo Design Suite",
    category: "Graphics Design",
    slug: "logo-design-suite",
    description: "Professional logo design collection featuring primary logo, secondary marks, icon versions, and various color variations for versatile brand application.",
    image: "https://readdy.ai/api/search-image?query=Professional%20logo%20design%20collection%20displaying%20multiple%20logo%20variations%20in%20different%20sizes%20and%20colors%20on%20pristine%20white%20background%2C%20modern%20brand%20mark%20showcase%2C%20minimalist%20geometric%20logo%20designs%2C%20clean%20presentation%20with%20primary%20logo%2C%20secondary%20marks%2C%20and%20icon%20versions%20arranged%20systematically&width=800&height=450&seq=portfolio-logo-3&orientation=landscape",
    alt: "Professional logo design suite with multiple variations and color options",
    galleryImages: [
      "https://readdy.ai/api/search-image?query=Primary%20logo%20design%20in%20full%20color%20on%20white%20background%2C%20modern%20minimalist%20brand%20mark%2C%20professional%20corporate%20logo&width=1200&height=800&seq=logo-gallery-1&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Logo%20in%20black%20and%20white%20versions%2C%20monochrome%20brand%20mark%20variations%2C%20professional%20logo%20alternatives&width=1200&height=800&seq=logo-gallery-2&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Logo%20icon%20symbol%20only%2C%20simplified%20brand%20mark%2C%20modern%20minimalist%20icon%20design%20on%20white%20background&width=1200&height=800&seq=logo-gallery-3&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Logo%20on%20dark%20background%20version%2C%20white%20logo%20variation%2C%20professional%20reversed%20logo%20design&width=1200&height=800&seq=logo-gallery-4&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Logo%20size%20variations%20from%20large%20to%20small%2C%20scalability%20showcase%2C%20professional%20logo%20sizing%20guide&width=1200&height=800&seq=logo-gallery-5&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Logo%20with%20tagline%20version%2C%20complete%20brand%20lockup%2C%20professional%20logo%20and%20text%20combination&width=1200&height=800&seq=logo-gallery-6&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Logo%20in%20different%20color%20schemes%2C%20brand%20color%20variations%2C%20professional%20logo%20palette%20options&width=1200&height=800&seq=logo-gallery-7&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Logo%20application%20on%20business%20card%2C%20professional%20brand%20identity%20usage%2C%20modern%20stationery%20mockup&width=1200&height=800&seq=logo-gallery-8&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Logo%20on%20product%20packaging%20mockup%2C%20brand%20application%20example%2C%20professional%20packaging%20design&width=1200&height=800&seq=logo-gallery-9&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Complete%20logo%20suite%20overview%20with%20all%20variations%2C%20professional%20logo%20family%20showcase%2C%20modern%20brand%20system&width=1200&height=800&seq=logo-gallery-10&orientation=landscape"
    ]
  },
  {
    id: 4,
    title: "Print Design Collection",
    category: "Graphics Design",
    slug: "print-design-collection",
    description: "Elegant print design materials including tri-fold brochures, business flyers, and premium business cards with sophisticated layouts and typography.",
    image: "https://readdy.ai/api/search-image?query=Elegant%20print%20design%20collection%20featuring%20tri-fold%20brochures%2C%20business%20flyers%2C%20and%20premium%20business%20cards%20arranged%20on%20white%20marble%20surface%2C%20professional%20corporate%20print%20materials%2C%20modern%20layout%20design%20with%20clean%20typography%2C%20high-quality%20offset%20printing%20showcase%20with%20sophisticated%20color%20scheme&width=800&height=450&seq=portfolio-print-4&orientation=landscape",
    alt: "Print design collection including brochures, flyers, and business cards",
    galleryImages: [
      "https://readdy.ai/api/search-image?query=Tri-fold%20brochure%20design%20open%20on%20marble%20surface%2C%20professional%20corporate%20brochure%2C%20modern%20print%20layout&width=1200&height=800&seq=print-gallery-1&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Business%20flyer%20design%20with%20bold%20typography%2C%20professional%20promotional%20flyer%2C%20modern%20print%20advertisement&width=1200&height=800&seq=print-gallery-2&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Premium%20business%20card%20design%20front%20and%20back%2C%20elegant%20corporate%20cards%2C%20professional%20stationery&width=1200&height=800&seq=print-gallery-3&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Company%20profile%20booklet%20design%2C%20professional%20corporate%20brochure%2C%20modern%20multi-page%20print%20layout&width=1200&height=800&seq=print-gallery-4&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Poster%20design%20with%20modern%20layout%2C%20professional%20print%20poster%2C%20clean%20graphic%20design%20for%20events&width=1200&height=800&seq=print-gallery-5&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Magazine%20ad%20design%20layout%2C%20professional%20print%20advertisement%2C%20modern%20editorial%20design&width=1200&height=800&seq=print-gallery-6&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Catalog%20design%20pages%20spread%2C%20professional%20product%20catalog%2C%20modern%20print%20layout%20with%20grid%20system&width=1200&height=800&seq=print-gallery-7&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Postcard%20design%20front%20and%20back%2C%20professional%20direct%20mail%2C%20modern%20promotional%20print%20material&width=1200&height=800&seq=print-gallery-8&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Folder%20design%20with%20pocket%2C%20professional%20corporate%20folder%2C%20modern%20print%20stationery&width=1200&height=800&seq=print-gallery-9&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Complete%20print%20collateral%20set%20on%20white%20background%2C%20all%20print%20materials%20together%2C%20professional%20print%20design%20showcase&width=1200&height=800&seq=print-gallery-10&orientation=landscape"
    ]
  },
  {
    id: 5,
    title: "Packaging Design",
    category: "Graphics Design",
    slug: "packaging-design",
    description: "Creative product packaging design featuring modern branded boxes, bottles, and containers with elegant branding elements and premium finishes.",
    image: "https://readdy.ai/api/search-image?query=Creative%20product%20packaging%20design%20mockup%20with%20modern%20branded%20boxes%2C%20bottles%2C%20and%20containers%20on%20clean%20white%20background%2C%20premium%20package%20design%20showcase%2C%20minimalist%20product%20packaging%20with%20elegant%20branding%20elements%2C%20professional%20studio%20photography%20with%20soft%20lighting%20and%20clean%20shadows&width=800&height=450&seq=portfolio-packaging-5&orientation=landscape",
    alt: "Product packaging design with branded boxes and containers",
    galleryImages: [
      "https://readdy.ai/api/search-image?query=Product%20box%20packaging%20design%20closed%2C%20modern%20branded%20box%2C%20professional%20package%20mockup%20on%20white%20background&width=1200&height=800&seq=packaging-gallery-1&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Product%20box%20opened%20showing%20inside%2C%20professional%20unboxing%20experience%2C%20modern%20packaging%20interior%20design&width=1200&height=800&seq=packaging-gallery-2&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Bottle%20label%20design%20mockup%2C%20professional%20product%20label%2C%20modern%20beverage%20packaging&width=1200&height=800&seq=packaging-gallery-3&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Pouch%20packaging%20design%2C%20professional%20flexible%20packaging%2C%20modern%20stand-up%20pouch%20with%20branding&width=1200&height=800&seq=packaging-gallery-4&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Jar%20packaging%20with%20label%2C%20professional%20container%20design%2C%20modern%20product%20jar%20mockup&width=1200&height=800&seq=packaging-gallery-5&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Shopping%20bag%20design%20with%20brand%20logo%2C%20professional%20retail%20bag%2C%20modern%20packaging%20carrier&width=1200&height=800&seq=packaging-gallery-6&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Product%20tube%20packaging%20design%2C%20professional%20cosmetic%20tube%2C%20modern%20squeeze%20tube%20mockup&width=1200&height=800&seq=packaging-gallery-7&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Gift%20box%20packaging%20with%20ribbon%2C%20professional%20premium%20packaging%2C%20modern%20luxury%20box%20design&width=1200&height=800&seq=packaging-gallery-8&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Packaging%20pattern%20and%20texture%20design%2C%20professional%20brand%20pattern%2C%20modern%20packaging%20graphics&width=1200&height=800&seq=packaging-gallery-9&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Complete%20packaging%20system%20with%20all%20products%2C%20professional%20packaging%20family%2C%20modern%20brand%20packaging%20showcase&width=1200&height=800&seq=packaging-gallery-10&orientation=landscape"
    ]
  },
  {
    id: 6,
    title: "Social Media Graphics",
    category: "Graphics Design",
    slug: "social-media-graphics",
    description: "Modern social media graphics template collection including Instagram posts, Facebook covers, and Twitter banners with consistent branding and engaging visuals.",
    image: "https://readdy.ai/api/search-image?query=Modern%20social%20media%20graphics%20template%20collection%20displayed%20on%20multiple%20smartphone%20and%20tablet%20screens%2C%20Instagram%20posts%2C%20Facebook%20covers%2C%20and%20Twitter%20banners%20with%20consistent%20branding%2C%20colorful%20digital%20marketing%20designs%2C%20professional%20social%20media%20content%20mockup%20on%20white%20background%20with%20clean%20presentation&width=800&height=450&seq=portfolio-social-6&orientation=landscape",
    alt: "Social media graphics templates for Instagram, Facebook, and Twitter",
    galleryImages: [
      "https://readdy.ai/api/search-image?query=Instagram%20feed%20post%20design%20with%20modern%20layout%2C%20professional%20social%20media%20graphic%2C%20clean%20digital%20content&width=1200&height=800&seq=social-gallery-1&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Instagram%20carousel%20post%20design%20multiple%20slides%2C%20professional%20social%20media%20series%2C%20modern%20swipeable%20content&width=1200&height=800&seq=social-gallery-2&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Instagram%20story%20template%20with%20interactive%20elements%2C%20professional%20vertical%20social%20media%2C%20modern%20story%20design&width=1200&height=800&seq=social-gallery-3&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Facebook%20cover%20photo%20design%2C%20professional%20social%20media%20header%2C%20modern%20banner%20for%20business%20page&width=1200&height=800&seq=social-gallery-4&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Twitter%20header%20design%20with%20brand%20colors%2C%20professional%20social%20media%20banner%2C%20modern%20X%20platform%20cover&width=1200&height=800&seq=social-gallery-5&orientation=landscape",
      "https://readdy.ai/api/search-image?query=LinkedIn%20banner%20design%20for%20company%20page%2C%20professional%20business%20social%20media%2C%20modern%20corporate%20header&width=1200&height=800&seq=social-gallery-6&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Pinterest%20pin%20design%20with%20vertical%20layout%2C%20professional%20social%20media%20graphic%2C%20modern%20pinnable%20content&width=1200&height=800&seq=social-gallery-7&orientation=landscape",
      "https://readdy.ai/api/search-image?query=YouTube%20channel%20art%20design%2C%20professional%20video%20platform%20banner%2C%20modern%20channel%20header&width=1200&height=800&seq=social-gallery-8&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Social%20media%20quote%20graphic%20design%2C%20professional%20inspirational%20post%2C%20modern%20typography%20layout&width=1200&height=800&seq=social-gallery-9&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Complete%20social%20media%20template%20kit%20overview%2C%20all%20platform%20graphics%20together%2C%20professional%20social%20media%20branding&width=1200&height=800&seq=social-gallery-10&orientation=landscape"
    ]
  },
  {
    id: 7,
    title: "E-Commerce Website",
    category: "Web Development",
    slug: "ecommerce-website",
    description: "Modern e-commerce website with clean product grid layout, shopping cart functionality, and seamless checkout experience with responsive design.",
    image: "https://readdy.ai/api/search-image?query=Modern%20e-commerce%20website%20design%20displayed%20on%20laptop%20screen%20showing%20clean%20product%20grid%20layout%2C%20shopping%20cart%20interface%2C%20professional%20online%20store%20UI%20with%20minimalist%20design%2C%20white%20background%2C%20high-quality%20web%20design%20mockup%20with%20elegant%20typography%20and%20smooth%20user%20interface&width=800&height=450&seq=portfolio-web-1&orientation=landscape",
    alt: "E-commerce website design with product catalog and shopping cart",
    galleryImages: [
      "https://readdy.ai/api/search-image?query=E-commerce%20homepage%20design%20on%20laptop%20screen%2C%20modern%20online%20store%20landing%20page%2C%20professional%20web%20UI&width=1200&height=800&seq=web-gallery-1&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Product%20listing%20page%20with%20grid%20layout%2C%20modern%20e-commerce%20catalog%2C%20professional%20shop%20page%20design&width=1200&height=800&seq=web-gallery-2&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Product%20detail%20page%20design%2C%20modern%20e-commerce%20product%20view%2C%20professional%20item%20page%20with%20images%20and%20description&width=1200&height=800&seq=web-gallery-3&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Shopping%20cart%20page%20design%2C%20modern%20checkout%20process%2C%20professional%20e-commerce%20cart%20interface&width=1200&height=800&seq=web-gallery-4&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Checkout%20page%20with%20payment%20form%2C%20modern%20e-commerce%20checkout%2C%20professional%20payment%20interface%20design&width=1200&height=800&seq=web-gallery-5&orientation=landscape",
      "https://readdy.ai/api/search-image?query=User%20account%20dashboard%20for%20e-commerce%2C%20modern%20customer%20profile%20page%2C%20professional%20order%20history%20interface&width=1200&height=800&seq=web-gallery-6&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Mobile%20responsive%20e-commerce%20design%20on%20phone%2C%20modern%20mobile%20shop%20interface%2C%20professional%20responsive%20web%20design&width=1200&height=800&seq=web-gallery-7&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Product%20search%20and%20filter%20interface%2C%20modern%20e-commerce%20filtering%2C%20professional%20search%20results%20page&width=1200&height=800&seq=web-gallery-8&orientation=landscape",
      "https://readdy.ai/api/search-image?query=E-commerce%20category%20page%20design%2C%20modern%20product%20categories%2C%20professional%20navigation%20interface&width=1200&height=800&seq=web-gallery-9&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Complete%20e-commerce%20website%20flow%20on%20multiple%20screens%2C%20full%20user%20journey%2C%20professional%20web%20design%20showcase&width=1200&height=800&seq=web-gallery-10&orientation=landscape"
    ]
  },
  {
    id: 8,
    title: "Dashboard UI Design",
    category: "Web Development",
    slug: "dashboard-ui-design",
    description: "Professional dashboard interface featuring analytics charts, data visualization, and clean admin panel with modern design and intuitive navigation.",
    image: "https://readdy.ai/api/search-image?query=Professional%20dashboard%20UI%20design%20on%20computer%20monitor%20showing%20analytics%20charts%2C%20data%20visualization%2C%20clean%20admin%20panel%20interface%2C%20modern%20web%20application%20design%20with%20graphs%20and%20statistics%2C%20minimalist%20corporate%20dashboard%20with%20blue%20accent%20colors%20on%20white%20background&width=800&height=450&seq=portfolio-web-2&orientation=landscape",
    alt: "Dashboard UI design with analytics charts and data visualization",
    galleryImages: [
      "https://readdy.ai/api/search-image?query=Dashboard%20overview%20page%20with%20charts%20and%20graphs%2C%20modern%20analytics%20interface%2C%20professional%20admin%20panel%20design&width=1200&height=800&seq=dashboard-gallery-1&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Data%20table%20interface%20with%20sorting%20and%20filtering%2C%20modern%20dashboard%20table%20view%2C%20professional%20data%20management%20UI&width=1200&height=800&seq=dashboard-gallery-2&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Analytics%20page%20with%20line%20charts%20and%20bar%20graphs%2C%20modern%20data%20visualization%2C%20professional%20statistics%20dashboard&width=1200&height=800&seq=dashboard-gallery-3&orientation=landscape",
      "https://readdy.ai/api/search-image?query=User%20management%20interface%20in%20dashboard%2C%20modern%20admin%20panel%2C%20professional%20user%20list%20and%20controls&width=1200&height=800&seq=dashboard-gallery-4&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Settings%20page%20interface%20design%2C%20modern%20dashboard%20settings%2C%20professional%20configuration%20panel&width=1200&height=800&seq=dashboard-gallery-5&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Dashboard%20sidebar%20navigation%20menu%2C%20modern%20admin%20panel%20sidebar%2C%20professional%20navigation%20interface&width=1200&height=800&seq=dashboard-gallery-6&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Dashboard%20notifications%20and%20alerts%20interface%2C%20modern%20notification%20center%2C%20professional%20alert%20system%20UI&width=1200&height=800&seq=dashboard-gallery-7&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Dashboard%20reports%20page%20with%20export%20options%2C%20modern%20reporting%20interface%2C%20professional%20data%20export%20UI&width=1200&height=800&seq=dashboard-gallery-8&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Dashboard%20mobile%20responsive%20view%20on%20tablet%2C%20modern%20responsive%20admin%20panel%2C%20professional%20mobile%20dashboard&width=1200&height=800&seq=dashboard-gallery-9&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Complete%20dashboard%20UI%20kit%20with%20all%20components%2C%20modern%20admin%20interface%20system%2C%20professional%20dashboard%20design%20showcase&width=1200&height=800&seq=dashboard-gallery-10&orientation=landscape"
    ]
  },
  {
    id: 9,
    title: "Landing Page Design",
    category: "Web Development",
    slug: "landing-page-design",
    description: "Modern landing page with compelling hero section, clear call-to-action buttons, and conversion-focused layout with elegant typography.",
    image: "https://readdy.ai/api/search-image?query=Modern%20landing%20page%20website%20design%20on%20laptop%20screen%20showing%20hero%20section%20with%20call-to-action%20buttons%2C%20clean%20layout%2C%20professional%20web%20design%20mockup%2C%20minimalist%20business%20website%20interface%20with%20elegant%20typography%20and%20modern%20UI%20elements%20on%20white%20background&width=800&height=450&seq=portfolio-web-3&orientation=landscape",
    alt: "Landing page design with hero section and call-to-action",
    galleryImages: [
      "https://readdy.ai/api/search-image?query=Landing%20page%20hero%20section%20design%2C%20modern%20website%20header%20with%20CTA%2C%20professional%20above-the-fold%20design&width=1200&height=800&seq=landing-gallery-1&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Landing%20page%20features%20section%2C%20modern%20benefit%20showcase%2C%20professional%20feature%20grid%20layout&width=1200&height=800&seq=landing-gallery-2&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Landing%20page%20pricing%20section%20design%2C%20modern%20pricing%20table%2C%20professional%20subscription%20plans%20layout&width=1200&height=800&seq=landing-gallery-3&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Landing%20page%20testimonials%20section%2C%20modern%20customer%20reviews%2C%20professional%20social%20proof%20design&width=1200&height=800&seq=landing-gallery-4&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Landing%20page%20contact%20form%20design%2C%20modern%20lead%20capture%20form%2C%20professional%20conversion%20form%20layout&width=1200&height=800&seq=landing-gallery-5&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Landing%20page%20call-to-action%20section%2C%20modern%20CTA%20banner%2C%20professional%20conversion-focused%20design&width=1200&height=800&seq=landing-gallery-6&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Landing%20page%20about%20section%20with%20team%2C%20modern%20company%20introduction%2C%20professional%20about%20us%20layout&width=1200&height=800&seq=landing-gallery-7&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Landing%20page%20FAQ%20section%20design%2C%20modern%20questions%20and%20answers%2C%20professional%20help%20section%20layout&width=1200&height=800&seq=landing-gallery-8&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Landing%20page%20mobile%20responsive%20view%2C%20modern%20mobile%20landing%20page%2C%20professional%20responsive%20design&width=1200&height=800&seq=landing-gallery-9&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Complete%20landing%20page%20full%20scroll%20view%2C%20entire%20page%20layout%2C%20professional%20landing%20page%20showcase&width=1200&height=800&seq=landing-gallery-10&orientation=landscape"
    ]
  },
  {
    id: 10,
    title: "SaaS Web Application",
    category: "Web Development",
    slug: "saas-web-application",
    description: "Professional SaaS platform interface with modern software dashboard, user management system, and project collaboration tools.",
    image: "https://readdy.ai/api/search-image?query=Professional%20SaaS%20web%20application%20interface%20on%20desktop%20monitor%20showing%20modern%20software%20dashboard%2C%20clean%20user%20management%20system%2C%20project%20collaboration%20tools%2C%20minimalist%20enterprise%20software%20UI%20with%20blue%20and%20white%20color%20scheme%20on%20white%20background&width=800&height=450&seq=portfolio-web-4&orientation=landscape",
    alt: "SaaS web application with dashboard and collaboration tools",
    galleryImages: [
      "https://readdy.ai/api/search-image?query=SaaS%20application%20dashboard%20homepage%2C%20modern%20software%20interface%2C%20professional%20web%20app%20main%20screen&width=1200&height=800&seq=saas-gallery-1&orientation=landscape",
      "https://readdy.ai/api/search-image?query=SaaS%20project%20management%20interface%2C%20modern%20task%20board%2C%20professional%20kanban%20board%20design&width=1200&height=800&seq=saas-gallery-2&orientation=landscape",
      "https://readdy.ai/api/search-image?query=SaaS%20team%20collaboration%20page%2C%20modern%20workspace%20interface%2C%20professional%20team%20management%20UI&width=1200&height=800&seq=saas-gallery-3&orientation=landscape",
      "https://readdy.ai/api/search-image?query=SaaS%20file%20management%20interface%2C%20modern%20document%20library%2C%20professional%20file%20browser%20design&width=1200&height=800&seq=saas-gallery-4&orientation=landscape",
      "https://readdy.ai/api/search-image?query=SaaS%20calendar%20and%20scheduling%20interface%2C%20modern%20appointment%20system%2C%20professional%20calendar%20view&width=1200&height=800&seq=saas-gallery-5&orientation=landscape",
      "https://readdy.ai/api/search-image?query=SaaS%20messaging%20and%20chat%20interface%2C%20modern%20communication%20panel%2C%20professional%20chat%20UI%20design&width=1200&height=800&seq=saas-gallery-6&orientation=landscape",
      "https://readdy.ai/api/search-image?query=SaaS%20analytics%20and%20reporting%20page%2C%20modern%20metrics%20dashboard%2C%20professional%20data%20insights%20interface&width=1200&height=800&seq=saas-gallery-7&orientation=landscape",
      "https://readdy.ai/api/search-image?query=SaaS%20user%20profile%20and%20settings%2C%20modern%20account%20management%2C%20professional%20settings%20interface&width=1200&height=800&seq=saas-gallery-8&orientation=landscape",
      "https://readdy.ai/api/search-image?query=SaaS%20billing%20and%20subscription%20page%2C%20modern%20payment%20management%2C%20professional%20billing%20interface&width=1200&height=800&seq=saas-gallery-9&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Complete%20SaaS%20application%20interface%20overview%2C%20all%20features%20showcase%2C%20professional%20web%20app%20design%20system&width=1200&height=800&seq=saas-gallery-10&orientation=landscape"
    ]
  },
  {
    id: 11,
    title: "Portfolio Website",
    category: "Web Development",
    slug: "portfolio-website",
    description: "Creative portfolio website showcasing elegant project gallery, modern personal brand, and beautiful typography with clean navigation.",
    image: "https://readdy.ai/api/search-image?query=Creative%20portfolio%20website%20design%20on%20laptop%20screen%20showing%20elegant%20project%20gallery%2C%20modern%20personal%20brand%20website%2C%20minimalist%20portfolio%20layout%20with%20beautiful%20typography%2C%20professional%20web%20design%20mockup%20with%20clean%20navigation%20and%20hero%20section%20on%20white%20background&width=800&height=450&seq=portfolio-web-5&orientation=landscape",
    alt: "Portfolio website design with project gallery and clean navigation",
    galleryImages: [
      "https://readdy.ai/api/search-image?query=Portfolio%20website%20homepage%20with%20hero%20section%2C%20modern%20creative%20landing%20page%2C%20professional%20personal%20brand%20design&width=1200&height=800&seq=portfolio-site-gallery-1&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Portfolio%20project%20grid%20layout%2C%20modern%20work%20showcase%2C%20professional%20project%20gallery%20design&width=1200&height=800&seq=portfolio-site-gallery-2&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Portfolio%20project%20detail%20page%2C%20modern%20case%20study%20layout%2C%20professional%20project%20presentation&width=1200&height=800&seq=portfolio-site-gallery-3&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Portfolio%20about%20page%20design%2C%20modern%20personal%20bio%20section%2C%20professional%20about%20me%20layout&width=1200&height=800&seq=portfolio-site-gallery-4&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Portfolio%20skills%20and%20services%20page%2C%20modern%20expertise%20showcase%2C%20professional%20capabilities%20section&width=1200&height=800&seq=portfolio-site-gallery-5&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Portfolio%20contact%20page%20design%2C%20modern%20contact%20form%2C%20professional%20get%20in%20touch%20layout&width=1200&height=800&seq=portfolio-site-gallery-6&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Portfolio%20blog%20or%20articles%20page%2C%20modern%20content%20layout%2C%20professional%20blog%20design&width=1200&height=800&seq=portfolio-site-gallery-7&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Portfolio%20testimonials%20section%2C%20modern%20client%20reviews%2C%20professional%20recommendations%20display&width=1200&height=800&seq=portfolio-site-gallery-8&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Portfolio%20mobile%20responsive%20design%2C%20modern%20mobile%20portfolio%2C%20professional%20responsive%20layout&width=1200&height=800&seq=portfolio-site-gallery-9&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Complete%20portfolio%20website%20flow%2C%20all%20pages%20overview%2C%20professional%20portfolio%20site%20showcase&width=1200&height=800&seq=portfolio-site-gallery-10&orientation=landscape"
    ]
  },
  {
    id: 12,
    title: "Mobile Responsive UI",
    category: "Web Development",
    slug: "mobile-responsive-ui",
    description: "Mobile responsive website design showcasing adaptive layout across desktop, tablet, and smartphone with consistent user experience.",
    image: "https://readdy.ai/api/search-image?query=Mobile%20responsive%20website%20design%20mockup%20showing%20same%20website%20on%20desktop%2C%20tablet%2C%20and%20smartphone%20screens%2C%20modern%20responsive%20web%20design%20showcase%2C%20clean%20adaptive%20layout%20demonstration%2C%20professional%20multi-device%20mockup%20on%20white%20background%20with%20consistent%20UI%20across%20all%20devices&width=800&height=450&seq=portfolio-web-6&orientation=landscape",
    alt: "Mobile responsive website design across multiple devices",
    galleryImages: [
      "https://readdy.ai/api/search-image?query=Responsive%20website%20on%20desktop%20computer%2C%20modern%20full-width%20layout%2C%20professional%20desktop%20web%20design&width=1200&height=800&seq=responsive-gallery-1&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Responsive%20website%20on%20tablet%20device%2C%20modern%20tablet%20layout%2C%20professional%20iPad%20web%20design&width=1200&height=800&seq=responsive-gallery-2&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Responsive%20website%20on%20smartphone%2C%20modern%20mobile%20layout%2C%20professional%20phone%20web%20design&width=1200&height=800&seq=responsive-gallery-3&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Responsive%20navigation%20menu%20on%20mobile%2C%20modern%20hamburger%20menu%2C%20professional%20mobile%20navigation&width=1200&height=800&seq=responsive-gallery-4&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Responsive%20grid%20layout%20across%20devices%2C%20modern%20adaptive%20grid%2C%20professional%20responsive%20design%20system&width=1200&height=800&seq=responsive-gallery-5&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Responsive%20typography%20scaling%2C%20modern%20text%20adaptation%2C%20professional%20font%20sizing%20across%20devices&width=1200&height=800&seq=responsive-gallery-6&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Responsive%20images%20and%20media%2C%20modern%20image%20adaptation%2C%20professional%20responsive%20media%20design&width=1200&height=800&seq=responsive-gallery-7&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Responsive%20form%20design%20on%20mobile%2C%20modern%20mobile%20form%2C%20professional%20touch-friendly%20input%20design&width=1200&height=800&seq=responsive-gallery-8&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Responsive%20breakpoints%20visualization%2C%20modern%20screen%20size%20adaptation%2C%20professional%20responsive%20design%20guide&width=1200&height=800&seq=responsive-gallery-9&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Complete%20responsive%20design%20showcase%20on%20all%20devices%2C%20modern%20multi-device%20layout%2C%20professional%20responsive%20web%20design%20overview&width=1200&height=800&seq=responsive-gallery-10&orientation=landscape"
    ]
  },
  {
    id: 13,
    title: "Architectural Visualization",
    category: "3D Design",
    slug: "architectural-visualization",
    description: "Photorealistic 3D architectural exterior rendering of modern luxury house with contemporary design and natural lighting.",
    image: "https://readdy.ai/api/search-image?query=Photorealistic%203D%20architectural%20exterior%20rendering%20of%20modern%20luxury%20house%20with%20glass%20windows%2C%20contemporary%20architecture%20visualization%2C%20clean%20minimalist%20building%20design%2C%20professional%20architectural%203D%20render%20with%20natural%20lighting%2C%20white%20background%2C%20high-quality%20CGI%20visualization&width=800&height=450&seq=portfolio-3d-1&orientation=landscape",
    alt: "Photorealistic 3D architectural rendering of modern luxury house",
    galleryImages: [
      "https://readdy.ai/api/search-image?query=Modern%20house%20exterior%20front%20view%203D%20render%2C%20photorealistic%20architecture%2C%20professional%20building%20visualization&width=1200&height=800&seq=arch-gallery-1&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Modern%20house%20exterior%20side%20angle%203D%20render%2C%20contemporary%20architecture%20view%2C%20professional%20building%20perspective&width=1200&height=800&seq=arch-gallery-2&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Modern%20house%20exterior%20rear%20view%203D%20render%2C%20backyard%20architecture%20visualization%2C%20professional%20garden%20view&width=1200&height=800&seq=arch-gallery-3&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Modern%20house%20exterior%20night%20render%2C%20evening%20architecture%20lighting%2C%20professional%20illuminated%20building&width=1200&height=800&seq=arch-gallery-4&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Modern%20house%20exterior%20aerial%20view%203D%20render%2C%20birds%20eye%20architecture%2C%20professional%20top-down%20visualization&width=1200&height=800&seq=arch-gallery-5&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Modern%20house%20entrance%20detail%203D%20render%2C%20front%20door%20close-up%2C%20professional%20architectural%20detail&width=1200&height=800&seq=arch-gallery-6&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Modern%20house%20pool%20area%203D%20render%2C%20outdoor%20living%20space%2C%20professional%20landscape%20architecture&width=1200&height=800&seq=arch-gallery-7&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Modern%20house%20garage%20and%20driveway%203D%20render%2C%20parking%20area%20visualization%2C%20professional%20exterior%20detail&width=1200&height=800&seq=arch-gallery-8&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Modern%20house%20balcony%20and%20terrace%203D%20render%2C%20outdoor%20space%20visualization%2C%20professional%20architectural%20feature&width=1200&height=800&seq=arch-gallery-9&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Modern%20house%20complete%20exterior%20showcase%2C%20all%20angles%20compilation%2C%20professional%20architecture%20portfolio&width=1200&height=800&seq=arch-gallery-10&orientation=landscape"
    ]
  },
  {
    id: 14,
    title: "Interior Design Rendering",
    category: "3D Design",
    slug: "interior-design-rendering",
    description: "Photorealistic 3D interior rendering of modern living room with elegant furniture and contemporary design with natural lighting.",
    image: "https://readdy.ai/api/search-image?query=Photorealistic%203D%20interior%20rendering%20of%20modern%20living%20room%20with%20elegant%20furniture%2C%20contemporary%20interior%20design%20visualization%2C%20clean%20minimalist%20space%20with%20natural%20lighting%2C%20professional%20architectural%20interior%203D%20render%2C%20white%20walls%2C%20high-quality%20CGI%20visualization%20with%20realistic%20materials&width=800&height=450&seq=portfolio-3d-2&orientation=landscape",
    alt: "Photorealistic 3D interior rendering of modern living room",
    galleryImages: [
      "https://readdy.ai/api/search-image?query=Modern%20living%20room%20interior%203D%20render%2C%20photorealistic%20furniture%20and%20decor%2C%20professional%20interior%20visualization&width=1200&height=800&seq=interior-gallery-1&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Modern%20kitchen%20interior%203D%20render%2C%20contemporary%20kitchen%20design%2C%20professional%20culinary%20space%20visualization&width=1200&height=800&seq=interior-gallery-2&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Modern%20bedroom%20interior%203D%20render%2C%20elegant%20sleeping%20space%2C%20professional%20bedroom%20design%20visualization&width=1200&height=800&seq=interior-gallery-3&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Modern%20bathroom%20interior%203D%20render%2C%20luxury%20bathroom%20design%2C%20professional%20spa-like%20space%20visualization&width=1200&height=800&seq=interior-gallery-4&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Modern%20dining%20room%20interior%203D%20render%2C%20elegant%20dining%20space%2C%20professional%20dining%20area%20visualization&width=1200&height=800&seq=interior-gallery-5&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Modern%20home%20office%20interior%203D%20render%2C%20contemporary%20workspace%2C%20professional%20study%20room%20visualization&width=1200&height=800&seq=interior-gallery-6&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Modern%20hallway%20and%20entrance%203D%20render%2C%20elegant%20foyer%20design%2C%20professional%20entryway%20visualization&width=1200&height=800&seq=interior-gallery-7&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Modern%20walk-in%20closet%203D%20render%2C%20luxury%20wardrobe%20space%2C%20professional%20closet%20design%20visualization&width=1200&height=800&seq=interior-gallery-8&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Modern%20interior%20lighting%20design%203D%20render%2C%20evening%20ambiance%2C%20professional%20night%20interior%20visualization&width=1200&height=800&seq=interior-gallery-9&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Complete%20modern%20interior%20design%20showcase%2C%20all%20rooms%20overview%2C%20professional%20interior%20portfolio&width=1200&height=800&seq=interior-gallery-10&orientation=landscape"
    ]
  },
  {
    id: 15,
    title: "Product Rendering",
    category: "3D Design",
    slug: "product-rendering",
    description: "Photorealistic 3D product rendering with studio lighting, detailed materials and reflections in premium product photography style.",
    image: "https://readdy.ai/api/search-image?query=Photorealistic%203D%20product%20rendering%20of%20modern%20electronic%20device%20or%20luxury%20product%20on%20clean%20white%20background%2C%20professional%20commercial%20product%20visualization%2C%20high-quality%20CGI%20render%20with%20studio%20lighting%2C%20detailed%20materials%20and%20reflections%2C%20premium%20product%20photography%20style%203D%20visualization&width=800&height=450&seq=portfolio-3d-3&orientation=landscape",
    alt: "Photorealistic 3D product rendering with studio lighting",
    galleryImages: [
      "https://readdy.ai/api/search-image?query=Product%203D%20render%20front%20view%20on%20white%20background%2C%20photorealistic%20commercial%20visualization%2C%20professional%20product%20shot&width=1200&height=800&seq=product-gallery-1&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Product%203D%20render%20side%20angle%20view%2C%20detailed%20material%20showcase%2C%20professional%20product%20perspective&width=1200&height=800&seq=product-gallery-2&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Product%203D%20render%20top%20view%2C%20overhead%20product%20shot%2C%20professional%20birds%20eye%20product%20visualization&width=1200&height=800&seq=product-gallery-3&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Product%203D%20render%20close-up%20detail%2C%20material%20and%20texture%20focus%2C%20professional%20macro%20product%20shot&width=1200&height=800&seq=product-gallery-4&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Product%203D%20render%20with%20packaging%2C%20complete%20product%20presentation%2C%20professional%20boxed%20product%20visualization&width=1200&height=800&seq=product-gallery-5&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Product%203D%20render%20in%20use%20context%2C%20lifestyle%20product%20shot%2C%20professional%20product%20in%20environment&width=1200&height=800&seq=product-gallery-6&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Product%203D%20render%20color%20variations%2C%20multiple%20color%20options%2C%20professional%20product%20palette%20showcase&width=1200&height=800&seq=product-gallery-7&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Product%203D%20render%20exploded%20view%2C%20component%20breakdown%2C%20professional%20technical%20product%20visualization&width=1200&height=800&seq=product-gallery-8&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Product%203D%20render%20with%20dramatic%20lighting%2C%20artistic%20product%20shot%2C%20professional%20creative%20visualization&width=1200&height=800&seq=product-gallery-9&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Complete%20product%203D%20render%20collection%2C%20all%20angles%20showcase%2C%20professional%20product%20portfolio&width=1200&height=800&seq=product-gallery-10&orientation=landscape"
    ]
  },
  {
    id: 16,
    title: "Modern Furniture Design",
    category: "3D Design",
    slug: "modern-furniture-design",
    description: "Photorealistic 3D furniture rendering showing modern designer chair and table set with elegant materials and minimalist design.",
    image: "https://readdy.ai/api/search-image?query=Photorealistic%203D%20furniture%20rendering%20showing%20modern%20designer%20chair%20and%20table%20set%2C%20contemporary%20furniture%20visualization%20with%20elegant%20materials%2C%20clean%20minimalist%20furniture%20design%20on%20white%20background%2C%20professional%20product%203D%20render%20with%20studio%20lighting%20and%20realistic%20wood%20and%20metal%20textures&width=800&height=450&seq=portfolio-3d-4&orientation=landscape",
    alt: "Photorealistic 3D furniture rendering with modern design",
    galleryImages: [
      "https://readdy.ai/api/search-image?query=Modern%20chair%203D%20render%20front%20view%2C%20designer%20furniture%20visualization%2C%20professional%20seating%20design&width=1200&height=800&seq=furniture-gallery-1&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Modern%20table%203D%20render%2C%20contemporary%20dining%20table%2C%20professional%20furniture%20product%20visualization&width=1200&height=800&seq=furniture-gallery-2&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Modern%20sofa%203D%20render%2C%20luxury%20couch%20design%2C%20professional%20living%20room%20furniture%20visualization&width=1200&height=800&seq=furniture-gallery-3&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Modern%20bed%20frame%203D%20render%2C%20contemporary%20bedroom%20furniture%2C%20professional%20bed%20design%20visualization&width=1200&height=800&seq=furniture-gallery-4&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Modern%20cabinet%203D%20render%2C%20storage%20furniture%20design%2C%20professional%20cabinet%20visualization&width=1200&height=800&seq=furniture-gallery-5&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Modern%20desk%203D%20render%2C%20contemporary%20workspace%20furniture%2C%20professional%20office%20desk%20visualization&width=1200&height=800&seq=furniture-gallery-6&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Modern%20shelving%20unit%203D%20render%2C%20bookshelf%20design%2C%20professional%20storage%20furniture%20visualization&width=1200&height=800&seq=furniture-gallery-7&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Modern%20lamp%203D%20render%2C%20designer%20lighting%20fixture%2C%20professional%20lighting%20product%20visualization&width=1200&height=800&seq=furniture-gallery-8&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Furniture%20material%20close-up%203D%20render%2C%20wood%20and%20metal%20textures%2C%20professional%20material%20showcase&width=1200&height=800&seq=furniture-gallery-9&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Complete%20furniture%20collection%203D%20render%2C%20modern%20furniture%20set%2C%20professional%20furniture%20portfolio&width=1200&height=800&seq=furniture-gallery-10&orientation=landscape"
    ]
  },
  {
    id: 17,
    title: "Commercial Space Design",
    category: "3D Design",
    slug: "commercial-space-design",
    description: "Photorealistic 3D rendering of modern commercial office interior with open workspace and contemporary corporate environment.",
    image: "https://readdy.ai/api/search-image?query=Photorealistic%203D%20rendering%20of%20modern%20commercial%20office%20interior%20with%20open%20workspace%2C%20contemporary%20corporate%20office%20visualization%2C%20clean%20minimalist%20business%20environment%20with%20glass%20partitions%20and%20modern%20furniture%2C%20professional%20architectural%20interior%203D%20render%20with%20natural%20daylight%20and%20high-quality%20materials&width=800&height=450&seq=portfolio-3d-5&orientation=landscape",
    alt: "Photorealistic 3D commercial office interior rendering",
    galleryImages: [
      "https://readdy.ai/api/search-image?query=Modern%20office%20open%20workspace%203D%20render%2C%20contemporary%20corporate%20interior%2C%20professional%20office%20visualization&width=1200&height=800&seq=commercial-gallery-1&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Modern%20office%20meeting%20room%203D%20render%2C%20conference%20room%20design%2C%20professional%20business%20space%20visualization&width=1200&height=800&seq=commercial-gallery-2&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Modern%20office%20reception%20area%203D%20render%2C%20lobby%20design%2C%20professional%20entrance%20space%20visualization&width=1200&height=800&seq=commercial-gallery-3&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Modern%20office%20private%20workspace%203D%20render%2C%20executive%20office%2C%20professional%20private%20office%20visualization&width=1200&height=800&seq=commercial-gallery-4&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Modern%20office%20break%20room%203D%20render%2C%20employee%20lounge%2C%20professional%20relaxation%20space%20visualization&width=1200&height=800&seq=commercial-gallery-5&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Modern%20retail%20store%20interior%203D%20render%2C%20commercial%20shop%20design%2C%20professional%20retail%20space%20visualization&width=1200&height=800&seq=commercial-gallery-6&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Modern%20restaurant%20interior%203D%20render%2C%20dining%20space%20design%2C%20professional%20restaurant%20visualization&width=1200&height=800&seq=commercial-gallery-7&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Modern%20hotel%20lobby%203D%20render%2C%20hospitality%20design%2C%20professional%20hotel%20interior%20visualization&width=1200&height=800&seq=commercial-gallery-8&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Modern%20gym%20interior%203D%20render%2C%20fitness%20center%20design%2C%20professional%20workout%20space%20visualization&width=1200&height=800&seq=commercial-gallery-9&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Complete%20commercial%20space%20portfolio%2C%20all%20business%20interiors%2C%20professional%20commercial%20design%20showcase&width=1200&height=800&seq=commercial-gallery-10&orientation=landscape"
    ]
  },
  {
    id: 18,
    title: "Realistic Environment Render",
    category: "3D Design",
    slug: "realistic-environment-render",
    description: "Photorealistic 3D environment rendering of modern urban plaza with landscaping and contemporary outdoor architectural design.",
    image: "https://readdy.ai/api/search-image?query=Photorealistic%203D%20environment%20rendering%20of%20modern%20urban%20plaza%20with%20landscaping%2C%20contemporary%20outdoor%20architectural%20visualization%2C%20clean%20public%20space%20design%20with%20trees%20and%20seating%20areas%2C%20professional%203D%20render%20with%20natural%20lighting%20and%20realistic%20materials%2C%20high-quality%20CGI%20architectural%20visualization&width=800&height=450&seq=portfolio-3d-6&orientation=landscape",
    alt: "Photorealistic 3D urban plaza environment rendering",
    galleryImages: [
      "https://readdy.ai/api/search-image?query=Modern%20urban%20plaza%203D%20render%20daytime%2C%20public%20space%20visualization%2C%20professional%20landscape%20architecture&width=1200&height=800&seq=environment-gallery-1&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Modern%20park%20landscape%203D%20render%2C%20green%20space%20design%2C%20professional%20outdoor%20environment%20visualization&width=1200&height=800&seq=environment-gallery-2&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Modern%20courtyard%203D%20render%2C%20outdoor%20gathering%20space%2C%20professional%20plaza%20design%20visualization&width=1200&height=800&seq=environment-gallery-3&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Modern%20rooftop%20terrace%203D%20render%2C%20elevated%20outdoor%20space%2C%20professional%20rooftop%20design%20visualization&width=1200&height=800&seq=environment-gallery-4&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Modern%20garden%20pathway%203D%20render%2C%20landscaped%20walkway%2C%20professional%20garden%20design%20visualization&width=1200&height=800&seq=environment-gallery-5&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Modern%20water%20feature%203D%20render%2C%20fountain%20or%20pond%20design%2C%20professional%20landscape%20element%20visualization&width=1200&height=800&seq=environment-gallery-6&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Modern%20outdoor%20seating%20area%203D%20render%2C%20public%20furniture%2C%20professional%20urban%20furniture%20visualization&width=1200&height=800&seq=environment-gallery-7&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Modern%20plaza%20at%20sunset%203D%20render%2C%20evening%20environment%2C%20professional%20twilight%20visualization&width=1200&height=800&seq=environment-gallery-8&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Modern%20plaza%20at%20night%203D%20render%2C%20illuminated%20public%20space%2C%20professional%20night%20lighting%20visualization&width=1200&height=800&seq=environment-gallery-9&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Complete%20environment%20design%20showcase%2C%20all%20outdoor%20spaces%2C%20professional%20landscape%20architecture%20portfolio&width=1200&height=800&seq=environment-gallery-10&orientation=landscape"
    ]
  }
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'Graphics Design', 'Web Development', '3D Design'];

  const filteredItems = activeFilter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <header className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our latest projects and creative work
          </p>
        </header>

        <nav className="flex flex-wrap justify-center gap-3 mb-12" aria-label="Portfolio filter navigation">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-lg font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeFilter === filter
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-300'
              }`}
              aria-label={`Filter portfolio by ${filter}`}
              aria-pressed={activeFilter === filter}
            >
              {filter}
            </button>
          ))}
        </nav>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Link 
              key={item.id}
              href={`/portfolio/${item.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all cursor-pointer"
              aria-label={`View ${item.title} portfolio project`}
            >
              <article>
                <div className="relative overflow-hidden aspect-[16/9]">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    width="800"
                    height="450"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-sm font-semibold rounded-full mb-3">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer" aria-label="View more portfolio projects">
              View More Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
