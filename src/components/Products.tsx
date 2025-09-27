
import { products } from "../lib/Product";
import { ProductGrid } from "../pages/shop/Product-Gird";
import SidebarFilters from "../pages/shop/Sidebar-Filters";
import Header from "./Header";

const ProductsPage = () => {
  return (
    <main>
      <Header />
      <section className="mx-auto max-w-7xl px-4 py-8 md:px-6">
        <div className="mb-4">
          <h1 className="text-2xl font-semibold text-gray-900">All Products</h1>
          <p className="text-sm text-gray-500">Browse our latest clothing drops</p>
        </div>
        <div className="flex flex-col gap-6 md:flex-row">
          <SidebarFilters />
          <div className="flex-1">
            <ProductGrid products={products} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductsPage;
