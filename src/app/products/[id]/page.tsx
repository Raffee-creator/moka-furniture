"use client";

import React, { use } from 'react'; // Import 'use' from React
import { featuredProducts } from '@/lib/data';
import { useCart } from '@/lib/store';
import toast from 'react-hot-toast';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronLeft, ShoppingBag, Truck, ShieldCheck } from 'lucide-react';

// 1. Update the Props type to reflect that params is a Promise
interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ProductDetailPage({ params }: PageProps) {
  const addItem = useCart((state) => state.addItem);

  // 2. Unwrap the params Promise using React.use()
  const resolvedParams = use(params);
  const productId = resolvedParams.id;

  // 3. Find the product using the unwrapped ID
  const product = featuredProducts.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#F5EBE0]">
        <h2 className="text-2xl font-bold text-[#2D2424] mb-4 tracking-tighter">Piece not found</h2>
        <Link href="/products" className="text-xs font-bold uppercase tracking-widest border-b border-[#2D2424]">
          Return to Collection
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#F5EBE0] min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        <Link href="/products" className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#2D2424]/40 hover:text-[#2D2424] mb-12 transition-colors group">
          <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> 
          Back to Collection
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="aspect-[4/5] overflow-hidden bg-[#EAE2D6] shadow-2xl"
          >
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col"
          >
            <p className="text-[#B68D40] text-xs uppercase tracking-[0.4em] font-bold mb-4">
              {product.category}
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-[#2D2424] mb-6 tracking-tighter leading-tight">
              {product.name}
            </h1>
            <p className="text-3xl font-light text-[#2D2424] mb-10">${product.price.toLocaleString()}</p>
            
            <div className="space-y-6 text-[#2D2424]/70 leading-relaxed mb-12 max-w-md italic font-light text-lg">
              <p>
                A masterclass in modern comfort. This piece combines structural integrity with soft, artisanal finishes to create a focal point for any room.
              </p>
            </div>

            <button 
              onClick={() => {
                addItem(product);
                toast.success(`${product.name} added to your space`, {
                    style: { background: '#2D2424', color: '#F5EBE0', borderRadius: '0px' }
                });
              }}
              className="w-full py-5 bg-[#2D2424] text-white text-xs uppercase tracking-[0.3em] font-bold hover:bg-[#B68D40] transition-all flex items-center justify-center gap-4 shadow-xl active:scale-95"
            >
              <ShoppingBag size={20} />
              Add to Bag
            </button>

            <div className="mt-16 grid grid-cols-2 gap-8 pt-8 border-t border-[#2D2424]/10">
              <div className="flex items-start gap-3">
                <Truck size={20} className="text-[#B68D40]" strokeWidth={1.5} />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest">White Glove Delivery</p>
                  <p className="text-[10px] text-[#2D2424]/40">Complimentary on all furniture</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck size={20} className="text-[#B68D40]" strokeWidth={1.5} />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest">Lifetime Warranty</p>
                  <p className="text-[10px] text-[#2D2424]/40">Sustainable solid wood frame</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}