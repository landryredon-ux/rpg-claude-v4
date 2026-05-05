/* =====================================================
   formules.js — Formules exactes du système JDR
   Basées sur les fichiers de projet :
   - SYSTEME_DEGATS_EXPONENTIEL.md
   - FORMULES_FINALES_COMBAT.md
   - ATTRIBUTS_16_SYSTEME.md
   ===================================================== */

/* ──────────────────────────────────────────────────────
   MULTIPLICATEURS ARMES
────────────────────────────────────────────────────── */
const MULT_ARMES = {
  'mains_nues':     1.0,
  'dague':          1.3,
  'epee_courte':    1.5,
  'epee_longue':    2.0,
  'rapiere':        1.7,
  'hache':          1.8,
  'masse':          1.6,
  'marteau':        1.7,
  'grande_arme':    2.5,
  'lance_courte':   1.6,
  'lance_longue':   2.0,
  'hallebarde':     2.2,
  'baton':          1.4,
  'arc_court':      1.4,
  'arc_long':       1.8,
  'arbalete':       2.0,
  'default':        1.5
};

/* ──────────────────────────────────────────────────────
   CALCUL PV
   Formule : PV = 10^(CompCombat÷20) × Santé × (15 - CompCombat÷10)
   Source : FORMULES_FINALES_COMBAT.md
────────────────────────────────────────────────────── */
function calculerPV(sante, compCombat) {
  const comp = Math.max(1, Math.min(100, compCombat));
  const pv = Math.pow(10, comp / 20) * sante * (15 - comp / 10);
  return Math.round(Math.max(10, pv));
}

/* ──────────────────────────────────────────────────────
   CALCUL PF
   Formule : PF = Endurance × 10^(MeillCompPhysique÷30)
   Source : systeme_fatigue_v2.md + Option B validée
────────────────────────────────────────────────────── */
function calculerPF(endurance, meillCompPhysique) {
  const comp = Math.max(1, Math.min(100, meillCompPhysique));
  const pf = endurance * Math.pow(10, comp / 30);
  return Math.round(Math.max(10, pf));
}

/* ──────────────────────────────────────────────────────
   CALCUL PM
   Formule : PM = Mana × 10
   Source : ATTRIBUTS_16_SYSTEME.md
────────────────────────────────────────────────────── */
function calculerPM(mana) {
  return Math.max(0, mana * 10);
}

/* ──────────────────────────────────────────────────────
   CALCUL DÉGÂTS ARMES
   Formule : Dégâts = 10^(Comp÷20) × (1 + Force÷5) × MultArme
   Source : SYSTEME_DEGATS_EXPONENTIEL.md
────────────────────────────────────────────────────── */
function calculerDegatsArme(compCombat, force, typeArme) {
  const comp = Math.max(1, Math.min(100, compCombat));
  const mult = MULT_ARMES[typeArme] || MULT_ARMES['default'];
  const degats = Math.pow(10, comp / 20) * (1 + force / 5) * mult;
  return Math.round(degats);
}

/* ──────────────────────────────────────────────────────
   CALCUL DÉGÂTS SORTS
   Formule : Dégâts = 10^(Rang÷2) × Affinité × Efficacité
   Source : FORMULES_FINALES_COMBAT.md
   Rang = Math.ceil(Maîtrise ÷ 10)
   Efficacité = position dans le rang (0.5 à 1.0)
────────────────────────────────────────────────────── */
function calculerDegatsSort(maitrise, affinite) {
  const m = Math.max(1, Math.min(100, maitrise));
  const rang = Math.ceil(m / 10);
  // Position dans le rang (1-10 dans le rang)
  const posInRang = ((m - 1) % 10) + 1;
  const efficacite = 0.5 + (posInRang / 10) * 0.5; // 0.5 à 1.0
  const degats = Math.pow(10, rang / 2) * affinite * efficacite;
  return Math.round(degats);
}

/* ──────────────────────────────────────────────────────
   CALCUL COÛT PM SORT
   Formule : Coût = Dégâts ÷ 100
   Réduit si maîtrise supérieure au rang utilisé
────────────────────────────────────────────────────── */
function calculerCoutPM(degatsSort, maitriseLanceur, rangSort) {
  const coutBase = degatsSort / 100;
  const rangLanceur = Math.ceil(maitriseLanceur / 10);
  const diff = rangLanceur - rangSort;
  if (diff <= 0) return Math.round(coutBase);
  return Math.round(coutBase / (diff + 1));
}

/* ──────────────────────────────────────────────────────
   RANG D'UN SORT
────────────────────────────────────────────────────── */
function getRangSort(maitrise) {
  return Math.ceil(Math.max(1, Math.min(100, maitrise)) / 10);
}

/* ──────────────────────────────────────────────────────
   TROUVER LA MEILLEURE COMPÉTENCE PHYSIQUE
   Pour le calcul de PF
────────────────────────────────────────────────────── */
function getMeillCompPhysique(competences) {
  const physiques = ['Résistance Fatigue', 'Endurance Combat', 'Résistance Physique',
                     'Course', 'Sprint', 'Combat Mains Nues', 'Lutte/Grappling',
                     'Course Marathon', 'Second Souffle'];
  let max = 5;
  competences.forEach(c => {
    if (physiques.includes(c.nom) && c.val > max) max = c.val;
  });
  return max;
}

/* ──────────────────────────────────────────────────────
   TROUVER LA MEILLEURE COMPÉTENCE DE COMBAT
   Pour le calcul de PV
────────────────────────────────────────────────────── */
function getMeillCompCombat(competences) {
  const combats = competences.filter(c => c.cat && c.cat.includes('Combat') && c.val > 0);
  if (combats.length === 0) return 5;
  return Math.max(...combats.map(c => c.val));
}

/* ──────────────────────────────────────────────────────
   RECALCULER PV/PF/PM depuis les attributs et compétences
   Appelé après génération de fiche et après progression
────────────────────────────────────────────────────── */
function recalculerRessources(pc) {
  const attrs = pc.attributs || {};
  const sante      = attrs.sante      || 5;
  const endurance  = attrs.endurance  || 5;
  const mana       = attrs.mana       || 3;

  const compCombat  = getMeillCompCombat(pc.competences);
  const compPhysiq  = getMeillCompPhysique(pc.competences);

  const pvMax = calculerPV(sante, compCombat);
  const pfMax = calculerPF(endurance, compPhysiq);
  const pmMax = calculerPM(mana);

  return { pvMax, pfMax, pmMax };
}

/* ──────────────────────────────────────────────────────
   FORMATER LES GRANDS NOMBRES
   1500 → "1 500" | 45000 → "45 000" | 1500000 → "1.5M"
────────────────────────────────────────────────────── */
function formatNombre(n) {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1).replace('.0','') + 'M';
  if (n >= 1_000)     return n.toLocaleString('fr-FR');
  return String(n);
}

/* ──────────────────────────────────────────────────────
   RÉSUMÉ PUISSANCE POUR LE NARRATEUR
   Claude reçoit ça pour savoir comment calibrer les ennemis
────────────────────────────────────────────────────── */
function buildPuissanceResume(pc) {
  const attrs = pc.attributs || {};
  const compCombat = getMeillCompCombat(pc.competences);
  const force = attrs.force || 4;

  const degatsBase = calculerDegatsArme(compCombat, force, 'default');

  // Niveau narratif
  let niveauNarratif = 'Humain Normal';
  if (compCombat >= 90) niveauNarratif = 'Dieu Martial';
  else if (compCombat >= 75) niveauNarratif = 'Légende';
  else if (compCombat >= 60) niveauNarratif = 'Héros';
  else if (compCombat >= 45) niveauNarratif = 'Surhumain';
  else if (compCombat >= 30) niveauNarratif = 'Expert';
  else if (compCombat >= 15) niveauNarratif = 'Initié';

  return `Niveau: ${niveauNarratif} | Dégâts arme ~${formatNombre(degatsBase)} | PV ${formatNombre(pc.pvMax)}`;
}

/* ──────────────────────────────────────────────────────
   PROGRESSION DES COMPÉTENCES
   Formule : Points = 100 × 1.1^CompActuelle
   Source : SYSTEME_PROGRESSION_EXPONENTIEL.md
────────────────────────────────────────────────────── */
function pointsNecessaires(compActuelle) {
  return Math.round(100 * Math.pow(1.1, compActuelle));
}

/* ──────────────────────────────────────────────────────
   FUSIONS MAGIQUES — SEUILS DE DÉVERROUILLAGE
────────────────────────────────────────────────────── */
const FUSIONS = [
  { nom:'Maîtrise Lave',         el1:'affinite_feu',     seuil1:20, el2:'affinite_terre',   seuil2:20 },
  { nom:'Maîtrise Foudre',       el1:'affinite_vent',    seuil1:25, el2:'affinite_eau',     seuil2:25 },
  { nom:'Maîtrise Glace',        el1:'affinite_eau',     seuil1:20, el2:'affinite_vent',    seuil2:20 },
  { nom:'Maîtrise Explosion',    el1:'affinite_feu',     seuil1:30, el2:'affinite_vent',    seuil2:30 },
  { nom:'Maîtrise Boue',         el1:'affinite_eau',     seuil1:20, el2:'affinite_terre',   seuil2:20 },
  { nom:'Maîtrise Cristal',      el1:'affinite_terre',   seuil1:30, el2:'affinite_lumiere', seuil2:25 },
  { nom:'Maîtrise Brume',        el1:'affinite_eau',     seuil1:25, el2:'affinite_vent',    seuil2:20 },
  { nom:'Maîtrise Tempête',      el1:'affinite_vent',    seuil1:35, el2:'affinite_eau',     seuil2:30 },
  { nom:'Maîtrise Poussière',    el1:'affinite_terre',   seuil1:25, el2:'affinite_vent',    seuil2:25 },
  { nom:'Maîtrise Prisme',       el1:'affinite_lumiere', seuil1:40, el2:'affinite_eau',     seuil2:35 },
  { nom:'Maîtrise Laser',        el1:'affinite_lumiere', seuil1:45, el2:'affinite_feu',     seuil2:40 },
  { nom:'Maîtrise Poison',       el1:'affinite_eau',     seuil1:35, el2:'affinite_ombre',   seuil2:35 },
  { nom:'Maîtrise Ténèbres',     el1:'affinite_ombre',   seuil1:40, el2:'affinite_terre',   seuil2:35 },
  { nom:'Maîtrise Void',         el1:'affinite_ombre',   seuil1:50, el2:'affinite_vent',    seuil2:45 },
  { nom:'Maîtrise Lumière Noire',el1:'affinite_ombre',   seuil1:55, el2:'affinite_lumiere', seuil2:50 },
];

function getMaîtriseFromAffinite(nomAffinite) {
  // Convertit "affinite_feu" → "Maîtrise Feu"
  const el = nomAffinite.replace('affinite_', '');
  return 'Maîtrise ' + el.charAt(0).toUpperCase() + el.slice(1);
}

function getCompVal(competences, nom) {
  const c = competences.find(c => c.nom === nom);
  return c ? c.val : 0;
}

function checkFusions(pc) {
  const unlocked = [];
  FUSIONS.forEach(fusion => {
    const val1 = getCompVal(pc.competences, getMaîtriseFromAffinite(fusion.el1));
    const val2 = getCompVal(pc.competences, getMaîtriseFromAffinite(fusion.el2));
    const fusionComp = pc.competences.find(c => c.nom === fusion.nom);
    const dejaUnlocked = fusionComp && fusionComp.val > 0;
    if (!dejaUnlocked && val1 >= fusion.seuil1 && val2 >= fusion.seuil2) {
      unlocked.push(fusion.nom);
    }
  });
  return unlocked;
}

/* ──────────────────────────────────────────────────────
   CALENDRIER 400 JOURS / 2 LUNES
   Source : UNIVERS_400_JOURS.md
────────────────────────────────────────────────────── */
const CALENDRIER = {
  joursParAn: 400,
  saisons: [
    { nom:'Saison des Fleurs',   debut:1,   fin:80  },
    { nom:'Saison du Soleil',    debut:81,  fin:160 },
    { nom:'Saison des Récoltes', debut:161, fin:240 },
    { nom:'Saison des Brumes',   debut:241, fin:320 },
    { nom:'Saison des Glaces',   debut:321, fin:400 },
  ],
  lunes: [
    { nom:'Lune d'Argent', cycle:40 },
    { nom:'Lune de Sang',   cycle:53 },
  ]
};

const PHASES_LUNE = ['nouvelle', 'croissant', 'premier quartier', 'gibbeuse croissante', 'pleine', 'gibbeuse décroissante', 'dernier quartier', 'décroissante'];

function getPhaseLune(jourAbsolu, cycle) {
  const pos = jourAbsolu % cycle;
  const idx = Math.floor((pos / cycle) * PHASES_LUNE.length);
  return PHASES_LUNE[idx];
}

function getSaison(jourAnnee) {
  const j = ((jourAnnee - 1) % 400) + 1;
  return CALENDRIER.saisons.find(s => j >= s.debut && j <= s.fin) || CALENDRIER.saisons[0];
}

function getInfoCalendrier(jourAbsolu) {
  const annee = Math.floor((jourAbsolu - 1) / 400) + 1;
  const jourAnnee = ((jourAbsolu - 1) % 400) + 1;
  const saison = getSaison(jourAnnee);
  const phaseLuneArgent = getPhaseLune(jourAbsolu, 40);
  const phaseLuneSang   = getPhaseLune(jourAbsolu, 53);
  return { annee, jourAnnee, saison: saison.nom, phaseLuneArgent, phaseLuneSang };
}

function formatCalendrier(jourAbsolu) {
  const info = getInfoCalendrier(jourAbsolu);
  return `An ${info.annee} · Jour ${info.jourAnnee} · ${info.saison} · ☽ ${info.phaseLuneArgent} · 🔴 ${info.phaseLuneSang}`;
}
