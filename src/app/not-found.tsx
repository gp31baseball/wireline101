"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

declare global {
  interface WindowEventMap {
    "open-ask-snell": CustomEvent<void>;
  }
}

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-[#0B0B0C] text-white relative overflow-hidden">
      {/* background accents */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.08] bg-[radial-gradient(600px_300px_at_70%_0%,#209CEE,transparent),radial-gradient(600px_300px_at_20%_60%,#B3E43D,transparent)]" />
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#209CEE] via-[#61B596] to-[#B3E43D]" />

      <div className="relative z-10 max-w-5xl w-full px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Copy */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight"
          >
            We know a lot — <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EDEFF2] via-[#B3E43D] to-[#EDEFF2]">but not why this link is broken.</span>
          </motion.h1>

          <p className="mt-4 text-[#B7BDC6] leading-relaxed">
            The page you’re looking for doesn’t exist or moved. You can head back home, or ask me and I’ll point you in the right direction.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="/"
              className="inline-flex items-center px-6 py-3 rounded-lg font-semibold border border-white/15 hover:bg-white/5 transition"
            >
              Back Home
            </a>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-ask-snell"))}
              className="inline-flex items-center px-6 py-3 rounded-lg font-semibold
                        bg-gradient-to-r from-[#B3E43D] to-[#8CD46A]
                        text-black hover:brightness-110 transition shadow-[0_6px_30px_-10px_rgba(179,228,61,0.35)]"
            >
              Ask Snell
            </button>
          </div>
        </div>

        {/* Truck */}
        <motion.div
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative"
        >
          <div className="relative mx-auto w-full max-w-[580px]">
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-[85%] h-24 rounded-full blur-3xl bg-gradient-to-r from-[#209CEE55] via-[#8CD46A33] to-[#B3E43D55]" />
            <Image
              src="/images/wireline-truck-hero1.png"
              alt="Wireline Service Truck"
              width={1200}
              height={700}
              className="w-full h-auto object-contain select-none pointer-events-none"
              priority={false}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
