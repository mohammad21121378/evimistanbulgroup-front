import { Listings } from "@/constants/mock";

export const priceRangeValue = {
    min: 0,
    max: 10000000
};

export const initialFilterState = {
    priceRange: [priceRangeValue.min, priceRangeValue.max] as [number, number],
    locationsSelected: [] as string[],
    propertyTypesSelected: [] as string[],
    featureSelected: [] as string[],
    bedroomsSelected: [] as string[],
    bathroomsSelected: [] as string[],
    sortOption: "newest",
    properties: Listings.flatMap((listingCategory) => listingCategory.items),
    currentPage: 1
};