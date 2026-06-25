"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function BlogNewsletter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-16 md:py-24 border-t border-border/30" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="font-display text-2xl md:text-3xl font-black mb-4 uppercase tracking-tight">
            Stay in the <span className="gradient-text">Loop</span>
          </h2>
          <p className="text-text-secondary mb-8">
            Get curated mental performance resources delivered to your inbox —
            the latest research, practical guides, and expert insights for
            athletes, parents, and coaches.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 rounded-full border border-border/50 bg-surface-card px-5 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
            />
            <button
              type="submit"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-light transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-text-muted mt-3">
            No spam. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
