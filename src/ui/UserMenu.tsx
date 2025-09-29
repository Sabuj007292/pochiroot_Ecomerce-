import React, { useState, useRef, useEffect } from "react";
import { FaUser, FaChevronDown, FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // adjust path if needed

const UserMenu: React.FC = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const isMobile = window.innerWidth < 768;

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

  const handleLogout = () => {
    logout();
    setOpen(false);
    navigate("/login");
  };

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
        <span>{user ? user.name.split(" ")[0] : "Login"}</span>
        <FaChevronDown
          className={`transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"}`}
        />
      </button>

      {/* Dropdown */}
      <div
        className={`absolute right-0 mt-2 w-56 rounded-md border border-gray-200 bg-white shadow-md z-50 transform transition-all duration-200 ease-out origin-top ${
          open ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"
        }`}
      >
        {!user ? (
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
        ) : (
          <div className="p-3 border-b border-gray-200 flex items-center gap-2">
            <FaUserCircle className="text-2xl text-blue-500" />
            <div>
              <p className="text-sm font-medium text-gray-800">{user.name}</p>
              <p className="text-xs text-gray-500">{user.email}</p>
            </div>
          </div>
        )}

        <ul className="text-sm text-gray-700 py-2">
          {!user ? (
            <>
              <li>
                <a href="/register" className="block px-4 py-2 hover:bg-gray-100">
                  New User? Register
                </a>
              </li>
            </>
          ) : (
            <>
              <li>
                <a href="/profile" className="block px-4 py-2 hover:bg-gray-100">
                  Profile
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
              <li>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2 text-red-600"
                >
                  <FaSignOutAlt /> Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default UserMenu;
