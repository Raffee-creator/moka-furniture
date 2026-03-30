"use client";

import { motion } from "framer-motion";

const values = [
  "Sustainable Materials",
  "Free White-Glove Delivery",
  "Handcrafted in Oak",
  "2-Year Warranty",
  "Ethically Sourced",
  "Artisanal Textures",
];

const Marquee = () => {
  return (
    <div className="bg-[#2D2424] py-4 overflow-hidden flex whitespace-nowrap border-y border-[#B68D40]/20">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
        className="flex gap-20 items-center px-10"
      >
        {/* Render twice for seamless looping */}
        {[...values, ...values].map((value, index) => (
          <span
            key={index}
            className="text-[#F5EBE0] text-[10px] uppercase tracking-[0.4em] font-bold flex items-center gap-4"
          >
            <span className="w-1.5 h-1.5 bg-[#B68D40] rounded-full" />
            {value}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;