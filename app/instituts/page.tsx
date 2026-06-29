import type { Metadata } from "next"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Instituts partenaires",
  description:
    "Découvrez les instituts partenaires de Smart Alternance et les opportunités de formation disponibles au Niger.",
}

const contactPhone = "+227 86366706"
const contactHref = "tel:+22786366706"

const institutes = [
  {
    name: "IFAC Agro Industrie et de Commerce",
    description:
      "Un institut orienté vers les métiers de la gestion, du commerce et des secteurs agro-industriels, avec une approche pratique tournée vers l'employabilité.",
    category: "Commerce et industrie",
    logo: "/instituts parternaires/IMG_20260509_145432_588@630655636.jpg",
    programs: [
      "Gestion commerciale",
      "Agro-industrie",
      "Administration des affaires",
    ],
  },
  {
    name: "Institut Supérieur de Santé",
    description:
      "Un établissement spécialisé dans les formations du domaine sanitaire, pensé pour préparer des profils compétents et responsables dans les métiers de la santé.",
    category: "Santé",
    logo: "/instituts parternaires/IMG_20260509_145920_804@-2112894977.jpg",
    programs: [
      "Sciences infirmières",
      "Santé communautaire",
      "Assistance médico-sanitaire",
    ],
  },
  {
    name: "École Supérieure de Management",
    description:
      "Une école dédiée à la formation en management et en pilotage d'activités, idéale pour les étudiants qui visent les fonctions d'encadrement et de gestion.",
    category: "Management",
    logo: "/instituts parternaires/IMG_20260510_135009_851@272532290.jpg",
    programs: [
      "Management",
      "Comptabilité et finance",
      "Gestion des organisations",
    ],
  },
  {
    name: "ESPA",
    description:
      "Un institut moderne qui met l'accent sur la réussite académique, la professionnalisation et l'accompagnement des apprenants vers des débouchés concrets.",
    category: "Professionnalisation",
    logo: "/instituts parternaires/IMG_20260509_151121_892@1311408274.jpg",
    programs: [
      "Administration",
      "Formation professionnelle",
      "Accompagnement à l'insertion",
    ],
  },
  {
    name: "SUP-SANTÉ",
    description:
      "Une école supérieure privée orientée vers les formations sanitaires, avec une approche axée sur les compétences pratiques et le service à la communauté.",
    category: "Santé",
    logo: "/instituts parternaires/IMG_20260510_143500_061@-68103080.jpg",
    programs: [
      "Sciences de la santé",
      "Pratique clinique",
      "Formation paramédicale",
    ],
  },
  {
    name: "SUP'MANAGEMENT Niger",
    description:
      "Un établissement tourné vers la gestion, le leadership et la préparation des étudiants aux métiers du management dans un environnement moderne.",
    category: "Management",
    logo: "/instituts parternaires/IMG_20260510_143540_606@8740389.jpg",
    programs: [
      "Management",
      "Gestion d'entreprise",
      "Leadership organisationnel",
    ],
  },
  {
    name: "GEGA",
    description:
      "La Grande École Privée de Gestion et d'Administration propose des parcours pensés pour former des profils capables d'évoluer dans l'administration et la gestion.",
    category: "Gestion et administration",
    logo: "/instituts parternaires/IMG_20260510_143613_531@1162666915.jpg",
    programs: [
      "Administration",
      "Gestion",
      "Organisation d'entreprise",
    ],
  },
  {
    name: "EPI Niger Business School",
    description:
      "Une business school qui met en avant l'innovation, l'ingénierie et l'ouverture vers les nouveaux métiers de l'économie et de l'entreprise.",
    category: "Business et ingénierie",
    logo: "/instituts parternaires/IMG_20260510_143638_704@2014192654.jpg",
    programs: [
      "Business school",
      "Ingénierie appliquée",
      "Entrepreneuriat",
    ],
  },
  {
    name: "EPN",
    description:
      "L'École Polytechnique de Niamey forme des profils techniques et polyvalents avec une approche orientée vers l'innovation, la pratique et l'employabilité.",
    category: "Polytechnique",
    logo: "/instituts parternaires/IMG_20260602_185851_172@1538726220.jpg",
    programs: [
      "Ingénierie",
      "Formation technique",
      "Innovation appliquée",
    ],
  },
  {
    name: "ESPIM",
    description:
      "L'École Supérieure Privée d'Ingénierie et de Management associe les compétences techniques et managériales pour préparer des profils complets.",
    category: "Ingénierie et management",
    logo: "/instituts parternaires/cropped-logo.png",
    programs: [
      "Ingénierie",
      "Management",
      "Leadership appliqué",
    ],
  },
  {
    name: "IPAGES",
    description:
      "Un institut orienté vers les sciences agro-pastorales et le développement rural, avec une formation pensée pour le terrain et l'employabilité.",
    category: "Agriculture et développement rural",
    logo: "/instituts parternaires/file_00000000fe1871f494babeb5eafb5a6f.png",
    programs: [
      "Agriculture",
      "Élevage",
      "Environnement",
      "Génie rural",
      "Socio-économie",
    ],
  },
  {
    name: "ISSSPT",
    description:
      "Un institut spécialisé dans les sciences de la santé et les pratiques de soins, avec une approche orientée vers la compétence et le terrain.",
    category: "Santé et soins",
    logo: "/instituts parternaires/file_00000000426871f4b8b8da59e3463344.png",
    programs: [
      "Sciences de la santé",
      "Soins pratiques",
      "Formation sanitaire",
    ],
  },
  {
    name: "Profutur",
    description:
      "Un institut tourné vers la professionnalisation et les parcours d'avenir, avec une approche orientée vers la réussite et l'insertion.",
    category: "Formation et insertion",
    logo: "/instituts parternaires/file_000000006ff071f4b107ff1d69b94f3b.png",
    programs: [
      "Formation professionnelle",
      "Insertion",
      "Accompagnement au projet",
    ],
  },
  {
    name: "I.H.E.S.P",
    description:
      "L'Institut des Hautes Études en Santé Publique forme des apprenants aux enjeux de santé publique, de prévention et de gestion des services de santé.",
    category: "Santé publique",
    logo: "/instituts parternaires/IMG_20260510_143702_627@-2060868116.jpg",
    programs: [
      "Santé publique",
      "Prévention",
      "Gestion sanitaire",
    ],
  },
  {
    name: "ECCAM",
    description:
      "Une école dédiée aux domaines de la comptabilité, de la communication, de l'administration et du management, avec une orientation professionnelle claire.",
    category: "Administration et management",
    logo: "/instituts parternaires/IMG_20260510_143718_835@1584582960.jpg",
    programs: [
      "Comptabilité",
      "Communication",
      "Administration et management",
    ],
  },
  {
    name: "HETEC",
    description:
      "Le groupe HETEC met l'accent sur les hautes études technologiques et commerciales pour accompagner les étudiants vers des carrières techniques et managériales.",
    category: "Technologie et commerce",
    logo: "/instituts parternaires/IMG_20260510_143742_363@-1103643363.jpg",
    programs: [
      "Études technologiques",
      "Commerce",
      "Formation d'ingénieurs",
    ],
  },
  {
    name: "Institut Africain de Santé Privé (I.A.S.P)",
    description:
      "Un institut spécialisé dans les formations en santé, avec une orientation pratique pour préparer des professionnels capables d'intervenir efficacement sur le terrain.",
    category: "Santé privée",
    logo: "/instituts parternaires/file_000000005330720ab0bc2b79df8a6509.png",
    programs: [
      "Soins infirmiers",
      "Formation médico-sanitaire",
      "Pratique hospitalière",
    ],
  },
  {
    name: "ISESS",
    description:
      "Un établissement tourné vers l'enseignement supérieur en santé, qui accompagne les apprenants dans la maîtrise des fondamentaux théoriques et des compétences professionnelles.",
    category: "Sciences de la santé",
    logo: "/instituts parternaires/file_000000008d1c71f494e3b3c86c79e838.png",
    programs: [
      "Formation sanitaire",
      "Santé communautaire",
      "Accompagnement académique",
    ],
  },
  {
    name: "Université Moderne des Sciences de la Santé (UM2S)",
    description:
      "Une université dédiée aux sciences de la santé, pensée pour former des profils modernes, rigoureux et engagés dans les métiers du soin et de la prévention.",
    category: "Université de santé",
    logo: "/instituts parternaires/file_00000000bae471f4ae7f2694ff98ac6e.png",
    programs: [
      "Sciences de la santé",
      "Prévention et santé publique",
      "Parcours médico-techniques",
    ],
  },
  {
    name: "INSA-IGP",
    description:
      "Un institut qui met en avant la formation appliquée et la professionnalisation dans des filières techniques et de gestion adaptées aux besoins actuels du marché.",
    category: "Technique et gestion",
    logo: "/instituts parternaires/file_00000000db9871f489f07c9b059b2398.png",
    programs: [
      "Gestion appliquée",
      "Filières techniques",
      "Orientation professionnelle",
    ],
  },
  {
    name: "Institut Privé d'Excellence en Management et en Comptabilité (I.P.E.M)",
    description:
      "Un institut privé axé sur le management et la comptabilité, avec une approche concrète pour développer des compétences utiles en entreprise et en administration.",
    category: "Management et comptabilité",
    logo: "/instituts parternaires/IMG-20260511-WA0014.jpg",
    programs: [
      "Management",
      "Comptabilité",
      "Gestion d'entreprise",
    ],
  },
  {
    name: "Institut Privé des Hautes Études de la Santé (IPHES)",
    description:
      "Un institut spécialisé dans les hautes études de la santé, orienté vers une formation sérieuse, professionnalisante et adaptée aux réalités du secteur médico-sanitaire.",
    category: "Hautes études de la santé",
    logo: "/instituts parternaires/file_0000000016a47243a9f77c1c8edfc17d.png",
    programs: [
      "Sciences infirmières",
      "Formation médico-sanitaire",
      "Santé et accompagnement clinique",
    ],
  },
  {
    name: "Hautes Études Comptables et Financières (H.E.C.F)",
    description:
      "Un institut spécialisé dans la comptabilité, la finance et la gestion, formant des professionnels capables de maîtriser les techniques comptables, fiscales et financières pour accompagner les entreprises et les administrations.",
    category: "Comptabilité et finance",
    logo: "/instituts parternaires/file_00000000cc5071fd946a049e1057fbf0.png",
    programs: [
      "Comptabilité générale",
      "Finance d&apos;entreprise",
      "Audit et contrôle de gestion",
      "Fiscalité",
      "Gestion financière",
    ],
  },
  {
    name: "Institut de formation en science de la santé (IFSS)",
    description:
      "Un institut dédié aux formations en sciences de la santé, préparant des professionnels qualifiés pour répondre aux besoins des secteurs sanitaire et médical à travers des parcours pratiques et théoriques.",
    category: "Sciences de la santé",
    logo: "/instituts parternaires/file_00000000fbf471f4a0997c7355b5fb3b.png",
    programs: [
      "Sciences infirmières",
      "Santé communautaire",
      "Prévention santé",
      "Biologie médicale",
      "Accompagnement sanitaire",
    ],
  },
  {
    name: "Institut Privé des Agents de Santé",
    description:
      "Un institut privé spécialisé dans les formations sanitaires et paramédicales, formant des agents de santé compétents pour travailler sur le terrain et accompagner les populations.",
    category: "Santé et paramédical",
    logo: "/instituts parternaires/file_0000000092a471fdba27a136b1275cf8.png",
    programs: [
      "Formation sanitaire",
      "Soins infirmiers",
      "Santé communautaire",
      "Accompagnement paramédical",
      "Prévention et hygiène",
    ],
  },
  {
    name: "IRIMAG",
    description:
      "L'Institut Régional d'Informatique, de Marketing, d'Assurance et de Gestion propose des parcours professionnalisants du BEP au Master Pro.",
    category: "Informatique et gestion",
    logo: "/instituts parternaires/file_00000000cf90722f89d8577262674c4a.png",
    programs: [
      "Informatique",
      "Marketing",
      "Assurance",
      "Gestion",
      "Management professionnel",
    ],
  },
]

export default function InstitutsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-muted py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-balance text-4xl font-bold text-foreground md:text-5xl">
                Nos Instituts Partenaires
              </h1>
              <p className="text-pretty text-lg text-muted-foreground">
                Découvrez notre réseau d&apos;établissements partenaires et trouvez la formation qui
                correspond à votre projet d&apos;études et à votre avenir professionnel.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-background py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
              {institutes.map((institute) => (
                <Card
                  key={institute.name}
                  className="group overflow-hidden border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="border-b border-border bg-white px-6 py-6">
                    <div className="relative mx-auto flex h-48 w-full items-center justify-center overflow-hidden rounded-2xl bg-[linear-gradient(180deg,#fffdf8_0%,#f6f0df_100%)] p-5 sm:h-52 xl:h-56">
                      <Image
                        src={institute.logo}
                        alt={`Logo de ${institute.name}`}
                        fill
                        className="object-contain p-5"
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                      />
                    </div>
                  </div>

                  <CardHeader className="pb-4">
                    <div className="mb-3">
                      <span className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary">
                        {institute.category}
                      </span>
                    </div>
                    <CardTitle className="text-xl text-foreground">{institute.name}</CardTitle>
                    <CardDescription className="text-sm leading-6 text-muted-foreground">
                      {institute.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="mb-6">
                      <p className="mb-2 text-sm font-medium text-foreground">Domaines mis en avant :</p>
                      <ul className="space-y-2">
                        {institute.programs.map((program) => (
                          <li key={program} className="text-sm text-muted-foreground">
                            • {program}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <a href={contactHref}>
                        <Phone className="mr-2 h-4 w-4" />
                        Appeler pour s&apos;inscrire
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-secondary py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-balance text-3xl font-bold text-secondary-foreground md:text-4xl">
                Besoin d&apos;aide pour choisir votre institut ?
              </h2>
              <p className="mb-8 text-pretty text-secondary-foreground/80">
                Notre équipe vous accompagne pour identifier la meilleure option selon votre profil,
                votre projet et la formation recherchée.
              </p>
              <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90">
                <a href={contactHref}>Appeler le {contactPhone}</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
