import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import ProductsPage from "./components/Products";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        {/* 🔔 Toast Notifications */}
        <Toaster position="top-right" reverseOrder={false} />

        {/* 🔀 Routes */}
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
