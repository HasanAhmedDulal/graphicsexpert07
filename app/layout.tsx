import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import WhatsAppButton from "@/components/WhatsAppButton";

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "graphicsexpert07 - Professional Graphics Design, Web Development & 3D Design Services",
  description: "Award-winning creative agency offering professional graphics design, custom web development, and photorealistic 3D visualization services. Trusted by 200+ clients in 50+ countries worldwide.",
  keywords: "graphics design services, web development agency, 3D design studio, logo design, brand identity, website development, e-commerce development, architectural visualization, interior rendering, product rendering, UI UX design, digital marketing, creative agency",
  authors: [{ name: "graphicsexpert07" }],
  creator: "graphicsexpert07",
  publisher: "graphicsexpert07",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://creativestudiopro.com',
    siteName: 'graphicsexpert07',
    title: 'graphicsexpert07 - Professional Graphics Design, Web Development & 3D Design',
    description: 'Award-winning creative agency offering professional graphics design, custom web development, and photorealistic 3D visualization services.',
    images: [
      {
        url: 'https://readdy.ai/api/search-image?query=Creative%20Studio%20Pro%20professional%20creative%20agency%20logo%20and%20branding%20showcase&width=1200&height=630&seq=og-image&orientation=landscape',
        width: 1200,
        height: 630,
        alt: 'graphicsexpert07 - Professional Creative Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'graphicsexpert07 - Professional Graphics Design, Web Development & 3D Design',
    description: 'Award-winning creative agency offering professional graphics design, custom web development, and photorealistic 3D visualization services.',
    images: ['https://readdy.ai/api/search-image?query=Creative%20Studio%20Pro%20professional%20creative%20agency%20logo%20and%20branding%20showcase&width=1200&height=630&seq=twitter-image&orientation=landscape'],
  },
  alternates: {
    canonical: 'https://creativestudiopro.com',
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#2563eb',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://creativestudiopro.com';

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "graphicsexpert07",
    "url": siteUrl,
    "logo": `${siteUrl}/logo.png`,
    "description": "Professional creative agency specializing in graphics design, web development, and 3D visualization services",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Creative Street",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "postalCode": "10001",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "customer service",
      "email": "hello@creativestudiopro.com",
      "availableLanguage": ["English"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/creativestudiopro",
      "https://www.behance.net/creativestudiopro",
      "https://dribbble.com/creativestudiopro"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "200",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "graphicsexpert07",
    "url": siteUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="canonical" href={siteUrl} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://readdy.ai" />
        <meta name="format-detection" content="telephone=no" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased font-inter bg-white text-gray-900`}>
        {children}
        <WhatsAppButton />
        <Script
          src="https://readdy.ai/api/public/assistant/widget?projectId=0129ea20-b9a7-4698-8d7f-c0b1767bc667"
          strategy="afterInteractive"

          voice-show-transcript="true"

          accent-color="#2563eb"
          button-base-color="#1f2937"
          button-accent-color="#ffffff"
        />
      </body>
    </html>
  );
}
