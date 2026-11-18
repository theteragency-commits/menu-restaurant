# Menu — RJ Splash Lounge

Page statique (HTML/CSS/JS, sans backend) hébergée sur GitHub Pages :
https://theteragency-commits.github.io/menu-restaurant/

## Modifier le menu

Tout le contenu est dans **`menu.js`** : plats, prix, catégories, formules,
atouts, coordonnées, WhatsApp. Modifier, commit, push : GitHub Pages
republie en 1 à 2 minutes.

## Ajouter le logo

1. Déposer le fichier dans ce dossier (ex. `logo.png`, fond transparent).
2. Dans `menu.js` : `logoImage: "logo.png"`.

## Ajouter des photos de plats

1. Créer un dossier `photos/` et y mettre les images (PNG/WebP fond
   transparent, ~600 px, < 150 Ko chacune).
2. Sur le plat dans `menu.js` : `photo: "photos/griot.webp"`.
   Sans photo, l'illustration de la catégorie est affichée.

## Liens directs

- `.../#cocktails` ouvre directement les cocktails (pratique pour un QR code au bar)
- `.../#<id-categorie>` ouvre une catégorie (ex. `#diner`, `#crepes-sucrees`)

## Tester en local

Double-cliquer sur `index.html` (pas besoin de serveur).

## Fichiers

- `index.html` — structure de la page
- `style.css` — apparence
- `app.js` — affichage, catégories, carrousel
- `illustrations.js` — illustrations SVG
- `menu.js` — le contenu
