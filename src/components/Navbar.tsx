"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingBag, User, Search, Menu, X } from 'lucide-react';
import { useCart } from '@/lib/store'; // Import the store

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // 1. Hook into the store
  const totalItems = useCart((state) => state.totalItems());
  
  // 2. Hydration fix (Optional but recommended for Next.js)
  // This prevents a mismatch between server and client HTML if the cart has items
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const navLinks = [
    { name: 'Shop All', href: '/products' },
    { name: 'Living Room', href: '/living' },
    { name: 'Bedroom', href: '/bedroom' },
    { name: 'About', href: '/about' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-[#F5EBE0]/80 backdrop-blur-md border-b border-[#2D2424]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[#2D2424]">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-[#2D2424]">
              MOKA<span className="font-light text-[#B68D40]">.</span>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-10 items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-sm uppercase tracking-widest text-[#2D2424] hover:text-[#B68D40] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-5">
            <button className="text-[#2D2424] hover:text-[#B68D40] hidden sm:block">
              <Search size={20} strokeWidth={1.5} />
            </button>
            <Link href="/profile" className="text-[#2D2424] hover:text-[#B68D40]">
              <User size={20} strokeWidth={1.5} />
            </Link>
            
            {/* 3. Updated Cart Link with Dynamic Count */}
            <Link href="/cart" className="text-[#2D2424] hover:text-[#B68D40] flex items-center gap-1 relative">
              <ShoppingBag size={20} strokeWidth={1.5} />
              {mounted && totalItems > 0 && (
                <span className="absolute -top-2 -right-2 text-[10px] font-bold bg-[#B68D40] text-white rounded-full h-4 w-4 flex items-center justify-center animate-in fade-in zoom-in duration-300">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
              <div className="md:hidden bg-[#F5EBE0] border-b border-[#2D2424]/10">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block px-3 py-2 text-sm uppercase tracking-widest text-[#2D2424] hover:text-[#B68D40] transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </nav>
        );
      };
      
      export default Navbar;