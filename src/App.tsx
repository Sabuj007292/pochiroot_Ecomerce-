
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import ProductsPage from "./components/Products";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/products" element={<ProductsPage />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
