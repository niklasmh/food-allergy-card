import { atom, selector } from "recoil";
import { Allergies, Languages, allAllergies } from "./allergies";
import { parseURLParams } from "./utils/parseURLParams";
import { getFromPersistentStorage, storeToPersistentStorage } from "./utils/persistentStorage";

export type Color = "red" | "green" | "blue" | "yellow" | "orange" | "purple" | "dark" | "light";
export type ColorMap = { [key in Color]: string[] };
export const allColors: { id: Color; colors: string[] }[] = [
  { id: "dark", colors: ["#151515", "#050505"] },
  { id: "light", colors: ["#555", "#333"] },
  { id: "red", colors: ["#ff6a00", "#ee0979"] },
  { id: "orange", colors: ["#f5af19", "#f12711"] },
  { id: "yellow", colors: ["#dda200", "#aa661E"] },
  { id: "green", colors: ["#88c063", "#46ab2f"] },
  { id: "blue", colors: ["#0575E6", "#021B79"] },
  { id: "purple", colors: ["#8E2DE2", "#4A00E0"] },
];
export const colorMap: { [id in Color]: string[] } = allColors.reduce((acc, c) => ({ ...acc, [c.id]: c.colors }), {
  red: [],
  green: [],
  blue: [],
  yellow: [],
  orange: [],
  purple: [],
  dark: [],
  light: [],
});

export type Card = {
  name: string;
  id: string;
  color: Color;
  isFromLink: boolean;
  saved: boolean;
  languages: Languages[];
  allergies: Allergies[];
};

function createCard(allergies: Allergies[], languages: Languages[], fromLink: boolean, saved: boolean): Card {
  if (!fromLink && !saved) {
    const card = {
      name: "",
      id: Math.random().toString(16).slice(2),
      color: "dark" as Color,
      isFromLink: fromLink,
      saved: true,
      languages,
      allergies,
    };
    storeToPersistentStorage<Card>("currentCard", card);
    const cards = getFromPersistentStorage<Card[]>("cards", []);
    storeToPersistentStorage<Card[]>("cards", [card, ...cards]);
    return card;
  }
  return {
    name: "",
    id: saved ? Math.random().toString(16).slice(2) : "",
    color: "dark" as Color,
    isFromLink: fromLink,
    saved,
    languages,
    allergies,
  };
}

const { allergies, languages, hasParams } = parseURLParams();

let card: Card = hasParams
  ? createCard(allergies, languages, true, false)
  : getFromPersistentStorage<Card>("currentCard", () => createCard([], [], false, false));

export const currentCardState = atom<Card>({
  key: "currentCard",
  default: card,
  effects: [
    ({ onSet, setSelf }) => {
      onSet((card) => {
        if (!card.isFromLink) {
          const savedCard = { ...card, saved: true };
          storeToPersistentStorage<Card>("currentCard", savedCard);
          setSelf(savedCard);
        }
      });
    },
  ],
});

const cards = getFromPersistentStorage<Card[]>("cards", []);

export const cardsState = atom<Card[]>({
  key: "cards",
  default: cards?.length ? cards : [card],
  effects: [
    ({ onSet, setSelf }) => {
      onSet((cards) => {
        const savedCards = cards.map((c) => ({ ...c, saved: true, isFromLink: false }));
        storeToPersistentStorage<Card[]>("cards", savedCards);
        setSelf(savedCards);
      });
    },
  ],
});

export const allergiesShortNamesState = selector({
  key: "allergiesShortNames",
  get: ({ get }) => {
    const card = get(currentCardState);
    return card.allergies.map((a: Allergies) => (a in allAllergies ? allAllergies[a].shortname : a));
  },
});

export const editState = atom<boolean>({
  key: "edit",
  default: card.allergies.length === 0,
});

export const editAllergiesState = atom<boolean>({
  key: "editAllergies",
  default: card.allergies.length === 0,
});

export const editLanguagesState = atom<boolean>({
  key: "editLanguages",
  default: card.allergies.length === 0,
});
