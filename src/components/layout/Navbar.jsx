import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, User, Menu, X, ChevronRight } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { useCart } from '../../hooks/useCart';

export const Navbar = () => {
  const { currentUser, isAuthenticated } = useAuth();
  const { cartCount, setIsCartOpen } = useCart();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 font-display text-xl font-bold text-white tracking-tight group"
        >
          <span className="bg-lime-400 text-slate-950 px-2 py-0.5 rounded text-sm font-extrabold shadow-sm shadow-lime-400/20 group-hover:bg-lime-300 transition-colors">
            SKY
          </span>
          <span className="group-hover:text-slate-200 transition-colors">MART</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link
            to="/"
            className={`transition-colors py-1 ${
              isActive('/')
                ? 'text-lime-400 font-semibold border-b-2 border-lime-400'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            Home
          </Link>
          <Link
            to="/shop"
            className={`transition-colors py-1 ${
              isActive('/shop')
                ? 'text-lime-400 font-semibold border-b-2 border-lime-400'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            Shop
          </Link>
          <Link
            to="/about"
            className={`transition-colors py-1 ${
              isActive('/about')
                ? 'text-lime-400 font-semibold border-b-2 border-lime-400'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            About
          </Link>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Cart Icon Button */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg transition-colors"
            aria-label="View Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-lime-400 text-slate-950 font-bold text-[11px] rounded-full h-5 w-5 flex items-center justify-center animate-in zoom-in-50 duration-150 shadow-sm shadow-lime-400/30">
                {cartCount}
              </span>
            )}
          </button>

          {/* User Profile / Sign In (Desktop & Mobile) */}
          {isAuthenticated ? (
            <Link
              to="/profile"
              className={`flex items-center gap-2 text-sm font-medium p-1.5 rounded-lg border transition-all ${
                isActive('/profile')
                  ? 'bg-slate-800 border-slate-700 text-lime-400'
                  : 'text-slate-300 hover:text-white border-transparent hover:bg-slate-800/60'
              }`}
            >
              <div className="w-7 h-7 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-bold text-lime-400 shrink-0">
                {currentUser?.name?.[0]?.toUpperCase() || <User className="w-4 h-4" />}
              </div>
              <span className="hidden sm:inline font-semibold line-clamp-1 max-w-[120px]">
                {currentUser?.name}
              </span>
            </Link>
          ) : (
            <Link
              to="/login"
              className="text-sm font-medium bg-slate-800/60 border border-slate-700 text-slate-200 hover:bg-slate-800 hover:border-slate-600 px-4 py-2 rounded-lg transition-all"
            >
              Sign In
            </Link>
          )}

          {/* Mobile Hamburger Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden p-2 text-slate-400 hover:text-white hover:bg-slate-800/60 rounded-lg transition-colors"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-[#0b1326]/95 backdrop-blur-md px-4 py-4 space-y-2 animate-in slide-in-from-top-2 duration-150">
          <Link
            to="/"
            className={`flex items-center justify-between p-3 rounded-lg text-sm font-medium transition-colors ${
              isActive('/') ? 'bg-slate-800/80 text-lime-400 font-semibold' : 'text-slate-300 hover:bg-slate-800/40'
            }`}
          >
            <span>Home</span>
            <ChevronRight className="w-4 h-4 text-slate-500" />
          </Link>
          <Link
            to="/shop"
            className={`flex items-center justify-between p-3 rounded-lg text-sm font-medium transition-colors ${
              isActive('/shop') ? 'bg-slate-800/80 text-lime-400 font-semibold' : 'text-slate-300 hover:bg-slate-800/40'
            }`}
          >
            <span>Shop Catalog</span>
            <ChevronRight className="w-4 h-4 text-slate-500" />
          </Link>
          <Link
            to="/about"
            className={`flex items-center justify-between p-3 rounded-lg text-sm font-medium transition-colors ${
              isActive('/about') ? 'bg-slate-800/80 text-lime-400 font-semibold' : 'text-slate-300 hover:bg-slate-800/40'
            }`}
          >
            <span>About SkyMart</span>
            <ChevronRight className="w-4 h-4 text-slate-500" />
          </Link>

          {!isAuthenticated && (
            <div className="pt-2 flex flex-col gap-2">
              <Link
                to="/login"
                className="w-full text-center py-2.5 text-sm font-semibold bg-lime-400 text-slate-950 rounded-lg"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="w-full text-center py-2.5 text-sm font-medium bg-slate-800 border border-slate-700 text-slate-200 rounded-lg"
              >
                Create Account
              </Link>
            </div>
          )}
        </div>
      )}
    </header>
  );
};
