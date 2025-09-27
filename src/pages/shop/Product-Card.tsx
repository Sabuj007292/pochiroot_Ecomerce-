export type Product = {
  id: string
  title: string
  price: number
  imageAlt: string
  imageWidth?: number
  imageHeight?: number
}

export function ProductCard({ product }: { product: Product }) {
  const { title, price, imageAlt, imageWidth = 480, imageHeight = 320 } = product;

  return (
    <div className="card overflow-hidden border rounded-md shadow-sm">
      <div className="card-header p-0">
        <img
          src="/placeholder.svg?height=320&width=480&query=clothing product image"
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          className="h-56 w-full object-cover"
        />
      </div>
      <div className="card-content p-4">
        <h3 className="text-sm font-medium leading-6 text-gray-900">{title}</h3>
        <p className="mt-1 text-base font-semibold">${price.toFixed(2)}</p>
      </div>
      <div className="card-footer flex items-center gap-2 p-4 pt-0">
        <button className="bg-primary text-primary-foreground w-full py-2 rounded-md">
          Add to cart
        </button>
      </div>
    </div>
  );
}
