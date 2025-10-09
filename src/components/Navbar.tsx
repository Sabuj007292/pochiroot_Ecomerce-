import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Search, Heart, ShoppingCart } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import LoginMenu from "../ui/LoginMenu";
import UserMenu from "../ui/UserMenu";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { user } = useAuth();               // 🔐 Auth context
  const { numberOfItems } = useCart();         // 🛒 Cart context
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/75 backdrop-blur">
        {/* 🔵 Top Banner */}
        <div className="bg-blue-600 text-white">
          <div className="mx-auto max-w-7xl px-4 py-2 text-center text-sm font-medium">
            🎉 Spring Sale: Up to 50% off! Free shipping over ₹1000!
          </div>
        </div>

        {/* 🧭 Main Navbar */}
        <div className="mx-auto max-w-7xl px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            {/* 🍔 Mobile Menu Button & Logo */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 hover:bg-gray-100 rounded-md"
              >
                <Menu className="h-4 w-5" />
              </button>
              <Link to="/" className="text-2xl font-bold tracking-tight">
                PochiRoot
              </Link>
            </div>

            {/* 🔍 Desktop Search */}
            <div className="hidden flex-1 max-w-2xl md:block">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input
                  type="search"
                  placeholder="Search for products, brands and more..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* ⚙️ Desktop Actions */}
            <div className="hidden md:flex items-center gap-3">
              {user ? (
                <>
                  <UserMenu />
                  <button className="p-2 hover:bg-gray-100 rounded-md">
                    <Heart className="h-5 w-5 animate-pulse text-pink-900" />
                  </button>
                  <Link to="/cart" className="relative p-2 hover:bg-gray-100 rounded-md">
                    <ShoppingCart className="h-5 w-5 animate-pulse text-blue-900" />
                    {numberOfItems > 0 && (
                      <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                        {numberOfItems}
                      </span>
                    )}
                  </Link>
                </>
              ) : (
                <LoginMenu />
              )}
            </div>
          </div>

          {/* 📱 Mobile Search */}
          <div className="mt-3 md:hidden">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="search"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* 📱 Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white px-4 py-3 space-y-3">
            {user ? (
              <>
                <UserMenu />
                <Link
                  to="/cart"
                  className="relative p-2 hover:bg-gray-100 rounded-md flex items-center gap-2"
                >
                  <ShoppingCart className="h-5 w-5 animate-pulse" />
                  <span>Cart</span>
                  {numberOfItems > 0 && (
                    <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                      {numberOfItems}
                    </span>
                  )}
                </Link>
              </>
            ) : (
              <LoginMenu />
            )}
          </div>
        )}

        {/* 🔗 Navigation Tabs */}
        <nav className="border-t border-gray-200">
          <div className="mx-auto max-w-7xl px-4">
            <ul className="flex items-center gap-6 overflow-x-auto py-3 text-sm font-medium">
              <li>
                <Link
                  to="/products"
                  className={`whitespace-nowrap hover:text-blue-600 ${isActive("/products") ? "text-blue-600 font-semibold" : "text-gray-700"
                    }`}
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  to="/new-arrivals"
                  className={`whitespace-nowrap hover:text-blue-600 ${isActive("/new-arrivals") ? "text-blue-600 font-semibold" : "text-gray-700"
                    }`}
                >
                  New Arrivals
                </Link>
              </li>

              <li>
                <Link
                  to="/men"
                  className={`whitespace-nowrap hover:text-blue-600 ${isActive("/men") ? "text-blue-600 font-semibold" : "text-gray-700"
                    }`}
                >
                  Men
                </Link>
              </li>

              <li>
                <Link
                  to="/women"
                  className={`whitespace-nowrap hover:text-blue-600 ${isActive("/women") ? "text-blue-600 font-semibold" : "text-gray-700"
                    }`}
                >
                  Women
                </Link>
              </li>

              <li>
                <Link
                  to="/kids"
                  className={`whitespace-nowrap hover:text-blue-600 ${isActive("/kids") ? "text-blue-600 font-semibold" : "text-gray-700"
                    }`}
                >
                  Kids
                </Link>
              </li>

              <li>
                <Link
                  to="/electronics"
                  className={`whitespace-nowrap hover:text-blue-600 ${isActive("/electronics") ? "text-blue-600 font-semibold" : "text-gray-700"
                    }`}
                >
                  Electronics
                </Link>
              </li>

              <li>
                <Link
                  to="/home-living"
                  className={`whitespace-nowrap hover:text-blue-600 ${isActive("/home-living") ? "text-blue-600 font-semibold" : "text-gray-700"
                    }`}
                >
                  Home & Living
                </Link>
              </li>

              <li>
                <Link
                  to="/beauty"
                  className={`whitespace-nowrap hover:text-blue-600 ${isActive("/beauty") ? "text-blue-600 font-semibold" : "text-gray-700"
                    }`}
                >
                  Beauty
                </Link>
              </li>

              <li>
                <Link
                  to="/sale"
                  className={`whitespace-nowrap hover:text-blue-600 ${isActive("/sale") ? "text-blue-600 font-semibold" : "text-gray-700"
                    }`}
                >
                  Sale
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
