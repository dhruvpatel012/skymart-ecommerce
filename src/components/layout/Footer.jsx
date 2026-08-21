import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Truck, Headphones } from 'lucide-react';
import { categories } from '../../data/categories';

export const Footer = () => {
  return (
    <footer className="bg-[#020617] border-t border-slate-800/80 text-slate-400 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 space-y-10">
        {/* Brand Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-6 border-b border-slate-800/60">
          <Link to="/" className="inline-flex items-center gap-2 font-display text-xl font-bold text-white group">
            <span className="bg-lime-400 text-slate-950 px-2 py-0.5 rounded text-sm font-extrabold shadow-sm shadow-lime-400/20 group-hover:bg-lime-300 transition-colors">
              SKY
            </span>
            <span className="group-hover:text-slate-200 transition-colors">MART</span>
          </Link>
          <p className="text-xs text-slate-400 max-w-md">
            Premium modern e-commerce destination for curated electronics, apparel, furniture, and active lifestyle gear.
          </p>
        </div>

        {/* 4-Section Grid: Exactly 2x2 on Mobile, 4 columns on Desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {/* Row 1, Col 1 on Mobile | Col 1 on Desktop: NAVIGATION */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-200">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="hover:text-lime-400 transition-colors block">
                  Home Page
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-lime-400 transition-colors block">
                  Shop All Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-lime-400 transition-colors block">
                  About SkyMart
                </Link>
              </li>
            </ul>
          </div>

          {/* Row 1, Col 2 on Mobile | Col 2 on Desktop: CATEGORIES */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-200">
              Categories
            </h4>
            <ul className="space-y-2 text-xs">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/shop?category=${cat.value}`}
                    className="hover:text-lime-400 transition-colors capitalize block"
                  >
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Row 2, Col 1 on Mobile | Col 3 on Desktop: WHY SKYMART? */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-200">
              Why SkyMart?
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-lime-400 shrink-0" />
                <span className="truncate">Express Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-lime-400 shrink-0" />
                <span className="truncate">30-Day Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Headphones className="w-4 h-4 text-lime-400 shrink-0" />
                <span className="truncate">24/7 Support Demo</span>
              </div>
            </div>
          </div>

          {/* Row 2, Col 2 on Mobile | Col 4 on Desktop: CUSTOMER CARE */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-200">
              Customer Care
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/about" className="hover:text-lime-400 transition-colors block">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-lime-400 transition-colors block">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-lime-400 transition-colors block">
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-lime-400 transition-colors block">
                  Returns & Refunds
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer Area */}
        <div className="pt-6 sm:pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <p>© {new Date().getFullYear()} SkyMart. Learning-focused e-commerce frontend.</p>
            <span className="hidden sm:inline text-slate-700">•</span>
            <p className="text-slate-400 font-medium">Made & Designed by Dhruv Patel</p>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/shop" className="hover:text-slate-300 transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/about" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
