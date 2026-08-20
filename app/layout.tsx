import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://theseasecret.in'),

  title: {
    default: 'Sea Secret | Premium Seafood Restaurant in Pune',
    template: '%s | Sea Secret',
  },

  description:
    'Experience authentic coastal seafood at Sea Secret, Pune. Enjoy fresh seafood, signature coastal dishes, elegant ambience, and unforgettable dining. Reserve your table today.',

  keywords: [
    'Sea Secret',
    'Sea Secret Pune',
    'Seafood Restaurant Pune',
    'Best Seafood Restaurant Pune',
    'Sea Food Restaurant',
    'Coastal Cuisine',
    'South Indian Seafood',
    'Fresh Fish',
    'Crab',
    'Prawns',
    'Family Restaurant Pune',
    'Fine Dining Pune',
    'Seafood',
    'Restaurant',
  ],

  applicationName: 'Sea Secret',
  authors: [{ name: 'Sea Secret' }],
  creator: 'Sea Secret',
  publisher: 'Sea Secret',

  alternates: {
    canonical: 'https://theseasecret.in',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://theseasecret.in',
    siteName: 'Sea Secret',
    title: 'Sea Secret | Premium Seafood Restaurant in Pune',
    description:
      'Experience authentic coastal seafood with signature dishes, elegant ambience, and unforgettable dining at Sea Secret.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sea Secret Restaurant',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Sea Secret | Premium Seafood Restaurant in Pune',
    description:
      'Fresh coastal seafood, signature dishes, and an unforgettable dining experience.',
    images: ['/og-image.jpg'],
  },

  

  category: 'restaurant',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#06344F',
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
        
        <Script
  id="restaurant-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Restaurant",
      name: "Sea Secret",
      url: "https://theseasecret.in",
      image: "https://theseasecret.in/logo.png",
      telephone: "+91 9822748198",
      email: "theseasecretdeccan@gmail.com",
      servesCuisine: [
        "Seafood",
        "South Indian",
        "Mangalorean",
        "Coastal"
      ],
      acceptsReservations: true,
      menu: "https://theseasecret.in/#menu",
      openingHours: "Mo-Su 11:45-23:45",
      address: {
        "@type": "PostalAddress",
        streetAddress: "R Deccan Mall, 1st Floor, Jangali Maharaj Road, Deccan Gymkhana",
        addressLocality: "Pune",
        postalCode: "411004",
        addressCountry: "IN"
      }
    })
  }}
/>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BVP88BSW7R"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BVP88BSW7R');
          `}
        </Script>

        {/* Vercel Analytics */}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}