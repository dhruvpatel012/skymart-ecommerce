import React from 'react';
import { ProductCard } from './ProductCard';

export const ProductGrid = ({ products = [], className = '' }) => {
  if (products.length === 0) return null;

  return (
    <div className={`grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-3 sm:gap-6 ${className}`}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
