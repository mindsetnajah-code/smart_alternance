'use client'

import { useEffect, useState } from 'react'

export type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>
  userChoice: Promise<{
    outcome: 'accepted' | 'dismissed'
    platform: string
  }>
}

type NavigatorWithStandalone = Navigator & {
  standalone?: boolean
}

export function usePWAInstall() {
  const [installPrompt, setInstallPrompt] =
    useState<BeforeInstallPromptEvent | null>(null)
  const [isInstalled, setIsInstalled] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(display-mode: standalone)')
    const checkInstalled = () => {
      const iosNavigator = window.navigator as NavigatorWithStandalone

      setIsInstalled(mediaQuery.matches || iosNavigator.standalone === true)
    }

    const handleBeforeInstallPrompt = (event: Event) => {
      event.preventDefault()
      setInstallPrompt(event as BeforeInstallPromptEvent)
    }

    const handleInstalled = () => {
      setIsInstalled(true)
      setInstallPrompt(null)
    }

    checkInstalled()
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    window.addEventListener('appinstalled', handleInstalled)
    mediaQuery.addEventListener('change', checkInstalled)

    return () => {
      window.removeEventListener(
        'beforeinstallprompt',
        handleBeforeInstallPrompt,
      )
      window.removeEventListener('appinstalled', handleInstalled)
      mediaQuery.removeEventListener('change', checkInstalled)
    }
  }, [])

  const install = async () => {
    if (!installPrompt) {
      return false
    }

    await installPrompt.prompt()
    const choice = await installPrompt.userChoice

    if (choice.outcome === 'accepted') {
      setInstallPrompt(null)
      return true
    }

    return false
  }

  return {
    canInstall: !isInstalled && installPrompt !== null,
    isInstalled,
    install,
  }
}
