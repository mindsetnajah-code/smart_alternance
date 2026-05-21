import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="bg-primary py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-balance text-3xl font-bold text-primary-foreground md:text-4xl">
            Prêt à construire votre avenir ?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-pretty text-lg text-primary-foreground/80">
            Rejoignez des centaines d&apos;étudiants qui ont fait confiance à Smart Alternance pour leur réussite professionnelle.
          </p>
          <Link href="/inscription">
            <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
              S&apos;inscrire maintenant
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
