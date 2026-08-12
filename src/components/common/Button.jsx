import React from 'react';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  type = 'button',
  onClick,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-150 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100';

  const variants = {
    primary: 'bg-lime-400 text-slate-950 hover:bg-lime-300 font-semibold shadow-md shadow-lime-400/10',
    secondary: 'bg-slate-800/60 border border-slate-700 text-slate-200 hover:bg-slate-800 hover:border-slate-600',
    ghost: 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60',
    danger: 'bg-rose-500 text-white hover:bg-rose-600 font-semibold',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base font-semibold',
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
