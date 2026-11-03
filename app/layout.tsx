import './globals.css';
import type { Metadata } from 'next';
import { Inter, Oswald } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  weight: ['400', '500', '600', '700'],
});

const businessInfo = {
  name: 'PrimeCut Barbers',
  telephone: '+1-123-634-6544',
  email: 'info@primecutbarbers.com',
  address: {
    streetAddress: '20 N St',
    addressLocality: 'Lompoc',
    addressRegion: 'CA',
    postalCode: '93436',
    addressCountry: 'US',
  },
  openingHours: ['Mo-Sa 08:00-18:00', 'Su 10:00-16:00'],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://primecutbarbers.com'),
  title: 'PrimeCut Barbers | Expert Barbers in Lompoc, CA',
  description:
    'Premium barbering services in Lompoc, CA, including classic haircuts, modern fades, beard trims, and hot towel shaves.',
  applicationName: 'PrimeCut Barbers',
  appleWebApp: {
    capable: true,
    title: 'PrimeCut Barbers',
  },
  openGraph: {
    title: 'PrimeCut Barbers | Expert Barbers in Lompoc, CA',
    description:
      'Experienced barbering for classic cuts, modern fades, beard shaping, and premium grooming services in Lompoc, CA.',
    url: 'https://primecutbarbers.com',
    siteName: 'PrimeCut Barbers',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 800,
        alt: 'PrimeCut Barbers shop interior',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PrimeCut Barbers | Expert Barbers in Lompoc, CA',
    description:
      'Classic barbering, modern fades, beard shaping, and premium grooming services in Lompoc, CA.',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#070b17',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const localBusinessJson = {
    '@context': 'https://schema.org',
    '@type': 'BarberShop',
    name: businessInfo.name,
    telephone: businessInfo.telephone,
    email: businessInfo.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: businessInfo.address.streetAddress,
      addressLocality: businessInfo.address.addressLocality,
      addressRegion: businessInfo.address.addressRegion,
      postalCode: businessInfo.address.postalCode,
      addressCountry: businessInfo.address.addressCountry,
    },
    openingHours: businessInfo.openingHours,
    sameAs: ['https://instagram.com', 'https://facebook.com', 'https://linkedin.com'],
  };

  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${oswald.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className="bg-navy-950 text-cream antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJson) }}
        />
        {children}
      </body>
    </html>
  );
}
