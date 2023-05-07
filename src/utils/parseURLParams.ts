import { Allergies, Languages, allAllergies } from "../allergies";

export function parseURLParams(): { allergies: Allergies[]; languages: Languages[]; hasParams: boolean } {
  const params = new URLSearchParams(window.location.search);
  const paramA = params
    .get("a")
    ?.split(",")
    .map((s) => (Object.entries(allAllergies).find((a) => a[1].shortname === s) ?? [s])[0])
    .join(",");
  const paramL = params.get("l");
  const hasParams = !!(paramA || paramL);

  if (hasParams) {
    const allergies = (paramA ?? "nut").toLowerCase().split(",") as Allergies[];
    const languages = (paramL ?? "EN").toUpperCase().split(",") as Languages[];
    return { allergies, languages, hasParams };
  }

  return { allergies: [], languages: [], hasParams };
}
