"use client"

import { useSearchParams } from "next/navigation"
import { Suspense, useEffect, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { buildApplicationPdf } from "@/lib/application-pdf"
import { Briefcase, CheckCircle2, FileDown, GraduationCap, MessageCircle, Users } from "lucide-react"

const filieres = [
  "Informatique et Réseaux",
  "Génie Civil",
  "Gestion et Commerce",
  "Comptabilité et Finance",
  "Électronique et Électrotechnique",
  "Mécanique Automobile",
  "Santé et Sciences Médicales",
  "Architecture et BTP",
  "Marketing Digital",
  "Ressources Humaines",
]

const whatsappNumber = "22786366706"

type FormErrors = {
  nom?: string
  niveau?: string
  telephone?: string
  telephoneParent?: string
  email?: string
}

function formatLevel(level: string) {
  const labels: Record<string, string> = {
    bepc: "BEPC",
    bac: "BAC",
    libre: "Candidat libre",
    licence: "Licence",
    master: "Master",
  }

  return labels[level] ?? level
}

function InscriptionPageContent() {
  const searchParams = useSearchParams()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const [shareMode, setShareMode] = useState<"share" | "fallback">("fallback")
  const [generatedPdfUrl, setGeneratedPdfUrl] = useState("")
  const [errors, setErrors] = useState<FormErrors>({})
  const [formData, setFormData] = useState({
    nom: "",
    niveau: "",
    telephone: "",
    telephoneParent: "",
    email: "",
    filiere: "",
    institut: "",
  })

  useEffect(() => {
    const institut = searchParams.get("institut")

    if (institut) {
      setFormData((prev) => ({ ...prev, institut }))
    }
  }, [searchParams])

  useEffect(() => {
    return () => {
      if (generatedPdfUrl) {
        URL.revokeObjectURL(generatedPdfUrl)
      }
    }
  }, [generatedPdfUrl])

  const validateForm = () => {
    const nextErrors: FormErrors = {}
    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    const phoneDigits = formData.telephone.replace(/\D/g, "")
    const parentPhoneDigits = formData.telephoneParent.replace(/\D/g, "")

    if (formData.nom.trim().length < 3) {
      nextErrors.nom = "Veuillez renseigner un nom complet valide."
    }

    if (!formData.niveau) {
      nextErrors.niveau = "Veuillez sélectionner votre niveau."
    }

    if (phoneDigits.length < 8) {
      nextErrors.telephone = "Veuillez saisir un numéro de téléphone valide."
    }

    if (parentPhoneDigits.length < 8) {
      nextErrors.telephoneParent = "Veuillez saisir un numéro des parents valide."
    }

    if (!emailIsValid) {
      nextErrors.email = "Veuillez saisir une adresse email valide."
    }

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitError("")

    try {
      const selectedFiliere = formData.filiere || "Non précisée"
      const selectedInstitute = formData.institut ? ` | Institut souhaité: ${formData.institut}` : ""
      const pdfBlob = buildApplicationPdf({
        nom: formData.nom,
        niveau: formData.niveau,
        telephone: formData.telephone,
        telephoneParent: formData.telephoneParent,
        email: formData.email,
        filiere: `${selectedFiliere}${selectedInstitute}`,
      })

      const fileName = `dossier-smart-alternance-${formData.nom
        .trim()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "") || "candidat"}.pdf`

      const pdfFile = new File([pdfBlob], fileName, { type: "application/pdf" })
      const pdfUrl = URL.createObjectURL(pdfBlob)

      if (generatedPdfUrl) {
        URL.revokeObjectURL(generatedPdfUrl)
      }

      setGeneratedPdfUrl(pdfUrl)

      const whatsappText =
        `Bonjour Smart Alternance, je viens de soumettre mon dossier d'inscription.\n\n` +
        `Nom: ${formData.nom}\n` +
        `Téléphone: ${formData.telephone}\n` +
        `Téléphone des parents: ${formData.telephoneParent}\n` +
        `Email: ${formData.email}\n` +
        `Niveau: ${formatLevel(formData.niveau)}\n` +
        `Filière: ${selectedFiliere}\n` +
        `${formData.institut ? `Institut souhaité: ${formData.institut}\n` : ""}` +
        `Je vous transmets également mon PDF d'inscription.`

      const canShareFile =
        typeof navigator !== "undefined" &&
        "share" in navigator &&
        "canShare" in navigator &&
        navigator.canShare({ files: [pdfFile] })

      if (canShareFile) {
        await navigator.share({
          title: "Dossier d'inscription Smart Alternance",
          text: whatsappText,
          files: [pdfFile],
        })
        setShareMode("share")
        // Open WhatsApp as a fallback to ensure the conversation is visible
        window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)}`, "_blank", "noopener,noreferrer")
      } else {
        // Trigger a download so the user keeps a local copy
        const link = document.createElement("a")
        link.href = pdfUrl
        link.download = fileName
        link.click()

        // Try to upload the PDF to a temporary file host so we can include a direct link in WhatsApp
        try {
          const form = new FormData()
          form.append("file", pdfFile)

          const resp = await fetch("https://file.io/?expires=7d", {
            method: "POST",
            body: form,
          })

          const data = await resp.json()
          if (data && data.success && data.link) {
            const linkText = whatsappText + "\n\nTélécharger le PDF: " + data.link
            window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(linkText)}`, "_blank", "noopener,noreferrer")
            setShareMode("upload")
          } else {
            // If upload failed, open WhatsApp with the basic message and ask user to attach file manually
            window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)}`, "_blank", "noopener,noreferrer")
            setShareMode("fallback")
          }
        } catch (err) {
          window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)}`, "_blank", "noopener,noreferrer")
          setShareMode("fallback")
        }
      }

      setIsSubmitted(true)
    } catch {
      setSubmitError(
        "Impossible de préparer le PDF ou d'ouvrir WhatsApp pour le moment. Veuillez réessayer."
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setErrors((prev) => ({ ...prev, [field]: undefined }))
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-muted py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 text-balance text-4xl font-bold text-foreground md:text-5xl">
                Inscrivez-vous maintenant
              </h1>
              <p className="text-pretty text-lg text-muted-foreground">
                Rejoignez Smart Alternance et commencez votre parcours vers la réussite professionnelle.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-background py-12 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
              <div>
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="text-2xl text-foreground">Formulaire d&apos;inscription</CardTitle>
                    <CardDescription>
                      Remplissez le formulaire ci-dessous pour préparer votre dossier au format PDF et l&apos;envoyer sur WhatsApp.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {isSubmitted ? (
                      <div className="flex flex-col items-center py-8 text-center">
                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
                          <CheckCircle2 className="h-8 w-8 text-secondary" />
                        </div>
                        <h3 className="mb-2 text-xl font-semibold text-foreground">
                          Dossier prêt !
                        </h3>
                        <p className="mb-6 text-muted-foreground">
                          {shareMode === "share"
                            ? "Le PDF a été préparé et le partage vers WhatsApp a été lancé depuis votre appareil."
                            : "Le PDF a été téléchargé et WhatsApp a été ouvert avec un message prérempli. Il ne reste qu'à joindre le fichier téléchargé si votre appareil ne permet pas l'envoi automatique."}
                        </p>
                        <div className="flex flex-col gap-3 sm:flex-row">
                          {generatedPdfUrl ? (
                            <Button asChild variant="outline">
                              <a href={generatedPdfUrl} download>
                                <FileDown className="mr-2 h-4 w-4" />
                                Télécharger le PDF
                              </a>
                            </Button>
                          ) : null}
                          <Button asChild variant="outline">
                            <a
                              href={`https://wa.me/${whatsappNumber}`}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <MessageCircle className="mr-2 h-4 w-4" />
                              Ouvrir WhatsApp
                            </a>
                          </Button>
                          <Button
                            onClick={() => {
                              setIsSubmitted(false)
                              setSubmitError("")
                            }}
                            variant="outline"
                          >
                            Nouvelle inscription
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                          <Label htmlFor="nom">Nom complet *</Label>
                          <Input
                            id="nom"
                            placeholder="Entrez votre nom complet"
                            required
                            value={formData.nom}
                            onChange={(e) => handleInputChange("nom", e.target.value)}
                          />
                          {errors.nom ? (
                            <p className="text-sm text-destructive">{errors.nom}</p>
                          ) : null}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="niveau">Niveau *</Label>
                          <Select
                            required
                            value={formData.niveau}
                            onValueChange={(value) => handleInputChange("niveau", value)}
                          >
                            <SelectTrigger id="niveau">
                              <SelectValue placeholder="Sélectionnez votre niveau" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="bepc">BEPC</SelectItem>
                              <SelectItem value="bac">BAC</SelectItem>
                              <SelectItem value="libre">Candidat libre</SelectItem>
                              <SelectItem value="licence">Licence</SelectItem>
                              <SelectItem value="master">Master</SelectItem>
                            </SelectContent>
                          </Select>
                          {errors.niveau ? (
                            <p className="text-sm text-destructive">{errors.niveau}</p>
                          ) : null}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="telephone">Téléphone *</Label>
                          <Input
                            id="telephone"
                            type="tel"
                            placeholder="+227 86366706"
                            required
                            value={formData.telephone}
                            onChange={(e) => handleInputChange("telephone", e.target.value)}
                          />
                          {errors.telephone ? (
                            <p className="text-sm text-destructive">{errors.telephone}</p>
                          ) : null}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="telephoneParent">Numéro des parents *</Label>
                          <Input
                            id="telephoneParent"
                            type="tel"
                            placeholder="+227 00000000"
                            required
                            value={formData.telephoneParent}
                            onChange={(e) => handleInputChange("telephoneParent", e.target.value)}
                          />
                          {errors.telephoneParent ? (
                            <p className="text-sm text-destructive">{errors.telephoneParent}</p>
                          ) : null}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="votre@email.com"
                            required
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                          />
                          {errors.email ? (
                            <p className="text-sm text-destructive">{errors.email}</p>
                          ) : null}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="filiere">Choix de filière (optionnel)</Label>
                          <Select
                            value={formData.filiere}
                            onValueChange={(value) => handleInputChange("filiere", value)}
                          >
                            <SelectTrigger id="filiere">
                              <SelectValue placeholder="Sélectionnez une filière" />
                            </SelectTrigger>
                            <SelectContent>
                              {filieres.map((filiere) => (
                                <SelectItem key={filiere} value={filiere}>
                                  {filiere}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        {formData.institut ? (
                          <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 text-sm text-muted-foreground">
                            Institut sélectionné : <span className="font-medium text-foreground">{formData.institut}</span>
                          </div>
                        ) : null}

                        <Button
                          type="submit"
                          className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                          size="lg"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Préparation du PDF..." : "S&apos;inscrire maintenant"}
                        </Button>

                        <p className="text-center text-xs text-muted-foreground">
                          Après validation, un PDF est généré puis WhatsApp s&apos;ouvre pour l&apos;envoi au numéro +227 86366706.
                        </p>
                        {submitError ? (
                          <p className="text-center text-sm text-destructive">{submitError}</p>
                        ) : null}
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="mb-6 text-2xl font-bold text-foreground">
                    Pourquoi nous rejoindre ?
                  </h2>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                        <GraduationCap className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="mb-1 font-semibold text-foreground">Formation de qualité</h3>
                        <p className="text-sm text-muted-foreground">
                          Accédez à des instituts partenaires reconnus et bénéficiez d&apos;un suivi personnalisé.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary/10">
                        <Users className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="mb-1 font-semibold text-foreground">Bourse d&apos;étude</h3>
                        <p className="text-sm text-muted-foreground">
                          Réduction de 50% sur vos frais de scolarité pendant 3 ans.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                        <Briefcase className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="mb-1 font-semibold text-foreground">Insertion professionnelle</h3>
                        <p className="text-sm text-muted-foreground">
                          Un accompagnement complet vers l&apos;emploi avec stages et recrutement facilité.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <Card className="border-primary/20 bg-primary/5">
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary">500+</div>
                        <div className="text-sm text-muted-foreground">Étudiants inscrits</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary">30+</div>
                        <div className="text-sm text-muted-foreground">Instituts partenaires</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-secondary">50%</div>
                        <div className="text-sm text-muted-foreground">Réduction garantie</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-secondary">85%</div>
                        <div className="text-sm text-muted-foreground">Taux d&apos;insertion</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="rounded-xl border border-border bg-card p-6">
                  <h3 className="mb-4 font-semibold text-foreground">Besoin d&apos;aide ?</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Notre équipe est disponible pour répondre à toutes vos questions.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">Téléphone :</span> +227 86366706 / 91764591
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">Lieu :</span> Bobiel deuxième pompe
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">WhatsApp :</span> +227 86366706
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default function InscriptionPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <InscriptionPageContent />
    </Suspense>
  )
}
