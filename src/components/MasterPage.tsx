import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// import Header from "./Header";
import LatestProductsSidebar from "../pages/sidebar";
import AfterLoginFooter from "../pages/common/AfterLoginFooter";
import Navbar from "./Navbar";

interface MasterLayoutProps {
    children: ReactNode;
}

export default function MasterLayout({ children }: MasterLayoutProps) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Header */}
            {/* <Header /> */}
            <Navbar />

            <div className="flex max-w-[1600px] mx-auto px-4 py-6 gap-6">
                {/* Left Sidebar */}
                <motion.aside
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="hidden lg:block w-80 flex-shrink-0"
                >
                    <div className="sticky top-24 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
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
                    className="flex-1 min-w-0"
                >
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-100  min-h-[calc(100vh-180px)]">
                        {children}
                    </div>
                </motion.main>


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
      `}</style>
        </div>
    );
}
