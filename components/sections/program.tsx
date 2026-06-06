import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Check, Sparkles, Target, Wallet } from "lucide-react"

const programs = [
  {
    icon: Wallet,
    title: "Plan économique",
    description: "Un accès facilité à l'éducation de qualité",
    color: "primary",
    badge: "Bourse jusqu'à 50%",
    features: [
      "Inscription dans des instituts professionnels, techniques et d'ingénierie",
      "Bourse d'étude : réduction de 50% pendant 3 ans",
      "Suivi académique personnalisé",
      "Aide au choix de filière",
    ],
  },
  {
    icon: BookOpen,
    title: "Formation complémentaire",
    description: "Des compétences clés pour l'avenir",
    color: "secondary",
    badge: "Compétences pratiques",
    features: [
      "Informatique avancée et design",
      "Anglais et art oratoire",
      "Développement personnel",
      "Leadership et entrepreneuriat",
    ],
  },
  {
    icon: Target,
    title: "Insertion professionnelle",
    description: "Un accompagnement vers l'emploi",
    color: "primary",
    badge: "Orientation vers l'emploi",
    features: [
      "Stage académique encadré",
      "Stage d'immersion en entreprise",
      "Stage post-diplôme",
      "Accompagnement au recrutement",
    ],
  },
]

export function ProgramSection() {
  return (
    <section
      id="etudier-a-letranger"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#f8f6ef_0%,#fffdf7_42%,#fff9ee_100%)] py-20 lg:py-28 [content-visibility:auto] [contain-intrinsic-size:1px_1200px]"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(245,158,11,0.12),transparent_24%),radial-gradient(circle_at_84%_22%,rgba(22,101,52,0.1),transparent_26%),radial-gradient(circle_at_50%_100%,rgba(245,158,11,0.07),transparent_30%)]" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/85 px-4 py-2 text-sm font-medium text-primary shadow-sm backdrop-blur">
            <Sparkles className="h-4 w-4" />
            Un parcours pensé pour la réussite
          </div>
          <h2 className="mb-4 text-balance text-3xl font-bold text-foreground md:text-4xl">
            Programme en 3 piliers
          </h2>
          <p className="text-pretty text-lg text-muted-foreground">
            Un parcours structuré pour vous accompagner de la formation jusqu&apos;à l&apos;emploi avec une expérience plus
            claire, plus rassurante et plus motivante.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => (
            <Card
              key={program.title}
              className="group relative overflow-hidden border-border/70 bg-white/85 shadow-[0_20px_50px_rgba(34,50,30,0.08)] backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(34,50,30,0.12)]"
            >
              <div
                className={`absolute left-0 top-0 h-1.5 w-full ${
                  program.color === "primary" ? "bg-primary" : "bg-secondary"
                }`}
              />
              <div
                className={`absolute inset-0 bg-gradient-to-br ${
                  program.color === "primary"
                    ? "from-primary/10 via-transparent to-transparent"
                    : "from-secondary/10 via-transparent to-transparent"
                }`}
              />

              <CardHeader className="relative pb-4">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                      program.color === "primary" ? "bg-primary/10" : "bg-secondary/10"
                    }`}
                  >
                    <program.icon
                      className={`h-7 w-7 ${program.color === "primary" ? "text-primary" : "text-secondary"}`}
                    />
                  </div>

                  <div
                    className="rounded-full border border-white/80 bg-white/90 px-3 py-1 text-xs font-semibold text-foreground shadow-sm animate-[float_6s_ease-in-out_infinite]"
                    style={{ animationDelay: `${index * 0.5}s` }}
                  >
                    {program.badge}
                  </div>
                </div>

                <CardTitle className="text-xl text-foreground">{program.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{program.description}</CardDescription>
              </CardHeader>

              <CardContent className="relative">
                <ul className="space-y-3">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          program.color === "primary" ? "bg-primary/10" : "bg-secondary/10"
                        }`}
                      >
                        <Check
                          className={`h-3 w-3 ${program.color === "primary" ? "text-primary" : "text-secondary"}`}
                        />
                      </div>
                      <span className="text-sm leading-6 text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/programme">Découvrir le programme complet</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
