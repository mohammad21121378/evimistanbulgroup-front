
"use client";

import React from "react";
import SymptomSelector from "@/components/symptom-selector/symptom-selector";
import DropdownWithChildren from "@/components/dropdown-with-children/DropdownWithChildren";
import RangeSlider from "@/components/range-slider/RangeSlider";
import { iconsforFilters } from "../constants";
import { featureItems, propertyTypes, bedrooms as bedroomsOptions, bathrooms as bathroomsOptions } from "../constants";
import originalTurkiye from "@/constants/turkiye.json";
import { FilterProps } from "../types";

const turkiye = originalTurkiye.map((province) => ({
    ...province,
    children: province.districts,
}));

interface Props extends FilterProps {
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
    locationsSelected,
    propertyTypesSelected,
    featureSelected,
    bedroomsSelected,
    bathroomsSelected,
    hasSvgItems=true
}: Props) {
    return (
        <>
            <div className="">
                <SymptomSelector
                    title={"Location"}
                    svgtitle={iconsforFilters["Location"]}
                    symptoms={turkiye}
                    svgArrow={hasSvgItems}
                    allowForSelectAllChildren
                    setSelected={setLocationsSelected}
                    selected={locationsSelected}
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
                    selected={propertyTypesSelected}
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
                    selected={featureSelected}
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
                    selected={bedroomsSelected}
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
                    selected={bathroomsSelected}
                />
            </div>

        </>
    );
}
