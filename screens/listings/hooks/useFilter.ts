// import { Listings } from "@/constants/mock";
import { useNumberedPagination } from "@/hooks/useNumberedPagination";
import isEqual from "lodash.isequal";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { initialFilterState, priceRangeValue } from "../filter.constants";
import { useSearchParams } from 'next/navigation';
import { useSyncLocationFromURL } from "./useSyncLocationFromURL";
import fetchProperties from "@/helpers/api/property/properties"
import { ListingsType, PropertyRawType } from "@/types/Property";

type Props = {
  onFilterByChange?: boolean
  listings: ListingsType;

}

export function useFilter({ onFilterByChange = false, listings }: Props) {

  const [totalPagesState, setTotalPagesState] = useState(listings?.pagination?.last_page ?? 1);

  const { currentPage, totalPages, goToPage: goToPageRaw } = useNumberedPagination({ totalPages: totalPagesState })

  const searchParams = useSearchParams();
  // const locationParam = searchParams.get('location');
  // const initialLocationsSelected = useMemo(() => {
  //   return locationParam ? locationParam.split(',') : initialFilterState.locationsSelected;
  // }, [locationParam]);

  const [loading, setLoading] = useState(false)

  const [applyFilters, setApplyFilters] = useState<boolean>(false);

  const [properties, setProperties] = useState(listings?.properties)

  const [featureItemsDB, setFeatureItemsDB] = useState(listings?.special_features)
  const [propertyTypesDB, setPropertyTypesDB] = useState(listings?.type_of_properties)
  const [locationsDB, setlocationsDB] = useState(listings?.locations)


  const [priceRange, setPriceRange] = useState(initialFilterState.priceRange);
  const [locationsSelected, setLocationsSelected] = useState(initialFilterState.locationsSelected);
  const [propertyTypesSelected, setPropertyTypesSelected] = useState(initialFilterState.propertyTypesSelected);
  const [featureSelected, setFeatureSelected] = useState(initialFilterState.featureSelected);
  const [bedroomsSelected, setBedroomsSelected] = useState(initialFilterState.bedroomsSelected);
  const [bathroomsSelected, setBathroomsSelected] = useState(initialFilterState.bathroomsSelected);
  const [sortOption, setSortOption] = useState(initialFilterState.sortOption);


  useSyncLocationFromURL(setLocationsSelected, locationsSelected);

  const filterData = useMemo(() => ({
    priceRange,
    locationsSelected,
    propertyTypesSelected,
    featureSelected,
    bedroomsSelected,
    bathroomsSelected,
    sortOption,
    currentPage
  }), [
    priceRange,
    locationsSelected,
    propertyTypesSelected,
    featureSelected,
    bedroomsSelected,
    bathroomsSelected,
    sortOption,
    currentPage
  ]);

  const prevFilterRef = useRef<typeof filterData>(filterData);

  const fetchFilteredData = async (applyFilters = true) => {
    if (!loading) setLoading(true);

    const listingsData = await fetchProperties(3, currentPage, {
      priceRange,
      locationsSelected,
      propertyTypesSelected,
      featureSelected,
      bedroomsSelected,
      bathroomsSelected,
      sortOption
    });

    console.log("listingsData:", listingsData);

    if (listingsData && listingsData.properties) {
      setProperties(listingsData.properties)
      setTotalPagesState(listingsData.pagination?.last_page)
    } else {
      setProperties([])
    }



    setTimeout(() => {
      setLoading(false);
      setApplyFilters(applyFilters);
    }, 500);
  };

  const onFilter = async (applyFilters = true) => {
    await fetchFilteredData(applyFilters)
  }

  const onSort = (sort: string) => {
    setSortOption(sort)
    onFilter()
  }

  const onReset = async () => {

    setPriceRange(initialFilterState.priceRange);
    setLocationsSelected(initialFilterState.locationsSelected);
    setPropertyTypesSelected(initialFilterState.propertyTypesSelected);
    setFeatureSelected(initialFilterState.featureSelected);
    setBedroomsSelected(initialFilterState.bedroomsSelected);
    setBathroomsSelected(initialFilterState.bathroomsSelected);
    setSortOption(initialFilterState.sortOption);
    goToPageRaw(1);

    setLoading(true);
    
    setTimeout(() => {
      onFilter(false);
    }, 1200);
  };

  const goToPage = (page: number) => {
    goToPageRaw(page)
    onFilter()
  }

  useEffect(() => {
    if (!onFilterByChange) return;

    if (!isEqual(prevFilterRef.current, filterData)) {
      prevFilterRef.current = filterData;

      setLoading(true);
      const timeoutId = setTimeout(() => {
        onFilter();
      }, 1200);

      return () => clearTimeout(timeoutId);
    }
  }, [filterData, onFilterByChange]);

  return {
    ...filterData,
    setPriceRange,
    setLocationsSelected,
    setPropertyTypesSelected,
    setFeatureSelected,
    setBedroomsSelected,
    setBathroomsSelected,
    priceRangeValue,
    setSortOption,
    properties,
    loading,
    applyFilters,
    onReset,
    onSort,
    onFilter,
    currentPage,
    totalPages,
    featureItemsDB,
    propertyTypesDB,
    locationsDB,
    goToPage

  };
}