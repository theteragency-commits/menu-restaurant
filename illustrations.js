// Illustrations SVG plates (dessinées pour ce projet, aucune image externe).
// Utilisées quand un plat n'a pas de "photo" dans menu.js.
// Ce sont des constantes du code : on peut les injecter en innerHTML sans risque.

window.ILLUS = {
  // Petit-déjeuner : poêle et œuf
  aube: `<svg viewBox="0 0 64 64"><rect x="44" y="30" width="18" height="5" rx="2.5" fill="#3b2f2f"/><circle cx="28" cy="33" r="20" fill="#3b2f2f"/><circle cx="28" cy="33" r="16" fill="#5a4a48"/><path d="M17 31c0-7 6-11 12-10 7 0 11 5 10 11-1 7-7 9-12 9-6 0-10-4-10-10Z" fill="#fff"/><circle cx="28" cy="31" r="5.5" fill="#ffb703"/><circle cx="26.5" cy="29.5" r="1.6" fill="#ffd866"/></svg>`,

  // Déjeuner : assiette poulet, riz, salade
  soleil: `<svg viewBox="0 0 64 64"><ellipse cx="32" cy="38" rx="28" ry="18" fill="#fff" stroke="#f3d4cf" stroke-width="2"/><ellipse cx="32" cy="38" rx="20" ry="12" fill="#fdeeea"/><ellipse cx="24" cy="38" rx="9" ry="6" fill="#fff8e6"/><circle cx="21" cy="36" r="1" fill="#e9dcc0"/><circle cx="26" cy="39" r="1" fill="#e9dcc0"/><path d="M33 31c6-4 13-2 13 4s-6 9-11 7c-3-1-5-5-2-11Z" fill="#c8742b"/><path d="M33 31c4-2 9-1 10 3" stroke="#e39a4f" stroke-width="2" fill="none"/><rect x="28" y="40" width="7" height="3" rx="1.5" fill="#f4e9dc" transform="rotate(-30 31 41)"/><circle cx="40" cy="44" r="3" fill="#4caf50"/><circle cx="44" cy="42" r="2.5" fill="#66bb6a"/></svg>`,

  // Dîner : cloche
  lune: `<svg viewBox="0 0 64 64"><rect x="6" y="46" width="52" height="5" rx="2.5" fill="#c9ced6"/><path d="M10 46a22 22 0 0 1 44 0Z" fill="#e3e7ed"/><path d="M16 42a16 16 0 0 1 12-14" stroke="#fff" stroke-width="3" stroke-linecap="round" fill="none"/><rect x="29" y="18" width="6" height="6" rx="3" fill="#c9ced6"/><path d="M50 14a6 6 0 1 1-6-6 5 5 0 0 0 6 6Z" fill="#ffb703"/></svg>`,

  // Signature : crêpe + couronne
  toque: `<svg viewBox="0 0 64 64"><ellipse cx="32" cy="48" rx="26" ry="8" fill="#fff" stroke="#f3d4cf" stroke-width="2"/><path d="M10 46 32 22l22 24Z" fill="#f6c45a"/><path d="M10 46 32 22l8 24Z" fill="#f0b23c"/><path d="M16 40c4 2 6-3 10-1s5 3 9 0 6 2 10 1" stroke="#7a3e1d" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M24 14l4 4 4-7 4 7 4-4-2 9H26Z" fill="#ffb703"/><circle cx="32" cy="10" r="1.6" fill="#f5412d"/></svg>`,

  // Crêpe salée : jambon, fromage, salade
  crepe: `<svg viewBox="0 0 64 64"><ellipse cx="32" cy="48" rx="26" ry="8" fill="#fff" stroke="#f3d4cf" stroke-width="2"/><path d="M10 46 32 18l22 28Z" fill="#f6c45a"/><path d="M10 46 32 18l8 28Z" fill="#f0b23c"/><path d="M18 40c4-5 9-6 14-4-2 4-8 7-14 4Z" fill="#f49a9a"/><path d="M33 36c5-3 10-2 13 2-4 3-9 3-13-2Z" fill="#ffe08a"/><path d="M26 30c2-4 6-5 9-3-2 3-6 4-9 3Z" fill="#4caf50"/></svg>`,

  // Crêpe sucrée : chocolat + fraise
  "crepe-sucree": `<svg viewBox="0 0 64 64"><ellipse cx="32" cy="48" rx="26" ry="8" fill="#fff" stroke="#f3d4cf" stroke-width="2"/><path d="M10 46 32 20l22 26Z" fill="#f6c45a"/><path d="M10 46 32 20l8 26Z" fill="#f0b23c"/><path d="M15 41c5 1 6-4 11-2s5 3 10 0 6 2 11 1M19 35c4 1 6-3 10-1s4 2 8 0" stroke="#6b3418" stroke-width="2.4" fill="none" stroke-linecap="round"/><path d="M46 28c4 0 7 3 6 7-1 3-4 5-6 5s-5-2-6-5c-1-4 2-7 6-7Z" fill="#f5412d"/><path d="M43 27l3 2 3-2-3-2Z" fill="#4caf50"/><circle cx="45" cy="33" r=".8" fill="#ffd866"/><circle cx="48" cy="35" r=".8" fill="#ffd866"/></svg>`,

  // Entrées : bol d'acras
  entree: `<svg viewBox="0 0 64 64"><circle cx="22" cy="30" r="8" fill="#d0802f"/><circle cx="34" cy="26" r="8" fill="#c8742b"/><circle cx="44" cy="31" r="7" fill="#d98a36"/><circle cx="20" cy="28" r="1.5" fill="#ecae63"/><circle cx="33" cy="23" r="1.5" fill="#ecae63"/><circle cx="43" cy="29" r="1.5" fill="#ecae63"/><path d="M6 34h52a26 20 0 0 1-52 0Z" fill="#f5412d"/><path d="M10 38h44" stroke="#ff8a75" stroke-width="2.5" stroke-linecap="round"/></svg>`,

  // Plats spéciaux : homard
  cloche: `<svg viewBox="0 0 64 64"><ellipse cx="32" cy="50" rx="26" ry="7" fill="#fff" stroke="#f3d4cf" stroke-width="2"/><path d="M24 24c0-6 4-10 8-10s8 4 8 10v14c0 6-4 10-8 10s-8-4-8-10Z" fill="#e8442f"/><path d="M26 30h12M26 36h12M27 42h10" stroke="#b92f1f" stroke-width="2"/><path d="M24 22c-6-2-10-8-8-12 3 1 4 4 7 5M40 22c6-2 10-8 8-12-3 1-4 4-7 5" fill="#e8442f" stroke="#e8442f" stroke-width="3" stroke-linecap="round"/><circle cx="15" cy="9" r="5" fill="#f05a3f"/><circle cx="49" cy="9" r="5" fill="#f05a3f"/><circle cx="29" cy="19" r="1.4" fill="#2b1b1b"/><circle cx="35" cy="19" r="1.4" fill="#2b1b1b"/><circle cx="46" cy="47" r="3.5" fill="#ffe08a"/></svg>`,

  // Cocktail bleu
  cocktail: `<svg viewBox="0 0 64 64"><path d="M10 12h44L32 36Z" fill="#e8f7ff" stroke="#bfe6fb" stroke-width="2"/><path d="M15 17h34L32 33Z" fill="#2bb6ff"/><path d="M20 19h10" stroke="#9fe0ff" stroke-width="2" stroke-linecap="round"/><rect x="30.5" y="35" width="3" height="18" fill="#bfe6fb"/><ellipse cx="32" cy="55" rx="12" ry="3" fill="#bfe6fb"/><circle cx="50" cy="13" r="8" fill="#8bc34a"/><circle cx="50" cy="13" r="5.5" fill="#c5e1a5"/><path d="M50 8v10M45 13h10" stroke="#8bc34a" stroke-width="1"/><circle cx="24" cy="24" r="1.2" fill="#fff"/><circle cx="36" cy="27" r="1" fill="#fff"/></svg>`,

  // Mocktail orange
  jus: `<svg viewBox="0 0 64 64"><defs><linearGradient id="gj" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffb347"/><stop offset="1" stop-color="#ff4b2b"/></linearGradient></defs><path d="M38 4l-6 22" stroke="#f5412d" stroke-width="3" stroke-linecap="round"/><path d="M18 18h28l-4 40H22Z" fill="#fff3ec" stroke="#f8d8d4" stroke-width="2"/><path d="M20 26h24l-3 30H23Z" fill="url(#gj)"/><rect x="25" y="30" width="6" height="6" rx="1.5" fill="#fff" opacity=".55"/><rect x="33" y="38" width="6" height="6" rx="1.5" fill="#fff" opacity=".45"/><circle cx="46" cy="20" r="8" fill="#ff9f1c"/><circle cx="46" cy="20" r="5.5" fill="#ffd08a"/><path d="M46 15v10M41 20h10" stroke="#ff9f1c" stroke-width="1"/></svg>`,

  // Atout : horloge
  horloge: `<svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="24" fill="#f5412d"/><circle cx="32" cy="32" r="19" fill="#fff"/><path d="M32 20v12l8 6" stroke="#2b1b1b" stroke-width="3" stroke-linecap="round" fill="none"/><circle cx="32" cy="32" r="2.5" fill="#f5412d"/></svg>`,

  // Atout : piscine / vague
  vague: `<svg viewBox="0 0 64 64"><rect x="6" y="14" width="52" height="40" rx="10" fill="#2bb6ff"/><path d="M6 32c6-4 11-4 17 0s11 4 17 0 12-4 18 0v12c-6-4-12-4-18 0s-11 4-17 0-11-4-17 0Z" fill="#7fd3ff"/><path d="M22 6v20M40 6v20M22 12h18M22 20h18" stroke="#9aa3ad" stroke-width="3" stroke-linecap="round"/></svg>`
};

// Composition de l'accueil : mocktail, crêpe signature, cocktail
window.ILLUS_HERO = `<svg viewBox="0 0 360 240">
  <ellipse cx="180" cy="214" rx="150" ry="16" fill="#f5412d" opacity=".08"/>
  <g transform="translate(18 40) scale(2.6)">${'<path d="M38 4l-6 22" stroke="#f5412d" stroke-width="3" stroke-linecap="round"/><path d="M18 18h28l-4 40H22Z" fill="#fff3ec" stroke="#f8d8d4" stroke-width="2"/><path d="M20 26h24l-3 30H23Z" fill="#ff7a3d"/><rect x="25" y="30" width="6" height="6" rx="1.5" fill="#fff" opacity=".55"/><circle cx="46" cy="20" r="8" fill="#ff9f1c"/><circle cx="46" cy="20" r="5.5" fill="#ffd08a"/>'}</g>
  <g transform="translate(196 22) scale(2.6)">${'<path d="M10 12h44L32 36Z" fill="#e8f7ff" stroke="#bfe6fb" stroke-width="2"/><path d="M15 17h34L32 33Z" fill="#2bb6ff"/><rect x="30.5" y="35" width="3" height="18" fill="#bfe6fb"/><ellipse cx="32" cy="55" rx="12" ry="3" fill="#bfe6fb"/><circle cx="50" cy="13" r="8" fill="#8bc34a"/><circle cx="50" cy="13" r="5.5" fill="#c5e1a5"/>'}</g>
  <g transform="translate(76 56) scale(3.3)">${'<ellipse cx="32" cy="48" rx="28" ry="9" fill="#fff" stroke="#f3d4cf" stroke-width="1.5"/><path d="M8 46 32 18l24 28Z" fill="#f6c45a"/><path d="M8 46 32 18l9 28Z" fill="#f0b23c"/><path d="M14 40c5 2 7-3 11-1s5 3 10 0 7 2 12 1M19 33c4 1 6-3 10-1s4 2 8 0" stroke="#6b3418" stroke-width="1.8" fill="none" stroke-linecap="round"/><path d="M47 30c4 0 6 3 5 6-1 3-3 4-5 4s-4-1-5-4c-1-3 1-6 5-6Z" fill="#f5412d"/><path d="M44 29l3 2 3-2-3-2Z" fill="#4caf50"/>'}</g>
</svg>`;
