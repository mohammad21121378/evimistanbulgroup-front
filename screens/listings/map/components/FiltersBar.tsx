import FieldsFilter from "../../fields-filter";
import { useFilter } from "../../hooks/useFilter";
import { FilterProps } from "../../types";


export default function FiltersBar({...filtersState}: FilterProps) {
  
  return (
    <div className="w-full fixed top-[6rem] left-0 right-0 mt-2 z-50 md:grid hidden grid-cols-6 gap-2 h-[4rem] px-2 pointer-events-none">
      <FieldsFilter hasAnimation={false} {...filtersState} />
    </div>
  );
}