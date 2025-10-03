import React, { useState } from 'react';
import { Heart, Star } from 'lucide-react';

// Product type
interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
  badgeColor?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Premium Cotton T-Shirt",
    price: 29.99,
    originalPrice: 49.99,
    rating: 4.5,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",
    badge: "Bestseller",
    badgeColor: "bg-amber-500",
  },
  {
    id: 2,
    name: "Slim Fit Denim Jeans",
    price: 59.99,
    originalPrice: 89.99,
    rating: 4.7,
    reviews: 256,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80",
    badge: "New",
    badgeColor: "bg-green-500",
  },
  {
    id: 3,
    name: "Wireless Earbuds Pro",
    price: 79.99,
    originalPrice: 129.99,
    rating: 4.8,
    reviews: 512,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&q=80",
    badge: "Hot Deal",
    badgeColor: "bg-red-500",
  },
  {
    id: 4,
    name: "Leather Crossbody Bag",
    price: 89.99,
    originalPrice: 149.99,
    rating: 4.6,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80",
    badge: "Trending",
    badgeColor: "bg-purple-500",
  },
  {
    id: 5,
    name: "Running Sneakers",
    price: 69.99,
    originalPrice: 99.99,
    rating: 4.4,
    reviews: 342,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
    badge: "Sale",
    badgeColor: "bg-orange-500",
  },
  {
    id: 6,
    name: "Smart Watch Series 5",
    price: 199.99,
    originalPrice: 299.99,
    rating: 4.9,
    reviews: 678,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
    badge: "Featured",
    badgeColor: "bg-blue-500",
  },
];

const FeaturedProducts: React.FC = () => {
  // ✅ favorites state typed
  const [favorites, setFavorites] = useState<Record<number, boolean>>({});

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const calculateDiscount = (original: number, current: number) => {
    return Math.round(((original - current) / original) * 100);
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Featured Products
            </h2>
            <p className="mt-2 text-base text-gray-600">
              Handpicked items just for you
            </p>
          </div>
          <a
            href="#"
            className="group flex items-center gap-2 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700"
          >
            View All
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6 lg:gap-6">
          {products.map((product) => {
            const discount = calculateDiscount(
              product.originalPrice,
              product.price
            );
            const isFavorite = favorites[product.id];

            return (
              <div
                key={product.id}
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Badge */}
                  {product.badge && (
                    <div
                      className={`absolute left-3 top-3 ₹{product.badgeColor} rounded-lg px-3 py-1.5 text-xs font-bold text-white shadow-lg backdrop-blur-sm`}
                    >
                      {product.badge}
                    </div>
                  )}

                  {/* Discount Badge */}
                  <div className="absolute right-3 top-3 rounded-full bg-black/80 px-2.5 py-1 text-xs font-bold text-white backdrop-blur-sm">
                    -{discount}%
                  </div>

                  {/* Favorite Button */}
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className="absolute right-3 bottom-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-white hover:scale-110 opacity-0 group-hover:opacity-100"
                  >
                    <Heart
                      className={`h-5 w-5 transition-colors ${
                        isFavorite
                          ? "fill-red-500 text-red-500"
                          : "text-gray-700"
                      }`}
                    />
                  </button>

                  {/* Quick Add Overlay */}
                  <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/60 to-transparent p-4 transition-transform duration-300 group-hover:translate-y-0">
                    <button className="w-full rounded-lg bg-white py-2 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-100">
                      Quick Add
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="line-clamp-2 text-sm font-semibold leading-tight text-gray-900 mb-2 min-h-[2.5rem]">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-3">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3.5 w-3.5 ${
                            i < Math.floor(product.rating)
                              ? "fill-amber-400 text-amber-400"
                              : "fill-gray-200 text-gray-200"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs font-medium text-gray-700">
                      {product.rating}
                    </span>
                    <span className="text-xs text-gray-400">
                      ({product.reviews})
                    </span>
                  </div>

                  {/* Price */}
                  <div className="mt-auto flex items-baseline gap-2">
                    <span className="text-xl font-bold text-gray-900">
                      ₹{product.price}
                    </span>
                    <span className="text-sm text-gray-400 line-through">
                      ₹{product.originalPrice}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
