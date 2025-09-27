// import React from "react";

import Header from "./Header";

const HeroSection = () => {
 
  return (
    <>
    <Header />
    <section className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-16">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        {/* Text Content */}
        <div className="space-y-5">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Elevate your wardrobe with modern essentials
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Discover curated clothing with timeless style. Shop tees, denim, outerwear, and more.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/products"
              className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-medium px-5 py-2.5 rounded-md transition duration-200"
            >
              Shop Now
            </a>
            <a
              href="/register"
              className="inline-block border border-gray-300 hover:border-gray-500 text-gray-800 hover:text-gray-900 font-medium px-5 py-2.5 rounded-md transition duration-200"
            >
              Create Account
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="rounded-lg border bg-gray-100 p-4">
          <img
            src="/clothing-lifestyle-hero.jpg"
            alt="Clothing lifestyle assortment"
            className="w-full h-auto rounded-md"
          />
        </div>
      </div>
    </section>
    </>
  );
};

export default HeroSection;
