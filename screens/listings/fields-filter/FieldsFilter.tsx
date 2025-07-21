
"use client";

import React, { useState } from "react";
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
    featureItemsDB,
    locationsDB,
    propertyTypesDB,
    hasSvgItems = true
}: Props) {

    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const handleToggle = (key: string) => {
        setOpenDropdown(prev => (prev === key ? null : key));
    };
    return (
        <>
            <div className="">
                <SymptomSelector
                    title={"Location"}
                    svgtitle={iconsforFilters["Location"]}
                    open={openDropdown === "Location"}
                    onToggle={() => handleToggle("Location")}
                    symptoms={locationsDB}
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
                    open={openDropdown === "Type of Property"}
                    onToggle={() => handleToggle("Type of Property")}
                    symptoms={propertyTypesDB}
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
                    open={openDropdown === "Special Features"}
                    onToggle={() => handleToggle("Special Features")}
                    symptoms={featureItemsDB}
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
                    open={openDropdown === "Price Range"}
                    onToggle={() => handleToggle("Price Range")}
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
                    open={openDropdown === "Bedrooms"}
                    onToggle={() => handleToggle("Bedrooms")}
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
                    open={openDropdown === "Bathrooms"}
                    onToggle={() => handleToggle("Bathrooms")}
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
