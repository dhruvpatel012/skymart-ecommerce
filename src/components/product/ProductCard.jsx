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
      <Link to={`/products/${product.id}`} className="block relative aspect-square overflow-hidden bg-slate-950/60">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        {product.featured && (
          <span className="absolute top-2.5 left-2.5 bg-lime-400 text-slate-950 font-extrabold text-[10px] uppercase tracking-wider px-2 py-0.5 rounded shadow-sm">
            Featured
          </span>
        )}
      </Link>

      {/* Product Details */}
      <div className="p-4 flex flex-col flex-grow justify-between gap-3">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-1">
            {product.category}
          </span>
          <Link to={`/products/${product.id}`}>
            <h3 className="font-semibold text-slate-100 text-sm hover:text-lime-400 transition-colors line-clamp-1">
              {product.title}
            </h3>
          </Link>
        </div>

        <ProductRating rating={product.rating} reviews={product.reviews} />

        {/* Price & Add to Cart Action */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-800/80">
          <span className="text-base font-bold text-white font-mono">
            {formatCurrency(product.price)}
          </span>
          <button
            onClick={handleAddToCart}
            className="bg-slate-800 hover:bg-lime-400 hover:text-slate-950 text-slate-200 p-2 rounded-lg transition-all duration-150 active:scale-95 flex items-center gap-1 text-xs font-semibold"
            aria-label={`Add ${product.title} to cart`}
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
