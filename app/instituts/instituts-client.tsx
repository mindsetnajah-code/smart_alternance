"use client"

import Image from "next/image"
import { useMemo, useState } from "react"
import { Info, MessageCircle, Phone, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { institutes, phoneHref, whatsappHref, type Institute } from "@/lib/institutes"

const allSectorsLabel = "Tous"

function normalizeText(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
}

function getWhatsappHref(institute: Institute) {
  const message = `Bonjour, je souhaite m'inscrire ou obtenir des informations pour ${institute.shortName}.`
  return `${whatsappHref}?text=${encodeURIComponent(message)}`
}

export function InstitutsClient() {
  const [query, setQuery] = useState("")
  const [selectedSector, setSelectedSector] = useState(allSectorsLabel)

  const sectors = useMemo(
    () => [allSectorsLabel, ...Array.from(new Set(institutes.map((institute) => institute.sector))).sort()],
    [],
  )

  const filteredInstitutes = useMemo(() => {
    const normalizedQuery = normalizeText(query.trim())

    return institutes.filter((institute) => {
      const matchesSector = selectedSector === allSectorsLabel || institute.sector === selectedSector
      const searchable = normalizeText(
        [
          institute.name,
          institute.shortName,
          institute.description,
          institute.category,
          institute.sector,
          ...institute.programs,
        ].join(" "),
      )

      return matchesSector && (!normalizedQuery || searchable.includes(normalizedQuery))
    })
  }, [query, selectedSector])

  return (
    <section className="bg-background py-12 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-8 grid gap-4 lg:grid-cols-[minmax(240px,360px)_1fr] lg:items-start">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Rechercher un institut, une filière..."
              className="h-11 pl-10"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {sectors.map((sector) => {
              const isSelected = selectedSector === sector

              return (
                <Button
                  key={sector}
                  type="button"
                  variant={isSelected ? "default" : "outline"}
                  size="sm"
                  aria-pressed={isSelected}
                  onClick={() => setSelectedSector(sector)}
                  className="min-h-9"
                >
                  {sector}
                </Button>
              )
            })}
          </div>
        </div>

        <div className="mb-6 flex items-center justify-between gap-3">
          <p className="text-sm text-muted-foreground">
            {filteredInstitutes.length} institut{filteredInstitutes.length > 1 ? "s" : ""} affiché
            {filteredInstitutes.length > 1 ? "s" : ""}
          </p>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => {
              setQuery("")
              setSelectedSector(allSectorsLabel)
            }}
          >
            Réinitialiser
          </Button>
        </div>

        {filteredInstitutes.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {filteredInstitutes.map((institute) => (
              <InstituteCard key={institute.name} institute={institute} />
            ))}
          </div>
        ) : (
          <div className="flex min-h-52 items-center justify-center rounded-lg border border-dashed border-border px-6 text-center">
            <p className="max-w-md text-sm text-muted-foreground">
              Aucun institut ne correspond à cette recherche. Essayez un autre nom, secteur ou domaine.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

function InstituteCard({ institute }: { institute: Institute }) {
  return (
    <Card className="group flex h-full flex-col overflow-hidden border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="border-b border-border bg-white px-5 py-5">
        <div className="relative mx-auto flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-lg bg-[linear-gradient(180deg,#fffdf8_0%,#f6f0df_100%)]">
          <Image
            src={institute.logo}
            alt={`Logo de ${institute.name}`}
            fill
            className={cn("object-contain p-5", institute.logoClassName)}
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
          />
        </div>
      </div>

      <CardHeader className="pb-4">
        <div className="mb-3 flex flex-wrap gap-2">
          {institute.isNew ? (
            <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
              Nouveau
            </span>
          ) : null}
          <span className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary">
            {institute.category}
          </span>
        </div>
        <CardTitle className="text-xl text-foreground">{institute.shortName}</CardTitle>
        <CardDescription className="text-sm leading-6 text-muted-foreground">
          {institute.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="mt-auto">
        <div className="mb-6">
          <p className="mb-2 text-sm font-medium text-foreground">Domaines mis en avant :</p>
          <ul className="space-y-2">
            {institute.programs.slice(0, 4).map((program) => (
              <li key={program} className="text-sm text-muted-foreground">
                • {program}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="w-full">
                <Info className="mr-2 h-4 w-4" />
                Voir les détails
              </Button>
            </DialogTrigger>
            <InstituteDetails institute={institute} />
          </Dialog>

          <div className="grid grid-cols-2 gap-2">
            <Button
              asChild
              variant="outline"
              className="border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <a href={phoneHref}>
                <Phone className="mr-2 h-4 w-4" />
                Appeler
              </a>
            </Button>
            <Button asChild className="bg-[#128c7e] text-white hover:bg-[#0f7f73]">
              <a href={getWhatsappHref(institute)} target="_blank" rel="noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function InstituteDetails({ institute }: { institute: Institute }) {
  return (
    <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl">
      <DialogHeader>
        <DialogTitle>{institute.name}</DialogTitle>
        <DialogDescription>{institute.description}</DialogDescription>
      </DialogHeader>

      <div className="grid gap-6 sm:grid-cols-[180px_1fr]">
        <div className="relative aspect-square overflow-hidden rounded-lg border border-border bg-white">
          <Image
            src={institute.logo}
            alt={`Logo de ${institute.name}`}
            fill
            className={cn("object-contain p-5", institute.logoClassName)}
            sizes="180px"
          />
        </div>

        <div>
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary">
              {institute.category}
            </span>
            <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
              {institute.sector}
            </span>
          </div>

          <p className="mb-2 text-sm font-medium text-foreground">Filières et domaines :</p>
          <ul className="grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
            {institute.programs.map((program) => (
              <li key={program}>• {program}</li>
            ))}
          </ul>
        </div>
      </div>

      <DialogFooter>
        <Button asChild variant="outline">
          <a href={phoneHref}>
            <Phone className="mr-2 h-4 w-4" />
            Appeler
          </a>
        </Button>
        <Button asChild className="bg-[#128c7e] text-white hover:bg-[#0f7f73]">
          <a href={getWhatsappHref(institute)} target="_blank" rel="noreferrer">
            <MessageCircle className="mr-2 h-4 w-4" />
            WhatsApp
          </a>
        </Button>
      </DialogFooter>
    </DialogContent>
  )
}
