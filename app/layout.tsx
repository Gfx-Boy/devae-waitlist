import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
})
const _inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: {
    default: "Devae™ - Official Social Media Platform for Developers | Developer Collaboration Network",
    template: "%s | Devae™"
  },
  description: "Official Devae™ website - The world's leading social media platform and collaboration network for developers. Connect with developers worldwide, build teams, share code, and collaborate on projects. Join 10,000+ developers on the #1 developer community platform, threads for developers, and coding collaboration tool.",
  keywords: [
    "devae",
    "devae.us",
    "devae official",
    "devae platform",
    "devae app",
    "devae developer",
    "devae social media",
    "devae network",
    "official devae",
    "devae.us official website",
    "developer social media",
    "developer collaboration platform",
    "social network for developers",
    "developer community",
    "coding collaboration",
    "programmer social network",
    "developer networking platform",
    "tech social media",
    "developers connect",
    "software developer platform",
    "coding community",
    "developer teamwork",
    "collaborative coding platform",
    "threads for developers",
    "developer forum",
    "programming social network",
    "tech collaboration tool",
    "developer matching platform",
    "find developers",
    "build developer teams",
    "software engineering collaboration",
    "code sharing platform",
    "developer chat",
    "programming community",
    "github for social",
    "stackoverflow alternative",
    "reddit for developers",
    "discord for programmers",
    "slack for developers",
    "tech networking",
    "remote developer collaboration",
    "pair programming platform",
    "developer mentorship",
    "coding bootcamp network",
    "open source collaboration",
    "software development community",
    "web developer platform",
    "mobile developer network",
    "full stack developer community",
    "frontend developer social",
    "backend developer network",
    "devops community platform",
    "ai developer network",
    "machine learning collaboration",
    "blockchain developer community"
  ],
  metadataBase: new URL('https://devae.us'),
  applicationName: "Devae",
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  other: {
    'google-site-verification': 'your-verification-code',
    'brand': 'Devae',
    'trademark': 'Devae™',
    'copyright': '© 2025 Devae. All rights reserved.',
  },
  authors: [{ name: "Devae" }],
  creator: "Devae",
  publisher: "Devae",
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
    type: "website",
    locale: "en_US",
    url: "https://devae.us",
    title: "Devae - Social Media Platform for Developers | Connect, Collaborate, Code",
    description: "Join Devae, the premier social media platform for developers. Connect with developers worldwide, collaborate on projects, share code, and build amazing things together. The ultimate developer community and collaboration network.",
    siteName: "Devae",
    images: [
      {
        url: "https://devae.us/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Devae - Developer Social Media Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Devae™ - Official Developer Social Media Platform",
    description: "Official Devae™ - Connect with 10,000+ developers worldwide. Collaborate on projects, share code, build teams. The #1 developer social network and collaboration platform.",
    creator: "@devaeus",
    site: "@devaeus",
    images: ["https://devae.us/og-image.jpg"],
  },
  alternates: {
    canonical: "https://devae.us",
  },
  category: "technology",
  classification: "Developer Tools, Social Media, Collaboration Platform",
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Devae",
    "alternateName": ["devae.us", "Devae Platform", "Devae Developer Network"],
    "description": "Official Devae - Social media platform and collaboration network for developers worldwide",
    "url": "https://devae.us",
    "inLanguage": "en-US",
    "isPartOf": {
      "@type": "WebSite",
      "url": "https://devae.us"
    },
    "about": {
      "@type": "Thing",
      "name": "Developer Tools",
      "description": "Social networking and collaboration tools for software developers"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://devae.us/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "sameAs": [
      "https://x.com/devaeus",
      "https://instagram.com/devae.us",
      "https://linkedin.com/company/devae",
      "https://github.com/devae",
      "https://discord.gg/devae"
    ]
  }

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Devae",
    "legalName": "Devae Inc.",
    "alternateName": "devae.us",
    "brand": {
      "@type": "Brand",
      "name": "Devae",
      "slogan": "Where Developers Truly Connect"
    },
    "description": "The official and leading social media platform for developers to connect, collaborate, and build together. Trusted by 10,000+ developers worldwide.",
    "url": "https://devae.us",
    "logo": "https://devae.us/images/devae-20white-20transparent.webp",
    "foundingDate": "2025",
    "foundingLocation": "United States",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": "10+"
    },
    "sameAs": [
      "https://x.com/devaeus",
      "https://instagram.com/devae.us",
      "https://linkedin.com/company/devae",
      "https://github.com/devae",
      "https://discord.gg/devae"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "hello@devae.us",
      "availableLanguage": "English",
      "areaServed": "Worldwide"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    }
  }

  const softwareAppData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Devae",
    "applicationCategory": "DeveloperApplication",
    "applicationSubCategory": "Social Networking, Collaboration Tool",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "ratingCount": "1",
      "bestRating": "5"
    },
    "operatingSystem": "Web, iOS, Android",
    "description": "Social media and collaboration platform designed specifically for developers",
    "featureList": [
      "Real-time collaboration",
      "Developer networking",
      "Code sharing",
      "Team building",
      "Project collaboration"
    ],
    "softwareVersion": "1.0",
    "datePublished": "2025-11-30",
    "keywords": "developer, social media, collaboration, networking, programming"
  }

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://devae.us"
      }
    ]
  }

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Devae?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Devae is a social media platform and collaboration network designed specifically for developers to connect, collaborate, and build projects together."
        }
      },
      {
        "@type": "Question",
        "name": "Is Devae free to use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Devae is completely free for developers to join and use."
        }
      },
      {
        "@type": "Question",
        "name": "Who can join Devae?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Devae is open to all developers, programmers, software engineers, and anyone interested in coding and technology collaboration."
        }
      }
    ]
  }

  return (
    <html lang="en">
      <head>
        {/* DNS Prefetch & Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Viewport & Theme */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="color-scheme" content="dark light" />
        
        {/* Mobile App Meta Tags */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Devae" />
        <meta name="application-name" content="Devae" />
        
        {/* Canonical & Alternates */}
        <link rel="canonical" href="https://devae.us" />
        <link rel="alternate" hrefLang="en" href="https://devae.us" />
        <link rel="alternate" hrefLang="x-default" href="https://devae.us" />
        
        {/* Geographic & Language */}
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="language" content="English" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="coverage" content="Worldwide" />
        
        {/* Compatibility */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Security & Privacy */}
        <meta name="referrer" content="origin-when-cross-origin" />
        
        {/* Favicon References */}
        <link rel="icon" href="/d logo app.webp" sizes="any" />
        <link rel="icon" href="/d logo app.webp" type="image/webp" />
        <link rel="apple-touch-icon" href="/d logo app.webp" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
