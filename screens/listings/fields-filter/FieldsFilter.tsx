
"use client";

import React from "react";
import SymptomSelector from "@/components/symptom-selector/symptom-selector";
import DropdownWithChildren from "@/components/dropdown-with-children/DropdownWithChildren";
import RangeSlider from "@/components/range-slider/RangeSlider";
import { iconsforFilters } from "../constants";
import { featureItems, propertyTypes, bedrooms as bedroomsOptions, bathrooms as bathroomsOptions } from "../constants";
import originalTurkiye from "@/constants/turkiye.json";

const turkiye = originalTurkiye.map((province) => ({
    ...province,
    children: province.districts,
}));

type Props = {
    priceRange: [number, number];
    setPriceRange: React.Dispatch<React.SetStateAction<[number, number]>>;
    priceRangeValue: { min: number; max: number };

    locationsSelected: string[];
    setLocationsSelected: React.Dispatch<React.SetStateAction<string[]>>;

    propertyTypesSelected: string[];
    setPropertyTypesSelected: React.Dispatch<React.SetStateAction<string[]>>;

    featureSelected: string[];
    setFeatureSelected: React.Dispatch<React.SetStateAction<string[]>>;

    bedroomsSelected: string[];
    setBedroomsSelected: React.Dispatch<React.SetStateAction<string[]>>;

    bathroomsSelected: string[];
    setBathroomsSelected: React.Dispatch<React.SetStateAction<string[]>>;

    hasSvgItems?: boolean
};

export default function FieldsFilter({
    priceRange,
    setPriceRange,
    priceRangeValue,
    setLocationsSelected,
    setPropertyTypesSelected,
    setFeatureSelected,
    setBedroomsSelected,
    setBathroomsSelected,
    hasSvgItems=true
}: Props) {
    return (
        <>
            <div>
                <SymptomSelector
                    title={"Location"}
                    svgtitle={iconsforFilters["Location"]}
                    symptoms={turkiye}
                    svgArrow={hasSvgItems}
                    allowForSelectAllChildren
                    setSelected={setLocationsSelected}
                />
            </div>

            <div>
                <SymptomSelector
                    title={"Type of Property"}
                    svgtitle={iconsforFilters["Type of Property"]}
                    symptoms={propertyTypes}
                    svgArrow={hasSvgItems}
                    allowForSelectAllChildren={false}
                    multiple={false}
                    setSelected={setPropertyTypesSelected}
                />
            </div>

            <div>
                <SymptomSelector
                    title={"Special Features"}
                    svgtitle={iconsforFilters["Special Features"]}
                    symptoms={featureItems}
                    svgArrow={hasSvgItems}
                    allowForSelectAllChildren={false}
                    parentIsLabel
                    multiple={false}
                    setSelected={setFeatureSelected}
                />
            </div>

            <div>

                <DropdownWithChildren
                    title="Price Range"
                    svg={iconsforFilters["Price Range"]}
                    svgArrow={hasSvgItems}
                >
                    <RangeSlider
                        label=""
                        min={priceRangeValue.min}
                        max={priceRangeValue.max}
                        value={priceRange}
                        onChange={setPriceRange}
                        unit="$"
                        locale="tr"
                    />
                </DropdownWithChildren>
            </div>

            <div>

                <SymptomSelector
                    title={"Bedrooms"}
                    svgtitle={iconsforFilters["Bedrooms"]}
                    symptoms={bedroomsOptions}
                    svgArrow={hasSvgItems}
                    allowForSelectAllChildren={false}
                    multiple={false}
                    setSelected={setBedroomsSelected}
                />
            </div>

            <div>
                <SymptomSelector
                    title={"Bathrooms"}
                    svgtitle={iconsforFilters["Bathrooms"]}
                    symptoms={bathroomsOptions}
                    svgArrow={hasSvgItems}
                    allowForSelectAllChildren={false}
                    multiple={false}
                    setSelected={setBathroomsSelected}
                />
            </div>

        </>
    );
}
