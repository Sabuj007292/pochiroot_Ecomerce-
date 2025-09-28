import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import ProductsPage from "./components/Products";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Router>
      {/* Toaster should be here, not inside Routes */}
      <Toaster position="top-right" reverseOrder={false} />

      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
