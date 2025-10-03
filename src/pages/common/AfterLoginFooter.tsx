import { Link } from "react-router-dom";
import { Facebook, Twitter, Youtube, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-6 gap-8">
        {/* About */}
        <div className="space-y-2">
          <h3 className="font-semibold text-white">ABOUT</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
            </li>
            <li>
              <Link to="/careers" className="hover:text-white transition-colors">Careers</Link>
            </li>
            <li>
              <Link to="/stories" className="hover:text-white transition-colors">Stories</Link>
            </li>
            <li>
              <Link to="/press" className="hover:text-white transition-colors">Press</Link>
            </li>
            <li>
              <Link to="/corporate" className="hover:text-white transition-colors">Corporate Information</Link>
            </li>
          </ul>
        </div>

        {/* Group Companies */}
        <div className="space-y-2">
          <h3 className="font-semibold text-white">GROUP COMPANIES</h3>
          <ul className="space-y-1 text-sm">
            <li><Link to="#" className="hover:text-white transition-colors">Myntra</Link></li>
            <li><Link to="#" className="hover:text-white transition-colors">Cleartrip</Link></li>
            <li><Link to="#" className="hover:text-white transition-colors">Shopsy</Link></li>
          </ul>
        </div>

        {/* Help */}
        <div className="space-y-2">
          <h3 className="font-semibold text-white">HELP</h3>
          <ul className="space-y-1 text-sm">
            <li><Link to="#" className="hover:text-white transition-colors">Payments</Link></li>
            <li><Link to="#" className="hover:text-white transition-colors">Shipping</Link></li>
            <li><Link to="#" className="hover:text-white transition-colors">Cancellation & Returns</Link></li>
            <li><Link to="#" className="hover:text-white transition-colors">FAQ</Link></li>
          </ul>
        </div>

        {/* Consumer Policy */}
        <div className="space-y-2">
          <h3 className="font-semibold text-white">CONSUMER POLICY</h3>
          <ul className="space-y-1 text-sm">
            <li><Link to="#" className="hover:text-white transition-colors">Cancellation & Returns</Link></li>
            <li><Link to="#" className="hover:text-white transition-colors">Terms Of Use</Link></li>
            <li><Link to="#" className="hover:text-white transition-colors">Security</Link></li>
            <li><Link to="#" className="hover:text-white transition-colors">Privacy</Link></li>
            <li><Link to="#" className="hover:text-white transition-colors">Sitemap</Link></li>
            <li><Link to="#" className="hover:text-white transition-colors">Grievance Redressal</Link></li>
            <li><Link to="#" className="hover:text-white transition-colors">EPR Compliance</Link></li>
          </ul>
        </div>

        {/* Mail & Social */}
        <div className="space-y-2">
          <h3 className="font-semibold text-white">Mail Us:</h3>
          <p className="text-sm text-gray-400">
            Your Company Name, <br />
            Building Name, Street Name, <br />
            City, State, PIN Code, <br />
            Country
          </p>
          <div className="flex items-center gap-3 mt-2">
            <Facebook className="w-5 h-5 hover:text-white cursor-pointer" />
            <Twitter className="w-5 h-5 hover:text-white cursor-pointer" />
            <Youtube className="w-5 h-5 hover:text-white cursor-pointer" />
            <Instagram className="w-5 h-5 hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Registered Office */}
        <div className="space-y-2">
          <h3 className="font-semibold text-white">Registered Office Address:</h3>
          <p className="text-sm text-gray-400">
            Your Company Name, <br />
            Building Name, Street Name, <br />
            City, State, PIN Code, <br />
            CIN: XXXXX <br />
            Telephone: 1234567890 / 0987654321
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-6 py-4 flex flex-col md:flex-row items-center justify-between px-6 text-gray-400 text-sm gap-2 md:gap-0">
        <div className="flex flex-wrap gap-4">
          <Link to="#" className="hover:text-white flex items-center gap-1"><span>💼</span> Become a Seller</Link>
          <Link to="#" className="hover:text-white flex items-center gap-1"><span>📢</span> Advertise</Link>
          <Link to="#" className="hover:text-white flex items-center gap-1"><span>🎁</span> Gift Cards</Link>
          <Link to="#" className="hover:text-white flex items-center gap-1"><span>❓</span> Help Center</Link>
        </div>

        <div className="flex items-center gap-2">
          <span>© 2007-2025 YourCompany.com</span>
          {/* Payment Icons */}
          <div className="flex items-center gap-1 ml-4">
            <img src="/visa.png" alt="Visa" className="h-5" />
            <img src="/mastercard.png" alt="Mastercard" className="h-5" />
            <img src="/rupay.png" alt="RuPay" className="h-5" />
            <img src="/netbanking.png" alt="NetBanking" className="h-5" />
            <img src="/cod.png" alt="Cash on Delivery" className="h-5" />
          </div>
        </div>
      </div>
    </footer>
  );
}
