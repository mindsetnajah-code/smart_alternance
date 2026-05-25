"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { PWAInstallButton } from "@/components/pwa-install-button"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Menu, Sparkles, X } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const links = [
    { href: "/", label: "Accueil", active: pathname === "/" },
    { href: "/programme", label: "Programme", active: pathname === "/programme" },
    { href: "/instituts", label: "Instituts partenaires", active: pathname === "/instituts" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-[rgba(255,252,246,0.92)] backdrop-blur supports-[backdrop-filter]:bg-[rgba(255,252,246,0.72)]">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative overflow-hidden rounded-2xl border border-primary/15 bg-white p-1.5 shadow-[0_12px_30px_rgba(30,55,35,0.08)]">
            <div className="absolute inset-1 rounded-[0.9rem] border border-dashed border-primary/20 group-hover:animate-[drift_8s_ease-in-out_infinite]" />
            <Image
              src="/IMG-20260412-WA0032.jpg"
              alt="Logo Smart Alternance"
              width={52}
              height={52}
              className="relative z-[1] h-13 w-13 rounded-[0.9rem] object-cover transition-transform duration-500 group-hover:scale-105"
              priority
            />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-secondary">Smart Alternance</span>
              <span className="hidden rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-semibold text-primary sm:inline-flex">
                Excellence
              </span>
            </div>
            <p className="hidden text-xs text-muted-foreground sm:block">
              Orientation, bourse et insertion professionnelle
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-3 md:flex">
          {links.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
                link.active
                  ? "bg-white text-foreground shadow-sm ring-1 ring-primary/10"
                  : "text-muted-foreground hover:bg-white/85 hover:text-primary"
              )}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {link.label}
            </Link>
          ))}
          <PWAInstallButton />
          <Link href="/inscription">
            <Button className="rounded-full bg-primary px-5 text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90">
              <Sparkles className="h-4 w-4" />
              S'inscrire
            </Button>
          </Link>
        </nav>

        <button
          className="flex items-center justify-center rounded-full border border-primary/10 bg-white p-2 shadow-sm md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <nav className="border-t border-primary/10 bg-[rgba(255,252,246,0.96)] px-4 py-5 shadow-[0_20px_40px_rgba(30,55,35,0.08)] md:hidden">
          <div className="container mx-auto flex flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-2xl border px-4 py-3 text-sm font-medium transition-colors",
                  link.active
                    ? "border-primary/15 bg-white text-foreground"
                    : "border-transparent bg-white/70 text-muted-foreground"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <PWAInstallButton fullWidth />
            <Link href="/inscription" onClick={() => setIsOpen(false)}>
              <Button className="w-full rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90">
                S'inscrire
              </Button>
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
