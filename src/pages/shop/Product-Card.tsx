

// export type Product = {
//   id: string;
//   productName: string;
//   brand?: string;
//   salePrice: number;
//   regularPrice?: number;
//   discountPrice?: number;
//   imageAlt: string;
//   imageUrl?: string;
//   imageWidth?: number;
//   imageHeight?: number;
// };

// import { useState, useRef } from "react";
// import { motion } from "framer-motion";
// import { Loader2, Check, Info } from "lucide-react";

// export function ProductCard({ product }: { product: Product }) {
//   const {
//     id,
//     productName,
//     brand,
//     salePrice,
//     regularPrice,
//     discountPrice,
//     imageAlt,
//     imageUrl,
//     // imageWidth = 480,
//     // imageHeight = 320,
//   } = product;

//   const [loading, setLoading] = useState(false);
//   const [added, setAdded] = useState(false);
//   const hasClicked = useRef(false);

//   const handleAddToCart = async () => {
//     if (hasClicked.current || added) return;
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
//           name: productName,
//           brand,
//           salePrice,
//           regularPrice,
//           discountPrice,
//           image: imageUrl,
//         }),
//       });

//       const data = await response.json();
//       setLoading(false);

//       if (response.ok) {
//         setAdded(true);
//         console.log("Cart response:", data.cart);
//       } else {
//         alert(`❌ Failed: ${data.message}`);
//         hasClicked.current = false;
//       }
//     } catch (err) {
//       console.error("Add to cart error:", err);
//       setLoading(false);
//       hasClicked.current = false;
//       alert("Something went wrong");
//     }
//   };

//   return (
//     <motion.div
//       whileHover={{ scale: 1.02 }}
//       whileTap={{ scale: 0.97 }}
//       className="group border rounded-md bg-white shadow-sm overflow-hidden flex flex-col transition-all duration-300"
//     >
//       {/* Image */}
//       <div className="relative overflow-hidden aspect-[4/3]">
//         <img
//           src={imageUrl || "/placeholder.svg"}
//           alt={imageAlt}
//           className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//         />
//       </div>

//       {/* Product Info */}
//       <div className="flex flex-col flex-grow p-4 space-y-2">
//         <h3 className="text-base font-semibold text-gray-900 truncate">{productName}</h3>
//         {brand && <p className="text-sm text-gray-500 truncate">{brand}</p>}

//         {/* Pricing */}
//         <div className="mt-2 space-y-1">
//           <div className="flex items-center gap-2">
//             <span className="text-lg font-bold text-gray-900">₹{salePrice}</span>
//             {discountPrice && (
//               <span className="text-sm text-green-600 font-medium">{discountPrice}% OFF</span>
//             )}
//             <span className="cursor-pointer" title="Inclusive of all taxes"> <Info className="h-4 w-4 text-white-600" /> </span>
            
//           </div>
//           <div className="text-sm text-gray-500">
//             <span className="line-through">₹{regularPrice}</span>
//           </div>
//           <div className="text-xs text-gray-400">(Incl. of all taxes)</div>
//         </div>

//         {/* Button */}
//         <div className="mt-auto pt-2">
//           <motion.button
//             onClick={handleAddToCart}
//             disabled={loading || added}
//             whileTap={{ scale: 0.95 }}
//             className={`w-full flex items-center justify-center gap-2 py-2 px-4 rounded-md text-sm font-medium transition-colors duration-200
//               ${loading
//                 ? "bg-gray-400 text-white"
//                 : added
//                 ? "bg-green-600 text-white"
//                 : "bg-blue-600 text-white hover:bg-blue-700"}`}
//           >
//             {loading ? (
//               <>
//                 <Loader2 className="animate-spin h-5 w-5" />
//                 Adding...
//               </>
//             ) : added ? (
//               <>
//                 <Check className="h-5 w-5 text-white" />
//                 Added!
//               </>
//             ) : (
//               "Add to cart"
//             )}
//           </motion.button>
//         </div>
//       </div>
//     </motion.div>
//   );
// }


// import { useState, useRef } from "react";
// import { motion } from "framer-motion";
// import { Loader2, Check, Info, Heart } from "lucide-react";

// export type Product = {
//   id: string;
//   productName: string;
//   brand?: string;
//   salePrice: number;
//   regularPrice?: number;
//   discountPrice?: number;
//   imageAlt: string;
//   imageUrl?: string;
//   imageWidth?: number;
//   imageHeight?: number;
// };

// export function ProductCard({ product }: { product: Product }) {
//   const {
//     id,
//     productName,
//     brand,
//     salePrice,
//     regularPrice,
//     discountPrice,
//     imageAlt,
//     imageUrl,
//   } = product;

//   const [loading, setLoading] = useState(false);
//   const [added, setAdded] = useState(false);
//   const [isWishlisted, setIsWishlisted] = useState(false);
//   const hasClicked = useRef(false);

//   const handleAddToCart = async () => {
//     if (hasClicked.current || added) return;
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
//           name: productName,
//           brand,
//           salePrice,
//           regularPrice,
//           discountPrice,
//           image: imageUrl,
//         }),
//       });

//       const data = await response.json();
//       setLoading(false);

//       if (response.ok) {
//         setAdded(true);
//         console.log("Cart response:", data.cart);
//         setTimeout(() => {
//           setAdded(false);
//           hasClicked.current = false;
//         }, 2000);
//       } else {
//         alert(`❌ Failed: ${data.message}`);
//         hasClicked.current = false;
//       }
//     } catch (err) {
//       console.error("Add to cart error:", err);
//       setLoading(false);
//       hasClicked.current = false;
//       alert("Something went wrong");
//     }
//   };

//   const handleToggleWishlist = async (e: React.MouseEvent) => {
//     e.stopPropagation();
    
//     try {
//       const token = localStorage.getItem("token");
//       const endpoint = isWishlisted 
//         ? "http://localhost:3000/api/users/wishlist/remove"
//         : "http://localhost:3000/api/users/wishlist/add";
      
//       const response = await fetch(endpoint, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({
//           productId: id,
//           name: productName,
//           brand,
//           salePrice,
//           regularPrice,
//           discountPrice,
//           image: imageUrl,
//         }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setIsWishlisted(!isWishlisted);
//         console.log("Wishlist response:", data);
//       } else {
//         alert(`❌ Failed: ${data.message}`);
//       }
//     } catch (err) {
//       console.error("Wishlist error:", err);
//       alert("Something went wrong");
//     }
//   };

//   const handleViewDetails = () => {
//     // Navigate to product details page
//     window.location.href = `/product/${id}`;
//     // Or if using React Router:
//     // navigate(`/product/${id}`);
//   };

//   return (
//     <motion.div
//       whileHover={{ scale: 1.02 }}
//       className="group relative border rounded-lg bg-white shadow-sm overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg"
//     >
//       {/* Image Section */}
//       <div className="relative overflow-hidden aspect-[4/3]">
//         <img
//           src={imageUrl || "/placeholder.svg"}
//           alt={imageAlt}
//           className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//         />
        
//         {/* Discount Badge */}
//         {discountPrice && (
//           <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
//             {discountPrice}% OFF
//           </div>
//         )}

//         {/* Wishlist & View Buttons */}
//         <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
//           <motion.button
//             whileTap={{ scale: 0.9 }}
//             onClick={handleToggleWishlist}
//             className={`p-2 rounded-full backdrop-blur-sm transition-colors duration-300 cursor-pointer ${
//               isWishlisted 
//                 ? 'bg-red-500 text-white' 
//                 : 'bg-white/90 text-gray-700 hover:bg-red-50'
//             }`}
//           >
//             <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-current' : ''}`} />
//           </motion.button>
          
//           {/* <motion.button
//             whileTap={{ scale: 0.9 }}
//             onClick={handleViewDetails}
//             className="p-2 rounded-full bg-white/90 backdrop-blur-sm text-gray-700 hover:bg-blue-50 transition-colors"
//           >
//             <Eye className="h-5 w-5" />
//           </motion.button> */}
//         </div>
//       </div>

//       {/* Product Info */}
//       <div className="flex flex-col flex-grow p-4 space-y-2">
//         <h3 className="text-base font-semibold text-gray-900 line-clamp-2 leading-tight">
//           {productName}
//         </h3>
//         {brand && <p className="text-sm text-gray-500 truncate">{brand}</p>}

//         {/* Pricing */}
//         <div className="mt-2 space-y-1">
//           <div className="flex items-center gap-2 flex-wrap">
//             <span className="text-xl font-bold text-gray-900">₹{salePrice}</span>
//             {regularPrice && (
//               <span className="text-sm text-gray-500 line-through">₹{regularPrice}</span>
//             )}
//           </div>
//           <div className="flex items-center gap-1 text-xs text-gray-400">
//            <span className="cursor-pointer" title="Inclusive of all taxes"> <Info className="h-4 w-4 text-white-600" /> </span>
//           </div>
//         </div>

//         {/* Action Buttons */}
//         <div className="mt-auto pt-3 flex gap-2">
//           <motion.button
//             onClick={handleViewDetails}
//             whileTap={{ scale: 0.95 }}
//             className="flex-1 py-2 px-4 rounded-md text-sm font-medium border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors duration-200"
//           >
//             View Details
//           </motion.button>
          
//           <motion.button
//             onClick={handleAddToCart}
//             disabled={loading || added}
//             whileTap={{ scale: 0.95 }}
//             className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-md text-sm font-medium transition-colors duration-200
//               ${loading
//                 ? "bg-gray-400 text-white cursor-not-allowed"
//                 : added
//                 ? "bg-green-600 text-white"
//                 : "bg-blue-600 text-white hover:bg-blue-700"}`}
//           >
//             {loading ? (
//               <>
//                 <Loader2 className="animate-spin h-4 w-4" />
//                 <span className="hidden sm:inline">Adding...</span>
//               </>
//             ) : added ? (
//               <>
//                 <Check className="h-4 w-4" />
//                 <span className="hidden sm:inline">Added!</span>
//               </>
//             ) : (
//               "Add to Cart"
//             )}
//           </motion.button>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Loader2, Check, Info, Heart } from "lucide-react";

export type Product = {
  id: string;
  productName: string;
  brand?: string;
  salePrice: number;
  regularPrice?: number;
  discountPrice?: number;
  imageAlt: string;
  imageUrl?: string;
  imageWidth?: number;
  imageHeight?: number;
};

export function ProductCard({ product }: { product: Product }) {
  const {
    id,
    productName,
    brand,
    salePrice,
    regularPrice,
    discountPrice,
    imageAlt,
    imageUrl,
  } = product;

  const [loading, setLoading] = useState(false);
  const [added, setAdded] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const hasClicked = useRef(false);

  // ✅ On mount, check if this product is already in wishlist
  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const response = await fetch("http://localhost:3000/api/users/wishlist", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) return;

        const data = await response.json();

        // Check if product is already in wishlist
        const found = data.wishlist?.some(
          (item: any) => item.productId === id
        );

        setIsWishlisted(found);
      } catch (err) {
        console.error("Fetch wishlist error:", err);
      }
    };

    fetchWishlist();
  }, [id]);

  // 🛒 Add to Cart
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
          brand,
          salePrice,
          regularPrice,
          discountPrice,
          image: imageUrl,
        }),
      });

      const data = await response.json();
      setLoading(false);

      if (response.ok) {
        setAdded(true);
        console.log("Cart response:", data.cart);
        setTimeout(() => {
          setAdded(false);
          hasClicked.current = false;
        }, 2000);
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

  // ❤️ Add / Remove Wishlist
  const handleToggleWishlist = async (e: React.MouseEvent) => {
    e.stopPropagation();

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("Please log in to use wishlist");
        return;
      }

      const endpoint = isWishlisted
        ? "http://localhost:3000/api/users/wishlist/remove"
        : "http://localhost:3000/api/users/wishlist/add";

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          productId: id,
          name: productName,
          brand,
          salePrice,
          regularPrice,
          discountPrice,
          image: imageUrl,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsWishlisted(!isWishlisted);
        console.log("Wishlist response:", data);
      } else {
        alert(`❌ Failed: ${data.message}`);
      }
    } catch (err) {
      console.error("Wishlist error:", err);
      alert("Something went wrong");
    }
  };

  const handleViewDetails = () => {
    window.location.href = `/product/${id}`;
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="group relative border rounded-lg bg-white shadow-sm overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg"
    >
      {/* Image Section */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Discount Badge */}
        {discountPrice && (
          <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            {discountPrice}% OFF
          </div>
        )}

        {/* Wishlist Button */}
        <div className="absolute top-3 right-3 opacity-100 transition-opacity duration-300 cursor-pointer">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={handleToggleWishlist}
            className={`p-2 rounded-full backdrop-blur-sm transition-colors duration-300 cursor-pointer ${
              isWishlisted
                ? "bg-red-500 text-white"
                : "bg-white/90 text-gray-700 hover:bg-red-50"
            }`}
          >
            <Heart
              className={`h-5 w-5 ${
                isWishlisted ? "fill-current text-white" : ""
              }`}
            />
          </motion.button>
        </div>
      </div>

      {/* Product Info */}
      <div className="flex flex-col flex-grow p-4 space-y-2">
        <h3 className="text-base font-semibold text-gray-900 line-clamp-2 leading-tight">
          {productName}
        </h3>
        {brand && <p className="text-sm text-gray-500 truncate">{brand}</p>}

        {/* Pricing */}
        <div className="mt-2 space-y-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xl font-bold text-gray-900">₹{salePrice}</span>
            {regularPrice && (
              <span className="text-sm text-gray-500 line-through">
                ₹{regularPrice}
              </span>
            )}
             <span title="Inclusive of all taxes">
              <Info className="h-4 w-4 text-gray-600" />
            </span>
          </div>
          {/* <div className="flex items-center gap-1 text-xs text-gray-400">
            <span title="Inclusive of all taxes">
              <Info className="h-4 w-4 text-gray-600" />
            </span>
          </div> */}
        </div>

        {/* Buttons */}
        <div className="mt-auto pt-3 flex gap-2">
          <motion.button
            onClick={handleViewDetails}
            whileTap={{ scale: 0.95 }}
            className="flex-1 py-2 px-4 rounded-md text-sm font-medium border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors duration-200"
          >
            View Details
          </motion.button>

          <motion.button
            onClick={handleAddToCart}
            disabled={loading || added}
            whileTap={{ scale: 0.95 }}
            className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-md text-sm font-medium transition-colors duration-200
              ${
                loading
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : added
                  ? "bg-green-600 text-white"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin h-4 w-4" />
                <span className="hidden sm:inline">Adding...</span>
              </>
            ) : added ? (
              <>
                <Check className="h-4 w-4" />
                <span className="hidden sm:inline">Added!</span>
              </>
            ) : (
              "Add to Cart"
            )}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
