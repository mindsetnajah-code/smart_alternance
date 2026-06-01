import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { MessageCircle } from 'lucide-react'
import { NetworkStatusBadge } from '@/components/network-status-badge'
import { PWAProvider } from '@/components/pwa-provider'
import './globals.css'

export const metadata: Metadata = {
  applicationName: 'Smart Alternance',
  title: {
    default: 'Smart Alternance - Construisez votre avenir',
    template: '%s | Smart Alternance',
  },
  description:
    "Un Etudier a l'etranger complet pour les eleves et etudiants : orientation, bourse d'etude, formation de qualite et insertion professionnelle au Niger.",
  keywords: [
    'Smart Alternance',
    'orientation etudiante',
    "bourse d'etude Niger",
    'instituts partenaires Niger',
    'inscription etudiant Niger',
  ],
  openGraph: {
    title: 'Smart Alternance - Construisez votre avenir',
    description:
      "Orientation, bourse d'etude et accompagnement vers la reussite professionnelle pour les eleves et etudiants au Niger.",
    type: 'website',
    locale: 'fr_NE',
  },
  manifest: '/manifest.webmanifest',
  icons: {
    icon: [
      {
        url: '/pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        url: '/pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    shortcut: '/pwa-192x192.png',
    apple: '/apple-icon.png',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Smart Alternance',
  },
  formatDetection: {
    telephone: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#d69e2e',
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" data-scroll-behavior="smooth">
      <body className="font-sans antialiased">
        <PWAProvider />
        {children}
        <NetworkStatusBadge />
        <a
          href="https://wa.me/22786366706"
          target="_blank"
          rel="noreferrer"
          aria-label="Contacter Smart Alternance sur WhatsApp"
          className="fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full border border-primary/20 bg-secondary px-4 py-3 text-sm font-medium text-secondary-foreground shadow-[0_18px_45px_rgba(18,55,39,0.24)] transition-transform hover:-translate-y-0.5 hover:bg-secondary/92"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <MessageCircle className="h-5 w-5" />
          </span>
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
