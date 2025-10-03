// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { Menu, Search, Heart, ShoppingCart } from "lucide-react";
// import { useAuth } from "../context/AuthContext";
// import LoginMenu from "../ui/LoginMenu";
// import UserMenu from "../ui/UserMenu";
// import axios from "axios";

// const Navbar = () => {
//   const { user, token } = useAuth();
//   const [cartCount, setCartCount] = useState(0);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  

//   // Fetch cart count only if logged in
//   useEffect(() => {
//     const fetchCartCount = async () => {
//       if (!user || !token) return;

//       try {
//         const response = await axios.get("http://localhost:3000/api/users/cart", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         const cartItems = response.data.cart?.items || [];
//         const totalQuantity = cartItems.reduce(
//           (sum: number, item: any) => sum + (item.quantity || 0),
//           0
//         );

//         setCartCount(totalQuantity);
//       } catch (error) {
//         console.error("Error fetching cart count:", error);
//         setCartCount(0);
//       }
//     };

//     fetchCartCount();
//   }, [user, token]);

//   return (
//     <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/75 backdrop-blur">
//       {/* Top Banner */}
//       <div className="bg-blue-600 text-white">
//         <div className="mx-auto max-w-7xl px-4 py-2 text-center text-sm font-medium">
//           Spring Sale: Up to 50% off on selected items! Free shipping on orders over ₹1000
//         </div>
//       </div>

//       {/* Main Navbar */}
//       <div className="mx-auto max-w-7xl px-4 py-3">
//         <div className="flex items-center justify-between gap-4">
//           {/* Logo */}
//           <div className="flex items-center gap-2">
//             <button
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               className="md:hidden p-2 hover:bg-gray-100 rounded-md"
//             >
//               <Menu className="h-4 w-5" />
//             </button>
//             <Link to="/" className="text-2xl font-bold tracking-tight">
//               PochiRoot
//             </Link>
//           </div>

//           {/* Search Bar */}
//           <div className="hidden flex-1 max-w-2xl md:block">
//             <div className="relative">
//               <Search className="absolute left-3 top-1/2 h-3 w-4 -translate-y-1/2 text-gray-400" />
//               <input
//                 type="search"
//                 placeholder="Search for products, brands and more..."
//                 className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//           </div>

//           {/* Desktop Actions */}
//           <div className="hidden md:flex items-center gap-2">
//             {user ? (
//               <>
//                 <UserMenu />
//                 <button className="p-2 hover:bg-gray-100 rounded-md">
//                   <Heart className="h-5 w-5" />
//                 </button>
//                 <Link to="/cart" className="p-2 hover:bg-gray-100 rounded-md relative">
//                   <ShoppingCart className="h-5 w-5" />
//                   {cartCount > 0 && (
//                     <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
//                       {cartCount}
//                     </span>
//                   )}
//                 </Link>
//               </>
//             ) : (
//               <LoginMenu />
//             )}
//           </div>
//         </div>

//         {/* Mobile Search */}
//         <div className="mt-3 md:hidden">
//           <div className="relative">
//             <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
//             <input
//               type="search"
//               placeholder="Search products..."
//               className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {mobileMenuOpen && (
//         <div className="md:hidden border-t border-gray-200 bg-white px-4 py-3 space-y-3">
//           {user ? (
//             <>
//               <UserMenu />
//               <Link to="/cart" className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100">
//                 <ShoppingCart className="h-5 w-5" />
//                 <span>Cart</span>
//                 {cartCount > 0 && (
//                   <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
//                     {cartCount}
//                   </span>
//                 )}
//               </Link>
//             </>
//           ) : (
//             <LoginMenu />
//           )}
//         </div>
//       )}

//       {/* Navigation */}
//       <nav className="border-t border-gray-200">
//         <div className="mx-auto max-w-7xl px-4">
//           <ul className="flex items-center gap-6 overflow-x-auto py-3 text-sm font-medium">
//             <li><a href="#" className="whitespace-nowrap hover:text-blue-600 transition-colors">New Arrivals</a></li>
//             <li><a href="#" className="whitespace-nowrap hover:text-blue-600 transition-colors">Men</a></li>
//             <li><a href="#" className="whitespace-nowrap hover:text-blue-600 transition-colors">Women</a></li>
//             <li><a href="#" className="whitespace-nowrap hover:text-blue-600 transition-colors">Kids</a></li>
//             <li><a href="#" className="whitespace-nowrap hover:text-blue-600 transition-colors">Electronics</a></li>
//             <li><a href="#" className="whitespace-nowrap hover:text-blue-600 transition-colors">Home & Living</a></li>
//             <li><a href="#" className="whitespace-nowrap hover:text-blue-600 transition-colors">Beauty</a></li>
//             <li><a href="#" className="whitespace-nowrap text-blue-600 font-semibold">Sale</a></li>
//           </ul>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { Menu, Search, Heart, ShoppingCart } from "lucide-react";
// import { useAuth } from "../context/AuthContext";
// import LoginMenu from "../ui/LoginMenu";
// import UserMenu from "../ui/UserMenu";
// import { useCart } from "../context/CartContext";

// const Navbar = () => {
//   const { user } = useAuth(); // make sure AuthContext provides `user`
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//    const { totalItems } = useCart(); // 🔥 get total cart items

//   return (
//     <>
//     <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/75 backdrop-blur">
//       {/* Top Banner */}
//       <div className="bg-blue-600 text-white">
//         <div className="mx-auto max-w-7xl px-4 py-2 text-center text-sm font-medium">
//           Spring Sale: Up to 50% off on selected items! Free shipping on orders over ₹1000
//         </div>
//       </div>

//       {/* Main Navbar */}
//       <div className="mx-auto max-w-7xl px-4 py-3">
//         <div className="flex items-center justify-between gap-4">
//           {/* Logo */}
//           <div className="flex items-center gap-2">
//             <button
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               className="md:hidden p-2 hover:bg-gray-100 rounded-md"
//             >
//               <Menu className="h-4 w-5" />
//             </button>
//             <Link to="/" className="text-2xl font-bold tracking-tight">
//               PochiRoot
//             </Link>
//           </div>

//           {/* Search Bar */}
//           <div className="hidden flex-1 max-w-2xl md:block">
//             <div className="relative">
//               <Search className="absolute left-3 top-1/2 h-3 w-4 -translate-y-1/2 text-gray-400" />
//               <input
//                 type="search"
//                 placeholder="Search for products, brands and more..."
//                 className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//           </div>

//           {/* Desktop Actions */}
//           <div className="hidden md:flex items-center gap-2">
//             {user ? (
//               <>
//                 <UserMenu />
//                 <button className="p-2 hover:bg-gray-100 rounded-md">
//                   <Heart className="h-5 w-5" />
//                 </button>
//                 <Link to="/cart" className="relative p-2 hover:bg-gray-100 rounded-md">
//                   <ShoppingCart className="h-5 w-5" />
//                   {totalItems > 0 && (
//                     <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
//                       {totalItems} {/* ✅ use totalItems dynamically */}
//                     </span>
//                   )}
//                 </Link>
//               </>
//             ) : (
//               <LoginMenu />
//             )}
//           </div>
//         </div>

//         {/* Mobile Search */}
//         <div className="mt-3 md:hidden">
//           <div className="relative">
//             <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
//             <input
//               type="search"
//               placeholder="Search products..."
//               className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {mobileMenuOpen && (
//         <div className="md:hidden border-t border-gray-200 bg-white px-4 py-3 space-y-3">
//           {user ? (
//             <>
//               <UserMenu />
//               <Link to="/cart" className="relative p-2 hover:bg-gray-100 rounded-md flex items-center gap-2">
//                 <ShoppingCart className="h-5 w-5" />
//                 <span>Cart</span>
//                 {totalItems > 0 && (
//                   <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
//                     {totalItems}
//                   </span>
//                 )}
//               </Link>
//             </>
//           ) : (
//             <LoginMenu />
//           )}
//         </div>
//       )}

//       {/* Navigation */}
//       <nav className="border-t border-gray-200">
//         <div className="mx-auto max-w-7xl px-4">
//           <ul className="flex items-center gap-6 overflow-x-auto py-3 text-sm font-medium">
//             <li><a href="#" className="whitespace-nowrap hover:text-blue-600 transition-colors">New Arrivals</a></li>
//             <li><a href="#" className="whitespace-nowrap hover:text-blue-600 transition-colors">Men</a></li>
//             <li><a href="#" className="whitespace-nowrap hover:text-blue-600 transition-colors">Women</a></li>
//             <li><a href="#" className="whitespace-nowrap hover:text-blue-600 transition-colors">Kids</a></li>
//             <li><a href="#" className="whitespace-nowrap hover:text-blue-600 transition-colors">Electronics</a></li>
//             <li><a href="#" className="whitespace-nowrap hover:text-blue-600 transition-colors">Home & Living</a></li>
//             <li><a href="#" className="whitespace-nowrap hover:text-blue-600 transition-colors">Beauty</a></li>
//             <li><a href="#" className="whitespace-nowrap text-blue-600 font-semibold">Sale</a></li>
//           </ul>
//         </div>
//       </nav>
//     </header>
//     </>
//   );
// };

// export default Navbar;



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
              <li><a href="#" className="whitespace-nowrap hover:text-blue-600">New Arrivals</a></li>
              <li><a href="#" className="whitespace-nowrap hover:text-blue-600">Men</a></li>
              <li><a href="#" className="whitespace-nowrap hover:text-blue-600">Women</a></li>
              <li><a href="#" className="whitespace-nowrap hover:text-blue-600">Kids</a></li>
              <li><a href="#" className="whitespace-nowrap hover:text-blue-600">Electronics</a></li>
              <li><a href="#" className="whitespace-nowrap hover:text-blue-600">Home & Living</a></li>
              <li><a href="#" className="whitespace-nowrap hover:text-blue-600">Beauty</a></li>
              <li><a href="#" className="whitespace-nowrap text-blue-600 font-semibold">Sale</a></li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
