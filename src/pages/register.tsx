// import React from "react";
// import { Link } from "react-router-dom";

// const RegisterPage: React.FC = () => {
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

//           {/* Navigation */}
//           <nav className="space-x-4 text-sm font-medium">
//             <Link to="/login" className="text-gray-600 hover:text-teal-700">Login</Link>
//             <Link to="/register" className="text-gray-600 hover:text-teal-700">Register</Link>
//           </nav>
//         </div>
//       </header>

//       {/* Registration Form */}
//       <section className="mx-auto max-w-md px-4 py-10 md:px-6">
//         <div className="border rounded-lg shadow-sm p-6 bg-white">
//           <h2 className="text-xl font-semibold mb-6">Create account</h2>

//           <form className="grid gap-4">
//             {/* Name */}
//             <div className="grid gap-2">
//               <label htmlFor="name" className="text-sm font-medium text-gray-700">
//                 Name
//               </label>
//               <input
//                 id="name"
//                 type="text"
//                 autoComplete="name"
//                 placeholder="Jane Doe"
//                 className="w-full rounded-md border px-3 py-2 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
//               />
//             </div>

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
//                 autoComplete="new-password"
//                 placeholder="••••••••"
//                 className="w-full rounded-md border px-3 py-2 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
//               />
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="w-full bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold py-2.5 rounded-md transition"
//             >
//               Create account
//             </button>
//           </form>

//           {/* Footer */}
//           <p className="text-center text-sm text-gray-500 mt-4">
//             Already have an account?{" "}
//             <Link to="/login" className="text-teal-600 hover:underline">
//               Sign in
//             </Link>
//           </p>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default RegisterPage;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const RegisterPage: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://pochiroot-ecomerce-backend.vercel.app/api/auth/register", {
        name,
        email,
        password,
      });

      toast.success(res.data.message || "User registered successfully ✅");

      // Redirect after short delay
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (err: any) {
      if (err.response) {
        toast.error(err.response.data.message);
      } else {
        toast.error("Something went wrong.");
      }
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="w-full border-b bg-white sticky top-0 z-50 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-blue-600">PochiRoot</span>
            <span className="hidden sm:inline text-xs text-gray-500 leading-4">
              Explore <span className="text-yellow-500 font-semibold">Plus ✨</span>
            </span>
          </Link>

          <nav className="space-x-4 text-sm font-medium">
            <Link to="/login" className="text-gray-600 hover:text-teal-700">Login</Link>
            <Link to="/register" className="text-gray-600 hover:text-teal-700">Register</Link>
          </nav>
        </div>
      </header>

      {/* Registration Form */}
      <section className="mx-auto max-w-md px-4 py-10 md:px-6">
        <div className="border rounded-lg shadow-sm p-6 bg-white">
          <h2 className="text-xl font-semibold mb-6">Create account</h2>

          <form className="grid gap-4" onSubmit={handleSubmit}>
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Jane Doe"
                className="w-full rounded-md border px-3 py-2 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-md border px-3 py-2 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="grid gap-2">
              <label htmlFor="password" className="text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="w-full rounded-md border px-3 py-2 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold py-2.5 rounded-md transition"
            >
              Create account
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-teal-600 hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default RegisterPage;
