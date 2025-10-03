import { Menu, Search, User, Heart, ShoppingCart } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur">
      {/* Top Banner */}
      <div className="bg-blue-600 text-white">
        <div className="mx-auto max-w-7xl px-4 py-2 text-center text-sm font-medium">
          Spring Sale: Up to 50% off on selected items! Free shipping on orders over $50
        </div>
      </div>

      {/* Main Header */}
      <div className="mx-auto max-w-7xl px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <button className="md:hidden p-2 hover:bg-gray-100 rounded-md">
              <Menu className="h-5 w-5" />
            </button>
            <a href="/" className="text-2xl font-bold tracking-tight">
              PochiRoot
            </a>
          </div>

          {/* Search Bar */}
          <div className="hidden flex-1 max-w-2xl md:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="search"
                placeholder="Search for products, brands and more..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button className="hidden md:inline-flex p-2 hover:bg-gray-100 rounded-md">
              <User className="h-5 w-5" />
            </button>
            <button className="hidden md:inline-flex p-2 hover:bg-gray-100 rounded-md">
              <Heart className="h-5 w-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-md relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                3
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="mt-3 md:hidden">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input 
              type="search" 
              placeholder="Search products..." 
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4">
          <ul className="flex items-center gap-6 overflow-x-auto py-3 text-sm font-medium">
            <li>
              <a href="#" className="whitespace-nowrap hover:text-blue-600 transition-colors">
                New Arrivals
              </a>
            </li>
            <li>
              <a href="#" className="whitespace-nowrap hover:text-blue-600 transition-colors">
                Men
              </a>
            </li>
            <li>
              <a href="#" className="whitespace-nowrap hover:text-blue-600 transition-colors">
                Women
              </a>
            </li>
            <li>
              <a href="#" className="whitespace-nowrap hover:text-blue-600 transition-colors">
                Kids
              </a>
            </li>
            <li>
              <a href="#" className="whitespace-nowrap hover:text-blue-600 transition-colors">
                Electronics
              </a>
            </li>
            <li>
              <a href="#" className="whitespace-nowrap hover:text-blue-600 transition-colors">
                Home & Living
              </a>
            </li>
            <li>
              <a href="#" className="whitespace-nowrap hover:text-blue-600 transition-colors">
                Beauty
              </a>
            </li>
            <li>
              <a href="#" className="whitespace-nowrap text-blue-600 font-semibold">
                Sale
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;