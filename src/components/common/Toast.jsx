import React from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export const Toast = ({ message, type = 'success', onClose }) => {
  if (!message) return null;

  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />,
    error: <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />,
    info: <Info className="w-5 h-5 text-cyan-400 shrink-0" />,
  };

  const borderAccents = {
    success: 'border-l-emerald-500',
    error: 'border-l-rose-500',
    info: 'border-l-cyan-500',
  };

  return (
    <div
      role="status"
      aria-live="polite"
      className={`glass-panel border-l-4 ${borderAccents[type]} px-4 py-3 rounded-lg shadow-xl flex items-center justify-between gap-3 text-sm text-slate-100 max-w-sm w-full animate-in fade-in slide-in-from-top-2 duration-200`}
    >
      <div className="flex items-center gap-2.5">
        {icons[type]}
        <span>{message}</span>
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="text-slate-400 hover:text-white p-1 rounded transition-colors"
          aria-label="Close notification"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};
