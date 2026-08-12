import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ShoppingBag,
  Plus,
  Minus,
  AlertTriangle,
  CheckCircle2,
  ShieldCheck,
  Truck,
  RotateCcw,
  ChevronRight
} from 'lucide-react';
import { products } from '../data/products';
import { ProductRating } from '../components/product/ProductRating';
import { ProductGrid } from '../components/product/ProductGrid';
import { formatCurrency } from '../utils/formatCurrency';
import { useCart } from '../hooks/useCart';
import { useToast } from '../hooks/useToast';
import { EmptyState } from '../components/common/EmptyState';
import { Button } from '../components/common/Button';

export const ProductDetails = () => {
  const { productId } = useParams();
  const { addToCart } = useCart();
  const { showToast } = useToast();
  const [quantity, setQuantity] = useState(1);

  // Find product from static catalog by ID
  const product = products.find((p) => p.id === Number(productId));

  // Reset quantity to 1 whenever route productId changes
  useEffect(() => {
    setQuantity(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [productId]);

  // Invalid Product ID -> Not Found Fallback UI
  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <EmptyState
          icon={AlertTriangle}
          title="Product Not Found"
          description="The product you are looking for does not exist or may have been removed."
          actionButton={
            <Link to="/shop">
              <Button variant="primary">Back to Shop</Button>
            </Link>
          }
        />
      </div>
    );
  }

  // Related products from same category excluding current product
  const relatedProducts = products
    .filter(
      (p) =>
        p.category.toLowerCase() === product.category.toLowerCase() &&
        p.id !== product.id
    )
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product.id, quantity);
    const itemLabel = quantity > 1 ? `${quantity} x "${product.title}"` : `"${product.title}"`;
    showToast(`Added ${itemLabel} to cart`, 'success');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Breadcrumb Navigation Trail */}
      <nav className="flex items-center gap-2 text-xs text-slate-400" aria-label="Breadcrumb">
        <Link to="/" className="hover:text-white transition-colors">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
        <Link to="/shop" className="hover:text-white transition-colors">
          Shop
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
        <Link
          to={`/shop?category=${product.category}`}
          className="hover:text-white capitalize transition-colors"
        >
          {product.category}
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
        <span className="text-slate-200 font-semibold line-clamp-1">{product.title}</span>
      </nav>

      {/* Main Product Details Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 glass-panel p-6 sm:p-8 lg:p-10 rounded-2xl border border-slate-800">
        {/* Product Image Section */}
        <div className="lg:col-span-6 space-y-4">
          <div className="relative aspect-square bg-slate-950 rounded-xl overflow-hidden border border-slate-800 shadow-xl group">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {product.featured && (
              <span className="absolute top-3 left-3 bg-lime-400 text-slate-950 font-extrabold text-[11px] uppercase tracking-wider px-2.5 py-1 rounded shadow-md">
                Featured Item
              </span>
            )}
          </div>
        </div>

        {/* Product Info & Actions Section */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Link
                to={`/shop?category=${product.category}`}
                className="text-xs uppercase tracking-wider font-bold text-lime-400 bg-slate-800/80 hover:bg-slate-800 px-3 py-1 rounded-md transition-colors inline-block"
              >
                {product.category}
              </Link>
              <span className="text-xs font-medium text-emerald-400 flex items-center gap-1.5 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                <CheckCircle2 className="w-3.5 h-3.5" /> In Stock
              </span>
            </div>

            <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
              {product.title}
            </h1>

            <ProductRating rating={product.rating} reviews={product.reviews} size="md" />

            <div className="pt-2">
              <span className="text-3xl sm:text-4xl font-mono font-bold text-white">
                {formatCurrency(product.price)}
              </span>
            </div>

            <div className="border-t border-slate-800/80 pt-4">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Description
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Value Guarantees List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/80">
                <Truck className="w-4 h-4 text-lime-400 shrink-0" />
                <span>Fast Express Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/80">
                <ShieldCheck className="w-4 h-4 text-lime-400 shrink-0" />
                <span>100% Authentic Product</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/80">
                <RotateCcw className="w-4 h-4 text-lime-400 shrink-0" />
                <span>30-Day Easy Returns</span>
              </div>
            </div>
          </div>

          {/* Quantity Selector & Add to Cart Controls */}
          <div className="space-y-4 pt-6 border-t border-slate-800">
            <div className="flex items-center gap-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Quantity
              </span>
              <div className="flex items-center border border-slate-700 rounded-lg bg-slate-950">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  disabled={quantity <= 1}
                  className="p-2.5 text-slate-400 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-5 text-sm font-bold text-white font-mono">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-2.5 text-slate-400 hover:text-white transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <Button
              variant="primary"
              className="w-full py-3.5 text-base flex items-center justify-center gap-2 shadow-lg shadow-lime-400/10"
              onClick={handleAddToCart}
            >
              <ShoppingBag className="w-5 h-5" /> Add to Cart — {formatCurrency(product.price * quantity)}
            </Button>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section className="space-y-6 pt-6 border-t border-slate-800/80">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-lime-400">
                Similar Items
              </span>
              <h2 className="font-display text-2xl font-bold text-white mt-1">Related Products</h2>
            </div>
            <Link
              to={`/shop?category=${product.category}`}
              className="text-xs font-semibold text-lime-400 hover:underline"
            >
              More in {product.category} →
            </Link>
          </div>

          <ProductGrid products={relatedProducts} />
        </section>
      )}
    </div>
  );
};
