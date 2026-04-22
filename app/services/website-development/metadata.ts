import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Website Development Services - Custom Web Design & Development | Creative Studio Pro',
  description: 'Professional website development services including custom web design, e-commerce solutions, responsive design, and CMS integration. Build your online presence with us.',
  keywords: 'website development, web design, e-commerce development, responsive design, CMS integration, custom websites, web applications, landing pages',
  openGraph: {
    title: 'Website Development Services | Creative Studio Pro',
    description: 'Professional website development services including custom web design, e-commerce solutions, and responsive design.',
    type: 'website',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/services/website-development`,
    images: [
      {
        url: 'https://readdy.ai/api/search-image?query=Professional%20website%20development%20services%20showcase&width=1200&height=630&seq=og-webdev&orientation=landscape',
        width: 1200,
        height: 630,
        alt: 'Website Development Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Development Services | Creative Studio Pro',
    description: 'Professional website development services including custom web design and e-commerce solutions.',
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/services/website-development`,
  },
};
