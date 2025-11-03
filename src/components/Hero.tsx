"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[80vh] md:h-[82vh] flex flex-col items-center justify-center overflow-hidden bg-black text-center">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black/90 z-0" />

      {/* Ground glow */}
      <motion.div
        initial={{ opacity: 0.25 }}
        animate={{ opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] md:w-[1200px] h-[120px] rounded-full blur-3xl bg-gradient-to-r from-[#209CEE]/60 via-[#8CD46A]/50 to-[#B3E43D]/60 z-[1]"
      />

      {/* Truck with idle + headlights */}
      <motion.div
        initial={{ x: "120%", opacity: 0 }}
        animate={{ x: "0%", opacity: 1 }}
        transition={{
          duration: 4.8,
          ease: [0.17, 0.67, 0.83, 0.67],
        }}
        className="absolute bottom-[-4%] left-[49%] -translate-x-1/2 w-[950px] md:w-[1250px] lg:w-[1400px] z-[2]"
      >
        <Image
          src="/images/wireline-truck-hero1.png"
          alt="Wireline Service Truck"
          width={1600}
          height={900}
          priority
          className="object-contain select-none pointer-events-none opacity-90"
        />

        {/* Headlight flash */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.9, 0.4, 0] }}
          transition={{ delay: 4.9, duration: 1.2, ease: "easeOut" }}
          className="absolute bottom-[28%] left-[25%] w-[250px] h-[80px] rounded-full blur-2xl bg-yellow-100/80"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.9, 0.4, 0] }}
          transition={{ delay: 4.9, duration: 1.2, ease: "easeOut" }}
          className="absolute bottom-[28%] right-[23%] w-[250px] h-[80px] rounded-full blur-2xl bg-yellow-100/80"
        />
      </motion.div>

      {/* Hero content */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3, ease: "easeOut", delay: 0.5 }}
        className="relative z-10 px-6 -translate-y-[18vh] md:-translate-y-[20vh]"
      >
        {/* Shimmering headline */}
        <h1 className="relative inline-block text-5xl md:text-8xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#E5E5E5] via-[#B3E43D] to-[#E5E5E5] animate-titleShimmer drop-shadow-lg">
          WIRELINE 101
        </h1>

        <p className="text-lg md:text-2xl mt-3 mb-8 font-medium text-[#B3E43D] drop-shadow-md">
          Taking It Back to Basics — with Cutting-Edge Tech
        </p>

        <div className="w-52 md:w-64 h-[4px] mx-auto rounded-full bg-gradient-to-r from-[#209CEE] via-[#8CD46A] to-[#B3E43D] animate-shimmer mb-8" />

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#ask-snell"
            className="px-8 py-3 md:py-4 bg-[#B3E43D] text-black font-semibold rounded-lg hover:bg-[#C9F457] transition"
          >
            Ask Snell
          </a>
          <a
            href="#darkvision"
            className="px-8 py-3 md:py-4 border border-[#B3E43D] text-[#E5E5E5] font-semibold rounded-lg hover:bg-[#B3E43D]/10 transition"
          >
            DarkVision
          </a>
        </div>
      </motion.div>
    </section>
  );
}
