
// "use client";

// import React, { useState } from "react";
// import SymptomSelector from "@/components/symptom-selector/symptom-selector";
// import DropdownWithChildren from "@/components/dropdown-with-children/DropdownWithChildren";
// import RangeSlider from "@/components/range-slider/RangeSlider";
// import { iconsforFilters } from "../constants";
// import { featureItems, propertyTypes, bedrooms as bedroomsOptions, bathrooms as bathroomsOptions } from "../constants";
// import originalTurkiye from "@/constants/turkiye.json";
// import { FilterProps } from "../types";

// const turkiye = originalTurkiye.map((province) => ({
//     ...province,
//     children: province.districts,
// }));

// interface Props extends FilterProps {
//     hasSvgItems?: boolean
// };

// export default function FieldsFilter({
//     priceRange,
//     setPriceRange,
//     priceRangeValue,
//     setLocationsSelected,
//     setPropertyTypesSelected,
//     setFeatureSelected,
//     setBedroomsSelected,
//     setBathroomsSelected,
//     locationsSelected,
//     propertyTypesSelected,
//     featureSelected,
//     bedroomsSelected,
//     bathroomsSelected,
//     featureItemsDB,
//     locationsDB,
//     propertyTypesDB,
//     hasSvgItems = true
// }: Props) {

//     const [openDropdown, setOpenDropdown] = useState<string | null>(null);

//     const handleToggle = (key: string) => {
//         setOpenDropdown(prev => (prev === key ? null : key));
//     };
//     return (
//         <>
//             <div className="">
//                 <SymptomSelector
//                     title={"Location"}
//                     svgtitle={iconsforFilters["Location"]}
//                     open={openDropdown === "Location"}
//                     onToggle={() => handleToggle("Location")}
//                     symptoms={locationsDB}
//                     svgArrow={hasSvgItems}
//                     allowForSelectAllChildren
//                     setSelected={setLocationsSelected}
//                     selected={locationsSelected}
//                 />
//             </div>

//             <div>
//                 <SymptomSelector
//                     title={"Type of Property"}
//                     svgtitle={iconsforFilters["Type of Property"]}
//                     open={openDropdown === "Type of Property"}
//                     onToggle={() => handleToggle("Type of Property")}
//                     symptoms={propertyTypesDB}
//                     svgArrow={hasSvgItems}
//                     allowForSelectAllChildren={false}
//                     multiple={false}
//                     setSelected={setPropertyTypesSelected}
//                     selected={propertyTypesSelected}
//                 />
//             </div>

//             <div>
//                 <SymptomSelector
//                     title={"Special Features"}
//                     svgtitle={iconsforFilters["Special Features"]}
//                     open={openDropdown === "Special Features"}
//                     onToggle={() => handleToggle("Special Features")}
//                     symptoms={featureItemsDB}
//                     svgArrow={hasSvgItems}
//                     allowForSelectAllChildren={false}
//                     parentIsLabel
//                     setSelected={setFeatureSelected}
//                     selected={featureSelected}
//                 />
//             </div>

//             <div>

//                 <DropdownWithChildren
//                     title="Price Range"
//                     svg={iconsforFilters["Price Range"]}
//                     open={openDropdown === "Price Range"}
//                     onToggle={() => handleToggle("Price Range")}
//                     svgArrow={hasSvgItems}
//                 >
//                     <RangeSlider
//                         label=""
//                         min={priceRangeValue.min}
//                         max={priceRangeValue.max}
//                         value={priceRange}
//                         onChange={setPriceRange}
//                         unit="$"
//                         locale="tr"
//                     />
//                 </DropdownWithChildren>
//             </div>

//             <div>

//                 <SymptomSelector
//                     title={"Bedrooms"}
//                     svgtitle={iconsforFilters["Bedrooms"]}
//                     open={openDropdown === "Bedrooms"}
//                     onToggle={() => handleToggle("Bedrooms")}
//                     symptoms={bedroomsOptions}
//                     svgArrow={hasSvgItems}
//                     allowForSelectAllChildren={false}
//                     multiple={false}
//                     setSelected={setBedroomsSelected}
//                     selected={bedroomsSelected}
//                 />
//             </div>

//             <div>
//                 <SymptomSelector
//                     title={"Bathrooms"}
//                     svgtitle={iconsforFilters["Bathrooms"]}
//                     open={openDropdown === "Bathrooms"}
//                     onToggle={() => handleToggle("Bathrooms")}
//                     symptoms={bathroomsOptions}
//                     svgArrow={hasSvgItems}
//                     allowForSelectAllChildren={false}
//                     multiple={false}
//                     setSelected={setBathroomsSelected}
//                     selected={bathroomsSelected}
//                 />
//             </div>

//         </>
//     );
// }



"use client";

import React, { useEffect, useRef, useState } from "react";
import SymptomSelector from "@/components/symptom-selector/symptom-selector";
import DropdownWithChildren from "@/components/dropdown-with-children/DropdownWithChildren";
import RangeSlider from "@/components/range-slider/RangeSlider";
import { iconsforFilters } from "../constants";
import { featureItems, propertyTypes, bedrooms as bedroomsOptions, bathrooms as bathroomsOptions } from "../constants";
import originalTurkiye from "@/constants/turkiye.json";
import { FilterProps } from "../types";
import { AnimatePresence, motion } from "framer-motion";
import { useSearchParams } from "next/navigation";

const turkiye = originalTurkiye.map((province) => ({
    ...province,
    children: province.districts,
}));

interface Props extends FilterProps {
    hasSvgItems?: boolean;
}

const dropdownKeys = [
    "Location",
    "Type of Property",
    "Special Features",
    "Price Range",
    "Bedrooms",
    "Bathrooms",
];

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
    hasSvgItems = true,
}: Props) {

    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [hideOthers, setHideOthers] = useState(false);
    const focusRef = useRef<HTMLDivElement>(null);
    const searchParams = useSearchParams();

    const handleToggle = (key: string, allowFalse=true) => {
        if (openDropdown === key && allowFalse ) {
            setOpenDropdown(null);
            setHideOthers(true);
            setTimeout(() => {
                setHideOthers(false);
            }, 500);
        } else {
            setHideOthers(true);
            setTimeout(() => {
                setOpenDropdown(key);
                setHideOthers(false);
            }, 500);
        }
    };

    useEffect(() => {
        const typeParam = searchParams.get("type");
        const locationParam = searchParams.get("location");
        const featureParam = searchParams.get("feature");
    
        if (locationParam) {
          handleToggle("Location", false);
        } else if (typeParam) {
          handleToggle("Type of Property", false);
        } else if (featureParam) {
          handleToggle("Special Features", false);
        }
      }, [searchParams]);


    useEffect(() => {
        if (focusRef.current) {
            focusRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    }, [openDropdown]);

    const renderDropdown = (key: string, component: React.ReactNode) => {

        const isVisible = !hideOthers && (openDropdown === null || openDropdown === key);
        const isFocused = openDropdown === key;

        return (
            <motion.div
                key={key}
                layout
                initial={false}
                animate={{
                    opacity: isVisible ? 1 : 0, 
                    scale: isVisible ? 1 : 0.95,
                    pointerEvents: isVisible ? "auto" : "none",
                    display: isVisible ? "block" : "none",
                }}
                style={{
                    visibility: isVisible ? "visible" : "hidden",
                }}
                transition={{ duration: 0.3 }}
                ref={isFocused ? focusRef : null}
            >
                {component}
            </motion.div>
        );
    };


    return (
        <>
            {renderDropdown(
                "Location",
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
            )}

            {renderDropdown(
                "Type of Property",
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
            )}

            {renderDropdown(
                "Special Features",
                <SymptomSelector
                    title={"Special Features"}
                    svgtitle={iconsforFilters["Special Features"]}
                    open={openDropdown === "Special Features"}
                    onToggle={() => handleToggle("Special Features")}
                    symptoms={featureItemsDB}
                    svgArrow={hasSvgItems}
                    allowForSelectAllChildren={false}
                    parentIsLabel
                    setSelected={setFeatureSelected}
                    selected={featureSelected}
                />
            )}

            {renderDropdown(
                "Price Range",
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
            )}

            {renderDropdown(
                "Bedrooms",
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
            )}

            {renderDropdown(
                "Bathrooms",
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
            )}
        </>
    );
}
