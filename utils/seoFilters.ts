import { SymptomItem } from "@/components/symptom-selector/types";
import { priceRangeValue } from "@/screens/listings/filter.constants";
import { parseGroupedSelection } from "./parseGroupedSelection";
import { buildGroupedSelection } from "./buildGroupedSelection";

export type SeoFilters = {
  bedroomsSelected?: string[];
  bathroomsSelected?: string[];
  featureSelected?: string[];
  propertyTypesSelected?: string[];
  sortOption?: string;
  currentPage?: number;
  locationsSelected?: string[];
  priceRange?: [number, number]
};

export function decodeSlugToFilters(slugSegments: string[], locationsDB?:any[], featureItemsDB?:any[], propertyTypesDB?:any[] ): SeoFilters {
  
  
  const filters: SeoFilters = {};

  slugSegments?.forEach(segment => {

    if (segment.startsWith("beds-")) {
      const parts = segment.split("-");

      if (parts.length === 2) {
        const [_, val] = parts;
        filters.bedroomsSelected = [val];
      }
    }

    else if (segment.startsWith("baths-")) {
      const parts = segment.split("-");
      if (parts.length === 2) {
        const [_, val] = parts;
        filters.bathroomsSelected = [val];
      }
    }

    else if (segment.startsWith("price-")) {
      const parts = segment.split("-");
      if (parts.length === 3) {
        const [, min, max] = parts;
        filters.priceRange = [
          min === "na" ? 0 : parseInt(min, 10),
          max === "na" ? priceRangeValue.max : parseInt(max, 10),
        ];
      }
    }

    else if (segment.startsWith("loc-")) {
      filters.locationsSelected = parseGroupedSelection(segment.replace("loc-", ""), locationsDB);
    }
   
    else if (segment.startsWith("feat-")) {
      filters.featureSelected = parseGroupedSelection(segment.replace("feat-", ""), featureItemsDB);
    }
   
    else if (segment.startsWith("type-")) {
      filters.propertyTypesSelected = parseGroupedSelection(segment.replace("type-", ""), propertyTypesDB);
    }
  });

  return filters;
}


// export function decodeSlugToFilters(
//   slugSegments: string[],
//   locationsDB?: ItemWithIdName[],
//   featureItemsDB?: ItemWithIdName[],
//   propertyTypesDB?: ItemWithIdName[]
// ): SeoFilters {
//   const filters: SeoFilters = {};

//   slugSegments.forEach(segment => {
//     if (segment.startsWith("beds-")) {
//       const parts = segment.split("-");
//       if (parts.length === 2) {
//         const [_, val] = parts;
//         filters.bedroomsSelected = [val];
//       }
//     } else if (segment.startsWith("baths-")) {
//       const parts = segment.split("-");
//       if (parts.length === 2) {
//         const [_, val] = parts;
//         filters.bathroomsSelected = [val];
//       }
//     } else if (segment.startsWith("price-")) {
//       const parts = segment.split("-");
//       if (parts.length === 3) {
//         const [, min, max] = parts;
//         filters.priceRange = [
//           min === "na" ? priceRangeValue.min : parseInt(min, 10),
//           max === "na" ? priceRangeValue.max : parseInt(max, 10)
//         ];
//       }
//     } else if (segment.startsWith("loc-") && locationsDB) {
//       filters.locationsSelected = parseGroupedSelection(
//         segment.replace("loc-", ""),
//         locationsDB
//       );
//     } else if (segment.startsWith("feat-") && featureItemsDB) {
//       filters.featureSelected = parseGroupedSelection(
//         segment.replace("feat-", ""),
//         featureItemsDB
//       );
//     } else if (segment.startsWith("type-") && propertyTypesDB) {
//       filters.propertyTypesSelected = parseGroupedSelection(
//         segment.replace("type-", ""),
//         propertyTypesDB
//       );
//     } else if (segment.startsWith("sortby-")) {
//       filters.sortOption = segment.replace("sortby-", "");
//     } else if (/^p\d+$/.test(segment)) {
//       const pageNum = parseInt(segment.slice(1), 10);
//       if (!isNaN(pageNum)) {
//         filters.currentPage = pageNum;
//       }
//     }
//   });

//   return filters;
// }

// --- نسخه‌ی به‌روز‌شده encodeFiltersToSlug با گروه‌بندی معکوس ---

export function encodeFiltersToSlug(
  filters: SeoFilters,
  types: any[],
  locationsDB?: any[],
  featureItemsDB?: any[],
  propertyTypesDB?: any[]
): string[] {
  const segments: string[] = [];

  if (filters.locationsSelected && filters.locationsSelected.length && locationsDB) {
    const locPart = buildGroupedSelection(filters.locationsSelected, locationsDB);
    if (locPart) segments.push(`loc-${locPart.toLowerCase()}`);
  }

  if (filters.bedroomsSelected && filters.bedroomsSelected.length) {
    segments.push(`beds-${filters.bedroomsSelected[0]}`);
  }

  if (filters.bathroomsSelected && filters.bathroomsSelected.length) {
    segments.push(`baths-${filters.bathroomsSelected[0]}`);
  }

  if (filters.featureSelected && filters.featureSelected.length && featureItemsDB) {
    const featPart = buildGroupedSelection(filters.featureSelected, featureItemsDB);
    if (featPart) segments.push(`feat-${featPart.toLowerCase()}`);
  }

  if (
    filters.propertyTypesSelected &&
    filters.propertyTypesSelected.length &&
    propertyTypesDB
  ) {
    const typePart = buildGroupedSelection(
      filters.propertyTypesSelected,
      propertyTypesDB
    );
    if (typePart) segments.push(`type-${typePart.toLowerCase()}`);
  } else if (filters.propertyTypesSelected && filters.propertyTypesSelected.length) {
    const typeId = filters.propertyTypesSelected[0];
    const typeObj = types.find(
      (val: any) => String(val.id) === String(typeId)
    );
    const fallback = typeObj?.slug ?? String(typeId);
    segments.push(`type-${fallback}`);
  }

  // if (filters.sortOption && filters.sortOption !== "newest") {
  //   segments.push(`sortby-${filters.sortOption.toLowerCase()}`);
  // }

  if (
    filters.priceRange &&
    (filters.priceRange[0] !== priceRangeValue.min ||
      filters.priceRange[1] !== priceRangeValue.max)
  ) {
    segments.push(
      `price-${filters.priceRange[0] === 0 ? "na" : filters.priceRange[0]}-${
        filters.priceRange[1] === priceRangeValue.max ? "na" : filters.priceRange[1]
      }`
    );
  }

  if (filters.currentPage && filters.currentPage > 1) {
    segments.push(`p${filters.currentPage}`);
  }

  return segments;
}