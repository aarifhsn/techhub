import { useContext } from "react";
import { CartContext } from "../../context/index";

export default function CartBoard({ setRoute }) {
  const { cartItems, updateCartItem, removeFromCart, totalPrice, loading } =
    useContext(CartContext);

  const subtotal = totalPrice;
  const shipping = 0;
  const tax = 0;
  const total = subtotal + shipping + tax;

  const handleQuantityChange = async (cartItemId, newQuantity) => {
    if (newQuantity < 1) return;
    await updateCartItem(cartItemId, newQuantity);
  };

  const handleRemove = async (cartItemId) => {
    await removeFromCart(cartItemId);
  };

  // Loading state
  if (loading && cartItems.length === 0) {
    return (
      <main className="max-w-6xl mx-auto px-4 py-10">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-slate-200 rounded w-1/4"></div>
          <div className="h-32 bg-slate-200 rounded"></div>
          <div className="h-32 bg-slate-200 rounded"></div>
        </div>
      </main>
    );
  }

  // Empty cart state
  if (cartItems.length === 0) {
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
        </div>
        <div className="soft-card p-12 text-center space-y-4">
          <svg
            className="w-24 h-24 mx-auto text-slate-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
          <p className="text-slate-500 text-lg">Your cart is empty</p>
          <button
            onClick={() => setRoute("home")}
            className="inline-block px-6 py-3 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-colors font-semibold"
          >
            Start Shopping
          </button>
        </div>
      </main>
    );
  }

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
        <button
          onClick={() => setRoute("home")}
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
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="soft-card p-4 flex gap-4">
                <img
                  src={
                    item.product?.image
                      ? `http://localhost:9000/${item.product.image}`
                      : "placeholder"
                  }
                  alt={item.product?.title}
                  className="w-24 h-24 object-cover rounded-lg bg-slate-100"
                />
                <div className="flex-1 space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-semibold text-lg text-slate-900">
                        {item.product?.title}
                      </h3>
                      <p className="text-slate-500 text-sm">
                        {item.product?.category || "Product"}
                      </p>
                    </div>
                    <button
                      onClick={() => handleRemove(item.id)}
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
                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity - 1)
                        }
                        disabled={item.quantity <= 1}
                        className="h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center hover:border-rose-300"
                      >
                        −
                      </button>
                      <span className="text-sm font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity + 1)
                        }
                        className="h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center hover:border-rose-300"
                      >
                        +
                      </button>
                    </div>
                    <span className="text-2xl font-bold text-slate-900">
                      ${((item.product?.price || 0) * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="soft-card p-6 sticky top-24 space-y-6">
            <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

            <div className="space-y-3 border-slate-200">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Shipping</span>
                <span className="text-emerald-600 font-semibold">Free</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xl font-bold pt-3 text-slate-900">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
