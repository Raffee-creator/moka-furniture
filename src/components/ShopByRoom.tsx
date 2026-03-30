"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const rooms = [
  {
    name: 'Living Room',
    href: '/living',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop',
    gridClass: 'md:col-span-2 md:row-span-2', // Large featured tile
  },
  {
    name: 'Bedroom',
    href: '/bedroom',
    image: 'https://images.unsplash.com/photo-1505693419148-db19f487a083?q=80&w=800&auto=format&fit=crop',
    gridClass: 'md:col-span-1 md:row-span-1',
  },
  {
    name: 'Office',
    href: '/office',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop',
    gridClass: 'md:col-span-1 md:row-span-1',
  },
];

const ShopByRoom = () => {
  return (
    <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-12 border-b border-[#2D2424]/10 pb-6">
        <h2 className="text-4xl font-bold tracking-tighter text-[#2D2424]">Shop by Room</h2>
        <p className="text-[#B68D40] text-xs uppercase tracking-widest font-bold mt-2 md:mt-0">
          Find your aesthetic
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
        {rooms.map((room) => (
          <Link 
            key={room.name} 
            href={room.href} 
            className={`group relative overflow-hidden rounded-sm ${room.gridClass}`}
          >
            {/* Background Image */}
            <img 
              src={room.image} 
              alt={room.name} 
              className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
            />
            
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
            
            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-white text-2xl font-bold tracking-tighter mb-2 italic">
                  {room.name}
                </h3>
                <span className="text-white/80 text-[10px] uppercase tracking-[0.3em] font-bold border-b border-white/40 pb-1 group-hover:border-white transition-colors">
                  Explore Collection
                </span>
              </motion.div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ShopByRoom;