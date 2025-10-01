export type Product = {
  id: string
  title: string
  subtitle?: string
  price: number
  imageAlt: string
  imageWidth?: number
  imageHeight?: number
  imageUrl?: string
  discountedPrice?: number
  discount?: number
}

export function ProductCard({ product }: { product: Product }) {
  const { title, subtitle, price, discountedPrice, discount, imageAlt, imageUrl, imageWidth = 480, imageHeight = 320 } = product;

  return (
    <div className="card overflow-hidden border rounded-md shadow-sm">
      <div className="card-header p-0">
        <img
          src={imageUrl || "/placeholder.svg?height=320&width=480&query=clothing product image"}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          className="h-60 w-full object-fill"
        />
      </div>
      <div className="card-content p-4">
        <h3 className="text-sm font-medium leading-6 text-gray-900">{title}</h3>
        <small className="text-xs text-gray-500">{subtitle} </small>
        {/* <p className="mt-1 text-base font-semibold">Rs.{discountedPrice}</p> */}
        <div className="text-sm text-gray-800 space-y-1">
          <div className="text-xl font-semibold text-gray-900">
            ₹{discountedPrice}
            <span className="ml-2 text-green-600 font-medium text-sm">{discount}% OFF</span>
          </div>

          {/* MRP */}
          <div className="text-gray-500 text-sm">
            MRP: <span className="line-through">₹{price}</span>
          </div>

          {/* Tax info */}
          <div className="text-xs text-gray-400">
            (Incl. of all taxes)
          </div>
        </div>


      </div>
      <div className="card-footer flex items-center gap-2 p-4 pt-0">
        <button className="mt-4 w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 cursor-pointer">
          Add to cart
        </button>
      </div>
    </div>
  );
}


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
