import { CartContext } from "../context";
import { useCartData } from "../hooks/useCartData";

const CartProvider = ({ children }) => {
  const cartData = useCartData();

  return (
    <CartContext.Provider value={cartData}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
