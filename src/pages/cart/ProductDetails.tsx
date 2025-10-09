import { useLocation, useNavigate } from "react-router-dom";

export default function ProductDetails() {
  const location = useLocation();
  const navigate = useNavigate();

  // @ts-ignore
  const product = location.state?.product;

  if (!product) {
    // Redirect if no product info
    navigate("/shop");
    return null;
  }

  // Safe fallback for images
  const images = product.images || [];

  return (
    <>
      <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-6">
        {/* Left Side - Images */}
        <div className="space-y-2 h-full">
          {images.length > 0 ? (
            images.map((img: string, idx: number) => (
              <img
                key={idx}
                src={img}
                alt={`${product.name} ${idx + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            ))
          ) : (
            <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-lg">
              No Images Available
            </div>
          )}
        </div>

        {/* Right Side - Product Info */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">{product.name}</h2>
          {product.subtitle && <p className="text-gray-600">{product.subtitle}</p>}
          <p className="text-xl font-semibold">₹{product.price}</p>
          <p className="text-gray-700">{product.description || "No description available"}</p>
        </div>
      </div>
    </>
  );
}
