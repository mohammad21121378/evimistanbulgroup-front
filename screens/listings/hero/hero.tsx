"use client";

import React from "react";
import cn from "classnames";

import styles from "./hero.module.css";

import PropertyListing from "@/components/property-listing";
import SortDropdown from "@/components/sort-dropdown";
import Pagination from "@/components/ui/Pagination";
import { useNumberedPagination } from "@/hooks/useNumberedPagination";

import ChangeTypeListings from "../change-type-listings";
import { FilterProps, TypeProp, onChangeType } from "../types";
import Breadcrumb from "../breadcrumb";
import FieldsFilter from "../fields-filter";
import Button from "@/components/ui/Button";

interface Props extends FilterProps {
  type: TypeProp;
  onChange: onChangeType
}

function Hero({ type, onChange, ...filtersState }: Props) {

  const {
    sortOption, 
    onSort,
    properties,
    onFilter,
    loading,
    applyFilters,
    onReset,
    currentPage, 
    totalPages, 
    goToPage
  } = filtersState;

  return (
    <section className={cn("section", styles.section)}>
      <div className={cn("container")}>
        <div className="sm:flex grid justify-between items-center mb-4">
          <Breadcrumb />
          <div className="md:block hidden">
            <SortDropdown value={sortOption} onChange={onSort} />
          </div>
        </div>
      </div>

      <div className={cn("container", styles.container)}>

        <div className="h-full">
          <div className="md:sticky top-[6.45rem]">

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
              <button className={cn("label-medium text-orange-600", styles.textButton)} onClick={onReset}>
                Reset
              </button>
            }
            <Button size="full" onClick={onFilter} className={cn("sticky -bottom-6 z-10", styles.button)} loading={loading}>
            Find Now
            </Button>
          </div>
          </div>
        </div>

        <div className="md:hidden block mb-5">
          <SortDropdown value={sortOption} onChange={onSort} />
        </div>

        <div className={cn(styles.listings, 'grid sm:grid-cols-2 grid-cols-1 gap-6')}>

          {properties.map((listing) => (
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


export default Hero;