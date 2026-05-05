/* =====================================================
   competences.js — Liste complète des ~170 compétences
   Organisées par catégorie avec socle commun
   ===================================================== */

/* ──────────────────────────────────────────────────────
   SOCLE COMMUN — Tout personnage commence avec ces valeurs
────────────────────────────────────────────────────── */
const SOCLE_COMMUN = {
  'Perception':          5,
  'Survie Nature':       5,
  'Résistance Physique': 5,
  'Volonté':             5,
  'Langue Maternelle':   30,
  'Course':              5,
  'Natation':            3,
  'Premiers Soins':      3
};

/* ──────────────────────────────────────────────────────
   TOUTES LES COMPÉTENCES PAR CATÉGORIE
────────────────────────────────────────────────────── */
const TOUTES_COMPETENCES = [

  /* ══════════════════════════════════════
     ⚔️ COMBAT (53)
  ══════════════════════════════════════ */
  { cat:'⚔ Combat', sous:'Armes de mêlée',    nom:'Combat Épée Courte' },
  { cat:'⚔ Combat', sous:'Armes de mêlée',    nom:'Combat Épée Longue' },
  { cat:'⚔ Combat', sous:'Armes de mêlée',    nom:'Combat Rapière' },
  { cat:'⚔ Combat', sous:'Armes de mêlée',    nom:'Combat Hache' },
  { cat:'⚔ Combat', sous:'Armes de mêlée',    nom:'Combat Masse' },
  { cat:'⚔ Combat', sous:'Armes de mêlée',    nom:'Combat Marteau' },
  { cat:'⚔ Combat', sous:'Armes de mêlée',    nom:'Combat Grande Arme' },
  { cat:'⚔ Combat', sous:'Armes de mêlée',    nom:'Combat Dague' },
  { cat:'⚔ Combat', sous:'Armes de mêlée',    nom:'Combat Lance Courte' },
  { cat:'⚔ Combat', sous:'Armes de mêlée',    nom:'Combat Lance Longue' },
  { cat:'⚔ Combat', sous:'Armes de mêlée',    nom:'Combat Hallebarde' },
  { cat:'⚔ Combat', sous:'Armes de mêlée',    nom:'Combat Pique' },
  { cat:'⚔ Combat', sous:'Armes de mêlée',    nom:'Combat Fouet/Chaîne' },
  { cat:'⚔ Combat', sous:'Armes de mêlée',    nom:'Combat Bâton' },
  { cat:'⚔ Combat', sous:'Armes de mêlée',    nom:'Combat Armes Doubles' },

  { cat:'⚔ Combat', sous:'Armes à distance',  nom:'Tir Arc Court' },
  { cat:'⚔ Combat', sous:'Armes à distance',  nom:'Tir Arc Long' },
  { cat:'⚔ Combat', sous:'Armes à distance',  nom:'Tir Arbalète' },
  { cat:'⚔ Combat', sous:'Armes à distance',  nom:'Tir Arbalète Lourde' },
  { cat:'⚔ Combat', sous:'Armes à distance',  nom:'Lancer Dague' },
  { cat:'⚔ Combat', sous:'Armes à distance',  nom:'Lancer Javelot' },
  { cat:'⚔ Combat', sous:'Armes à distance',  nom:'Lancer Hache' },
  { cat:'⚔ Combat', sous:'Armes à distance',  nom:'Lancer Fronde' },
  { cat:'⚔ Combat', sous:'Armes à distance',  nom:'Tir Pistolet' },
  { cat:'⚔ Combat', sous:'Armes à distance',  nom:'Tir Fusil' },
  { cat:'⚔ Combat', sous:'Armes à distance',  nom:'Utilisation Baliste' },
  { cat:'⚔ Combat', sous:'Armes à distance',  nom:'Utilisation Catapulte' },

  { cat:'⚔ Combat', sous:'Sans arme',         nom:'Combat Mains Nues' },
  { cat:'⚔ Combat', sous:'Sans arme',         nom:'Lutte/Grappling' },
  { cat:'⚔ Combat', sous:'Sans arme',         nom:'Boxe' },
  { cat:'⚔ Combat', sous:'Sans arme',         nom:'Arts Martiaux' },
  { cat:'⚔ Combat', sous:'Sans arme',         nom:'Coups de Pied' },
  { cat:'⚔ Combat', sous:'Sans arme',         nom:'Prises/Immobilisations' },

  { cat:'⚔ Combat', sous:'Défenses',          nom:'Esquive' },
  { cat:'⚔ Combat', sous:'Défenses',          nom:'Parade Arme' },
  { cat:'⚔ Combat', sous:'Défenses',          nom:'Blocage Bouclier' },
  { cat:'⚔ Combat', sous:'Défenses',          nom:'Parade Mains Nues' },
  { cat:'⚔ Combat', sous:'Défenses',          nom:'Roulade Évasive' },
  { cat:'⚔ Combat', sous:'Défenses',          nom:'Contre-Attaque' },
  { cat:'⚔ Combat', sous:'Défenses',          nom:'Riposte' },
  { cat:'⚔ Combat', sous:'Défenses',          nom:'Désengagement' },

  { cat:'⚔ Combat', sous:'Techniques avancées', nom:'Désarmement' },
  { cat:'⚔ Combat', sous:'Techniques avancées', nom:'Feinte' },
  { cat:'⚔ Combat', sous:'Techniques avancées', nom:'Coup Critique' },
  { cat:'⚔ Combat', sous:'Techniques avancées', nom:'Attaque Sournoise' },
  { cat:'⚔ Combat', sous:'Techniques avancées', nom:'Brise Armure' },
  { cat:'⚔ Combat', sous:'Techniques avancées', nom:'Charge' },
  { cat:'⚔ Combat', sous:'Techniques avancées', nom:'Combat Monté' },

  { cat:'⚔ Combat', sous:'Résistances combat', nom:'Résistance Physique' },
  { cat:'⚔ Combat', sous:'Résistances combat', nom:'Résistance Douleur' },
  { cat:'⚔ Combat', sous:'Résistances combat', nom:'Endurance Combat' },
  { cat:'⚔ Combat', sous:'Résistances combat', nom:'Berserker/Rage' },
  { cat:'⚔ Combat', sous:'Résistances combat', nom:'Second Souffle' },

  /* ══════════════════════════════════════
     🏃 MOUVEMENT (25)
  ══════════════════════════════════════ */
  { cat:'🏃 Mouvement', sous:'Déplacements',   nom:'Marche' },
  { cat:'🏃 Mouvement', sous:'Déplacements',   nom:'Course' },
  { cat:'🏃 Mouvement', sous:'Déplacements',   nom:'Sprint' },
  { cat:'🏃 Mouvement', sous:'Déplacements',   nom:'Marche Forcée' },
  { cat:'🏃 Mouvement', sous:'Déplacements',   nom:'Course Marathon' },
  { cat:'🏃 Mouvement', sous:'Déplacements',   nom:'Marche Silencieuse' },

  { cat:'🏃 Mouvement', sous:'Escalade',       nom:'Escalade' },
  { cat:'🏃 Mouvement', sous:'Escalade',       nom:'Escalade Rapide' },
  { cat:'🏃 Mouvement', sous:'Escalade',       nom:'Escalade Paroi Lisse' },
  { cat:'🏃 Mouvement', sous:'Escalade',       nom:'Descente Rapide' },
  { cat:'🏃 Mouvement', sous:'Escalade',       nom:'Utilisation Corde' },

  { cat:'🏃 Mouvement', sous:'Sauts',          nom:'Saut en Longueur' },
  { cat:'🏃 Mouvement', sous:'Sauts',          nom:'Saut en Hauteur' },
  { cat:'🏃 Mouvement', sous:'Sauts',          nom:'Saut Périlleux' },
  { cat:'🏃 Mouvement', sous:'Sauts',          nom:'Chute Contrôlée' },

  { cat:'🏃 Mouvement', sous:'Acrobaties',     nom:'Acrobatie' },
  { cat:'🏃 Mouvement', sous:'Acrobaties',     nom:'Équilibre' },
  { cat:'🏃 Mouvement', sous:'Acrobaties',     nom:'Contorsion' },
  { cat:'🏃 Mouvement', sous:'Acrobaties',     nom:'Jonglerie' },
  { cat:'🏃 Mouvement', sous:'Acrobaties',     nom:'Danse' },

  { cat:'🏃 Mouvement', sous:'Aquatique',      nom:'Natation' },
  { cat:'🏃 Mouvement', sous:'Aquatique',      nom:'Plongée' },
  { cat:'🏃 Mouvement', sous:'Aquatique',      nom:'Nage Rapide' },

  { cat:'🏃 Mouvement', sous:'Montures',       nom:'Équitation' },
  { cat:'🏃 Mouvement', sous:'Montures',       nom:'Conduite Char/Chariot' },

  /* ══════════════════════════════════════
     🛠️ ARTISANAT (16)
  ══════════════════════════════════════ */
  { cat:'🛠 Artisanat', sous:'Travail métaux',  nom:'Forge' },
  { cat:'🛠 Artisanat', sous:'Travail métaux',  nom:'Orfèvrerie' },
  { cat:'🛠 Artisanat', sous:'Travail métaux',  nom:'Armurerie' },

  { cat:'🛠 Artisanat', sous:'Travail matières',nom:'Travail Bois' },
  { cat:'🛠 Artisanat', sous:'Travail matières',nom:'Travail Cuir' },
  { cat:'🛠 Artisanat', sous:'Travail matières',nom:'Tissage' },
  { cat:'🛠 Artisanat', sous:'Travail matières',nom:'Couture' },
  { cat:'🛠 Artisanat', sous:'Travail matières',nom:'Poterie' },

  { cat:'🛠 Artisanat', sous:'Alimentaire',    nom:'Cuisine' },
  { cat:'🛠 Artisanat', sous:'Alimentaire',    nom:'Brasserie' },

  { cat:'🛠 Artisanat', sous:'Sciences techniques', nom:'Alchimie' },
  { cat:'🛠 Artisanat', sous:'Sciences techniques', nom:'Herboristerie' },
  { cat:'🛠 Artisanat', sous:'Sciences techniques', nom:'Mécanique' },
  { cat:'🛠 Artisanat', sous:'Sciences techniques', nom:'Ingénierie' },
  { cat:'🛠 Artisanat', sous:'Sciences techniques', nom:'Cartographie' },
  { cat:'🛠 Artisanat', sous:'Sciences techniques', nom:'Pièges' },

  /* ══════════════════════════════════════
     👁️ PERCEPTION (15)
  ══════════════════════════════════════ */
  { cat:'👁 Perception', sous:'Active',         nom:'Vigilance' },
  { cat:'👁 Perception', sous:'Active',         nom:'Observation' },
  { cat:'👁 Perception', sous:'Active',         nom:'Fouille' },
  { cat:'👁 Perception', sous:'Active',         nom:'Détection Pièges' },
  { cat:'👁 Perception', sous:'Active',         nom:'Détection Magie' },

  { cat:'👁 Perception', sous:'Sens spécialisés',nom:'Vision Nocturne' },
  { cat:'👁 Perception', sous:'Sens spécialisés',nom:'Ouïe Fine' },
  { cat:'👁 Perception', sous:'Sens spécialisés',nom:'Odorat' },
  { cat:'👁 Perception', sous:'Sens spécialisés',nom:'Goût' },
  { cat:'👁 Perception', sous:'Sens spécialisés',nom:'Sixième Sens' },

  { cat:'👁 Perception', sous:'Investigation',  nom:'Pistage' },
  { cat:'👁 Perception', sous:'Investigation',  nom:'Investigation' },
  { cat:'👁 Perception', sous:'Investigation',  nom:'Déduction' },
  { cat:'👁 Perception', sous:'Investigation',  nom:'Lecture Traces' },
  { cat:'👁 Perception', sous:'Investigation',  nom:'Évaluation' },

  /* ══════════════════════════════════════
     🌲 SURVIE (13)
  ══════════════════════════════════════ */
  { cat:'🌲 Survie', sous:'Base',               nom:'Survie Nature' },
  { cat:'🌲 Survie', sous:'Base',               nom:'Orientation' },
  { cat:'🌲 Survie', sous:'Base',               nom:'Chasse' },
  { cat:'🌲 Survie', sous:'Base',               nom:'Pêche' },

  { cat:'🌲 Survie', sous:'Campement',          nom:'Installation Camp' },
  { cat:'🌲 Survie', sous:'Campement',          nom:'Feu de Camp' },
  { cat:'🌲 Survie', sous:'Campement',          nom:'Camouflage' },

  { cat:'🌲 Survie', sous:'Environnement',      nom:'Connaissance Flore' },
  { cat:'🌲 Survie', sous:'Environnement',      nom:'Connaissance Faune' },
  { cat:'🌲 Survie', sous:'Environnement',      nom:'Météorologie' },

  { cat:'🌲 Survie', sous:'Résistances',        nom:'Résistance Fatigue' },
  { cat:'🌲 Survie', sous:'Résistances',        nom:'Résistance Climat' },
  { cat:'🌲 Survie', sous:'Résistances',        nom:'Premiers Soins' },

  /* ══════════════════════════════════════
     📚 SAVOIR (20)
  ══════════════════════════════════════ */
  { cat:'📚 Savoir', sous:'Langues',            nom:'Langue Maternelle' },
  { cat:'📚 Savoir', sous:'Langues',            nom:'Langue Étrangère' },
  { cat:'📚 Savoir', sous:'Langues',            nom:'Langue Ancienne' },

  { cat:'📚 Savoir', sous:'Éducation',          nom:'Lecture/Écriture' },
  { cat:'📚 Savoir', sous:'Éducation',          nom:'Mathématiques' },
  { cat:'📚 Savoir', sous:'Éducation',          nom:'Histoire' },
  { cat:'📚 Savoir', sous:'Éducation',          nom:'Géographie' },

  { cat:'📚 Savoir', sous:'Sciences',           nom:'Sciences Naturelles' },
  { cat:'📚 Savoir', sous:'Sciences',           nom:'Astronomie' },
  { cat:'📚 Savoir', sous:'Sciences',           nom:'Physique' },
  { cat:'📚 Savoir', sous:'Sciences',           nom:'Chimie' },
  { cat:'📚 Savoir', sous:'Sciences',           nom:'Botanique' },

  { cat:'📚 Savoir', sous:'Spécialisés',        nom:'Médecine' },
  { cat:'📚 Savoir', sous:'Spécialisés',        nom:'Droit' },
  { cat:'📚 Savoir', sous:'Spécialisés',        nom:'Religion/Théologie' },
  { cat:'📚 Savoir', sous:'Spécialisés',        nom:'Architecture' },
  { cat:'📚 Savoir', sous:'Spécialisés',        nom:'Navigation' },
  { cat:'📚 Savoir', sous:'Spécialisés',        nom:'Stratégie Militaire' },
  { cat:'📚 Savoir', sous:'Spécialisés',        nom:'Économie' },
  { cat:'📚 Savoir', sous:'Spécialisés',        nom:'Cryptographie' },

  /* ══════════════════════════════════════
     💬 SOCIAL (6)
  ══════════════════════════════════════ */
  { cat:'💬 Social', sous:'Influence',          nom:'Persuasion' },
  { cat:'💬 Social', sous:'Influence',          nom:'Intimidation' },
  { cat:'💬 Social', sous:'Influence',          nom:'Séduction' },
  { cat:'💬 Social', sous:'Influence',          nom:'Marchandage' },
  { cat:'💬 Social', sous:'Manipulation',       nom:'Tromperie' },
  { cat:'💬 Social', sous:'Commandement',       nom:'Leadership' },

  /* ══════════════════════════════════════
     🔮 MAGIE (22)
  ══════════════════════════════════════ */
  { cat:'🔮 Magie', sous:'Générale',            nom:'Maîtrise Magie' },

  { cat:'🔮 Magie', sous:'Éléments primaires',  nom:'Maîtrise Feu' },
  { cat:'🔮 Magie', sous:'Éléments primaires',  nom:'Maîtrise Eau' },
  { cat:'🔮 Magie', sous:'Éléments primaires',  nom:'Maîtrise Terre' },
  { cat:'🔮 Magie', sous:'Éléments primaires',  nom:'Maîtrise Vent' },
  { cat:'🔮 Magie', sous:'Éléments primaires',  nom:'Maîtrise Lumière' },
  { cat:'🔮 Magie', sous:'Éléments primaires',  nom:'Maîtrise Ombre' },

  { cat:'🔮 Magie', sous:'Fusions communes',    nom:'Maîtrise Lave' },
  { cat:'🔮 Magie', sous:'Fusions communes',    nom:'Maîtrise Foudre' },
  { cat:'🔮 Magie', sous:'Fusions communes',    nom:'Maîtrise Explosion' },
  { cat:'🔮 Magie', sous:'Fusions communes',    nom:'Maîtrise Glace' },
  { cat:'🔮 Magie', sous:'Fusions communes',    nom:'Maîtrise Boue' },
  { cat:'🔮 Magie', sous:'Fusions communes',    nom:'Maîtrise Cristal' },
  { cat:'🔮 Magie', sous:'Fusions communes',    nom:'Maîtrise Brume' },
  { cat:'🔮 Magie', sous:'Fusions communes',    nom:'Maîtrise Tempête' },
  { cat:'🔮 Magie', sous:'Fusions communes',    nom:'Maîtrise Poussière' },

  { cat:'🔮 Magie', sous:'Fusions rares',       nom:'Maîtrise Prisme' },
  { cat:'🔮 Magie', sous:'Fusions rares',       nom:'Maîtrise Laser' },
  { cat:'🔮 Magie', sous:'Fusions rares',       nom:'Maîtrise Poison' },
  { cat:'🔮 Magie', sous:'Fusions rares',       nom:'Maîtrise Ténèbres' },
  { cat:'🔮 Magie', sous:'Fusions rares',       nom:'Maîtrise Void' },
  { cat:'🔮 Magie', sous:'Fusions rares',       nom:'Maîtrise Lumière Noire' },
];

/* ──────────────────────────────────────────────────────
   CONSTRUIRE LA FICHE COMPLÈTE
   Prend les données générées par l'IA et les fusionne
   avec la liste complète (tout le reste à 0)
────────────────────────────────────────────────────── */
function buildFullSkillSheet(ficheData) {
  // Démarrer avec toutes les compétences à 0
  const sheet = {};
  TOUTES_COMPETENCES.forEach(c => { sheet[c.nom] = 0; });

  // Appliquer le socle commun
  Object.entries(SOCLE_COMMUN).forEach(([nom, val]) => {
    if (sheet.hasOwnProperty(nom)) sheet[nom] = val;
  });

  // Appliquer les compétences du background (générées par l'IA)
  if (ficheData.competences_background) {
    ficheData.competences_background.forEach(c => {
      if (sheet.hasOwnProperty(c.nom)) sheet[c.nom] = c.val;
      else sheet[c.nom] = c.val; // compétence inconnue mais on l'ajoute quand même
    });
  }

  // Appliquer les affinités magiques
  if (ficheData.affinites) {
    const talentMult = ficheData.talentMult || 1.0;
    ficheData.affinites.forEach(aff => {
      const nom = `Maîtrise ${aff}`;
      if (sheet.hasOwnProperty(nom)) {
        // Valeur de départ selon talent
        const base = Math.round(10 * talentMult);
        sheet[nom] = Math.min(100, base);
      }
    });
    // Maîtrise Magie générale aussi
    sheet['Maîtrise Magie'] = Math.max(sheet['Maîtrise Magie'], Math.round(5 * talentMult));
  }

  // Convertir en format tableau pour pc.competences
  return TOUTES_COMPETENCES.map(c => ({
    nom: c.nom,
    cat: c.cat,
    sous: c.sous,
    val: sheet[c.nom] || 0
  }));
}

/* ──────────────────────────────────────────────────────
   CATÉGORIES POUR L'AFFICHAGE PAR MODE
────────────────────────────────────────────────────── */
const CATS_PAR_MODE = {
  combat:      ['⚔ Combat'],
  dialogue:    ['💬 Social'],
  exploration: ['🏃 Mouvement', '👁 Perception', '🌲 Survie', '📚 Savoir']
};

/* ──────────────────────────────────────────────────────
   COULEUR SELON LA VALEUR
────────────────────────────────────────────────────── */
function getSkillColor(val) {
  if (val === 0)   return 'var(--text-hint)';
  if (val < 10)    return 'var(--text-hint)';
  if (val < 20)    return 'var(--text-muted)';
  if (val < 40)    return 'var(--text)';
  if (val < 60)    return 'var(--gold-light)';
  if (val < 80)    return 'var(--gold)';
  return '#FFD700'; // légendaire
}

function getSkillOpacity(val) {
  if (val === 0) return '0.25';
  return '1';
}
