import React from 'react';

export const EmptyState = ({
  icon: Icon,
  title,
  description,
  actionButton,
  className = '',
}) => {
  return (
    <div className={`flex flex-col items-center justify-center text-center p-8 glass-panel rounded-2xl ${className}`}>
      {Icon && (
        <div className="w-16 h-16 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-400 mb-4">
          <Icon className="w-8 h-8 text-lime-400" />
        </div>
      )}
      <h3 className="text-xl font-bold font-display text-white mb-2">{title}</h3>
      {description && (
        <p className="text-sm text-slate-400 max-w-md mb-6 leading-relaxed">
          {description}
        </p>
      )}
      {actionButton}
    </div>
  );
};
