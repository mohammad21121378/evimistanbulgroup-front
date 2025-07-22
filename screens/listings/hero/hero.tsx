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
import PropertyLoader from "@/components/loaders/PropertyLoader";
import EmptyContentWithLottie from "@/components/ui/EmptyContentWithLottie";
import { AnimatePresence, motion } from "framer-motion";
import { useAutoAnimate } from "@formkit/auto-animate/react";

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
    goToPage,

  } = filtersState;

  const [parent] = useAutoAnimate();

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

            <div className={cn('scrollbar-none !overflow-visible mb-10', styles.filters)}
            ref={parent}
            >

              <div className={cn("xl:text-lg md:text-base text-lg truncate font-bold")}>
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

              <motion.div
                layout
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 5 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{
                  layout: { duration: 0.3, ease: "easeInOut" },
                  default: { duration: 0.3 }
                }}
              >
                <Button
                  size="full"
                  onClick={onFilter}
                  className={cn("z-10 !max-h-13 !min-h-0", styles.button)}
                  loading={loading}>
                  Find Now
                </Button>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="md:hidden block mb-5">
          <SortDropdown value={sortOption} onChange={onSort} />
        </div>

        <div className={cn(styles.listings, 'grid sm:grid-cols-2 grid-cols-1 gap-6')}>

          {
            loading ?
              <PropertyLoader />
              :
              <>
                {
                  properties && properties.length ?
                    <>
                      {properties.map((listing) => (
                        <>
                          <div>
                            <PropertyListing key={listing.id} item={listing} />
                          </div>
                        </>
                      ))}
                      <div className="sm:col-span-2 mt-10">
                        {totalPages && totalPages > 1 && (
                          <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={goToPage}
                          />
                        )}
                      </div>
                    </>
                    :
                    <div className="sm:col-span-2">
                      <EmptyContentWithLottie />
                    </div>
                }
              </>
          }

        </div>
      </div>
    </section>
  );
}


export default Hero;