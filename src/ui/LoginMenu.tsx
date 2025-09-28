// import React, { useState, useRef } from "react";
// import { FaUser, FaChevronDown } from "react-icons/fa";

// const LoginMenu: React.FC = () => {
//   const [open, setOpen] = useState(false);
//   const menuRef = useRef<HTMLDivElement>(null);

//   return (
//     <div
//       className="relative"
//       ref={menuRef}
//       onMouseEnter={() => setOpen(true)}
//       onMouseLeave={() => setOpen(false)}
//     >
//       <button
//         className="flex items-center space-x-1 cursor-pointer rounded-md border px-3 py-2 text-sm font-medium hover:text-white hover:bg-blue-600 transition-all"
//       >
//         <FaUser />
//         <span>Login</span>
//         <FaChevronDown
//           className={`ml-1 text-xs transition-transform duration-300 ease-in-out ${
//             open ? "rotate-180" : "rotate-0"
//           }`}
//         />
//       </button>

//       <div
//         className={`
//           absolute right-0 mt-2 w-48 rounded-md shadow-lg border z-50 bg-white
//           transition-all duration-200 ease-out origin-top
//           ${open ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"}
//         `}
//       >
//         <ul className="py-2 text-sm text-gray-700">
//           <li>
//             <a href="/login" className="block px-4 py-2 hover:bg-gray-100">
//               Sign In
//             </a>
//           </li>
//           <li>
//             <a href="/register" className="block px-4 py-2 hover:bg-gray-100">
//               Register
//             </a>
//           </li>
//           <li>
//             <a href="/orders" className="block px-4 py-2 hover:bg-gray-100">
//               My Orders
//             </a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default LoginMenu;


// import React, { useState, useRef, useEffect } from "react";
// import { FaUser, FaChevronDown } from "react-icons/fa";

// const LoginMenu: React.FC = () => {
//   const [open, setOpen] = useState(false);
//   const menuRef = useRef<HTMLDivElement>(null);
//   const [isMobile, setIsMobile] = useState(false);

//   // Detect screen width to differentiate mobile vs desktop
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768); // Tailwind's md breakpoint
//     };

//     handleResize(); // check on mount
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
//         setOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <div
//       ref={menuRef}
//       className="relative"
//       onMouseEnter={() => !isMobile && setOpen(true)}
//       onMouseLeave={() => !isMobile && setOpen(false)}
//     >
//       <button
//         onClick={() => isMobile && setOpen((prev) => !prev)}
//         className="flex items-center space-x-1 cursor-pointer rounded-md border px-3 py-2 text-sm font-medium hover:text-white hover:bg-blue-600 transition-all"
//       >
//         <FaUser />
//         <span>Login</span>
//         <FaChevronDown
//           className={`ml-1 text-xs transition-transform duration-300 ease-in-out ${
//             open ? "rotate-180" : "rotate-0"
//           }`}
//         />
//       </button>

//       <div
//         className={`
//           absolute right-0 mt-2 w-48 rounded-md shadow-lg border z-50 bg-white
//           transition-all duration-200 ease-out origin-top
//           ${open ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"}
//         `}
//       >
//         <ul className="py-2 text-sm text-gray-700">
//           <li>
//             <a href="/login" className="block px-4 py-2 hover:bg-gray-100">
//               Sign In
//             </a>
//           </li>
//           <li>
//             <a href="/register" className="block px-4 py-2 hover:bg-gray-100">
//               Register
//             </a>
//           </li>
//           <li>
//             <a href="/orders" className="block px-4 py-2 hover:bg-gray-100">
//               My Orders
//             </a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default LoginMenu;
import React, { useState, useEffect, useRef } from "react";
import { FaUser, FaChevronDown } from "react-icons/fa";

const LoginMenu: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Detect mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className="relative"
      ref={menuRef}
      onMouseEnter={() => !isMobile && setOpen(true)}
      onMouseLeave={() => !isMobile && setOpen(false)}
    >
      <button
        onClick={() => isMobile && setOpen((prev) => !prev)}
        className="flex items-center gap-2 px-4 py-2 rounded-md border text-sm font-medium text-gray-700 hover:bg-blue-600 hover:text-white transition-colors cursor-pointer"
      >
        <FaUser />
        <span>Login</span>
        <FaChevronDown
          className={`transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"}`}
        />
      </button>

      {/* Dropdown */}
      <div
        className={`absolute left-0 mt-2 w-56 rounded-md border border-gray-200 bg-white shadow-md z-50 transform transition-all duration-200 ease-out origin-top ${
          open ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"
        }`}
      >
        <div className="p-3 border-b border-gray-200">
          <p className="text-gray-800 text-sm font-semibold">Welcome</p>
          <p className="text-gray-500 text-xs">To access account and orders</p>
          <a
            href="/login"
            className="mt-2 inline-block w-full bg-blue-600 text-white text-sm text-center py-1.5 rounded-md hover:bg-blue-700 transition"
          >
            Login
          </a>
        </div>

        <ul className="text-sm text-gray-700 py-2">
          <li>
            <a href="/register" className="block px-4 py-2 hover:bg-gray-100">
              New User? Register
            </a>
          </li>
          <li>
            <a href="/orders" className="block px-4 py-2 hover:bg-gray-100">
              My Orders
            </a>
          </li>
          <li>
            <a href="/wishlist" className="block px-4 py-2 hover:bg-gray-100">
              Wishlist
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LoginMenu;
