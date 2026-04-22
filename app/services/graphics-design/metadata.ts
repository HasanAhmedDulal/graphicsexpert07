import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Graphics Design Services - Logo, Branding & Marketing Materials | graphicsexpert07',
  description: 'Professional graphics design services including logo design, brand identity, packaging, social media graphics, and print materials. Get custom designs that make your brand stand out.',
  keywords: 'graphics design, logo design, brand identity, packaging design, social media graphics, print design, business cards, brochures, flyers, marketing materials',
  openGraph: {
    title: 'Graphics Design Services | Creative Studio Pro',
    description: 'Professional graphics design services including logo design, brand identity, packaging, and marketing materials.',
    type: 'website',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/services/graphics-design`,
    images: [
      {
        url: 'https://readdy.ai/api/search-image?query=Professional%20graphic%20design%20services%20showcase&width=1200&height=630&seq=og-graphics&orientation=landscape',
        width: 1200,
        height: 630,
        alt: 'Graphics Design Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Graphics Design Services | Creative Studio Pro',
    description: 'Professional graphics design services including logo design, brand identity, and marketing materials.',
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/services/graphics-design`,
  },
};
