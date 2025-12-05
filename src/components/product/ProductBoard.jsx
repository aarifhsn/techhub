import Filters from "./Filters";
import ProductCard from "./ProductCard";

export default function ProductBoard() {
  return (
    <div className="md:col-span-3">
      <Filters />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProductCard />

        <div classNameName="soft-card overflow-hidden">
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
      </div>
    </div>
  );
}
