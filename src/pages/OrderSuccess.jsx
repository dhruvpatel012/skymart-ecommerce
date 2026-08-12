import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  CheckCircle2,
  ShoppingBag,
  Home,
  Package,
  Calendar,
  Hash,
  AlertTriangle,
} from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { storage } from '../utils/storage';
import { products } from '../data/products';
import { formatCurrency } from '../utils/formatCurrency';
import { Button } from '../components/common/Button';
import { EmptyState } from '../components/common/EmptyState';

export const OrderSuccess = () => {
  const { orderId } = useParams();
  const { currentUser } = useAuth();

  // Look up the order from persisted storage
  const orders = storage.get('skymart_orders', []) || [];
  const order = orders.find(
    (o) => o.id === orderId && o.userId === currentUser?.id
  );

  // Fallback: no matching order found
  if (!order) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <EmptyState
          icon={AlertTriangle}
          title="No Order Found"
          description="We couldn't find a recent order for your account. It may have been completed in another session."
          actionButton={
            <div className="flex gap-3">
              <Link to="/shop">
                <Button variant="primary">Browse Products</Button>
              </Link>
              <Link to="/">
                <Button variant="secondary">Back to Home</Button>
              </Link>
            </div>
          }
        />
      </div>
    );
  }

  // Resolve product details for display
  const orderItems = order.items.map((item) => {
    const product = products.find((p) => p.id === item.productId);
    return { ...item, product };
  }).filter((item) => item.product);

  const orderDate = new Date(order.createdAt);
  const formattedDate = orderDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const formattedTime = orderDate.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      {/* Success Header */}
      <div className="text-center space-y-4">
        <div className="w-20 h-20 rounded-full bg-emerald-500/10 border-2 border-emerald-500/30 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10 text-emerald-400" />
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-white">
          Order Confirmed! 🎉
        </h1>
        <p className="text-sm text-slate-400 max-w-md mx-auto">
          Thank you for your purchase, <span className="text-white font-semibold">{order.customer.fullName}</span>.
          Your demo order has been placed successfully.
        </p>
      </div>

      {/* Order Details Card */}
      <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6">
        {/* Order Metadata */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex items-start gap-3 p-3 bg-slate-900/60 rounded-xl border border-slate-800/80">
            <Hash className="w-4 h-4 text-lime-400 mt-0.5 shrink-0" />
            <div>
              <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Order ID</p>
              <p className="text-xs font-mono font-bold text-white mt-0.5 break-all">{order.id}</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-slate-900/60 rounded-xl border border-slate-800/80">
            <Calendar className="w-4 h-4 text-lime-400 mt-0.5 shrink-0" />
            <div>
              <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Date</p>
              <p className="text-xs font-semibold text-white mt-0.5">{formattedDate}</p>
              <p className="text-[11px] text-slate-400">{formattedTime}</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-slate-900/60 rounded-xl border border-slate-800/80">
            <Package className="w-4 h-4 text-lime-400 mt-0.5 shrink-0" />
            <div>
              <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Status</p>
              <span className="inline-block mt-0.5 text-[11px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                {order.status}
              </span>
            </div>
          </div>
        </div>

        {/* Purchased Items */}
        <div className="space-y-3">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Items Purchased</h3>
          <div className="space-y-2">
            {orderItems.map(({ productId, quantity, priceAtPurchase, product }) => (
              <div key={productId} className="flex items-center gap-3 p-3 bg-slate-900/60 border border-slate-800/80 rounded-xl">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-12 h-12 rounded-lg object-cover bg-slate-950 shrink-0 border border-slate-800"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-slate-100 line-clamp-1">{product.title}</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Qty: {quantity} × {formatCurrency(priceAtPurchase)}
                  </p>
                </div>
                <span className="text-xs font-mono font-bold text-white shrink-0">
                  {formatCurrency(priceAtPurchase * quantity)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Shipping Summary */}
        <div className="space-y-2">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Shipping To</h3>
          <div className="p-3 bg-slate-900/60 border border-slate-800/80 rounded-xl text-xs text-slate-300 space-y-0.5">
            <p className="font-semibold text-white">{order.customer.fullName}</p>
            <p>{order.shipping.address}</p>
            <p>{order.shipping.city}, {order.shipping.state} {order.shipping.postalCode}</p>
            <p className="text-slate-400">{order.customer.email} · {order.customer.phone}</p>
          </div>
        </div>

        {/* Order Total */}
        <div className="flex justify-between items-center pt-4 border-t border-slate-800">
          <span className="text-sm font-bold text-white">Order Total</span>
          <span className="text-xl font-bold text-white font-mono">{formatCurrency(order.total)}</span>
        </div>
      </div>

      {/* Navigation CTAs */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <Link to="/shop">
          <Button variant="primary" className="px-6 py-2.5 flex items-center gap-2">
            <ShoppingBag className="w-4 h-4" /> Continue Shopping
          </Button>
        </Link>
        <Link to="/">
          <Button variant="secondary" className="px-6 py-2.5 flex items-center gap-2">
            <Home className="w-4 h-4" /> Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};
