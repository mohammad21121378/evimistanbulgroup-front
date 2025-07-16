import FieldsFilter from "../../fields-filter";
import { useFilter } from "../../hooks/useFilter";


export default function FiltersBar() {
  const filtersState = useFilter();
  return (
    <div className="absolute left-0 mt-2 z-50 md:grid hidden grid-cols-6 gap-2 w-full px-2 pointer-events-none">
      <FieldsFilter hasSvgItems={false} {...filtersState} />
    </div>
  );
}