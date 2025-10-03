// import { products } from "../lib/Product";
// import { ProductGrid } from "../pages/shop/Product-Gird";
// import SidebarFilters from "../pages/shop/Sidebar-Filters";
// // import Navbar from "./navbar";
// import Header from "./Header";

// const ProductsPage = () => {
//   return (
//     <main>
//       <Header />
//         {/* <Navbar /> */}
//       <section className="mx-auto max-w-7xl px-4 py-8 md:px-6">
//         <div className="mb-4">
//           <h1 className="text-2xl font-semibold text-gray-900">All Products</h1>
//           <p className="text-sm text-gray-500">Browse our latest clothing drops</p>
//         </div>
//         <div className="flex flex-col gap-6 md:flex-row">
//           <SidebarFilters />
//           <div className="flex-1">
//             <ProductGrid products={products} />
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default ProductsPage;
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import SidebarFilters from "../pages/shop/Sidebar-Filters";
import { ProductGrid } from "../pages/shop/Product-Gird";
import Header from "./Header";
import type { Product } from "../pages/shop/Product-Card";

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const hasFetched = useRef(false);

  useEffect(() => {
     if (hasFetched.current) return; // skip second call
    hasFetched.current = true;
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/admin/products/all");
        const productsData: Product[] = res.data.products.map((p: any) => ({
          id: p.productId,
          title: p.name,
          subtitle: p.subtitle || "",
          price: p.price,
          discountedPrice: p.discountedPrice || "",
          discount: p.discount || 0,
          imageAlt: p.name,
          imageUrl: p.images[0] || "", // first image from backend
        }));
        setProducts(productsData);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching products:", err);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading products...</p>;

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
}
