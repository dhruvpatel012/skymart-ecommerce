import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Truck, Headphones } from 'lucide-react';
import { categories } from '../../data/categories';

export const Footer = () => {
  return (
    <footer className="bg-[#020617] border-t border-slate-800/80 text-slate-400 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4 md:col-span-1">
            <Link to="/" className="inline-flex items-center gap-2 font-display text-xl font-bold text-white">
              <span className="bg-lime-400 text-slate-950 px-2 py-0.5 rounded text-sm font-extrabold">SKY</span>
              <span>MART</span>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed">
              Premium modern e-commerce destination for curated electronics, apparel, furniture, and active lifestyle gear.
            </p>
          </div>

          {/* Navigation & Categories (2-column grid on mobile, 2 cols on md) */}
          <div className="grid grid-cols-2 gap-6 md:col-span-2">
            {/* Navigation Column */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-200">Navigation</h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link to="/" className="hover:text-lime-400 transition-colors">
                    Home Page
                  </Link>
                </li>
                <li>
                  <Link to="/shop" className="hover:text-lime-400 transition-colors">
                    Shop All Products
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-lime-400 transition-colors">
                    About SkyMart
                  </Link>
                </li>
              </ul>
            </div>

            {/* Categories Column */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-200">Categories</h4>
              <ul className="space-y-2 text-xs">
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <Link
                      to={`/shop?category=${cat.value}`}
                      className="hover:text-lime-400 transition-colors capitalize"
                    >
                      {cat.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Guarantee / Features Column ("Why SkyMart?") */}
          <div className="space-y-3 md:col-span-1">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-200">Why SkyMart?</h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-lime-400 shrink-0" />
                <span>Express Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-lime-400 shrink-0" />
                <span>30-Day Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Headphones className="w-4 h-4 text-lime-400 shrink-0" />
                <span>24/7 Support Demo</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
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
