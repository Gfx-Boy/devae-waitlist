import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Devae - Developer Social Media Platform',
    short_name: 'Devae',
    description: 'Social media platform for developers to connect, collaborate, and build together',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    orientation: 'portrait',
    categories: ['productivity', 'social', 'developer tools'],
    icons: [
      {
        src: '/images/d-20logo-20white-20transparent.webp',
        sizes: 'any',
        type: 'image/webp',
        purpose: 'any maskable',
      },
    ],
  }
}
