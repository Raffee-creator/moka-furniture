"use client"; // Needs to be a client component to use the store hook

import React from 'react';
import Link from 'next/link';
import { useCart } from '@/lib/store'; // 1. Import your store hook

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    category: string;
    price: number;
    image: string;
    isNew?: boolean;
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  // 2. Extract the addItem function
  const addItem = useCart((state) => state.addItem);

  return (
    <div className="group">
      <Link href={`/products/${product.id}`} className="cursor-pointer">
        <div className="relative aspect-[4/5] overflow-hidden bg-[#EAE2D6]">
          {product.isNew && (
            <span className="absolute top-4 left-4 z-10 bg-[#B68D40] text-white text-[10px] uppercase tracking-widest px-2 py-1">
              New
            </span>
          )}
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white/10 backdrop-blur-sm z-20">
            <button 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                // 3. Fire the store action!
                addItem(product);
              }}
              className="w-full py-2 bg-[#2D2424] text-white text-xs uppercase tracking-widest hover:bg-[#B68D40] transition-colors active:scale-95 duration-100"
            >
              Quick Add
            </button>
          </div>
        </div>
        
        <div className="mt-4 flex justify-between items-start">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-[#B68D40] mb-1">{product.category}</p>
            <h3 className="text-sm font-medium text-[#2D2424]">{product.name}</h3>
          </div>
          <p className="text-sm font-semibold text-[#2D2424]">${product.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;