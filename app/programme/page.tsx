import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  Check,
  Clock3,
  Globe2,
  GraduationCap,
  Home,
  MapPin,
  Wallet,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Etudier a l'etranger",
  description:
    "Découvrez Etudier a l'etranger Smart Alternance, les destinations d'études disponibles et l'accompagnement complet proposé aux étudiants.",
}

const contactPhone = "+227 86366706"
const contactHref = "tel:+22786366706"

const pillars = [
  {
    icon: Wallet,
    title: "Plan économique",
    description: "Un accès facilité à des études de qualité avec un budget mieux maîtrisé.",
    features: [
      "Orientation vers des formations adaptées à votre profil",
      "Réduction pouvant aller jusqu'à 50% selon Etudier a l'etranger",
      "Suivi personnalisé avant et après l'inscription",
      "Conseils sur le choix de la filière et du pays",
    ],
    tone: "primary",
  },
  {
    icon: BookOpen,
    title: "Formation complémentaire",
    description: "Des compétences utiles pour réussir vos études et préparer votre avenir.",
    features: [
      "Renforcement en informatique et outils numériques",
      "Accompagnement en anglais et communication",
      "Développement personnel et posture professionnelle",
      "Préparation à l'intégration académique à l'étranger",
    ],
    tone: "secondary",
  },
  {
    icon: Briefcase,
    title: "Insertion professionnelle",
    description: "Un accompagnement orienté vers l'expérience, l'employabilité et l'autonomie.",
    features: [
      "Préparation au monde professionnel",
      "Mise en relation avec des opportunités selon le parcours",
      "Suivi du projet d'études jusqu'à l'installation",
      "Appui à l'intégration dans le pays d'accueil",
    ],
    tone: "primary",
  },
]

const destinationImages: Record<string, string> = {
  Canada: "/destinations/IMG-20260519-WA0168.jpg",
  Luxembourg: "/destinations/IMG-20260519-WA0169.jpg",
  Belgique: "/destinations/IMG-20260519-WA0167(1).jpg",
  Chine: "/destinations/IMG-20260508-WA0152.jpg",
  Turquie: "/destinations/IMG-20260508-WA0153.jpg",
  Espagne: "/destinations/file_00000000ace871f8ab33efb567eae266.png",
}

const destinations = [
  {
    country: "Canada",
    flag: "🇨🇦",
    visa: "Permis d'études",
    formula: "Accompagnement complet",
    delay: "4 à 6 mois",
    partners: "Univ. Regina, Manitoba, Saskatchewan…",
    services: ["Admission universitaire", "Permis d'études", "Aide à l'installation"],
    image: destinationImages.Canada,
    highlight: true,
  },
  {
    country: "Turquie",
    flag: "🇹🇷",
    visa: "Visa étudiant",
    formula: "Accompagnement complet",
    delay: "3 à 5 mois",
    partners: "Istanbul Univ., Ankara Univ., Bogazici…",
    services: ["Admission", "Visa étudiant", "Logement", "Intégration"],
    image: destinationImages.Turquie,
  },
  {
    country: "Luxembourg",
    flag: "🇱🇺",
    visa: "Visa Schengen",
    formula: "Accompagnement complet",
    delay: "3 à 5 mois",
    partners: "Univ. du Luxembourg, LSBU…",
    services: ["Admission", "Visa Schengen", "Logement", "Ouverture de compte"],
    image: destinationImages.Luxembourg,
  },
  {
    country: "Belgique",
    flag: "🇧🇪",
    visa: "Visa Type D — Long séjour",
    formula: "Accompagnement complet",
    delay: "3 à 5 mois",
    partners: "ULB, KULeuven, UCLouvain, VUB…",
    services: ["Admission", "Visa long séjour", "CPAS", "Logement étudiant"],
    image: destinationImages.Belgique,
  },
  {
    country: "Chine",
    flag: "🇨🇳",
    visa: "Visa étudiant X1 / X2",
    formula: "2 options disponibles",
    delay: "3 à 6 mois",
    partners: "Fudan, Tongji, BFSU, Harbin IT…",
    services: ["Admission", "Visa X1", "HSK", "Logement campus", "Intégration"],
    options: "Sans bourse (frais propres) ou avec bourse CSC / Gouvernement",
    image: destinationImages.Chine,
  },
  {
    country: "Espagne",
    flag: "🇪🇸",
    visa: "Visa étudiant national",
    formula: "Accompagnement complet",
    delay: "3 à 5 mois",
    partners: "Univ. Barcelone, Madrid, Valence…",
    services: ["Admission", "Visa étudiant", "NIE", "Logement", "Intégration"],
    image: destinationImages.Espagne,
  },
]

export default function ProgrammePage() {
  const featuredDestinations = destinations.filter((destination) => destination.image)
  const standardDestinations = destinations.filter((destination) => !destination.image)

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-[linear-gradient(135deg,#123727_0%,#1c4d37_58%,#e4b24f_160%)] py-16 text-white lg:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(228,178,79,0.18),transparent_28%)]" />
          <div className="container relative mx-auto px-4">
            <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <span className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/90">
                  Etudier a l'etranger Smart Alternance
                </span>
                <h1 className="max-w-3xl text-balance text-4xl font-bold md:text-5xl">
                  Un accompagnement structuré pour étudier au Niger ou à l'international
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
                  Nous vous accompagnons de l'orientation à l'admission, puis jusqu'aux démarches
                  administratives, au logement et à l'installation dans votre pays d'études.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button asChild size="lg" className="bg-white text-secondary hover:bg-white/92">
                    <a href={contactHref}>Appeler le {contactPhone}</a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-white/30 bg-transparent text-white hover:bg-white hover:text-secondary"
                  >
                    <Link href="/inscription">Commencer mon projet</Link>
                  </Button>
                </div>
              </div>

              <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-3 shadow-2xl backdrop-blur">
                <div className="relative h-[26rem] overflow-hidden rounded-[1.4rem] bg-white p-3 sm:h-[32rem] lg:h-[36rem]">
                  <Image
                    src={destinationImages.Canada}
                    alt="Visuel Smart Alternance d'Etudier a l'etranger et des destinations"
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    loading="eager"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
                Etudier a l'etranger en 3 piliers
              </h2>
              <p className="mt-4 text-pretty text-muted-foreground">
                Un cadre simple, concret et rassurant pour vous aider à avancer avec méthode.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {pillars.map((pillar) => (
                <Card key={pillar.title} className="overflow-hidden border-border">
                  <CardHeader>
                    <div
                      className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl ${
                        pillar.tone === "primary" ? "bg-primary/10" : "bg-secondary/10"
                      }`}
                    >
                      <pillar.icon
                        className={`h-7 w-7 ${
                          pillar.tone === "primary" ? "text-primary" : "text-secondary"
                        }`}
                      />
                    </div>
                    <CardTitle>{pillar.title}</CardTitle>
                    <CardDescription className="leading-7">{pillar.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {pillar.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                            <Check className="h-3 w-3 text-primary" />
                          </span>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-muted py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
                Destinations disponibles
              </h2>
              <p className="mt-4 text-pretty text-muted-foreground">
                Des parcours accompagnés de A à Z pour candidater, voyager et vous installer dans
                de bonnes conditions.
              </p>
            </div>

            <div className="grid gap-8 xl:grid-cols-3">
              {featuredDestinations.map((destination) => (
                <Card key={destination.country} className="overflow-hidden border-border bg-card">
                  <div className="relative h-[24rem] bg-white p-3 sm:h-[28rem] xl:h-[30rem]">
                    <Image
                      src={destination.image!}
                      alt={`Étudier en ${destination.country}`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1280px) 100vw, 33vw"
                      loading={destination.highlight ? "eager" : "lazy"}
                      priority={destination.highlight}
                    />
                  </div>
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <CardTitle className="text-2xl">
                          {destination.flag} {destination.country}
                        </CardTitle>
                        <CardDescription className="mt-2 text-sm font-medium text-secondary">
                          {destination.visa}
                        </CardDescription>
                      </div>
                      {destination.highlight ? (
                        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                          Très demandé
                        </span>
                      ) : null}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    <div className="grid gap-3 text-sm text-muted-foreground">
                      <div className="flex items-start gap-3">
                        <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>
                          <strong className="text-foreground">Formule :</strong> {destination.formula}
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>
                          <strong className="text-foreground">Délai :</strong> {destination.delay}
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>
                          <strong className="text-foreground">Établissements :</strong>{" "}
                          {destination.partners}
                        </span>
                      </div>
                    </div>

                    <div>
                      <p className="mb-3 text-sm font-semibold text-foreground">Services inclus</p>
                      <ul className="grid gap-2">
                        {destination.services.map((service) => (
                          <li key={service} className="flex items-start gap-3 text-sm text-muted-foreground">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                            <span>{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {destination.options ? (
                      <div className="rounded-2xl border border-primary/15 bg-primary/5 p-4 text-sm text-muted-foreground">
                        <strong className="text-foreground">Options :</strong> {destination.options}
                      </div>
                    ) : null}
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {standardDestinations.map((destination) => (
                <Card key={destination.country} className="border-border bg-background">
                  <CardHeader>
                    <CardTitle className="text-xl">
                      {destination.flag} {destination.country}
                    </CardTitle>
                    <CardDescription className="text-sm font-medium text-secondary">
                      {destination.visa}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <div className="flex items-start gap-3">
                        <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>
                          <strong className="text-foreground">Formule :</strong> {destination.formula}
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>
                          <strong className="text-foreground">Délai :</strong> {destination.delay}
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>
                          <strong className="text-foreground">Établissements :</strong>{" "}
                          {destination.partners}
                        </span>
                      </div>
                    </div>

                    <div>
                      <p className="mb-3 text-sm font-semibold text-foreground">Services inclus</p>
                      <ul className="grid gap-2">
                        {destination.services.map((service) => (
                          <li key={service} className="flex items-start gap-3 text-sm text-muted-foreground">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                            <span>{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 rounded-[2rem] border border-border bg-[linear-gradient(135deg,#f7f0dc_0%,#fffdf8_45%,#eef6f2_100%)] p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-12">
              <div>
                <span className="inline-flex rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground">
                  Accompagnement personnalisé
                </span>
                <h2 className="mt-5 text-balance text-3xl font-bold text-foreground md:text-4xl">
                  Prêt à démarrer votre projet d'études ?
                </h2>
                <p className="mt-4 max-w-xl text-pretty text-muted-foreground">
                  Contactez-nous pour un accompagnement personnalisé de A à Z, depuis la définition
                  de votre projet jusqu'à votre installation dans votre pays d'accueil.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-border bg-white p-5">
                  <MapPin className="h-5 w-5 text-primary" />
                  <p className="mt-3 text-sm font-semibold text-foreground">Destination ciblée</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Nous vous aidons à choisir le pays le plus adapté à votre projet.
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-white p-5">
                  <Home className="h-5 w-5 text-primary" />
                  <p className="mt-3 text-sm font-semibold text-foreground">Installation facilitée</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Logement, intégration et suivi pratique selon la destination choisie.
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-white p-5">
                  <Globe2 className="h-5 w-5 text-primary" />
                  <p className="mt-3 text-sm font-semibold text-foreground">Démarches simplifiées</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Admission, visa et accompagnement administratif centralisés.
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-white p-5">
                  <ArrowRight className="h-5 w-5 text-primary" />
                  <p className="mt-3 text-sm font-semibold text-foreground">Passage à l'action</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Une équipe disponible pour transformer votre projet en plan concret.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <a href={contactHref}>Appeler maintenant</a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/inscription">Demander un accompagnement</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}


