import FieldsFilter from "../../fields-filter";
import { useFilter } from "../../hooks/useFilter";
import { FilterProps } from "../../types";


export default function FiltersBar({...filtersState}: FilterProps) {
  
  return (
    <div className="absolute -top-16 left-0 mt-2 z-50  hidden grid-cols-6 gap-2 w-full px-2 pointer-events-none"> 
    {/* // md:grid */}
      <FieldsFilter hasSvgItems={false} hasAnimation={false} {...filtersState} />
    </div>
  );
}