import { useState } from "react";
import Page from "./Page";
import Cart from "./pages/Cart";
import { CartProvider, FilterProvider } from "./provider";

function App() {
  const [route, setRoute] = useState("home"); // For routing without React Router

  return (
    <CartProvider>
      <FilterProvider>
        {route === "home" && <Page setRoute={setRoute} />}
        {route === "cart" && <Cart setRoute={setRoute} />}
      </FilterProvider>
    </CartProvider>
  );
}

export default App;
