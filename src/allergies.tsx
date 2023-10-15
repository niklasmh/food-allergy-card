export type Languages = "DE" | "EN" | "ES" | "NL" | "NO" | "FR" | "PT" | "ZN";

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
  {
    id: "ZN",
    longName: "中文",
    icon: "🇨🇳",
    translations: {
      allergies: "过敏",
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
  ZN: {
    almond: "杏仁",
    banana: "香蕉",
    bean: "豆子",
    capsicum: "辣椒",
    celery: "芹菜",
    crustaceans: "甲壳类",
    dairy: "乳制品",
    egg: "鸡蛋",
    fenugreek: "葫芦巴",
    fish: "鱼",
    gluten: "麸质",
    kiwi: "猕猴桃",
    legume: "豆类",
    lupin: "羽扇豆",
    milk: "牛奶",
    molluscs: "软体动物",
    mustard: "芥末",
    nut: "坚果",
    onion: "洋葱",
    peanut: "花生",
    pea: "豌豆",
    pepper: "胡椒",
    sesame: "芝麻",
    shellfish: "贝类",
    soy: "大豆",
    sulfites: "亚硫酸盐",
    treeNut: "坚果",
    wheat: "小麦",
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
    important: true,
    name: mapAllergies("almond"),
  },
  banana: {
    shortname: "b",
    name: mapAllergies("banana"),
  },
  bean: {
    shortname: "be",
    name: mapAllergies("bean"),
  },
  capsicum: {
    shortname: "ca",
    name: mapAllergies("capsicum"),
  },
  celery: {
    shortname: "ce",
    important: true,
    name: mapAllergies("celery"),
  },
  crustaceans: {
    shortname: "cr",
    important: true,
    name: mapAllergies("crustaceans"),
  },
  dairy: {
    shortname: "d",
    important: true,
    name: mapAllergies("dairy"),
  },
  egg: {
    shortname: "e",
    important: true,
    name: mapAllergies("egg"),
  },
  fenugreek: {
    shortname: "fe",
    name: mapAllergies("fenugreek"),
  },
  fish: {
    shortname: "f",
    important: true,
    name: mapAllergies("fish"),
  },
  gluten: {
    shortname: "g",
    important: true,
    name: mapAllergies("gluten"),
  },
  kiwi: {
    shortname: "k",
    name: mapAllergies("kiwi"),
  },
  legume: {
    shortname: "le",
    important: true,
    name: mapAllergies("legume"),
  },
  lupin: {
    shortname: "l",
    important: true,
    name: mapAllergies("lupin"),
  },
  milk: {
    shortname: "m",
    important: true,
    name: mapAllergies("milk"),
  },
  molluscs: {
    shortname: "mo",
    important: true,
    name: mapAllergies("molluscs"),
  },
  mustard: {
    shortname: "mu",
    important: true,
    name: mapAllergies("mustard"),
  },
  nut: {
    shortname: "n",
    important: true,
    name: mapAllergies("nut"),
  },
  onion: {
    shortname: "o",
    name: mapAllergies("onion"),
  },
  peanut: {
    shortname: "p",
    important: true,
    name: mapAllergies("peanut"),
  },
  pea: {
    shortname: "pe",
    name: mapAllergies("pea"),
  },
  sesame: {
    shortname: "se",
    important: true,
    name: mapAllergies("sesame"),
  },
  shellfish: {
    shortname: "sh",
    important: true,
    name: mapAllergies("shellfish"),
  },
  soy: {
    shortname: "so",
    important: true,
    name: mapAllergies("soy"),
  },
  sulfites: {
    shortname: "su",
    important: true,
    name: mapAllergies("sulfites"),
  },
  pepper: {
    shortname: "pe",
    name: mapAllergies("pepper"),
  },
  treeNut: {
    shortname: "tn",
    important: true,
    name: mapAllergies("treeNut"),
  },
  wheat: {
    shortname: "w",
    important: true,
    name: mapAllergies("wheat"),
  },
};
