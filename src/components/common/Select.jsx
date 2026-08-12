import React, { forwardRef } from 'react';

export const Select = forwardRef(({
  options = [],
  className = '',
  error = false,
  children,
  ...props
}, ref) => {
  return (
    <select
      ref={ref}
      className={`w-full bg-slate-950/80 border ${
        error ? 'border-rose-500 focus:border-rose-500 focus:ring-rose-500' : 'border-slate-800 focus:border-lime-400 focus:ring-lime-400'
      } text-slate-100 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-1 transition-all ${className}`}
      {...props}
    >
      {children || options.map((opt) => (
        <option key={opt.value} value={opt.value} className="bg-slate-900 text-slate-100">
          {opt.label}
        </option>
      ))}
    </select>
  );
});

Select.displayName = 'Select';
