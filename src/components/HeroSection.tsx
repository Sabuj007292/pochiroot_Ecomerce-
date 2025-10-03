// import React from "react";

// import Header from "./Header";
import { ArrowRight } from "lucide-react";
import Navbar from "./Navbar";
import CategoryGrid from "./CategoryGrid";
import FeaturedProducts from "./FeaturedProducts";
import DealsBanner from "./DealsBanner";
import Footer from "./footer";

const HeroSection = () => {
 
  // return (
  //   <>
  //   {/* <Header /> */}
  //   <Navbar />
  //   <section className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-16">
  //     <div className="grid gap-10 md:grid-cols-2 md:items-center">
  //       {/* Text Content */}
  //       <div className="space-y-5">
  //         <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
  //           Elevate your wardrobe with modern essentials
  //         </h1>
  //         <p className="text-gray-600 leading-relaxed">
  //           Discover curated clothing with timeless style. Shop tees, denim, outerwear, and more.
  //         </p>

  //         {/* CTA Buttons */}
  //         <div className="flex flex-wrap items-center gap-4">
  //           <a
  //             href="/products"
  //             className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-medium px-5 py-2.5 rounded-md transition duration-200"
  //           >
  //             Shop Now
  //           </a>
  //           <a
  //             href="/register"
  //             className="inline-block border border-gray-300 hover:border-gray-500 text-gray-800 hover:text-gray-900 font-medium px-5 py-2.5 rounded-md transition duration-200"
  //           >
  //             Create Account
  //           </a>
  //         </div>
  //       </div>

  //       {/* Image */}
  //       <div className="rounded-lg border bg-gray-100 p-4">
  //         <img
  //           src="/clothing-lifestyle-hero.jpg"
  //           alt="Clothing lifestyle assortment"
  //           className="w-full h-auto rounded-md"
  //         />
  //       </div>
  //     </div>
  //   </section>
  //   </>
  // );
  return(
    <>
    <Navbar />
    <section className="relative overflow-hidden bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="inline-block rounded-full bg-red-50 px-4 py-1.5 text-sm font-medium text-red-600">
              New Collection 2024
            </div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
              Discover your style with premium fashion
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Explore curated collections of clothing, accessories, and lifestyle products. Quality meets affordability
              in every piece.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors">
                Shop Now
                <ArrowRight className="h-4 w-4" />
              </button>
              <button className="px-6 py-3 bg-white border border-gray-300 text-gray-900 font-medium rounded-md hover:bg-gray-50 transition-colors">
                Explore Collections
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative aspect-square md:aspect-auto md:h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80"
              alt="Fashion collection showcase"
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
    <CategoryGrid />
    <FeaturedProducts />
    <DealsBanner />
    <Footer />
    </>
  )
};

export default HeroSection;
