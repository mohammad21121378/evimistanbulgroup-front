import type { Symptom, SymptomItem } from "./types";

export function filterAndSortSymptoms(
  symptoms: Symptom[],
  searchTerm: string
): Symptom[] {
  const term = searchTerm.trim().toLowerCase();

  return symptoms
    .reduce<Symptom[]>((acc, symptom) => {
        console.log(symptom)
      const matchesSelf = symptom.name.toLowerCase().includes(term);

      const childrenArr: SymptomItem[] = Array.isArray(symptom.children)
        ? symptom.children
        : symptom.children
          ? [symptom.children]
          : [];

      const matchingChildren = childrenArr.filter(child =>
        child.name.toLowerCase().includes(term)
      );


      if (matchesSelf || matchingChildren.length > 0) {
        if (matchesSelf) {
          acc.push(symptom);
        } else {
          acc.push({
            ...symptom,
            children: matchingChildren.length > 0 ? matchingChildren : undefined,
          });
        }
      }

      return acc;
    }, [])
    .sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' }));
}
