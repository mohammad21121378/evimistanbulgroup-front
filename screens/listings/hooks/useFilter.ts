import { useNumberedPagination } from "@/hooks/useNumberedPagination";
import isEqual from "lodash.isequal";
import { useEffect, useMemo, useRef, useState } from "react";
import { initialFilterState, priceRangeValue } from "../filter.constants";
import fetchProperties from "@/helpers/api/property/properties"
import { ListingsType } from "@/types/Property";
import { useSyncFilterFromURL } from "./useSyncFilterFromURL";
import { useSearchParams, useRouter, usePathname, useParams } from 'next/navigation';
import { useLocale } from "next-intl";
import { SeoFilters, decodeSlugToFilters, encodeFiltersToSlug } from "@/utils/seoFilters";

type Props = {
  onFilterByChange?: boolean
  listings: ListingsType;
  typeShowPage: 'list' | 'map';
  initialSeoFilters?: SeoFilters;

}

export function useFilter({ onFilterByChange = false, listings, typeShowPage, initialSeoFilters }: Props) {

  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = useParams();

  const initialParamUrl = useRef<SeoFilters | null>(null);

  const [totalPagesState, setTotalPagesState] = useState(listings?.pagination?.last_page ?? 1);
  const { currentPage, totalPages, goToPage: goToPageRaw } = useNumberedPagination({ totalPages: totalPagesState })

  const [loading, setLoading] = useState(false)

  const [applyFilters, setApplyFilters] = useState<boolean>(false);

  const [properties, setProperties] = useState(listings?.properties)

  const [featureItemsDB] = useState(listings?.special_features)
  const [propertyTypesDB] = useState(listings?.type_of_properties)
  const [locationsDB] = useState(listings?.locations)


  const [priceRange, setPriceRange] = useState(initialFilterState.priceRange);
  const [locationsSelected, setLocationsSelected] = useState(initialFilterState.locationsSelected);
  const [propertyTypesSelected, setPropertyTypesSelected] = useState(initialFilterState.propertyTypesSelected);
  const [featureSelected, setFeatureSelected] = useState(initialFilterState.featureSelected);
  const [bedroomsSelected, setBedroomsSelected] = useState(initialFilterState.bedroomsSelected);
  const [bathroomsSelected, setBathroomsSelected] = useState(initialFilterState.bathroomsSelected);
  const [sortOption, setSortOption] = useState(initialFilterState.sortOption);

  // const initialPage = initialSeoFilters?.currentPage || 1;
  // const [totalPagesState, setTotalPagesState] = useState(listings?.pagination?.last_page ?? 1);

  // const { currentPage, totalPages, goToPage: goToPageRaw } = useNumberedPagination({
  //   totalPages: listings?.pagination?.last_page ?? 1,
    // seo: {
    //   initialPage: initialFilterState.currentPage ? initialFilterState.currentPage : 1,
    //   buildPathForPage: (page) => {

    //     const slug = encodeFiltersToSlug({
    //       bedroomsSelected: initialFilterState.bedroomsSelected,
    //       featureSelected: initialFilterState.featureSelected,
    //       propertyTypesSelected: initialFilterState.propertyTypesSelected,
    //       sortOption: initialFilterState.sortOption,
    //       currentPage: page,
    //     });

    //     return slug.length
    //       ? `/${locale}/properties-for-sale-in-turkey/${slug.join("/")}`
    //       : `/${locale}/properties-for-sale-in-turkey`;
    //   },
    // },
  // });

  useEffect(() => {
    if (initialSeoFilters?.currentPage && initialSeoFilters.currentPage !== currentPage) {
      goToPageRaw(initialSeoFilters.currentPage);
    }
  }, [initialSeoFilters?.currentPage]);

  useEffect(() => {


    const slugSegments = decodeSlugToFilters(params.filtersParams as string[], locationsDB, featureItemsDB, propertyTypesDB);

    if (!isEqual(initialParamUrl.current, slugSegments)) {

      initialParamUrl.current = slugSegments;

      if (slugSegments.bedroomsSelected?.length && !isEqual(bedroomsSelected, slugSegments.bedroomsSelected)) {
        setBedroomsSelected(slugSegments.bedroomsSelected);
      }
      if (slugSegments.bathroomsSelected?.length && !isEqual(bathroomsSelected, slugSegments.bathroomsSelected)) {
        setBathroomsSelected(slugSegments.bathroomsSelected);
      }
      if (slugSegments.featureSelected?.length && !isEqual(featureSelected, slugSegments.featureSelected)) {
        setFeatureSelected(slugSegments.featureSelected);
      }
      if (slugSegments.propertyTypesSelected?.length && !isEqual(propertyTypesSelected, slugSegments.propertyTypesSelected)) {
        setPropertyTypesSelected(slugSegments.propertyTypesSelected);
      }
      if (slugSegments.locationsSelected?.length && !isEqual(locationsSelected, slugSegments.locationsSelected)) {
        setLocationsSelected(slugSegments.locationsSelected);
      }
      if (slugSegments.priceRange?.length && !isEqual(priceRange, slugSegments.priceRange)) {
        setPriceRange(slugSegments.priceRange);
      }

    }

  }, [
    searchParams
  ]);


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


  const fetchFilteredData = async (applyFilters = true, filters = filterData) => {

    if (!loading) setLoading(true);

    window.history.replaceState(null, '', `/${locale}/properties-for-sale-in-turkey/${encodeFiltersToSlug(filters, propertyTypesDB, locationsDB, featureItemsDB).join("/")}`);

    const listingsData = await fetchProperties(typeShowPage === 'map' ? -1 : 12, filters.currentPage, {
      priceRange: filters.priceRange,
      locationsSelected: filters.locationsSelected,
      propertyTypesSelected: filters.propertyTypesSelected,
      featureSelected: filters.featureSelected,
      bedroomsSelected: filters.bedroomsSelected,
      bathroomsSelected: filters.bathroomsSelected,
      sortOption: filters.sortOption
    }, locale);

    if (listingsData && listingsData.properties) {
      setProperties(listingsData.properties)
      setTotalPagesState(listingsData.pagination?.last_page)
    } else {
      setProperties([])
    }

    setApplyFilters(applyFilters);

    setTimeout(() => {
      setLoading(false);
      window.scrollTo({
        top: 70,
        behavior: "smooth",
      });
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

    const params = new URLSearchParams(searchParams.toString());
    ['location', 'feature', 'type', 'page'].forEach(key => {
      params.delete(key);
    });

    const queryString = params.toString();
    const newUrl = queryString ? `${pathname}?${queryString}` : pathname;

    router.replace(newUrl, { scroll: false });

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
    const baseTitle = document.title.split(' - ')[0];

    if (page > 1) {
      document.title = `${baseTitle} - ${page}`;
    } else {
      document.title = baseTitle;
    }
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