import { useEffect, useState } from "react";
import { cartAPI } from "../services/api";

export const useCartData = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch cart
  const fetchCart = async () => {
    try {
      setLoading(true);
      const response = await cartAPI.getCart();
      setCartItems(response.data);
    } catch (err) {
      console.error("Error fetching cart:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  // Add to cart
  const addToCart = async (productId, quantity = 1) => {
    try {
      await cartAPI.addToCart(productId, quantity);
      await fetchCart();
      return { success: true };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  // Update cart item
  const updateCartItem = async (cartItemId, quantity) => {
    try {
      await cartAPI.updateCartItem(cartItemId, quantity);
      await fetchCart();
      return { success: true };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  // Remove from cart
  const removeFromCart = async (cartItemId) => {
    try {
      await cartAPI.removeFromCart(cartItemId);
      await fetchCart();
      return { success: true };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  // Clear cart
  const clearCart = async () => {
    try {
      await cartAPI.clearCart();
      setCartItems([]);
      return { success: true };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  // Calculate totals
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => {
    return sum + (item.product?.price || 0) * item.quantity;
  }, 0);

  return {
    cartItems,
    loading,
    addToCart,
    updateCartItem,
    removeFromCart,
    clearCart,
    fetchCart,
    totalItems,
    totalPrice,
  };
};
