"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden text-center bg-black">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
        src="/videos/hero-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="relative z-10 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-7xl font-extrabold mb-6"
        >
          Wireline 101
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl mb-8 text-[#FDB827]"
        >
          Taking It Back to Basics — with Cutting-Edge Tech
        </motion.p>

        <div className="space-x-4">
          <a
            href="#services"
            className="px-8 py-4 bg-[#FDB827] text-black font-semibold rounded-lg hover:bg-[#FFD35C] transition"
          >
            Explore Services
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-[#FDB827] font-semibold rounded-lg hover:bg-[#FDB827]/10 transition"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </section>
  );
}
