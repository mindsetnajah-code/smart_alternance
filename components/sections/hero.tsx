import Image from "next/image"
import Link from "next/link"
import { PWAInstallCard } from "@/components/pwa-install-card"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Briefcase,
  GraduationCap,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react"

const trustItems = [
  "Accompagnement personnalise",
  "Partenariats solides",
  "Suivi professionnel",
]

const quickNotes = [
  {
    icon: Briefcase,
    label: "Insertion rapide",
    className: "left-[-1rem] top-14 animate-[float_7s_ease-in-out_infinite]",
  },
  {
    icon: Sparkles,
    label: "Bourses et opportunites",
    className: "right-[-0.5rem] top-8 animate-[drift_9s_ease-in-out_infinite]",
  },
  {
    icon: GraduationCap,
    label: "Orientation claire",
    className: "bottom-10 left-3 animate-[float_8s_ease-in-out_infinite]",
  },
]

const stats = [
  {
    icon: GraduationCap,
    value: "500+",
    label: "Etudiants accompagnes",
    tone: "primary",
  },
  {
    icon: Users,
    value: "30+",
    label: "Instituts partenaires",
    tone: "secondary",
  },
  {
    icon: Briefcase,
    value: "85%",
    label: "Taux d'insertion",
    tone: "primary",
  },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fffdf8_0%,#fffaf0_34%,#f7f6ef_100%)] py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(245,158,11,0.16),transparent_26%),radial-gradient(circle_at_82%_22%,rgba(22,101,52,0.14),transparent_28%),radial-gradient(circle_at_50%_90%,rgba(245,158,11,0.09),transparent_30%)]" />
        <div className="absolute right-[-8rem] top-[-6rem] h-72 w-72 rounded-full border border-primary/15 bg-primary/5 blur-3xl" />
        <div className="absolute bottom-[-8rem] left-[-6rem] h-80 w-80 rounded-full border border-secondary/15 bg-secondary/5 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="text-center lg:text-left">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/80 px-4 py-2 text-sm font-medium text-primary shadow-sm backdrop-blur">
              <ShieldCheck className="h-4 w-4" />
              Bienvenue sur Smart Alternance
            </div>

            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Construisez votre avenir avec{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-secondary via-secondary to-primary bg-clip-text text-transparent">
                  Smart Alternance
                </span>
                <span className="absolute -bottom-2 left-1/2 h-3 w-[88%] -translate-x-1/2 rounded-full bg-primary/15 blur-md" />
              </span>
            </h1>

            <p className="mx-auto mb-8 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground lg:mx-0 md:text-xl">
                Un Etudier a l'etranger complet pour les eleves et etudiants BEPC, BAC, candidats libres, licence et master.
            </p>

            <div className="mb-8 flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground lg:justify-start">
              {trustItems.map((item, index) => (
                <span
                  key={item}
                  className="rounded-full border border-primary/10 bg-white/85 px-3 py-1.5 shadow-sm backdrop-blur animate-[float_6s_ease-in-out_infinite]"
                  style={{ animationDelay: `${index * 0.6}s` }}
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mb-8 grid gap-3 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-primary/10 bg-white/85 p-4 shadow-sm backdrop-blur">
                <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  <Sparkles className="h-4 w-4" />
                  Orientation + bourse
                </div>
                <p className="text-sm leading-6 text-muted-foreground">
                  Nous vous aidons a choisir la bonne voie et a acceder a des opportunites concretes.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-secondary/10 bg-white/85 p-4 shadow-sm backdrop-blur">
                <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-secondary/10 px-3 py-1 text-sm font-medium text-secondary">
                  <Rocket className="h-4 w-4" />
                  Carriere acceleree
                </div>
                <p className="text-sm leading-6 text-muted-foreground">
                  Une formation encadree, des partenaires solides et un vrai passage vers l'emploi.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <Link href="/inscription">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90"
                >
                  S'inscrire maintenant
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-secondary/20 bg-white/75 text-secondary shadow-sm hover:bg-white hover:text-primary"
              >
                <a href="#etudier-a-letranger">Decouvrir Etudier a l'etranger</a>
              </Button>
            </div>

            <PWAInstallCard />
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 blur-2xl" />

            {quickNotes.map((note, index) => (
              <div
                key={note.label}
                className={`absolute z-10 rounded-full border border-white/80 bg-white/90 px-4 py-2 text-sm font-medium text-foreground shadow-lg backdrop-blur ${note.className}`}
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                <note.icon className="mr-2 inline h-4 w-4 text-primary" />
                {note.label}
              </div>
            ))}

            <div className="relative overflow-hidden rounded-[2rem] border border-primary/10 bg-white/80 p-5 shadow-[0_30px_80px_rgba(20,35,20,0.12)] backdrop-blur">
              <div className="absolute inset-x-8 top-4 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              <div className="rounded-[1.5rem] border border-border/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(255,250,240,0.96)_100%)] p-6">
                <div className="mb-5 flex items-center justify-between text-xs uppercase tracking-[0.25em] text-primary/80">
                  <span>Smart Alternance</span>
                  <span className="text-secondary">Excellence</span>
                </div>

                <div className="relative mx-auto flex w-full max-w-[18rem] items-center justify-center rounded-[2rem] border border-primary/10 bg-white p-5 shadow-inner">
                  <div className="absolute inset-3 rounded-[1.6rem] border border-dashed border-primary/20 animate-[drift_12s_ease-in-out_infinite]" />
                  <div className="absolute -left-3 top-8 h-8 w-8 rounded-full bg-primary/15 blur-md animate-[float_6s_ease-in-out_infinite]" />
                  <div className="absolute -right-2 bottom-12 h-10 w-10 rounded-full bg-secondary/20 blur-md animate-[drift_8s_ease-in-out_infinite]" />
                  <div className="absolute left-1/2 top-2 -translate-x-1/2 rounded-full border border-primary/15 bg-white/90 px-3 py-1 text-xs font-semibold text-primary shadow-sm animate-[float_7s_ease-in-out_infinite]">
                    Logo officiel
                  </div>

                  <Image
                    src="/IMG-20260412-WA0032.jpg"
                    alt="Logo officiel Smart Alternance"
                    width={320}
                    height={320}
                    loading="eager"
                    className="relative z-[1] h-auto w-full rounded-full object-cover transition-transform duration-700 hover:scale-105"
                    priority
                  />
                </div>

                <div className="mt-6 grid gap-3">
                  <div className="rounded-2xl border border-secondary/15 bg-secondary/5 px-4 py-3 text-sm text-foreground">
                    Orientation academique, bourse et accompagnement vers l'emploi.
                  </div>
                  <div className="rounded-2xl border border-primary/15 bg-primary/5 px-4 py-3 text-sm text-muted-foreground">
                    Formation. Insertion. Excellence.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-3 rounded-[1.75rem] border border-border/80 bg-white/80 p-6 text-center shadow-sm backdrop-blur"
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full ${
                  stat.tone === "primary" ? "bg-primary/10" : "bg-secondary/10"
                }`}
              >
                <stat.icon
                  className={`h-6 w-6 ${
                    stat.tone === "primary" ? "text-primary" : "text-secondary"
                  }`}
                />
              </div>
              <div className="text-3xl font-bold text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
