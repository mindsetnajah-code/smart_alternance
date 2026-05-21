import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    name: "Myriam Boube.",
    role: "Etudiante en agronomie pastorale",
    content:
      "Grace a Smart Alternance, j'ai pu rejoindre une formation en agronomie pastorale avec une bourse de 50%. Le suivi personnalise m'a aidee a construire un projet solide en lien avec l'elevage et le developpement rural.",
    reaction: "😍",
    tag: "Bourse obtenue",
    avatar: "/image testimonials/file_00000000039c71f48e34f323b410a919.png",
    accent: "from-primary/20 via-primary/5 to-transparent",
  },
  {
    name: "Abdoul Majid Soumana.",
    role: "Etudiant en agronomie elevage",
    content:
      "Les formations complementaires et l'accompagnement de Smart Alternance m'ont permis de mieux valoriser mon profil en agronomie elevage. J'ai gagne en assurance pour presenter mon projet d'etudes et mes ambitions dans le secteur pastoral.",
    reaction: "🔥",
    tag: "Confiance +100%",
    avatar: "/image testimonials/file_00000000ba9071f481dfeee71759b923.png",
    accent: "from-secondary/20 via-secondary/5 to-transparent",
  },
  {
    name: "Oumarou Guero Fatiya.",
    role: "Stage d'immersion",
    content:
      "Le programme d'insertion professionnelle est incroyable. J'ai obtenu un stage dans une grande entreprise des ma deuxieme annee.",
    reaction: "👏",
    tag: "Stage valide",
    avatar: "/image testimonials/file_000000003f1471f49dcc945c01f27919.png",
    accent: "from-primary/15 via-secondary/10 to-transparent",
  },
]

const galleryImages = [
  {
    src: "/destinations/IMG-20260519-WA0168.jpg",
    alt: "Visuel destination Canada",
    className: "left-0 top-8 h-36 w-36 rotate-[-9deg] animate-[float_8s_ease-in-out_infinite]",
  },
  {
    src: "/destinations/IMG-20260519-WA0169.jpg",
    alt: "Visuel destination Luxembourg",
    className: "left-24 top-0 h-44 w-44 rotate-[7deg] animate-[drift_10s_ease-in-out_infinite]",
  },
  {
    src: "/destinations/IMG-20260519-WA0167(1).jpg",
    alt: "Visuel destination Belgique",
    className: "right-2 top-20 h-32 w-32 rotate-[12deg] animate-[float_7s_ease-in-out_infinite]",
  },
]

const reactions = [
  { label: "Avis positifs", value: "4.9/5" },
  { label: "Recommandations", value: "92%" },
  { label: "Etudiants actifs", value: "500+" },
]

export function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f9f7ef_0%,#fffdf8_38%,#fff9ee_100%)] py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(245,158,11,0.14),transparent_24%),radial-gradient(circle_at_85%_25%,rgba(22,101,52,0.12),transparent_28%),radial-gradient(circle_at_50%_100%,rgba(245,158,11,0.1),transparent_30%)]" />
        <div className="absolute left-[-4rem] top-20 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-[-3rem] h-44 w-44 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="mb-16 grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/85 px-4 py-2 text-sm font-medium text-primary shadow-sm backdrop-blur">
              <span className="animate-[float_5s_ease-in-out_infinite]">💬</span>
              Des temoignages qui inspirent
            </div>

            <h2 className="mb-4 text-balance text-3xl font-bold text-foreground md:text-4xl">
              Ce que disent nos etudiants
            </h2>
            <p className="max-w-xl text-pretty text-lg text-muted-foreground">
              Une section plus vivante avec des reactions visibles, des portraits en mouvement et une ambiance qui donne
              confiance des le premier regard.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {reactions.map((item, index) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-border/80 bg-white/85 px-4 py-3 shadow-sm backdrop-blur animate-[float_6s_ease-in-out_infinite]"
                  style={{ animationDelay: `${index * 0.8}s` }}
                >
                  <div className="text-lg font-bold text-foreground">{item.value}</div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto h-[20rem] w-full max-w-xl">
            <div className="absolute inset-0 rounded-[2rem] border border-white/60 bg-white/40 shadow-[0_24px_80px_rgba(34,50,30,0.08)] backdrop-blur-sm" />

            {galleryImages.map((image, index) => (
              <div
                key={image.src}
                className={`absolute overflow-hidden rounded-[1.75rem] border border-white/70 bg-white p-2 shadow-xl ${image.className}`}
                style={{ animationDelay: `${index * 0.6}s` }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={240}
                  height={240}
                  className="h-full w-full rounded-[1.2rem] object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            ))}

            <div className="absolute bottom-4 left-6 rounded-full border border-primary/15 bg-white/90 px-4 py-2 text-sm font-medium text-foreground shadow-lg animate-[drift_9s_ease-in-out_infinite]">
              <span className="mr-2 text-base">❤️</span>
              Accompagnement humain
            </div>
            <div className="absolute right-6 top-10 rounded-full border border-secondary/15 bg-white/90 px-4 py-2 text-sm font-medium text-foreground shadow-lg animate-[float_7s_ease-in-out_infinite]">
              <span className="mr-2 text-base">✨</span>
              Parcours motive
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="group relative overflow-hidden border-border/70 bg-white/85 shadow-[0_20px_50px_rgba(34,50,30,0.08)] backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_26px_70px_rgba(34,50,30,0.12)]"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.accent} opacity-80`} />
              <div className="absolute right-4 top-4 rounded-full border border-white/80 bg-white/90 px-3 py-1 text-sm shadow-sm animate-[float_6s_ease-in-out_infinite]">
                {testimonial.reaction}
              </div>

              <CardContent className="relative p-6">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div
                      className="relative h-16 w-16 overflow-hidden rounded-2xl border border-white/80 shadow-md transition-transform duration-500 group-hover:rotate-3 group-hover:scale-105 animate-[drift_8s_ease-in-out_infinite]"
                      style={{ animationDelay: `${index * 0.5}s` }}
                    >
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 rounded-full bg-white/80 px-3 py-1 text-amber-500 shadow-sm">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm font-semibold">5.0</span>
                  </div>
                </div>

                <Quote className="mb-4 h-8 w-8 text-primary/30" />
                <p className="mb-6 leading-7 text-muted-foreground">{testimonial.content}</p>

                <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/80 px-3 py-2 text-sm font-medium text-foreground shadow-sm">
                  <span>{testimonial.reaction}</span>
                  {testimonial.tag}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
