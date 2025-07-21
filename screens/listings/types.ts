import { PropertyRawType, PropertyType } from "@/types/Property";

export type TypeProp = 'list' | 'map';
export type onChangeType = (type: TypeProp)=>void;


export interface FilterProps {
    priceRange: [number, number];
    setPriceRange: React.Dispatch<React.SetStateAction<[number, number]>>;
    priceRangeValue: { min: number; max: number };

    locationsSelected: string[];
    setLocationsSelected: React.Dispatch<React.SetStateAction<string[]>>;

    propertyTypesSelected: string[];
    setPropertyTypesSelected: React.Dispatch<React.SetStateAction<string[]>>;

    featureSelected: string[];
    setFeatureSelected: React.Dispatch<React.SetStateAction<string[]>>;

    bedroomsSelected: string[];
    setBedroomsSelected: React.Dispatch<React.SetStateAction<string[]>>;

    bathroomsSelected: string[];
    setBathroomsSelected: React.Dispatch<React.SetStateAction<string[]>>;
    
    sortOption: string;
    setSortOption: React.Dispatch<React.SetStateAction<string>>;

    onSort: (sort: string) => void;
    onFilter: ()=>void;
    onReset: ()=>void;

    loading: boolean;
    applyFilters: boolean;

    featureItemsDB:any[],
    propertyTypesDB:any[],

    currentPage: number; 
    totalPages:number; 
    goToPage: (page: number) => void;

    properties: PropertyRawType[]
}