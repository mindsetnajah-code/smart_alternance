'use client'

import { Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { usePWAInstall } from '@/hooks/use-pwa-install'
import { cn } from '@/lib/utils'

type PWAInstallButtonProps = {
  className?: string
  fullWidth?: boolean
}

export function PWAInstallButton({
  className,
  fullWidth = false,
}: PWAInstallButtonProps) {
  const { canInstall, isInstalled, install } = usePWAInstall()

  if (isInstalled || !canInstall) {
    return null
  }

  return (
    <Button
      type="button"
      variant="outline"
      onClick={() => void install()}
      className={cn(
        'rounded-full border-secondary/20 bg-white/80 text-secondary shadow-sm hover:bg-white hover:text-primary',
        fullWidth && 'w-full rounded-2xl',
        className,
      )}
    >
      <Download className="h-4 w-4" />
      Installer l&apos;app
    </Button>
  )
}
