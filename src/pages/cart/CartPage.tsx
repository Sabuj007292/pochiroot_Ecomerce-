import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";

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
  const [updatingItemId, setUpdatingItemId] = useState<string | null>(null); // 🔄 item being updated

  const token = localStorage.getItem("token");

  // ✅ Fetch cart from backend
  const fetchCart = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:3000/api/users/cart", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
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
      console.error("Cart fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Update quantity without full reload
  const updateQuantity = async (productId: string, quantity: number) => {
    if (quantity < 1 || !cart) return;
    setUpdatingItemId(productId); // Start spinner

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
        // Update cart state locally (smoother)
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
      console.error("Update qty error:", err);
    } finally {
      setUpdatingItemId(null); // Stop spinner
    }
  };

  // ✅ Remove item
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
      console.error("Remove item error:", err);
    } finally {
      setUpdatingItemId(null);
    }
  };

  useEffect(() => {
    if (token) {
      fetchCart();
    }
  }, []);

  if (!token) {
    return <p className="p-6 text-red-500">⚠️ Please login to view your cart.</p>;
  }

  if (loading) {
    return <p className="p-6">Loading cart...</p>;
  }

  if (!cart || cart.items.length === 0) {
    return <p className="p-6">🛒 Your cart is empty</p>;
  }

  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>

        <div className="space-y-4">
          {cart.items.map((item) => (
            <div
              key={item.productId}
              className="flex items-center border rounded-lg p-4 shadow-sm"
            >
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-md"
              />

              <div className="ml-4 flex-1">
                <h3 className="text-lg font-medium">{item.name}</h3>
                <p className="text-gray-600">₹{item.price}</p>

                <div className="flex items-center mt-2">
                  <button
                    className="px-2 py-1 bg-gray-200 rounded disabled:opacity-50 cursor-pointer"
                    onClick={() =>
                      updateQuantity(item.productId, item.quantity - 1)
                    }
                    disabled={updatingItemId === item.productId}
                  >
                    {updatingItemId === item.productId ? "..." : "-"}
                  </button>
                  <span className="px-4">{item.quantity}</span>
                  <button
                    className="px-2 py-1 bg-gray-200 rounded disabled:opacity-50 cursor-pointer"
                    onClick={() =>
                      updateQuantity(item.productId, item.quantity + 1)
                    }
                    disabled={updatingItemId === item.productId}
                  >
                    {updatingItemId === item.productId ? "..." : "+"}
                  </button>
                </div>
              </div>

              <div className="text-right">
                <p className="font-semibold">
                  ₹{item.price * item.quantity}
                </p>
                <button
                  className="text-red-500 text-sm mt-2 hover:underline disabled:opacity-50 cursor-pointer"
                  onClick={() => removeItem(item.productId)}
                  disabled={updatingItemId === item.productId}
                >
                  {updatingItemId === item.productId ? "Removing..." : "Remove"}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-between items-center">
          <h3 className="text-xl font-semibold">Total: ₹{cart.total}</h3>
          <Link to="/checkout">
          <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 cursor-pointer">
            Checkout
          </button>
          </Link>
        </div>
      </div>
    </>
  );
}
