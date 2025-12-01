import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Join Devae™ Waitlist - Official Developer Platform Early Access | Sign Up Now',
  description: 'Join the official Devae™ waitlist today! Get early access to the world\'s #1 social media platform for developers. Sign up now to connect with 10,000+ developers, collaborate on projects, and unlock exclusive founding member benefits. Official waitlist - devae.us/waitlist',
  keywords: [
    'devae waitlist',
    'devae official waitlist',
    'devae sign up',
    'devae early access',
    'join devae',
    'devae beta',
    'devae developer waitlist',
    'devae.us waitlist',
    'developer platform waitlist',
    'devae registration',
    'devae join',
    'devae beta access',
    'devae founding members',
    'devae early bird',
    'official devae waitlist'
  ],
  openGraph: {
    title: 'Join Devae™ Waitlist - Official Early Access Sign Up',
    description: 'Secure your spot on the official Devae™ waitlist. Join 10,000+ developers for early access to the premier developer collaboration platform. Exclusive benefits for founding members.',
    url: 'https://devae.us/waitlist',
    type: 'website',
    images: [
      {
        url: 'https://devae.us/og-waitlist.jpg',
        width: 1200,
        height: 630,
        alt: 'Join Devae Waitlist - Official Developer Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Join Devae™ Waitlist - Official Early Access',
    description: 'Get early access to Devae™ - the #1 developer collaboration platform. Join the waitlist now!',
    images: ['https://devae.us/og-waitlist.jpg'],
  },
  alternates: {
    canonical: 'https://devae.us/waitlist',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}
