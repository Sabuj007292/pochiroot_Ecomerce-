// import { useLocation, useNavigate } from "react-router-dom";

// export default function ProductDetails() {
//   const location = useLocation();
//   const navigate = useNavigate();

//   // @ts-ignore
//   const product = location.state?.product;

//   if (!product) {
//     // Redirect if no product info
//     navigate("/shop");
//     return null;
//   }

//   // Safe fallback for images
//   const images = product.images || [];

//   return (
//     <>
//       <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-6">
//         {/* Left Side - Images */}
//         <div className="space-y-2 h-full">
//           {images.length > 0 ? (
//             images.map((img: string, idx: number) => (
//               <img
//                 key={idx}
//                 src={img}
//                 alt={`${product.name} ${idx + 1}`}
//                 className="w-full h-full object-cover rounded-lg"
//               />
//             ))
//           ) : (
//             <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-lg">
//               No Images Available
//             </div>
//           )}
//         </div>

//         {/* Right Side - Product Info */}
//         <div className="space-y-4">
//           <h2 className="text-3xl font-bold">{product.name}</h2>
//           {product.subtitle && <p className="text-gray-600">{product.subtitle}</p>}
//           <p className="text-xl font-semibold">₹{product.price}</p>
//           <p className="text-gray-700">{product.description || "No description available"}</p>
//         </div>
//       </div>
//     </>
//   );
// }
// import  { useState } from "react";
// import { FaHeart, FaStar, FaShoppingCart, FaBolt, FaTicketAlt, FaTag, FaMapMarkerAlt, FaInfoCircle, FaQuestionCircle } from "react-icons/fa";
// import Navbar from "../../components/Navbar";
// import AfterLoginFooter from "../common/AfterLoginFooter";

// const ProductDetails = () => {
//   const [isWishlisted, setIsWishlisted] = useState(false);

//   const toggleWishlist = () => {
//     setIsWishlisted(!isWishlisted);
//   };

//   return (
//     <>
//     <Navbar />
//     <div className="bg-gray-50 min-h-screen">

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 py-6">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* Left Side - Images */}
//           <div className="flex gap-4">
//             {/* Thumbnails */}
//             <div className="flex flex-col gap-3">
//               {[1, 2, 3, 4].map((_, i) => (
//                 <div
//                   key={i}
//                   className={`w-20 h-20 border ${i === 0 ? "border-blue-500 border-2" : "border-gray-300"} rounded overflow-hidden cursor-pointer hover:border-blue-500`}
//                 >
//                   <img src={`https://via.placeholder.com/80?text=${i + 1}`} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-cover" />
//                 </div>
//               ))}
//             </div>

//             {/* Main Image */}
//             <div className="flex-1 relative bg-gray-100 rounded-lg overflow-hidden">
//               <button
//                 onClick={toggleWishlist}
//                 className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition"
//               >
//                 <FaHeart className={`text-xl ${isWishlisted ? "text-red-500" : "text-gray-600"}`} />
//               </button>
//               <img src="https://via.placeholder.com/600x800?text=Main+Image" alt="Main Product" className="w-full h-full object-contain" />
//             </div>
//           </div>

//           {/* Right Side - Details */}
//           <div className="space-y-6">
//             {/* Brand & Title */}
//             <div>
//               <h2 className="text-gray-600 text-sm mb-1">VJ FASHION</h2>
//               <h1 className="text-2xl font-medium text-gray-900">Solid/Plain Bollywood Cotton Blend Saree (Green)</h1>
//             </div>

//             {/* Price Section */}
//             <div>
//               <div className="bg-green-50 inline-block px-2 py-1 rounded text-xs font-semibold text-green-700 mb-2">
//                 Special price
//               </div>
//               <div className="flex items-baseline gap-3">
//                 <span className="text-3xl font-bold text-gray-900">₹274</span>
//                 <span className="text-lg text-gray-500 line-through">₹1,999</span>
//                 <span className="text-lg font-semibold text-green-600">86% off</span>
//                 <FaQuestionCircle className="text-gray-400" />
//               </div>
//               <div className="flex items-center gap-2 mt-2">
//                 <div className="bg-green-600 text-white px-2 py-1 rounded text-sm font-semibold flex items-center gap-1">
//                   3.8 <FaStar className="text-xs" />
//                 </div>
//                 <span className="text-sm text-gray-600">88,840 ratings and 7,267 reviews</span>
//               </div>
//             </div>

//             {/* Color Selection */}
//             <div>
//               <h3 className="text-sm font-semibold text-gray-700 mb-3">Color</h3>
//               <div className="flex items-center gap-3 flex-wrap">
//                 {[1, 2, 3, 4, 5, 6].map((_, i) => (
//                   <div
//                     key={i}
//                     className={`w-16 h-20 border ${i === 4 ? "border-blue-500 border-2" : "border-gray-300"} rounded overflow-hidden cursor-pointer hover:border-blue-500`}
//                   >
//                     <img src={`https://via.placeholder.com/64x80?text=${i + 1}`} alt={`Color ${i + 1}`} className="w-full h-full object-cover" />
//                   </div>
//                 ))}
//                 <button className="text-blue-600 font-semibold text-sm hover:underline">+3 more</button>
//               </div>
//             </div>

//             {/* Coupons */}
//             <div className="border rounded-lg p-4 bg-white">
//               <h3 className="font-semibold text-gray-900 mb-3">Coupons for you</h3>
//               <div className="flex items-start gap-3">
//                 <div className="w-6 h-6 bg-green-600 rounded flex items-center justify-center flex-shrink-0">
//                   <FaTicketAlt className="text-white text-xs" />
//                 </div>
//                 <div className="flex-1 text-sm text-gray-700">
//                   <span className="font-semibold">Special Price</span> Get extra ₹30 off on 20 item(s)
//                   <a href="#" className="text-blue-600 font-semibold hover:underline ml-1">T&C</a>
//                 </div>
//               </div>
//             </div>

//             {/* Available Offers */}
//             <div className="border rounded-lg p-4 bg-white">
//               <h3 className="font-semibold text-gray-900 mb-3">Available offers</h3>
//               {[1, 2, 3].map((_, i) => (
//                 <div key={i} className="flex items-start gap-3 mb-3 last:mb-0">
//                   <div className="w-6 h-6 bg-green-600 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
//                     <FaTag className="text-white text-xs" />
//                   </div>
//                   <div className="flex-1 text-sm text-gray-700">
//                     <span className="font-semibold">Bank Offer</span> Get 5% cashback on select cards
//                     <a href="#" className="text-blue-600 font-semibold hover:underline ml-1">T&C</a>
//                   </div>
//                 </div>
//               ))}
//               <button className="text-blue-600 font-semibold text-sm hover:underline">+7 more offers</button>
//             </div>

//             {/* Delivery & Services */}
//             <div className="border rounded-lg p-4 bg-white">
//               <div className="flex items-start justify-between mb-4">
//                 <div className="flex items-center gap-2">
//                   <FaMapMarkerAlt className="text-gray-600" />
//                   <span className="font-semibold text-gray-900">Deliver to</span>
//                 </div>
//                 <span className="text-sm text-gray-600">Services</span>
//               </div>
//               <div className="flex items-center gap-2 text-sm">
//                 <FaInfoCircle className="text-blue-600" />
//                 <span className="text-gray-700">Cash on Delivery available</span>
//                 <FaQuestionCircle className="text-gray-400" />
//               </div>
//             </div>

//             {/* Action Buttons */}
//             <div className="flex gap-4 sticky bottom-0 bg-white pt-4">
//               <button className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-sm shadow-lg transition flex items-center justify-center gap-2">
//                 <FaShoppingCart /> ADD TO CART
//               </button>
//               <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-sm shadow-lg transition flex items-center justify-center gap-2">
//                 <FaBolt /> BUY NOW
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     <AfterLoginFooter />
//     </>
//   );
// };

// export default ProductDetails;

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { FaHeart, FaStar, FaShoppingCart, FaBolt, FaQuestionCircle } from "react-icons/fa";
// import Navbar from "../../components/Navbar";
// import AfterLoginFooter from "../common/AfterLoginFooter";

// interface Product {
//   productId: string;
//   productName: string;
//   brand?: string;
//   salePrice: number;
//   regularPrice?: number;
//   discountPrice?: number;
//   productImages: string[];
// }

// const ProductDetails: React.FC = () => {
//   const { id } = useParams<{ id: string }>();
//   const [product, setProduct] = useState<Product | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [isWishlisted, setIsWishlisted] = useState(false);

//   // Fetch product details
//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const res = await fetch(`http://localhost:3000/api/admin/products/${id}`);
//         const data = await res.json();
//         if (res.ok) setProduct(data);
//         else console.error(data.message);
//       } catch (err) {
//         console.error("Fetch product error:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (id) fetchProduct();
//   }, [id]);

//   const toggleWishlist = () => {
//     setIsWishlisted(!isWishlisted);
//   };

//   if (loading) return <p className="text-center mt-20">Loading...</p>;
//   if (!product) return <p className="text-center mt-20">Product not found</p>;

//   const discountPercent =
//     product.regularPrice && product.salePrice
//       ? Math.round(((product.regularPrice - product.salePrice) / product.regularPrice) * 100)
//       : 0;

//   return (
//     <>
//       <Navbar />
//       <div className="bg-gray-50 min-h-screen">
//         <div className="max-w-7xl mx-auto px-4 py-6">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//             {/* Left Side - Images */}
//             <div className="flex gap-4">
//               <div className="flex flex-col gap-3">
//                 {product.productImages.map((img, i) => (
//                   <div
//                     key={i}
//                     className={`w-20 h-20 border ${i === 0 ? "border-blue-500 border-2" : "border-gray-300"} rounded overflow-hidden cursor-pointer hover:border-blue-500`}
//                   >
//                     <img src={img} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-cover" />
//                   </div>
//                 ))}
//               </div>

//               {/* Main Image */}
//               <div className="flex-1 relative bg-gray-100 rounded-lg overflow-hidden">
//                 <button
//                   onClick={toggleWishlist}
//                   className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition"
//                 >
//                   <FaHeart className={`text-xl ${isWishlisted ? "text-red-500" : "text-gray-600"}`} />
//                 </button>
//                 <img
//                   src={product.productImages[0] || "/placeholder.svg"}
//                   alt={product.productName}
//                   className="w-full h-full object-contain"
//                 />
//               </div>
//             </div>

//             {/* Right Side - Details */}
//             <div className="space-y-6">
//               {/* Brand & Title */}
//               <div>
//                 {product.brand && <h2 className="text-gray-600 text-sm mb-1">{product.brand}</h2>}
//                 <h1 className="text-2xl font-medium text-gray-900">{product.productName}</h1>
//               </div>

//               {/* Price */}
//               <div>
//                 <div className="bg-green-50 inline-block px-2 py-1 rounded text-xs font-semibold text-green-700 mb-2">
//                   Special price
//                 </div>
//                 <div className="flex items-baseline gap-3">
//                   <span className="text-3xl font-bold text-gray-900">₹{product.salePrice}</span>
//                   {product.regularPrice && (
//                     <span className="text-lg text-gray-500 line-through">₹{product.regularPrice}</span>
//                   )}
//                   {discountPercent > 0 && (
//                     <span className="text-lg font-semibold text-green-600">{discountPercent}% off</span>
//                   )}
//                   <FaQuestionCircle className="text-gray-400" />
//                 </div>
//                 <div className="flex items-center gap-2 mt-2">
//                   <div className="bg-green-600 text-white px-2 py-1 rounded text-sm font-semibold flex items-center gap-1">
//                     3.8 <FaStar className="text-xs" />
//                   </div>
//                   <span className="text-sm text-gray-600">88,840 ratings and 7,267 reviews</span>
//                 </div>
//               </div>

//               {/* Action Buttons */}
//               <div className="flex gap-4 sticky bottom-0 bg-white pt-4">
//                 <button className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-sm shadow-lg transition flex items-center justify-center gap-2">
//                   <FaShoppingCart /> ADD TO CART
//                 </button>
//                 <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-sm shadow-lg transition flex items-center justify-center gap-2">
//                   <FaBolt /> BUY NOW
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <AfterLoginFooter />
//     </>
//   );
// };

// export default ProductDetails;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Heart, Share2, ShoppingCart, Zap, MapPin, Info, Tag } from "lucide-react";
import Navbar from "../../components/Navbar";
import AfterLoginFooter from "../common/AfterLoginFooter";

interface Product {
  productId: string;
  productName: string;
  brand?: string;
  salePrice: number;
  regularPrice?: number;
  productImages: string[];
}

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [mainImage, setMainImage] = useState<string>("");
  const [zoom, setZoom] = useState({ x: 0, y: 0, visible: false });
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/admin/products/${id}`);
        const data = await res.json();
        if (res.ok) {
          setProduct(data);
          setMainImage(data.productImages[0]);
        } else console.error(data.message);
      } catch (err) {
        console.error("Fetch product error:", err);
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchProduct();
  }, [id]);

  if (loading) return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
  );
  
  if (!product) return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-xl text-gray-600">Product not found</p>
    </div>
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoom({ x, y, visible: true });
  };

  const handleMouseLeave = () => setZoom({ x: 0, y: 0, visible: false });

  const discountPercent = product.regularPrice
    ? Math.round(((product.regularPrice - product.salePrice) / product.regularPrice) * 100)
    : 0;

  const handleAddToCart = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:3000/api/users/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          productId: product.productId,
          quantity: 1,
          name: product.productName,
          brand: product.brand,
          salePrice: product.salePrice,
          regularPrice: product.regularPrice,
          image: product.productImages[0],
        }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("✅ Added to cart successfully!");
      } else {
        alert(`❌ Failed: ${data.message}`);
      }
    } catch (err) {
      console.error("Add to cart error:", err);
      alert("Something went wrong");
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-1">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sticky top-0 position-fixed">
          {/* Left Side - Images */}
          <div className="flex gap-4 lg:sticky lg:top-24 self-start h-fit">
            {/* Thumbnails */}
            <div className="flex flex-col gap-3">
              {product.productImages.map((img, i) => (
                <div
                  key={i}
                  className={`w-20 h-24 border-2 ${
                    img === mainImage ? "border-blue-500" : "border-gray-300"
                  } rounded overflow-hidden cursor-pointer hover:border-blue-500 transition-all flex-shrink-0`}
                  onClick={() => setMainImage(img)}
                >
                  <img src={img} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>

            {/* Main Image Container with Fixed Dimensions */}
            <div className="flex-1 relative">
              <div
                className="relative bg-gray-50 p-0 rounded-lg overflow-hidden cursor-crosshair w-full h-[530px]"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className="absolute top-4 right-4 z-10 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition"
                >
                  <Heart
                    className={`w-6 h-6 ${
                      isWishlisted ? "fill-red-500 text-red-500" : "text-gray-600"
                    }`}
                  />
                </button>
                <button className="absolute top-4 right-20 z-10 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition">
                  <Share2 className="w-5 h-5 text-gray-600" />
                </button>
                
                {/* Image with fixed container */}
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src={mainImage}
                    alt={product.productName}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Zoomed Image - Appears on Hover */}
              {zoom.visible && (
                <div className="hidden lg:block absolute top-0 -right-[660px] w-[650px] h-[530px]  border-gray-300 rounded-lg overflow-hidden bg-white shadow-2xl z-50">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: `url(${mainImage})`,
                      backgroundPosition: `${zoom.x}% ${zoom.y}%`,
                      backgroundSize: "250%",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Product Details */}
          <div className="space-y-6 overflow-y-auto max-h-[calc(100vh-100px)] pr-4 custom-scrollbar">
            {/* Brand & Title */}
            <div>
              {product.brand && (
                <h2 className="text-gray-600 text-sm mb-1 uppercase tracking-wide">{product.brand}</h2>
              )}
              <h1 className="text-3xl font-semibold text-gray-900 leading-tight">
                {product.productName}
              </h1>
            </div>

            {/* Price Section */}
            <div className="border-t border-b py-4">
              <div className="bg-green-50 inline-block px-3 py-1 rounded text-xs font-semibold text-green-700 mb-3">
                Special price
              </div>
              <div className="flex items-baseline gap-3 flex-wrap">
                <span className="text-4xl font-bold text-gray-900">₹{product.salePrice}</span>
                {product.regularPrice && (
                  <>
                    <span className="text-xl text-gray-500 line-through">₹{product.regularPrice}</span>
                    {discountPercent > 0 && (
                      <span className="text-xl font-semibold text-green-600">{discountPercent}% off</span>
                    )}
                  </>
                )}
              </div>
              <div className="flex items-center gap-2 mt-3">
                <div className="bg-green-600 text-white px-2 py-1 rounded text-sm font-semibold flex items-center gap-1">
                  4.2 ★
                </div>
                <span className="text-sm text-gray-600">8,840 ratings and 2,267 reviews</span>
              </div>
            </div>

            {/* Available Offers */}
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900 text-lg">Available offers</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                  <Tag className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold">Bank Offer:</span> 5% cashback on Axis Bank Flipkart Debit Card up to ₹750
                      <a href="#" className="text-blue-600 font-semibold hover:underline ml-1">T&C</a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                  <Tag className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold">Special Price:</span> Get extra ₹30 off on 20 item(s)
                      <a href="#" className="text-blue-600 font-semibold hover:underline ml-1">T&C</a>
                    </p>
                  </div>
                </div>
                <button className="text-blue-600 font-semibold text-sm hover:underline">
                  +5 more offers
                </button>
              </div>
            </div>

             {/* Available Offers */}
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900 text-lg">Available offers</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                  <Tag className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold">Bank Offer:</span> 5% cashback on Axis Bank Flipkart Debit Card up to ₹750
                      <a href="#" className="text-blue-600 font-semibold hover:underline ml-1">T&C</a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                  <Tag className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold">Special Price:</span> Get extra ₹30 off on 20 item(s)
                      <a href="#" className="text-blue-600 font-semibold hover:underline ml-1">T&C</a>
                    </p>
                  </div>
                </div>
                <button className="text-blue-600 font-semibold text-sm hover:underline">
                  +5 more offers
                </button>
              </div>
            </div>

             {/* Available Offers */}
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900 text-lg">Available offers</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                  <Tag className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold">Bank Offer:</span> 5% cashback on Axis Bank Flipkart Debit Card up to ₹750
                      <a href="#" className="text-blue-600 font-semibold hover:underline ml-1">T&C</a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                  <Tag className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold">Special Price:</span> Get extra ₹30 off on 20 item(s)
                      <a href="#" className="text-blue-600 font-semibold hover:underline ml-1">T&C</a>
                    </p>
                  </div>
                </div>
                <button className="text-blue-600 font-semibold text-sm hover:underline">
                  +5 more offers
                </button>
              </div>
            </div>

            {/* Delivery Info */}
            <div className="border rounded-lg p-4 bg-gray-50">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-5 h-5 text-gray-600" />
                <span className="font-semibold text-gray-900">Delivery Options</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <Info className="w-4 h-4 text-blue-600" />
                <span>Cash on Delivery available</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700 mt-2">
                <Info className="w-4 h-4 text-blue-600" />
                <span>Free delivery on orders above ₹500</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 sticky bottom-0 bg-white pt-4 pb-2">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-4 px-6 rounded-lg shadow-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-5 h-5" />
                ADD TO CART
              </button>
              <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-lg shadow-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                <Zap className="w-5 h-5" />
                BUY NOW
              </button>
            </div>
          </div>
        </div>

        {/* Product Description Section */}
        <div className="mt-12 border-t pt-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Product Details</h2>
          <div className="bg-white rounded-lg border p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex justify-between py-2 border-b">
                <span className="text-gray-600">Product Name</span>
                <span className="font-medium text-gray-900">{product.productName}</span>
              </div>
              {product.brand && (
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Brand</span>
                  <span className="font-medium text-gray-900">{product.brand}</span>
                </div>
              )}
              <div className="flex justify-between py-2 border-b">
                <span className="text-gray-600">Price</span>
                <span className="font-medium text-gray-900">₹{product.salePrice}</span>
              </div>
              {product.regularPrice && (
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">MRP</span>
                  <span className="font-medium text-gray-900 line-through">₹{product.regularPrice}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <AfterLoginFooter />
    </>
  );
};

export default ProductDetails;