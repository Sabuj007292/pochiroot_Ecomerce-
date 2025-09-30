// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";

// const LoginPage: React.FC = () => {
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       const res = await fetch("https://pochiroot-ecomerce-backend.vercel.app/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         toast.error(data.message || "Login failed");
//         return;
//       }

//       // ✅ Save token to localStorage
//       localStorage.setItem("token", data.token);

//       toast.success("Login successful! 🎉");

//       // ✅ Redirect to products
//       navigate("/products");
//     } catch (error) {
//       console.error(error);
//       toast.error("Something went wrong!");
//     }
//   };

//   return (
//     <main className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <header className="w-full border-b bg-white sticky top-0 z-50 shadow-sm">
//         <div className="mx-auto max-w-7xl px-4 py-4 flex justify-between items-center">
//           {/* Logo */}
//           <Link to="/" className="flex items-center space-x-2">
//             <span className="text-2xl font-bold text-blue-600">PochiRoot</span>
//             <span className="hidden sm:inline text-xs text-gray-500 leading-4">
//               Explore <span className="text-yellow-500 font-semibold">Plus ✨</span>
//             </span>
//           </Link>

//           {/* Nav */}
//           <nav className="space-x-4 text-sm font-medium">
//             <Link to="/products" className="text-gray-600 hover:text-teal-700">
//               Shop
//             </Link>
//             <Link to="/register" className="text-gray-600 hover:text-teal-700">
//               Register
//             </Link>
//           </nav>
//         </div>
//       </header>

//       {/* Login Form */}
//       <section className="mx-auto max-w-md px-4 py-10 md:px-6">
//         <div className="border rounded-lg shadow-sm p-6 bg-white">
//           <h2 className="text-xl font-semibold mb-6">Sign in</h2>

//           <form className="grid gap-4" onSubmit={handleSubmit}>
//             {/* Email */}
//             <div className="grid gap-2">
//               <label htmlFor="email" className="text-sm font-medium text-gray-700">
//                 Email
//               </label>
//               <input
//                 id="email"
//                 type="email"
//                 autoComplete="email"
//                 placeholder="you@example.com"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full rounded-md border px-3 py-2 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
//               />
//             </div>

//             {/* Password */}
//             <div className="grid gap-2">
//               <label htmlFor="password" className="text-sm font-medium text-gray-700">
//                 Password
//               </label>
//               <input
//                 id="password"
//                 type="password"
//                 autoComplete="current-password"
//                 placeholder="••••••••"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full rounded-md border px-3 py-2 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
//               />
//             </div>

//             {/* Submit */}
//             <button
//               type="submit"
//               className="w-full bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold py-2.5 rounded-md transition"
//             >
//               Sign in
//             </button>
//           </form>

//           {/* Footer */}
//           <p className="text-center text-sm text-gray-500 mt-4">
//             No account?{" "}
//             <Link to="/register" className="text-teal-600 hover:underline">
//               Create one
//             </Link>
//           </p>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default LoginPage;

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       const res = await fetch("https://pochiroot-ecomerce-backend.vercel.app/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         toast.error(data.message || "Login failed");
//         return;
//       }

//       localStorage.setItem("token", data.token);
//       localStorage.setItem("user", JSON.stringify(data.user));
//       toast.success("Login successful!");
//       navigate("/products");
//     } catch (err) {
//       toast.error("Something went wrong!");
//     }
//   };

//   return (
//     <main className="min-h-screen bg-gray-50">
//       <header className="w-full border-b bg-white sticky top-0 z-50 shadow-sm">
//         <div className="mx-auto max-w-7xl px-4 py-4 flex justify-between items-center">
//           <Link to="/" className="flex items-center space-x-2">
//             <span className="text-2xl font-bold text-blue-600">PochiRoot</span>
//             <span className="hidden sm:inline text-xs text-gray-500 leading-4">
//               Explore <span className="text-yellow-500 font-semibold">Plus ✨</span>
//             </span>
//           </Link>

//           <nav className="space-x-4 text-sm font-medium">
//             <Link to="/products" className="text-gray-600 hover:text-teal-700">Shop</Link>
//             <Link to="/register" className="text-gray-600 hover:text-teal-700">Register</Link>
//           </nav>
//         </div>
//       </header>

//       <section className="mx-auto max-w-md px-4 py-10 md:px-6">
//         <div className="border rounded-lg shadow-sm p-6 bg-white">
//           <h2 className="text-xl font-semibold mb-6">Sign in</h2>

//           <form className="grid gap-4" onSubmit={handleSubmit}>
//             <div className="grid gap-2">
//               <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
//               <input
//                 id="email"
//                 type="email"
//                 autoComplete="email"
//                 placeholder="you@example.com"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full rounded-md border px-3 py-2 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
//               />
//             </div>

//             <div className="grid gap-2">
//               <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
//               <input
//                 id="password"
//                 type="password"
//                 autoComplete="current-password"
//                 placeholder="••••••••"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full rounded-md border px-3 py-2 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold py-2.5 rounded-md transition"
//             >
//               Sign in
//             </button>
//           </form>

//           <p className="text-center text-sm text-gray-500 mt-4">
//             No account?{" "}
//             <Link to="/register" className="text-teal-600 hover:underline">
//               Create one
//             </Link>
//           </p>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default LoginPage;
// src/pages/LoginPage.tsx

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";
import { Mail, Lock, Eye, EyeOff, ShoppingBag } from 'lucide-react';
// import Header from "../components/Header";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { setUser } = useAuth();
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("http://localhost:3000/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                toast.error(data.message || "Login failed");
                return;
            }

            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));
            setUser(data.user); // 👈 update context
            toast.success("Login successful!");
            navigate("/products");
        } catch (err) {
            toast.error("Something went wrong!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-blue-50 flex items-center justify-center px-4">
            <div className="w-full max-w-md">
                {/* Logo/Brand Section */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl shadow-lg">
                        <ShoppingBag className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
                    <p className="text-gray-600 mt-2"><strong>Sign</strong> in to access your account and continue shopping</p>
                </div>
                {/* <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl mb-4 shadow-lg">
            <Lock className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
          <p className="text-gray-600 mt-2">Sign in to continue to your account</p>
        </div> */}

                {/* Login Card */}
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                    <div className="space-y-5">
                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                Email Address
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none"
                                />
                            </div>
                        </div>

                        {/* Password Field */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                >
                                    {showPassword ? (
                                        <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                                    ) : (
                                        <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Remember Me & Forgot Password */}
                        <div className="flex items-center justify-between">
                            <label className="flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                                />
                                <span className="ml-2 text-sm text-gray-600">Remember me</span>
                            </label>
                            <a href="#" className="text-sm font-medium text-teal-600 hover:text-teal-700">
                                Forgot password?
                            </a>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="button"
                            onClick={handleSubmit}
                            disabled={loading}
                            className={`w-full py-3 px-4 rounded-lg font-semibold text-white transition-all duration-200 cursor-pointer ${loading
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                                }`}
                        >
                            {loading ? (
                                <span className="flex items-center justify-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Signing in...
                                </span>
                            ) : (
                                "Sign in"
                            )}
                        </button>
                    </div>

                    {/* Divider */}
                    {/* <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">Or continue with</span>
            </div>
          </div> */}

                    {/* Social Login Buttons */}
                    {/* <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="ml-2 text-sm font-medium text-gray-700">Google</span>
            </button>
            <button className="flex items-center justify-center px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span className="ml-2 text-sm font-medium text-gray-700">Facebook</span>
            </button>
          </div> */}

                    {/* Sign Up Link */}
                    <p className="text-center text-sm text-gray-600 mt-6">
                        Don't have an account?{" "}
                        <Link to="/register" className="font-medium text-teal-600 hover:text-teal-700">
                            Sign up for free
                        </Link>
                    </p>
                </div>

                {/* Footer */}
                <p className="text-center text-xs text-gray-500 mt-6">
                    By continuing, you agree to our{" "}
                    <a href="#" className="underline hover:text-gray-700">Terms of Service</a>
                    {" "}and{" "}
                    <a href="#" className="underline hover:text-gray-700">Privacy Policy</a>
                </p>
            </div>
        </main>
    );
};

export default LoginPage;
