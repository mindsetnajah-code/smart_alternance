import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Qui peut s'inscrire à Smart Alternance ?",
    answer:
      "Le programme est ouvert aux élèves titulaires du BEPC, du BAC, ainsi qu'aux candidats libres souhaitant poursuivre leurs études dans des instituts professionnels, techniques ou d'ingénierie.",
  },
  {
    question: "Comment fonctionne la bourse d'étude ?",
    answer:
      "Les étudiants sélectionnés bénéficient d'une réduction de 50% sur leurs frais de scolarité pendant 3 ans. La bourse est étudiée selon le dossier de candidature.",
  },
  {
    question: "Quelles sont les formations complémentaires proposées ?",
    answer:
      "Nous proposons des formations en informatique avancée, design, anglais, art oratoire, développement personnel et leadership. Les candidats reçoivent également une SMART CARD pour accéder aux activités prévues.",
  },
  {
    question: "Comment se déroule l'insertion professionnelle ?",
    answer:
      "Notre programme d'insertion comprend des stages académiques, des stages d'immersion en entreprise, des stages post-diplôme et un accompagnement personnalisé vers le recrutement grâce à notre réseau de partenaires.",
  },
  {
    question: "Quels sont les instituts partenaires ?",
    answer:
      "Nous collaborons avec plus de 30 instituts partenaires de qualité, couvrant les domaines professionnels, techniques et d'ingénierie. Consultez notre page dédiée pour découvrir la liste complète.",
  },
]

export function FAQSection() {
  return (
    <section className="bg-background py-20 lg:py-28 [content-visibility:auto] [contain-intrinsic-size:1px_700px]">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold text-foreground md:text-4xl">
            Questions fréquentes
          </h2>
          <p className="text-pretty text-muted-foreground">
            Trouvez les réponses à vos questions sur notre programme
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border">
                <AccordionTrigger className="text-left text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
