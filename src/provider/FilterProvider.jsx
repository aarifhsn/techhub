import { FilterContext } from "../context";
import { useFilterData } from "../hooks/useFilterData";

const FilterProvider = ({ children }) => {
  const filterData = useFilterData();

  return (
    <FilterContext.Provider value={filterData}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
