import { create } from 'zustand';
import { Allergies, Languages, allAllergies, Severity } from "./allergies";
import { parseURLParams } from "./utils/parseURLParams";
import { getFromPersistentStorage, storeToPersistentStorage } from "./utils/persistentStorage";

export const colorMap: { [id: string]: string[] } = {
  dark: ["#151515", "#050505"],
  light: ["#555", "#333"],
  red: ["#ff6a00", "#ee0979"],
  orange: ["#f5af19", "#f12711"],
  yellow: ["#dda200", "#aa661E"],
  green: ["#88c063", "#46ab2f"],
  blue: ["#0575E6", "#021B79"],
  purple: ["#8E2DE2", "#4A00E0"],
};

export type AllergyWithSeverity = {
  id: Allergies;
  severity: Severity;
};

export type Card = {
  name: string;
  id: string;
  color: string;
  isFromLink: boolean;
  saved: boolean;
  languages: Languages[];
  allergies: AllergyWithSeverity[];
};

type Store = {
  currentCard: Card;
  cards: Card[];
  editMode: boolean;
  editAllergiesMode: boolean;
  editLanguagesMode: boolean;
  allergiesShortNames: () => string[];
  setCard: (card: Card) => void;
  setCards: (cards: Card[]) => void;
  setAllergies: (allergies: AllergyWithSeverity[]) => void;
  setAllergySeverity: (id: Allergies, severity: Severity) => void;
  setEditMode: (mode: boolean) => void;
  setEditAllergiesMode: (mode: boolean) => void;
  setEditLanguagesMode: (mode: boolean) => void;
};

const createCard = (allergies: Allergies[], languages: Languages[], fromLink: boolean, saved: boolean): Card => {
  const allergiesWithSeverity: AllergyWithSeverity[] = allergies
    .filter((id) => id in allAllergies)
    .map((id) => ({
      id,
      severity: allAllergies[id].severity || 1,
    }));

  if (!fromLink && !saved) {
    const card = {
      name: "",
      id: Math.random().toString(16).slice(2),
      color: colorMap['dark'][0],
      isFromLink: fromLink,
      saved: true,
      languages,
      allergies: allergiesWithSeverity,
    };
    storeToPersistentStorage<Card>("currentCard", card);
    const cards = getFromPersistentStorage<Card[]>("cards", []);
    storeToPersistentStorage<Card[]>("cards", [card, ...cards]);
    return card;
  }
  return {
    name: "",
    id: saved ? Math.random().toString(16).slice(2) : "",
    color: colorMap['dark'][0],
    isFromLink: fromLink,
    saved,
    languages,
    allergies: allergiesWithSeverity,
  };
}

const { allergies, languages, hasParams } = parseURLParams();
const initialCurrentCardFromStorage = getFromPersistentStorage<Card>("currentCard", () => createCard([], [], false, false));
if (initialCurrentCardFromStorage.allergies && initialCurrentCardFromStorage.allergies.length > 0 && typeof initialCurrentCardFromStorage.allergies[0] === 'string') {
  initialCurrentCardFromStorage.allergies = (initialCurrentCardFromStorage.allergies as unknown as Allergies[]).map((id) => ({
    id,
    severity: allAllergies[id]?.severity || 1,
  }));
}

const initialCurrentCard = hasParams
  ? createCard(allergies, languages, true, false)
  : initialCurrentCardFromStorage;

const initialCardsFromStorage = getFromPersistentStorage<Card[]>("cards", []);
initialCardsFromStorage.forEach(card => {
  if (card.allergies && card.allergies.length > 0 && typeof card.allergies[0] === 'string') {
    card.allergies = (card.allergies as unknown as Allergies[]).map((id) => ({
      id,
      severity: allAllergies[id]?.severity || 1,
    }));
  }
});
const initialCards = initialCardsFromStorage;

export const useAllergy = (id: Allergies) => {
  return useStore((state) => state.currentCard.allergies.find((a) => a.id === id));
}

export const useStore = create<Store>((set, get) => ({
  currentCard: initialCurrentCard,
  cards: initialCards,
  editMode: initialCurrentCard.allergies.length === 0,
  editAllergiesMode: initialCurrentCard.allergies.length === 0,
  editLanguagesMode: initialCurrentCard.allergies.length === 0,
  allergiesShortNames: () => {
    const card = get().currentCard;
    return card.allergies.map((a) => (a.id in allAllergies ? allAllergies[a.id].shortname : a.id));
  },
  setAllergies: (allergies) => {
    const card = get().currentCard;
    const updatedCard = { ...card, allergies };
    get().setCard(updatedCard);
  },
  setAllergySeverity: (id: Allergies, severity: Severity) => {
    const card = get().currentCard;
    const updatedAllergies = card.allergies.map((a) => (a.id === id ? { ...a, severity } : a));
    const updatedCard = { ...card, allergies: updatedAllergies };
    get().setCard(updatedCard);
  },
  setCard: (card) => {
    if (!card.isFromLink) {
      const savedCard = { ...card, saved: true };
      storeToPersistentStorage<Card>("currentCard", savedCard);
      set({ currentCard: savedCard });
    } else {
      set({ currentCard: card });
    }
  },
  setCards: (cards) => {
    const savedCards = cards.map((c) => ({ ...c, saved: true, isFromLink: false }));
    storeToPersistentStorage<Card[]>("cards", savedCards);
    set({ cards: savedCards });
  },
  setEditMode: (mode) => set({ editMode: mode }),
  setEditAllergiesMode: (mode) => set({ editAllergiesMode: mode }),
  setEditLanguagesMode: (mode) => set({ editLanguagesMode: mode }),
}));