import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShoppingBag,
  Sparkles,
  ShieldCheck,
  Truck,
  Headphones,
  ArrowRight,
  Star,
  Cpu,
  Shirt,
  Armchair,
  Home as HomeIcon,
  Activity,
  Watch,
  Award
} from 'lucide-react';
import { categories } from '../data/categories';
import { products } from '../data/products';
import { ProductGrid } from '../components/product/ProductGrid';

export const Home = () => {
  // Filter top rated products (rating >= 4.8)
  const topRatedProducts = products.filter((p) => p.rating >= 4.8).slice(0, 4);

  // Filter newest arrivals sorted by createdAt
  const newArrivals = [...products]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 4);

  // Featured hero product spotlight
  const heroProduct = products.find((p) => p.id === 1) || products[0];

  // Category Icon Map
  const getCategoryIcon = (value) => {
    switch (value) {
      case 'electronics': return <Cpu className="w-6 h-6 text-lime-400" />;
      case 'clothing': return <Shirt className="w-6 h-6 text-lime-400" />;
      case 'furniture': return <Armchair className="w-6 h-6 text-lime-400" />;
      case 'home': return <HomeIcon className="w-6 h-6 text-lime-400" />;
      case 'sports': return <Activity className="w-6 h-6 text-lime-400" />;
      case 'accessories': return <Watch className="w-6 h-6 text-lime-400" />;
      default: return <Sparkles className="w-6 h-6 text-lime-400" />;
    }
  };

  return (
    <div className="space-y-16 lg:space-y-24 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-16 md:pb-20 bg-gradient-to-b from-slate-900/90 via-[#0b1326] to-[#0b1326]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg bg-slate-900/90 border border-lime-400/30 text-lime-400 text-xs font-bold uppercase tracking-widest backdrop-blur-md shadow-[0_0_15px_rgba(163,230,53,0.12)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-400"></span>
              </span>
              <span className="text-slate-600 font-normal">|</span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-lime-400 shrink-0" />
                Next-Gen E-Commerce Experience
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Discover Premium Gear for{' '}
              <span className="whitespace-nowrap relative inline-block text-lime-400 pb-1">
                Modern Living
                <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-lime-400 via-lime-300 to-lime-500/40 rounded-full shadow-[0_0_10px_rgba(163,230,53,0.5)]"></span>
              </span>.
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Curated high-performance electronics, urban apparel, ergonomic furniture, and active lifestyle essentials designed with high-contrast precision.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                to="/shop"
                className="bg-lime-400 text-slate-950 hover:bg-lime-300 font-semibold px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-lime-400/10 flex items-center gap-2 text-sm active:scale-95"
              >
                <ShoppingBag className="w-5 h-5" /> Explore Shop <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
              <Link
                to="/about"
                className="bg-slate-800/80 border border-slate-700 text-slate-200 hover:bg-slate-800 hover:border-slate-600 px-6 py-3.5 rounded-xl text-sm font-medium transition-all"
              >
                About SkyMart
              </Link>
            </div>
          </div>

          {/* Right Hero Visual Spotlight */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-lime-400/20 to-cyan-500/20 rounded-2xl blur-xl opacity-70" />
            <div className="relative glass-panel p-5 rounded-2xl space-y-4 border border-slate-800">
              <div className="relative aspect-4/3 rounded-xl overflow-hidden bg-slate-950">
                <img
                  src={heroProduct.image}
                  alt={heroProduct.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 left-3 bg-lime-400 text-slate-950 font-extrabold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded shadow">
                  Spotlight
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                    {heroProduct.category}
                  </span>
                  <h3 className="font-semibold text-white text-base line-clamp-1">{heroProduct.title}</h3>
                </div>
                <Link
                  to={`/products/${heroProduct.id}`}
                  className="text-xs font-semibold text-lime-400 hover:underline shrink-0"
                >
                  View Item →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS OVERVIEW SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 glass-panel rounded-2xl">
          <div className="text-center p-3 border-r border-slate-800/80 last:border-r-0">
            <span className="font-display text-2xl sm:text-3xl font-extrabold text-lime-400 font-mono">10K+</span>
            <p className="text-xs text-slate-400 mt-1">Happy Customers</p>
          </div>
          <div className="text-center p-3 border-r border-slate-800/80 last:border-r-0">
            <span className="font-display text-2xl sm:text-3xl font-extrabold text-white font-mono">24/7</span>
            <p className="text-xs text-slate-400 mt-1">Fast Support</p>
          </div>
          <div className="text-center p-3 border-r border-slate-800/80 last:border-r-0">
            <span className="font-display text-2xl sm:text-3xl font-extrabold text-lime-400 font-mono">100%</span>
            <p className="text-xs text-slate-400 mt-1">Authentic Quality</p>
          </div>
          <div className="text-center p-3">
            <span className="font-display text-2xl sm:text-3xl font-extrabold text-white font-mono flex items-center justify-center gap-1">
              4.9 <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
            </span>
            <p className="text-xs text-slate-400 mt-1">Average Rating</p>
          </div>
        </div>
      </section>

      {/* 3. CATEGORY SHORTCUTS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-lime-400">Explore Collection</span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mt-1">Browse Categories</h2>
          </div>
          <p className="text-xs text-slate-400">Click any category to filter the shop catalog automatically.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.value}`}
              className="p-5 glass-panel rounded-xl hover:border-lime-400/50 hover:bg-slate-900/90 transition-all duration-200 flex flex-col items-center text-center gap-3 group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center group-hover:scale-110 group-hover:bg-slate-800 transition-transform">
                {getCategoryIcon(cat.value)}
              </div>
              <div>
                <h3 className="font-semibold text-sm text-slate-200 group-hover:text-lime-400 transition-colors">
                  {cat.label}
                </h3>
                <p className="text-[10px] text-slate-500 line-clamp-1 mt-0.5">{cat.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. TOP RATED PRODUCTS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-lime-400">Hand-Picked Ratings</span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mt-1">Top Rated Gear</h2>
          </div>
          <Link
            to="/shop"
            className="text-xs font-semibold text-lime-400 hover:text-lime-300 flex items-center gap-1"
          >
            View All Shop <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <ProductGrid products={topRatedProducts} />
      </section>

      {/* 5. NEW ARRIVALS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">Fresh Releases</span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mt-1">New Arrivals</h2>
          </div>
          <Link
            to="/shop"
            className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
          >
            Browse All <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <ProductGrid products={newArrivals} />
      </section>

      {/* 6. SERVICE VALUE CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="glass-panel p-6 rounded-xl flex items-start gap-4">
            <Truck className="w-7 h-7 text-lime-400 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-white text-sm">Express Shipping</h3>
              <p className="text-xs text-slate-400 mt-1">Fast, reliable dispatch on all demo orders.</p>
            </div>
          </div>

          <div className="glass-panel p-6 rounded-xl flex items-start gap-4">
            <ShieldCheck className="w-7 h-7 text-lime-400 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-white text-sm">Buyer Guarantee</h3>
              <p className="text-xs text-slate-400 mt-1">30-day hassle-free returns & replacement policy.</p>
            </div>
          </div>

          <div className="glass-panel p-6 rounded-xl flex items-start gap-4">
            <Headphones className="w-7 h-7 text-lime-400 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-white text-sm">24/7 Dedicated Support</h3>
              <p className="text-xs text-slate-400 mt-1">Instant assistance for all customer inquiries.</p>
            </div>
          </div>

          <div className="glass-panel p-6 rounded-xl flex items-start gap-4">
            <Award className="w-7 h-7 text-lime-400 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-white text-sm">Curated Selection</h3>
              <p className="text-xs text-slate-400 mt-1">Hand-selected items for optimal design & utility.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
