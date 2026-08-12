import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { ProductRating } from './ProductRating';
import { formatCurrency } from '../../utils/formatCurrency';
import { useCart } from '../../hooks/useCart';
import { useToast } from '../../hooks/useToast';

export const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { showToast } = useToast();

  if (!product) return null;

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product.id, 1);
    showToast(`Added "${product.title}" to cart`, 'success');
  };

  return (
    <div className="group relative bg-slate-900/70 border border-slate-800 rounded-xl overflow-hidden shadow-lg backdrop-blur-sm hover:border-slate-700 hover:bg-slate-900/90 transition-all duration-200 flex flex-col h-full">
      {/* Product Image Link */}
      <Link to={`/products/${product.id}`} className="block relative aspect-square overflow-hidden bg-slate-950/60 shrink-0">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        {product.featured && (
          <span className="absolute top-2 left-2 sm:top-2.5 sm:left-2.5 bg-lime-400 text-slate-950 font-extrabold text-[9px] sm:text-[10px] uppercase tracking-wider px-1.5 py-0.5 sm:px-2 rounded shadow-sm">
            Featured
          </span>
        )}
      </Link>

      {/* Product Details */}
      <div className="p-2.5 sm:p-4 flex flex-col flex-grow justify-between gap-1.5 sm:gap-3">
        <div className="space-y-0.5 sm:space-y-1">
          <span className="text-[9px] sm:text-[11px] font-semibold uppercase tracking-wider text-slate-400 block">
            {product.category}
          </span>
          <Link to={`/products/${product.id}`}>
            <h3 className="font-semibold text-slate-100 text-xs sm:text-sm hover:text-lime-400 transition-colors line-clamp-1 leading-snug">
              {product.title}
            </h3>
          </Link>
        </div>

        <ProductRating rating={product.rating} reviews={product.reviews} />

        {/* Price & Add to Cart Action */}
        <div className="flex items-center justify-between pt-1.5 sm:pt-2 border-t border-slate-800/80 mt-auto">
          <span className="text-xs sm:text-base font-bold text-white font-mono">
            {formatCurrency(product.price)}
          </span>
          <button
            onClick={handleAddToCart}
            className="bg-slate-800 hover:bg-lime-400 hover:text-slate-950 text-slate-200 p-1.5 sm:p-2 rounded-md sm:rounded-lg transition-all duration-150 active:scale-95 flex items-center gap-1 text-xs font-semibold shrink-0"
            aria-label={`Add ${product.title} to cart`}
          >
            <ShoppingCart className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
