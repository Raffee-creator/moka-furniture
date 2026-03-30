"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full bg-[#F5EBE0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh] py-12 lg:py-20">
          
          {/* Left Side: Editorial Text */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center order-2 lg:order-1"
          >
            <span className="text-[#B68D40] text-xs font-bold uppercase tracking-[.4em] mb-6">
              Exclusive 2024 Collection
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-[#2D2424] tracking-tighter leading-[1.05] mb-8">
              Living room <br />
              <span className="italic font-light">reimagined.</span>
            </h1>
            <p className="text-lg text-[#2D2424]/70 max-w-md mb-10 leading-relaxed font-light">
              Discover a curated selection of sculptural furniture designed to elevate your everyday rituals. Crafted with sustainable oak and artisan textures.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <Link
                href="/products"
                className="group flex items-center gap-3 bg-[#2D2424] text-[#F5EBE0] px-8 py-4 text-xs uppercase tracking-widest font-bold hover:bg-[#B68D40] transition-all duration-300 shadow-lg"
              >
                Shop Now 
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="flex items-center gap-2 text-[#2D2424] px-8 py-4 text-xs uppercase tracking-widest font-bold border border-[#2D2424]/20 hover:border-[#2D2424] transition-all duration-300"
              >
                View Lookbook
              </Link>
            </div>
          </motion.div>

          {/* Right Side: Visual Masterpiece */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative order-1 lg:order-2"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1600&auto=format&fit=crop"
                alt="Moka Designer Interior"
                className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-105"
              />
            </div>
            
            {/* Floating Detail Card */}
            <div className="absolute -bottom-6 -right-6 bg-white p-8 hidden xl:block border border-[#2D2424]/5 shadow-2xl">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] text-[#B68D40] uppercase tracking-widest font-bold">Materials</span>
                <span className="text-[#2D2424] font-medium text-sm">Walnut & French Linen</span>
                <div className="w-12 h-[1px] bg-[#B68D40] my-2"></div>
                <span className="text-[10px] text-[#2D2424]/40 uppercase tracking-widest">In Stock</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;