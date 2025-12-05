export default function Header() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-rose-400 to-orange-300 flex items-center justify-center text-white font-bold">
            TH
          </div>
          <div className="flex flex-col">
            <a
              href="#"
              className="text-xl font-semibold text-slate-900 tracking-tight"
            >
              TechHub
            </a>
            <span className="text-xs text-slate-500">
              Gear for builders & dreamers
            </span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#" className="text-slate-700 hover:text-slate-900">
            Products
          </a>
          <a href="#" className="text-slate-700 hover:text-slate-900">
            About
          </a>
          <a href="#" className="text-slate-700 hover:text-slate-900">
            Support
          </a>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <div className="flex items-center gap-2 px-3 py-2 rounded-full border border-slate-200 bg-white shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-slate-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="7"></circle>
                <line x1="16.65" y1="16.65" x2="21" y2="21"></line>
              </svg>
              <input
                type="text"
                placeholder="Search laptops, GPUs, desktops..."
                className="bg-transparent text-sm placeholder:text-slate-400 focus:outline-none w-64"
              />
            </div>
          </div>
          <a
            href="cart.html"
            className="relative flex items-center gap-2 px-3 py-2 rounded-full border border-slate-200 bg-white shadow-sm hover:border-rose-300"
          >
            <svg
              className="w-5 h-5 text-rose-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              ></path>
            </svg>
            <span className="text-sm font-semibold text-slate-900">Cart</span>
            <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-rose-500 text-white text-xs font-bold flex items-center justify-center shadow">
              3
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}
