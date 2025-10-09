import React, { useState } from "react";

type FiltersState = {
  categories: Record<string, boolean>;
  sizes: Record<string, boolean>;
};

const CATEGORIES = ["T-Shirts", "Hoodies", "Jeans", "Jackets"];
const SIZES = ["XS", "S", "M", "L", "XL"];

const SidebarFilters: React.FC<{ onReset?: () => void }> = ({ onReset }) => {
  const [filters, setFilters] = useState<FiltersState>({
    categories: Object.fromEntries(CATEGORIES.map((c) => [c, false])),
    sizes: Object.fromEntries(SIZES.map((s) => [s, false])),
  });

  const toggle = (group: "categories" | "sizes", key: string) => {
    setFilters((f) => ({
      ...f,
      [group]: { ...f[group], [key]: !f[group][key] },
    }));
  };

  const reset = () => {
    setFilters({
      categories: Object.fromEntries(CATEGORIES.map((c) => [c, false])),
      sizes: Object.fromEntries(SIZES.map((s) => [s, false])),
    });
    if (onReset) onReset();
  };

  return (
    <aside className="w-full md:w-70 shrink-0 rounded-md border bg-white p-4 shadow-sm">
      <div className="mb-2">
        <h2 className="text-sm font-semibold text-gray-900">Filters</h2>
        <p className="text-xs text-gray-500">Refine your results</p>
      </div>
      <hr className="my-3 border-gray-300" />
      
      <section aria-labelledby="filter-categories">
        <h3 id="filter-categories" className="text-xs font-medium mb-2 text-gray-800">
          Categories
        </h3>
        <div className="grid gap-2">
          {CATEGORIES.map((c) => (
            <label key={c} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.categories[c]}
                onChange={() => toggle("categories", c)}
                className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
              />
              <span className="text-sm text-gray-700">{c}</span>
            </label>
          ))}
        </div>
      </section>

      <hr className="my-3 border-gray-300" />

      <section aria-labelledby="filter-sizes">
        <h3 id="filter-sizes" className="text-xs font-medium mb-2 text-gray-800">
          Sizes
        </h3>
        <div className="flex flex-wrap gap-2">
          {SIZES.map((s) => (
            <button
              key={s}
              type="button"
              className={`rounded-md border px-3 py-1 text-xs font-medium transition ${
                filters.sizes[s]
                  ? "bg-teal-600 text-white border-teal-600"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
              onClick={() => toggle("sizes", s)}
              aria-pressed={filters.sizes[s]}
            >
              {s}
            </button>
          ))}
        </div>
      </section>

      <hr className="my-3 border-gray-300" />

      <div className="flex items-center gap-2">
        <button
          onClick={reset}
          className="w-full border border-gray-300 rounded-md py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
        >
          Reset
        </button>
        <button
          type="button"
          className="w-full bg-teal-600 text-white rounded-md py-2 text-sm font-semibold hover:bg-teal-700 transition"
        >
          Apply
        </button>
      </div>
    </aside>
  );
};

export default SidebarFilters;
