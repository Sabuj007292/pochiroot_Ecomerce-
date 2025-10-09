import { CreditCard, Wallet, QrCode, IndianRupee } from "lucide-react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react"; // ✅ use SVG QR codes
import { useState } from "react";

type PaymentMethod = "card" | "cash" | "wallet" | "upi";

export default function PaymentPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const order = (location.state as any)?.order;

  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod | null>(null);
  const [processing, setProcessing] = useState(false);

  if (!order) {
    navigate("/", { replace: true });
    return null;
  }

  // 🔹 Example UPI details
  const upiId = "green.sabuj.2012@oksbi"; // replace with your real UPI ID
  const payeeName = "Sabuj Prashnat Gain";
  const amount = order.total.toFixed(2);

  // 🔹 UPI link format
  const upiLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(
    payeeName
  )}&am=${amount}&cu=INR`;

  const paymentMethods = [
    {
      id: "card",
      label: "Credit / Debit Card",
      icon: <CreditCard />,
      description: "Pay securely using your credit or debit card.",
    },
    {
      id: "cash",
      label: "Cash on Delivery",
      icon: <IndianRupee />,
      description: "Pay with cash when your order arrives.",
    },
    {
      id: "wallet",
      label: "Wallet Payment",
      icon: <Wallet />,
      description: "Use your wallet balance to pay instantly.",
    },
    {
      id: "upi",
      label: "UPI Payment (QR)",
      icon: <QrCode />,
      description: "Scan QR code to pay via UPI apps (GPay, PhonePe, Paytm).",
    },
  ];

//   const handlePayment = async () => {
//     if (!selectedMethod) {
//       toast.error("Please select a payment method.");
//       return;
//     }

//     if (selectedMethod === "upi") {
//       toast.success("Scan the QR code using your UPI app to complete payment.");
//       return;
//     }

//     setProcessing(true);
//     try {
//       await new Promise((r) => setTimeout(r, 1500));
//       toast.success(`Payment successful via ${selectedMethod.toUpperCase()}!`);
//       navigate("/order-success", { state: { order } });
//     } catch {
//       toast.error("Payment failed, please try again.");
//     } finally {
//       setProcessing(false);
//     }
//   };

const handlePayment = async () => {
  if (!selectedMethod) {
    toast.error("Please select a payment method.");
    return;
  }

  setProcessing(true);

  try {
    if (selectedMethod === "cash") {
      // For Cash on Delivery, just mark order as successful immediately
      toast.success("Order placed successfully! Pay on delivery.");
      navigate("/order-confirmation", { state: { order } });
    } else {
      // For other payment methods (card, wallet), do the payment process

      // Mock payment process delay
      await new Promise((r) => setTimeout(r, 1500));

      // You should call your payment API here
      // For demo, assume success

      toast.success(`Payment successful via ${selectedMethod.toUpperCase()}!`);
      navigate("/orderConfirm", { state: { order } });
    }
  } catch (err) {
    toast.error("Payment failed, please try again.");
  } finally {
    setProcessing(false);
  }
};

  return (
    <div className="max-w-6xl mx-auto p-4 pt-0 lg:p-1">
      <motion.h2
        className="text-1xl font-bold text-gray-900 mb-6 tracking-tight"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        💳 Payment
      </motion.h2>

      <motion.div
        className="bg-white rounded-xl shadow-lg p-6 space-y-6 border"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-1xl font-semibold border-b pb-3">Select Payment Method</h3>

        {/* 🔹 Payment Options */}
        <div className="space-y-4">
          {paymentMethods.map(({ id, label, icon, description }) => (
            <motion.button
              key={id}
              onClick={() => setSelectedMethod(id as PaymentMethod)}
              type="button"
              className={`w-full flex items-center gap-4 p-4 border rounded-lg cursor-pointer transition 
                ${
                  selectedMethod === id
                    ? "border-green-600 bg-green-50 shadow-md"
                    : "border-gray-300 hover:border-green-500"
                }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="p-2 rounded-full bg-green-100 text-green-600">
                {icon}
              </div>
              <div className="text-left flex flex-col">
                <span className="font-semibold text-gray-900">{label}</span>
                <small className="text-gray-600">{description}</small>
              </div>
            </motion.button>
          ))}
        </div>

        {/* 🔹 Show UPI QR if selected */}
        {selectedMethod === "upi" && (
          <div className="flex flex-col items-center mt-6 space-y-3">
            <QRCodeSVG value={upiLink} size={180} includeMargin />
            <p className="text-gray-600 text-sm text-center">
              Scan this QR code with Google Pay, PhonePe, or Paytm to pay ₹{amount}.
            </p>
            <a
              href={upiLink}
              className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Pay via UPI App
            </a>
          </div>
        )}

        {/* 🔹 For other methods */}
        {selectedMethod && selectedMethod !== "upi" && (
          <motion.button
            onClick={handlePayment}
            disabled={processing}
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-green-700 transition-transform active:scale-95 disabled:opacity-50 cursor-pointer"
            whileHover={{ scale: !processing ? 1.015 : 1 }}
            whileTap={{ scale: 0.97 }}
          >
            {processing ? "⏳ Processing Payment..." : "✅ Pay Now"}
          </motion.button>
        )}
      </motion.div>

      {/* 🔹 Order Summary */}
      <motion.div
        className="bg-white rounded-xl shadow-lg p-6 border pt-4 mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="text-xl font-semibold border-b pb-3">Order Summary</h3>
        <div className="space-y-2 max-h-36 overflow-auto mt-3">
          {order.products.map((item: any) => (
            <div key={item.productId} className="flex justify-between text-gray-700 text-sm">
              <span>
                {item.name} × {item.quantity}
              </span>
              <span>₹{(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
        </div>
        <div className="border-t mt-4 pt-3 flex justify-between font-semibold text-gray-900">
          <span>Total</span>
          <span>₹{order.total.toFixed(2)}</span>
        </div>
      </motion.div>
    </div>
  );
}
