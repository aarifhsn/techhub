import { useContext, useState } from "react";
import { CartContext } from "../../context/index";

export default function ProductCard({ product }) {
  const { addToCart, removeFromCart, cartItems } = useContext(CartContext);
  const [adding, setAdding] = useState(false);

  const {
    id,
    title,
    price,
    description,
    image,
    rating_rate,
    rating_count,
    stock,
    createdAt,
  } = product;

  // Format date
  const uploadDate = new Date(createdAt).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  // Format price
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);

  const productImage = image
    ? `http://localhost:9000/${image}`
    : `https://placehold.co/400x400/e2e8f0/64748b?text=${encodeURIComponent(
        title
      )}`;

  const handleAddToCart = async () => {
    setAdding(true);
    const result = await addToCart(id, 1);
    setAdding(false);

    if (result.success) {
      // Optional: Show success message
      console.log("Product added to cart!");
    } else {
      alert("Failed to add to cart: " + result.error);
    }
  };

  const cartItem = cartItems.find((item) => item.productId === id);
  const isInCart = !!cartItem;

  const handleRemoveFromCart = async () => {
    if (!cartItem) return;

    setAdding(true);
    const result = await removeFromCart(cartItem.id);
    setAdding(false);

    if (!result.success) {
      alert("Failed to remove from cart: " + result.error);
    }
  };

  return (
    <div className="soft-card overflow-hidden hover:-translate-y-1 transition-all">
      <div className="aspect-square bg-gradient-to-br from-slate-100 via-white to-rose-50 flex items-center justify-center">
        <img
          src={productImage}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-lg text-slate-900 line-clamp-2">
            {title}
          </h3>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-amber-500">
            ⭐ {rating_rate?.toFixed(1) || "0.0"}
          </span>
          <span className="text-slate-500">({rating_count || 0} reviews)</span>
        </div>
        <p className="text-slate-500 text-sm">
          Upload on: <span className="font-semibold">{uploadDate}</span>
        </p>

        <p className="text-slate-600 text-sm line-clamp-2">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-slate-900">
            {formattedPrice}
          </span>
          <span className="text-sm text-emerald-600 font-medium">
            {stock > 0 ? `In Stock (${stock})` : "Out of Stock"}
          </span>
        </div>
        <button
          onClick={isInCart ? handleRemoveFromCart : handleAddToCart}
          disabled={stock === 0 || adding}
          className={`w-full py-2.5 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed ${
            isInCart
              ? "bg-red-400 text-white hover:bg-red-600"
              : "button-primary"
          }`}
        >
          {adding
            ? isInCart
              ? "Removing..."
              : "Adding..."
            : isInCart
            ? "Remove from Cart"
            : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
