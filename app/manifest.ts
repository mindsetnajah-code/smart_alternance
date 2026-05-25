import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Smart Alternance',
    short_name: 'Smart Alternance',
    description:
      "Orientation, bourse d'etude et accompagnement vers la reussite professionnelle au Niger.",
    start_url: '/',
    display: 'standalone',
    background_color: '#fcfbf7',
    theme_color: '#d69e2e',
    lang: 'fr',
    scope: '/',
    orientation: 'portrait',
    categories: ['education', 'business'],
    icons: [
      {
        src: '/pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  }
}
