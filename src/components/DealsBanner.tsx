import { Clock, Sparkles } from "lucide-react";

export function DealsBanner() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:py-16">
      <div className="grid gap-6 md:grid-cols-2">
        
        {/* Flash Sale */}
        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-600 via-orange-500 to-yellow-500 shadow-xl transition-transform duration-500 hover:scale-[1.02] hover:shadow-2xl">
          {/* Decorative elements */}
          <div className="absolute -bottom-12 -right-12 h-56 w-56 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute -top-12 right-20 h-40 w-40 rounded-full bg-white/20 blur-2xl" />

          {/* Content */}
          <div className="relative z-10 p-8 md:p-12">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/30 px-3 py-1 text-sm font-medium text-white backdrop-blur-md shadow-sm">
              <Clock className="h-4 w-4" />
              Limited Time Offer
            </div>
            <h3 className="mb-2 text-4xl font-extrabold text-white drop-shadow-md">
              🔥 Flash Sale
            </h3>
            <p className="mb-6 text-lg text-white/90">
              Up to <span className="font-bold">70% OFF</span> on electronics
            </p>
            <button className="rounded-lg bg-white px-6 py-3 text-base font-semibold text-red-600 shadow-md transition-all hover:scale-105 hover:bg-white/90">
              Shop Now
            </button>
          </div>
        </div>

        {/* Spring Collection */}
        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-teal-500 via-blue-500 to-indigo-600 shadow-xl transition-transform duration-500 hover:scale-[1.02] hover:shadow-2xl">
          {/* Decorative */}
          <div className="absolute -bottom-12 -left-12 h-56 w-56 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute top-12 right-12 h-32 w-32 rounded-full bg-white/20 blur-2xl" />

          {/* Content */}
          <div className="relative z-10 p-8 md:p-12">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/30 px-3 py-1 text-sm font-medium text-white backdrop-blur-md shadow-sm">
              <Sparkles className="h-4 w-4" />
              New Season
            </div>
            <h3 className="mb-2 text-4xl font-extrabold text-white drop-shadow-md">
              🌸 Spring Collection
            </h3>
            <p className="mb-6 text-lg text-white/90">
              Fresh styles for the new season
            </p>
            <button className="rounded-lg bg-white px-6 py-3 text-base font-semibold text-blue-600 shadow-md transition-all hover:scale-105 hover:bg-white/90">
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default DealsBanner;
