export type Languages = "DE" | "EN" | "ES" | "NL" | "NO";

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
    },
  },
};
