'use client'

import { Download, Smartphone, WifiOff } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { usePWAInstall } from '@/hooks/use-pwa-install'

export function PWAInstallCard() {
  const { canInstall, isInstalled, install } = usePWAInstall()

  if (isInstalled) {
    return null
  }

  return (
    <div className="mt-8 rounded-[1.75rem] border border-secondary/15 bg-[linear-gradient(135deg,rgba(255,255,255,0.94)_0%,rgba(238,246,242,0.98)_100%)] p-5 text-left shadow-[0_20px_55px_rgba(20,35,20,0.08)] backdrop-blur">
      <div className="flex flex-wrap items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
          <Smartphone className="h-6 w-6" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
            Version application
          </p>
          <h2 className="mt-2 text-xl font-semibold text-foreground">
            Installez Smart Alternance sur votre téléphone
          </h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Accès plus rapide, expérience plein écran et page de secours hors
            ligne si la connexion coupe.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 shadow-sm">
              <Download className="h-3.5 w-3.5 text-primary" />
              Installation en 1 clic
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 shadow-sm">
              <WifiOff className="h-3.5 w-3.5 text-primary" />
              Fallback hors ligne
            </span>
          </div>
        </div>
      </div>

      <div className="mt-5">
        {canInstall ? (
          <Button
            type="button"
            size="lg"
            onClick={() => void install()}
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
          >
            <Download className="h-4 w-4" />
            Installer l&apos;application
          </Button>
        ) : (
          <p className="text-sm text-muted-foreground">
            Si le bouton d&apos;installation n&apos;apparait pas encore, ouvrez le
            menu de votre navigateur puis choisissez
            {' '}<span className="font-medium text-foreground">Installer l&apos;app</span>
            {' '}ou
            {' '}<span className="font-medium text-foreground">Ajouter à l&apos;écran d&apos;accueil</span>.
          </p>
        )}
      </div>
    </div>
  )
}
