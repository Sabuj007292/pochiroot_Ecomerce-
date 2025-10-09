// import { useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import Header from "../../components/Header";

// type Order = {
//     orderNumber: string;
//     total: number;
//     totalQuantity: number;
//     products: {
//         productId: string;
//         name: string;
//         quantity: number;
//         price: number;
//     }[];
// };

// export default function OrderConfirmation() {
//     const location = useLocation();
//     const navigate = useNavigate();

//     // @ts-ignore
//     const order: Order | undefined = location.state?.order;
//     console.log("Order data:", order);


//     useEffect(() => {
//         if (!order) {
//             navigate("/"); // redirect if no order info
//         }
//     }, [order, navigate]);

//     if (!order) return null;

//     return (
//         <>
//             <Header />
//             <div className="max-w-3xl mx-auto p-6">
//                 <div className="bg-white shadow-lg rounded-lg p-6 text-center">
//                     <h2 className="text-4xl font-bold text-green-600 mb-4">
//                         ✅ Order Confirmed!
//                     </h2>
//                     <p className="text-gray-700 mb-2">Thank you for your purchase.</p>
//                     <p className="text-gray-500 mb-4">
//                         Order ID: <span className="font-mono">{order.orderNumber}</span>
//                     </p>

//                     <h3 className="text-2xl font-semibold mb-3">Order Summary</h3>
//                     <div className="border rounded p-4 mb-4">
//                         {order.products.map((item) => (
//                             <div key={item.productId} className="flex justify-between py-2">
//                                 <span>
//                                     {item.name} × {item.quantity}
//                                 </span>
//                                 <span>₹{item.price * item.quantity}</span>
//                             </div>
//                         ))}
//                         <div className="flex justify-between font-bold pt-3 border-t mt-3">
//                             <span>Total Quantity</span>
//                             <span>{order.totalQuantity}</span>
//                         </div>
//                         <div className="flex justify-between font-bold pt-1">
//                             <span>Total Price</span>
//                             <span>₹{order.total}</span>
//                         </div>
//                     </div>

//                     <div className="flex flex-col md:flex-row justify-center gap-4 mt-4">
//                         <button
//                             onClick={() => navigate("/shop")}
//                             className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
//                         >
//                             Continue Shopping
//                         </button>
//                         <button
//                             onClick={() => navigate("/orders", { state: { order } })}
//                             className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
//                         >
//                             View My Orders
//                         </button>

//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";


type OrderProduct = {
  productId: string;
  name: string;
  quantity: number;
  price: number;
};

type Order = {
  orderNumber: string;
  total: number;
  totalQuantity: number;
  products: OrderProduct[];
};

export default function OrderConfirmation() {
  const location = useLocation();
  const navigate = useNavigate();

  // Use type assertion safely
  const order = location.state?.order as Order | undefined;

  useEffect(() => {
    if (!order) {
      // Redirect home if no order found in location state
      navigate("/", { replace: true });
    }
  }, [order, navigate]);

  if (!order) return null; // Render nothing while redirecting

  return (
    <>
      <main className="max-w-6xl mx-auto p-4 pt-0 lg:p-1">
        <div className=" p-6 text-center">
          <h2 className="text-4xl font-bold text-green-600 mb-4">✅ Order Confirmed!</h2>
          <p className="text-gray-700 mb-2">Thank you for your purchase.</p>
          <p className="text-gray-500 mb-4">
            Order ID: <span className="font-mono">{order.orderNumber}</span>
          </p>

          <section aria-label="Order Summary">
            <h3 className="text-2xl font-semibold mb-3">Order Summary</h3>
            <div className="border rounded p-4 mb-4 max-h-64 overflow-y-auto">
              {order.products.map((item) => (
                <div key={item.productId} className="flex justify-between py-2 border-b last:border-b-0">
                  <span>
                    {item.name} × {item.quantity}
                  </span>
                  <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}

              <div className="flex justify-between font-bold pt-3 border-t mt-3">
                <span>Total Quantity</span>
                <span>{order.totalQuantity}</span>
              </div>
              <div className="flex justify-between font-bold pt-1">
                <span>Total Price</span>
                <span>₹{order.total.toFixed(2)}</span>
              </div>
            </div>
          </section>

          <div className="flex flex-col md:flex-row justify-center gap-4 mt-4">
            <button
              onClick={() => navigate("/products")}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition cursor-pointer"
            >
              Continue Shopping
            </button>
            <button
              onClick={() => navigate("/orders", { state: { order } })}
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition cursor-pointer"
            >
              View My Orders
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
