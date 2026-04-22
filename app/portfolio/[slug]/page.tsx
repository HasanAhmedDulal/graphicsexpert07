import { useState } from 'react';
import Link from 'next/link';
import PortfolioDetailClient from './PortfolioDetailClient';

const portfolioData: Record<string, any> = {
  'brand-identity-design': {
    title: 'Brand Identity Design',
    category: 'Graphics Design',
    intro: 'Complete brand identity systems including logo design, color palettes, typography, and comprehensive brand guidelines for modern businesses.',
    subcategories: ['Logo Design', 'Business Cards', 'Brand Guidelines', 'Stationery'],
    items: Array.from({ length: 30 }, (_, i) => ({
      id: i + 1,
      title: `Brand Identity ${i + 1}`,
      description: 'Professional brand identity design with modern aesthetics and strategic visual communication.',
      tools: ['Adobe Illustrator', 'Photoshop', 'InDesign'],
      tags: ['Branding', 'Logo', 'Identity', 'Modern'],
      image: `https://readdy.ai/api/search-image?query=Professional%20brand%20identity%20design%20mockup%20with%20elegant%20logo%20on%20business%20cards%20letterhead%20and%20envelope%20on%20white%20marble%20surface%20modern%20minimalist%20corporate%20branding%20materials%20clean%20layout%20with%20navy%20blue%20and%20gold%20accents%20premium%20stationery%20design%20high-end%20professional%20photography%20with%20soft%20shadows&width=1200&height=800&seq=brand-item-${i + 1}&orientation=landscape`
    }))
  },
  'marketing-campaign': {
    title: 'Marketing Campaign Design',
    category: 'Graphics Design',
    intro: 'Comprehensive marketing campaign designs including social media graphics, digital ads, and promotional materials for successful product launches.',
    subcategories: ['Social Media', 'Digital Ads', 'Print Ads', 'Promotional'],
    items: Array.from({ length: 30 }, (_, i) => ({
      id: i + 1,
      title: `Marketing Campaign ${i + 1}`,
      description: 'Creative marketing campaign design with engaging visuals and strategic messaging for maximum impact.',
      tools: ['Adobe Photoshop', 'Illustrator', 'After Effects'],
      tags: ['Marketing', 'Social Media', 'Advertising', 'Digital'],
      image: `https://readdy.ai/api/search-image?query=Modern%20marketing%20campaign%20showcase%20with%20social%20media%20posts%20on%20phone%20screens%20colorful%20poster%20designs%20and%20digital%20advertisement%20mockups%20on%20white%20background%20vibrant%20promotional%20materials%20professional%20graphic%20design%20presentation%20clean%20corporate%20marketing%20collateral%20with%20engaging%20visuals&width=1200&height=800&seq=marketing-item-${i + 1}&orientation=landscape`
    }))
  },
  'logo-design-suite': {
    title: 'Logo Design Collection',
    category: 'Graphics Design',
    intro: 'Professional logo designs featuring minimalist, signature, mascot, business, vintage, luxury, modern, badge, and monogram styles with versatile applications.',
    subcategories: ['Minimalist', 'Signature', 'Mascot', 'Business', 'Vintage', 'Luxury', 'Modern', 'Badge', 'Monogram'],
    items: [
      {
        id: 1,
        title: 'TechWave Minimal Logo',
        description: 'Clean minimalist logo for tech startup featuring geometric wave symbol with modern sans-serif typography.',
        tools: ['Adobe Illustrator', 'Photoshop'],
        tags: ['Logo', 'Minimalist', 'Tech', 'Modern'],
        category: 'Minimalist',
        image: 'https://readdy.ai/api/search-image?query=Sharp%20minimalist%20tech%20logo%20design%20with%20crisp%20geometric%20wave%20symbol%20clean%20lines%20modern%20sans-serif%20typography%20on%20white%20background%20professional%20brand%20mark%20simple%20elegant%20corporate%20identity%20blue%20and%20black%20color%20scheme%20high%20resolution%20clear%20edges&width=1200&height=800&seq=logo-minimal-1&orientation=landscape'
      },
      {
        id: 2,
        title: 'Zenith Minimalist Brand',
        description: 'Ultra-minimal logo with abstract geometric shapes representing growth and innovation for consulting firm.',
        tools: ['Adobe Illustrator'],
        tags: ['Logo', 'Minimalist', 'Corporate', 'Clean'],
        category: 'Minimalist',
        image: 'https://readdy.ai/api/search-image?query=Sharp%20ultra%20minimalist%20logo%20design%20crisp%20abstract%20geometric%20triangle%20shapes%20clean%20corporate%20identity%20consulting%20firm%20brand%20mark%20simple%20elegant%20professional%20white%20background%20monochrome%20black%20design%20high%20resolution%20clear%20details&width=1200&height=800&seq=logo-minimal-2&orientation=landscape'
      },
      {
        id: 3,
        title: 'Pulse Minimal Identity',
        description: 'Minimalist healthcare logo with subtle pulse line integrated into lettermark design.',
        tools: ['Adobe Illustrator', 'Photoshop'],
        tags: ['Logo', 'Minimalist', 'Healthcare', 'Medical'],
        category: 'Minimalist',
        image: 'https://readdy.ai/api/search-image?query=Sharp%20minimalist%20healthcare%20logo%20design%20with%20crisp%20pulse%20line%20heartbeat%20symbol%20clean%20medical%20brand%20identity%20simple%20lettermark%20professional%20white%20background%20teal%20and%20navy%20color%20scheme%20modern%20typography%20high%20resolution%20clear%20edges&width=1200&height=800&seq=logo-minimal-3&orientation=landscape'
      },
      {
        id: 4,
        title: 'Apex Minimal Wordmark',
        description: 'Sophisticated minimalist wordmark logo for luxury real estate brand with refined typography.',
        tools: ['Adobe Illustrator'],
        tags: ['Logo', 'Minimalist', 'Luxury', 'Real Estate'],
        category: 'Minimalist',
        image: 'https://readdy.ai/api/search-image?query=Sharp%20minimalist%20luxury%20wordmark%20logo%20design%20crisp%20refined%20elegant%20typography%20real%20estate%20brand%20sophisticated%20letterforms%20clean%20white%20background%20gold%20and%20black%20color%20scheme%20professional%20corporate%20identity%20high%20resolution%20clear%20details&width=1200&height=800&seq=logo-minimal-4&orientation=landscape'
      },
      {
        id: 5,
        title: 'Nova Minimal Symbol',
        description: 'Simple geometric star symbol combined with clean typography for creative agency branding.',
        tools: ['Adobe Illustrator', 'Photoshop'],
        tags: ['Logo', 'Minimalist', 'Creative', 'Agency'],
        category: 'Minimalist',
        image: 'https://readdy.ai/api/search-image?query=Sharp%20minimalist%20geometric%20star%20logo%20design%20crisp%20simple%20clean%20symbol%20creative%20agency%20brand%20mark%20modern%20typography%20white%20background%20purple%20and%20black%20color%20scheme%20professional%20identity%20high%20resolution%20clear%20edges&width=1200&height=800&seq=logo-minimal-5&orientation=landscape'
      },
      {
        id: 6,
        title: 'Elegant Signature Logo',
        description: 'Handwritten signature-style logo for luxury fashion boutique with flowing calligraphy.',
        tools: ['Adobe Illustrator', 'Photoshop'],
        tags: ['Logo', 'Signature', 'Fashion', 'Luxury'],
        category: 'Signature',
        image: 'https://readdy.ai/api/search-image?query=Sharp%20elegant%20handwritten%20signature%20logo%20design%20crisp%20flowing%20calligraphy%20script%20luxury%20fashion%20boutique%20brand%20sophisticated%20cursive%20lettering%20white%20background%20black%20ink%20style%20professional%20identity%20high%20resolution%20clear%20details&width=1200&height=800&seq=logo-signature-1&orientation=landscape'
      },
      {
        id: 7,
        title: 'Artisan Signature Brand',
        description: 'Custom calligraphic signature logo for artisan bakery with organic flowing letterforms.',
        tools: ['Adobe Illustrator'],
        tags: ['Logo', 'Signature', 'Bakery', 'Artisan'],
        category: 'Signature',
        image: 'https://readdy.ai/api/search-image?query=Sharp%20artisan%20signature%20logo%20design%20crisp%20custom%20calligraphy%20organic%20flowing%20script%20bakery%20brand%20handwritten%20style%20elegant%20cursive%20white%20background%20brown%20and%20cream%20color%20scheme%20professional%20identity%20high%20resolution%20clear%20edges&width=1200&height=800&seq=logo-signature-2&orientation=landscape'
      },
      {
        id: 8,
        title: 'Luxe Signature Monogram',
        description: 'Sophisticated signature-style monogram for high-end jewelry designer with elegant flourishes.',
        tools: ['Adobe Illustrator', 'Photoshop'],
        tags: ['Logo', 'Signature', 'Jewelry', 'Monogram'],
        category: 'Signature',
        image: 'https://readdy.ai/api/search-image?query=Sharp%20luxury%20signature%20monogram%20logo%20design%20crisp%20elegant%20flourishes%20high-end%20jewelry%20brand%20sophisticated%20calligraphic%20initials%20white%20background%20gold%20and%20black%20color%20scheme%20professional%20identity%20high%20resolution%20clear%20details&width=1200&height=800&seq=logo-signature-3&orientation=landscape'
      },
      {
        id: 9,
        title: 'Bella Signature Script',
        description: 'Graceful signature logo for beauty salon featuring delicate script typography.',
        tools: ['Adobe Illustrator'],
        tags: ['Logo', 'Signature', 'Beauty', 'Salon'],
        category: 'Signature',
        image: 'https://readdy.ai/api/search-image?query=Sharp%20graceful%20signature%20script%20logo%20design%20crisp%20delicate%20calligraphy%20beauty%20salon%20brand%20elegant%20handwritten%20style%20white%20background%20rose%20gold%20and%20black%20color%20scheme%20professional%20identity%20high%20resolution%20clear%20edges&width=1200&height=800&seq=logo-signature-4&orientation=landscape'
      },
      {
        id: 10,
        title: 'Roar Lion Mascot Logo',
        description: 'Powerful lion mascot logo for sports team with fierce expression and dynamic pose.',
        tools: ['Adobe Illustrator', 'Photoshop'],
        tags: ['Logo', 'Mascot', 'Sports', 'Lion'],
        category: 'Mascot',
        image: 'https://readdy.ai/api/search-image?query=Sharp%20fierce%20lion%20mascot%20logo%20design%20crisp%20powerful%20sports%20team%20emblem%20dynamic%20roaring%20lion%20head%20bold%20illustration%20white%20background%20red%20and%20gold%20color%20scheme%20professional%20esports%20gaming%20identity%20high%20resolution%20clear%20details%20clean%20edges&width=1200&height=800&seq=logo-mascot-1&orientation=landscape'
      },
      {
        id: 11,
        title: 'Urban Wolf Mascot',
        description: 'Modern wolf mascot logo for fitness brand with aggressive stance and bold styling.',
        tools: ['Adobe Illustrator', 'Photoshop'],
        tags: ['Logo', 'Mascot', 'Fitness', 'Wolf'],
        category: 'Mascot',
        image: 'https://readdy.ai/api/search-image?query=Sharp%20modern%20wolf%20mascot%20logo%20design%20crisp%20aggressive%20fitness%20brand%20bold%20illustration%20dynamic%20wolf%20head%20white%20background%20black%20and%20orange%20color%20scheme%20professional%20sports%20identity%20high%20resolution%20clear%20details%20clean%20edges%20no%20blur&width=1200&height=800&seq=logo-mascot-2&orientation=landscape'
      },
      {
        id: 12,
        title: 'Dragon Gaming Mascot',
        description: 'Epic dragon mascot logo for gaming clan with detailed scales and fire elements.',
        tools: ['Adobe Illustrator', 'Photoshop'],
        tags: ['Logo', 'Mascot', 'Gaming', 'Dragon'],
        category: 'Mascot',
        image: 'https://readdy.ai/api/search-image?query=Sharp%20epic%20dragon%20mascot%20logo%20design%20crisp%20gaming%20esports%20emblem%20detailed%20scales%20fire%20breathing%20dragon%20head%20bold%20illustration%20white%20background%20purple%20and%20red%20color%20scheme%20professional%20gaming%20identity%20high%20resolution%20clear%20details%20clean%20edges&width=1200&height=800&seq=logo-mascot-3&orientation=landscape'
      },
      {
        id: 13,
        title: 'Eagle Squadron Mascot',
        description: 'Majestic eagle mascot logo for military-inspired brand with sharp details and patriotic feel.',
        tools: ['Adobe Illustrator', 'Photoshop'],
        tags: ['Logo', 'Mascot', 'Military', 'Eagle'],
        category: 'Mascot',
        image: 'https://readdy.ai/api/search-image?query=Sharp%20majestic%20eagle%20mascot%20logo%20design%20crisp%20military%20inspired%20emblem%20detailed%20eagle%20head%20patriotic%20style%20white%20background%20navy%20blue%20and%20gold%20color%20scheme%20professional%20identity%20high%20resolution%20clear%20details%20clean%20edges&width=1200&height=800&seq=logo-mascot-4&orientation=landscape'
      },
      {
        id: 14,
        title: 'Bear Strength Mascot',
        description: 'Strong bear mascot logo for outdoor adventure company with rugged character design.',
        tools: ['Adobe Illustrator', 'Photoshop'],
        tags: ['Logo', 'Mascot', 'Outdoor', 'Bear'],
        category: 'Mascot',
        image: 'https://readdy.ai/api/search-image?query=Sharp%20strong%20bear%20mascot%20logo%20design%20crisp%20outdoor%20adventure%20company%20rugged%20grizzly%20bear%20head%20bold%20illustration%20white%20background%20brown%20and%20green%20color%20scheme%20professional%20wilderness%20identity%20high%20resolution%20clear%20details%20clean%20edges&width=1200&height=800&seq=logo-mascot-5&orientation=landscape'
      },
      {
        id: 15,
        title: 'Summit Corporate Logo',
        description: 'Professional business logo for financial consulting firm with mountain peak symbolism.',
        tools: ['Adobe Illustrator'],
        tags: ['Logo', 'Business', 'Finance', 'Corporate'],
        category: 'Business',
        image: 'https://readdy.ai/api/search-image?query=Sharp%20professional%20corporate%20business%20logo%20design%20crisp%20mountain%20peak%20symbol%20financial%20consulting%20firm%20clean%20modern%20typography%20white%20background%20navy%20blue%20and%20gray%20color%20scheme%20professional%20identity%20high%20resolution%20clear%20details&width=1200&height=800&seq=logo-business-1&orientation=landscape'
      },
      {
        id: 16,
        title: 'Nexus Business Identity',
        description: 'Modern corporate logo for technology solutions company with connected nodes concept.',
        tools: ['Adobe Illustrator', 'Photoshop'],
        tags: ['Logo', 'Business', 'Technology', 'Corporate'],
        category: 'Business',
        image: 'https://readdy.ai/api/search-image?query=Sharp%20modern%20corporate%20business%20logo%20design%20crisp%20connected%20nodes%20network%20symbol%20technology%20company%20clean%20professional%20typography%20white%20background%20blue%20and%20teal%20color%20scheme%20professional%20identity%20high%20resolution%20clear%20edges&width=1200&height=800&seq=logo-business-2&orientation=landscape'
      },
      {
        id: 17,
        title: 'Pinnacle Law Firm Logo',
        description: 'Distinguished business logo for law firm featuring pillar and scales symbolism.',
        tools: ['Adobe Illustrator'],
        tags: ['Logo', 'Business', 'Law', 'Professional'],
        category: 'Business',
        image: 'https://readdy.ai/api/search-image?query=Sharp%20distinguished%20law%20firm%20business%20logo%20design%20crisp%20pillar%20and%20scales%20symbol%20professional%20legal%20identity%20classic%20serif%20typography%20white%20background%20navy%20blue%20and%20gold%20color%20scheme%20corporate%20identity%20high%20resolution%20clear%20details&width=1200&height=800&seq=logo-business-3&orientation=landscape'
      },
      {
        id: 18,
        title: 'Horizon Business Group',
        description: 'Clean corporate logo for business consulting group with abstract horizon line design.',
        tools: ['Adobe Illustrator', 'Photoshop'],
        tags: ['Logo', 'Business', 'Consulting', 'Corporate'],
        category: 'Business',
        image: 'https://readdy.ai/api/search-image?query=Sharp%20clean%20corporate%20business%20logo%20design%20crisp%20abstract%20horizon%20line%20symbol%20consulting%20group%20modern%20professional%20typography%20white%20background%20gray%20and%20orange%20color%20scheme%20professional%20identity%20high%20resolution%20clear%20edges&width=1200&height=800&seq=logo-business-4&orientation=landscape'
      },
      {
        id: 19,
        title: 'Heritage Vintage Badge',
        description: 'Classic vintage logo for heritage brand with ornate Victorian-era design elements.',
        tools: ['Adobe Illustrator', 'Photoshop'],
        tags: ['Logo', 'Vintage', 'Heritage', 'Classic'],
        category: 'Vintage',
        image: 'https://readdy.ai/api/search-image?query=Sharp%20classic%20vintage%20logo%20design%20crisp%20ornate%20Victorian%20era%20badge%20heritage%20brand%20decorative%20flourishes%20retro%20typography%20white%20background%20sepia%20brown%20and%20cream%20color%20scheme%20professional%20identity%20high%20resolution%20clear%20details&width=1200&height=800&seq=logo-vintage-1&orientation=landscape'
      },
      {
        id: 20,
        title: 'Retro Diner Logo',
        description: 'Nostalgic 1950s-style vintage logo for classic American diner with chrome lettering.',
        tools: ['Adobe Illustrator', 'Photoshop'],
        tags: ['Logo', 'Vintage', 'Diner', 'Retro'],
        category: 'Vintage',
        image: 'https://readdy.ai/api/search-image?query=Sharp%20nostalgic%201950s%20vintage%20logo%20design%20crisp%20retro%20American%20diner%20chrome%20lettering%20classic%20typography%20white%20background%20red%20and%20cream%20color%20scheme%20professional%20identity%20high%20resolution%20clear%20edges&width=1200&height=800&seq=logo-vintage-2&orientation=landscape'
      },
      {
        id: 21,
        title: 'Antique Shop Emblem',
        description: 'Vintage emblem logo for antique shop with distressed texture and classic typography.',
        tools: ['Adobe Illustrator', 'Photoshop'],
        tags: ['Logo', 'Vintage', 'Antique', 'Emblem'],
        category: 'Vintage',
        image: 'https://readdy.ai/api/search-image?query=Sharp%20vintage%20emblem%20logo%20design%20crisp%20antique%20shop%20distressed%20texture%20classic%20ornate%20typography%20white%20background%20aged%20brown%20and%20gold%20color%20scheme%20professional%20identity%20high%20resolution%20clear%20details&width=1200&height=800&seq=logo-vintage-3&orientation=landscape'
      },
      {
        id: 22,
        title: 'Old Town Brewery Logo',
        description: 'Rustic vintage logo for craft brewery with hand-drawn illustration and aged aesthetic.',
        tools: ['Adobe Illustrator', 'Photoshop'],
        tags: ['Logo', 'Vintage', 'Brewery', 'Craft'],
        category: 'Vintage',
        image: 'https://readdy.ai/api/search-image?query=Sharp%20rustic%20vintage%20brewery%20logo%20design%20crisp%20hand-drawn%20illustration%20craft%20beer%20aged%20aesthetic%20classic%20typography%20white%20background%20brown%20and%20amber%20color%20scheme%20professional%20identity%20high%20resolution%20clear%20edges&width=1200&height=800&seq=logo-vintage-4&orientation=landscape'
      },
      {
        id: 23,
        title: 'Royal Gold Monogram',
        description: 'Luxurious monogram logo for premium hotel brand with gold foil effect and elegant initials.',
        tools: ['Adobe Illustrator', 'Photoshop'],
        tags: ['Logo', 'Luxury', 'Monogram', 'Hotel'],
        category: 'Luxury',
        image: 'https://readdy.ai/api/search-image?query=Sharp%20luxurious%20monogram%20logo%20design%20crisp%20premium%20hotel%20brand%20gold%20foil%20effect%20elegant%20intertwined%20initials%20white%20background%20metallic%20gold%20and%20black%20color%20scheme%20professional%20identity%20high%20resolution%20clear%20details&width=1200&height=800&seq=logo-luxury-1&orientation=landscape'
      },
      {
        id: 24,
        title: 'Prestige Luxury Brand',
        description: 'Sophisticated luxury logo for high-end fashion house with refined serif typography.',
        tools: ['Adobe Illustrator'],
        tags: ['Logo', 'Luxury', 'Fashion', 'Premium'],
        category: 'Luxury',
        image: 'https://readdy.ai/api/search-image?query=Sharp%20sophisticated%20luxury%20fashion%20logo%20design%20crisp%20high-end%20brand%20refined%20elegant%20serif%20typography%20white%20background%20black%20and%20gold%20color%20scheme%20professional%20identity%20high%20resolution%20clear%20edges&width=1200&height=800&seq=logo-luxury-2&orientation=landscape'
      },
      {
        id: 25,
        title: 'Diamond Elite Logo',
        description: 'Premium luxury logo for jewelry brand featuring diamond symbol with elegant details.',
        tools: ['Adobe Illustrator', 'Photoshop'],
        tags: ['Logo', 'Luxury', 'Jewelry', 'Diamond'],
        category: 'Luxury',
        image: 'https://readdy.ai/api/search-image?query=Sharp%20premium%20luxury%20jewelry%20logo%20design%20crisp%20diamond%20symbol%20elegant%20geometric%20details%20high-end%20brand%20white%20background%20silver%20and%20black%20color%20scheme%20professional%20identity%20high%20resolution%20clear%20details&width=1200&height=800&seq=logo-luxury-3&orientation=landscape'
      },
      {
        id: 26,
        title: 'Opulent Spa Logo',
        description: 'Luxurious spa logo with ornate decorative elements and sophisticated color palette.',
        tools: ['Adobe Illustrator', 'Photoshop'],
        tags: ['Logo', 'Luxury', 'Spa', 'Wellness'],
        category: 'Luxury',
        image: 'https://readdy.ai/api/search-image?query=Sharp%20luxurious%20spa%20logo%20design%20crisp%20ornate%20decorative%20elements%20wellness%20brand%20sophisticated%20elegant%20typography%20white%20background%20rose%20gold%20and%20navy%20color%20scheme%20professional%20identity%20high%20resolution%20clear%20edges&width=1200&height=800&seq=logo-luxury-4&orientation=landscape'
      },
      {
        id: 27,
        title: 'Quantum Modern Logo',
        description: 'Contemporary modern logo for tech startup with abstract geometric shapes and bold colors.',
        tools: ['Adobe Illustrator', 'Photoshop'],
        tags: ['Logo', 'Modern', 'Tech', 'Startup'],
        category: 'Modern',
        image: 'https://readdy.ai/api/search-image?query=Sharp%20contemporary%20modern%20logo%20design%20crisp%20abstract%20geometric%20shapes%20tech%20startup%20bold%20vibrant%20colors%20clean%20typography%20white%20background%20gradient%20blue%20and%20purple%20color%20scheme%20professional%20identity%20high%20resolution%20clear%20details&width=1200&height=800&seq=logo-modern-1&orientation=landscape'
      },
      {
        id: 28,
        title: 'Flux Modern Identity',
        description: 'Dynamic modern logo with fluid shapes and gradient effects for creative agency.',
        tools: ['Adobe Illustrator', 'Photoshop'],
        tags: ['Logo', 'Modern', 'Creative', 'Agency'],
        category: 'Modern',
        image: 'https://readdy.ai/api/search-image?query=Sharp%20dynamic%20modern%20logo%20design%20crisp%20fluid%20organic%20shapes%20gradient%20effects%20creative%20agency%20contemporary%20typography%20white%20background%20colorful%20gradient%20color%20scheme%20professional%20identity%20high%20resolution%20clear%20edges&width=1200&height=800&seq=logo-modern-2&orientation=landscape'
      },
      {
        id: 29,
        title: 'Vibe Modern Brand',
        description: 'Trendy modern logo for lifestyle brand with bold typography and vibrant color blocking.',
        tools: ['Adobe Illustrator'],
        tags: ['Logo', 'Modern', 'Lifestyle', 'Trendy'],
        category: 'Modern',
        image: 'https://readdy.ai/api/search-image?query=Sharp%20trendy%20modern%20logo%20design%20crisp%20bold%20sans-serif%20typography%20lifestyle%20brand%20vibrant%20color%20blocking%20contemporary%20style%20white%20background%20bright%20multi-color%20scheme%20professional%20identity%20high%20resolution%20clear%20details&width=1200&height=800&seq=logo-modern-3&orientation=landscape'
      },
      {
        id: 30,
        title: 'Spark Modern Tech',
        description: 'Innovative modern logo for software company with digital-inspired geometric design.',
        tools: ['Adobe Illustrator', 'Photoshop'],
        tags: ['Logo', 'Modern', 'Software', 'Digital'],
        category: 'Modern',
        image: 'https://readdy.ai/api/search-image?query=Sharp%20innovative%20modern%20logo%20design%20crisp%20digital%20geometric%20pattern%20software%20company%20tech%20inspired%20contemporary%20typography%20white%20background%20cyan%20and%20magenta%20color%20scheme%20professional%20identity%20high%20resolution%20clear%20edges&width=1200&height=800&seq=logo-modern-4&orientation=landscape'
      },
      {
        id: 31,
        title: 'Mountain Peak Badge',
        description: 'Outdoor adventure badge logo with mountain illustration and circular emblem design.',
        tools: ['Adobe Illustrator', 'Photoshop'],
        tags: ['Logo', 'Badge', 'Outdoor', 'Adventure'],
        category: 'Badge',
        image: 'https://readdy.ai/api/search-image?query=Sharp%20outdoor%20adventure%20badge%20logo%20design%20crisp%20mountain%20peak%20illustration%20circular%20emblem%20vintage%20style%20white%20background%20forest%20green%20and%20tan%20color%20scheme%20professional%20identity%20high%20resolution%20clear%20details&width=1200&height=800&seq=logo-badge-1&orientation=landscape'
      },
      {
        id: 32,
        title: 'Craft Coffee Badge',
        description: 'Artisan coffee shop badge logo with hand-drawn elements and circular seal design.',
        tools: ['Adobe Illustrator', 'Photoshop'],
        tags: ['Logo', 'Badge', 'Coffee', 'Artisan'],
        category: 'Badge',
        image: 'https://readdy.ai/api/search-image?query=Sharp%20artisan%20coffee%20shop%20badge%20logo%20design%20crisp%20hand-drawn%20elements%20circular%20seal%20vintage%20typography%20white%20background%20brown%20and%20cream%20color%20scheme%20professional%20identity%20high%20resolution%20clear%20edges&width=1200&height=800&seq=logo-badge-2&orientation=landscape'
      },
      {
        id: 33,
        title: 'Barber Shop Badge',
        description: 'Classic barber shop badge logo with vintage scissors and comb illustration.',
        tools: ['Adobe Illustrator', 'Photoshop'],
        tags: ['Logo', 'Badge', 'Barber', 'Vintage'],
        category: 'Badge',
        image: 'https://readdy.ai/api/search-image?query=Sharp%20classic%20barber%20shop%20badge%20logo%20design%20crisp%20vintage%20scissors%20and%20comb%20illustration%20circular%20emblem%20retro%20typography%20white%20background%20red%20black%20and%20white%20color%20scheme%20professional%20identity%20high%20resolution%20clear%20details&width=1200&height=800&seq=logo-badge-3&orientation=landscape'
      },
      {
        id: 34,
        title: 'Motorcycle Club Badge',
        description: 'Bold motorcycle club badge logo with shield design and vintage motorcycle illustration.',
        tools: ['Adobe Illustrator', 'Photoshop'],
        tags: ['Logo', 'Badge', 'Motorcycle', 'Club'],
        category: 'Badge',
        image: 'https://readdy.ai/api/search-image?query=Sharp%20bold%20motorcycle%20club%20badge%20logo%20design%20crisp%20shield%20emblem%20vintage%20motorcycle%20illustration%20retro%20typography%20white%20background%20black%20and%20orange%20color%20scheme%20professional%20identity%20high%20resolution%20clear%20edges&width=1200&height=800&seq=logo-badge-4&orientation=landscape'
      },
      {
        id: 35,
        title: 'Elegant Initials Monogram',
        description: 'Sophisticated monogram logo with intertwined initials for personal brand identity.',
        tools: ['Adobe Illustrator'],
        tags: ['Logo', 'Monogram', 'Personal', 'Elegant'],
        category: 'Monogram',
        image: 'https://readdy.ai/api/search-image?query=Sharp%20sophisticated%20monogram%20logo%20design%20crisp%20intertwined%20elegant%20initials%20personal%20brand%20identity%20classic%20serif%20typography%20white%20background%20navy%20blue%20and%20gold%20color%20scheme%20professional%20identity%20high%20resolution%20clear%20details&width=1200&height=800&seq=logo-monogram-1&orientation=landscape'
      },
      {
        id: 36,
        title: 'Wedding Monogram',
        description: 'Romantic monogram logo for wedding brand with decorative floral elements.',
        tools: ['Adobe Illustrator', 'Photoshop'],
        tags: ['Logo', 'Monogram', 'Wedding', 'Romantic'],
        category: 'Monogram',
        image: 'https://readdy.ai/api/search-image?query=Sharp%20romantic%20wedding%20monogram%20logo%20design%20crisp%20decorative%20floral%20elements%20elegant%20initials%20script%20typography%20white%20background%20rose%20gold%20and%20blush%20pink%20color%20scheme%20professional%20identity%20high%20resolution%20clear%20edges&width=1200&height=800&seq=logo-monogram-2&orientation=landscape'
      },
      {
        id: 37,
        title: 'Corporate Monogram',
        description: 'Professional monogram logo for executive consulting firm with geometric letterforms.',
        tools: ['Adobe Illustrator'],
        tags: ['Logo', 'Monogram', 'Corporate', 'Executive'],
        category: 'Monogram',
        image: 'https://readdy.ai/api/search-image?query=Sharp%20professional%20corporate%20monogram%20logo%20design%20crisp%20geometric%20letterforms%20executive%20consulting%20firm%20clean%20modern%20typography%20white%20background%20charcoal%20gray%20and%20silver%20color%20scheme%20professional%20identity%20high%20resolution%20clear%20details&width=1200&height=800&seq=logo-monogram-3&orientation=landscape'
      },
      {
        id: 38,
        title: 'Luxury Hotel Monogram',
        description: 'Premium monogram logo for boutique hotel with ornate decorative frame.',
        tools: ['Adobe Illustrator', 'Photoshop'],
        tags: ['Logo', 'Monogram', 'Hotel', 'Luxury'],
        category: 'Monogram',
        image: 'https://readdy.ai/api/search-image?query=Sharp%20premium%20luxury%20hotel%20monogram%20logo%20design%20crisp%20ornate%20decorative%20frame%20elegant%20initials%20boutique%20brand%20white%20background%20gold%20and%20burgundy%20color%20scheme%20professional%20identity%20high%20resolution%20clear%20edges&width=1200&height=800&seq=logo-monogram-4&orientation=landscape'
      },
      {
        id: 39,
        title: 'Fashion Designer Monogram',
        description: 'Chic monogram logo for fashion designer with stylized interlocking letters.',
        tools: ['Adobe Illustrator'],
        tags: ['Logo', 'Monogram', 'Fashion', 'Designer'],
        category: 'Monogram',
        image: 'https://readdy.ai/api/search-image?query=Sharp%20chic%20fashion%20designer%20monogram%20logo%20design%20crisp%20stylized%20interlocking%20letters%20elegant%20modern%20typography%20white%20background%20black%20and%20rose%20gold%20color%20scheme%20professional%20identity%20high%20resolution%20clear%20details&width=1200&height=800&seq=logo-monogram-5&orientation=landscape'
      },
      {
        id: 40,
        title: 'Architect Monogram',
        description: 'Minimalist monogram logo for architecture firm with geometric precision and clean lines.',
        tools: ['Adobe Illustrator'],
        tags: ['Logo', 'Monogram', 'Architecture', 'Minimalist'],
        category: 'Monogram',
        image: 'https://readdy.ai/api/search-image?query=Sharp%20minimalist%20architect%20monogram%20logo%20design%20crisp%20geometric%20precision%20clean%20lines%20architecture%20firm%20modern%20typography%20white%20background%20slate%20gray%20and%20teal%20color%20scheme%20professional%20identity%20high%20resolution%20clear%20edges&width=1200&height=800&seq=logo-monogram-6&orientation=landscape'
      }
    ]
  },
  'print-design-collection': {
    title: 'Print Design Portfolio',
    category: 'Graphics Design',
    intro: 'Elegant print design materials including brochures, flyers, business cards, posters, and catalogs with sophisticated layouts.',
    subcategories: ['Brochures', 'Flyers', 'Business Cards', 'Posters'],
    items: Array.from({ length: 30 }, (_, i) => ({
      id: i + 1,
      title: `Print Design ${i + 1}`,
      description: 'Professional print design with elegant typography and sophisticated layout for maximum impact.',
      tools: ['Adobe InDesign', 'Illustrator', 'Photoshop'],
      tags: ['Print', 'Brochure', 'Flyer', 'Corporate'],
      image: `https://readdy.ai/api/search-image?query=Elegant%20print%20design%20collection%20featuring%20tri-fold%20brochures%20business%20flyers%20and%20premium%20business%20cards%20arranged%20on%20white%20marble%20surface%20professional%20corporate%20print%20materials%20modern%20layout%20design%20with%20clean%20typography%20high-quality%20offset%20printing%20showcase%20with%20sophisticated%20color%20scheme&width=1200&height=800&seq=print-item-${i + 1}&orientation=landscape`
    }))
  },
  'packaging-design': {
    title: 'Packaging Design Portfolio',
    category: 'Graphics Design',
    intro: 'Creative product packaging designs featuring modern branded boxes, bottles, containers, and bags with elegant branding elements.',
    subcategories: ['Box Design', 'Bottle Labels', 'Pouch Design', 'Shopping Bags'],
    items: Array.from({ length: 30 }, (_, i) => ({
      id: i + 1,
      title: `Packaging Design ${i + 1}`,
      description: 'Modern packaging design with premium finishes and elegant branding for product differentiation.',
      tools: ['Adobe Illustrator', 'Photoshop', 'Dimension'],
      tags: ['Packaging', 'Product', 'Branding', 'Premium'],
      image: `https://readdy.ai/api/search-image?query=Creative%20product%20packaging%20design%20mockup%20with%20modern%20branded%20boxes%20bottles%20and%20containers%20on%20clean%20white%20background%20premium%20package%20design%20showcase%20minimalist%20product%20packaging%20with%20elegant%20branding%20elements%20professional%20studio%20photography%20with%20soft%20lighting%20and%20clean%20shadows&width=1200&height=800&seq=packaging-item-${i + 1}&orientation=landscape`
    }))
  },
  'social-media-graphics': {
    title: 'Social Media Design',
    category: 'Graphics Design',
    intro: 'Modern social media graphics including Instagram posts, Facebook covers, Twitter banners, and Pinterest pins with consistent branding.',
    subcategories: ['Instagram', 'Facebook', 'Twitter', 'Pinterest'],
    items: Array.from({ length: 30 }, (_, i) => ({
      id: i + 1,
      title: `Social Media Design ${i + 1}`,
      description: 'Engaging social media graphics with consistent branding and optimized for each platform.',
      tools: ['Adobe Photoshop', 'Illustrator', 'Canva'],
      tags: ['Social Media', 'Instagram', 'Digital', 'Marketing'],
      image: `https://readdy.ai/api/search-image?query=Modern%20social%20media%20graphics%20template%20collection%20displayed%20on%20multiple%20smartphone%20and%20tablet%20screens%20Instagram%20posts%20Facebook%20covers%20and%20Twitter%20banners%20with%20consistent%20branding%20colorful%20digital%20marketing%20designs%20professional%20social%20media%20content%20mockup%20on%20white%20background%20with%20clean%20presentation&width=1200&height=800&seq=social-item-${i + 1}&orientation=landscape`
    }))
  },
  'ecommerce-website': {
    title: 'E-Commerce Website Design',
    category: 'Web Development',
    intro: 'Modern e-commerce websites with clean product grids, shopping cart functionality, and seamless checkout experiences.',
    subcategories: ['Product Pages', 'Shopping Cart', 'Checkout', 'User Dashboard'],
    items: Array.from({ length: 30 }, (_, i) => ({
      id: i + 1,
      title: `E-Commerce Design ${i + 1}`,
      description: 'Professional e-commerce website design with intuitive navigation and conversion-focused layout.',
      tools: ['Figma', 'Adobe XD', 'Sketch'],
      tags: ['E-Commerce', 'UI/UX', 'Web Design', 'Shopping'],
      image: `https://readdy.ai/api/search-image?query=Modern%20e-commerce%20website%20design%20displayed%20on%20laptop%20screen%20showing%20clean%20product%20grid%20layout%20shopping%20cart%20interface%20professional%20online%20store%20UI%20with%20minimalist%20design%20white%20background%20high-quality%20web%20design%20mockup%20with%20elegant%20typography%20and%20smooth%20user%20interface&width=1200&height=800&seq=ecommerce-item-${i + 1}&orientation=landscape`
    }))
  },
  'dashboard-ui-design': {
    title: 'Dashboard UI Design',
    category: 'Web Development',
    intro: 'Professional dashboard interfaces featuring analytics charts, data visualization, and clean admin panels with modern design.',
    subcategories: ['Analytics', 'Data Tables', 'User Management', 'Reports'],
    items: Array.from({ length: 30 }, (_, i) => ({
      id: i + 1,
      title: `Dashboard UI ${i + 1}`,
      description: 'Modern dashboard interface with intuitive data visualization and user-friendly admin controls.',
      tools: ['Figma', 'Adobe XD', 'Sketch'],
      tags: ['Dashboard', 'UI/UX', 'Analytics', 'Admin Panel'],
      image: `https://readdy.ai/api/search-image?query=Professional%20dashboard%20UI%20design%20on%20computer%20monitor%20showing%20analytics%20charts%20data%20visualization%20clean%20admin%20panel%20interface%20modern%20web%20application%20design%20with%20graphs%20and%20statistics%20minimalist%20corporate%20dashboard%20with%20blue%20accent%20colors%20on%20white%20background&width=1200&height=800&seq=dashboard-item-${i + 1}&orientation=landscape`
    }))
  },
  'landing-page-design': {
    title: 'Landing Page Design',
    category: 'Web Development',
    intro: 'Modern landing pages with compelling hero sections, clear call-to-action buttons, and conversion-focused layouts.',
    subcategories: ['Hero Sections', 'Features', 'Pricing', 'Testimonials'],
    items: Array.from({ length: 30 }, (_, i) => ({
      id: i + 1,
      title: `Landing Page ${i + 1}`,
      description: 'Conversion-focused landing page design with compelling visuals and strategic call-to-actions.',
      tools: ['Figma', 'Adobe XD', 'Webflow'],
      tags: ['Landing Page', 'UI/UX', 'Conversion', 'Web Design'],
      image: `https://readdy.ai/api/search-image?query=Modern%20landing%20page%20website%20design%20on%20laptop%20screen%20showing%20hero%20section%20with%20call-to-action%20buttons%20clean%20layout%20professional%20web%20design%20mockup%20minimalist%20business%20website%20interface%20with%20elegant%20typography%20and%20modern%20UI%20elements%20on%20white%20background&width=1200&height=800&seq=landing-item-${i + 1}&orientation=landscape`
    }))
  },
  'saas-web-application': {
    title: 'SaaS Web Application',
    category: 'Web Development',
    intro: 'Professional SaaS platform interfaces with modern software dashboards, user management systems, and collaboration tools.',
    subcategories: ['Dashboard', 'Project Management', 'Team Collaboration', 'File Management'],
    items: Array.from({ length: 30 }, (_, i) => ({
      id: i + 1,
      title: `SaaS Application ${i + 1}`,
      description: 'Enterprise-grade SaaS application design with comprehensive features and intuitive workflows.',
      tools: ['Figma', 'Adobe XD', 'Sketch'],
      tags: ['SaaS', 'Web App', 'UI/UX', 'Enterprise'],
      image: `https://readdy.ai/api/search-image?query=Professional%20SaaS%20web%20application%20interface%20on%20desktop%20monitor%20showing%20modern%20software%20dashboard%20clean%20user%20management%20system%20project%20collaboration%20tools%20minimalist%20enterprise%20software%20UI%20with%20blue%20and%20white%20color%20scheme%20on%20white%20background&width=1200&height=800&seq=saas-item-${i + 1}&orientation=landscape`
    }))
  },
  'portfolio-website': {
    title: 'Portfolio Website Design',
    category: 'Web Development',
    intro: 'Creative portfolio websites showcasing elegant project galleries, modern personal brands, and beautiful typography.',
    subcategories: ['Project Gallery', 'About Pages', 'Contact Forms', 'Blog Layouts'],
    items: Array.from({ length: 30 }, (_, i) => ({
      id: i + 1,
      title: `Portfolio Website ${i + 1}`,
      description: 'Creative portfolio website design with elegant project showcase and strong personal branding.',
      tools: ['Figma', 'Adobe XD', 'Webflow'],
      tags: ['Portfolio', 'Personal Brand', 'UI/UX', 'Creative'],
      image: `https://readdy.ai/api/search-image?query=Creative%20portfolio%20website%20design%20on%20laptop%20screen%20showing%20elegant%20project%20gallery%20modern%20personal%20brand%20website%20minimalist%20portfolio%20layout%20with%20beautiful%20typography%20professional%20web%20design%20mockup%20with%20clean%20navigation%20and%20hero%20section%20on%20white%20background&width=1200&height=800&seq=portfolio-web-item-${i + 1}&orientation=landscape`
    }))
  },
  'mobile-responsive-ui': {
    title: 'Mobile Responsive Design',
    category: 'Web Development',
    intro: 'Mobile responsive website designs showcasing adaptive layouts across desktop, tablet, and smartphone with consistent user experience.',
    subcategories: ['Mobile UI', 'Tablet UI', 'Responsive Grids', 'Touch Interfaces'],
    items: Array.from({ length: 30 }, (_, i) => ({
      id: i + 1,
      title: `Responsive Design ${i + 1}`,
      description: 'Fully responsive web design with seamless adaptation across all devices and screen sizes.',
      tools: ['Figma', 'Adobe XD', 'Sketch'],
      tags: ['Responsive', 'Mobile', 'UI/UX', 'Adaptive'],
      image: `https://readdy.ai/api/search-image?query=Mobile%20responsive%20website%20design%20mockup%20showing%20same%20website%20on%20desktop%20tablet%20and%20smartphone%20screens%20modern%20responsive%20web%20design%20showcase%20clean%20adaptive%20layout%20demonstration%20professional%20multi-device%20mockup%20on%20white%20background%20with%20consistent%20UI%20across%20all%20devices&width=1200&height=800&seq=responsive-item-${i + 1}&orientation=landscape`
    }))
  },
  'architectural-visualization': {
    title: 'Architectural Visualization',
    category: '3D Design',
    intro: 'Photorealistic 3D architectural exterior renderings of modern luxury houses with contemporary design and natural lighting.',
    subcategories: ['Exterior Views', 'Night Renders', 'Aerial Views', 'Detail Shots'],
    items: Array.from({ length: 30 }, (_, i) => ({
      id: i + 1,
      title: `Architectural Render ${i + 1}`,
      description: 'Photorealistic architectural visualization with accurate materials and natural lighting simulation.',
      tools: ['3ds Max', 'V-Ray', 'Corona Renderer', 'Photoshop'],
      tags: ['Architecture', '3D Render', 'Exterior', 'Visualization'],
      image: `https://readdy.ai/api/search-image?query=Photorealistic%203D%20architectural%20exterior%20rendering%20of%20modern%20luxury%20house%20with%20glass%20windows%20contemporary%20architecture%20visualization%20clean%20minimalist%20building%20design%20professional%20architectural%203D%20render%20with%20natural%20lighting%20white%20background%20high-quality%20CGI%20visualization&width=1200&height=800&seq=arch-item-${i + 1}&orientation=landscape`
    }))
  },
  'interior-design-rendering': {
    title: 'Interior Design Rendering',
    category: '3D Design',
    intro: 'Photorealistic 3D interior renderings of modern living spaces with elegant furniture and contemporary design.',
    subcategories: ['Living Rooms', 'Kitchens', 'Bedrooms', 'Bathrooms'],
    items: Array.from({ length: 30 }, (_, i) => ({
      id: i + 1,
      title: `Interior Render ${i + 1}`,
      description: 'Photorealistic interior rendering with detailed furniture, materials, and atmospheric lighting.',
      tools: ['3ds Max', 'V-Ray', 'Corona Renderer', 'Photoshop'],
      tags: ['Interior', '3D Render', 'Visualization', 'Design'],
      image: `https://readdy.ai/api/search-image?query=Photorealistic%203D%20interior%20rendering%20of%20modern%20living%20room%20with%20elegant%20furniture%20contemporary%20interior%20design%20visualization%20clean%20minimalist%20space%20with%20natural%20lighting%20professional%20architectural%20interior%203D%20render%20white%20walls%20high-quality%20CGI%20visualization%20with%20realistic%20materials&width=1200&height=800&seq=interior-item-${i + 1}&orientation=landscape`
    }))
  },
  'product-rendering': {
    title: 'Product Rendering',
    category: '3D Design',
    intro: 'Photorealistic 3D product renderings with studio lighting, detailed materials and reflections in premium product photography style.',
    subcategories: ['Product Shots', 'Packaging', 'Color Variations', 'Exploded Views'],
    items: Array.from({ length: 30 }, (_, i) => ({
      id: i + 1,
      title: `Product Render ${i + 1}`,
      description: 'High-quality product rendering with accurate materials, reflections, and studio lighting setup.',
      tools: ['Blender', 'KeyShot', 'Cinema 4D', 'Photoshop'],
      tags: ['Product', '3D Render', 'Commercial', 'Photography'],
      image: `https://readdy.ai/api/search-image?query=Photorealistic%203D%20product%20rendering%20of%20modern%20electronic%20device%20or%20luxury%20product%20on%20clean%20white%20background%20professional%20commercial%20product%20visualization%20high-quality%20CGI%20render%20with%20studio%20lighting%20detailed%20materials%20and%20reflections%20premium%20product%20photography%20style%203D%20visualization&width=1200&height=800&seq=product-item-${i + 1}&orientation=landscape`
    }))
  },
  'modern-furniture-design': {
    title: 'Furniture Design Rendering',
    category: '3D Design',
    intro: 'Photorealistic 3D furniture renderings showing modern designer chairs, tables, and complete furniture sets with elegant materials.',
    subcategories: ['Chairs', 'Tables', 'Sofas', 'Cabinets'],
    items: Array.from({ length: 30 }, (_, i) => ({
      id: i + 1,
      title: `Furniture Design ${i + 1}`,
      description: 'Modern furniture design with detailed materials, textures, and realistic lighting for product visualization.',
      tools: ['Blender', '3ds Max', 'V-Ray', 'Photoshop'],
      tags: ['Furniture', '3D Render', 'Product Design', 'Modern'],
      image: `https://readdy.ai/api/search-image?query=Photorealistic%203D%20furniture%20rendering%20showing%20modern%20designer%20chair%20and%20table%20set%20contemporary%20furniture%20visualization%20with%20elegant%20materials%20clean%20minimalist%20furniture%20design%20on%20white%20background%20professional%20product%203D%20render%20with%20studio%20lighting%20and%20realistic%20wood%20and%20metal%20textures&width=1200&height=800&seq=furniture-item-${i + 1}&orientation=landscape`
    }))
  },
  'commercial-space-design': {
    title: 'Commercial Space Design',
    category: '3D Design',
    intro: 'Photorealistic 3D renderings of modern commercial office interiors with open workspaces and contemporary corporate environments.',
    subcategories: ['Office Spaces', 'Retail Stores', 'Restaurants', 'Hotels'],
    items: Array.from({ length: 30 }, (_, i) => ({
      id: i + 1,
      title: `Commercial Space ${i + 1}`,
      description: 'Professional commercial interior design with functional layouts and modern corporate aesthetics.',
      tools: ['3ds Max', 'V-Ray', 'SketchUp', 'Photoshop'],
      tags: ['Commercial', 'Interior', '3D Render', 'Office'],
      image: `https://readdy.ai/api/search-image?query=Photorealistic%203D%20rendering%20of%20modern%20commercial%20office%20interior%20with%20open%20workspace%20contemporary%20corporate%20office%20visualization%20clean%20minimalist%20business%20environment%20with%20glass%20partitions%20and%20modern%20furniture%20professional%20architectural%20interior%203D%20render%20with%20natural%20daylight%20and%20high-quality%20materials&width=1200&height=800&seq=commercial-item-${i + 1}&orientation=landscape`
    }))
  },
  'realistic-environment-render': {
    title: 'Environment Rendering',
    category: '3D Design',
    intro: 'Photorealistic 3D environment renderings of modern urban plazas with landscaping and contemporary outdoor architectural design.',
    subcategories: ['Urban Plazas', 'Parks', 'Courtyards', 'Rooftop Terraces'],
    items: Array.from({ length: 30 }, (_, i) => ({
      id: i + 1,
      title: `Environment Render ${i + 1}`,
      description: 'Realistic outdoor environment rendering with detailed landscaping, vegetation, and atmospheric effects.',
      tools: ['3ds Max', 'V-Ray', 'Lumion', 'Photoshop'],
      tags: ['Environment', '3D Render', 'Landscape', 'Outdoor'],
      image: `https://readdy.ai/api/search-image?query=Photorealistic%203D%20environment%20rendering%20of%20modern%20urban%20plaza%20with%20landscaping%20contemporary%20outdoor%20architectural%20visualization%20clean%20public%20space%20design%20with%20trees%20and%20seating%20areas%20professional%203D%20render%20with%20natural%20lighting%20and%20realistic%20materials%20high-quality%20CGI%20architectural%20visualization&width=1200&height=800&seq=environment-item-${i + 1}&orientation=landscape`
    }))
  }
};

export async function generateStaticParams() {
  return [
    { slug: 'brand-identity-design' },
    { slug: 'marketing-campaign' },
    { slug: 'logo-design-suite' },
    { slug: 'print-design-collection' },
    { slug: 'packaging-design' },
    { slug: 'social-media-graphics' },
    { slug: 'ecommerce-website' },
    { slug: 'dashboard-ui-design' },
    { slug: 'landing-page-design' },
    { slug: 'saas-web-application' },
    { slug: 'portfolio-website' },
    { slug: 'mobile-responsive-ui' },
    { slug: 'architectural-visualization' },
    { slug: 'interior-design-rendering' },
    { slug: 'product-rendering' },
    { slug: 'modern-furniture-design' },
    { slug: 'commercial-space-design' },
    { slug: 'realistic-environment-render' }
  ];
}

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const project = portfolioData[slug];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <Link href="/" className="text-blue-600 hover:text-blue-700 font-semibold">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return <PortfolioDetailClient project={project} />;
}