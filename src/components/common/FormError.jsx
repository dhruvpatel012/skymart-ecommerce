import React from 'react';

export const FormError = ({ message }) => {
  if (!message) return null;
  return (
    <p className="text-xs text-rose-400 font-medium">
      {message}
    </p>
  );
};
