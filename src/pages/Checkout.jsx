import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {
  ShoppingBag,
  Lock,
  CreditCard,
  Truck,
  ChevronRight,
  ArrowLeft,
  Loader2,
} from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { useCart } from '../hooks/useCart';
import { useToast } from '../hooks/useToast';
import { products } from '../data/products';
import { storage } from '../utils/storage';
import { formatCurrency } from '../utils/formatCurrency';
import { Input } from '../components/common/Input';
import { Select } from '../components/common/Select';
import { FormField } from '../components/common/FormField';
import { Button } from '../components/common/Button';
import { EmptyState } from '../components/common/EmptyState';
import { noLeadingWhitespace, emailNoWhitespace } from '../utils/validators';

export const Checkout = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const { cartItems, cartTotal, clearCart } = useCart();
  const { showToast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      fullName: currentUser?.name || '',
      email: currentUser?.email || '',
      phone: '',
      address: '',
      city: '',
      state: '',
      postalCode: '',
      country: 'US',
      cardName: '',
      cardNumber: '',
      expiry: '',
      cvv: '',
    },
  });

  // Resolve full product data for each cart item
  const cartProducts = cartItems.map((item) => {
    const product = products.find((p) => p.id === item.productId);
    return { ...item, product };
  }).filter((item) => item.product); // skip orphaned items

  // Empty cart guard
  if (cartItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <EmptyState
          icon={ShoppingBag}
          title="Your cart is empty"
          description="Add some products to your cart before checking out."
          actionButton={
            <Link to="/shop">
              <Button variant="primary" className="px-6 py-2.5">
                Browse Products
              </Button>
            </Link>
          }
        />
      </div>
    );
  }

  const onSubmit = async (data) => {
    // Small artificial delay to show isSubmitting state for polish
    await new Promise((r) => setTimeout(r, 600));

    // Build the order object matching the PRD schema
    const order = {
      id: `order_${Date.now()}`,
      userId: currentUser.id,
      items: cartItems.map((item) => {
        const product = products.find((p) => p.id === item.productId);
        return {
          productId: item.productId,
          quantity: item.quantity,
          priceAtPurchase: product?.price || 0,
        };
      }),
      customer: {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
      },
      shipping: {
        address: data.address,
        city: data.city,
        state: data.state,
        postalCode: data.postalCode,
        country: data.country,
      },
      total: cartTotal,
      status: 'placed',
      createdAt: new Date().toISOString(),
    };

    // Persist: append to existing orders array
    const existingOrders = storage.get('skymart_orders', []) || [];
    storage.set('skymart_orders', [...existingOrders, order]);

    // Clear cart only AFTER order is persisted
    clearCart();

    showToast('Order placed! 🎉', 'success');
    navigate(`/order-success/${order.id}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-slate-400" aria-label="Breadcrumb">
        <Link to="/" className="hover:text-white transition-colors">Home</Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
        <Link to="/shop" className="hover:text-white transition-colors">Shop</Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
        <span className="text-slate-200 font-semibold">Checkout</span>
      </nav>

      {/* Page Header */}
      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-lime-400">Secure Checkout</span>
        <h1 className="font-display text-2xl sm:text-3xl font-bold text-white mt-1">Complete Your Order</h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT: Checkout Form */}
          <div className="lg:col-span-7 space-y-6">
            {/* Customer Information Section */}
            <section className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-5">
              <div className="flex items-center gap-2.5">
                <Truck className="w-5 h-5 text-lime-400" />
                <h2 className="font-display text-lg font-bold text-white">Shipping Information</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField label="Full Name" htmlFor="fullName" error={errors.fullName?.message}>
                  <Input
                    id="fullName"
                    placeholder="John Doe"
                    error={!!errors.fullName}
                    {...register('fullName', {
                      required: 'Full name is required',
                      validate: {
                        noLeading: noLeadingWhitespace,
                        noBlank: (val) => val.trim() !== '' || 'Full name cannot be blank spaces',
                      },
                    })}
                  />
                </FormField>

                <FormField label="Email" htmlFor="email" error={errors.email?.message}>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    error={!!errors.email}
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Enter a valid email address',
                      },
                      validate: {
                        noWhitespace: emailNoWhitespace,
                      },
                    })}
                  />
                </FormField>

                <FormField label="Phone" htmlFor="phone" error={errors.phone?.message} className="sm:col-span-2">
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    error={!!errors.phone}
                    {...register('phone', {
                      required: 'Phone number is required',
                      validate: {
                        noLeading: noLeadingWhitespace,
                        noBlank: (val) => val.trim() !== '' || 'Phone number cannot be blank spaces',
                      },
                    })}
                  />
                </FormField>

                <FormField label="Street Address" htmlFor="address" error={errors.address?.message} className="sm:col-span-2">
                  <Input
                    id="address"
                    placeholder="123 Main Street, Apt 4B"
                    error={!!errors.address}
                    {...register('address', {
                      required: 'Address is required',
                      validate: {
                        noLeading: noLeadingWhitespace,
                        noBlank: (val) => val.trim() !== '' || 'Address cannot be blank spaces',
                      },
                    })}
                  />
                </FormField>

                <FormField label="City" htmlFor="city" error={errors.city?.message}>
                  <Input
                    id="city"
                    placeholder="New York"
                    error={!!errors.city}
                    {...register('city', {
                      required: 'City is required',
                      validate: {
                        noLeading: noLeadingWhitespace,
                        noBlank: (val) => val.trim() !== '' || 'City cannot be blank spaces',
                      },
                    })}
                  />
                </FormField>

                <FormField label="State / Province" htmlFor="state" error={errors.state?.message}>
                  <Input
                    id="state"
                    placeholder="NY"
                    error={!!errors.state}
                    {...register('state', {
                      required: 'State is required',
                      validate: {
                        noLeading: noLeadingWhitespace,
                        noBlank: (val) => val.trim() !== '' || 'State cannot be blank spaces',
                      },
                    })}
                  />
                </FormField>

                <FormField label="Postal Code" htmlFor="postalCode" error={errors.postalCode?.message}>
                  <Input
                    id="postalCode"
                    placeholder="10001"
                    error={!!errors.postalCode}
                    {...register('postalCode', {
                      required: 'Postal code is required',
                      validate: {
                        noLeading: noLeadingWhitespace,
                        noBlank: (val) => val.trim() !== '' || 'Postal code cannot be blank spaces',
                      },
                    })}
                  />
                </FormField>

                <FormField label="Country" htmlFor="country" error={errors.country?.message}>
                  <Select
                    id="country"
                    error={!!errors.country}
                    {...register('country', { required: 'Country is required' })}
                  >
                    <option value="US" className="bg-slate-900">United States</option>
                    <option value="CA" className="bg-slate-900">Canada</option>
                    <option value="GB" className="bg-slate-900">United Kingdom</option>
                    <option value="AU" className="bg-slate-900">Australia</option>
                    <option value="DE" className="bg-slate-900">Germany</option>
                    <option value="FR" className="bg-slate-900">France</option>
                    <option value="IN" className="bg-slate-900">India</option>
                  </Select>
                </FormField>
              </div>
            </section>

            {/* Demo Payment Section */}
            <section className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-5">
              <div className="flex items-center gap-2.5">
                <CreditCard className="w-5 h-5 text-lime-400" />
                <h2 className="font-display text-lg font-bold text-white">Payment Details</h2>
                <span className="ml-auto text-[10px] font-semibold uppercase tracking-wider text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2.5 py-0.5 rounded-full">
                  Demo Only
                </span>
              </div>

              <div className="bg-amber-500/5 border border-amber-500/20 rounded-lg p-3 text-xs text-amber-300/80">
                <Lock className="w-3.5 h-3.5 inline-block mr-1.5 -mt-0.5" />
                This is a frontend demo. No real payment will be processed. Card details are not stored or transmitted.
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField label="Name on Card" htmlFor="cardName" error={errors.cardName?.message} className="sm:col-span-2">
                  <Input
                    id="cardName"
                    placeholder="John Doe"
                    error={!!errors.cardName}
                    {...register('cardName', {
                      required: 'Cardholder name is required',
                      validate: {
                        noLeading: noLeadingWhitespace,
                        noBlank: (val) => val.trim() !== '' || 'Cardholder name cannot be blank spaces',
                      },
                    })}
                  />
                </FormField>

                <FormField label="Card Number" htmlFor="cardNumber" error={errors.cardNumber?.message} className="sm:col-span-2">
                  <Input
                    id="cardNumber"
                    placeholder="4242 4242 4242 4242"
                    error={!!errors.cardNumber}
                    {...register('cardNumber', {
                      required: 'Card number is required',
                      minLength: { value: 13, message: 'Enter a valid card number' },
                      validate: {
                        noLeading: noLeadingWhitespace,
                        noBlank: (val) => val.trim() !== '' || 'Card number cannot be blank spaces',
                      },
                    })}
                  />
                </FormField>

                <FormField label="Expiry Date" htmlFor="expiry" error={errors.expiry?.message}>
                  <Input
                    id="expiry"
                    placeholder="MM/YY"
                    error={!!errors.expiry}
                    {...register('expiry', {
                      required: 'Expiry date is required',
                      validate: {
                        noLeading: noLeadingWhitespace,
                        noBlank: (val) => val.trim() !== '' || 'Expiry date cannot be blank spaces',
                      },
                    })}
                  />
                </FormField>

                <FormField label="CVV" htmlFor="cvv" error={errors.cvv?.message}>
                  <Input
                    id="cvv"
                    placeholder="123"
                    error={!!errors.cvv}
                    {...register('cvv', {
                      required: 'CVV is required',
                      minLength: { value: 3, message: 'Enter a valid CVV' },
                      validate: {
                        noLeading: noLeadingWhitespace,
                        noBlank: (val) => val.trim() !== '' || 'CVV cannot be blank spaces',
                      },
                    })}
                  />
                </FormField>
              </div>
            </section>

            {/* Submit Button (Mobile: visible below form) */}
            <div className="lg:hidden">
              <Button
                type="submit"
                variant="primary"
                disabled={isSubmitting}
                className="w-full py-3.5 text-base font-semibold flex items-center justify-center gap-2 shadow-lg shadow-lime-400/10"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" /> Processing…
                  </>
                ) : (
                  <>
                    <Lock className="w-4 h-4" /> Place Order — {formatCurrency(cartTotal)}
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* RIGHT: Order Summary Sidebar */}
          <aside className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6 lg:sticky lg:top-24">
              <h2 className="font-display text-lg font-bold text-white flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-lime-400" />
                Order Summary
                <span className="ml-auto text-xs font-mono text-slate-400">
                  {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
                </span>
              </h2>

              {/* Item list */}
              <div className="space-y-3 max-h-[360px] overflow-y-auto pr-1">
                {cartProducts.map(({ productId, quantity, product }) => (
                  <div key={productId} className="flex gap-3 p-3 bg-slate-900/60 border border-slate-800/80 rounded-xl">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-14 h-14 rounded-lg object-cover bg-slate-950 shrink-0 border border-slate-800"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-slate-100 line-clamp-1">{product.title}</p>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        Qty: {quantity} × {formatCurrency(product.price)}
                      </p>
                    </div>
                    <span className="text-xs font-mono font-bold text-white shrink-0 self-center">
                      {formatCurrency(product.price * quantity)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="border-t border-slate-800 pt-4 space-y-2">
                <div className="flex justify-between text-xs text-slate-400">
                  <span>Subtotal</span>
                  <span className="font-mono text-slate-200">{formatCurrency(cartTotal)}</span>
                </div>
                <div className="flex justify-between text-xs text-slate-400">
                  <span>Shipping</span>
                  <span className="text-lime-400 font-semibold uppercase text-[10px]">Free Demo</span>
                </div>
                <div className="flex justify-between text-sm pt-2 border-t border-slate-800/80">
                  <span className="font-bold text-white">Total</span>
                  <span className="font-bold text-white font-mono text-lg">{formatCurrency(cartTotal)}</span>
                </div>
              </div>

              {/* Submit Button (Desktop) */}
              <div className="hidden lg:block">
                <Button
                  type="submit"
                  variant="primary"
                  disabled={isSubmitting}
                  className="w-full py-3.5 text-base font-semibold flex items-center justify-center gap-2 shadow-lg shadow-lime-400/10"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" /> Processing…
                    </>
                  ) : (
                    <>
                      <Lock className="w-4 h-4" /> Place Order — {formatCurrency(cartTotal)}
                    </>
                  )}
                </Button>
              </div>

              <Link
                to="/shop"
                className="flex items-center justify-center gap-1.5 text-xs text-slate-400 hover:text-lime-400 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Continue Shopping
              </Link>
            </div>
          </aside>
        </div>
      </form>
    </div>
  );
};
