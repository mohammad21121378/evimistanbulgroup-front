import { Listings } from "@/constants/mock";
import { useNumberedPagination } from "@/hooks/useNumberedPagination";
import isEqual from "lodash.isequal";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type Props = {
    onFilterByChange?: boolean
}

export function useFilter({ onFilterByChange = false }: Props) {

    const priceRangeValue = {
        min: 0,
        max: 5000000
    }

    const {currentPage, totalPages, goToPage: goToPageRaw} = useNumberedPagination({totalPages: 200})

    const [properties, setProperties] = useState(Listings.flatMap((listingCategory) => listingCategory.items))
    const [loading, setLoading] = useState(false)


    const [priceRange, setPriceRange] = useState<[number, number]>([priceRangeValue.min, priceRangeValue.max]);
    const [locationsSelected, setLocationsSelected] = useState<string[]>([]);
    const [propertyTypesSelected, setPropertyTypesSelected] = useState<string[]>([]);
    const [featureSelected, setFeatureSelected] = useState<string[]>([]);
    const [bedroomsSelected, setBedroomsSelected] = useState<string[]>([]);
    const [bathroomsSelected, setBathroomsSelected] = useState<string[]>([]);
    const [applyFilters, setApplyFilters] = useState<boolean>(false);
    const [sortOption, setSortOption] = useState<string>("newest");

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

    const fetchFilteredData = async () => {
        setLoading(true);

        // مهندس اینجا api بزن و properties رو ست کن

        setTimeout(() => {
            setLoading(false);
            setApplyFilters(true);
        }, 500);
    };

    const onFilter = () => {
        fetchFilteredData()
    }
    const onSort = (sort: string) => {
        setSortOption(sort)
        onFilter()
    }
    const onReset = () => {
        setApplyFilters(false)
    }

    const goToPage = (page: number) => {
        goToPageRaw(page)
        onFilter()
    }

    useEffect(() => {
        if (!onFilterByChange) return;
    
        if (!isEqual(prevFilterRef.current, filterData)) {
          prevFilterRef.current = filterData;
          
          const timeoutId = setTimeout(() => {
            onFilter();
          }, 1000);
      
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