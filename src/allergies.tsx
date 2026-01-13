export type Languages = "DE" | "EN" | "ES" | "JP" | "IT" | "NL" | "NO" | "FR" | "PT";

type Language = {
  id: Languages;
  longName: string;
  icon: string;
  translations: { [key: string]: string };
};

export const allLanguages: Language[] = [
  {
    id: "DE",
    longName: "deutsch",
    icon: "🇩🇪",
    translations: {
      allergies: "allergien",
    },
  },
  {
    id: "EN",
    longName: "english",
    icon: "🇬🇧",
    translations: {
      allergies: "allergies",
    },
  },
  {
    id: "ES",
    longName: "español",
    icon: "🇪🇸",
    translations: {
      allergies: "alergias",
    },
  },
  {
    id: "JP",
    longName: "日本語",
    icon: "🇯🇵",
    translations: {
      allergies: "アレルギー",
    },
  },
  {
    id: "IT",
    longName: "italiano",
    icon: "🇮🇹",
    translations: {
      allergies: "allergie",
    },
  },
  {
    id: "NO",
    longName: "norsk",
    icon: "🇳🇴",
    translations: {
      allergies: "allergier",
    },
  },
  {
    id: "NL",
    longName: "dutch",
    icon: "🇳🇱",
    translations: {
      allergies: "allergieën",
    },
  },
  {
    id: "FR",
    longName: "français",
    icon: "🇫🇷",
    translations: {
      allergies: "allergies",
    },
  },
  {
    id: "PT",
    longName: "português",
    icon: "🇵🇹",
    translations: {
      allergies: "alergias",
    },
  },
];

export type Severity = 1 | 2 | 3; // 1: mild, 2: moderate, 3: severe

export type Allergy = {
  shortname: string;
  important?: boolean;
  severity?: Severity; // New property
  name: {
    [LanguageCode in Languages]: string;
  };
  sign?: any;
};

export type Allergies =
  | "almond"
  | "banana"
  | "bean"
  | "capsicum"
  | "celery"
  | "crustaceans"
  | "dairy"
  | "egg"
  | "fenugreek"
  | "fish"
  | "gluten"
  | "kiwi"
  | "legume"
  | "lupin"
  | "milk"
  | "molluscs"
  | "mustard"
  | "nut"
  | "onion"
  | "peanut"
  | "pea"
  | "pepper"
  | "sesame"
  | "shellfish"
  | "soy"
  | "sulfites"
  | "treeNut"
  | "wheat";

const allergiesPerLanguage: { [key in Languages]: { [id in Allergies]: string } } = {
  DE: {
    almond: "mandeln",
    banana: "banane",
    bean: "bohnen",
    capsicum: "paprika",
    celery: "sellerie",
    crustaceans: "krebstiere",
    dairy: "molkerei",
    egg: "ei",
    fenugreek: "bockshornklee",
    fish: "fische",
    gluten: "gluten",
    kiwi: "kiwi",
    legume: "hülsenfrucht",
    lupin: "lupine",
    milk: "milch",
    molluscs: "weichtiere",
    mustard: "senf",
    nut: "nüsse",
    onion: "zwiebel",
    peanut: "erdnuss",
    pea: "erbsen",
    pepper: "sesame",
    sesame: "schaltier",
    shellfish: "soja",
    soy: "sulfite",
    sulfites: "pfeffer",
    treeNut: "baumnuss",
    wheat: "weizen",
  },
  EN: {
    almond: "almonds",
    banana: "banana",
    bean: "beans",
    capsicum: "capsicum",
    celery: "celery",
    crustaceans: "crustaceans",
    dairy: "dairy",
    egg: "egg",
    fenugreek: "fenugreek",
    fish: "fish",
    gluten: "gluten",
    kiwi: "kiwi",
    legume: "legume",
    lupin: "lupin",
    milk: "milk",
    molluscs: "molluscs",
    mustard: "mustard",
    nut: "nuts",
    onion: "onion",
    peanut: "peanuts",
    pea: "peas",
    pepper: "pepper",
    sesame: "sesame",
    shellfish: "shellfish",
    soy: "soy",
    sulfites: "sulfites",
    treeNut: "tree nuts",
    wheat: "wheat",
  },
  ES: {
    almond: "almendra",
    banana: "plátano",
    bean: "frijoles",
    capsicum: "pimiento",
    celery: "apio",
    crustaceans: "crustáceos",
    dairy: "lácteos",
    egg: "huevo",
    fenugreek: "fenogreco",
    fish: "pescado",
    gluten: "gluten",
    kiwi: "kiwi",
    legume: "legumbre",
    lupin: "lupino",
    milk: "leche",
    molluscs: "moluscos",
    mustard: "mostaza",
    nut: "nueces",
    onion: "cebolla",
    peanut: "cacahuates",
    pea: "guisantes",
    pepper: "pimienta",
    sesame: "sésamo",
    shellfish: "mariscos",
    soy: "soja",
    sulfites: "sulfitos",
    treeNut: "frutos secos",
    wheat: "trigo",
  },
  JP: {
    almond: "アーモンド",
    banana: "バナナ",
    bean: "豆",
    capsicum: "ピーマン",
    celery: "セロリ",
    crustaceans: "甲殻類",
    dairy: "乳製品",
    egg: "卵",
    fenugreek: "フェヌグリーク",
    fish: "魚",
    gluten: "グルテン",
    kiwi: "キウイ",
    legume: "豆",
    lupin: "ルピナス",
    milk: "牛乳",
    molluscs: "軟体動物",
    mustard: "マスタード",
    nut: "ナッツ",
    onion: "玉ねぎ",
    peanut: "ピーナッツ",
    pea: "豌豆",
    pepper: "胡椒",
    sesame: "ゴマ",
    shellfish: "貝",
    soy: "大豆",
    sulfites: "亜硫酸塩",
    treeNut: "木の実",
    wheat: "小麦",
  },
  IT: {
    almond: "mandorle",
    banana: "banana",
    bean: "fagioli",
    capsicum: "peperone",
    celery: "sedano",
    crustaceans: "crostacei",
    dairy: "latticini",
    egg: "uovo",
    fenugreek: "fieno greco",
    fish: "pesce",
    gluten: "glutine",
    kiwi: "kiwi",
    legume: "legume",
    lupin: "lupino",
    milk: "latte",
    molluscs: "molluschi",
    mustard: "senape",
    nut: "noci",
    onion: "cipolla",
    peanut: "arachidi",
    pea: "piselli",
    pepper: "pepe",
    sesame: "sesamo",
    shellfish: "frutti di mare",
    soy: "soia",
    sulfites: "solfati",
    treeNut: "noci",
    wheat: "grano",
  },
  NL: {
    almond: "amandelen",
    banana: "banaan",
    bean: "bonen",
    capsicum: "paprika",
    celery: "selderij",
    crustaceans: "schaaldier",
    dairy: "zuivel",
    egg: "ei",
    fenugreek: "fenegriek",
    fish: "vis",
    gluten: "gluten",
    kiwi: "kiwi",
    legume: "peulvrucht",
    lupin: "wolvin",
    milk: "melk",
    molluscs: "weekdieren",
    mustard: "mosterd",
    nut: "noten",
    onion: "ui",
    peanut: "pinda",
    pea: "erwten",
    pepper: "peper",
    sesame: "sesam zaden",
    shellfish: "schelpdieren",
    soy: "soja",
    sulfites: "sulfieten",
    treeNut: "boom noten",
    wheat: "tarwe",
  },
  NO: {
    almond: "mandler",
    banana: "banan",
    bean: "bønner",
    capsicum: "paprika",
    celery: "selleri",
    crustaceans: "krepsdyr",
    dairy: "meieri",
    egg: "egg",
    fenugreek: "bukkehornkløver",
    fish: "fisk",
    gluten: "gluten",
    kiwi: "kiwi",
    legume: "belgfrukt",
    lupin: "lupin",
    milk: "melk",
    molluscs: "bløtdyr",
    mustard: "sennep",
    nut: "nøtter",
    onion: "løk",
    peanut: "peanøtter",
    pea: "erter",
    pepper: "pepper",
    sesame: "sesamfrø",
    shellfish: "skalldyr",
    soy: "soya",
    sulfites: "sulfitter",
    treeNut: "trenøtter",
    wheat: "hvete",
  },
  FR: {
    almond: "amandes",
    banana: "banane",
    bean: "haricots",
    capsicum: "poivron",
    celery: "céleri",
    crustaceans: "crustacés",
    dairy: "produits laitiers",
    egg: "oeuf",
    fenugreek: "fenugrec",
    fish: "poisson",
    gluten: "gluten",
    kiwi: "kiwi",
    legume: "légumineuse",
    lupin: "lupin",
    milk: "lait",
    molluscs: "mollusques",
    mustard: "moutarde",
    nut: "noix",
    onion: "oignon",
    peanut: "cacahuètes",
    pea: "pois",
    pepper: "poivre",
    sesame: "sésame",
    shellfish: "fruits de mer",
    soy: "soja",
    sulfites: "sulfites",
    treeNut: "noix de l'arbre",
    wheat: "blé",
  },
  PT: {
    almond: "amêndoas",
    banana: "banana",
    bean: "feijões",
    capsicum: "pimentão",
    celery: "aipo",
    crustaceans: "crustáceos",
    dairy: "laticínios",
    egg: "ovo",
    fenugreek: "feno-grego",
    fish: "peixe",
    gluten: "glúten",
    kiwi: "kiwi",
    legume: "legume",
    lupin: "lupino",
    milk: "leite",
    molluscs: "moluscos",
    mustard: "mostarda",
    nut: "nozes",
    onion: "cebola",
    peanut: "amendoim",
    pea: "ervilhas",
    pepper: "pimenta",
    sesame: "gergelim",
    shellfish: "mariscos",
    soy: "soja",
    sulfites: "sulfitos",
    treeNut: "nozes de árvore",
    wheat: "trigo",
  },
};

const mapAllergies = (allergyName: Allergies) => {
  return allLanguages.reduce((acc, language) => {
    acc[language.id] = allergiesPerLanguage[language.id][allergyName];
    return acc;
  }, {} as { [language in Languages]: string });
};

export const allAllergies: { [id in Allergies]: Allergy } = {
  almond: {
    shortname: "a",
    name: mapAllergies("almond"),
    severity: 3,
  },
  banana: {
    shortname: "b",
    name: mapAllergies("banana"),
    severity: 2,
  },
  bean: {
    shortname: "be",
    name: mapAllergies("bean"),
    severity: 2,
  },
  capsicum: {
    shortname: "ca",
    name: mapAllergies("capsicum"),
    severity: 2,
  },
  celery: {
    shortname: "ce",
    name: mapAllergies("celery"),
    severity: 3,
  },
  crustaceans: {
    shortname: "cr",
    name: mapAllergies("crustaceans"),
    severity: 3,
  },
  dairy: {
    shortname: "d",
    name: mapAllergies("dairy"),
    severity: 3,
  },
  egg: {
    shortname: "e",
    name: mapAllergies("egg"),
    severity: 3,
  },
  fenugreek: {
    shortname: "fe",
    name: mapAllergies("fenugreek"),
    severity: 2,
  },
  fish: {
    shortname: "f",
    name: mapAllergies("fish"),
    severity: 3,
  },
  gluten: {
    shortname: "g",
    name: mapAllergies("gluten"),
    severity: 3,
  },
  kiwi: {
    shortname: "k",
    name: mapAllergies("kiwi"),
    severity: 2,
  },
  legume: {
    shortname: "le",
    name: mapAllergies("legume"),
    severity: 3,
  },
  lupin: {
    shortname: "l",
    name: mapAllergies("lupin"),
    severity: 3,
  },
  milk: {
    shortname: "m",
    name: mapAllergies("milk"),
    severity: 3,
  },
  molluscs: {
    shortname: "mo",
    name: mapAllergies("molluscs"),
    severity: 3,
  },
  mustard: {
    shortname: "mu",
    name: mapAllergies("mustard"),
    severity: 3,
  },
  nut: {
    shortname: "n",
    name: mapAllergies("nut"),
    severity: 3,
  },
  onion: {
    shortname: "o",
    name: mapAllergies("onion"),
    severity: 2,
  },
  peanut: {
    shortname: "p",
    name: mapAllergies("peanut"),
    severity: 3,
  },
  pea: {
    shortname: "pe",
    name: mapAllergies("pea"),
    severity: 2,
  },
  sesame: {
    shortname: "se",
    name: mapAllergies("sesame"),
    severity: 3,
  },
  shellfish: {
    shortname: "sh",
    name: mapAllergies("shellfish"),
    severity: 3,
  },
  soy: {
    shortname: "so",
    name: mapAllergies("soy"),
    severity: 3,
  },
  sulfites: {
    shortname: "su",
    name: mapAllergies("sulfites"),
    severity: 3,
  },
  pepper: {
    shortname: "pe",
    name: mapAllergies("pepper"),
    severity: 2,
  },
  treeNut: {
    shortname: "tn",
    name: mapAllergies("treeNut"),
    severity: 3,
  },
  wheat: {
    shortname: "w",
    name: mapAllergies("wheat"),
    severity: 3,
  },
};
