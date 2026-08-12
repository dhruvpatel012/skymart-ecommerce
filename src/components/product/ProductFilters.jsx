import React from 'react';
import { Search, X, Tag } from 'lucide-react';
import { categories } from '../../data/categories';
import { Select } from '../common/Select';

export const ProductFilters = ({
  search = '',
  onSearchChange,
  category = 'all',
  onCategoryChange,
  sort = 'featured',
  onSortChange,
  onClearFilters,
  resultCount = 0,
}) => {
  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-asc', label: 'Price: Low to High' },
    { value: 'price-desc', label: 'Price: High to Low' },
    { value: 'rating', label: 'Top Rated' },
    { value: 'newest', label: 'Newest Arrivals' },
  ];

  const hasActiveFilters = search.trim() !== '' || category !== 'all' || sort !== 'featured';

  const activeCategoryLabel = categories.find((c) => c.value === category)?.label;

  return (
    <div className="space-y-4 mb-6">
      {/* Top Filter Bar */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between glass-panel p-4 rounded-xl">
        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search name, description, category..."
            className="w-full bg-slate-950/80 border border-slate-800 focus:border-lime-400 focus:ring-1 focus:ring-lime-400 text-slate-100 placeholder-slate-500 rounded-lg pl-9 pr-8 py-2 text-sm outline-none transition-all"
          />
          {search && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white p-1"
              aria-label="Clear search"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Filter & Sort Controls */}
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 w-full md:w-auto">
          {/* Category Dropdown */}
          <div className="w-full sm:w-48">
            <Select
              value={category}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="w-full text-xs font-medium"
            >
              <option value="all">All Categories</option>
              {categories.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </Select>
          </div>

          {/* Sort Dropdown */}
          <div className="w-full sm:w-48">
            <Select
              value={sort}
              onChange={(e) => onSortChange(e.target.value)}
              options={sortOptions}
              className="w-full text-xs font-medium"
            />
          </div>

          {/* Clear Filters Button */}
          {hasActiveFilters && (
            <button
              onClick={onClearFilters}
              className="text-xs font-semibold text-rose-400 hover:text-rose-300 px-3 py-2 rounded-lg border border-rose-500/20 hover:bg-rose-500/10 transition-colors whitespace-nowrap"
            >
              Reset Filters
            </button>
          )}
        </div>
      </div>

      {/* Category Quick Filter Chips */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        <button
          onClick={() => onCategoryChange('all')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
            category === 'all'
              ? 'bg-lime-400 text-slate-950 shadow-sm shadow-lime-400/20'
              : 'bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => onCategoryChange(cat.value)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
              category === cat.value
                ? 'bg-lime-400 text-slate-950 shadow-sm shadow-lime-400/20'
                : 'bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Active Filter Badges Indicator */}
      {hasActiveFilters && (
        <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
          <span className="text-slate-400 font-medium">Active filters:</span>
          {category !== 'all' && (
            <span className="inline-flex items-center gap-1.5 bg-slate-800 border border-slate-700 text-lime-400 px-2.5 py-1 rounded-md">
              <Tag className="w-3 h-3" />
              Category: {activeCategoryLabel || category}
              <button
                onClick={() => onCategoryChange('all')}
                className="hover:text-white"
                aria-label="Remove category filter"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}
          {search.trim() !== '' && (
            <span className="inline-flex items-center gap-1.5 bg-slate-800 border border-slate-700 text-slate-200 px-2.5 py-1 rounded-md">
              Search: "{search}"
              <button
                onClick={() => onSearchChange('')}
                className="hover:text-white"
                aria-label="Remove search filter"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}
          {sort !== 'featured' && (
            <span className="inline-flex items-center gap-1.5 bg-slate-800 border border-slate-700 text-cyan-400 px-2.5 py-1 rounded-md">
              Sort: {sortOptions.find((s) => s.value === sort)?.label}
              <button
                onClick={() => onSortChange('featured')}
                className="hover:text-white"
                aria-label="Reset sort"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}
        </div>
      )}
    </div>
  );
};
