import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import ProductBoard from "./components/product/ProductBoard";
import Sidebar from "./components/Sidebar";

export default function Page() {
  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-12 space-y-10">
        <HeroBanner />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Sidebar />

          <ProductBoard />
        </div>
      </main>

      <Footer />
    </>
  );
}
