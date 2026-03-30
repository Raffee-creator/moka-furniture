import React from 'react';
import { featuredProducts } from '@/lib/data';
import ProductCard from './ProductCard';

const FeaturedProducts = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-3xl font-bold tracking-tighter text-[#2D2424]">Featured Pieces</h2>
          <p className="text-[#2D2424]/60 mt-2">Selected essentials for a refined living space.</p>
        </div>
        <button className="text-xs uppercase tracking-widest font-bold border-b-2 border-[#B68D40] pb-1 hover:text-[#B68D40] transition-colors">
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuredProducts.map((product: typeof featuredProducts[number]) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;