import FieldsFilter from "../../fields-filter";
import { useFilter } from "../../hooks/useFilter";
import { FilterProps } from "../../types";


export default function FiltersBar({...filtersState}: FilterProps) {
  
  return (
    <div className="w-full mt-2 z-50 md:grid hidden grid-cols-6 gap-2 h-[7rem] px-2 pointer-events-none">
      <FieldsFilter hasSvgItems={false} hasAnimation={false} {...filtersState} />
    </div>
  );
}