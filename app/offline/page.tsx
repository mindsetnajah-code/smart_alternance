import Link from 'next/link'

export default function OfflinePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 py-16 text-foreground">
      <div className="max-w-xl rounded-3xl border border-border bg-card p-8 text-center shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-secondary">
          Mode hors ligne
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight">
          Cette page n&apos;est pas disponible sans connexion.
        </h1>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          L&apos;application est bien installable en PWA. Si vous perdez le
          reseau, nous affichons cette page de secours pour que l&apos;experience
          reste claire au lieu d&apos;une erreur navigateur.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Revenir a l&apos;accueil
          </Link>
        </div>
      </div>
    </main>
  )
}
