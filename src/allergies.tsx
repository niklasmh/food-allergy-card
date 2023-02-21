export type Languages = "DE" | "EN" | "ES" | "NL" | "NO";

export const allLanguages: { id: Languages; longName: string }[] = [
  { id: "DE", longName: "deutsch" },
  { id: "EN", longName: "english" },
  { id: "ES", longName: "español" },
  { id: "NO", longName: "norsk" },
  { id: "NL", longName: "dutch" },
];

export type Allergy = {
  shortname: string;
  name: {
    [LanguageCode in Languages]: string;
  };
  sign?: any;
};

export type Allergies =
  | "almond"
  | "banana"
  | "celery"
  | "crustaceans"
  | "dairy"
  | "egg"
  | "fish"
  | "gluten"
  | "kiwi"
  | "lupin"
  | "milk"
  | "molluscs"
  | "mustard"
  | "nut"
  | "peanut"
  | "sesame"
  | "shellfish"
  | "soy"
  | "sulfites"
  | "treeNut"
  | "wheat";

export const allergies: { [id in Allergies]: Allergy } = {
  almond: {
    shortname: "a",
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
  celery: {
    shortname: "ce",
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
    name: {
      DE: "ei",
      EN: "egg",
      ES: "huevo",
      NL: "ei",
      NO: "egg",
    },
  },
  fish: {
    shortname: "f",
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
  lupin: {
    shortname: "l",
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
    name: {
      DE: "nüsse",
      EN: "nuts",
      ES: "nueces",
      NL: "noten",
      NO: "nøtter",
    },
  },
  peanut: {
    shortname: "p",
    name: {
      DE: "erdnuss",
      EN: "peanuts",
      ES: "cacahuates",
      NL: "pinda",
      NO: "peanøtter",
    },
  },
  sesame: {
    shortname: "se",
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
    name: {
      DE: "sulfite",
      EN: "sulfites",
      ES: "sulfitos",
      NL: "sulfieten",
      NO: "sulfitter",
    },
  },
  treeNut: {
    shortname: "tn",
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
    name: {
      DE: "weizen",
      EN: "wheat",
      ES: "trigo",
      NL: "tarwe",
      NO: "hvete",
    },
  },
};
