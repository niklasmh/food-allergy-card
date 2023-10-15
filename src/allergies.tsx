export type Languages = "DE" | "EN" | "ES" | "NL" | "NO" | "FR" | "PT";

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

export type Allergy = {
  shortname: string;
  important?: boolean;
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

export const allAllergies: { [id in Allergies]: Allergy } = {
  almond: {
    shortname: "a",
    important: true,
    name: {
      DE: "mandeln",
      EN: "almonds",
      ES: "almendra",
      NL: "amandelen",
      NO: "mandler",
      FR: "amandes",
      PT: "amêndoas",
    },
  },
  banana: {
    shortname: "b",
    name: {
      DE: "banane",
      EN: "banana",
      ES: "plátano",
      NL: "banaan",
      NO: "banan",
      FR: "banane",
      PT: "banana",
    },
  },
  bean: {
    shortname: "be",
    name: {
      DE: "bohnen",
      EN: "beans",
      ES: "frijoles",
      NL: "bonen",
      NO: "bønner",
      FR: "haricots",
      PT: "feijões",
    },
  },
  capsicum: {
    shortname: "ca",
    name: {
      DE: "paprika",
      EN: "capsicum",
      ES: "pimiento",
      NL: "paprika",
      NO: "paprika",
      FR: "poivron",
      PT: "pimentão",
    },
  },
  celery: {
    shortname: "ce",
    important: true,
    name: {
      DE: "sellerie",
      EN: "celery",
      ES: "apio",
      NL: "selderij",
      NO: "selleri",
      FR: "céleri",
      PT: "aipo",
    },
  },
  crustaceans: {
    shortname: "cr",
    important: true,
    name: {
      DE: "krebstiere",
      EN: "crustaceans",
      ES: "crustáceos",
      NL: "schaaldier",
      NO: "krepsdyr",
      FR: "crustacés",
      PT: "crustáceos",
    },
  },
  dairy: {
    shortname: "d",
    important: true,
    name: {
      DE: "molkerei",
      EN: "dairy",
      ES: "lácteos",
      NL: "zuivel",
      NO: "meieri",
      FR: "produits laitiers",
      PT: "laticínios",
    },
  },
  egg: {
    shortname: "e",
    important: true,
    name: {
      DE: "ei",
      EN: "egg",
      ES: "huevo",
      NL: "ei",
      NO: "egg",
      FR: "oeuf",
      PT: "ovo",
    },
  },
  fenugreek: {
    shortname: "fe",
    name: {
      DE: "bockshornklee",
      EN: "fenugreek",
      ES: "fenogreco",
      NL: "fenegriek",
      NO: "bukkehornkløver",
      FR: "fenugrec",
      PT: "feno-grego",
    },
  },
  fish: {
    shortname: "f",
    important: true,
    name: {
      DE: "fische",
      EN: "fish",
      ES: "pescado",
      NL: "vis",
      NO: "fisk",
      FR: "poisson",
      PT: "peixe",
    },
  },
  gluten: {
    shortname: "g",
    important: true,
    name: {
      DE: "gluten",
      EN: "gluten",
      ES: "gluten",
      NL: "gluten",
      NO: "gluten",
      FR: "gluten",
      PT: "glúten",
    },
  },
  kiwi: {
    shortname: "k",
    name: {
      DE: "kiwi",
      EN: "kiwi",
      ES: "kiwi",
      NL: "kiwi",
      NO: "kiwi",
      FR: "kiwi",
      PT: "kiwi",
    },
  },
  legume: {
    shortname: "le",
    important: true,
    name: {
      DE: "hülsenfrucht",
      EN: "legume",
      ES: "legumbre",
      NL: "peulvrucht",
      NO: "belgfrukt",
      FR: "légumineuse",
      PT: "legume",
    },
  },
  lupin: {
    shortname: "l",
    important: true,
    name: {
      DE: "lupine",
      EN: "lupin",
      ES: "lupino",
      NL: "wolvin",
      NO: "lupin",
      FR: "lupin",
      PT: "lupino",
    },
  },
  milk: {
    shortname: "m",
    important: true,
    name: {
      DE: "milch",
      EN: "milk",
      ES: "leche",
      NL: "melk",
      NO: "melk",
      FR: "lait",
      PT: "leite",
    },
  },
  molluscs: {
    shortname: "mo",
    important: true,
    name: {
      DE: "weichtiere",
      EN: "molluscs",
      ES: "moluscos",
      NL: "weekdieren",
      NO: "bløtdyr",
      FR: "mollusques",
      PT: "moluscos",
    },
  },
  mustard: {
    shortname: "mu",
    important: true,
    name: {
      DE: "senf",
      EN: "mustard",
      ES: "mostaza",
      NL: "mosterd",
      NO: "sennep",
      FR: "moutarde",
      PT: "mostarda",
    },
  },
  nut: {
    shortname: "n",
    important: true,
    name: {
      DE: "nüsse",
      EN: "nuts",
      ES: "nueces",
      NL: "noten",
      NO: "nøtter",
      FR: "noix",
      PT: "nozes",
    },
  },
  onion: {
    shortname: "o",
    name: {
      DE: "zwiebel",
      EN: "onion",
      ES: "cebolla",
      NL: "ui",
      NO: "løk",
      FR: "oignon",
      PT: "cebola",
    },
  },
  peanut: {
    shortname: "p",
    important: true,
    name: {
      DE: "erdnuss",
      EN: "peanuts",
      ES: "cacahuates",
      NL: "pinda",
      NO: "peanøtter",
      FR: "cacahuètes",
      PT: "amendoim",
    },
  },
  pea: {
    shortname: "pe",
    name: {
      DE: "erbsen",
      EN: "peas",
      ES: "guisantes",
      NL: "erwten",
      NO: "erter",
      FR: "pois",
      PT: "ervilhas",
    },
  },
  sesame: {
    shortname: "se",
    important: true,
    name: {
      DE: "sesame",
      EN: "sesame",
      ES: "sésamo",
      NL: "sesam zaden",
      NO: "sesamfrø",
      FR: "sésame",
      PT: "gergelim",
    },
  },
  shellfish: {
    shortname: "sh",
    important: true,
    name: {
      DE: "schaltier",
      EN: "shellfish",
      ES: "mariscos",
      NL: "schelpdieren",
      NO: "skalldyr",
      FR: "fruits de mer",
      PT: "mariscos",
    },
  },
  soy: {
    shortname: "so",
    important: true,
    name: {
      DE: "soja",
      EN: "soy",
      ES: "soja",
      NL: "soja",
      NO: "soya",
      FR: "soja",
      PT: "soja",
    },
  },
  sulfites: {
    shortname: "su",
    important: true,
    name: {
      DE: "sulfite",
      EN: "sulfites",
      ES: "sulfitos",
      NL: "sulfieten",
      NO: "sulfitter",
      FR: "sulfites",
      PT: "sulfitos",
    },
  },
  pepper: {
    shortname: "pe",
    name: {
      DE: "pfeffer",
      EN: "pepper",
      ES: "pimienta",
      NL: "peper",
      NO: "pepper",
      FR: "poivre",
      PT: "pimenta",
    },
  },
  treeNut: {
    shortname: "tn",
    important: true,
    name: {
      DE: "baumnuss",
      EN: "tree nuts",
      ES: "frutos secos",
      NL: "boom noten",
      NO: "trenøtter",
      FR: "noix de l'arbre",
      PT: "nozes de árvore",
    },
  },
  wheat: {
    shortname: "w",
    important: true,
    name: {
      DE: "weizen",
      EN: "wheat",
      ES: "trigo",
      NL: "tarwe",
      NO: "hvete",
      FR: "blé",
      PT: "trigo",
    },
  },
};
