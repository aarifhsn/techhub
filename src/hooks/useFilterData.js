import { useState } from "react";

export const useFilterData = () => {
  const [filters, setFilters] = useState({
    categories: [],
    priceRanges: [],
    ratings: [],
  });

  const updateFilters = (newFilters) => {
    setFilters(newFilters);
  };

  const clearFilters = () => {
    setFilters({
      categories: [],
      priceRanges: [],
      ratings: [],
    });
  };

  return {
    filters,
    updateFilters,
    clearFilters,
  };
};
