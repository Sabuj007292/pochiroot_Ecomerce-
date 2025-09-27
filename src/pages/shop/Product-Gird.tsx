// import { ProductCard } from "./ProductCard"; // Make sure the filename matches exactly
// import type { Product } from "./ProductCard"; // Import Product type from ProductCard file

import { ProductCard, type Product } from "./Product-Card";

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div
      className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"
      role="list"
      aria-label="Products"
    >
      {products.map((product) => (
        <div key={product.id} role="listitem">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}
