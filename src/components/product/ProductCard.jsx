export default function ProductCard() {
  return (
    <div className="soft-card overflow-hidden hover:-translate-y-1 transition-all">
      <div className="aspect-square bg-gradient-to-br from-slate-100 via-white to-rose-50 flex items-center justify-center">
        <img
          src="./assets/mac-pro-tower.webp"
          alt="Apple Mac Pro Tower"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-lg text-slate-900 line-clamp-2">
            Apple Mac Pro Tower
          </h3>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-amber-500">⭐ 4.8</span>
          <span className="text-slate-500">(35 reviews)</span>
        </div>
        <p className="text-slate-500 text-sm">
          Upload on: <span className="font-semibold">15 Nov 2025</span>
        </p>

        <p className="text-slate-600 text-sm line-clamp-2">
          The ultimate workstation with M2 Ultra chip, designed for heavy video
          editing and 3D rendering.
        </p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-slate-900">$6,999</span>
          <span className="text-sm text-emerald-600 font-medium">
            In Stock (5)
          </span>
        </div>
        <button className="w-full button-primary py-2.5 rounded-lg font-semibold">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
