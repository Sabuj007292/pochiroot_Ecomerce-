import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";

// Optional: Replace these with your UI components or use native <input> and <button>
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <header className="w-full border-b bg-white sticky top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        {/* Logo & Desktop Nav */}
        <div className="flex items-center gap-4">
          <a href="/" className="font-semibold text-lg md:text-xl text-teal-800">
            ClothCo
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="/products" className="text-gray-600 hover:text-teal-800">Shop</a>
            <a href="/login" className="text-gray-600 hover:text-teal-800">Login</a>
            <a href="/register" className="text-gray-600 hover:text-teal-800">Register</a>
          </nav>
        </div>

        {/* Right: Search (Desktop) + Cart + Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          {/* Desktop Search */}
          <div className="hidden md:flex w-full max-w-sm items-center gap-2">
            <input
              type="text"
              placeholder="Search products"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-md border px-3 py-2 text-sm bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
              aria-label="Search products"
            />
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md text-sm">
              Search
            </button>
          </div>

          {/* Cart Button */}
          <a
            href="/cart"
            className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-gray-100"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="hidden sm:inline">Cart</span>
            <span className="rounded bg-teal-600 px-1.5 py-0.5 text-xs text-white">
              0
            </span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-white px-4 py-3 space-y-4">
          <nav className="flex flex-col gap-3 text-sm">
            <a href="/products" className="text-gray-700 hover:text-teal-800">Shop</a>
            <a href="/login" className="text-gray-700 hover:text-teal-800">Login</a>
            <a href="/register" className="text-gray-700 hover:text-teal-800">Register</a>
          </nav>

          {/* Mobile Search */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search products"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-md border px-3 py-2 text-sm bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
              aria-label="Search products"
            />
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md text-sm">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
