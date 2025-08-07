export type SoundCategory = 'voyelles' | 'consonnes' | 'digrammes';

export type SoundExample = {
  word: string;
};

export type Sound = {
  id: string;
  label: string; // what we display (can be "an/en")
  category: SoundCategory;
  patterns: string[]; // substrings to highlight
  color: string; // hex color
  examples: SoundExample[];
};

// Simple, kid-friendly palette
const COLORS = [
  '#FF6B6B', // coral red
  '#4ECDC4', // teal
  '#FFD166', // warm yellow
  '#A78BFA', // lavender
  '#6EE7B7', // mint
  '#F59E0B', // amber
  '#60A5FA', // blue
  '#F472B6', // pink
  '#34D399', // green
  '#FB7185', // rose
  '#FBBF24', // sunflower
  '#93C5FD', // sky
];

function c(i: number): string {
  return COLORS[i % COLORS.length];
}

export const SOUNDS: Sound[] = [
  // Voyelles simples
  { id: 'a', label: 'a', category: 'voyelles', patterns: ['a'], color: c(0), examples: [
    { word: 'papa' }, { word: 'salade' }, { word: 'maman' }
  ]},
  { id: 'e-accent-aigu', label: 'é', category: 'voyelles', patterns: ['é'], color: c(1), examples: [
    { word: 'bébé' }, { word: 'été' }, { word: 'fée' }
  ]},
  { id: 'e-accent-grave', label: 'è', category: 'voyelles', patterns: ['è'], color: c(2), examples: [
    { word: 'père' }, { word: 'crème' }, { word: 'trèfle' }
  ]},
  { id: 'i', label: 'i', category: 'voyelles', patterns: ['i'], color: c(3), examples: [
    { word: 'biscuit' }, { word: 'lapin' }, { word: 'fille' }
  ]},
  { id: 'o', label: 'o', category: 'voyelles', patterns: ['o'], color: c(4), examples: [
    { word: 'moto' }, { word: 'robot' }, { word: 'rose' }
  ]},
  { id: 'u', label: 'u', category: 'voyelles', patterns: ['u'], color: c(5), examples: [
    { word: 'lune' }, { word: 'plume' }, { word: 'jus' }
  ]},

  // Consonnes (quelques-unes)
  { id: 'b', label: 'b', category: 'consonnes', patterns: ['b'], color: c(6), examples: [
    { word: 'bébé' }, { word: 'balle' }, { word: 'bois' }
  ]},
  { id: 'd', label: 'd', category: 'consonnes', patterns: ['d'], color: c(7), examples: [
    { word: 'dodo' }, { word: 'dinde' }, { word: 'dinosaure' }
  ]},
  { id: 'j', label: 'j', category: 'consonnes', patterns: ['j', 'ge'], color: c(8), examples: [
    { word: 'jupe' }, { word: 'jaune' }, { word: 'girafe' }
  ]},
  { id: 'l', label: 'l', category: 'consonnes', patterns: ['l'], color: c(9), examples: [
    { word: 'lune' }, { word: 'lapin' }, { word: 'lait' }
  ]},
  { id: 'r', label: 'r', category: 'consonnes', patterns: ['r', 'rr'], color: c(10), examples: [
    { word: 'raisin' }, { word: 'rire' }, { word: 'route' }
  ]},
  { id: 's', label: 's', category: 'consonnes', patterns: ['s', 'ss', 'ç'], color: c(11), examples: [
    { word: 'souris' }, { word: 'tasse' }, { word: 'garçon' }
  ]},

  // Digrammes et groupes usuels
  { id: 'ch', label: 'ch', category: 'digrammes', patterns: ['ch'], color: c(0), examples: [
    { word: 'chat' }, { word: 'chien' }, { word: 'chocolat' }
  ]},
  { id: 'ou', label: 'ou', category: 'digrammes', patterns: ['ou'], color: c(1), examples: [
    { word: 'loup' }, { word: 'poule' }, { word: 'rouge' }
  ]},
  { id: 'an-en', label: 'an / en', category: 'digrammes', patterns: ['an', 'en'], color: c(2), examples: [
    { word: 'maman' }, { word: 'enfant' }, { word: 'pantalon' }
  ]},
  { id: 'on', label: 'on', category: 'digrammes', patterns: ['on'], color: c(3), examples: [
    { word: 'ballon' }, { word: 'poisson' }, { word: 'bonbon' }
  ]},
  { id: 'in', label: 'in', category: 'digrammes', patterns: ['in', 'ain', 'ein'], color: c(4), examples: [
    { word: 'lapin' }, { word: 'sapin' }, { word: 'matin' }
  ]},
  { id: 'oi', label: 'oi', category: 'digrammes', patterns: ['oi'], color: c(5), examples: [
    { word: 'roi' }, { word: 'oiseau' }, { word: 'poisson' }
  ]},
  { id: 'au-eau', label: 'au / eau', category: 'digrammes', patterns: ['au', 'eau'], color: c(6), examples: [
    { word: 'bateau' }, { word: 'jaune' }, { word: 'cadeau' }
  ]},
  { id: 'ai-ei', label: 'ai / ei', category: 'digrammes', patterns: ['ai', 'ei'], color: c(7), examples: [
    { word: 'maison' }, { word: 'lait' }, { word: 'neige' }
  ]},
  { id: 'eu-oeu', label: 'eu / oeu', category: 'digrammes', patterns: ['eu', 'oeu'], color: c(8), examples: [
    { word: 'feu' }, { word: 'oeuf' }, { word: 'heureux' }
  ]},
  { id: 'gn', label: 'gn', category: 'digrammes', patterns: ['gn'], color: c(9), examples: [
    { word: 'montagne' }, { word: 'agneau' }, { word: 'champagne' }
  ]},
  { id: 'ill', label: 'ill', category: 'digrammes', patterns: ['ill'], color: c(10), examples: [
    { word: 'fille' }, { word: 'grenouille' }, { word: 'bille' }
  ]},
  { id: 'qu', label: 'qu', category: 'digrammes', patterns: ['qu'], color: c(11), examples: [
    { word: 'quatre' }, { word: 'queue' }, { word: 'coq' }
  ]},
];

export type { Sound as TSound };