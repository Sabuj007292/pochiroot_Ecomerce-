import { useState, useEffect } from "react";
import Header from "../../components/Header";
import { HomeIcon, PhoneIcon, UserIcon } from "lucide-react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

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

    const handleChangeAddress = (field: keyof Address, value: string) => {
        setAddress((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmitOrder = async (e: React.FormEvent) => {
        e.preventDefault();
        setPlacingOrder(true);

        try {
            const storedUser = localStorage.getItem("user");
            const userObj = storedUser ? JSON.parse(storedUser) : null;
            const userId = userObj?.id;
            if (!userId) throw new Error("User not found");

            // Prepare shipping address
            const fullAddress = {
                fullName: address.fullName,
                addressLine1: address.addressLine1,
                addressLine2: address.addressLine2,
                city: address.city,
                state: address.state,
                postalCode: address.postalCode,
                country: address.country,
                phone: address.phone,
            };

            // Call order API
            const orderRes = await fetch("http://localhost:3000/api/order/create", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    // ❌ Don't send userId here
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


    return (
        <>
            <Header />
            <div className="max-w-3xl mx-auto p-6">
                <h2 className="text-2xl font-semibold mb-4">Checkout</h2>

                <form onSubmit={handleSubmitOrder} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Full Name */}
                        <div>
                            <label className="block mb-1 font-medium flex items-center gap-2">
                                <UserIcon className="h-5 w-5" /> Full Name *
                            </label>
                            <input
                                type="text"
                                value={address.fullName}
                                onChange={(e) => handleChangeAddress("fullName", e.target.value)}
                                className="w-full border rounded px-3 py-2"
                                required
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="block mb-1 font-medium flex items-center gap-2">
                                <PhoneIcon className="h-5 w-5" /> Phone Number *
                            </label>
                            <input
                                type="tel"
                                value={address.phone}
                                onChange={(e) => handleChangeAddress("phone", e.target.value)}
                                className="w-full border rounded px-3 py-2"
                                required
                            />
                        </div>

                        {/* Address Line 1 */}
                        <div className="md:col-span-2">
                            <label className="block mb-1 font-medium flex items-center gap-2">
                                <HomeIcon className="h-5 w-5" /> Address Line 1 *
                            </label>
                            <input
                                type="text"
                                value={address.addressLine1}
                                onChange={(e) => handleChangeAddress("addressLine1", e.target.value)}
                                className="w-full border rounded px-3 py-2"
                                required
                            />
                        </div>

                        {/* Address Line 2 */}
                        <div className="md:col-span-2">
                            <label className="block mb-1 font-medium">Address Line 2</label>
                            <input
                                type="text"
                                value={address.addressLine2}
                                onChange={(e) => handleChangeAddress("addressLine2", e.target.value)}
                                className="w-full border rounded px-3 py-2"
                            />
                        </div>

                        {/* City */}
                        <div>
                            <label className="block mb-1 font-medium">City *</label>
                            <input
                                type="text"
                                value={address.city}
                                onChange={(e) => handleChangeAddress("city", e.target.value)}
                                className="w-full border rounded px-3 py-2"
                                required
                            />
                        </div>

                        {/* State */}
                        <div>
                            <label className="block mb-1 font-medium">State / Province *</label>
                            <input
                                type="text"
                                value={address.state}
                                onChange={(e) => handleChangeAddress("state", e.target.value)}
                                className="w-full border rounded px-3 py-2"
                                required
                            />
                        </div>

                        {/* Postal Code */}
                        <div>
                            <label className="block mb-1 font-medium">Postal Code *</label>
                            <input
                                type="text"
                                value={address.postalCode}
                                onChange={(e) => handleChangeAddress("postalCode", e.target.value)}
                                className="w-full border rounded px-3 py-2"
                                required
                            />
                        </div>

                        {/* Country */}
                        <div>
                            <label className="block mb-1 font-medium">Country *</label>
                            <input
                                type="text"
                                value={address.country}
                                onChange={(e) => handleChangeAddress("country", e.target.value)}
                                className="w-full border rounded px-3 py-2"
                                required
                            />
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="mt-6 border-t pt-4">
                        <h3 className="text-xl font-semibold mb-2">🛒 Order Summary</h3>
                        {checkoutData.items.map((item) => (
                            <div key={item.productId} className="flex justify-between py-2">
                                <span>
                                    {item.name} × {item.quantity}
                                </span>
                                <span>₹{item.price * item.quantity}</span>
                            </div>
                        ))}
                        <div className="flex justify-between font-bold pt-3 border-t mt-3">
                            <span>Total</span>
                            <span>₹{checkoutData.total}</span>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 disabled:opacity-50"
                        disabled={placingOrder}
                    >
                        {placingOrder ? "Placing Order..." : "Place Order"}
                    </button>
                </form>
            </div>
        </>
    );
}
