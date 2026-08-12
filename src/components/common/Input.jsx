import React, { forwardRef } from 'react';

export const Input = forwardRef(({
  type = 'text',
  className = '',
  error = false,
  ...props
}, ref) => {
  return (
    <input
      ref={ref}
      type={type}
      className={`w-full bg-slate-950/80 border ${
        error ? 'border-rose-500 focus:border-rose-500 focus:ring-rose-500' : 'border-slate-800 focus:border-lime-400 focus:ring-lime-400'
      } text-slate-100 placeholder-slate-500 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-1 transition-all ${className}`}
      {...props}
    />
  );
});

Input.displayName = 'Input';
