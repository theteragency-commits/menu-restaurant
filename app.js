// Affichage du menu à partir de window.MENU (menu.js) et window.ILLUS (illustrations.js).
// Les textes du menu passent TOUJOURS par textContent (jamais innerHTML) :
// un texte saisi dans menu.js ne peut pas injecter de HTML.
// Seules les icônes SVG (constantes du code) passent par innerHTML.

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
  function icone(nom) {
    const d = el("span", "cat-ico");
    d.setAttribute("aria-hidden", "true");
    d.innerHTML = window.ILLUS[nom] || window.ILLUS.soleil;
    return d;
  }
  function badges(p) {
    if (!p.badges || !p.badges.length) return null;
    const bs = el("span", "badges");
    p.badges.forEach((b) => BADGES[b] && bs.append(el("span", `badge ${BADGES[b][1]}`, BADGES[b][0])));
    return bs;
  }

  // ---------- Marque ----------
  const logo = $("logo");
  if (r.logoImage) { logo.src = r.logoImage; logo.alt = `Logo ${r.logo} ${r.nom}`; }
  else logo.hidden = true;
  $("nom").textContent = `${r.logo} ${r.nom}`;
  $("accroche").textContent = r.accroche || "";
  $("devise").textContent = r.devise;
  $("slogan").textContent = r.slogan || "";
  $("annee").textContent = new Date().getFullYear();
  $("pied-nom").textContent = `${r.logo} ${r.nom}`;
  $("titre-page").textContent = `Menu ${r.logo} ${r.nom}`;

  if (r.whatsapp) {
    const url = `https://wa.me/${r.whatsapp}?text=${encodeURIComponent("Bonjour, je voudrais commander :")}`;
    ["wa", "wa-mini"].forEach((id) => { $(id).href = url; $(id).hidden = false; });
  }

  // ---------- Rendu d'une catégorie ----------
  function rendreCategorie(cat) {
    const bloc = el("section", "cat");
    bloc.id = cat.id;
    if (cat.plats.some((p) => (p.badges || []).includes("signature")) && cat.plats.length === 1) bloc.classList.add("cat-vedette");

    const tete = el("header", "cat-tete");
    const titres = el("div", "cat-titres");
    titres.append(el("h2", "cat-nom", cat.nom));
    const n = cat.plats.length;
    titres.append(el("p", "cat-meta", `${n} choix`));
    tete.append(icone(cat.icone), titres);
    if (cat.horaires) tete.append(el("span", "pastille", cat.horaires));
    bloc.append(tete);

    if (cat.style === "offre") {
      const ul = el("ul", "tuiles");
      cat.plats.forEach((p) => {
        const li = el("li", "tuile");
        li.dataset.recherche = `${p.nom} ${p.description}`.toLowerCase();
        li.append(el("h3", "tuile-nom", p.nom));
        const contenu = el("ul", "tuile-liste");
        p.description.split("+").map((s) => s.trim()).filter(Boolean)
          .forEach((s) => contenu.append(el("li", null, s)));
        li.append(contenu, el("p", "tuile-prix", prix(p.prix)));
        ul.append(li);
      });
      bloc.append(ul);
      return bloc;
    }

    const ul = el("ul", "lignes");
    cat.plats.forEach((p) => {
      const li = el("li", "ligne");
      li.dataset.recherche = [p.nom, p.sousNom, p.description, p.note].filter(Boolean).join(" ").toLowerCase();

      if (p.photo) {
        const img = el("img", "ligne-photo");
        img.src = p.photo; img.alt = p.nom; img.loading = "lazy";
        li.append(img);
      }

      const corps = el("div", "ligne-corps");
      const titre = el("h3", "ligne-nom");
      titre.append(el("span", null, p.nom));
      const b = badges(p);
      if (b) titre.append(b);
      corps.append(titre);
      if (p.sousNom) corps.append(el("p", "ligne-sous", p.sousNom));
      if (p.description) corps.append(el("p", "ligne-desc", p.description));
      if (p.note) corps.append(el("p", "ligne-note", p.note));

      li.append(corps, el("span", "ligne-prix", prix(p.prix)));
      ul.append(li);
    });
    bloc.append(ul);
    return bloc;
  }

  // ---------- Affichage d'une carte (Restaurant / Cocktails) ----------
  const nav = $("nav");
  const conteneur = $("categories");
  let observer;

  function afficher(section) {
    document.querySelectorAll(".bascule button").forEach((b) => {
      const actif = b.dataset.id === section.id;
      b.classList.toggle("actif", actif);
      b.setAttribute("aria-selected", actif);
    });

    nav.replaceChildren();
    conteneur.replaceChildren();
    $("recherche").value = "";
    $("vide").hidden = true;

    section.categories.forEach((cat) => {
      const a = el("a", "nav-lien");
      a.href = `#${cat.id}`;
      a.dataset.cat = cat.id;
      a.append(el("span", "nav-texte", cat.nom.split(" · ")[0]), el("span", "nav-compte", String(cat.plats.length)));
      nav.append(a);
      conteneur.append(rendreCategorie(cat));
    });

    // Lien actif selon la catégorie à l'écran
    if (observer) observer.disconnect();
    observer = new IntersectionObserver((entrees) => {
      entrees.forEach((e) => {
        if (!e.isIntersecting) return;
        nav.querySelectorAll(".nav-lien").forEach((l) => {
          const actif = l.dataset.cat === e.target.id;
          l.classList.toggle("actif", actif);
          if (actif && nav.scrollWidth > nav.clientWidth) {
            nav.scrollTo({ left: l.offsetLeft - nav.clientWidth / 2 + l.offsetWidth / 2, behavior: "smooth" });
          }
        });
      });
    }, { rootMargin: "-120px 0px -60% 0px" });
    conteneur.querySelectorAll(".cat").forEach((c) => observer.observe(c));
  }

  // Bascule Restaurant / Cocktails
  const bascule = $("bascule");
  M.sections.forEach((s) => {
    const b = el("button", null, s.nom);
    b.type = "button";
    b.setAttribute("role", "tab");
    b.dataset.id = s.id;
    bascule.append(b);
  });
  bascule.addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (!b) return;
    history.replaceState(null, "", `#${b.dataset.id}`);
    afficher(M.sections.find((s) => s.id === b.dataset.id));
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Clic sur une catégorie : défilement en tenant compte de la barre collante (téléphone)
  nav.addEventListener("click", (e) => {
    const a = e.target.closest(".nav-lien");
    if (!a) return;
    e.preventDefault();
    const cible = document.getElementById(a.dataset.cat);
    const collant = getComputedStyle(nav).position === "sticky" ? nav.offsetHeight + 12 : 16;
    window.scrollTo({ top: cible.getBoundingClientRect().top + window.scrollY - collant, behavior: "smooth" });
  });

  // ---------- Recherche ----------
  $("recherche").addEventListener("input", (e) => {
    const q = e.target.value.trim().toLowerCase();
    let total = 0;
    conteneur.querySelectorAll(".cat").forEach((c) => {
      let n = 0;
      c.querySelectorAll("[data-recherche]").forEach((li) => {
        const ok = !q || li.dataset.recherche.includes(q);
        li.hidden = !ok;
        if (ok) n++;
      });
      c.hidden = n === 0;
      total += n;
    });
    $("vide").hidden = total !== 0;
  });

  // ---------- Démarrage : #cocktails ou #<categorie> dans le lien ----------
  const h = location.hash.slice(1);
  const parSection = M.sections.find((s) => s.id === h);
  const parCategorie = M.sections.find((s) => s.categories.some((c) => c.id === h));
  afficher(parSection || parCategorie || M.sections[0]);
  if (parCategorie && !parSection) document.getElementById(h).scrollIntoView();
})();
