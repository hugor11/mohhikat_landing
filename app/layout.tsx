
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
// import SEOStructuredData from '@/components/seo-structured-data'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mohhikat - Arena para Gatos Premium Mexicana | Control Total de Olores',
  description: 'Arena premium para gatos hecha en México. Máxima absorción, control superior de olores y textura perfecta. Ideal para hogares mexicanos. ¡Pruébala ya!',
  keywords: [
    'arena para gatos',
    'arena mexicana',
    'control de olores',
    'absorción premium',
    'Mohhikat',
    'arena natural',
    'gatos México',
    'mascota limpia',
    'hogar sin olores',
    'arena ecológica'
  ],
  authors: [{ name: 'Mohhikat México' }],
  creator: 'Mohhikat',
  publisher: 'Mohhikat México',
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
    title: 'Mohhikat - Arena Premium para Gatos | Hecha en México',
    description: 'Arena premium mexicana con control superior de olores y máxima absorción. Para gatos felices y hogares frescos.',
    url: 'https://mohhikat.com',
    siteName: 'Mohhikat México',
    images: [
      {
        url: '/images/logotipo.jpg',
        width: 1200,
        height: 630,
        alt: 'Mohhikat - Arena Premium para Gatos Mexicana',
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohhikat - Arena Premium para Gatos Mexicana',
    description: 'Arena premium con control superior de olores. Hecha en México para hogares mexicanos.',
    images: ['/images/logotipo.jpg'],
    creator: '@mohhikat',
  },
  alternates: {
    canonical: 'https://mohhikat.com',
  },
  category: 'pets',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-MX">
      <head>
        {/* <SEOStructuredData /> */}
        <link rel="canonical" href="https://mohhikat.com" />
        <meta name="geo.region" content="MX" />
        <meta name="geo.country" content="México" />
        <meta name="language" content="es-MX" />
        <meta name="theme-color" content="#4ECDC4" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Mohhikat" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
