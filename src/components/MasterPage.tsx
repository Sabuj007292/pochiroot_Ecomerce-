import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import LatestProductsSidebar from "../pages/common/sidebar";
import AfterLoginFooter from "../pages/common/AfterLoginFooter";
import Navbar from "./Navbar";
import WishlistSidebar from "../pages/common/WishlistSidebar";

interface MasterLayoutProps {
    children: ReactNode;
}

export default function MasterLayout({ children }: MasterLayoutProps) {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col">
                <div className="flex flex-col lg:flex-row mx-auto w-full px-4 py-8 md:px-6 flex-1 gap-8">
                    {/* Left Sidebar */}
                    <motion.aside
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="hidden lg:block flex-shrink-0"
                        style={{ minWidth: "320px", maxWidth: "320px" }}
                    >
                        <div className="sticky top-24 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden max-h-[calc(100vh-6rem)]">
                            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4">
                                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                                    <span className="text-2xl">🔥</span>
                                    Latest Products
                                </h2>
                                <p className="text-blue-100 text-sm mt-1">Hot deals just for you</p>
                            </div>

                            <div className="p-4 max-h-[calc(100vh-240px)] overflow-y-auto custom-scrollbar">
                                <LatestProductsSidebar />
                            </div>

                            <div className="p-4 bg-gray-50 border-t">
                                <Link
                                    to="/products"
                                    className="block text-center py-2 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg"
                                >
                                    View All Products →
                                </Link>
                            </div>
                        </div>
                    </motion.aside>

                    {/* Main Content */}
                    <motion.main
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex-1 w-full"  // make sure it takes available width as a container
                    >
                        <div className="mx-auto w-full max-w-3xl">  {/* <-- centering and max width here */}
                            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 min-h-[calc(100vh-180px)] p-4 md:p-6">
                                {children}
                            </div>
                        </div>
                    </motion.main>

                    <motion.aside
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="hidden xl:block w-full xl:w-80 flex-shrink-0"
                        style={{ minWidth: '320px' }}
                    >
                        <div className="sticky top-24 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden max-h-[calc(100vh-6rem)]">
                            <div className="bg-gradient-to-r from-pink-500 to-rose-500 p-4">
                                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                                    💖 Wishlist
                                </h2>
                                <p className="text-pink-100 text-sm mt-1">Items you love</p>
                            </div>

                            <div className="p-4 max-h-[calc(100vh-240px)] overflow-y-auto custom-scrollbar">
                                <WishlistSidebar />
                            </div>
                        </div>
                    </motion.aside>

                </div>

                <AfterLoginFooter />

                <style>{`
          .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 10px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: linear-gradient(to bottom, #3b82f6, #6366f1);
            border-radius: 10px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(to bottom, #2563eb, #4f46e5);
          }
          @media (max-width: 1023px) {
            .sticky {
              position: static !important;
              max-height: none !important;
            }
          }
        `}</style>
            </div>
        </>
    );
}
