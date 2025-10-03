// import React from "react";

const categories = [
  {
    name: "Men's Fashion",
    image: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=600&q=80",
    itemCount: "2.5k+ items",
  },
  {
    name: "Women's Fashion",
    image: "https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?cs=srgb&dl=pexels-kish-1488463.jpg&fm=jpg",
    itemCount: "3.2k+ items",
  },
  {
    name: "Electronics",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&q=80",
    itemCount: "1.8k+ items",
  },
  {
    name: "Home & Living",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
    itemCount: "1.5k+ items",
  },
  {
    name: "Beauty & Care",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80",
    itemCount: "980+ items",
  },
  {
    name: "Sports & Fitness",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80",
    itemCount: "750+ items",
  },
];

const CategoryGrid = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:py-16">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Shop by Category</h2>
        <a href="#" className="text-sm font-medium text-blue-600 hover:underline">
          View All
        </a>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-6">
        {categories.map((category) => (
          <div
            key={category.name}
            className="group relative cursor-pointer overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
          >
            <div className="relative aspect-square overflow-hidden">
              <img
                src={category.image}
                alt={category.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300 group-hover:from-black/80" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white transform transition-transform duration-300 group-hover:translate-y-0">
                <h3 className="text-lg font-bold mb-1 transition-all duration-300 group-hover:text-xl">{category.name}</h3>
                <p className="text-sm text-white/90 mb-3">{category.itemCount}</p>
                
                {/* Shop Now Button - appears on hover */}
                <div className="opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  <span className="inline-flex items-center text-sm font-semibold text-white border-b-2 border-white pb-1">
                    Shop Now →
                  </span>
                </div>
              </div>

              {/* Corner Badge */}
              <div className="absolute top-3 right-3 opacity-0 transform scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
                <div className="bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  Explore
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;