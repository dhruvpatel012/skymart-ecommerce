import React from 'react';

export const FormField = ({ label, htmlFor, error, children, className = '' }) => {
  return (
    <div className={`space-y-1.5 ${className}`}>
      {label && (
        <label htmlFor={htmlFor} className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
          {label}
        </label>
      )}
      {children}
      {error && (
        <p className="text-xs text-rose-400 font-medium flex items-center gap-1">
          {error}
        </p>
      )}
    </div>
  );
};
