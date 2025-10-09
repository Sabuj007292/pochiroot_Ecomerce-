// export type Product = {
//   id: string
//   title: string
//   subtitle?: string
//   price: number
//   imageAlt: string
//   imageWidth?: number
//   imageHeight?: number
//   imageUrl?: string
//   discountedPrice?: number
//   discount?: number
// }

// export function ProductCard({ product }: { product: Product }) {
//   const { title, subtitle, price, discountedPrice, discount, imageAlt, imageUrl, imageWidth = 480, imageHeight = 320 } = product;

//   return (
//     <div className="card overflow-hidden border rounded-md shadow-sm">
//       <div className="card-header p-0">
//         <img
//           src={imageUrl || "/placeholder.svg?height=320&width=480&query=clothing product image"}
//           alt={imageAlt}
//           width={imageWidth}
//           height={imageHeight}
//           className="h-60 w-full object-fill"
//         />
//       </div>
//       <div className="card-content p-4">
//         <h3 className="text-sm font-medium leading-6 text-gray-900">{title}</h3>
//         <small className="text-xs text-gray-500">{subtitle} </small>
//         {/* <p className="mt-1 text-base font-semibold">Rs.{discountedPrice}</p> */}
//         <div className="text-sm text-gray-800 space-y-1">
//           <div className="text-xl font-semibold text-gray-900">
//             ₹{discountedPrice}
//             <span className="ml-2 text-green-600 font-medium text-sm">{discount}% OFF</span>
//           </div>

//           {/* MRP */}
//           <div className="text-gray-500 text-sm">
//             MRP: <span className="line-through">₹{price}</span>
//           </div>

//           {/* Tax info */}
//           <div className="text-xs text-gray-400">
//             (Incl. of all taxes)
//           </div>
//         </div>


//       </div>
//       <div className="card-footer flex items-center gap-2 p-4 pt-0">
//         <button className="mt-4 w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 cursor-pointer">
//           Add to cart
//         </button>
//       </div>
//     </div>
//   );
// }


// export type Product = {
//   id: string
//   title: string
//   price: number
//   imageAlt: string
//   imageUrl?: string
// }

// export function ProductCard({ product }: { product: Product }) {
//   const { title, price, imageAlt, imageUrl } = product;

//   return (
//     <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
//       {/* Product Image */}
//       <div className="relative w-full h-64">
//         <img
//           src={imageUrl || "/placeholder.svg?height=320&width=480&query=clothing product image"}
//           alt={imageAlt}
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* Product Info */}
//       <div className="p-4 flex flex-col justify-between h-40">
//         <div>
//           <h3 className="text-lg font-semibold text-gray-900 truncate">{title}</h3>
//           <p className="mt-2 text-gray-700 font-bold">${price.toFixed(2)}</p>
//         </div>

//         {/* Add to Cart Button */}
//         <button className="mt-4 w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
//           Add to cart
//         </button>
//       </div>
//     </div>
//   );
// }

// export function ProductCard({ product }: { product: Product }) {
//   const { id, title, subtitle, price, discountedPrice, discount, imageAlt, imageUrl, imageWidth = 480, imageHeight = 320 } = product;

//   // Add to cart handler
//   const handleAddToCart = async () => {
//     try {
//       const token = localStorage.getItem("token");

//       const response = await fetch("http://localhost:3000/api/users/cart/add", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({
//           productId: id,
//           quantity: 1,
//           name: title,
//           subtitle,
//           price,
//           discountedPrice,
//           discount,
//           image: imageUrl,
//         }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         alert("✅ Added to cart!");
//         console.log("Cart response:", data);
//       } else {
//         alert(`❌ Failed: ${data.message}`);
//       }
//     } catch (err) {
//       console.error("Add to cart error:", err);
//       alert("Something went wrong");
//     }
//   };

//   return (
//     <div className="card overflow-hidden border rounded-md shadow-sm">
//       <div className="card-header p-0">
//         <img
//           src={imageUrl || "/placeholder.svg?height=320&width=480&query=clothing product image"}
//           alt={imageAlt}
//           width={imageWidth}
//           height={imageHeight}
//           className="h-60 w-full object-fill"
//         />
//       </div>
//       <div className="card-content p-4">
//         <h3 className="text-sm font-medium leading-6 text-gray-900">{title}</h3>
//         <small className="text-xs text-gray-500">{subtitle}</small>

//         <div className="text-sm text-gray-800 space-y-1">
//           <div className="text-xl font-semibold text-gray-900">
//             ₹{discountedPrice}
//             {discount && <span className="ml-2 text-green-600 font-medium text-sm">{discount}% OFF</span>}
//           </div>

//           <div className="text-gray-500 text-sm">
//             MRP: <span className="line-through">₹{price}</span>
//           </div>

//           <div className="text-xs text-gray-400">(Incl. of all taxes)</div>
//         </div>
//       </div>

//       <div className="card-footer flex items-center gap-2 p-4 pt-0">
//         <button
//           onClick={handleAddToCart}
//           className="mt-4 w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 cursor-pointer"
//         >
//           Add to cart
//         </button>
//       </div>
//     </div>
//   );
// }

// import { useState, useRef } from "react";
// import { motion } from "framer-motion";
// import { Loader2, Check } from "lucide-react";

export type Product = {
  id: string;
  productName: string;
  subtitle?: string;
  price: number;
  discountedPrice?: number;
  discount?: number;
  imageAlt: string;
  imageUrl?: string;
  imageWidth?: number;
  imageHeight?: number;
};

// export function ProductCard({ product }: { product: Product }) {
  // const { id, title, subtitle, price, discountedPrice, discount, imageAlt, imageUrl, imageWidth = 480, imageHeight = 320 } = product;
//   const [loading, setLoading] = useState(false);
//   const [added, setAdded] = useState(false);
//   const hasClicked = useRef(false); // ✅ Prevent multiple clicks

//   const handleAddToCart = async () => {
//     if (hasClicked.current || added) return; // skip if already clicked
//     hasClicked.current = true;

//     try {
//       setLoading(true);
//       const token = localStorage.getItem("token");
//       const response = await fetch("http://localhost:3000/api/users/cart/add", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({
//           productId: id,
//           quantity: 1,
//           name: title,
//           subtitle,
//           price,
//           discountedPrice,
//           discount,
//           image: imageUrl,
//         }),
//       });

//       const data = await response.json();
//       setLoading(false);

//       if (response.ok) {
//         setAdded(true); // ✅ stays "Added!" permanently
//         console.log("Cart response:", data.cart);
//       } else {
//         alert(`❌ Failed: ${data.message}`);
//         hasClicked.current = false; // reset if failed
//       }
//     } catch (err) {
//       console.error("Add to cart error:", err);
//       setLoading(false);
//       hasClicked.current = false; // reset on error
//       alert("Something went wrong");
//     }
//   };

//   return (
//     <motion.div
//       whileHover={{ scale: 1.02 }}
//       whileTap={{ scale: 0.97 }}
//       className="card overflow-hidden border rounded-md shadow-sm bg-white"
//     >
//       <div className="card-header p-0">
//         <motion.img
//           src={imageUrl || "/placeholder.svg"}
//           alt={imageAlt}
//           width={imageWidth}
//           height={imageHeight}
//           className="h-60 w-full object-cover"
//           whileHover={{ scale: 1.05 }}
//           transition={{ duration: 0.3 }}
//         />
//       </div>

//       <div className="card-content p-4">
//         <h3 className="text-sm font-medium text-gray-900">{title}</h3>
//         <small className="text-xs text-gray-500">{subtitle}</small>

//         <div className="text-sm text-gray-800 space-y-1">
//           <div className="text-xl font-semibold text-gray-900">
//             ₹{discountedPrice}
//             {discount && <span className="ml-2 text-green-600 font-medium text-sm">{discount}% OFF</span>}
//           </div>
//           <div className="text-gray-500 text-sm">
//             MRP: <span className="line-through">₹{price}</span>
//           </div>
//           <div className="text-xs text-gray-400">(Incl. of all taxes)</div>
//         </div>
//       </div>

//       <div className="card-footer flex items-center gap-2 p-4 pt-0">
//         <motion.button
//           onClick={handleAddToCart}
//           disabled={loading || added}
//           whileTap={{ scale: 0.95 }}
//           className={`mt-4 w-full flex items-center justify-center gap-2 font-semibold py-2 rounded-lg transition-colors duration-200
//             ${loading ? "bg-gray-400 text-white" : added ? "bg-green-600 text-white" : "bg-blue-600 text-white hover:bg-blue-700"}`}
//         >
//           {loading ? (
//             <>
//               <Loader2 className="animate-spin h-5 w-5" />
//               Adding...
//             </>
//           ) : added ? (
//             <>
//               <Check className="h-5 w-5 text-white" />
//               Added!
//             </>
//           ) : (
//             "Add to cart"
//           )}
//         </motion.button>
//       </div>
//     </motion.div>
//   );
// }


import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Loader2, Check } from "lucide-react";

export function ProductCard({ product }: { product: Product }) {
  const {
    id,
    productName,
    subtitle,
    price,
    discountedPrice,
    discount,
    imageAlt,
    imageUrl,
    // imageWidth = 480,
    // imageHeight = 320,
  } = product;

  const [loading, setLoading] = useState(false);
  const [added, setAdded] = useState(false);
  const hasClicked = useRef(false);

  const handleAddToCart = async () => {
    if (hasClicked.current || added) return;
    hasClicked.current = true;

    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:3000/api/users/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          productId: id,
          quantity: 1,
          name: productName,
          subtitle,
          price,
          discountedPrice,
          discount,
          image: imageUrl,
        }),
      });

      const data = await response.json();
      setLoading(false);

      if (response.ok) {
        setAdded(true);
        console.log("Cart response:", data.cart);
      } else {
        alert(`❌ Failed: ${data.message}`);
        hasClicked.current = false;
      }
    } catch (err) {
      console.error("Add to cart error:", err);
      setLoading(false);
      hasClicked.current = false;
      alert("Something went wrong");
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className="group border rounded-md bg-white shadow-sm overflow-hidden flex flex-col transition-all duration-300"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-col flex-grow p-4 space-y-2">
        <h3 className="text-base font-semibold text-gray-900 truncate">{productName}</h3>
        {subtitle && <p className="text-sm text-gray-500 truncate">{subtitle}</p>}

        {/* Pricing */}
        <div className="mt-2 space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-gray-900">₹{discountedPrice}</span>
            {discount && (
              <span className="text-sm text-green-600 font-medium">{discount}% OFF</span>
            )}
          </div>
          <div className="text-sm text-gray-500">
            <span className="line-through">₹{price}</span>
          </div>
          <div className="text-xs text-gray-400">(Incl. of all taxes)</div>
        </div>

        {/* Button */}
        <div className="mt-auto pt-2">
          <motion.button
            onClick={handleAddToCart}
            disabled={loading || added}
            whileTap={{ scale: 0.95 }}
            className={`w-full flex items-center justify-center gap-2 py-2 px-4 rounded-md text-sm font-medium transition-colors duration-200
              ${loading
                ? "bg-gray-400 text-white"
                : added
                ? "bg-green-600 text-white"
                : "bg-blue-600 text-white hover:bg-blue-700"}`}
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin h-5 w-5" />
                Adding...
              </>
            ) : added ? (
              <>
                <Check className="h-5 w-5 text-white" />
                Added!
              </>
            ) : (
              "Add to cart"
            )}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
