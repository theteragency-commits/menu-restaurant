// Affichage du menu à partir de window.MENU (menu.js) et window.ILLUS (illustrations.js).
// Les textes du menu passent TOUJOURS par textContent (jamais innerHTML) :
// un texte saisi dans menu.js ne peut pas injecter de HTML.
// Seules les illustrations SVG (constantes du code) passent par innerHTML.

(function () {
  const M = window.MENU;
  const r = M.restaurant;
  const fmt = new Intl.NumberFormat("fr-FR");
  const $ = (id) => document.getElementById(id);
  const prix = (p) => `${fmt.format(p)} ${r.devise}`;

  const BADGES = {
    signature: ["Signature", "b-signature"],
    nouveau: ["Nouveau", "b-nouveau"],
    fume: ["Fumé", "b-fume"],
    vege: ["Végé", "b-vege"],
    populaire: ["Populaire", "b-populaire"]
  };

  function el(tag, cls, text) {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  function illu(nom, cls) {
    const d = el("div", cls || "illu");
    d.innerHTML = window.ILLUS[nom] || window.ILLUS.soleil;
    return d;
  }
  function visuel(plat, cat, cls) {
    if (plat.photo) {
      const img = el("img", cls || "illu");
      img.src = plat.photo;
      img.alt = plat.nom;
      img.loading = "lazy";
      return img;
    }
    return illu(cat.icone, cls);
  }

  // Toutes les catégories, avec leur section (Restaurant / Cocktails)
  const toutes = [];
  M.sections.forEach((s) => s.categories.forEach((c) => toutes.push({ ...c, section: s })));
  const grilleCats = toutes.filter((c) => c.style !== "offre");
  const offres = toutes.filter((c) => c.style === "offre");

  // ---------- En-tête ----------
  if (r.logoImage) {
    const img = el("img", "logo-img");
    img.src = r.logoImage;
    img.alt = `${r.logo} ${r.nom}`;
    $("logo-rj").replaceWith(img);
  } else {
    $("logo-rj").textContent = r.logo;
  }
  $("logo-nom").textContent = r.nom;
  $("mot-fond").textContent = r.motFond || r.logo;
  $("hero-illu").innerHTML = window.ILLUS_HERO;
  $("titre-page").textContent = `${r.logo} ${r.nom} — Menu`;
  $("accroche").textContent = r.accroche || "";

  const wa = r.whatsapp
    ? `https://wa.me/${r.whatsapp}?text=${encodeURIComponent("Bonjour, je voudrais commander :")}`
    : "";
  if (wa) {
    const l = $("lien-wa");
    l.href = wa; l.target = "_blank"; l.rel = "noopener"; l.hidden = false;
    const b = $("btn-hero-1");
    b.textContent = "Commander"; b.href = wa; b.target = "_blank"; b.rel = "noopener";
  }

  // ---------- Barre de catégories + grille ----------
  const barre = $("barre-cat");
  M.sections.forEach((s, i) => {
    if (i > 0) barre.append(el("span", "barre-sep"));
    s.categories.filter((c) => c.style !== "offre").forEach((c) => {
      const b = el("button", "cat-btn");
      b.type = "button";
      b.setAttribute("role", "tab");
      b.dataset.cat = c.id;
      b.append(illu(c.icone, "cat-ico"), el("span", null, c.nom.split(" · ")[0]));
      barre.append(b);
    });
  });

  function afficherCategorie(id, defiler) {
    const cat = grilleCats.find((c) => c.id === id) || grilleCats[0];
    barre.querySelectorAll(".cat-btn").forEach((b) => {
      const actif = b.dataset.cat === cat.id;
      b.classList.toggle("actif", actif);
      b.setAttribute("aria-selected", actif);
      if (actif) b.scrollIntoView({ block: "nearest", inline: "center", behavior: defiler ? "smooth" : "auto" });
    });

    $("cat-titre").textContent = cat.nom;
    const h = $("cat-horaires");
    h.textContent = cat.horaires ? `Servi de ${cat.horaires}` : "";
    h.hidden = !cat.horaires;

    const grille = $("grille");
    grille.replaceChildren();
    cat.plats.forEach((p) => {
      const li = el("li", "carte");
      li.append(visuel(p, cat, "carte-visuel"));

      if (p.badges && p.badges.length) {
        const bs = el("div", "badges");
        p.badges.forEach((b) => BADGES[b] && bs.append(el("span", `badge ${BADGES[b][1]}`, BADGES[b][0])));
        li.append(bs);
      }
      li.append(el("h3", "carte-nom", p.nom));
      if (p.sousNom) li.append(el("p", "carte-sous", p.sousNom));
      li.append(el("p", "carte-desc", p.description));
      if (p.note) li.append(el("p", "carte-note", p.note));
      li.append(el("p", "carte-prix", prix(p.prix)));
      grille.append(li);
    });

    if (defiler) {
      history.replaceState(null, "", `#${cat.id}`);
      $("menu").scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  barre.addEventListener("click", (e) => {
    const b = e.target.closest(".cat-btn");
    if (!b) return;
    afficherCategorie(b.dataset.cat, false);
    history.replaceState(null, "", `#${b.dataset.cat}`);
  });

  // Bouton "Les cocktails" de l'accueil
  const premiereCocktail = grilleCats.find((c) => c.section.id === "cocktails");
  $("btn-hero-2").addEventListener("click", (e) => {
    e.preventDefault();
    afficherCategorie(premiereCocktail ? premiereCocktail.id : grilleCats[0].id, true);
  });

  // ---------- Formules spéciales (carrousel) ----------
  const carrousel = $("carrousel");
  const pagination = $("pagination");
  if (!offres.length) {
    $("formules").hidden = true;
  } else {
    $("offres-titre").textContent = offres[0].nom;
    const plats = offres.flatMap((c) => c.plats.map((p) => ({ p, c })));

    plats.forEach(({ p, c }) => {
      const carte = el("article", "offre");
      const txt = el("div", "offre-texte");
      txt.append(el("h3", "offre-nom", p.nom));
      const ul = el("ul", "offre-liste");
      p.description.split("+").map((s) => s.trim()).filter(Boolean)
        .forEach((s) => ul.append(el("li", null, s)));
      txt.append(ul);
      const total = el("p", "offre-total", "Total : ");
      total.append(el("strong", null, prix(p.prix)));
      txt.append(total);
      carte.append(txt, visuel(p, c, "offre-visuel"), el("span", "offre-pastille", prix(p.prix)));
      carrousel.append(carte);
    });

    const prec = el("button", "page-fleche", "←");
    prec.setAttribute("aria-label", "Précédent");
    pagination.append(prec);
    plats.forEach((_, i) => {
      const b = el("button", "page-num", String(i + 1));
      b.dataset.i = i;
      pagination.append(b);
    });
    const suiv = el("button", "page-fleche", "→");
    suiv.setAttribute("aria-label", "Suivant");
    pagination.append(suiv);

    const cartes = () => [...carrousel.children];
    const courant = () => {
      const x = carrousel.scrollLeft;
      let best = 0;
      cartes().forEach((c, i) => { if (Math.abs(c.offsetLeft - carrousel.offsetLeft - x) < Math.abs(cartes()[best].offsetLeft - carrousel.offsetLeft - x)) best = i; });
      return best;
    };
    const aller = (i) => {
      const c = cartes()[Math.max(0, Math.min(i, cartes().length - 1))];
      carrousel.scrollTo({ left: c.offsetLeft - carrousel.offsetLeft, behavior: "smooth" });
    };
    const majPagination = () => {
      const i = courant();
      pagination.querySelectorAll(".page-num").forEach((b) => b.classList.toggle("actif", +b.dataset.i === i));
    };
    pagination.addEventListener("click", (e) => {
      const b = e.target.closest("button");
      if (!b) return;
      if (b === prec) aller(courant() - 1);
      else if (b === suiv) aller(courant() + 1);
      else aller(+b.dataset.i);
    });
    carrousel.addEventListener("scroll", () => requestAnimationFrame(majPagination), { passive: true });
    majPagination();
  }

  // ---------- Atouts ----------
  const atouts = $("atouts");
  (M.atouts || []).forEach((a) => {
    const c = el("div", "atout");
    c.append(illu(a.icone, "atout-ico"), el("h3", null, a.titre), el("p", null, a.texte));
    atouts.append(c);
  });
  if (!atouts.children.length) atouts.hidden = true;

  // ---------- Bloc d'appel ----------
  if (M.appel) {
    $("appel-titre").textContent = M.appel.titre;
    $("appel-texte").textContent = M.appel.texte;
    (M.appel.boutons || []).forEach((b, i) => {
      const a = el("a", `btn ${i === 0 ? "btn-plein" : "btn-contour"}`, b.libelle);
      a.href = `#${b.categorie}`;
      a.addEventListener("click", (e) => { e.preventDefault(); afficherCategorie(b.categorie, true); });
      $("appel-boutons").append(a);
    });
  }

  // ---------- Pied de page ----------
  $("annee").textContent = new Date().getFullYear();
  $("footer-nom").textContent = `${r.logo} ${r.nom}`;
  $("footer-slogan").textContent = r.slogan || "";
  $("devise").textContent = r.devise;

  // ---------- Démarrage : #categorie ou #cocktails dans le lien ----------
  const h = location.hash.slice(1);
  const depart = h === "cocktails" && premiereCocktail ? premiereCocktail.id : h;
  afficherCategorie(depart, false);
  if (grilleCats.some((c) => c.id === depart)) $("menu").scrollIntoView();
})();
