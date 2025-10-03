// import { useState, useEffect } from "react";
// import Header from "../../components/Header";
// import { HomeIcon, PhoneIcon, UserIcon } from "lucide-react";
// import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

// type CartItem = {
//     productId: string;
//     name: string;
//     subtitle?: string;
//     price: number;
//     quantity: number;
// };

// type CheckoutData = {
//     items: CartItem[];
//     total: number;
// };

// type Address = {
//     fullName: string;
//     addressLine1: string;
//     addressLine2?: string;
//     city: string;
//     state: string;
//     postalCode: string;
//     country: string;
//     phone: string;
// };

// export default function CheckoutPage() {
//     const navigate = useNavigate();
//     const [checkoutData, setCheckoutData] = useState<CheckoutData>({
//         items: [],
//         total: 0,
//     });
//     const [placingOrder, setPlacingOrder] = useState(false);
//     const [address, setAddress] = useState<Address>({
//         fullName: "",
//         addressLine1: "",
//         addressLine2: "",
//         city: "",
//         state: "",
//         postalCode: "",
//         country: "India",
//         phone: "",
//     });

//     const token = localStorage.getItem("token");

//     // Fetch cart data
//     useEffect(() => {
//         if (!token) return;

//         const fetchCart = async () => {
//             try {
//                 const res = await fetch("http://localhost:3000/api/users/cart", {
//                     headers: { Authorization: `Bearer ${token}` },
//                 });
//                 const data = await res.json();
//                 if (res.ok) {
//                     const total = data.items.reduce(
//                         (sum: number, item: CartItem) => sum + item.price * item.quantity,
//                         0
//                     );
//                     setCheckoutData({ items: data.items, total });
//                 } else {
//                     toast.error(data.message || "Failed to fetch cart");
//                 }
//             } catch (err) {
//                 console.error(err);
//                 toast.error("Error fetching cart");
//             }
//         };

//         fetchCart();
//     }, [token]);

//     // Fetch user profile
//     useEffect(() => {
//         if (!token) return;

//         const storedUser = localStorage.getItem("user");
//         const userObj = storedUser ? JSON.parse(storedUser) : null;
//         const userId = userObj?.id;
//         if (!userId) return;

//         const fetchUserProfile = async () => {
//             try {
//                 const res = await fetch(`http://localhost:3000/api/users/${userId}`, {
//                     headers: { Authorization: `Bearer ${token}` },
//                 });
//                 const data = await res.json();
//                 if (res.ok) {
//                     setAddress({
//                         fullName: data.name || "",
//                         addressLine1: data.address?.split(",")[0] || "",
//                         addressLine2: data.address || "",
//                         city: "",
//                         state: "",
//                         postalCode: "",
//                         country: "India",
//                         phone: data.mobile || "",
//                     });
//                 } else {
//                     toast.error(data.message || "Failed to fetch user profile");
//                 }
//             } catch (err) {
//                 console.error(err);
//                 toast.error("Error fetching user profile");
//             }
//         };

//         fetchUserProfile();
//     }, [token]);

//     const handleChangeAddress = (field: keyof Address, value: string) => {
//         setAddress((prev) => ({ ...prev, [field]: value }));
//     };

//     const handleSubmitOrder = async (e: React.FormEvent) => {
//         e.preventDefault();
//         setPlacingOrder(true);

//         try {
//             const storedUser = localStorage.getItem("user");
//             const userObj = storedUser ? JSON.parse(storedUser) : null;
//             const userId = userObj?.id;
//             if (!userId) throw new Error("User not found");

//             // Prepare shipping address
//             const fullAddress = {
//                 fullName: address.fullName,
//                 addressLine1: address.addressLine1,
//                 addressLine2: address.addressLine2,
//                 city: address.city,
//                 state: address.state,
//                 postalCode: address.postalCode,
//                 country: address.country,
//                 phone: address.phone,
//             };

//             // Call order API
//             const orderRes = await fetch("http://localhost:3000/api/order/create", {
//                 method: "POST",
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({
//                     // ❌ Don't send userId here
//                     products: checkoutData.items,
//                     total: checkoutData.total,
//                     totalQuantity: checkoutData.items.reduce((sum, i) => sum + i.quantity, 0),
//                     paymentMethod: "Credit Card",
//                     shippingAddress: fullAddress,
//                 }),
//             });


//             if (!orderRes.ok) {
//                 const errData = await orderRes.json();
//                 throw new Error(errData.message || "Failed to place order");
//             }

//             toast.success("✅ Order placed successfully!");
//             const orderData = await orderRes.json();
//             navigate("/order-confirmation", { state: { order: orderData.order || orderData } });
//         } catch (err: any) {
//             console.error("Order error:", err);
//             toast.error(`❌ ${err.message || "Order failed"}`);
//         } finally {
//             setPlacingOrder(false);
//         }
//     };


//     return (
//         <>
//             <Header />
//             <div className="max-w-3xl mx-auto p-6">
//                 <h2 className="text-2xl font-semibold mb-4">Checkout</h2>

//                 <form onSubmit={handleSubmitOrder} className="space-y-6">
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         {/* Full Name */}
//                         <div>
//                             <label className="block mb-1 font-medium flex items-center gap-2">
//                                 <UserIcon className="h-5 w-5" /> Full Name *
//                             </label>
//                             <input
//                                 type="text"
//                                 value={address.fullName}
//                                 onChange={(e) => handleChangeAddress("fullName", e.target.value)}
//                                 className="w-full border rounded px-3 py-2"
//                                 required
//                             />
//                         </div>

//                         {/* Phone */}
//                         <div>
//                             <label className="block mb-1 font-medium flex items-center gap-2">
//                                 <PhoneIcon className="h-5 w-5" /> Phone Number *
//                             </label>
//                             <input
//                                 type="tel"
//                                 value={address.phone}
//                                 onChange={(e) => handleChangeAddress("phone", e.target.value)}
//                                 className="w-full border rounded px-3 py-2"
//                                 required
//                             />
//                         </div>

//                         {/* Address Line 1 */}
//                         <div className="md:col-span-2">
//                             <label className="block mb-1 font-medium flex items-center gap-2">
//                                 <HomeIcon className="h-5 w-5" /> Address Line 1 *
//                             </label>
//                             <input
//                                 type="text"
//                                 value={address.addressLine1}
//                                 onChange={(e) => handleChangeAddress("addressLine1", e.target.value)}
//                                 className="w-full border rounded px-3 py-2"
//                                 required
//                             />
//                         </div>

//                         {/* Address Line 2 */}
//                         <div className="md:col-span-2">
//                             <label className="block mb-1 font-medium">Address Line 2</label>
//                             <input
//                                 type="text"
//                                 value={address.addressLine2}
//                                 onChange={(e) => handleChangeAddress("addressLine2", e.target.value)}
//                                 className="w-full border rounded px-3 py-2"
//                             />
//                         </div>

//                         {/* City */}
//                         <div>
//                             <label className="block mb-1 font-medium">City *</label>
//                             <input
//                                 type="text"
//                                 value={address.city}
//                                 onChange={(e) => handleChangeAddress("city", e.target.value)}
//                                 className="w-full border rounded px-3 py-2"
//                                 required
//                             />
//                         </div>

//                         {/* State */}
//                         <div>
//                             <label className="block mb-1 font-medium">State / Province *</label>
//                             <input
//                                 type="text"
//                                 value={address.state}
//                                 onChange={(e) => handleChangeAddress("state", e.target.value)}
//                                 className="w-full border rounded px-3 py-2"
//                                 required
//                             />
//                         </div>

//                         {/* Postal Code */}
//                         <div>
//                             <label className="block mb-1 font-medium">Postal Code *</label>
//                             <input
//                                 type="text"
//                                 value={address.postalCode}
//                                 onChange={(e) => handleChangeAddress("postalCode", e.target.value)}
//                                 className="w-full border rounded px-3 py-2"
//                                 required
//                             />
//                         </div>

//                         {/* Country */}
//                         <div>
//                             <label className="block mb-1 font-medium">Country *</label>
//                             <input
//                                 type="text"
//                                 value={address.country}
//                                 onChange={(e) => handleChangeAddress("country", e.target.value)}
//                                 className="w-full border rounded px-3 py-2"
//                                 required
//                             />
//                         </div>
//                     </div>

//                     {/* Order Summary */}
//                     <div className="mt-6 border-t pt-4">
//                         <h3 className="text-xl font-semibold mb-2">🛒 Order Summary</h3>
//                         {checkoutData.items.map((item) => (
//                             <div key={item.productId} className="flex justify-between py-2">
//                                 <span>
//                                     {item.name} × {item.quantity}
//                                 </span>
//                                 <span>₹{item.price * item.quantity}</span>
//                             </div>
//                         ))}
//                         <div className="flex justify-between font-bold pt-3 border-t mt-3">
//                             <span>Total</span>
//                             <span>₹{checkoutData.total}</span>
//                         </div>
//                     </div>

//                     <button
//                         type="submit"
//                         className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 disabled:opacity-50"
//                         disabled={placingOrder}
//                     >
//                         {placingOrder ? "Placing Order..." : "Place Order"}
//                     </button>
//                 </form>
//             </div>
//         </>
//     );
// }


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
          setAddress({
            fullName: data.name || "",
            addressLine1: data.address?.split(",")[0] || "",
            addressLine2: data.address || "",
            city: "",
            state: "",
            postalCode: "",
            country: "India",
            phone: data.mobile || "",
          });
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

//   const handleChangeAddress = (field: keyof Address, value: string) => {
//     setAddress((prev) => ({ ...prev, [field]: value }));
//   };

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
          total: checkoutData.total,
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
      navigate("/order-confirmation", { state: { order: orderData.order || orderData } });
    } catch (err: any) {
      console.error("Order error:", err);
      toast.error(`❌ ${err.message || "Order failed"}`);
    } finally {
      setPlacingOrder(false);
    }
  };

//   return (
//     <>
//       <div className="max-w-4xl mx-auto p-6 space-y-6">
//         <motion.h2
//           className="text-3xl font-bold text-gray-900 text-center"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           Checkout
//         </motion.h2>

//         <form onSubmit={handleSubmitOrder} className="space-y-8">
//           {/* Address Section */}
//           <motion.div
//             className="bg-white rounded-lg shadow-lg p-6 space-y-6"
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4 }}
//           >
//             <h3 className="text-xl font-semibold border-b pb-2 mb-4">Shipping Address</h3>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {[
//                 { label: "Full Name", field: "fullName", icon: <UserIcon /> },
//                 { label: "Phone", field: "phone", icon: <PhoneIcon /> },
//                 { label: "Address Line 1", field: "addressLine1", icon: <HomeIcon /> },
//                 { label: "Address Line 2", field: "addressLine2", icon: null },
//                 { label: "City", field: "city", icon: null },
//                 { label: "State / Province", field: "state", icon: null },
//                 { label: "Postal Code", field: "postalCode", icon: null },
//                 { label: "Country", field: "country", icon: null },
//               ].map((item: any) => (
//                 <div key={item.field} className="flex flex-col">
//                   <label className="mb-1 font-medium flex items-center gap-2">
//                     {item.icon}
//                     {item.label} *
//                   </label>
//                   <motion.input
//                     type="text"
//                     value={(address as any)[item.field]}
//                     onChange={(e) => handleChangeAddress(item.field, e.target.value)}
//                     className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
//                     whileFocus={{ scale: 1.02 }}
//                   />
//                 </div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Order Summary */}
//           <motion.div
//             className="bg-white rounded-lg shadow-lg p-6 space-y-4"
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4, delay: 0.1 }}
//           >
//             <h3 className="text-xl font-semibold border-b pb-2 mb-4">🛒 Order Summary</h3>
//             <div className="space-y-2">
//               {checkoutData.items.map((item) => (
//                 <motion.div
//                   key={item.productId}
//                   className="flex justify-between p-2 rounded hover:bg-blue-50 transition"
//                   whileHover={{ scale: 1.02 }}
//                 >
//                   <span>{item.name} × {item.quantity}</span>
//                   <span>₹{item.price * item.quantity}</span>
//                 </motion.div>
//               ))}
//             </div>
//             <div className="flex justify-between font-bold pt-4 border-t mt-4 text-lg">
//               <span>Total</span>
//               <span>₹{checkoutData.total}</span>
//             </div>
//           </motion.div>

//           <motion.button
//             type="submit"
//             className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-green-700 transition-transform transform active:scale-95 disabled:opacity-50"
//             disabled={placingOrder}
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             {placingOrder ? "Placing Order..." : "Place Order"}
//           </motion.button>
//         </form>
//       </div>
//     </>
//   );

return (
  <div className="max-w-4xl mx-auto p-6 space-y-8">
    {/* Page Header */}
    <motion.h2
      className="text-4xl font-extrabold text-center text-gray-900"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      🧾 Checkout
    </motion.h2>

    <form onSubmit={handleSubmitOrder} className="space-y-10">
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
          {[
            { label: "Full Name", field: "fullName", icon: <UserIcon /> },
            { label: "Phone", field: "phone", icon: <PhoneIcon /> },
            { label: "Address Line 1", field: "addressLine1", icon: <HomeIcon /> },
            { label: "Address Line 2", field: "addressLine2", icon: null },
            { label: "City", field: "city", icon: null },
            { label: "State / Province", field: "state", icon: null },
            { label: "Postal Code", field: "postalCode", icon: null },
            { label: "Country", field: "country", icon: null },
          ].map((item) => (
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
                required
                value={(address as any)[item.field]}
                
                className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition-shadow shadow-sm focus:shadow-md"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Order Summary Section */}
      <motion.div
        className="bg-white rounded-xl shadow-lg p-6 space-y-4 border"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h3 className="text-2xl font-semibold border-b pb-3">🛍️ Order Summary</h3>

        <div className="space-y-3">
          {checkoutData.items.map((item) => (
            <motion.div
              key={item.productId}
              className="flex justify-between items-center py-2 px-2 rounded hover:bg-blue-50 transition"
              whileHover={{ scale: 1.01 }}
            >
              <div className="text-sm text-gray-700">
                {item.name} <span className="text-gray-500">× {item.quantity}</span>
              </div>
              <div className="text-sm font-medium text-gray-800">
                ₹{item.price * item.quantity}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-between font-semibold text-gray-800 text-lg pt-4 border-t mt-4">
          <span>Total</span>
          <span>₹{checkoutData.total}</span>
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
