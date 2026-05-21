# Smart Alternance

Site vitrine construit avec `Next.js 16`, `React 19`, `TypeScript`, `Tailwind CSS v4` et des composants `shadcn/ui`.

## Démarrage

```bash
npm install
npm run dev
```

Application disponible ensuite sur `http://localhost:3000`.

## Scripts utiles

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run lint:fix
npm run typecheck
```

## Structure du projet

```text
app/                 Routes App Router et layout global
components/          Composants métier et UI
components/sections/ Sections de la page d'accueil
components/ui/       Bibliothèque de composants réutilisables
hooks/               Hooks partagés
lib/                 Utilitaires communs
public/              Assets statiques
```

## Pages principales

- `/` : page d'accueil
- `/inscription` : formulaire d'inscription
- `/instituts` : liste des instituts partenaires

## Notes de maintenance

- Les styles globaux actifs sont dans `app/globals.css`.
- Les hooks partagés de référence sont dans `hooks/`.
- Le linting utilise `eslint.config.mjs`, adapté à `Next.js 16`.
- Le build ne masque plus les erreurs TypeScript.
