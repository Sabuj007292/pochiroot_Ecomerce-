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
import { CartProvider } from "./context/CartContext";
import MasterLayout from "./components/MasterPage";
import PaymentPage from "./pages/cart/Payment";
import NewArrivalsPage from "./pages/ProductList/NewArrivalsPage";
import MenPage from "./pages/ProductList/men";
import WomenPage from "./pages/ProductList/women";
import KidsPage from "./pages/ProductList/kids";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          {/* 🔔 Toast Notifications */}
          <Toaster position="top-right" reverseOrder={false} />

          {/* 🔀 Routes */}
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/new-arrivals" element={<NewArrivalsPage />} />
            <Route path="/men" element={<MenPage />} />
            <Route path="/women" element={<WomenPage />} />
            <Route path="/kids" element={<KidsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            {/* <Route path="/cart" element={<CartPage />} /> */}
            <Route
              path="/cart"
              element={
                <MasterLayout>
                  <CartPage />
                </MasterLayout>
              }
            />
            {/* <Route path="/checkout" element={<CheckoutPage />} /> */}
            <Route
              path="/checkout"
              element={
                <MasterLayout>
                  <CheckoutPage />
                </MasterLayout>
              }
            />
            {/* <Route path="/order-confirmation" element={<OrderConfirmation />} /> */
              }
              <Route
              path="/payment"
              element={
                <MasterLayout>
                  <PaymentPage />
                </MasterLayout>
              }
            />
            {/* <Route path="/order-confirmation" element={<OrderConfirmation />} /> */}
            <Route path="/order-confirmation" element={
              <MasterLayout>
                <OrderConfirmation />
              </MasterLayout>
            } />
            {/* <Route path="/orders" element={<MyOrders />} /> */}
            <Route path="/orders" element={
              <MasterLayout>
                <MyOrders />
              </MasterLayout>
            } />
            {/* <Route path="product-details" element={<ProductDetails />} /> */}
            <Route path="/product-details" element={
              <MasterLayout>
                <ProductDetails />
              </MasterLayout>
            } />

          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
