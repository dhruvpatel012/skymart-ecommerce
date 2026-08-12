import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, X } from 'lucide-react';
import { useCart } from '../../hooks/useCart';
import { CartItem } from './CartItem';
import { CartSummary } from './CartSummary';
import { EmptyState } from '../common/EmptyState';
import { Button } from '../common/Button';

export const CartDrawer = () => {
  const { isCartOpen, setIsCartOpen, cartItems, cartCount } = useCart();

  // Close drawer on Escape key press for accessibility
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isCartOpen) {
        setIsCartOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCartOpen, setIsCartOpen]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true" aria-label="Shopping Cart">
      {/* Backdrop Overlay */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
      />

      {/* Drawer Panel */}
      <aside className="fixed inset-y-0 right-0 max-w-full flex">
        <div className="w-screen sm:w-[420px] bg-[#0b1326] border-l border-slate-800 shadow-2xl flex flex-col animate-in slide-in-from-right duration-200">
          {/* Drawer Header */}
          <div className="p-4 sm:p-6 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-lime-400" />
              <h2 className="font-display text-lg font-bold text-white">Your Cart</h2>
              {cartCount > 0 && (
                <span className="bg-slate-800 border border-slate-700 text-lime-400 text-xs font-semibold px-2.5 py-0.5 rounded-full font-mono">
                  {cartCount} {cartCount === 1 ? 'item' : 'items'}
                </span>
              )}
            </div>
            <button
              type="button"
              onClick={() => setIsCartOpen(false)}
              className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition-colors"
              aria-label="Close shopping cart drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Body */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3">
            {cartItems.length === 0 ? (
              <EmptyState
                icon={ShoppingBag}
                title="Cart is empty"
                description="Go shop something cool! Add items to your cart to get started."
                actionButton={
                  <Link to="/shop" onClick={() => setIsCartOpen(false)}>
                    <Button variant="primary" className="px-6 py-2.5">
                      Browse Products
                    </Button>
                  </Link>
                }
              />
            ) : (
              cartItems.map((item) => (
                <CartItem key={item.productId} item={item} />
              ))
            )}
          </div>

          {/* Drawer Footer Summary */}
          {cartItems.length > 0 && <CartSummary />}
        </div>
      </aside>
    </div>
  );
};
