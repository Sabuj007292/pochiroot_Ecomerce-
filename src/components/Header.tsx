// import { useState } from "react";
// import { Menu, X, ShoppingCart } from "lucide-react";

// // Optional: Replace these with your UI components or use native <input> and <button>
// const Header = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [query, setQuery] = useState("");

//   return (
//     <header className="w-full border-b bg-white sticky top-0 z-50">
//       <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
//         {/* Logo & Desktop Nav */}
//         <div className="flex items-center gap-4">
//           <a href="/" className="font-semibold text-lg md:text-xl text-teal-800">
//             ClothCo
//           </a>

//           {/* Desktop Nav */}
//           <nav className="hidden md:flex items-center gap-6 text-sm">
//             <a href="/products" className="text-gray-600 hover:text-teal-800">Shop</a>
//             <a href="/login" className="text-gray-600 hover:text-teal-800">Login</a>
//             <a href="/register" className="text-gray-600 hover:text-teal-800">Register</a>
//           </nav>
//         </div>

//         {/* Right: Search (Desktop) + Cart + Mobile Menu Toggle */}
//         <div className="flex items-center gap-3">
//           {/* Desktop Search */}
//           <div className="hidden md:flex w-full max-w-sm items-center gap-2">
//             <input
//               type="text"
//               placeholder="Search products"
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//               className="w-full rounded-md border px-3 py-2 text-sm bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
//               aria-label="Search products"
//             />
//             <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md text-sm">
//               Search
//             </button>
//           </div>

//           {/* Cart Button */}
//           <a
//             href="/cart"
//             className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-gray-100"
//           >
//             <ShoppingCart className="h-5 w-5" />
//             <span className="hidden sm:inline">Cart</span>
//             <span className="rounded bg-teal-600 px-1.5 py-0.5 text-xs text-white">
//               0
//             </span>
//           </a>

//           {/* Mobile Menu Toggle */}
//           <button
//             className="md:hidden text-gray-600"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             aria-label="Toggle menu"
//           >
//             {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       {mobileMenuOpen && (
//         <div className="md:hidden border-t bg-white px-4 py-3 space-y-4">
//           <nav className="flex flex-col gap-3 text-sm">
//             <a href="/products" className="text-gray-700 hover:text-teal-800">Shop</a>
//             <a href="/login" className="text-gray-700 hover:text-teal-800">Login</a>
//             <a href="/register" className="text-gray-700 hover:text-teal-800">Register</a>
//           </nav>

//           {/* Mobile Search */}
//           <div className="flex items-center gap-2">
//             <input
//               type="text"
//               placeholder="Search products"
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//               className="w-full rounded-md border px-3 py-2 text-sm bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
//               aria-label="Search products"
//             />
//             <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md text-sm">
//               Search
//             </button>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;


// import React, { useState } from "react";
// import { FaSearch, FaStore, FaEllipsisV, FaBars } from "react-icons/fa";
// import LoginMenu from "../ui/LoginMenu";
// import { ShoppingCart } from "lucide-react";

// const Header: React.FC = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <header className="bg-white shadow-sm px-4 py-3 sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto flex items-center justify-between">
//         {/* Left: Logo */}
//         <div className="flex items-center space-x-2">
//           <span className="text-2xl font-bold text-blue-600">PochiRoot</span>
//           <span className="hidden sm:inline text-xs text-gray-500 leading-4">
//             Explore&nbsp;
//             <span className="text-yellow-500 font-semibold">Plus ✨</span>
//           </span>
//         </div>

//         {/* Center: Search Bar */}
//         <div className="hidden md:flex flex-grow mx-6">
//           <div className="bg-blue-50 flex items-center rounded-md px-3 py-2 w-full">
//             <FaSearch className="text-gray-500 mr-2" />
//             <input
//               type="text"
//               placeholder="Search for Products, Brands and More"
//               className="bg-transparent flex-grow outline-none text-sm"
//             />
//           </div>
//         </div>

//         {/* Right: Actions */}
//         <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
//           <LoginMenu />
//           <div className="inline-flex items-center gap-2 cursor-pointer rounded-md border px-3 py-2 text-sm hover:bg-gray-100">
//             <ShoppingCart className="h-5 w-5" />
//             <span className="hidden sm:inline">Cart</span>
//             <span className="rounded bg-teal-600 px-1.5 py-0.5 text-xs text-white">
//               0
//             </span>
//           </div>
//           <div className="flex items-center space-x-1 cursor-pointer hover:text-blue-600">
//             <FaStore />
//             <span>Become a Seller</span>
//           </div>
//           <FaEllipsisV className="cursor-pointer" />
//         </div>

//         {/* Mobile Menu Toggle */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             aria-label="Toggle menu"
//             className="text-gray-600 text-xl"
//           >
//             <FaBars />
//           </button>
//         </div>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       {mobileMenuOpen && (
//         <div className="md:hidden mt-3 space-y-3 px-2 pb-3">
//           <div className="flex items-center bg-blue-50 rounded-md px-3 py-2">
//             <FaSearch className="text-gray-500 mr-2" />
//             <input
//               type="text"
//               placeholder="Search for Products"
//               className="bg-transparent flex-grow outline-none text-sm"
//             />
//           </div>

//           <LoginMenu />

//           <div className="flex items-center gap-2 border rounded-md px-3 py-2 text-sm hover:bg-gray-100">
//             <ShoppingCart className="h-5 w-5" />
//             <span>Cart</span>
//             <span className="rounded bg-teal-600 px-1.5 py-0.5 text-xs text-white">
//               0
//             </span>
//           </div>

//           <div className="flex items-center gap-2 cursor-pointer hover:text-blue-600">
//             <FaStore />
//             <span>Become a Seller</span>
//           </div>

//           <div className="flex items-center gap-2 cursor-pointer hover:text-blue-600">
//             <FaEllipsisV />
//             <span>More</span>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;


// import React, { useState } from "react";
// import { FaSearch, FaStore, FaEllipsisV, FaBars } from "react-icons/fa";
// import { ShoppingCart } from "lucide-react";
// import LoginMenu from "../ui/LoginMenu";
// import { Link } from "react-router-dom";

// const Header: React.FC = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <header className="bg-white shadow-sm sticky top-0 z-50 px-4 py-3">
//       <div className="max-w-7xl mx-auto flex items-center justify-between">
//         {/* Logo / Branding */}
//         <Link to="/" className="flex items-center space-x-2">
//           <span className="text-2xl font-bold text-blue-600">PochiRoot</span>
//           <span className="hidden sm:inline text-xs text-gray-500 leading-4">
//             Explore&nbsp;
//             <span className="text-yellow-500 font-semibold">Plus ✨</span>
//           </span>
//         </Link>

//         {/* Search bar - visible on md+ */}
//         <div className="hidden md:flex flex-grow mx-6">
//           <div className="bg-blue-50 flex items-center rounded-md px-3 py-2 w-full">
//             <FaSearch className="text-gray-500 mr-2" />
//             <input
//               type="text"
//               placeholder="Search for Products, Brands and More"
//               className="bg-transparent flex-grow outline-none text-sm"
//             />
//           </div>
//         </div>

//         {/* Desktop Right-side actions */}
//         <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
//           <LoginMenu />
//           <div className="inline-flex items-center gap-2 cursor-pointer rounded-md border px-3 py-2 hover:bg-gray-100">
//             <ShoppingCart className="h-5 w-5" />
//             <span className="hidden sm:inline">Cart</span>
//             <span className="rounded bg-teal-600 px-1.5 py-0.5 text-xs text-white">
//               0
//             </span>
//           </div>
//           <div className="flex items-center space-x-1 cursor-pointer hover:text-blue-600">
//             <FaStore />
//             <span>Become a Seller</span>
//           </div>
//           <FaEllipsisV className="cursor-pointer" />
//         </div>

//         {/* Mobile menu toggle button */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setMobileMenuOpen((prev) => !prev)}
//             aria-label="Toggle menu"
//             className="text-gray-600 text-xl cursor-pointer"
//           >
//             <FaBars />
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu Items */}
//       {mobileMenuOpen && (
//         <div className="md:hidden mt-3 space-y-3 px-2 pb-3">
//           {/* Mobile Search */}
//           <div className="flex items-center bg-blue-50 rounded-md px-3 py-2">
//             <FaSearch className="text-gray-500 mr-2" />
//             <input
//               type="text"
//               placeholder="Search for Products"
//               className="bg-transparent flex-grow outline-none text-sm"
//             />
//           </div>

//           {/* Mobile actions */}
//           <LoginMenu />

//           <div className="flex items-center gap-2 border w-fit rounded-md px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer hover:text-blue-600">
//             <ShoppingCart className="h-5 w-5" />
//             <span>Cart</span>
//             <span className="rounded bg-teal-600 px-1.5 py-0.5 text-xs text-white">
//               0
//             </span>
//           </div>

//           <div className="flex items-center gap-2 cursor-pointer hover:text-blue-600">
//             <FaStore />
//             <span>Become a Seller</span>
//           </div>

//           <div className="flex items-center gap-2 cursor-pointer hover:text-blue-600">
//             <FaEllipsisV />
//             <span>More</span>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;
// src/components/Header.tsx

import  { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaStore, FaEllipsisV, FaBars } from "react-icons/fa";
import { ShoppingCart } from "lucide-react";
import LoginMenu from "../ui/LoginMenu";
import UserMenu from "../ui/UserMenu";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user } = useAuth();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">PochiRoot</Link>

        {/* Search bar */}
        <div className="hidden md:flex flex-grow mx-6">
          <div className="bg-blue-50 flex items-center rounded-md px-3 py-2 w-full">
            <FaSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search for Products, Brands and More"
              className="bg-transparent flex-grow outline-none text-sm"
            />
          </div>
        </div>

        {/* Desktop right section */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {user ? <UserMenu /> : <LoginMenu />}
          <div className="inline-flex items-center gap-2 cursor-pointer rounded-md border px-3 py-2 hover:bg-gray-100">
            <ShoppingCart className="h-5 w-5" />
            <span>Cart</span>
          </div>
          <div className="flex items-center gap-1 hover:text-blue-600 cursor-pointer">
            <FaStore />
            <span>Become a Seller</span>
          </div>
          <FaEllipsisV className="cursor-pointer" />
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen((prev) => !prev)} className="text-xl">
            <FaBars />
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden mt-3 space-y-3 px-2 pb-3">
          <div className="flex items-center bg-blue-50 rounded-md px-3 py-2">
            <FaSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search for Products"
              className="bg-transparent flex-grow outline-none text-sm"
            />
          </div>

          {user ? <UserMenu /> : <LoginMenu />}
        </div>
      )}
    </header>
  );
};

export default Header;
