import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Trash2 } from 'lucide-react';
import { formatCurrency } from '../../utils/formatCurrency';
import { useCart } from '../../hooks/useCart';
import { useToast } from '../../hooks/useToast';
import { Button } from '../common/Button';

export const CartSummary = () => {
  const { cartTotal, cartItems, clearCart, setIsCartOpen } = useCart();
  const { showToast } = useToast();
  const navigate = useNavigate();

  if (cartItems.length === 0) return null;

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate('/checkout');
  };

  const handleClear = () => {
    clearCart();
    showToast('Cart cleared', 'info');
  };

  return (
    <div className="border-t border-slate-800 p-4 sm:p-6 space-y-4 bg-slate-950/60 backdrop-blur-md">
      <div className="space-y-2">
        <div className="flex justify-between items-center text-xs text-slate-400">
          <span>Subtotal</span>
          <span className="font-mono text-slate-200">{formatCurrency(cartTotal)}</span>
        </div>
        <div className="flex justify-between items-center text-xs text-slate-400">
          <span>Shipping</span>
          <span className="text-lime-400 font-semibold uppercase text-[10px]">Free Demo</span>
        </div>
        <div className="flex justify-between items-center text-sm pt-2 border-t border-slate-800/80">
          <span className="font-bold text-white">Total</span>
          <span className="font-bold text-white font-mono text-lg">{formatCurrency(cartTotal)}</span>
        </div>
      </div>

      <div className="flex flex-col gap-2 pt-1">
        <Button
          variant="primary"
          className="w-full py-3 flex items-center justify-center gap-2 text-sm font-semibold shadow-lg shadow-lime-400/10"
          onClick={handleCheckout}
        >
          Proceed to Checkout <ArrowRight className="w-4 h-4" />
        </Button>
        <button
          type="button"
          onClick={handleClear}
          className="w-full text-center text-xs text-slate-400 hover:text-rose-400 py-1.5 transition-colors flex items-center justify-center gap-1"
        >
          <Trash2 className="w-3.5 h-3.5" /> Clear Cart
        </button>
      </div>
    </div>
  );
};
