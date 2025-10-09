import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface WishlistProduct {
  id: string;
  title: string;
  imageUrl?: string;
  price: number;
}

export default function WishlistSidebar() {
  const [wishlist, setWishlist] = useState<WishlistProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/users/wishlist", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        setWishlist(data.products || []);
      } catch (err) {
        console.error("Failed to load wishlist", err);
      } finally {
        setLoading(false);
      }
    };

    if (token) fetchWishlist();
  }, [token]);

  if (loading) {
    return (
      <div className="space-y-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="animate-pulse flex gap-3 p-3 bg-white rounded-xl shadow-sm">
            <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
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
      {wishlist.length === 0 ? (
        <p className="text-sm text-gray-600 text-center py-6">No items in wishlist.</p>
      ) : (
        wishlist.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <Link
              to={`/product/${product.id}`}
              className="block bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-3 group border border-gray-100"
            >
              <div className="flex items-center gap-3">
                <img
                  src={product.imageUrl || "/placeholder.svg"}
                  alt={product.title}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-gray-800 group-hover:text-blue-600 line-clamp-2">
                    {product.title}
                  </h4>
                  <p className="text-green-600 font-bold text-sm mt-1">₹{product.price}</p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))
      )}
    </div>
  );
}
