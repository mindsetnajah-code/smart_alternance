import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { MessageCircle } from 'lucide-react'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: {
    default: 'Smart Alternance - Construisez votre avenir',
    template: '%s | Smart Alternance',
  },
  description:
    "Un programme complet pour les élèves et étudiants : orientation, bourse d'étude, formation de qualité et insertion professionnelle au Niger.",
  keywords: [
    'Smart Alternance',
    'orientation étudiante',
    "bourse d'étude Niger",
    'instituts partenaires Niger',
    'inscription étudiant Niger',
  ],
  openGraph: {
    title: 'Smart Alternance - Construisez votre avenir',
    description:
      "Orientation, bourse d'étude et accompagnement vers la réussite professionnelle pour les élèves et étudiants au Niger.",
    type: 'website',
    locale: 'fr_NE',
  },
  icons: {
    icon: [
      {
        url: '/IMG-20260412-WA0032.jpg',
        type: 'image/jpeg',
      },
    ],
    shortcut: '/IMG-20260412-WA0032.jpg',
    apple: '/IMG-20260412-WA0032.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" data-scroll-behavior="smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
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
