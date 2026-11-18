// Affichage du menu à partir de window.MENU (défini dans menu.js).
// On construit le DOM avec textContent (jamais innerHTML sur les données)
// pour qu'un texte du menu ne puisse pas injecter de HTML.

(function () {
  const { restaurant: r, categories } = window.MENU;
  const fmt = new Intl.NumberFormat("fr-FR");
  const $ = (id) => document.getElementById(id);

  function el(tag, cls, text) {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  // En-tête
  document.title = `Menu — ${r.nom}`;
  $("nom-resto").textContent = r.nom;
  $("slogan").textContent = r.slogan;
  $("info-horaires").textContent = r.horaires;
  $("info-adresse").textContent = r.adresse;
  $("info-tel").textContent = r.telephone;
  $("devise-footer").textContent = r.devise;

  if (r.whatsapp) {
    const a = $("btn-whatsapp");
    a.href = `https://wa.me/${r.whatsapp}?text=${encodeURIComponent("Bonjour, je voudrais commander :")}`;
    a.hidden = false;
  }

  // Onglets + sections
  const tabs = $("tabs");
  const menu = $("menu");

  const tousBtn = el("button", "tab actif", "Tout");
  tousBtn.dataset.cat = "";
  tabs.append(tousBtn);

  categories.forEach((cat) => {
    const b = el("button", "tab", cat.nom);
    b.dataset.cat = cat.id;
    tabs.append(b);

    const section = el("section", "categorie");
    section.dataset.cat = cat.id;
    section.append(el("h2", null, cat.nom));

    const liste = el("ul", "plats");
    cat.plats.forEach((p) => {
      const li = el("li", "plat");
      li.dataset.recherche = `${p.nom} ${p.description || ""}`.toLowerCase();

      const haut = el("div", "plat-haut");
      const nom = el("h3", null, p.nom);
      if (p.populaire) nom.append(el("span", "badge", "Populaire"));
      if (p.vegetarien) nom.append(el("span", "badge badge-vert", "Végé"));
      haut.append(nom, el("span", "prix", `${fmt.format(p.prix)} ${r.devise}`));

      li.append(haut);
      if (p.description) li.append(el("p", "desc", p.description));
      liste.append(li);
    });

    section.append(liste);
    menu.append(section);
  });

  // Filtrage (onglet + recherche)
  let catActive = "";
  function filtrer() {
    const q = $("recherche").value.trim().toLowerCase();
    let total = 0;
    menu.querySelectorAll(".categorie").forEach((s) => {
      const okCat = !catActive || s.dataset.cat === catActive;
      let visibles = 0;
      s.querySelectorAll(".plat").forEach((li) => {
        const ok = okCat && (!q || li.dataset.recherche.includes(q));
        li.hidden = !ok;
        if (ok) visibles++;
      });
      s.hidden = visibles === 0;
      total += visibles;
    });
    $("vide").hidden = total !== 0;
  }

  tabs.addEventListener("click", (e) => {
    const b = e.target.closest(".tab");
    if (!b) return;
    tabs.querySelectorAll(".tab").forEach((t) => t.classList.toggle("actif", t === b));
    catActive = b.dataset.cat;
    filtrer();
  });
  $("recherche").addEventListener("input", filtrer);
})();
