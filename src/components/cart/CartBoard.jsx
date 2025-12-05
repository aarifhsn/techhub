export default function cartBoard() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500 font-semibold uppercase tracking-wide">
            Your bag
          </p>
          <h1 className="text-3xl font-semibold text-slate-900">
            Shopping Cart
          </h1>
        </div>
        <a
          href="index.html"
          className="text-sm font-semibold text-rose-500 hover:text-rose-600 flex items-center gap-2"
        >
          <span>Continue shopping</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="space-y-4">
            <div className="soft-card p-4 flex gap-4">
              <img
                src="./assets/mac-pro-tower.webp"
                alt="Apple Mac Pro"
                className="w-24 h-24 object-cover rounded-lg bg-slate-100"
              />
              <div className="flex-1 space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-lg text-slate-900">
                      Apple Mac Pro Tower
                    </h3>
                    <p className="text-slate-500 text-sm">
                      SKU: APP-MP-001 · Apple Mac Pro
                    </p>
                  </div>
                  <button
                    className="text-slate-400 hover:text-rose-500"
                    aria-label="Remove"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button className="h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center hover:border-rose-300">
                      −
                    </button>
                    <span className="text-sm font-semibold">1</span>
                    <button className="h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center hover:border-rose-300">
                      +
                    </button>
                  </div>
                  <span className="text-2xl font-bold text-slate-900">
                    $6,999
                  </span>
                </div>
              </div>
            </div>

            <div className="soft-card p-4 flex gap-4">
              <img
                src="./assets/mac-pro-tower.webp"
                alt="Gaming Laptop"
                className="w-24 h-24 object-cover rounded-lg bg-slate-100"
              />
              <div className="flex-1 space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-lg text-slate-900">
                      High-Performance Gaming Laptop
                    </h3>
                    <p className="text-slate-500 text-sm">
                      SKU: GAM-LAP-042 · Gaming Laptop
                    </p>
                  </div>
                  <button
                    className="text-slate-400 hover:text-rose-500"
                    aria-label="Remove"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button className="h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center hover:border-rose-300">
                      −
                    </button>
                    <span className="text-sm font-semibold">2</span>
                    <button className="h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center hover:border-rose-300">
                      +
                    </button>
                  </div>
                  <span className="text-2xl font-bold text-slate-900">
                    $6,598
                  </span>
                </div>
              </div>
            </div>

            <div className="soft-card p-4 flex gap-4">
              <img
                src="./assets/mac-pro-tower.webp"
                alt="Ultrabook"
                className="w-24 h-24 object-cover rounded-lg bg-slate-100"
              />
              <div className="flex-1 space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-lg text-slate-900">
                      Ultra-thin Ultrabook
                    </h3>
                    <p className="text-slate-500 text-sm">
                      SKU: ULT-BK-089 · Ultrabook
                    </p>
                  </div>
                  <button
                    className="text-slate-400 hover:text-rose-500"
                    aria-label="Remove"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button className="h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center hover:border-rose-300">
                      −
                    </button>
                    <span className="text-sm font-semibold">1</span>
                    <button className="h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center hover:border-rose-300">
                      +
                    </button>
                  </div>
                  <span className="text-2xl font-bold text-slate-900">
                    $1,799
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="soft-card p-6 sticky top-24 space-y-6">
            <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

            <div className="space-y-3 border-slate-200">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal</span>
                <span>$15,396</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Shipping</span>
                <span className="text-emerald-600 font-semibold">Free</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Tax</span>
                <span>$0</span>
              </div>
              <div className="flex justify-between text-xl font-bold pt-3 text-slate-900">
                <span>Total</span>
                <span>$15,396</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
