import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import Sidebar from "./components/Sidebar";
import ProductBoard from "./components/product/ProductBoard";

export default function Page({ setRoute }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <>
      <Header setRoute={setRoute} onSearch={handleSearch} />
      <main className="max-w-6xl mx-auto px-4 py-12 space-y-10">
        <HeroBanner />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Sidebar />

          <ProductBoard searchQuery={searchQuery} />
        </div>
      </main>

      <Footer />
    </>
  );
}
