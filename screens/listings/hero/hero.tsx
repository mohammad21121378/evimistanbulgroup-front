"use client";

import React, { useMemo, useState } from "react";
import cn from "classnames";

import styles from "./hero.module.css";

import PropertyListing from "@/components/property-listing";
import { Listings } from "@/constants/mock";
import SortDropdown from "@/components/sort-dropdown";
import Pagination from "@/components/ui/Pagination";
import { useNumberedPagination } from "@/hooks/useNumberedPagination";

import ChangeTypeListings from "../change-type-listings";
import { TypeProp, onChangeType } from "../types";
import Breadcrumb from "../breadcrumb";
import { useFilter } from "../hooks/useFilter";
import FieldsFilter from "../fields-filter";

const defaultListing = Listings.flatMap((listingCategory) => listingCategory.items)

type Props = {
  type: TypeProp;
  onChange: onChangeType
}

export default function Hero({ type, onChange }: Props) {

  const [applyFilters, setApplyFilters] = React.useState<boolean>(false);
  const [sortOption, setSortOption] = useState<string>("newest");
  const [filteredListings, setFilteredListings] = useState(defaultListing)

  const filtersState = useFilter();

  const {
    locationsSelected,
    propertyTypesSelected,
  } = filtersState;

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

  const sortedListings = useMemo(() => {
    return [...filteredListings].sort((a, b) => {
      if (sortOption === "price-asc") return a.price - b.price;
      if (sortOption === "price-desc") return b.price - a.price;
      if (sortOption === "newest") return new Date(b.id).getTime() - new Date(a.id).getTime();
      return 0;
    })
  }, [sortOption, filteredListings]);

  const { currentPage, totalPages, items: paginatedListings, goToPage } = useNumberedPagination({
    limit: 6,
    initialData: sortedListings,
  });

  return (
    <section className={cn("section", styles.section)}>
      <div className={cn("container")}>
        <div className="sm:flex grid justify-between items-center mb-4">
          <Breadcrumb />
          <div className="md:block hidden">
            <SortDropdown value={sortOption} onChange={setSortOption} />
          </div>
        </div>
      </div>

      <div className={cn("container", styles.container)}>

        <div className="h-full">
          <div className="sticky top-28">
          <ChangeTypeListings type={type} onChange={onChange} />

          <div className={cn('scrollbar-sm mb-10', styles.filters)}>

            <div className={cn("label-large")}>
              Find Properties for Sale in Turkey
            </div>

            <div className={styles.textfields}>

              <FieldsFilter {...filtersState} />

            </div>
            {
              applyFilters &&
              <button className={cn("label-medium text-orange-600", styles.textButton)} onClick={handleReset}>
                Reset
              </button>
            }
            <button
              className={cn("button sticky -bottom-6 z-10", styles.button)}
              onClick={handleApplyFilters}
            >
              Find Now
            </button>
          </div>
          </div>
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
