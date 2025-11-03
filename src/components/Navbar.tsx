"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

declare global {
  interface WindowEventMap {
    "open-ask-snell": CustomEvent<void>;
  }
}

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  function goToAbout() {
    const el = document.getElementById("about");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function openAskSnell() {
    window.dispatchEvent(new CustomEvent("open-ask-snell"));
  }

  return (
    <header className="sticky top-0 z-40">
      {/* bar */}
      <div className="backdrop-blur-md bg-black/60 border-b border-white/10">
        {/* gradient accent on bottom edge */}
        <div className="h-[2px] w-full bg-gradient-to-r from-[#209CEE] via-[#61B596] to-[#B3E43D]" />
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Brand */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-lg md:text-xl font-extrabold tracking-tight hover:opacity-90 transition"
            aria-label="Wireline 101 Home"
          >
            Wireline <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EDEFF2] via-[#B3E43D] to-[#EDEFF2]">101</span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={goToAbout}
              className="text-sm text-[#DCE1E7] hover:text-white transition"
            >
              About
            </button>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-sm text-[#DCE1E7] hover:text-white transition"
            >
              Top
            </button>
            <button
              onClick={openAskSnell}
              className="px-4 py-2 rounded-md font-semibold
                         bg-gradient-to-r from-[#B3E43D] to-[#8CD46A]
                         text-black hover:brightness-110 transition shadow-[0_6px_30px_-10px_rgba(179,228,61,0.35)]"
            >
              Ask Snell
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-white/15 text-[#E5E5E5]"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle Menu"
          >
            <span className="i">☰</span>
          </button>
        </nav>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="md:hidden backdrop-blur-md bg-black/70 border-b border-white/10"
          >
            <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  setOpen(false);
                  goToAbout();
                }}
                className="text-[#DCE1E7] text-sm py-2 text-left hover:text-white transition"
              >
                About
              </button>
              <button
                onClick={() => {
                  setOpen(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="text-[#DCE1E7] text-sm py-2 text-left hover:text-white transition"
              >
                Back to Top
              </button>
              <button
                onClick={() => {
                  setOpen(false);
                  openAskSnell();
                }}
                className="mt-1 inline-flex items-center justify-center px-4 py-2 rounded-md font-semibold
                           bg-gradient-to-r from-[#B3E43D] to-[#8CD46A]
                           text-black hover:brightness-110 transition shadow-[0_6px_30px_-10px_rgba(179,228,61,0.35)]"
              >
                Ask Snell
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
