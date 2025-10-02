import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Camera,
  Edit2,
  Save,
  X,
  Package,
  Heart,
  CreditCard,
  LogOut,
  Bell,
  Shield,
} from "lucide-react";
import Header from "./Header";

type UserData = {
  name: string;
  email: string;
  mobile: string;
  address: string;
  joinDate: string;
};

type OrderItem = {
  productId: string;
  name: string;
  quantity: number;
  price: number;
  image?: string;
};

type Order = {
  orderNumber: string;
  total: number;
  totalQuantity: number;
  paymentMethod: string;
  orderStatus: string;
  createdAt: string;
  products: OrderItem[];
};

export default function UserProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState("profile");
  const [userData, setUserData] = useState<UserData>({
    name: "",
    email: "",
    mobile: "",
    address: "",
    joinDate: "",
  });
  const [editData, setEditData] = useState<UserData>({ ...userData });
  const [saving, setSaving] = useState(false);

  const [orders, setOrders] = useState<Order[]>([]);
  const [loadingOrders, setLoadingOrders] = useState(true);

  const storedUser = localStorage.getItem("user");
  const userObj = storedUser ? JSON.parse(storedUser) : null;
  const userId = userObj?.id;
  const token = localStorage.getItem("token");

  // Fetch profile data
  useEffect(() => {
    const fetchProfile = async () => {
      if (!userId) return;
      try {
        const res = await fetch(`http://localhost:3000/api/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) throw new Error("Failed to fetch profile");

        const data = await res.json();
        setUserData({
          name: data?.name || "",
          email: data?.email || "",
          mobile: data?.mobile || "",
          address: data?.address || "",
          joinDate: data?.joinDate || "",
        });
        setEditData({
          name: data?.name || "",
          email: data?.email || "",
          mobile: data?.mobile || "",
          address: data?.address || "",
          joinDate: data?.joinDate || "",
        });
      } catch (error) {
        console.error(error);
        toast.error("Error fetching profile");
      }
    };
    fetchProfile();
  }, [userId, token]);

  // Fetch orders
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
        setLoadingOrders(false);
      }
    };
    fetchOrders();
  }, [token]);

  // Save profile changes
  const handleSave = async () => {
    setSaving(true);
    try {
      const res = await fetch(`http://localhost:3000/api/users/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(editData),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.message || "Failed to update profile");
      }

      const updatedUser = await res.json();
      setUserData(updatedUser);
      setEditData(updatedUser);
      setIsEditing(false);
      toast.success("Profile updated successfully!");
    } catch (error: any) {
      console.error(error);
      toast.error(error.message || "Error saving profile");
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    setEditData({ ...userData });
    setIsEditing(false);
  };
    return (
        <>

            {/* Mobile Header */}
            <Header />
            {/* <header className="bg-white shadow-sm sticky top-0 z-50 px-4 py-3">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
                            <User className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <h1 className="text-sm sm:text-2xl font-bold text-gray-900">My Profile</h1>
                    </div>
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="sm:hidden p-2 text-gray-600 hover:text-teal-600 transition-colors"
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                    <button className="hidden sm:flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors">
                        <Settings className="w-4 h-4" />
                        <span>Settings</span>
                    </button>
                </div> */}

                {/* Mobile Menu Dropdown */}
                {/* {mobileMenuOpen && (
                    <div className="sm:hidden border-t border-gray-100 bg-white">
                        <div className="px-4 py-2 space-y-1">
                            <button className="w-full flex items-center space-x-3 px-3 py-2 text-left text-sm font-medium text-gray-700 hover:bg-teal-50 rounded-lg transition-colors">
                                <Bell className="w-4 h-4 text-teal-600" />
                                <span>Notifications</span>
                                <span className="ml-auto bg-teal-600 text-white text-xs px-2 py-0.5 rounded-full">3</span>
                            </button>
                            <button className="w-full flex items-center space-x-3 px-3 py-2 text-left text-sm font-medium text-gray-700 hover:bg-teal-50 rounded-lg transition-colors">
                                <Shield className="w-4 h-4 text-teal-600" />
                                <span>Security</span>
                            </button>
                            <button className="w-full flex items-center space-x-3 px-3 py-2 text-left text-sm font-medium text-gray-700 hover:bg-teal-50 rounded-lg transition-colors">
                                <Settings className="w-4 h-4 text-teal-600" />
                                <span>Settings</span>
                            </button>
                            <button className="w-full flex items-center space-x-3 px-3 py-2 text-left text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                <LogOut className="w-4 h-4" />
                                <span>Logout</span>
                            </button>
                        </div>
                    </div>
                )} */}
            {/* </header> */}
            <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
                        {/* Left Sidebar - Profile Card */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 p-4 sm:p-6">
                                {/* Profile Image */}
                                <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-3 sm:mb-4">
                                    <div className="w-full h-full bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center text-white text-3xl sm:text-4xl font-bold">
                                        {userData.name ? userData.name.charAt(0).toUpperCase() : 'U'}
                                    </div>
                                    <button className="absolute bottom-0 right-0 w-8 h-8 sm:w-10 sm:h-10 bg-teal-600 rounded-full flex items-center justify-center text-white hover:bg-teal-700 transition-colors shadow-lg">
                                        <Camera className="w-4 h-4 sm:w-5 sm:h-5" />
                                    </button>
                                </div>

                                {/* User Info */}
                                <div className="text-center mb-4 sm:mb-6">
                                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">{userData.name}</h2>
                                    <p className="text-xs sm:text-sm text-gray-500 break-all">{userData.email}</p>
                                    <p className="text-xs text-gray-400 mt-2">Member since {userData.joinDate}</p>
                                </div>

                                {/* Stats */}
                                <div className="grid grid-cols-3 gap-2 sm:gap-4 py-3 sm:py-4 border-t border-b border-gray-100">
                                    <div className="text-center">
                                        <p className="text-xl sm:text-2xl font-bold text-teal-600">24</p>
                                        <p className="text-xs text-gray-500">Orders</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-xl sm:text-2xl font-bold text-teal-600">12</p>
                                        <p className="text-xs text-gray-500">Wishlist</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-xl sm:text-2xl font-bold text-teal-600">8</p>
                                        <p className="text-xs text-gray-500">Reviews</p>
                                    </div>
                                </div>

                                {/* Quick Actions - Desktop Only */}
                                <div className="hidden sm:block mt-4 space-y-2">
                                    <button className="w-full flex items-center space-x-3 px-4 text-left text-sm font-medium text-gray-700 hover:bg-teal-50 rounded-lg transition-colors">
                                        <Bell className="w-5 h-5 text-teal-600" />
                                        <span>Notifications</span>
                                        <span className="ml-auto bg-teal-600 text-white text-xs px-2 py-1 rounded-full">3</span>
                                    </button>
                                    <button className="w-full flex items-center space-x-3 px-4 py-3 text-left text-sm font-medium text-gray-700 hover:bg-teal-50 rounded-lg transition-colors">
                                        <Shield className="w-5 h-5 text-teal-600" />
                                        <span>Security</span>
                                    </button>
                                    <button className="w-full flex items-center space-x-3 px-4 py-3 text-left text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                        <LogOut className="w-5 h-5" />
                                        <span>Logout</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Right Content - Tabs */}
                        <div className="lg:col-span-2">
                            {/* Tab Navigation */}
                            <div className="bg-white rounded-t-xl sm:rounded-t-2xl shadow-lg border border-gray-100 border-b-0 overflow-x-auto">
                                <div className="flex space-x-1 p-1.5 sm:p-2 min-w-max sm:min-w-0">
                                    <button
                                        onClick={() => setActiveTab('profile')}
                                        className={`flex-1 flex items-center justify-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${activeTab === 'profile'
                                            ? 'bg-teal-50 text-teal-700'
                                            : 'text-gray-600 hover:bg-gray-50'
                                            }`}
                                    >
                                        <User className="w-3 h-3 sm:w-4 sm:h-4" />
                                        <span>Profile</span>
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('orders')}
                                        className={`flex-1 flex items-center justify-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${activeTab === 'orders'
                                            ? 'bg-teal-50 text-teal-700'
                                            : 'text-gray-600 hover:bg-gray-50'
                                            }`}
                                    >
                                        <Package className="w-3 h-3 sm:w-4 sm:h-4" />
                                        <span>Orders</span>
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('wishlist')}
                                        className={`flex-1 flex items-center justify-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${activeTab === 'wishlist'
                                            ? 'bg-teal-50 text-teal-700'
                                            : 'text-gray-600 hover:bg-gray-50'
                                            }`}
                                    >
                                        <Heart className="w-3 h-3 sm:w-4 sm:h-4" />
                                        <span>Wishlist</span>
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('payment')}
                                        className={`flex-1 flex items-center justify-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${activeTab === 'payment'
                                            ? 'bg-teal-50 text-teal-700'
                                            : 'text-gray-600 hover:bg-gray-50'
                                            }`}
                                    >
                                        <CreditCard className="w-3 h-3 sm:w-4 sm:h-4" />
                                        <span>Payment</span>
                                    </button>
                                </div>
                            </div>

                            {/* Tab Content */}
                            <div className="bg-white rounded-b-xl sm:rounded-b-2xl shadow-lg border border-gray-100 p-4 sm:p-6">
                                {/* Profile Tab */}
                                {activeTab === 'profile' && (
                                    <div>
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4 sm:mb-6">
                                            <h3 className="text-lg sm:text-xl font-bold text-gray-900">Personal Information</h3>
                                            {!isEditing ? (
                                                <button
                                                    onClick={() => setIsEditing(true)}
                                                    className="flex items-center justify-center space-x-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors text-sm"
                                                >
                                                    <Edit2 className="w-4 h-4" />
                                                    <span>Edit</span>
                                                </button>
                                            ) : (
                                                <div className="flex space-x-2">
                                                    <button
                                                        onClick={handleSave}
                                                        disabled={saving}
                                                        className="flex items-center space-x-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 text-sm"
                                                    >
                                                        <Save className="w-4 h-4" />
                                                        <span>{saving ? "Saving..." : "Save"}</span>
                                                    </button>
                                                    <button
                                                        onClick={handleCancel}
                                                        className="flex-1 sm:flex-none flex items-center justify-center space-x-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors text-sm"
                                                    >
                                                        <X className="w-4 h-4" />
                                                        <span>Cancel</span>
                                                    </button>
                                                </div>
                                            )}
                                        </div>

                                        <div className="space-y-4">
                                            <div>
                                                <label className="flex items-center space-x-2 text-xs sm:text-sm font-medium text-gray-700 mb-2">
                                                    <User className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                                                    <span>Full Name</span>
                                                </label>
                                                {isEditing ? (
                                                    <input
                                                        type="text"
                                                        value={editData.name}
                                                        onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-sm sm:text-base"
                                                    />
                                                ) : (
                                                    <p className="px-3 sm:px-4 py-2 sm:py-3 bg-gray-50 rounded-lg text-gray-900 text-sm sm:text-base">{userData.name}</p>
                                                )}
                                            </div>

                                            <div>
                                                <label className="flex items-center space-x-2 text-xs sm:text-sm font-medium text-gray-700 mb-2">
                                                    <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                                                    <span>Email</span>
                                                </label>
                                                {isEditing ? (
                                                    <input
                                                        type="email"
                                                        value={editData.email}
                                                        onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-sm sm:text-base"
                                                    />
                                                ) : (
                                                    <p className="px-3 sm:px-4 py-2 sm:py-3 bg-gray-50 rounded-lg text-gray-900 text-sm sm:text-base break-all">{userData.email}</p>
                                                )}
                                            </div>

                                            <div>
                                                <label className="flex items-center space-x-2 text-xs sm:text-sm font-medium text-gray-700 mb-2">
                                                    <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                                                    <span>Phone</span>
                                                </label>
                                                {isEditing ? (
                                                    <input
                                                        type="tel"
                                                        value={editData.mobile}
                                                        onChange={(e) => setEditData({ ...editData, mobile: e.target.value })}
                                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-sm sm:text-base"
                                                    />
                                                ) : (
                                                    <p className="px-3 sm:px-4 py-2 sm:py-3 bg-gray-50 rounded-lg text-gray-900 text-sm sm:text-base">{userData.mobile}</p>
                                                )}
                                            </div>

                                            <div>
                                                <label className="flex items-center space-x-2 text-xs sm:text-sm font-medium text-gray-700 mb-2">
                                                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                                                    <span>Address</span>
                                                </label>
                                                {isEditing ? (
                                                    <textarea
                                                        value={editData.address}
                                                        onChange={(e) => setEditData({ ...editData, address: e.target.value })}
                                                        rows={2}
                                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none resize-none text-sm sm:text-base"
                                                    />
                                                ) : (
                                                    <p className="px-3 sm:px-4 py-2 sm:py-3 bg-gray-50 rounded-lg text-gray-900 text-sm sm:text-base">{userData.address}</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Orders Tab */}
                {activeTab === "orders" && (
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">
                      Order History
                    </h3>
                    {loadingOrders ? (
                      <p className="text-center text-gray-500">Loading orders...</p>
                    ) : orders.length === 0 ? (
                      <p className="text-center text-gray-500">No orders found</p>
                    ) : (
                      <div className="space-y-3 sm:space-y-4">
                        {orders.map((order) => (
                          <div
                            key={order.orderNumber}
                            className="border border-gray-200 rounded-lg p-3 sm:p-4 hover:border-teal-300 transition-colors"
                          >
                            <div className="flex items-start justify-between mb-2 sm:mb-3">
                              <div>
                                <p className="font-semibold text-gray-900 text-sm sm:text-base">#{order.orderNumber}</p>
                                <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                                  {new Date(order.createdAt).toLocaleDateString()}
                                </p>
                              </div>
                              <span
                                className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                                  order.orderStatus === "completed"
                                    ? "bg-green-100 text-green-700"
                                    : order.orderStatus === "pending"
                                    ? "bg-yellow-100 text-yellow-700"
                                    : "bg-blue-100 text-blue-700"
                                }`}
                              >
                                {order.orderStatus}
                              </span>
                            </div>
                            <div className="flex items-center justify-between mb-2 sm:mb-0">
                              <p className="text-xs sm:text-sm text-gray-600">{order.totalQuantity} items</p>
                              <p className="font-bold text-gray-900 text-sm sm:text-base">₹{order.total}</p>
                            </div>
                            <button className="mt-2 sm:mt-3 w-full py-2 text-xs sm:text-sm font-medium text-teal-600 hover:text-teal-700 border border-teal-300 rounded-lg hover:bg-teal-50 transition-colors">
                              View Details
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                                {/* Wishlist Tab */}
                                {activeTab === 'wishlist' && (
                                    <div>
                                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">My Wishlist</h3>
                                        <div className="text-center py-8 sm:py-12">
                                            <Heart className="w-12 h-12 sm:w-16 sm:h-16 text-gray-300 mx-auto mb-3 sm:mb-4" />
                                            <p className="text-sm sm:text-base text-gray-500">Your wishlist is empty</p>
                                            <button className="mt-3 sm:mt-4 px-5 sm:px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors text-sm sm:text-base">
                                                Start Shopping
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {/* Payment Tab */}
                                {activeTab === 'payment' && (
                                    <div>
                                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Payment Methods</h3>
                                        <div className="text-center py-8 sm:py-12">
                                            <CreditCard className="w-12 h-12 sm:w-16 sm:h-16 text-gray-300 mx-auto mb-3 sm:mb-4" />
                                            <p className="text-sm sm:text-base text-gray-500">No payment methods added</p>
                                            <button className="mt-3 sm:mt-4 px-5 sm:px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors text-sm sm:text-base">
                                                Add Payment Method
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

// import { useState, useEffect } from "react";
// import toast from "react-hot-toast";
// import {
//   User,
//   Mail,
//   Phone,
//   MapPin,
//   Camera,
//   Edit2,
//   Save,
//   X,
//   Package,
//   Heart,
//   CreditCard,
// } from "lucide-react";
// import Header from "./Header";

// type UserData = {
//   name: string;
//   email: string;
//   mobile: string;
//   address: string;
//   joinDate: string;
// };

// type OrderItem = {
//   productId: string;
//   name: string;
//   quantity: number;
//   price: number;
//   image?: string;
// };

// type Order = {
//   orderNumber: string;
//   total: number;
//   totalQuantity: number;
//   paymentMethod: string;
//   orderStatus: string;
//   createdAt: string;
//   products: OrderItem[];
// };

// export default function UserProfilePage() {
//   const [isEditing, setIsEditing] = useState(false);
//   const [activeTab, setActiveTab] = useState("profile");
//   const [userData, setUserData] = useState<UserData>({
//     name: "",
//     email: "",
//     mobile: "",
//     address: "",
//     joinDate: "",
//   });
//   const [editData, setEditData] = useState<UserData>({ ...userData });
//   const [saving, setSaving] = useState(false);

//   const [orders, setOrders] = useState<Order[]>([]);
//   const [loadingOrders, setLoadingOrders] = useState(true);

//   const storedUser = localStorage.getItem("user");
//   const userObj = storedUser ? JSON.parse(storedUser) : null;
//   const userId = userObj?.id;
//   const token = localStorage.getItem("token");

//   // Fetch profile data
//   useEffect(() => {
//     const fetchProfile = async () => {
//       if (!userId) return;
//       try {
//         const res = await fetch(`http://localhost:3000/api/users/${userId}`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         });

//         if (!res.ok) throw new Error("Failed to fetch profile");

//         const data = await res.json();
//         setUserData({
//           name: data?.name || "",
//           email: data?.email || "",
//           mobile: data?.mobile || "",
//           address: data?.address || "",
//           joinDate: data?.joinDate || "",
//         });
//         setEditData({
//           name: data?.name || "",
//           email: data?.email || "",
//           mobile: data?.mobile || "",
//           address: data?.address || "",
//           joinDate: data?.joinDate || "",
//         });
//       } catch (error) {
//         console.error(error);
//         toast.error("Error fetching profile");
//       }
//     };
//     fetchProfile();
//   }, [userId, token]);

//   // Fetch orders
//   useEffect(() => {
//     const fetchOrders = async () => {
//       if (!token) return;
//       try {
//         const res = await fetch("http://localhost:3000/api/order", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         const data = await res.json();
//         if (res.ok) {
//           setOrders(data.orders || []);
//         } else {
//           toast.error(data.message || "Failed to fetch orders");
//         }
//       } catch (err) {
//         console.error(err);
//         toast.error("Error fetching orders");
//       } finally {
//         setLoadingOrders(false);
//       }
//     };
//     fetchOrders();
//   }, [token]);

//   // Save profile changes
//   const handleSave = async () => {
//     setSaving(true);
//     try {
//       const res = await fetch(`http://localhost:3000/api/users/${userId}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(editData),
//       });

//       if (!res.ok) {
//         const errData = await res.json();
//         throw new Error(errData.message || "Failed to update profile");
//       }

//       const updatedUser = await res.json();
//       setUserData(updatedUser);
//       setEditData(updatedUser);
//       setIsEditing(false);
//       toast.success("Profile updated successfully!");
//     } catch (error: any) {
//       console.error(error);
//       toast.error(error.message || "Error saving profile");
//     } finally {
//       setSaving(false);
//     }
//   };

//   const handleCancel = () => {
//     setEditData({ ...userData });
//     setIsEditing(false);
//   };

//   return (
//     <>
//       <Header />
//       <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-blue-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
//             {/* Profile Card */}
//             <div className="lg:col-span-1">
//               <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 p-4 sm:p-6">
//                 <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-3 sm:mb-4">
//                   <div className="w-full h-full bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center text-white text-3xl sm:text-4xl font-bold">
//                     {userData.name ? userData.name.charAt(0).toUpperCase() : "U"}
//                   </div>
//                   <button className="absolute bottom-0 right-0 w-8 h-8 sm:w-10 sm:h-10 bg-teal-600 rounded-full flex items-center justify-center text-white hover:bg-teal-700 transition-colors shadow-lg">
//                     <Camera className="w-4 h-4 sm:w-5 sm:h-5" />
//                   </button>
//                 </div>
//                 <div className="text-center mb-4 sm:mb-6">
//                   <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
//                     {userData.name}
//                   </h2>
//                   <p className="text-xs sm:text-sm text-gray-500 break-all">{userData.email}</p>
//                   <p className="text-xs text-gray-400 mt-2">Member since {userData.joinDate}</p>
//                 </div>
//                 <div className="grid grid-cols-3 gap-2 sm:gap-4 py-3 sm:py-4 border-t border-b border-gray-100">
//                   <div className="text-center">
//                     <p className="text-xl sm:text-2xl font-bold text-teal-600">{orders.length}</p>
//                     <p className="text-xs text-gray-500">Orders</p>
//                   </div>
//                   <div className="text-center">
//                     <p className="text-xl sm:text-2xl font-bold text-teal-600">0</p>
//                     <p className="text-xs text-gray-500">Wishlist</p>
//                   </div>
//                   <div className="text-center">
//                     <p className="text-xl sm:text-2xl font-bold text-teal-600">0</p>
//                     <p className="text-xs text-gray-500">Reviews</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Tabs */}
//             <div className="lg:col-span-2">
//               {/* Tab Navigation */}
//               <div className="bg-white rounded-t-xl sm:rounded-t-2xl shadow-lg border border-gray-100 border-b-0 overflow-x-auto">
//                 <div className="flex space-x-1 p-1.5 sm:p-2 min-w-max sm:min-w-0">
//                   <button
//                     onClick={() => setActiveTab("profile")}
//                     className={`flex-1 flex items-center justify-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
//                       activeTab === "profile" ? "bg-teal-50 text-teal-700" : "text-gray-600 hover:bg-gray-50"
//                     }`}
//                   >
//                     <User className="w-3 h-3 sm:w-4 sm:h-4" />
//                     <span>Profile</span>
//                   </button>
//                   <button
//                     onClick={() => setActiveTab("orders")}
//                     className={`flex-1 flex items-center justify-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
//                       activeTab === "orders" ? "bg-teal-50 text-teal-700" : "text-gray-600 hover:bg-gray-50"
//                     }`}
//                   >
//                     <Package className="w-3 h-3 sm:w-4 sm:h-4" />
//                     <span>Orders</span>
//                   </button>
//                   <button
//                     onClick={() => setActiveTab("wishlist")}
//                     className={`flex-1 flex items-center justify-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
//                       activeTab === "wishlist" ? "bg-teal-50 text-teal-700" : "text-gray-600 hover:bg-gray-50"
//                     }`}
//                   >
//                     <Heart className="w-3 h-3 sm:w-4 sm:h-4" />
//                     <span>Wishlist</span>
//                   </button>
//                   <button
//                     onClick={() => setActiveTab("payment")}
//                     className={`flex-1 flex items-center justify-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
//                       activeTab === "payment" ? "bg-teal-50 text-teal-700" : "text-gray-600 hover:bg-gray-50"
//                     }`}
//                   >
//                     <CreditCard className="w-3 h-3 sm:w-4 sm:h-4" />
//                     <span>Payment</span>
//                   </button>
//                 </div>
//               </div>

//               {/* Tab Content */}
//               <div className="bg-white rounded-b-xl sm:rounded-b-2xl shadow-lg border border-gray-100 p-4 sm:p-6">
//                 {/* Profile Tab */}
//                 {activeTab === "profile" && (
//                   <div>
//                     {/* Profile fields */}
//                     <div className="space-y-4">
//                       {/* Full Name */}
//                       <div>
//                         <label className="flex items-center space-x-2 text-xs sm:text-sm font-medium text-gray-700 mb-2">
//                           <User className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
//                           <span>Full Name</span>
//                         </label>
//                         {isEditing ? (
//                           <input
//                             type="text"
//                             value={editData.name}
//                             onChange={(e) => setEditData({ ...editData, name: e.target.value })}
//                             className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-sm sm:text-base"
//                           />
//                         ) : (
//                           <p className="px-3 sm:px-4 py-2 sm:py-3 bg-gray-50 rounded-lg text-gray-900 text-sm sm:text-base">{userData.name}</p>
//                         )}
//                       </div>
//                       {/* Email */}
//                       <div>
//                         <label className="flex items-center space-x-2 text-xs sm:text-sm font-medium text-gray-700 mb-2">
//                           <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
//                           <span>Email</span>
//                         </label>
//                         {isEditing ? (
//                           <input
//                             type="email"
//                             value={editData.email}
//                             onChange={(e) => setEditData({ ...editData, email: e.target.value })}
//                             className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-sm sm:text-base"
//                           />
//                         ) : (
//                           <p className="px-3 sm:px-4 py-2 sm:py-3 bg-gray-50 rounded-lg text-gray-900 text-sm sm:text-base break-all">{userData.email}</p>
//                         )}
//                       </div>
//                       {/* Mobile */}
//                       <div>
//                         <label className="flex items-center space-x-2 text-xs sm:text-sm font-medium text-gray-700 mb-2">
//                           <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
//                           <span>Phone</span>
//                         </label>
//                         {isEditing ? (
//                           <input
//                             type="tel"
//                             value={editData.mobile}
//                             onChange={(e) => setEditData({ ...editData, mobile: e.target.value })}
//                             className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-sm sm:text-base"
//                           />
//                         ) : (
//                           <p className="px-3 sm:px-4 py-2 sm:py-3 bg-gray-50 rounded-lg text-gray-900 text-sm sm:text-base">{userData.mobile}</p>
//                         )}
//                       </div>
//                       {/* Address */}
//                       <div>
//                         <label className="flex items-center space-x-2 text-xs sm:text-sm font-medium text-gray-700 mb-2">
//                           <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
//                           <span>Address</span>
//                         </label>
//                         {isEditing ? (
//                           <textarea
//                             value={editData.address}
//                             onChange={(e) => setEditData({ ...editData, address: e.target.value })}
//                             rows={2}
//                             className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none resize-none text-sm sm:text-base"
//                           />
//                         ) : (
//                           <p className="px-3 sm:px-4 py-2 sm:py-3 bg-gray-50 rounded-lg text-gray-900 text-sm sm:text-base">{userData.address}</p>
//                         )}
//                       </div>
//                       {/* Edit/Save Buttons */}
//                       {!isEditing ? (
//                         <button
//                           onClick={() => setIsEditing(true)}
//                           className="mt-4 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors text-sm"
//                         >
//                           <Edit2 className="inline w-4 h-4 mr-1" />
//                           Edit
//                         </button>
//                       ) : (
//                         <div className="mt-4 flex gap-2">
//                           <button
//                             onClick={handleSave}
//                             disabled={saving}
//                             className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 text-sm"
//                           >
//                             <Save className="inline w-4 h-4 mr-1" />
//                             {saving ? "Saving..." : "Save"}
//                           </button>
//                           <button
//                             onClick={handleCancel}
//                             className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 text-sm"
//                           >
//                             <X className="inline w-4 h-4 mr-1" />
//                             Cancel
//                           </button>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 )}

//                 {/* Orders Tab */}
//                 {activeTab === "orders" && (
//                   <div>
//                     <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">
//                       Order History
//                     </h3>
//                     {loadingOrders ? (
//                       <p className="text-center text-gray-500">Loading orders...</p>
//                     ) : orders.length === 0 ? (
//                       <p className="text-center text-gray-500">No orders found</p>
//                     ) : (
//                       <div className="space-y-3 sm:space-y-4">
//                         {orders.map((order) => (
//                           <div
//                             key={order.orderNumber}
//                             className="border border-gray-200 rounded-lg p-3 sm:p-4 hover:border-teal-300 transition-colors"
//                           >
//                             <div className="flex items-start justify-between mb-2 sm:mb-3">
//                               <div>
//                                 <p className="font-semibold text-gray-900 text-sm sm:text-base">{order.orderNumber}</p>
//                                 <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
//                                   {new Date(order.createdAt).toLocaleDateString()}
//                                 </p>
//                               </div>
//                               <span
//                                 className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
//                                   order.orderStatus === "completed"
//                                     ? "bg-green-100 text-green-700"
//                                     : order.orderStatus === "pending"
//                                     ? "bg-yellow-100 text-yellow-700"
//                                     : "bg-blue-100 text-blue-700"
//                                 }`}
//                               >
//                                 {order.orderStatus}
//                               </span>
//                             </div>
//                             <div className="flex items-center justify-between mb-2 sm:mb-0">
//                               <p className="text-xs sm:text-sm text-gray-600">{order.totalQuantity} items</p>
//                               <p className="font-bold text-gray-900 text-sm sm:text-base">₹{order.total}</p>
//                             </div>
//                             <button className="mt-2 sm:mt-3 w-full py-2 text-xs sm:text-sm font-medium text-teal-600 hover:text-teal-700 border border-teal-300 rounded-lg hover:bg-teal-50 transition-colors">
//                               View Details
//                             </button>
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 )}

//                 {/* Wishlist Tab */}
//                 {activeTab === "wishlist" && (
//                   <div className="text-center py-8 sm:py-12">
//                     <Heart className="w-10 h-10 mx-auto text-gray-400" />
//                     <p className="mt-3 text-gray-500 text-sm sm:text-base">No items in wishlist</p>
//                   </div>
//                 )}

//                 {/* Payment Tab */}
//                 {activeTab === "payment" && (
//                   <div className="text-center py-8 sm:py-12">
//                     <CreditCard className="w-10 h-10 mx-auto text-gray-400" />
//                     <p className="mt-3 text-gray-500 text-sm sm:text-base">No payment methods saved</p>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
