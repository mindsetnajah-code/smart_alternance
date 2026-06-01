'use client'

import { useEffect, useState } from 'react'
import { Wifi, WifiOff } from 'lucide-react'

export function NetworkStatusBadge() {
  const [isOnline, setIsOnline] = useState(true)

  useEffect(() => {
    const updateStatus = () => {
      setIsOnline(navigator.onLine)
    }

    updateStatus()
    window.addEventListener('online', updateStatus)
    window.addEventListener('offline', updateStatus)

    return () => {
      window.removeEventListener('online', updateStatus)
      window.removeEventListener('offline', updateStatus)
    }
  }, [])

  return (
    <div
      aria-live="polite"
      aria-label={isOnline ? 'Connexion active' : 'Mode hors connexion'}
      className={[
        'fixed bottom-5 left-5 z-50 flex items-center gap-2 rounded-full border px-4 py-3 text-sm font-medium shadow-[0_18px_45px_rgba(18,55,39,0.18)] backdrop-blur transition-all',
        isOnline
          ? 'border-emerald-200 bg-emerald-50/90 text-emerald-800'
          : 'border-amber-200 bg-amber-50/95 text-amber-900',
      ].join(' ')}
    >
      <span
        className={[
          'flex h-9 w-9 items-center justify-center rounded-full',
          isOnline ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700',
        ].join(' ')}
      >
        {isOnline ? <Wifi className="h-4 w-4" /> : <WifiOff className="h-4 w-4" />}
      </span>
      <span className="hidden sm:inline">
        {isOnline ? 'En ligne' : 'Hors connexion'}
      </span>
      <span className="sm:hidden">
        {isOnline ? 'Online' : 'Offline'}
      </span>
    </div>
  )
}
