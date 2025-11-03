"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Let TS know about our custom event
declare global {
  interface WindowEventMap {
    "open-ask-snell": CustomEvent<void>;
  }
}

// -------------------- ASK SNELL FORM --------------------
function AskSnellForm({ onClose }: { onClose: () => void }) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Network response not ok");

      setStatus("success");
      form.reset();

      // Auto close after short delay
      setTimeout(() => onClose(), 3000);
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="p-3 rounded bg-[#1A1A1A] border border-[#333] text-white focus:outline-none focus:border-[#B3E43D]"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="p-3 rounded bg-[#1A1A1A] border border-[#333] text-white focus:outline-none focus:border-[#B3E43D]"
      />
      <textarea
        name="message"
        rows={4}
        placeholder="Your Question..."
        required
        className="p-3 rounded bg-[#1A1A1A] border border-[#333] text-white focus:outline-none focus:border-[#B3E43D]"
      ></textarea>

      <button
        type="submit"
        disabled={status === "sending"}
        className="px-6 py-3 bg-[#B3E43D] text-black font-semibold rounded-lg hover:bg-[#C9F457] transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>

      <p className="text-sm mt-1 h-4">
        {status === "success" && <span className="text-[#8CD46A]">Message Sent ✅</span>}
        {status === "error" && (
          <span className="text-red-400">Something went wrong ❌ Please try again.</span>
        )}
      </p>
    </form>
  );
}

// -------------------- HERO COMPONENT --------------------
export default function Hero() {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  // Listen for the global "open-ask-snell" event (fired by AboutSection)
  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("open-ask-snell", handler);
    return () => window.removeEventListener("open-ask-snell", handler);
  }, []);

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

      {/* Truck with headlights */}
      <motion.div
        initial={{ x: "120%", opacity: 0 }}
        animate={{ x: "0%", opacity: 1 }}
        transition={{ duration: 4.8, ease: [0.17, 0.67, 0.83, 0.67] }}
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
        <h1 className="relative inline-block text-5xl md:text-8xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#E5E5E5] via-[#B3E43D] to-[#E5E5E5] animate-titleShimmer drop-shadow-lg">
          WIRELINE 101
        </h1>

        <p className="text-lg md:text-2xl mt-3 mb-8 font-medium text-[#B3E43D] drop-shadow-md">
          Taking It Back to Basics — with Cutting-Edge Tech
        </p>

        <div className="w-52 md:w-64 h-[4px] mx-auto rounded-full bg-gradient-to-r from-[#209CEE] via-[#8CD46A] to-[#B3E43D] animate-shimmer mb-8" />

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <button
            id="ask-snell-btn"
            onClick={() => setOpen(true)}
            className="px-8 py-3 md:py-4 bg-[#B3E43D] text-black font-semibold rounded-lg hover:bg-[#C9F457] transition"
          >
            Ask Snell
          </button>
          <a
            href="#darkvision"
            className="px-8 py-3 md:py-4 border border-[#B3E43D] text-[#E5E5E5] font-semibold rounded-lg hover:bg-[#B3E43D]/10 transition"
          >
            DarkVision
          </a>
        </div>
      </motion.div>

      {/* Ask Snell Modal with fade animation */}
      <AnimatePresence>
        {(open || closing) && (
          <motion.div
            key="snell-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="bg-[#111] text-left p-8 rounded-2xl w-[90%] md:w-[480px] relative border border-[#B3E43D]/30 shadow-lg"
            >
              <button
                onClick={() => {
                  setClosing(true);
                  setTimeout(() => {
                    setClosing(false);
                    setOpen(false);
                  }, 500); // fade duration
                }}
                className="absolute top-3 right-4 text-[#B3E43D] hover:text-white text-xl"
              >
                ✕
              </button>

              <h2 className="text-2xl font-bold mb-4 text-[#E5E5E5]">Ask Snell</h2>

              <AskSnellForm
                onClose={() => {
                  setClosing(true);
                  setTimeout(() => {
                    setClosing(false);
                    setOpen(false);
                  }, 500);
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
