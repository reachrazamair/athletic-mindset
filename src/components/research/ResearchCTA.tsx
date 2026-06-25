"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp } from "lucide-react";
import Link from "next/link";

export function ResearchCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-16 md:py-24 border-t border-border/30" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-display text-2xl md:text-4xl font-black mb-4 uppercase tracking-tight">
            Experience the Science{" "}
            <span className="gradient-text">Yourself</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto mb-8">
            Take the free assessment and see how psychometric science translates
            into a personalized mental performance profile.
          </p>
          <Link
            href="#assessment"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-white hover:bg-primary-light transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:scale-[1.02] active:scale-[0.98]"
          >
            Take Free Assessment
            <TrendingUp
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
