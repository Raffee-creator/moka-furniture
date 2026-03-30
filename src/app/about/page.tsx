"use client";

import React from 'react';
import Link from 'next/link'; // Added missing import
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function AboutPage() { // Direct default export
  return (
    <div className="bg-[#F5EBE0] min-h-screen">
      {/* 1. Dramatic Hero Header */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop" 
            alt="Artisan Workshop" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
        
        <div className="relative z-10 text-center px-6">
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-[#B68D40] text-[10px] uppercase tracking-[0.5em] font-bold mb-4"
          >
            Since 2024
          </motion.p>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-6xl md:text-8xl font-bold text-white tracking-tighter"
          >
            The Moka <span className="italic font-light">Story</span>
          </motion.h1>
        </div>
      </section>
        {/* 1. Dramatic Hero Header */}
<section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
  <motion.div 
    initial={{ scale: 1.1, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 1.5 }}
    className="absolute inset-0 w-full h-full" // Ensure this is full size
  >
    <img 
      src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2000" 
      alt="Workshop" 
      className="w-full h-full object-cover" // Using standard img for a moment to verify layout
    />
    <div className="absolute inset-0 bg-black/40" />
  </motion.div>
  
  <div className="relative z-10 text-center px-6">
    <motion.p className="text-[#B68D40] text-[10px] uppercase tracking-[0.5em] font-bold mb-4">Since 2024</motion.p>
    <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter">
      The Moka <span className="italic font-light">Story</span>
    </h1>
  </div>
</section>
      {/* 2. Philosophy Section */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[#2D2424] tracking-tighter mb-8">
              Slow furniture for a fast world.
            </h2>
            <div className="space-y-6 text-[#2D2424]/70 leading-relaxed text-lg font-light">
              <p>
                Moka started with a simple observation: our homes were becoming filled with objects that had no soul. Mass-produced pieces designed to last a season, not a lifetime.
              </p>
              <p>
                We decided to return to the basics. We work exclusively with sustainably sourced hardwoods and local artisans who understand that a chair isn't just a place to sit—it's an anchor for your daily rituals.
              </p>
            </div>
          </div>
          <div className="relative aspect-[3/4] bg-[#EAE2D6] overflow-hidden">
             <img 
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              alt="Artisan at work"
             />
          </div>
        </div>
      </section>

      {/* 3. The Quote */}
      <section className="bg-[#2D2424] py-32 px-6 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-3xl mx-auto text-center"
        >
          <Quote className="text-[#B68D40] mx-auto mb-8 opacity-50" size={48} />
          <p className="text-[#F5EBE0] text-3xl md:text-5xl font-light italic leading-tight tracking-tight">
            "Design is not just what it looks like and feels like. Design is how it works within the quiet moments of your life."
          </p>
          <p className="text-[#B68D40] mt-8 uppercase tracking-[0.3em] text-[10px] font-bold">
            — Moka Design Philosophy
          </p>
        </motion.div>
      </section>

      {/* 4. Values Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          {[
            { title: 'Sustainability', desc: 'Every piece of timber is FSC certified. For every table sold, we plant ten trees.' },
            { title: 'Craftsmanship', desc: 'No CNC machines. Every joint is hand-cut and every surface hand-sanded.' },
            { title: 'Longevity', desc: 'We don’t follow trends. We create timeless silhouettes that age beautifully.' }
          ].map((value, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="border-l border-[#2D2424]/10 pl-8"
            >
              <h3 className="text-[#B68D40] text-[10px] uppercase tracking-widest font-bold mb-4">{value.title}</h3>
              <p className="text-[#2D2424]/70 font-light">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
          {/* 6. Contact Section */}
<section className="bg-[#EAE2D6] py-24 px-6">
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-4xl font-bold text-[#2D2424] mb-6 tracking-tighter">Get in Touch</h2>
    <p className="text-[#2D2424]/70 text-lg font-light mb-12">
    Have questions about our pieces? We'd love to hear from you.
    </p>
    <Link 
    href="/contact" 
    className="inline-block px-12 py-4 bg-[#B68D40] text-white text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-[#2D2424] transition-colors"
    >
    Contact Us
    </Link>
  </div>
</section>
      {/* 5. CTA Footer */}
      <section className="pb-24 pt-12 text-center">
        <h2 className="text-2xl font-bold text-[#2D2424] mb-8 tracking-tighter italic text-center">Ready to see our work?</h2>
        <div className="flex justify-center">
          <Link 
            href="/products" 
            className="inline-block px-12 py-4 bg-[#2D2424] text-white text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-[#B68D40] transition-colors"
          >
            Explore Collection
          </Link>
        </div>
      </section>
    </div>

  );
}