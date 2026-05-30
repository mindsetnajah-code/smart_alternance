import Image from "next/image"
import Link from "next/link"
import { Mail, MapPin, MessageCircle, Phone, Sparkles } from "lucide-react"

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/programme", label: "Etudier a l'etranger" },
  { href: "/instituts", label: "Instituts partenaires" },
  { href: "/inscription", label: "Inscription" },
]

const highlights = ["Bourses disponibles", "Suivi humain", "Orientation fiable"]

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#d9c27a]/20 bg-[linear-gradient(180deg,#173629_0%,#132d22_100%)] text-[#f4efe4]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(228,178,79,0.16),transparent_24%),radial-gradient(circle_at_82%_22%,rgba(255,255,255,0.08),transparent_22%),radial-gradient(circle_at_50%_100%,rgba(228,178,79,0.08),transparent_28%)]" />
        <div className="absolute -left-12 top-10 h-40 w-40 rounded-full bg-[#e4b24f]/10 blur-3xl" />
        <div className="absolute -right-10 bottom-8 h-44 w-44 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 py-12">
        <div className="mb-10 flex flex-col gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.15)] backdrop-blur md:flex-row md:items-center md:justify-between">
          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-[#e4b24f]/20 bg-[#e4b24f]/10 px-3 py-1 text-sm font-medium text-[#f4d18a]">
              <Sparkles className="h-4 w-4" />
              Smart Alternance
            </div>
            <p className="max-w-2xl text-sm leading-6 text-[#f4efe4]/78">
              Un accompagnement moderne pour transformer vos etudes en opportunites concretes.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {highlights.map((item, index) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/8 px-3 py-2 text-sm text-[#f4efe4] animate-[float_6s_ease-in-out_infinite]"
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.9fr_0.9fr]">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white p-1.5 shadow-sm">
                <div className="absolute inset-1 rounded-[0.9rem] border border-dashed border-[#e4b24f]/25 animate-[drift_10s_ease-in-out_infinite]" />
                <Image
                  src="/IMG-20260412-WA0032.jpg"
                  alt="Logo Smart Alternance"
                  width={52}
                  height={52}
                  className="relative z-[1] h-13 w-13 rounded-[0.9rem] object-cover"
                />
              </div>
              <div>
                <span className="text-xl font-bold text-[#e4b24f]">Smart Alternance</span>
                <p className="text-sm text-[#f4efe4]/70">Formation. Insertion. Excellence.</p>
              </div>
            </div>

            <p className="max-w-sm text-sm leading-6 text-[#f4efe4]/78">
              Construisez votre avenir avec un Etudier a l'etranger complet pour les eleves et etudiants, du choix de parcours
              jusqu'a l'insertion professionnelle.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#e4b24f]">Navigation</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[#f4efe4]/78 transition-colors hover:text-[#e4b24f]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#e4b24f]">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/6 px-3 py-3 text-sm text-[#f4efe4]/78">
                <Phone className="h-4 w-4 text-[#e4b24f]" />
                <a href="tel:+22786366706" className="transition-colors hover:text-[#e4b24f]">
                  +227 86366706
                </a>
              </li>
              <li className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/6 px-3 py-3 text-sm text-[#f4efe4]/78">
                <Mail className="h-4 w-4 text-[#e4b24f]" />
                <a href="mailto:smartinsert24@gmail.com" className="transition-colors hover:text-[#e4b24f]">
                  smartinsert24@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/6 px-3 py-3 text-sm text-[#f4efe4]/78">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#e4b24f]" />
                <span>Bobiel deuxieme pompe</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#e4b24f]">Contact rapide</h3>
            <div className="rounded-[1.75rem] border border-white/10 bg-white/6 p-5 shadow-sm">
              <div className="mb-4 flex gap-4">
                <a
                  href="https://wa.me/22786366706"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/8 text-[#f4efe4] transition-colors hover:border-[#e4b24f]/40 hover:bg-[#e4b24f] hover:text-[#173629]"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
              </div>
              <p className="text-sm leading-6 text-[#f4efe4]/78">
                Ecrivez-nous directement sur WhatsApp pour obtenir une reponse rapide de l'equipe.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-[#f4efe4]/58">
            © {new Date().getFullYear()} Smart Alternance. Tous droits reserves.
          </p>
        </div>
      </div>
    </footer>
  )
}
