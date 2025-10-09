import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

type OrderItem = {
    productId: string;
    name: string;
    quantity: number;
    price: number;
    image?: string;
    subtitle?: string;
    description?: string;
    status?: string;
};

type Order = {
    _id: string;
    orderNumber: string;
    total: number;
    totalQuantity: number;
    paymentMethod: string;
    orderStatus: string;
    createdAt: string;
    products: OrderItem[];
    status: string;
};

export default function MyOrders() {
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState(true);
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchOrders = async () => {
            if (!token) return;
            try {
                const res = await fetch("http://localhost:3000/api/order/user", {
                    headers: { Authorization: `Bearer ${token}` },
                });
                const data = await res.json();
                if (res.ok) {
                    setOrders(data.orders || []);
                } else {
                    toast.error(data.message || "Failed to fetch orders");
                }
            } catch (err) {
                console.error(err);
                toast.error("Error fetching orders");
            } finally {
                setLoading(false);
            }
        };
        fetchOrders();
    }, [token]);

    if (loading) {
        return (
            <>
                <div className="max-w-4xl mx-auto p-6 text-center">Loading orders...</div>
            </>
        );
    }

    if (orders.length === 0) {
        return (
            <>
                <div className="max-w-4xl mx-auto p-6 text-center">
                    <h2 className="text-2xl font-semibold mb-4">No Orders Found</h2>
                    <p className="text-gray-600">You haven't placed any orders yet.</p>
                    <button
                        className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                        onClick={() => navigate("/shop")}
                    >
                        Start Shopping
                    </button>
                </div>
            </>
        );
    }

    return (
        <>
            <div className="max-w-6xl mx-auto p-4 pt-0 lg:p-1">
                <h6 className="text-1xl font-bold text-gray-900 mb-6 tracking-tight">
                    🛒 My Shopping Orders
                </h6>

                <div className="space-y-6">
                    {orders.map((order) => (
                        <div
                            key={order.orderNumber}
                            className="border rounded-lg shadow-lg p-4 hover:shadow-xl transition bg-white"
                        >
                            {/* Order Header */}
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="text-lg font-semibold">Order ID: {order.orderNumber}</h3>
                                <span
                                    className={`px-2 py-1 rounded-full text-sm font-medium ${order.products?.[0]?.status?.toLowerCase() === "pending"
                                        ? "bg-yellow-100 text-yellow-800"
                                        : order.products?.[0]?.status?.toLowerCase() === "completed"
                                            ? "bg-green-100 text-green-800"
                                            : "bg-red-100 text-red-800"
                                        }`}
                                >
                                    {order.products?.[0]?.status?.toUpperCase() || "UNKNOWN"}
                                </span>

                            </div>

                            {/* Order Info Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2 text-gray-600 text-sm">
                                <div>
                                    <span className="font-medium">Date:</span>{" "}
                                    {new Date(order.createdAt).toLocaleDateString()}
                                </div>
                                <div>
                                    <span className="font-medium">Payment:</span> {order.paymentMethod}
                                </div>
                                <div>
                                    <span className="font-medium">Total:</span> ₹{order.total}
                                </div>
                            </div>

                            {/* Top 3 Products */}
                            <div className="border-t pt-2 mt-2">
                                {order.products.slice(0, 3).map((item) => (
                                    <div
                                        key={item.productId}
                                        className="flex justify-between items-center text-gray-700 py-2"
                                    >
                                        <div className="flex items-center gap-3">
                                            {item.image && (
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-12 h-12 object-cover rounded"
                                                />
                                            )}
                                            <span>
                                                {item.name} × {item.quantity}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span>₹{item.price * item.quantity}</span>
                                            <button
                                                onClick={() =>
                                                    navigate("/product-details", {
                                                        state: {
                                                            product: {
                                                                ...item,
                                                                images: item.image ? [item.image] : [], // always send as array
                                                                description: item.description || "No description available",
                                                                subtitle: item.subtitle || "",
                                                            },
                                                        },
                                                    })
                                                }
                                                className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm cursor-pointer"
                                            >
                                                View Details
                                            </button>

                                        </div>
                                    </div>
                                ))}
                                {order.products.length > 3 && (
                                    <p className="text-sm text-gray-500 mt-1">
                                        +{order.products.length - 3} more items
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
