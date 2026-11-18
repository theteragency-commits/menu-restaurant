// =============================================================
//  CONTENU DU MENU — c'est le SEUL fichier à modifier
//  pour changer le nom, les plats, les prix.
//  (Un fichier .js plutôt que .json : la page marche aussi
//   en double-cliquant sur index.html, sans serveur.)
// =============================================================

window.MENU = {
  restaurant: {
    nom: "Chez Exemple",
    slogan: "Cuisine haïtienne maison, servie chaude",
    adresse: "Rue Exemple #12, Pétion-Ville",
    telephone: "+509 0000-0000",
    // Numéro WhatsApp au format international, chiffres seulement (laisser "" pour masquer le bouton)
    whatsapp: "50900000000",
    horaires: "Lun – Sam : 10h – 21h",
    devise: "HTG"
  },

  categories: [
    {
      id: "plats",
      nom: "Plats principaux",
      plats: [
        { nom: "Griot", description: "Porc frit mariné, pikliz, bananes pesées, riz collé", prix: 750, populaire: true },
        { nom: "Poulet en sauce", description: "Poulet créole mijoté, riz blanc et sauce pois noirs", prix: 650 },
        { nom: "Tassot cabrit", description: "Cabri frit, bananes pesées, pikliz", prix: 900 },
        { nom: "Poisson gros sel", description: "Poisson entier, sauce citron-piment, riz ou banane", prix: 1100 },
        { nom: "Légume", description: "Légumes mijotés au bœuf, riz blanc", prix: 600, vegetarien: false }
      ]
    },
    {
      id: "accompagnements",
      nom: "Accompagnements",
      plats: [
        { nom: "Bananes pesées", description: "Portion de 6 morceaux", prix: 200, vegetarien: true },
        { nom: "Riz collé", description: "Riz aux pois rouges", prix: 200, vegetarien: true },
        { nom: "Pikliz maison", description: "Chou, carottes, piment bouc", prix: 100, vegetarien: true }
      ]
    },
    {
      id: "boissons",
      nom: "Boissons",
      plats: [
        { nom: "Jus de grenadia", description: "Fruit de la passion, pressé du jour", prix: 175, vegetarien: true, populaire: true },
        { nom: "Jus de corossol", description: "Au lait", prix: 200, vegetarien: true },
        { nom: "Cola", description: "Canette 33 cl", prix: 100, vegetarien: true },
        { nom: "Eau", description: "Bouteille 50 cl", prix: 50, vegetarien: true }
      ]
    },
    {
      id: "desserts",
      nom: "Desserts",
      plats: [
        { nom: "Pain patate", description: "Patate douce, coco, épices", prix: 250, vegetarien: true },
        { nom: "Blanc-manger", description: "Coco et lait concentré", prix: 225, vegetarien: true }
      ]
    }
  ]
};
