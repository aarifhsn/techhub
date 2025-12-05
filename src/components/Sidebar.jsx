import { useContext, useEffect, useState } from "react";
import { FilterContext } from "../context/index";
import { categoryAPI } from "../services/api";

export default function Sidebar() {
  const { filters, updateFilters, clearFilters } = useContext(FilterContext);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch categories from API
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await categoryAPI.getAll();
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryChange = (category) => {
    const updated = filters.categories.includes(category)
      ? filters.categories.filter((c) => c !== category)
      : [...filters.categories, category];

    updateFilters({ ...filters, categories: updated });
  };

  const handlePriceChange = (priceRange) => {
    const updated = filters.priceRanges.includes(priceRange)
      ? filters.priceRanges.filter((p) => p !== priceRange)
      : [...filters.priceRanges, priceRange];

    updateFilters({ ...filters, priceRanges: updated });
  };

  const handleRatingChange = (rating) => {
    const updated = filters.ratings.includes(rating)
      ? filters.ratings.filter((r) => r !== rating)
      : [...filters.ratings, rating];

    updateFilters({ ...filters, ratings: updated });
  };

  const priceRanges = [
    { label: "$0 - $1000", value: "0-1000" },
    { label: "$1000 - $2000", value: "1000-2000" },
    { label: "$2000 - $3000", value: "2000-3000" },
    { label: "$3000+", value: "3000+" },
  ];

  const ratings = [
    { label: "4.5 ⭐ & up", value: 4.5 },
    { label: "4.0 ⭐ & up", value: 4.0 },
    { label: "3.5 ⭐ & up", value: 3.5 },
    { label: "3.0 ⭐ & up", value: 3.0 },
  ];

  return (
    <div className="md:col-span-1 space-y-4">
      <div className="soft-card p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-slate-900">Filters</h3>
          <button
            onClick={clearFilters}
            className="text-xs text-rose-500 font-semibold"
          >
            Clear
          </button>
        </div>

        {/* Categories Filter */}
        <div className="mb-6">
          <h4 className="font-medium text-sm mb-3 text-slate-700">Category</h4>
          <div className="space-y-2">
            {loading ? (
              <div className="space-y-2">
                <div className="h-5 bg-slate-200 rounded animate-pulse"></div>
                <div className="h-5 bg-slate-200 rounded animate-pulse"></div>
              </div>
            ) : categories.length > 0 ? (
              categories.map((category) => (
                <label
                  key={category.id}
                  className="flex items-center cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={filters.categories.includes(category.name)}
                    onChange={() => handleCategoryChange(category.name)}
                    className="w-4 h-4 text-rose-500 rounded border-slate-300 focus:ring-rose-500"
                  />
                  <span className="ml-3 text-sm text-slate-700">
                    {category.name}
                  </span>
                </label>
              ))
            ) : (
              <p className="text-sm text-slate-500">No categories available</p>
            )}
          </div>
        </div>
        {/* Price Range Filter */}
        <div className="mb-6">
          <h4 className="font-medium text-sm mb-3 text-slate-700">
            Price Range
          </h4>
          <div className="space-y-2">
            {priceRanges.map((range) => (
              <label
                key={range.value}
                className="flex items-center cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={filters.priceRanges.includes(range.value)}
                  onChange={() => handlePriceChange(range.value)}
                  className="w-4 h-4 text-rose-500 rounded border-slate-300 focus:ring-rose-500"
                />
                <span className="ml-3 text-sm text-slate-700">
                  {range.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Rating Filter */}
        <div>
          <h4 className="font-medium text-sm mb-3 text-slate-700">Rating</h4>
          <div className="space-y-2">
            {ratings.map((rating) => (
              <label
                key={rating.value}
                className="flex items-center cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={filters.ratings.includes(rating.value)}
                  onChange={() => handleRatingChange(rating.value)}
                  className="w-4 h-4 text-rose-500 rounded border-slate-300 focus:ring-rose-500"
                />
                <span className="ml-3 text-sm text-slate-700">
                  {rating.label}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
