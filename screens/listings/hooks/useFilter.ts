import { Listings } from "@/constants/mock";
import { useNumberedPagination } from "@/hooks/useNumberedPagination";
import isEqual from "lodash.isequal";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { initialFilterState, priceRangeValue } from "../filter.constants";
import { useSearchParams } from 'next/navigation';

type Props = {
  onFilterByChange?: boolean
}

export function useFilter({ onFilterByChange = false }: Props) {

  const { currentPage, totalPages, goToPage: goToPageRaw } = useNumberedPagination({ totalPages: 200 })

  const searchParams = useSearchParams();
  // const locationParam = searchParams.get('location');
  // const initialLocationsSelected = useMemo(() => {
  //   return locationParam ? locationParam.split(',') : initialFilterState.locationsSelected;
  // }, [locationParam]);

  const [loading, setLoading] = useState(false)

  const [applyFilters, setApplyFilters] = useState<boolean>(false);

  const [properties, setProperties] = useState(initialFilterState.properties)
  const [priceRange, setPriceRange] = useState(initialFilterState.priceRange);
  const [locationsSelected, setLocationsSelected] = useState(initialFilterState.locationsSelected);
  const [propertyTypesSelected, setPropertyTypesSelected] = useState(initialFilterState.propertyTypesSelected);
  const [featureSelected, setFeatureSelected] = useState(initialFilterState.featureSelected);
  const [bedroomsSelected, setBedroomsSelected] = useState(initialFilterState.bedroomsSelected);
  const [bathroomsSelected, setBathroomsSelected] = useState(initialFilterState.bathroomsSelected);
  const [sortOption, setSortOption] = useState(initialFilterState.sortOption);

  useEffect(() => {
    const locationParam = searchParams.get('location');
    const locationsFromURL = locationParam ? locationParam.split(',') : [];
  
    if (!isEqual(locationsSelected, locationsFromURL)) {
      setLocationsSelected(locationsFromURL);
    }
  }, [searchParams]);


  const filterData = useMemo(() => ({
    priceRange,
    locationsSelected,
    propertyTypesSelected,
    featureSelected,
    bedroomsSelected,
    bathroomsSelected,
    sortOption
  }), [
    priceRange,
    locationsSelected,
    propertyTypesSelected,
    featureSelected,
    bedroomsSelected,
    bathroomsSelected,
    sortOption
  ]);

  const prevFilterRef = useRef<typeof filterData>(filterData);

  const fetchFilteredData = async (applyFilters = true) => {
    if (!loading) setLoading(true);

    // مهندس اینجا api بزن و properties رو ست کن

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

    setTimeout(() => {
      onFilter(false);
    }, 100);
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
    goToPage

  };
}