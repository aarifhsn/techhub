import CartBoard from "../components/cart/CartBoard";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Page({ setRoute }) {
  return (
    <>
      <Header />

      <CartBoard setRoute={setRoute} />

      <Footer />
    </>
  );
}
