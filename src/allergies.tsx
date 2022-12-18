export type Languages = "DE" | "EN" | "ES" | "NO";

export const allLanguages: { id: Languages; longName: string }[] = [
  { id: "DE", longName: "deutsch" },
  { id: "EN", longName: "english" },
  { id: "ES", longName: "español" },
  { id: "NO", longName: "norsk" },
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
      NO: "mandler",
    },
  },
  banana: {
    shortname: "b",
    name: {
      DE: "banane",
      EN: "banana",
      ES: "plátano",
      NO: "banan",
    },
  },
  celery: {
    shortname: "ce",
    name: {
      DE: "sellerie",
      EN: "celery",
      ES: "apio",
      NO: "selleri",
    },
  },
  crustaceans: {
    shortname: "cr",
    name: {
      DE: "krebstiere",
      EN: "crustaceans",
      ES: "crustáceos",
      NO: "krepsdyr",
    },
  },
  dairy: {
    shortname: "d",
    name: {
      DE: "molkerei",
      EN: "dairy",
      ES: "lácteos",
      NO: "meieri",
    },
  },
  egg: {
    shortname: "e",
    name: {
      DE: "ei",
      EN: "egg",
      ES: "huevo",
      NO: "egg",
    },
  },
  fish: {
    shortname: "f",
    name: {
      DE: "fische",
      EN: "fish",
      ES: "pescado",
      NO: "fisk",
    },
  },
  gluten: {
    shortname: "g",
    name: {
      DE: "gluten",
      EN: "gluten",
      ES: "gluten",
      NO: "gluten",
    },
  },
  kiwi: {
    shortname: "k",
    name: {
      DE: "kiwi",
      EN: "kiwi",
      ES: "kiwi",
      NO: "kiwi",
    },
  },
  lupin: {
    shortname: "l",
    name: {
      DE: "lupine",
      EN: "lupin",
      ES: "lupino",
      NO: "lupin",
    },
  },
  milk: {
    shortname: "m",
    name: {
      DE: "milch",
      EN: "milk",
      ES: "leche",
      NO: "melk",
    },
  },
  molluscs: {
    shortname: "mo",
    name: {
      DE: "weichtiere",
      EN: "molluscs",
      ES: "moluscos",
      NO: "bløtdyr",
    },
  },
  mustard: {
    shortname: "mu",
    name: {
      DE: "senf",
      EN: "mustard",
      ES: "mostaza",
      NO: "sennep",
    },
  },
  nut: {
    shortname: "n",
    name: {
      DE: "nüsse",
      EN: "nuts",
      ES: "nueces",
      NO: "nøtter",
    },
  },
  peanut: {
    shortname: "p",
    name: {
      DE: "erdnuss",
      EN: "peanuts",
      ES: "cacahuates",
      NO: "peanøtter",
    },
  },
  sesame: {
    shortname: "se",
    name: {
      DE: "sesame",
      EN: "sesame",
      ES: "sésamo",
      NO: "sesamfrø",
    },
  },
  shellfish: {
    shortname: "sh",
    name: {
      DE: "schaltier",
      EN: "shellfish",
      ES: "mariscos",
      NO: "skalldyr",
    },
  },
  soy: {
    shortname: "so",
    name: {
      DE: "soja",
      EN: "soy",
      ES: "soja",
      NO: "soya",
    },
  },
  sulfites: {
    shortname: "su",
    name: {
      DE: "sulfite",
      EN: "sulfites",
      ES: "sulfitos",
      NO: "sulfitter",
    },
  },
  treeNut: {
    shortname: "tn",
    name: {
      DE: "baumnuss",
      EN: "tree nuts",
      ES: "frutos secos",
      NO: "trenøtter",
    },
  },
  wheat: {
    shortname: "w",
    name: {
      DE: "weizen",
      EN: "wheat",
      ES: "trigo",
      NO: "hvete",
    },
  },
};
