// import { Listings } from "@/constants/mock";
import { useNumberedPagination } from "@/hooks/useNumberedPagination";
import isEqual from "lodash.isequal";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { initialFilterState, priceRangeValue } from "../filter.constants";
import { useSearchParams } from 'next/navigation';
import fetchProperties from "@/helpers/api/property/properties"
import { ListingsType, PropertyRawType } from "@/types/Property";
import { useSyncFilterFromURL } from "./useSyncFilterFromURL";

type Props = {
  onFilterByChange?: boolean
  listings: ListingsType;
  typeShowPage: 'list' | 'map'

}

export function useFilter({ onFilterByChange = false, listings, typeShowPage }: Props) {

  const [totalPagesState, setTotalPagesState] = useState(listings?.pagination?.last_page ?? 1);

  const { currentPage, totalPages, goToPage: goToPageRaw } = useNumberedPagination({ totalPages: totalPagesState })

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



  useSyncFilterFromURL('location', setLocationsSelected, locationsSelected);
  useSyncFilterFromURL('feature', setFeatureSelected, featureSelected);
  useSyncFilterFromURL('type', setPropertyTypesSelected, propertyTypesSelected);

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
  const prevTypeShowPage = useRef(typeShowPage);

  // const fetchFilteredData = async (applyFilters = true) => {
  //   if (!loading) setLoading(true);

  //   const listingsData = await fetchProperties(3, currentPage, {
  //     priceRange,
  //     locationsSelected,
  //     propertyTypesSelected,
  //     featureSelected,
  //     bedroomsSelected,
  //     bathroomsSelected,
  //     sortOption
  //   });

  //   console.log("listingsData:", listingsData);

  //   if (listingsData && listingsData.properties) {
  //     setProperties(listingsData.properties)
  //     setTotalPagesState(listingsData.pagination?.last_page)
  //   } else {
  //     setProperties([])
  //   }

  //   setTimeout(() => {
  //     setLoading(false);
  //     setApplyFilters(applyFilters);
  //   }, 500);
  // };

  const fetchFilteredData = async (applyFilters = true, filters = filterData) => {
    if (!loading) setLoading(true);

    const listingsData = await fetchProperties(typeShowPage === 'map' ? -1 : 3, filters.currentPage, {
      priceRange: filters.priceRange,
      locationsSelected: filters.locationsSelected,
      propertyTypesSelected: filters.propertyTypesSelected,
      featureSelected: filters.featureSelected,
      bedroomsSelected: filters.bedroomsSelected,
      bathroomsSelected: filters.bathroomsSelected,
      sortOption: filters.sortOption
    });

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
    goToPageRaw(1);
    const newFilters = {
      ...filterData,
      currentPage: 1
    };
    await fetchFilteredData(applyFilters, newFilters)
  }

  const onSort = (sort: string) => {
    setSortOption(sort);
    goToPageRaw(1);

    const newFilters = {
      ...filterData,
      sortOption: sort,
      currentPage: 1
    };

    fetchFilteredData(true, newFilters);
  };

  const onReset = async () => {
    const resetFilters = {
      ...filterData,
      priceRange: initialFilterState.priceRange,
      locationsSelected: initialFilterState.locationsSelected,
      propertyTypesSelected: initialFilterState.propertyTypesSelected,
      featureSelected: initialFilterState.featureSelected,
      bedroomsSelected: initialFilterState.bedroomsSelected,
      bathroomsSelected: initialFilterState.bathroomsSelected,
      sortOption: initialFilterState.sortOption,
      currentPage: 1,
    };

    setPriceRange(resetFilters.priceRange);
    setLocationsSelected(resetFilters.locationsSelected);
    setPropertyTypesSelected(resetFilters.propertyTypesSelected);
    setFeatureSelected(resetFilters.featureSelected);
    setBedroomsSelected(resetFilters.bedroomsSelected);
    setBathroomsSelected(resetFilters.bathroomsSelected);
    setSortOption(resetFilters.sortOption);
    goToPageRaw(1);

    fetchFilteredData(false, resetFilters);
  };

  const goToPage = (page: number) => {
    goToPageRaw(page);

    const newFilters = {
      ...filterData,
      currentPage: page
    };

    fetchFilteredData(true, newFilters);
  };


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

  useEffect(() => {

    if (!isEqual(prevTypeShowPage.current, typeShowPage)) {

      prevTypeShowPage.current = typeShowPage;

      fetchFilteredData()
    }
  }, [typeShowPage]);

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