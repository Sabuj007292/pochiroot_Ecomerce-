// src/pages/MenPage.tsx

import { useEffect, useRef, useState } from "react";
import axios from "axios";
import type { Product } from "../shop/Product-Card";
import Navbar from "../../components/Navbar";
import SidebarFilters from "../shop/Sidebar-Filters";
import { ProductGrid } from "../shop/Product-Gird";
import AfterLoginFooter from "../common/AfterLoginFooter";

export default function MenPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    const fetchMenProducts = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/admin/products/all");

        const menProducts: Product[] = res.data.products
          .filter((p: any) => p.category === "Men") // Adjust based on your backend
          .map((p: any) => ({
            id: p.productId,
            title: p.name,
            subtitle: p.subtitle || "",
            price: p.price,
            discountedPrice: p.discountedPrice || "",
            discount: p.discount || 0,
            imageAlt: p.name,
            imageUrl: p.images[0] || "",
          }));

        setProducts(menProducts);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching men's products:", err);
        setLoading(false);
      }
    };

    fetchMenProducts();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading men’s products...</p>;

  return (
    <main>
      <Navbar />
      <section className="mx-auto max-w-8xl px-4 py-8 md:px-6">
        <div className="mb-4">
          <h1 className="text-2xl font-semibold text-gray-900">Men's Collection</h1>
          <p className="text-sm text-gray-500">Explore the latest styles for men</p>
        </div>

        <div className="flex flex-col gap-6 md:flex-row">
          <SidebarFilters />
          <div className="flex-1">
            <ProductGrid products={products} />
          </div>
        </div>
      </section>
      <AfterLoginFooter />
    </main>
  );
}
