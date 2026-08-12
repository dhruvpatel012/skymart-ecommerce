import React from 'react';
import { Star } from 'lucide-react';

export const ProductRating = ({ rating = 0, reviews = 0, size = 'sm' }) => {
  const starSizes = {
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  return (
    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
      <div className="flex items-center text-amber-400">
        <Star className={`${starSizes[size] || starSizes.sm} fill-amber-400 text-amber-400`} />
      </div>
      <span className="font-semibold text-slate-200">{rating.toFixed(1)}</span>
      {reviews > 0 && (
        <span className="text-slate-500">({reviews})</span>
      )}
    </div>
  );
};
