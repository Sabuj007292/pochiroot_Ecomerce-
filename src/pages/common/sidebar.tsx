import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface Product {
  id: string;
  title: string;
  imageUrl?: string;
  discountedPrice?: number;
  originalPrice?: number;
}

export default function LatestProductsSidebar() {
  const [latestProducts, setLatestProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatestProducts = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/products/latest");
        const data = await res.json();
        setLatestProducts(data.products || []);
      } catch (err) {
        console.error("Error fetching latest products:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchLatestProducts();
  }, []);

  if (loading) {
    return (
      <div className="space-y-3">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="animate-pulse flex gap-3 p-3 bg-white rounded-xl shadow-sm">
            <div className="w-20 h-20 bg-gray-200 rounded-lg"></div>
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-3 bg-gray-200 rounded w-1/2"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {latestProducts.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <Link
            to={`/product/${product.id}`}
            className="block bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-3 group border border-gray-100"
          >
            <div className="flex items-center gap-3">
              <div className="relative flex-shrink-0">
                <img
                  src={product.imageUrl || "/placeholder.svg"}
                  alt={product.title}
                  className="w-20 h-20 object-cover rounded-lg shadow-sm group-hover:shadow-md transition-shadow duration-300"
                />
                <div className="absolute -top-1 -right-1 bg-gradient-to-r from-orange-400 to-red-500 text-white text-xs px-2 py-0.5 rounded-full font-semibold shadow">
                  NEW
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-2 mb-1">
                  {product.title}
                </h4>
                <div className="flex items-center gap-2">
                  {product.discountedPrice && (
                    <span className="text-base font-bold text-green-600">
                      ₹{product.discountedPrice}
                    </span>
                  )}
                  {product.originalPrice && (
                    <span className="text-xs text-gray-400 line-through">
                      ₹{product.originalPrice}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
