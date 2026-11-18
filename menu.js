// =============================================================
//  CONTENU DU MENU — RJ Splash Lounge
//  C'est le SEUL fichier à modifier pour changer plats et prix.
//
//  Champs d'un plat :
//    nom, description, prix            (obligatoires)
//    sousNom   petite ligne sous le nom (ex. "Gin & Vodka Edition")
//    note      phrase d'ambiance en italique
//    badges    liste parmi : "signature", "nouveau", "fume", "vege", "populaire"
//    photo     chemin d'une image (ex. "photos/griot.webp") ; sinon
//              l'illustration de la catégorie est utilisée.
//              Idéal : PNG/WebP fond transparent, ~600 px, < 150 Ko.
//
//  Champs d'une catégorie :
//    id, nom, icone, plats
//    horaires  ex. "7 h – 11 h"
//    style     "offre" = affichée en tuiles (formules) au lieu d'une liste
//
//  Icônes de catégorie : aube, soleil, lune, toque, crepe, crepe-sucree,
//                        entree, cloche, cocktail, jus
// =============================================================

window.MENU = {
  restaurant: {
    // LOGO : dépose ton fichier dans le dossier (ex. logo.png, fond transparent,
    // ~300 px de haut) et indique son nom ici. Laisser "" = rond texte "RJ".
    logoImage: "logo.jpg",
    logo: "RJ",
    nom: "Splash Lounge",
    accroche: "Piscine · Boissons · Ambiance",
    // Coordonnées : laisser "" pour masquer
    adresse: "",
    telephone: "",
    whatsapp: "",          // format international, chiffres seulement, ex. "50912345678"
    devise: "HTG",
    slogan: "Bon manje, bon anbyans, bon moman !"
  },

  sections: [
    {
      id: "restaurant",
      nom: "Restaurant",
      titre: "Carte du Menu",
      sousTitre: "Petit-déjeuner · Déjeuner · Dîner",
      slogan: "Bon manje, bon anbyans, bon moman !",
      categories: [
        {
          id: "petit-dejeuner", nom: "Petit-déjeuner", icone: "aube", horaires: "7 h – 11 h",
          plats: [
            { nom: "Petit-déjeuner haïtien", description: "Œufs au choix, bananes pesées, pain et légumes sautés.", prix: 650 },
            { nom: "Spaghetti RJ", description: "Spaghetti créole avec saucisses ou hot-dog.", prix: 550 },
            { nom: "Spaghetti au jambon", description: "Spaghetti sauté au jambon, sauce créole maison.", prix: 650 },
            { nom: "Spaghetti au poulet", description: "Spaghetti sauté au poulet, sauce créole maison.", prix: 750 }
          ]
        },
        {
          id: "dejeuner", nom: "Déjeuner", icone: "soleil", horaires: "11 h – 16 h",
          plats: [
            { nom: "Griot Lakay", description: "Porc frit, bananes pesées, pikliz et sauce créole.", prix: 1100 },
            { nom: "Poulet créole RJ", description: "Poulet frit ou en sauce, frites ou bananes pesées et salade.", prix: 950 },
            { nom: "Poisson frit", description: "Poisson entier, frites ou bananes pesées et sauce créole.", prix: 1500 },
            { nom: "Poisson boucané RJ", description: "Poisson mariné aux épices créoles, cuit au charbon de bois, avec frites ou bananes pesées.", prix: 1350 }
          ]
        },
        {
          id: "diner", nom: "Dîner", icone: "lune", horaires: "17 h – 23 h",
          plats: [
            { nom: "Poulet croustillant RJ", description: "Morceaux de poulet marinés, panés et frits, servis avec frites ou bananes pesées, et sauce spéciale RJ.", prix: 1200 },
            { nom: "Griot Lakay", description: "Porc frit, bananes pesées, pikliz et sauce créole.", prix: 1100 },
            { nom: "Poisson boucané RJ", description: "Poisson mariné aux épices créoles, cuit au charbon de bois, avec frites ou bananes pesées.", prix: 1350 },
            { nom: "Cuisse de poulet BBQ", description: "Cuisse de poulet marinée, sauce BBQ, servie avec frites ou bananes pesées.", prix: 950 },
            { nom: "Buffalo Wings", description: "Ailes de poulet style Buffalo, piquantes et savoureuses, servies avec frites.", prix: 700 }
          ]
        },
        {
          id: "crepe-signature", nom: "La Crêpe · Spécialité de la Maison", icone: "toque", style: "vedette",
          plats: [
            { nom: "Crêpe RJ Royal", sousNom: "RJ Crêpe Signature", description: "Crêpe garnie de poulet grillé, fromage fondant et sauce crémeuse.", prix: 1200, badges: ["signature"] }
          ]
        },
        {
          id: "crepes-salees", nom: "Crêpes salées", icone: "crepe",
          plats: [
            { nom: "Crêpe jambon-fromage", description: "Jambon, fromage fondu et sauce béchamel.", prix: 750 },
            { nom: "Crêpe végétarienne", description: "Poivrons, oignons et fromage.", prix: 700, badges: ["vege"] },
            { nom: "Crêpe poulet boucané RJ", description: "Poulet boucané effiloché, fromage et sauce créole maison.", prix: 950 }
          ]
        },
        {
          id: "crepes-sucrees", nom: "Crêpes sucrées", icone: "crepe-sucree",
          plats: [
            { nom: "Crêpe chocolat", description: "Chocolat fondu et sucre glace.", prix: 500 },
            { nom: "Crêpe banane-caramel", description: "Banane et caramel maison.", prix: 550 },
            { nom: "Crêpe glacée RJ", description: "Glace vanille et chocolat.", prix: 750 }
          ]
        },
        {
          id: "entrees", nom: "Entrées / Apéritifs", icone: "entree", style: "grille",
          plats: [
            { nom: "Acras", sousNom: "6 pièces", description: "Beignets de morue aux épices créoles.", prix: 450 },
            { nom: "Marinades", sousNom: "6 pièces", description: "Boulettes de viande épicées, sauce maison.", prix: 450 }
          ]
        },
        {
          id: "plats-speciaux", nom: "Plats spéciaux", icone: "cloche",
          plats: [
            { nom: "Écrevisses créoles", description: "Écrevisses sautées aux épices de la maison, servies avec frites ou bananes pesées.", prix: 1650 },
            { nom: "Homard grillé RJ", description: "Homard mariné et grillé, servi avec frites ou bananes pesées.", prix: 2950 },
            { nom: "Boulettes RJ", description: "Boulettes de bœuf en sauce créole, servies avec frites ou bananes pesées.", prix: 950 },
            { nom: "Lambi créole RJ", description: "Lambi sauté aux épices créoles, servi avec frites ou bananes pesées.", prix: 1950 }
          ]
        },
        {
          // style "offre" : affichée en tuiles
          id: "formules", nom: "Formules spéciales", icone: "toque", style: "offre",
          plats: [
            { nom: "RJ Breakfast", description: "Crêpe sucrée + café ou jus", prix: 650 },
            { nom: "RJ Lunch", description: "Crêpe salée au poulet + jus", prix: 1250 },
            { nom: "RJ Kids", description: "Mini-crêpe chocolat + petit jus", prix: 500 }
          ]
        }
      ]
    },

    {
      id: "cocktails",
      nom: "Cocktails",
      titre: "Carte des Cocktails",
      sousTitre: "Avec ou sans alcool",
      slogan: "Un cocktail, une ambiance, un moment inoubliable !",
      categories: [
        {
          id: "avec-alcool", nom: "Cocktails avec alcool", icone: "cocktail",
          plats: [
            { nom: "Mojito Splash", description: "Rhum blanc, menthe fraîche, citron vert, sucre de canne et eau gazeuse.", note: "Rafraîchissant et léger, idéal au bord de la piscine.", prix: 650 },
            { nom: "Tropical Splash", description: "Rhum blanc, jus d'ananas, jus de citron vert et sirop de grenadine.", note: "Fruité, rafraîchissant et coloré.", prix: 750 },
            { nom: "Blue Splash", description: "Vodka, curaçao bleu, limonade et jus de citron.", note: "Un cocktail bleu électrique, parfait pour les soirées RJ Splash.", prix: 800 },
            { nom: "Piña Colada Tropicale", description: "Rhum blanc, jus d'ananas, crème de coco et glace pilée.", note: "Crémeux et tropical, une saveur de vacances.", prix: 850 },
            { nom: "RJ Sunset", description: "Tequila, jus d'orange, grenadine et glaçons.", note: "Un dégradé rouge et orange, idéal pour les photos.", prix: 900 },
            { nom: "Smoked Rhum Sour", description: "Rhum brun, jus de citron vert, sirop de sucre et fumée de bois.", note: "Un rhum sour acidulé, avec un arôme boisé et une présentation spectaculaire.", prix: 900, badges: ["fume"] },
            { nom: "Smoked Whisky Sour", description: "Whisky, jus de citron frais, sirop de sucre et fumée de bois.", note: "Un cocktail premium aux notes fumées, avec une touche citronnée.", prix: 1100, badges: ["fume"] },
            { nom: "100 Kanpé", sousNom: "Gin & Vodka Edition", description: "Gin, vodka, jus d'ananas, jus de citron vert et sirop de grenadine.", note: "Un cocktail corsé, rafraîchissant et légèrement fruité, exclusivement pour RJ Splash Lounge.", prix: 1200, badges: ["signature"] },
            { nom: "RJ Magic Bubble", description: "Gin, vodka, curaçao bleu, jus d'ananas et citron vert, surmonté d'une bulle de fumée aromatisée (réalisée avec notre Bubble Gun).", note: "Le cocktail qui fait sensation !", prix: 1250, badges: ["nouveau"] }
          ]
        },
        {
          id: "sans-alcool", nom: "Mocktails sans alcool", icone: "jus",
          plats: [
            { nom: "Virgin Mojito", description: "Menthe fraîche, citron vert, sucre de canne, eau gazeuse et glaçons.", note: "Frais, pétillant et désaltérant.", prix: 350 },
            { nom: "Sunrise Splash", description: "Jus d'orange, jus d'ananas, sirop de grenadine et glaçons.", note: "Un cocktail coloré aux saveurs tropicales.", prix: 400 },
            { nom: "Coco Paradise", description: "Jus d'ananas, crème de coco, lait évaporé et glace pilée.", note: "Doux, crémeux et tropical.", prix: 450 },
            { nom: "Passion Cooler", description: "Jus de fruit de la passion (grenadia), citron vert, sirop de sucre, eau gazeuse et glaçons.", note: "Une combinaison acidulée et rafraîchissante.", prix: 450 },
            { nom: "Blue Ocean", description: "Sirop de curaçao bleu sans alcool, limonade, jus de citron et glaçons.", note: "Un mocktail bleu éclatant, parfait pour l'ambiance piscine.", prix: 500 }
          ]
        }
      ]
    }
  ]
};
