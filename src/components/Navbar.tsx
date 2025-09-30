import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { FaBars } from "react-icons/fa";
import UserMenu from "../ui/UserMenu";

const Navbar: React.FC = () => {
  const [, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          PochiRoot
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/products" className="text-gray-600 hover:text-teal-700">
            Shop
          </Link>

          {/* ✅ User dropdown here */}
          <UserMenu />

          {/* Cart */}
          <div className="flex items-center gap-1 cursor-pointer rounded-md border px-2 py-1 hover:bg-gray-100">
            <ShoppingCart className="h-5 w-5" />
            <span className="text-sm">Cart</span>
            <span className="rounded bg-teal-600 px-1 text-xs text-white">0</span>
          </div>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="text-gray-600 text-xl"
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* Optional: Mobile menu content can go here */}
    </nav>
  );
};

export default Navbar;
