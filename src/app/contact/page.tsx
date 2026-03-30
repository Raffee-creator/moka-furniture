"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, ArrowRight, Link } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-[#F5EBE0] min-h-screen pt-40 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-6xl font-bold tracking-tighter text-[#2D2424] mb-8">Get in <span className="italic font-light">Touch</span></h1>
            <p className="text-[#2D2424]/60 text-lg font-light mb-12">
              Have a question about a piece or a custom project? Our studio team is here to help.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="text-[#B68D40] mt-1" size={20} />
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold">Studio Address</p>
                  <p className="text-[#2D2424]/70 font-light">122 Artisan Way, Portland, OR</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="text-[#B68D40] mt-1" size={20} />
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold">Email Us</p>
                  <p className="text-[#2D2424]/70 font-light">hello@mokastudio.com</p>
                </div>
              </div>
            </div>
          </motion.div>
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
          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-12 shadow-sm"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Your Name" className="w-full border-b border-[#2D2424]/10 py-4 outline-none focus:border-[#B68D40] bg-transparent transition-colors" />
              <input type="email" placeholder="Email Address" className="w-full border-b border-[#2D2424]/10 py-4 outline-none focus:border-[#B68D40] bg-transparent transition-colors" />
              <textarea placeholder="Your Message" rows={4} className="w-full border-b border-[#2D2424]/10 py-4 outline-none focus:border-[#B68D40] bg-transparent transition-colors resize-none" />
              
              <button className="w-full py-4 bg-[#2D2424] text-white text-[10px] uppercase tracking-widest font-bold hover:bg-[#B68D40] transition-all flex items-center justify-center gap-2 group">
                Send Message <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}