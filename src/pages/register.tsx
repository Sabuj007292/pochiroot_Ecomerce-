
const RegisterPage = () => {
  return (
    <main>
      {/* Simple header - replace with your Header component if you have one */}
      <header className="w-full border-b bg-white sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-bold text-teal-700">
            ClothCo
          </a>
          <nav className="space-x-4 text-sm">
            <a href="/login" className="text-gray-600 hover:text-teal-700">
              Login
            </a>
            <a href="/register" className="text-gray-600 hover:text-teal-700">
              Register
            </a>
          </nav>
        </div>
      </header>

      {/* Registration Form */}
      <section className="mx-auto max-w-md px-4 py-10 md:px-6">
        <div className="border rounded-lg shadow-sm p-6 bg-white">
          <h2 className="text-xl font-semibold mb-6">Create account</h2>

          <form className="grid gap-4">
            {/* Name */}
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                id="name"
                type="text"
                autoComplete="name"
                placeholder="Jane Doe"
                className="w-full rounded-md border px-3 py-2 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            {/* Email */}
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email
              </label>
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
              <label htmlFor="password" className="text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                autoComplete="new-password"
                placeholder="••••••••"
                className="w-full rounded-md border px-3 py-2 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold py-2.5 rounded-md transition"
            >
              Create account
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-sm text-gray-500 mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-teal-600 hover:underline">
              Sign in
            </a>
          </p>
        </div>
      </section>
    </main>
  );
};

export default RegisterPage;
