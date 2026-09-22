# Zatrap' — site web

Projet Next.js 16 (App Router) prêt à ouvrir dans VS Code.

## Structure

- `app/layout.js` — layout racine, polices (Anton pour les titres, Work Sans pour le texte)
- `app/page.js` — assemble les deux sections de la page d'accueil
- `components/Hero.js` — section 1 : photo carrée centrée, pivotée à 25° vers la droite, avec le `h1` "Zatrap'" à droite
- `components/TwoColumns.js` — section 2 : deux colonnes identiques (texte à gauche / photo + zone vidéo à droite)
- `components/VideoDropzone.js` — zone interactive pour glisser-déposer ou choisir une vidéo (aperçu en direct)
- `public/images/hero-photo.svg` et `public/images/side-photo.svg` — visuels de remplacement, à remplacer par les vraies photos (voir ci-dessous)

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

## Ajouter une vraie vidéo par défaut

La zone vidéo (colonne de droite, section 2) permet à l'utilisateur du site de glisser-déposer un fichier vidéo, qui s'affiche alors en aperçu avec les contrôles de lecture. Pour proposer une vidéo par défaut au chargement de la page (plutôt qu'un import manuel), ouvre `components/VideoDropzone.js` et adapte le composant pour lire un fichier placé dans `public/videos/`, par exemple avec une balise `<video src="/videos/ma-video.mp4" controls />`.

## Build de production

```bash
npm run build
npm start
```
