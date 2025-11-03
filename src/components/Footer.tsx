"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="relative bg-[#0B0B0C] text-[#E5E5E5]">
      {/* top gradient accent */}
      <div className="h-[3px] w-full bg-gradient-to-r from-[#209CEE] via-[#61B596] to-[#B3E43D]" />

      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16 grid md:grid-cols-3 gap-10">
        {/* Brand / mission */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.35 }}
        >
          <h3 className="text-2xl font-extrabold tracking-tight">
            Wireline <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EDEFF2] via-[#B3E43D] to-[#EDEFF2]">101</span>
          </h3>
          <p className="mt-3 text-[#B7BDC6] leading-relaxed">
            Field-first perspective. Tech-forward execution. This is where we document the craft,
            decode the tools, and have real conversations that make the next run cleaner.
          </p>
        </motion.div>

        {/* Quick links */}
        <motion.nav
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.35, delay: 0.05 }}
          className="grid grid-cols-2 gap-6 md:justify-items-center"
        >
          <div>
            <h4 className="text-xs uppercase tracking-wider text-[#8FA0B2]">Navigate</h4>
            <ul className="mt-3 space-y-2 text-[#DCE1E7]">
              <li>
                <a href="#about" className="hover:opacity-80 transition">About</a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="hover:opacity-80 transition"
                >
                  Back to Top
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider text-[#8FA0B2]">Resources</h4>
            <ul className="mt-3 space-y-2 text-[#DCE1E7]">
              <li className="opacity-70">Download Resources (coming)</li>
              <li className="opacity-70">FAQ (coming)</li>
            </ul>
          </div>
        </motion.nav>

        {/* Ask Snell action */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.35, delay: 0.1 }}
          className="md:text-right"
        >
          <h4 className="text-sm font-semibold tracking-wide text-[#E5E5E5] md:text-right">
            Ask Snell
          </h4>

          <p className="mt-2 text-[#B7BDC6] leading-relaxed md:max-w-sm md:ml-auto md:text-right">
            Got a question about wireline or imaging? 
          </p>

          <div className="mt-3 flex md:justify-end">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-ask-snell"))}
              className="inline-flex items-center px-6 py-3 rounded-lg font-semibold
                         bg-gradient-to-r from-[#B3E43D] to-[#8CD46A]
                         text-black hover:brightness-110 transition shadow-[0_6px_30px_-10px_rgba(179,228,61,0.35)]"
            >
              Ask Snell
            </button>
          </div>

          <p className="mt-3 text-xs text-[#7E8591] md:text-right">
            Prefer email? Use the Ask Snell button — it goes straight to me.
          </p>
        </motion.div>
      </div>

      {/* bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-3">
          <span className="text-sm text-[#9DA8B5]">
            © {year} Wireline 101. All rights reserved.
          </span>

          <div className="text-xs text-[#7E8591] flex items-center gap-3">
            <span>Built for field pros — blue <span className="mx-1">→</span> lime energy.</span>
            {/* FortyOne Built link */}
            <a
              href="https://fortyonebuilt.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#DCE1E7] hover:text-white transition"
              title="FortyOne Built — Web & Brand"
            >
              <span className="h-[8px] w-[8px] rounded-full bg-gradient-to-r from-[#209CEE] to-[#B3E43D]" />
              <span className="underline underline-offset-2">FortyOneBuilt.com</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
