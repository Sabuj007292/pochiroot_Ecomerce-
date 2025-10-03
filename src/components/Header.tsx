// // src/components/Header.tsx

// import  { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaSearch, FaStore, FaEllipsisV, FaBars } from "react-icons/fa";
// import { ShoppingCart } from "lucide-react";
// import LoginMenu from "../ui/LoginMenu";
// import UserMenu from "../ui/UserMenu";
// import { useAuth } from "../context/AuthContext";

// const Header = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const { user } = useAuth();

//   return (
//     <header className="bg-white shadow-sm sticky top-0 z-50 px-4 py-3">
//       <div className="max-w-7xl mx-auto flex items-center justify-between">
//         {/* Logo */}
//         <Link to="/" className="text-2xl font-bold text-blue-600">PochiRoot</Link>

//         {/* Search bar */}
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

//         {/* Desktop right section */}
//         <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
//           {user ? <UserMenu /> : <LoginMenu />}
//           <div className="inline-flex items-center gap-2 cursor-pointer rounded-md border px-3 py-2 hover:bg-gray-100">
//             <ShoppingCart className="h-5 w-5" />
//             <span>Cart</span>
//           </div>
//           <div className="flex items-center gap-1 hover:text-blue-600 cursor-pointer">
//             <FaStore />
//             <span>Become a Seller</span>
//           </div>
//           <FaEllipsisV className="cursor-pointer" />
//         </div>

//         {/* Mobile menu toggle */}
//         <div className="md:hidden">
//           <button onClick={() => setMobileMenuOpen((prev) => !prev)} className="text-xl">
//             <FaBars />
//           </button>
//         </div>
//       </div>

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

//           {user ? <UserMenu /> : <LoginMenu />}
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaStore, FaEllipsisV, FaBars } from "react-icons/fa";
import { ShoppingCart } from "lucide-react";
import LoginMenu from "../ui/LoginMenu";
import UserMenu from "../ui/UserMenu";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user } = useAuth();
  const { numberOfItems } = useCart(); // 🛒 global cart count
  const navigate = useNavigate();
  const { fetchCartCount } = useCart();

  const handleLogoClick = async () => {
    try {
      await fetchCartCount(); // 👈 Call API before navigation
      navigate("/");          // 👈 Then go to homepage
    } catch (err) {
      console.error("Error updating cart count:", err);
      navigate("/"); // still navigate even if fetch fails
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={handleLogoClick}
          className="text-2xl font-bold text-blue-600"
        >
          PochiRoot
        </button>

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

          {/* Cart Button with Badge */}
          <Link to="/cart">
            <div className="relative inline-flex items-center gap-2 cursor-pointer rounded-md border px-3 py-2 hover:bg-gray-100">
              <ShoppingCart className="h-5 w-5" />
              <span>Cart</span>
              {numberOfItems > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                  {numberOfItems}
                </span>
              )}
            </div>
          </Link>

          {/* Become a Seller */}
          <div className="flex items-center gap-1 hover:text-blue-600 cursor-pointer">
            <FaStore />
            <span>Become a Seller</span>
          </div>

          <FaEllipsisV className="cursor-pointer" />
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="text-xl"
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
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
