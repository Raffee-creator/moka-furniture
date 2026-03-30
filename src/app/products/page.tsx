"use client";

import React, { useState } from 'react';
import { featuredProducts } from '@/lib/data';
import ProductCard from '@/components/ProductCard';
import { motion } from 'framer-motion';

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredProducts = activeCategory === 'All' 
    ? featuredProducts 
    : featuredProducts.filter(p => p.category === activeCategory);

  return (
    <div className="bg-[#F5EBE0] min-h-screen pt-32 pb-24">
      {/* Page Content for "The Collection" as seen in your shop screenshot */}
      <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold tracking-tighter text-[#2D2424] mb-12">The Collection</h1>
          <div className="flex gap-12">
              {/* Sidebar and Grid Logic here */}
              <main className="flex-grow">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                      {filteredProducts.map(product => (
                          <ProductCard key={product.id} product={product} />
                      ))}
                  </div>
              </main>
          </div>
      </div>
    </div>
  );
}