import { useState, useEffect } from "react";
import { HomeIcon, PhoneIcon, UserIcon } from "lucide-react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

type CartItem = {
  productId: string;
  name: string;
  subtitle?: string;
  price: number;
  quantity: number;
};

type CheckoutData = {
  items: CartItem[];
  total: number;
};

type Address = {
  fullName: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phone: string;
};

export default function CheckoutPage() {
  const navigate = useNavigate();
  const [checkoutData, setCheckoutData] = useState<CheckoutData>({
    items: [],
    total: 0,
  });
  const [placingOrder, setPlacingOrder] = useState(false);
  const [address, setAddress] = useState<Address>({
    fullName: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    postalCode: "",
    country: "India",
    phone: "",
  });

  const token = localStorage.getItem("token");

  // Fetch cart data
  useEffect(() => {
    if (!token) return;
    const fetchCart = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/users/cart", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        if (res.ok) {
          const total = data.items.reduce(
            (sum: number, item: CartItem) => sum + item.price * item.quantity,
            0
          );
          setCheckoutData({ items: data.items, total });
        } else {
          toast.error(data.message || "Failed to fetch cart");
        }
      } catch (err) {
        console.error(err);
        toast.error("Error fetching cart");
      }
    };
    fetchCart();
  }, [token]);

  // Fetch user profile
  useEffect(() => {
    if (!token) return;
    const storedUser = localStorage.getItem("user");
    const userObj = storedUser ? JSON.parse(storedUser) : null;
    const userId = userObj?.id;
    if (!userId) return;

    const fetchUserProfile = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/users/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        if (res.ok) {
          setAddress((prev) => ({
            ...prev,
            fullName: data.name || "",
            phone: data.mobile || "",
            addressLine1: data.address?.split(",")[0] || "",
            addressLine2: data.address || "",
          }));
        } else {
          toast.error(data.message || "Failed to fetch user profile");
        }
      } catch (err) {
        console.error(err);
        toast.error("Error fetching user profile");
      }
    };
    fetchUserProfile();
  }, [token]);

  // Handle form field updates
  const handleChangeAddress = (field: keyof Address, value: string) => {
    setAddress((prev) => ({ ...prev, [field]: value }));
  };

  // Constants for calculation
  const GST_RATE = 0.18;
  const DELIVERY_FEE = 50;
  const DISCOUNT = 0; // You can implement discount logic here

  // Calculate subtotal, gst, and total payable
  const subtotal = checkoutData.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const gst = subtotal * GST_RATE;
  const totalPayable = subtotal + gst + DELIVERY_FEE - DISCOUNT;

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setPlacingOrder(true);
    try {
      const storedUser = localStorage.getItem("user");
      const userObj = storedUser ? JSON.parse(storedUser) : null;
      const userId = userObj?.id;
      if (!userId) throw new Error("User not found");

      const fullAddress = { ...address };

      const orderRes = await fetch("http://localhost:3000/api/order/create", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          products: checkoutData.items,
          subtotal,
          gst,
          deliveryFee: DELIVERY_FEE,
          discount: DISCOUNT,
          total: totalPayable,
          totalQuantity: checkoutData.items.reduce((sum, i) => sum + i.quantity, 0),
          paymentMethod: "Credit Card",
          shippingAddress: fullAddress,
        }),
      });

      if (!orderRes.ok) {
        const errData = await orderRes.json();
        throw new Error(errData.message || "Failed to place order");
      }

      toast.success("✅ Order placed successfully!");
      const orderData = await orderRes.json();
      navigate("/payment", {
        state: { order: orderData.order || orderData },
      });
    } catch (err: any) {
      console.error("Order error:", err);
      toast.error(`❌ ${err.message || "Order failed"}`);
    } finally {
      setPlacingOrder(false);
    }
  };

  const addressFields: {
    label: string;
    field: keyof Address;
    icon: React.ReactNode;
  }[] = [
    { label: "Full Name", field: "fullName", icon: <UserIcon  className="w-5 h-5"/> },
    { label: "Phone", field: "phone", icon: <PhoneIcon className="w-5 h-5"/> },
    { label: "Address Line 1", field: "addressLine1", icon: <HomeIcon className="w-5 h-5"/> },
    { label: "Address Line 2", field: "addressLine2", icon: null },
    { label: "City", field: "city", icon: null },
    { label: "State / Province", field: "state", icon: null },
    { label: "Pin Code", field: "postalCode", icon: null },
    { label: "Country", field: "country", icon: null },
  ];

  return (
    <div className="max-w-4xl mx-auto p-0 space-y-8">
      <motion.h2
        className="text-1xl font-bold text-start text-gray-900"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🧾 Checkout
      </motion.h2>

      <form onSubmit={handleSubmitOrder} className="space-y-6">
        {/* Shipping Address Section */}
        <motion.div
          className="bg-white rounded-xl shadow-lg p-6 space-y-6 border"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h3
            className="text-2xl font-semibold border-b pb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            📦 Shipping Address
          </motion.h3>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.05,
                },
              },
            }}
          >
            {addressFields.map((item) => (
              <motion.div
                key={item.field}
                className="flex flex-col"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <label className="mb-1 font-medium text-sm text-gray-700 flex items-center gap-2">
                  {item.icon}
                  {item.label}
                </label>
                <input
                  type="text"
                  required={item.field !== "addressLine2"} // Address Line 2 optional
                  value={address[item.field]}
                  onChange={(e) => handleChangeAddress(item.field, e.target.value)}
                  className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition-shadow shadow-sm focus:shadow-md"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Order Summary Section */}
        <motion.div
          className="bg-white rounded-xl shadow-lg p-6 space-y-6 border"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="text-2xl font-semibold border-b pb-3">🛍️ Order Summary</h3>

          {/* Items */}
          <div className="space-y-3 max-h-48">
            {checkoutData.items.map((item) => (
              <motion.div
                key={item.productId}
                className="flex justify-between items-center py-2 px-2 rounded hover:bg-blue-50 transition"
                whileHover={{ scale: 1.01 }}
              >
                <div className="text-sm text-gray-700">
                  {item.name}{" "}
                  <span className="text-gray-500">× {item.quantity}</span>
                </div>
                <div className="text-sm font-medium text-gray-800">
                  ₹{item.price * item.quantity}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Price Breakdown */}
          <div className="border-t pt-4 space-y-2 text-gray-700 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>GST (18%)</span>
              <span>₹{gst.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span>₹{DELIVERY_FEE.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Discount</span>
              <span className="text-green-600">- ₹{DISCOUNT.toFixed(2)}</span>
            </div>
          </div>

          {/* Total */}
          <div className="flex justify-between font-semibold text-gray-900 text-lg pt-4 border-t">
            <span>Total</span>
            <span>₹{totalPayable.toFixed(2)}</span>
          </div>
        </motion.div>

        {/* Place Order Button */}
        <motion.button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-green-700 transition-transform active:scale-95 disabled:opacity-50"
          disabled={placingOrder}
          whileHover={{ scale: 1.015 }}
          whileTap={{ scale: 0.97 }}
        >
          {placingOrder ? "⏳ Placing Order..." : "✅ Place Order"}
        </motion.button>
      </form>
    </div>
  );
}
