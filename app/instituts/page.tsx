import type { Metadata } from "next"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { contactPhone, phoneHref } from "@/lib/institutes"
import { InstitutsClient } from "./instituts-client"

export const metadata: Metadata = {
  title: "Instituts partenaires",
  description:
    "Découvrez les instituts partenaires de Smart Alternance et les opportunités de formation disponibles au Niger.",
}

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

        <InstitutsClient />

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
                <a href={phoneHref}>Appeler le {contactPhone}</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
