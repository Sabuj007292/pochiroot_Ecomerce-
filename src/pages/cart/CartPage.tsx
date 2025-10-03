// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// // import Header from "../../components/Header";

// type CartItem = {
//   productId: string;
//   name: string;
//   price: number;
//   quantity: number;
//   image?: string;
// };

// type Cart = {
//   items: CartItem[];
//   total: number;
// };

// export default function CartPage() {
//   const [cart, setCart] = useState<Cart | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [updatingItemId, setUpdatingItemId] = useState<string | null>(null); // 🔄 item being updated

//   const token = localStorage.getItem("token");

//   // ✅ Fetch cart from backend
//   const fetchCart = async () => {
//     try {
//       setLoading(true);
//       const res = await fetch("http://localhost:3000/api/users/cart", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       const data = await res.json();

//       if (res.ok) {
//         const total = data.items.reduce(
//           (sum: number, item: CartItem) => sum + item.price * item.quantity,
//           0
//         );
//         setCart({ ...data, total });
//       } else {
//         alert(data.message || "Failed to load cart");
//       }
//     } catch (err) {
//       console.error("Cart fetch error:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ✅ Update quantity without full reload
//   const updateQuantity = async (productId: string, quantity: number) => {
//     if (quantity < 1 || !cart) return;
//     setUpdatingItemId(productId); // Start spinner

//     try {
//       const res = await fetch("http://localhost:3000/api/users/cart/update", {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({ productId, quantity }),
//       });

//       if (res.ok) {
//         // Update cart state locally (smoother)
//         const updatedItems = cart.items.map((item) =>
//           item.productId === productId ? { ...item, quantity } : item
//         );
//         const total = updatedItems.reduce(
//           (sum, item) => sum + item.price * item.quantity,
//           0
//         );
//         setCart({ ...cart, items: updatedItems, total });
//       }
//     } catch (err) {
//       console.error("Update qty error:", err);
//     } finally {
//       setUpdatingItemId(null); // Stop spinner
//     }
//   };

//   // ✅ Remove item
//   const removeItem = async (productId: string) => {
//     setUpdatingItemId(productId);
//     try {
//       const res = await fetch("http://localhost:3000/api/users/cart/delete", {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({ productId }),
//       });

//       if (res.ok && cart) {
//         const updatedItems = cart.items.filter(
//           (item) => item.productId !== productId
//         );
//         const total = updatedItems.reduce(
//           (sum, item) => sum + item.price * item.quantity,
//           0
//         );
//         setCart({ ...cart, items: updatedItems, total });
//       }
//     } catch (err) {
//       console.error("Remove item error:", err);
//     } finally {
//       setUpdatingItemId(null);
//     }
//   };

//   useEffect(() => {
//     if (token) {
//       fetchCart();
//     }
//   }, []);

//   if (!token) {
//     return <p className="p-6 text-red-500">⚠️ Please login to view your cart.</p>;
//   }

//   if (loading) {
//     return <p className="p-6">Loading cart...</p>;
//   }

//   if (!cart || cart.items.length === 0) {
//     return <p className="p-6">🛒 Your cart is empty</p>;
//   }

//   return (
//     <>
//       {/* <Header /> */}
//       <div className="max-w-4xl mx-auto p-6">
//         <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>

//         <div className="space-y-4">
//           {cart.items.map((item) => (
//             <div
//               key={item.productId}
//               className="flex items-center border rounded-lg p-4 shadow-sm"
//             >
//               <img
//                 src={item.image || "/placeholder.svg"}
//                 alt={item.name}
//                 className="w-20 h-20 object-cover rounded-md"
//               />

//               <div className="ml-4 flex-1">
//                 <h3 className="text-lg font-medium">{item.name}</h3>
//                 <p className="text-gray-600">₹{item.price}</p>

//                 <div className="flex items-center mt-2">
//                   <button
//                     className="px-2 py-1 bg-gray-200 rounded disabled:opacity-50 cursor-pointer"
//                     onClick={() =>
//                       updateQuantity(item.productId, item.quantity - 1)
//                     }
//                     disabled={updatingItemId === item.productId}
//                   >
//                     {updatingItemId === item.productId ? "..." : "-"}
//                   </button>
//                   <span className="px-4">{item.quantity}</span>
//                   <button
//                     className="px-2 py-1 bg-gray-200 rounded disabled:opacity-50 cursor-pointer"
//                     onClick={() =>
//                       updateQuantity(item.productId, item.quantity + 1)
//                     }
//                     disabled={updatingItemId === item.productId}
//                   >
//                     {updatingItemId === item.productId ? "..." : "+"}
//                   </button>
//                 </div>
//               </div>

//               <div className="text-right">
//                 <p className="font-semibold">
//                   ₹{item.price * item.quantity}
//                 </p>
//                 <button
//                   className="text-red-500 text-sm mt-2 hover:underline disabled:opacity-50 cursor-pointer"
//                   onClick={() => removeItem(item.productId)}
//                   disabled={updatingItemId === item.productId}
//                 >
//                   {updatingItemId === item.productId ? "Removing..." : "Remove"}
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="mt-6 flex justify-between items-center">
//           <h3 className="text-xl font-semibold">Total: ₹{cart.total}</h3>
//           <Link to="/checkout">
//           <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 cursor-pointer">
//             Checkout
//           </button>
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// }

import { LoaderCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type CartItem = {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
};

type Cart = {
  items: CartItem[];
  total: number;
};

export default function CartPage() {
  const [cart, setCart] = useState<Cart | null>(null);
  const [loading, setLoading] = useState(true);
  const [updatingItemId, setUpdatingItemId] = useState<string | null>(null);

  const token = localStorage.getItem("token");

  const fetchCart = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:3000/api/users/cart", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (res.ok) {
        const total = data.items.reduce(
          (sum: number, item: CartItem) => sum + item.price * item.quantity,
          0
        );
        setCart({ ...data, total });
      } else {
        alert(data.message || "Failed to load cart");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const updateQuantity = async (productId: string, quantity: number) => {
    if (quantity < 1 || !cart) return;
    setUpdatingItemId(productId);
    try {
      const res = await fetch("http://localhost:3000/api/users/cart/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ productId, quantity }),
      });
      if (res.ok) {
        const updatedItems = cart.items.map((item) =>
          item.productId === productId ? { ...item, quantity } : item
        );
        const total = updatedItems.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );
        setCart({ ...cart, items: updatedItems, total });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setUpdatingItemId(null);
    }
  };

  const removeItem = async (productId: string) => {
    setUpdatingItemId(productId);
    try {
      const res = await fetch("http://localhost:3000/api/users/cart/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ productId }),
      });
      if (res.ok && cart) {
        const updatedItems = cart.items.filter(
          (item) => item.productId !== productId
        );
        const total = updatedItems.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );
        setCart({ ...cart, items: updatedItems, total });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setUpdatingItemId(null);
    }
  };

  useEffect(() => {
    if (token) fetchCart();
  }, []);

  if (!token)
    return (
      <p className="p-6 text-red-600 text-center font-semibold">
        ⚠️ Please login to view your cart.
      </p>
    );

  if (loading)
    return <p className="p-6 text-center text-gray-700">Loading cart...</p>;

  if (!cart || cart.items.length === 0)
    return (
      <div className="p-6 text-center text-gray-700">
        <p className="text-xl mb-4">🛒 Your cart is empty</p>
        <Link to="/" className="text-blue-600 underline">
          Continue Shopping
        </Link>
      </div>
    );

 return (
  <div className="max-w-6xl mx-auto p-4 lg:p-6">
    {/* Page Header */}
    <h6 className="text-1xl font-bold text-gray-900 mb-6 tracking-tight">🛒 Your Shopping Cart</h6>

    <div className="flex flex-col lg:flex-row gap-6">
      {/* Left: Cart Items */}
      <div className="flex-1 space-y-4">
        {cart.items.map((item) => (
          <div
            key={item.productId}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 border rounded-lg shadow-sm bg-white transition hover:shadow-md"
          >
            {/* Product Image */}
            <img
              src={item.image || "/placeholder.svg"}
              alt={item.name}
              className="w-28 h-28 object-cover rounded border"
            />

            {/* Product Info */}
            <div className="flex-1 flex flex-col gap-1">
              <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
              <p className="text-sm text-gray-500">Product ID: {item.productId}</p>
              <p className="text-sm text-green-600">✅ In Stock</p>
              <p className="text-sm text-gray-500">
                Estimated Delivery:{" "}
                <span className="font-medium text-gray-700">3-5 days</span>
              </p>
              <p className="text-sm text-gray-500">
                Seller:{" "}
                <span className="text-gray-700 font-medium">BestMart</span>
              </p>

              {/* Quantity Controls */}
              <div className="flex items-center gap-2 mt-3">
                <button
                  onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                  disabled={updatingItemId === item.productId}
                  className="px-3 py-1 bg-gray-100 border rounded hover:bg-gray-200 disabled:opacity-50"
                >
                  {updatingItemId === item.productId ? "..." : "-"}
                </button>
                <input
                  type="number"
                  min={1}
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(item.productId, Number(e.target.value))
                  }
                  className="w-14 text-center border rounded py-1"
                />
                <button
                  onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                  disabled={updatingItemId === item.productId}
                  className="px-3 py-1 bg-gray-100 border rounded hover:bg-gray-200 disabled:opacity-50"
                >
                  {updatingItemId === item.productId ? "..." : "+"}
                </button>

                <button
                  onClick={() => removeItem(item.productId)}
                  disabled={updatingItemId === item.productId}
                  className="ml-auto text-red-500 hover:text-red-700 text-sm font-medium"
                >
                  {updatingItemId === item.productId ? "Removing..." : "Remove"}
                </button>
              </div>
            </div>

            {/* Price */}
            <div className="text-lg font-bold text-gray-800 sm:text-right">
              ₹{item.price * item.quantity}
            </div>
          </div>
        ))}
      </div>

      {/* Right: Order Summary Panel */}
      <div className="lg:w-80 bg-white p-5 rounded-lg shadow sticky top-6 h-fit">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h2>

        <div className="flex justify-between text-gray-600 text-sm mb-2">
          <span>Items ({cart.items.length})</span>
          <span>₹{cart.total}</span>
        </div>

        {/* Hardcoded Delivery Charges Example */}
        <div className="flex justify-between text-gray-600 text-sm mb-2">
          <span>Delivery Charges</span>
          <span className="text-green-600 font-medium">Free</span>
        </div>

        {/* Hardcoded Discount Example */}
        <div className="flex justify-between text-gray-600 text-sm mb-4">
          <span>Festival Discount</span>
          <span className="text-red-500">- ₹100</span>
        </div>

        <hr />

        <div className="flex justify-between font-semibold text-gray-800 text-base mt-4">
          <span>Total</span>
          <span>₹{cart.total - 100}</span>
        </div>

        <Link to="/checkout">
          <button className="w-full mt-5 bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition font-semibold text-sm cursor-pointer">
            <LoaderCircle className="inline-block mr-2 h-4 w-4 animate-spin" />
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </div>
  </div>
);


}
