import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus, Trash2 } from 'lucide-react';
import { products } from '../../data/products';
import { formatCurrency } from '../../utils/formatCurrency';
import { useCart } from '../../hooks/useCart';
import { useToast } from '../../hooks/useToast';

export const CartItem = ({ item }) => {
  const { increaseQuantity, decreaseQuantity, removeFromCart, setIsCartOpen } = useCart();
  const { showToast } = useToast();

  const product = products.find((p) => p.id === item.productId);

  if (!product) return null;

  const handleRemove = () => {
    removeFromCart(product.id);
    showToast(`Removed "${product.title}" from cart`, 'info');
  };

  const handleDecrease = () => {
    if (item.quantity === 1) {
      showToast(`Removed "${product.title}" from cart`, 'info');
    }
    decreaseQuantity(product.id);
  };

  const handleIncrease = () => {
    increaseQuantity(product.id);
  };

  const itemSubtotal = (product.price || 0) * (item.quantity || 1);

  return (
    <div className="flex items-center gap-3 p-3 bg-slate-900/80 border border-slate-800 rounded-xl hover:border-slate-700 transition-colors">
      {/* Thumbnail */}
      <Link
        to={`/products/${product.id}`}
        onClick={() => setIsCartOpen(false)}
        className="block w-16 h-16 rounded-lg bg-slate-950 overflow-hidden shrink-0 border border-slate-800"
      >
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover"
        />
      </Link>

      {/* Product Details & Quantity Controls */}
      <div className="flex-1 min-w-0 space-y-1">
        <Link
          to={`/products/${product.id}`}
          onClick={() => setIsCartOpen(false)}
          className="font-semibold text-xs text-slate-100 hover:text-lime-400 transition-colors line-clamp-1 block"
        >
          {product.title}
        </Link>

        <div className="flex items-center justify-between text-xs text-slate-400">
          <span className="font-mono">{formatCurrency(product.price)} each</span>
          <span className="font-mono font-bold text-white">{formatCurrency(itemSubtotal)}</span>
        </div>

        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center border border-slate-700/80 rounded-lg bg-slate-950">
            <button
              type="button"
              onClick={handleDecrease}
              className="p-1 text-slate-400 hover:text-white transition-colors"
              aria-label={`Decrease quantity of ${product.title}`}
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className="px-2 text-xs font-bold text-slate-100 font-mono">{item.quantity}</span>
            <button
              type="button"
              onClick={handleIncrease}
              className="p-1 text-slate-400 hover:text-white transition-colors"
              aria-label={`Increase quantity of ${product.title}`}
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>

          <button
            type="button"
            onClick={handleRemove}
            className="text-slate-500 hover:text-rose-400 p-1 transition-colors rounded"
            aria-label={`Remove ${product.title} from cart`}
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
