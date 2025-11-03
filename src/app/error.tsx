"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-[#0B0B0C] text-white relative">
      <div className="absolute inset-0 pointer-events-none opacity-[0.06] bg-[radial-gradient(600px_300px_at_70%_0%,#209CEE,transparent),radial-gradient(600px_300px_at_20%_60%,#B3E43D,transparent)]" />

      <div className="max-w-3xl w-full px-6 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight"
        >
          Something went sideways.
        </motion.h1>

        <p className="mt-4 text-[#B7BDC6]">
          An unexpected error occurred. You can try again, or let me know what you were doing and I’ll take a look.
        </p>

        <div className="mt-6 flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="inline-flex items-center px-6 py-3 rounded-lg font-semibold border border-white/15 hover:bg-white/5 transition"
          >
            Try Again
          </button>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("open-ask-snell"))}
            className="inline-flex items-center px-6 py-3 rounded-lg font-semibold
                       bg-gradient-to-r from-[#B3E43D] to-[#8CD46A]
                       text-black hover:brightness-110 transition shadow-[0_6px_30px_-10px_rgba(179,228,61,0.35)]"
          >
            Ask Snell
          </button>
        </div>

        {/* Optional diagnostics in dev */}
        {process.env.NODE_ENV === "development" && error?.digest && (
          <p className="mt-4 text-xs text-[#7E8591]">Error id: {error.digest}</p>
        )}
      </div>
    </section>
  );
}
