import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const Pagination = ({
  currentPage = 1,
  totalPages = 1,
  onPageChange,
  className = '',
}) => {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav
      aria-label="Product pagination"
      className={`flex items-center justify-center gap-2 pt-8 border-t border-slate-800 ${className}`}
    >
      {/* Previous Page Button */}
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        className="px-3 py-2 text-xs font-medium rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center gap-1 active:scale-95 disabled:active:scale-100"
        aria-label="Go to previous page"
      >
        <ChevronLeft className="w-4 h-4" />
        <span className="hidden sm:inline">Previous</span>
      </button>

      {/* Desktop Page Numbers */}
      <div className="hidden sm:flex items-center gap-1.5">
        {pages.map((p) => {
          const isCurrent = p === currentPage;
          return (
            <button
              key={p}
              type="button"
              onClick={() => onPageChange(p)}
              aria-current={isCurrent ? 'page' : undefined}
              aria-label={`Go to page ${p}`}
              className={`w-9 h-9 text-xs font-semibold rounded-lg transition-all flex items-center justify-center ${
                isCurrent
                  ? 'bg-lime-400 text-slate-950 font-bold shadow-md shadow-lime-400/20'
                  : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
              }`}
            >
              {p}
            </button>
          );
        })}
      </div>

      {/* Mobile Page Indicator */}
      <span className="sm:hidden text-xs font-medium font-mono text-slate-400 px-3">
        {currentPage} / {totalPages}
      </span>

      {/* Next Page Button */}
      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        className="px-3 py-2 text-xs font-medium rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center gap-1 active:scale-95 disabled:active:scale-100"
        aria-label="Go to next page"
      >
        <span className="hidden sm:inline">Next</span>
        <ChevronRight className="w-4 h-4" />
      </button>
    </nav>
  );
};
