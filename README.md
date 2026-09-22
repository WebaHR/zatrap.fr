# Zatrap' — site web

Projet Next.js 16 (App Router) prêt à ouvrir dans VS Code.

## Structure

- `app/layout.js` — layout racine, polices (Anton pour les titres, Work Sans pour le texte)
- `app/page.js` — assemble les deux sections de la page d'accueil
- `components/Hero.js` — section 1 : photo carrée centrée, pivotée à 25° vers la droite, avec le `h1` "Zatrap'" à droite
- `components/TwoColumns.js` — section 2 : deux colonnes identiques (texte à gauche / photo + zone vidéo à droite)
- vidéo Vimeo intégrée directement dans `components/TwoColumns.js` (colonne de droite, sous la photo)

## Installation

```bash
npm install
npm run dev
```

Le site est ensuite disponible sur http://localhost:3000

## Remplacer les photos

1. Place tes propres images dans `public/images/` (ex. `hero.jpg`, `side.jpg`).
2. Dans `components/Hero.js`, remplace :
   ```js
   import heroPhoto from "@/public/images/hero-photo.svg";
   ```
   par :
   ```js
   import heroPhoto from "@/public/images/hero.jpg";
   ```
3. Fais la même chose dans `components/TwoColumns.js` pour `sidePhoto`.

## Changer la vidéo

La vidéo (colonne de droite, section 2) est un embed Vimeo dans `components/TwoColumns.js`. Pour la remplacer, change l'ID dans l'URL `src` de l'iframe (`https://player.vimeo.com/video/<ID>`) par l'ID de la nouvelle vidéo Vimeo.

## Build de production

```bash
npm run build
npm start
```
