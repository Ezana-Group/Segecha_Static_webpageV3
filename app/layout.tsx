import { Outfit, Inter } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { JsonLd } from '@/components/JsonLd'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://segecha.com'),
  title: {
    default: 'Logistics & Freight East Africa | Segecha Group – Kenya',
    template: '%s | Segecha Group – Logistics East Africa',
  },
  description:
    'Segecha Group Ltd. provides reliable long-haul freight, cross-border transport, fleet tracking, and warehouse distribution across Kenya, Tanzania, Uganda, Rwanda, and Burundi. Headquarters in Mombasa Port.',
  keywords: [
    'logistics company Kenya',
    'freight company East Africa',
    'transport company Mombasa',
    'cargo transport Kenya Uganda Tanzania',
    'long haul freight Kenya',
    'cross border transport East Africa',
    'fleet tracking Kenya',
    'warehouse Mombasa',
    'freight forwarding Kenya',
  ],
  alternates: {
    canonical: 'https://segecha.com',
  },
  openGraph: {
    siteName: 'Segecha Group Ltd.',
    type: 'website',
    locale: 'en_KE',
    url: 'https://segecha.com',
    images: [
      {
        url: '/segecha_hero_truck.jpg',
        width: 1200,
        height: 630,
        alt: 'Segecha Group Logistics Truck',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@SegechaGroup',
    images: ['/segecha_hero_truck.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
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
  verification: {
    google: 'google-site-verification-placeholder', // User will replace
    yandex: 'yandex-verification-placeholder',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Segecha Group Ltd.',
  url: 'https://segecha.com',
  logo: 'https://segecha.com/logo-main.png',
  image: 'https://segecha.com/segecha_hero_truck.jpg',
  description:
    'Segecha Group Ltd. is a Kenyan logistics and freight company headquartered at Mombasa Port, Port Reitz Road, Mombasa, Kenya. Founded to serve East African trade corridors, the company provides long-haul freight transport, cross-border logistics, GPS fleet tracking, and warehouse distribution services across Kenya, Tanzania, Uganda, Rwanda, and Burundi.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Mombasa Port, Shed 12, Port Reitz Road',
    addressLocality: 'Mombasa',
    addressRegion: 'Coast',
    postalCode: '80100',
    addressCountry: 'KE',
  },
  telephone: '+254715385384',
  email: 'ops@segecha.com',
  foundingDate: '2014-05-15',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+254715385384',
      contactType: 'customer service',
      areaServed: ['KE', 'TZ', 'UG', 'RW', 'BI'],
      availableLanguage: ['English', 'Swahili'],
    },
    {
      '@type': 'ContactPoint',
      telephone: '+254141420518',
      contactType: 'sales',
      areaServed: ['KE', 'TZ', 'UG', 'RW', 'BI'],
      availableLanguage: ['English', 'Swahili'],
    },
  ],
  areaServed: [
    { '@type': 'Country', name: 'Kenya' },
    { '@type': 'Country', name: 'Tanzania' },
    { '@type': 'Country', name: 'Uganda' },
    { '@type': 'Country', name: 'Rwanda' },
    { '@type': 'Country', name: 'Burundi' },
  ],
  sameAs: [
    'https://wa.me/254715385384',
    'https://www.linkedin.com/company/segecha-group',
    'https://twitter.com/SegechaGroup',
  ],
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'FreightForwarder'],
  name: 'Segecha Group Ltd.',
  description: 'Logistics, freight, and cross-border transport across East Africa',
  url: 'https://segecha.com',
  telephone: '+254715385384',
  priceRange: '$$',
  image: 'https://segecha.com/segecha_hero_truck.jpg',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Mombasa Port, Shed 12, Port Reitz Road',
    addressLocality: 'Mombasa',
    addressCountry: 'KE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '-4.0435',
    longitude: '39.6682',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '08:00',
      closes: '14:00',
    },
  ],
  hasMap: 'https://maps.app.goo.gl/placeholder', // User will replace
  currenciesAccepted: 'KES, USD, UGX, TZS, RWF',
  paymentAccepted: 'Bank Transfer, Mobile Money, Cash',
  areaServed: ['KE', 'TZ', 'UG', 'RW', 'BI'],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Segecha Group Ltd.',
  url: 'https://segecha.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://segecha.com/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <JsonLd data={organizationSchema} />
        <JsonLd data={localBusinessSchema} />
        <JsonLd data={websiteSchema} />
      </head>
      <body className="font-inter antialiased">
        <a href="#main-content" className="skip-nav">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}

