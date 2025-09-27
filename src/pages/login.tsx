
const LoginPage = () => {
  return (
    <main>
      {/* Header */}
      <header className="w-full border-b bg-white sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-bold text-teal-700">
            ClothCo
          </a>
          <nav className="space-x-4 text-sm">
            <a href="/products" className="text-gray-600 hover:text-teal-700">Shop</a>
            <a href="/register" className="text-gray-600 hover:text-teal-700">Register</a>
          </nav>
        </div>
      </header>

      {/* Login Form */}
      <section className="mx-auto max-w-md px-4 py-10 md:px-6">
        <div className="border rounded-lg shadow-sm p-6 bg-white">
          <h2 className="text-xl font-semibold mb-6">Sign in</h2>

          <form className="grid gap-4">
            {/* Email */}
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                className="w-full rounded-md border px-3 py-2 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            {/* Password */}
            <div className="grid gap-2">
              <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                placeholder="••••••••"
                className="w-full rounded-md border px-3 py-2 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold py-2.5 rounded-md transition"
            >
              Sign in
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-sm text-gray-500 mt-4">
            No account?{" "}
            <a
              href="/register"
              className="text-teal-600 hover:underline"
            >
              Create one
            </a>
          </p>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;
