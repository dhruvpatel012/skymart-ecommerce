import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search } from 'lucide-react';
import { products as initialProducts } from '../data/products';
import { ProductGrid } from '../components/product/ProductGrid';
import { ProductFilters } from '../components/product/ProductFilters';
import { EmptyState } from '../components/common/EmptyState';
import { Button } from '../components/common/Button';
import { Pagination } from '../components/common/Pagination';

const PRODUCTS_PER_PAGE = 8;

export const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlCategory = searchParams.get('category') || 'all';

  const [search, setSearch] = useState('');
  const [category, setCategory] = useState(urlCategory);
  const [sort, setSort] = useState('featured');

  // Keep category state in sync with URL search parameter
  useEffect(() => {
    const currentUrlCategory = searchParams.get('category') || 'all';
    if (currentUrlCategory !== category) {
      setCategory(currentUrlCategory);
    }
  }, [searchParams]);

  // Handle Search Input Change & Page Reset
  const handleSearchChange = (newSearch) => {
    setSearch(newSearch);
    if (searchParams.has('page')) {
      const updatedParams = new URLSearchParams(searchParams);
      updatedParams.delete('page');
      setSearchParams(updatedParams);
    }
  };

  // Handle Category Filter Change & URL Synchronization (Resets page to 1)
  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    const updatedParams = new URLSearchParams(searchParams);
    if (newCategory === 'all') {
      updatedParams.delete('category');
    } else {
      updatedParams.set('category', newCategory);
    }
    updatedParams.delete('page'); // Reset to page 1
    setSearchParams(updatedParams);
  };

  // Handle Sort Change & Page Reset
  const handleSortChange = (newSort) => {
    setSort(newSort);
    if (searchParams.has('page')) {
      const updatedParams = new URLSearchParams(searchParams);
      updatedParams.delete('page');
      setSearchParams(updatedParams);
    }
  };

  // Handle Clear / Reset All Filters
  const handleClearFilters = () => {
    setSearch('');
    setCategory('all');
    setSort('featured');
    setSearchParams({});
  };

  // Combined Filtering & Sorting without mutating source product array
  let filtered = [...initialProducts];

  // 1. Filter by category
  if (category !== 'all') {
    filtered = filtered.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase()
    );
  }

  // 2. Filter by search query (matches title, category, description)
  if (search.trim()) {
    const query = search.toLowerCase().trim();
    filtered = filtered.filter(
      (p) =>
        p.title.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
    );
  }

  // 3. Apply sorting
  switch (sort) {
    case 'price-asc':
      filtered.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      filtered.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      filtered.sort((a, b) => b.rating - a.rating);
      break;
    case 'newest':
      filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      break;
    default:
      // 'featured': preserve original product catalog order or featured priority
      break;
  }

  // 4. Pagination Calculations & URL Synchronization
  const totalPages = Math.ceil(filtered.length / PRODUCTS_PER_PAGE);
  const rawPage = parseInt(searchParams.get('page') || '1', 10);

  // Clamp invalid/out-of-range page numbers
  let currentPage = isNaN(rawPage) || rawPage < 1 ? 1 : rawPage;
  if (totalPages > 0 && currentPage > totalPages) {
    currentPage = totalPages;
  }

  // Slice products for the active page
  const currentPageProducts = filtered.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  // Handle Page Change Click
  const handlePageChange = (newPage) => {
    const updatedParams = new URLSearchParams(searchParams);
    if (newPage <= 1) {
      updatedParams.delete('page');
    } else {
      updatedParams.set('page', newPage.toString());
    }
    setSearchParams(updatedParams);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Catalog Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-lime-400">
            Catalog & Discovery
          </span>
          <h1 className="font-display text-3xl font-bold text-white mt-1">Shop Products</h1>
          <p className="text-xs text-slate-400 mt-1">
            Browse high-contrast gear, electronics, apparel, and activewear.
          </p>
        </div>
        <div className="text-xs font-semibold text-slate-400 font-mono bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 self-start md:self-auto">
          Showing {filtered.length} {filtered.length === 1 ? 'item' : 'items'}
        </div>
      </div>

      {/* Product Filters Bar */}
      <ProductFilters
        search={search}
        onSearchChange={handleSearchChange}
        category={category}
        onCategoryChange={handleCategoryChange}
        sort={sort}
        onSortChange={handleSortChange}
        onClearFilters={handleClearFilters}
        resultCount={filtered.length}
      />

      {/* Product Grid or Empty State */}
      {filtered.length === 0 ? (
        <EmptyState
          icon={Search}
          title="No products match your criteria"
          description="Try modifying your search keywords or resetting your category/sort filters."
          actionButton={
            <Button variant="primary" onClick={handleClearFilters}>
              Reset All Filters
            </Button>
          }
        />
      ) : (
        <div className="space-y-8">
          <ProductGrid products={currentPageProducts} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
};

