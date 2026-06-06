import { Heart, Percent, Rocket, Sparkles, Wrench } from "lucide-react"

const advantages = [
  {
    icon: Heart,
    title: "Accompagnement personnalisé",
    description: "Un suivi individuel tout au long de votre parcours avec des conseillers dédiés.",
  },
  {
    icon: Percent,
    title: "Réduction des frais",
    description: "Bénéficiez d'une réduction de 50% sur vos frais de scolarité pendant 3 ans.",
  },
  {
    icon: Wrench,
    title: "Formation pratique",
    description: "Des compétences concrètes et directement applicables en entreprise.",
  },
  {
    icon: Rocket,
    title: "Insertion rapide",
    description: "Un réseau de partenaires pour faciliter votre entrée dans le monde professionnel.",
  },
]

const highlights = ["Suivi humain", "Frais réduits", "Compétences utiles", "Débouchés rapides"]

export function AdvantagesSection() {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-28 [content-visibility:auto] [contain-intrinsic-size:1px_900px]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(245,158,11,0.08),transparent_22%),radial-gradient(circle_at_86%_24%,rgba(22,101,52,0.08),transparent_22%)]" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="mb-16 grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/85 px-4 py-2 text-sm font-medium text-primary shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4" />
              Pourquoi nous choisir
            </div>
            <h2 className="mb-4 text-balance text-3xl font-bold text-foreground md:text-4xl">
              Pourquoi choisir Smart Alternance ?
            </h2>
            <p className="max-w-xl text-pretty text-lg text-muted-foreground">
              Des avantages concrets pour construire votre avenir professionnel avec plus de clarté, plus de soutien
              et plus d&apos;opportunités.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 lg:justify-end">
            {highlights.map((item, index) => (
              <div
                key={item}
                className="rounded-full border border-border/80 bg-white/85 px-4 py-3 text-sm font-medium text-foreground shadow-sm backdrop-blur animate-[float_6s_ease-in-out_infinite]"
                style={{ animationDelay: `${index * 0.45}s` }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((advantage, index) => (
            <div
              key={advantage.title}
              className="group rounded-[1.8rem] border border-border/70 bg-white/85 p-6 text-center shadow-[0_18px_45px_rgba(34,50,30,0.08)] backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_26px_60px_rgba(34,50,30,0.12)]"
            >
              <div
                className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-500 group-hover:scale-105 group-hover:bg-primary"
                style={{ animationDelay: `${index * 0.35}s` }}
              >
                <advantage.icon className="h-8 w-8 text-primary transition-colors group-hover:text-primary-foreground" />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-foreground">{advantage.title}</h3>
              <p className="text-sm leading-6 text-muted-foreground">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
