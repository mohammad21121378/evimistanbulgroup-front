"use client";

import React, { useMemo, useState } from "react";
import styles from "./hero.module.css";
import cn from "classnames";
import PropertyListing from "@/components/property-listing";
import { Listings } from "@/constants/mock";
import originalTurkiye from "@/constants/turkiye.json";
import SymptomSelector from "@/components/symptom-selector/symptom-selector";
import { featureItems, propertyTypes, bedrooms as bedroomsOptions, bathrooms as bathroomsOptions } from "./constants";
import RangeSlider from "@/components/range-slider/RangeSlider";
import DropdownWithChildren from "@/components/dropdown-with-children/DropdownWithChildren";
import { Breadcrumb } from "@/components/breadcrumb/Breadcrumb";
import SortDropdown from "@/components/sort-dropdown/SortDropdown";
import { usePagination } from "@/hooks/usePagination";
import LoadMoreButton from "@/components/ui/LoadMoreButton";
import Pagination from "@/components/ui/Pagination";
import { useNumberedPagination } from "@/hooks/useNumberedPagination";

const turkiye = originalTurkiye.map((province) => ({
  ...province,
  children: province.districts,
}));

const ITEMS_PER_PAGE = 6

const defaultListing = Listings.flatMap((listingCategory) => listingCategory.items)

export default function Hero() {

  const priceRangeValue = {
    min: 0,
    max: 5000000
  }

  const [applyFilters, setApplyFilters] = React.useState<boolean>(false);
  const [priceRange, setPriceRange] = React.useState<[number, number]>([priceRangeValue.min, priceRangeValue.max]);
  const [locationsSelected, setLocationsSelected] = useState<string[]>([]);
  const [propertyTypesSelected, setPropertyTypesSelected] = useState<string[]>([]);
  const [featureSelected, setFeatureSelected] = useState<string[]>([]);
  const [bedroomsSelected, setBedroomsSelected] = useState<string[]>([]);
  const [bathroomsSelected, setBathroomsSelected] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<string>("newest");
  const [filteredListings, setFilteredListings]= useState(defaultListing)

  const handleApplyFilters = () => {
    setApplyFilters(true);
    setFilteredListings(() => {
      return Listings.flatMap((listingCategory) =>
        listingCategory.items.filter((item) => {
  
          const matchesLocation = locationsSelected.length
            ? locationsSelected.includes(item.location.toLowerCase())
            : true;
  
          const matchesPropertyType = propertyTypesSelected.length
            ? propertyTypesSelected.includes(item.category)
            : true;
  
  
          return (
            matchesLocation &&
            matchesPropertyType
          );
        })
      )
    })
  };

  const handleReset = () => {
    setApplyFilters(false);
    setFilteredListings(defaultListing)
  }

  // const filteredListings = applyFilters
  //   ? Listings.flatMap((listingCategory) =>
  //     listingCategory.items.filter((item) => {

  //       const matchesLocation = locationsSelected.length
  //         ? locationsSelected.includes(item.location.toLowerCase())
  //         : true;

  //       const matchesPropertyType = propertyTypesSelected.length
  //         ? propertyTypesSelected.includes(item.category)
  //         : true;


  //       return (
  //         matchesLocation &&
  //         matchesPropertyType
  //       );
  //     })
  //   )
  //   : Listings.flatMap((listingCategory) => listingCategory.items);

  // const filteredListings = useMemo(() => {
  //   if (!applyFilters) {
  //     return Listings.flatMap((listingCategory) => listingCategory.items);
  //   }

  //   return Listings.flatMap((listingCategory) =>
  //       listingCategory.items.filter((item) => {
  
  //         const matchesLocation = locationsSelected.length
  //           ? locationsSelected.includes(item.location.toLowerCase())
  //           : true;
  
  //         const matchesPropertyType = propertyTypesSelected.length
  //           ? propertyTypesSelected.includes(item.category)
  //           : true;
  
  
  //         return (
  //           matchesLocation &&
  //           matchesPropertyType
  //         );
  //       })
  //     )
  // }, [applyFilters, Listings, locationsSelected, propertyTypesSelected]);

  const sortedListings = useMemo(() => {
    return [...filteredListings].sort((a, b) => {
      if (sortOption === "price-asc") return a.price - b.price;
      if (sortOption === "price-desc") return b.price - a.price;
      if (sortOption === "newest") return new Date(b.id).getTime() - new Date(a.id).getTime();
      return 0;
    })
  }, [sortOption, filteredListings]);


  // const matchesAddress = address
  //   ? item.address.toLowerCase().includes(address.toLowerCase())
  //   : true;
  // const matchesPropertyType =
  //   propertyType === "Type of Property" || propertyType === null
  //     ? true
  //     : item.category === propertyType;
  // const matchesBedrooms = bedrooms
  //   ? item.features.some((f) => f.name === "bd" && f.value >= bedrooms)
  //   : true;
  // const matchesBathrooms = bathrooms
  //   ? item.features.some((f) => f.name === "ba" && f.value >= bathrooms)
  //   : true;

  const { currentPage, totalPages, items: paginatedListings, goToPage } = useNumberedPagination({
    limit: 6,
    initialData: sortedListings,
  });

  return (
    <section className={cn("section", styles.section)}>
      <div className={cn("container")}>
        <div className="sm:flex grid justify-between items-center mb-4">
          <Breadcrumb
            items={[{ label: 'Property for Sale in Turkey' }]}
          />
          <div className="md:block hidden">
            <SortDropdown value={sortOption} onChange={setSortOption} />
          </div>
        </div>
      </div>
      <div className={cn("container", styles.container)}>

        <div className={cn('scrollbar-sm mb-10', styles.filters)}>
          <div className={cn("label-large")}>
            Find Properties for Sale in Turkey
          </div>
          <div className={styles.textfields}>

            <SymptomSelector
              title={'Location'}
              svgtitle={<svg width="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 4V19M13 4L19 1V16L13 19M13 4L7 1M13 19L7 16M7 16L1 19V4L7 1M7 16V1" stroke="#64748B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>}
              symptoms={turkiye}
              allowForSelectAllChildren
              setSelected={setLocationsSelected}
            />

            <SymptomSelector
              title={"Type of Property"}
              svgtitle={<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 1H2C1.44772 1 1 1.44772 1 2V7C1 7.55228 1.44772 8 2 8H7C7.55228 8 8 7.55228 8 7V2C8 1.44772 7.55228 1 7 1Z" stroke="#64748B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M18 1H13C12.4477 1 12 1.44772 12 2V7C12 7.55228 12.4477 8 13 8H18C18.5523 8 19 7.55228 19 7V2C19 1.44772 18.5523 1 18 1Z" stroke="#64748B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M18 12H13C12.4477 12 12 12.4477 12 13V18C12 18.5523 12.4477 19 13 19H18C18.5523 19 19 18.5523 19 18V13C19 12.4477 18.5523 12 18 12Z" stroke="#64748B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M7 12H2C1.44772 12 1 12.4477 1 13V18C1 18.5523 1.44772 19 2 19H7C7.55228 19 8 18.5523 8 18V13C8 12.4477 7.55228 12 7 12Z" stroke="#64748B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>}
              symptoms={propertyTypes}
              allowForSelectAllChildren={false}
              multiple={false}
              setSelected={setPropertyTypesSelected}
            />

            <SymptomSelector
              title={"Special Features"}
              svgtitle={<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 1.5L14.09 7.75342L21 8.76236L16 13.6272L17.18 20.5L11 17.2534L4.82 20.5L6 13.6272L1 8.76236L7.91 7.75342L11 1.5Z" stroke="#64748B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>}
              symptoms={featureItems}
              allowForSelectAllChildren={false}
              parentIsLabel
              multiple={false}
              setSelected={setFeatureSelected}
            />


            <DropdownWithChildren title="Price Range" svg={<svg width="14" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 1V21M12 4H4.5C3.57174 4 2.6815 4.36875 2.02513 5.02513C1.36875 5.6815 1 6.57174 1 7.5C1 8.42826 1.36875 9.3185 2.02513 9.97487C2.6815 10.6313 3.57174 11 4.5 11H9.5C10.4283 11 11.3185 11.3687 11.9749 12.0251C12.6313 12.6815 13 13.5717 13 14.5C13 15.4283 12.6313 16.3185 11.9749 16.9749C11.3185 17.6313 10.4283 18 9.5 18H1" stroke="#64748B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>}>
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

            <SymptomSelector
              title={"Bedrooms"}
              svgtitle={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.7871 12.119V7.18486C18.7871 6.52936 18.7871 6.20161 18.6925 5.93888C18.531 5.49021 18.1778 5.13698 17.7291 4.97545C17.4664 4.88086 17.1386 4.88086 16.4831 4.88086H7.51884C6.86335 4.88086 6.5356 4.88086 6.27286 4.97545C5.8242 5.13698 5.47096 5.49021 5.30943 5.93888C5.21484 6.20161 5.21484 6.52936 5.21484 7.18486V12.119" stroke="#64748B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M14.002 9.58105H15.979" stroke="#64748B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8 9.58105H9.97709" stroke="#64748B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M21 19.1191V14.4231C21 13.7676 21 13.4399 20.9054 13.1772C20.7439 12.7285 20.3906 12.3753 19.942 12.2137C19.6792 12.1191 19.3515 12.1191 18.696 12.1191H5.304C4.6485 12.1191 4.32076 12.1191 4.05802 12.2137C3.60935 12.3753 3.25612 12.7285 3.09459 13.1772C3 13.4399 3 13.7676 3 14.4231V19.1191" stroke="#64748B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M3 17.8809H21" stroke="#64748B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>}
              symptoms={bedroomsOptions}
              allowForSelectAllChildren={false}
              multiple={false}
              setSelected={setBedroomsSelected}
            />

            <SymptomSelector
              title={"Bathrooms"}
              svgtitle={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5613 18.8705H7.43968C4.98778 18.8705 3 16.8837 3 14.4318V13.6495C3 12.9305 3.58281 12.3486 4.30086 12.3486H19.6991C20.4182 12.3486 21 12.9305 21 13.6495V14.4318C21 16.8837 19.0132 18.8705 16.5613 18.8705Z" stroke="#64748B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M18.945 12.3477V5.30238C18.945 4.06573 17.8455 3.11903 16.6225 3.30389L14.7485 3.58606C13.76 3.73492 13.0293 4.58433 13.0293 5.58454V6.58962" stroke="#64748B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0059 8.42939C11.0059 7.38441 11.9652 6.54182 13.1289 6.59144C14.2176 6.63814 15.0554 7.49047 15.0554 8.48095C15.0554 8.67263 14.8841 8.82831 14.673 8.82831H11.3882C11.1771 8.82831 11.0059 8.67263 11.0059 8.48095V8.42939Z" stroke="#64748B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M7.43904 18.8701L6.07031 20.7189" stroke="#64748B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M18.0682 20.7188L16.6992 18.8701" stroke="#64748B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>}
              symptoms={bathroomsOptions}
              allowForSelectAllChildren={false}
              multiple={false}
              setSelected={setBathroomsSelected}
            />

          </div>
          {
            applyFilters &&
            <button className={cn("label-medium text-orange-600", styles.textButton)} onClick={handleReset}>
              Reset
            </button>
          }
          <button
            className={cn("button sticky -bottom-6", styles.button)}
            onClick={handleApplyFilters}
          >
            Find Now
          </button>
        </div>

        <div className="md:hidden block mb-5">
          <SortDropdown value={sortOption} onChange={setSortOption} />
        </div>

        <div className={cn(styles.listings, 'grid sm:grid-cols-2 grid-cols-1 gap-6')}>

          {paginatedListings.map((listing) => (
            <div>
            <PropertyListing key={listing.id} item={listing} />
            </div>
          ))}

          <div className="sm:col-span-2 mt-10">
            {totalPages > 1 && (
              <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={goToPage}
            />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
