"use client";

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
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 md:text-lg text-[#B7BDC6] max-w-3xl mx-auto"
          >
            After years in the field, I saw how much knowledge stayed on location—never written
            down, never shared. Wireline 101 started as a place to explain the craft. It’s grown
            into a place to talk shop, share experience, and answer the questions that don’t make it
            into the manuals.
          </motion.p>
        </div>
      </div>

      {/* Story block */}
      <div className="relative max-w-6xl mx-auto px-6 py-14 md:py-18 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="order-2 md:order-1"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Who’s Snell?</h3>
          <p className="text-[#C9CDD3] leading-relaxed">
            I cut my teeth in wireline and downhole imaging—hands-on service, long shifts, and
            plenty of lessons the hard way. These days I split time between operations leadership
            and mentoring crews, translating advanced tools into clean, reliable execution in the
            field.
          </p>
          <ul className="mt-6 space-y-3 text-[#B7BDC6]">
            <li>• Field-first mindset, tech-forward execution</li>
            <li>• Focus on safety, uptime, and honest comms</li>
            <li>• Passion for teaching what actually works</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="order-1 md:order-2"
        >
          {/* Placeholder “portrait” panel (swap with real image later) */}
          <div className="relative h-64 md:h-80 rounded-2xl bg-gradient-to-br from-[#209CEE22] via-[#8CD46A22] to-[#B3E43D22] border border-white/10 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(transparent,transparent,black)] opacity-60" />
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center text-[#8CD46A]/80 font-semibold">
              {/* Swap this with an <Image> later */}
              <span className="tracking-wide">FIELD-DRIVEN • TECH-MINDED</span>
            </div>
          </div>
          <p className="mt-3 text-sm text-[#7E8591]">
            (You can replace this panel with a real portrait or truck/tool detail shot.)
          </p>
        </motion.div>
      </div>

      {/* Values / Mission */}
      <div className="max-w-6xl mx-auto px-6 pb-12 md:pb-16">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Simplify the Complex",
              body:
                "Break down advanced tools and workflows into plain language—usable by field hands and managers alike.",
            },
            {
              title: "Preserve the Craft",
              body:
                "Document the wisdom that gets lost. Build repeatability with clean process and clear expectations.",
            },
            {
              title: "Build Better Conversations",
              body:
                "Turn one-way ‘procedures’ into two-way dialogue. Ask better questions, get better outcomes.",
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: 0.05 * i }}
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
          // Open the Ask Snell modal in Hero (no scroll)
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
