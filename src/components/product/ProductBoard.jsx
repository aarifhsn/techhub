import { useEffect, useState } from "react";
import { productAPI } from "../../services/api";
import Filters from "./Filters";
import ProductCard from "./ProductCard";

export default function ProductBoard() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortBy, setSortBy] = useState("newest");

  useEffect(() => {
    fetchProducts();
  }, [sortBy]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);

      // Map frontend sort values to backend API parameters
      const sortParams = getSortParams(sortBy);
      const response = await productAPI.getAll(sortParams);

      setProducts(response.data);
    } catch (err) {
      setError(err.message);
      console.error("Error fetching products:", err);
    } finally {
      setLoading(false);
    }
  };

  // Convert sort option to API parameters
  const getSortParams = (sortOption) => {
    switch (sortOption) {
      case "newest":
        return { sortBy: "createdAt", order: "desc" };
      case "oldest":
        return { sortBy: "createdAt", order: "asc" };
      case "low-to-high":
        return { sortBy: "price", order: "asc" };
      case "high-to-low":
        return { sortBy: "price", order: "desc" };
      case "rating-high":
        return { sortBy: "rating_rate", order: "desc" };
      case "name-asc":
        return { sortBy: "title", order: "asc" };
      default:
        return {};
    }
  };

  const handleSortChange = (newSort) => {
    setSortBy(newSort);
  };

  // Loading skeleton
  if (loading) {
    return (
      <div className="md:col-span-3">
        <Filters />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="soft-card overflow-hidden">
              <div className="aspect-square bg-slate-100 animate-pulse"></div>
              <div className="p-4 space-y-3">
                <div className="h-4 bg-slate-200 rounded animate-pulse"></div>
                <div className="h-4 bg-slate-200 rounded animate-pulse w-3/4"></div>
                <div className="h-4 bg-slate-200 rounded animate-pulse w-2/3"></div>
                <div className="h-4 bg-slate-200 rounded animate-pulse w-1/2"></div>
                <button
                  className="w-full bg-slate-200 text-white py-2 rounded-lg font-medium mt-2 animate-pulse"
                  disabled
                ></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="md:col-span-3">
        <div className="text-center py-12">
          <p className="text-red-600 text-lg">Error: {error}</p>
          <button
            onClick={fetchProducts}
            className="mt-4 button-primary px-6 py-2 rounded-lg"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // Empty state
  if (products.length === 0) {
    return (
      <div className="md:col-span-3">
        <Filters
          products={products}
          onSortChange={handleSortChange}
          currentSort={sortBy}
        />
        <div className="text-center py-12">
          <p className="text-slate-600 text-lg">No products found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="md:col-span-3">
      <Filters
        products={products}
        onSortChange={handleSortChange}
        currentSort={sortBy}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
