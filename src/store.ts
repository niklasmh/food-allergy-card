import { atom, selector } from "recoil";
import { Allergies, Languages, allAllergies } from "./allergies";
import { parseURLParams } from "./utils/parseURLParams";
import { getFromPersistentStorage, storeToPersistentStorage } from "./utils/persistentStorage";

export type Card = {
  name: string;
  id: string;
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

export const cardsState = atom<Card[]>({
  key: "cards",
  default: getFromPersistentStorage<Card[]>("cards", []),
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