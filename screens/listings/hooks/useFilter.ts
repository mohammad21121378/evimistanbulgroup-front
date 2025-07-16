import { useState } from "react";

export function useFilter() {

    const priceRangeValue = {
        min: 0,
        max: 5000000
    }
    
    const [priceRange, setPriceRange] = useState<[number, number]>([priceRangeValue.min, priceRangeValue.max]);
    const [locationsSelected, setLocationsSelected] = useState<string[]>([]);
    const [propertyTypesSelected, setPropertyTypesSelected] = useState<string[]>([]);
    const [featureSelected, setFeatureSelected] = useState<string[]>([]);
    const [bedroomsSelected, setBedroomsSelected] = useState<string[]>([]);
    const [bathroomsSelected, setBathroomsSelected] = useState<string[]>([]);

    return {
        priceRange,
        setPriceRange,
        priceRangeValue,
        locationsSelected,
        setLocationsSelected,
        propertyTypesSelected,
        setPropertyTypesSelected,
        featureSelected,
        setFeatureSelected,
        bedroomsSelected,
        setBedroomsSelected,
        bathroomsSelected,
        setBathroomsSelected,

    };
}