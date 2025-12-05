export default function Filters({
  products = [],
  onSortChange,
  currentSort = "newest",
}) {
  const handleSortChange = (e) => {
    onSortChange(e.target.value);
  };

  return (
    <div className="flex items-center justify-between mb-6">
      <p className="text-slate-600">
        Showing {products.length}{" "}
        {products.length === 1 ? "product" : "products"}
      </p>
      <div className="flex items-center gap-2">
        <label htmlFor="sort" className="text-sm font-medium text-slate-700">
          Sort by:
        </label>
        <select
          id="sort"
          value={currentSort}
          onChange={handleSortChange}
          className="px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-rose-300 bg-white"
        >
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
          <option value="low-to-high">Price: Low to High</option>
          <option value="high-to-low">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
}
