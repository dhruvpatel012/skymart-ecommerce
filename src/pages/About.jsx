import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
  Truck,
  Headphones,
  Award,
  Sparkles,
  CheckCircle2,
  Star,
  Globe
} from 'lucide-react';
import { Button } from '../components/common/Button';

export const About = () => {
  return (
    <div className="space-y-16 lg:space-y-20 py-8 lg:py-12">
      {/* 1. HERO / INTRODUCTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-slate-700 text-lime-400 text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" /> About SkyMart
        </div>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-tight">
          Elevating Modern E-Commerce with <span className="text-lime-400 underline decoration-lime-400/30">Precision & Quality</span>.
        </h1>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          SkyMart is a modern e-commerce platform designed with high-contrast dark aesthetics, curated product collections, and an unwavering commitment to fast, intuitive customer experiences.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link to="/shop">
            <Button variant="primary" size="lg" className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5" /> Explore Products <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
          <Link to="/">
            <Button variant="secondary" size="lg">
              Back to Home
            </Button>
          </Link>
        </div>
      </section>

      {/* 2. MISSION & VALUE PROPOSITION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 sm:p-12 rounded-2xl border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-lime-400">Our Mission</span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white leading-snug">
              Curated Excellence for Every Lifestyle
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              At SkyMart, we believe shopping should be seamless, transparent, and visually extraordinary. We hand-select products across electronics, apparel, home essentials, and sports gear to ensure every item meets high standards of performance and craftsmanship.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-slate-200 text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0" /> Verified Quality Assurance
              </div>
              <div className="flex items-center gap-2 text-slate-200 text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0" /> Transparent Pricing
              </div>
              <div className="flex items-center gap-2 text-slate-200 text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0" /> Customer-Centric Support
              </div>
              <div className="flex items-center gap-2 text-slate-200 text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0" /> Hassle-Free Returns
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-950/80 p-6 sm:p-8 rounded-xl border border-slate-800 space-y-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-lime-400/10 border border-lime-400/20 flex items-center justify-center text-lime-400">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-white">Global Standards, Local Touch</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Every customer order is handled with maximum care. From lightning-fast interface response times to instant order feedback, SkyMart is engineered for satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* 3. WHY SKYMART — FEATURE VALUE CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-lime-400">Why Choose Us</span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">Built Around Customer Trust</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass-panel p-6 rounded-xl border border-slate-800 space-y-3 hover:border-slate-700 transition-colors">
            <Award className="w-8 h-8 text-lime-400" />
            <h3 className="font-display text-base font-semibold text-white">Curated Selection</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Only products that pass our strict quality and design benchmarks make it into the SkyMart catalog.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-xl border border-slate-800 space-y-3 hover:border-slate-700 transition-colors">
            <ShieldCheck className="w-8 h-8 text-lime-400" />
            <h3 className="font-display text-base font-semibold text-white">100% Authentic Quality</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              We guarantee genuine materials and reliable durability across all catalog categories.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-xl border border-slate-800 space-y-3 hover:border-slate-700 transition-colors">
            <Truck className="w-8 h-8 text-lime-400" />
            <h3 className="font-display text-base font-semibold text-white">Express Shipping</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Fast, dependable dispatch and order fulfillment designed to minimize waiting times.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-xl border border-slate-800 space-y-3 hover:border-slate-700 transition-colors">
            <Headphones className="w-8 h-8 text-lime-400" />
            <h3 className="font-display text-base font-semibold text-white">24/7 Customer Service</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Our responsive support team is always available to help answer questions and resolve inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* 4. TRUST & STATS OVERVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 glass-panel rounded-2xl border border-slate-800">
          <div className="text-center p-3 border-r border-slate-800/80 last:border-r-0">
            <span className="font-display text-2xl sm:text-3xl font-extrabold text-lime-400 font-mono">10K+</span>
            <p className="text-xs text-slate-400 mt-1">Satisfied Customers</p>
          </div>
          <div className="text-center p-3 border-r border-slate-800/80 last:border-r-0">
            <span className="font-display text-2xl sm:text-3xl font-extrabold text-white font-mono">24/7</span>
            <p className="text-xs text-slate-400 mt-1">Dedicated Support</p>
          </div>
          <div className="text-center p-3 border-r border-slate-800/80 last:border-r-0">
            <span className="font-display text-2xl sm:text-3xl font-extrabold text-lime-400 font-mono">100%</span>
            <p className="text-xs text-slate-400 mt-1">Quality Guaranteed</p>
          </div>
          <div className="text-center p-3">
            <span className="font-display text-2xl sm:text-3xl font-extrabold text-white font-mono flex items-center justify-center gap-1">
              4.9 <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
            </span>
            <p className="text-xs text-slate-400 mt-1">Average Store Rating</p>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION SECTION */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <div className="glass-panel p-8 sm:p-12 rounded-2xl border border-slate-800 space-y-6">
          <h2 className="font-display text-3xl font-bold text-white">Ready to Experience SkyMart?</h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Explore our curated catalog of high-grade electronics, apparel, home goods, and more.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/shop">
              <Button variant="primary" className="flex items-center gap-2">
                <ShoppingBag className="w-4 h-4" /> Explore Shop Catalog <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

