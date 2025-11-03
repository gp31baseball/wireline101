"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-black text-[#E5E5E5]">
      {/* Top band / hero for About */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0C] via-[#0E0E0E] to-[#0B0B0C]" />
        <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-24 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight"
          >
            Why Wireline 101 Exists
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-4 md:text-lg text-[#B7BDC6] max-w-3xl mx-auto"
          >
            Too much hard-earned knowledge dies on location. Wireline 101 is my way to document the
            craft, decode the tech, and answer the questions manuals never cover—so crews execute
            cleaner and leaders decide faster.
          </motion.p>
        </div>
      </div>

      {/* Story block */}
      <div className="relative max-w-6xl mx-auto px-6 py-14 md:py-18 grid md:grid-cols-2 gap-10 items-center">
        {/* Copy */}
        <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55 }}
            className="order-2 md:order-1"
          >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Who’s Snell?</h3>
          <p className="text-[#C9CDD3] leading-relaxed">
            Field-first wireline + downhole imaging. I’ve run crews, owned results, and learned what
            actually holds up under pressure. These days I translate advanced tools into simple,
            repeatable execution—so teams can focus on doing the job right.
          </p>
          <ul className="mt-6 space-y-3 text-[#B7BDC6]">
  <li>• Plain language, clear expectations, no fluff</li>
  <li>• Uptime, safety, and communication &gt; everything else</li>
  <li>• Teach the "why," not just the steps</li>
</ul>
        </motion.div>

{/* Photo card (no padding, no caption, fills the card) */}
<motion.div
  initial={{ opacity: 0, x: 12 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, amount: 0.45 }}
  transition={{ duration: 0.55, delay: 0.08 }}
  className="order-1 md:order-2"
>
  <div className="relative rounded-2xl border border-white/10 bg-[#0E0E0E] shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] overflow-hidden">
    {/* Use the actual photo ratio so there’s no side gaps */}
    {/* If your photo is square, keep width=800 height=800; for portrait use width=800 height=1000 */}
    <Image
      src="/images/about-snell1.jpg"
      alt="James Snell"
      width={800}
      height={800}              /* <- square; change to 800x1000 if portrait */
      className="w-full h-auto block object-cover" /* fills the card; switch to object-contain if you want zero crop */
      priority={false}
    />

    {/* optional, very subtle vignette to blend edges (remove if you want pure photo) */}
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(transparent,transparent,rgba(0,0,0,0.25))]" />
  </div>
</motion.div>



      </div>

      {/* Cred strip */}
      <div className="max-w-6xl mx-auto px-6 pb-6">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { k: "Years in the Field", v: "15+" },
            { k: "Specialties", v: "Wireline • Imaging • Ops" },
            { k: "Current Focus", v: "Clarity • Training • Results" },
          ].map((card, i) => (
            <motion.div
              key={card.k}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: 0.05 * i }}
              className="rounded-xl border border-white/10 bg-[#0E0E0E] px-5 py-4"
            >
              <div className="text-[#7E8591] text-sm">{card.k}</div>
              <div className="text-lg font-semibold mt-1">{card.v}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Values / Mission */}
      <div className="max-w-6xl mx-auto px-6 pb-12 md:pb-16">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Simplify the Complex",
              body: "Turn advanced tools and workflows into clean, usable playbooks.",
            },
            {
              title: "Preserve the Craft",
              body: "Capture hard-won lessons so the next crew doesn’t learn them the hard way.",
            },
            {
              title: "Build Better Conversations",
              body: "Ask better questions, set better expectations, get better outcomes.",
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, delay: 0.05 * i }}
              className="rounded-2xl border border-white/10 bg-[#0E0E0E] p-6"
            >
              <h4 className="text-xl font-semibold mb-3 text-[#EDEFF2]">{card.title}</h4>
              <p className="text-[#B7BDC6]">{card.body}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA: Ask Snell */}
      <div className="px-6 pb-16">
        <div className="max-w-4xl mx-auto rounded-2xl border border-[#B3E43D33] bg-gradient-to-r from-[#121212] via-[#141414] to-[#121212] p-8 text-center">
          <h5 className="text-2xl font-bold mb-3">Keep the Conversation Going</h5>
          <p className="text-[#B7BDC6] max-w-2xl mx-auto">
            Got a question about wireline, imaging, or leadership in the field? Hit the button
            below—I read every message personally.
          </p>

          <div className="mt-6">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                // open the Ask Snell modal in Hero (no scroll)
                window.dispatchEvent(new CustomEvent("open-ask-snell"));
              }}
              className="inline-block px-8 py-3 bg-[#B3E43D] text-black font-semibold rounded-lg hover:bg-[#C9F457] transition"
            >
              Ask Snell
            </a>
          </div>

          <p className="mt-6 text-sm text-[#7E8591] italic">
            “Experience means nothing if you can’t explain it.”
          </p>
        </div>
      </div>
    </section>
  );
}
