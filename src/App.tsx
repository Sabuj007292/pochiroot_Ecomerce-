import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import ProductsPage from "./components/Products";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext";
import ProfilePage from "./components/Profile";
import CartPage from "./pages/cart/CartPage";
import CheckoutPage from "./pages/cart/CheckOutPage";
import OrderConfirmation from "./pages/cart/OrderConfirmPage";
import MyOrders from "./pages/cart/OrderListPage";
import ProductDetails from "./pages/cart/ProductDetails";

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
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
          <Route path="/orders" element={<MyOrders />} />
          <Route path="product-details" element={<ProductDetails />} />

        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
