import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '3D Design Services - Architectural Visualization & Product Rendering | graphicsexpert07',
  description: 'Professional 3D design services including architectural visualization, interior rendering, product rendering, and photorealistic 3D modeling. Bring your vision to life.',
  keywords: '3D design, architectural visualization, interior rendering, product rendering, 3D modeling, photorealistic rendering, exterior visualization',
  openGraph: {
    title: '3D Design Services | graphicsexpert07',
    description: 'Professional 3D design services including architectural visualization, interior rendering, and product rendering.',
    type: 'website',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/services/3d-design`,
    images: [
      {
        url: 'https://readdy.ai/api/search-image?query=Professional%203D%20design%20services%20showcase&width=1200&height=630&seq=og-3d&orientation=landscape',
        width: 1200,
        height: 630,
        alt: '3D Design Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '3D Design Services | graphicsexpert07',
    description: 'Professional 3D design services including architectural visualization and product rendering.',
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/services/3d-design`,
  },
};
