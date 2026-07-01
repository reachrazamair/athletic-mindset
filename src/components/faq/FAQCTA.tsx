"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

export function FAQCTA() {
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
            Still Have <span className="gradient-text">Questions?</span>
          </h2>
          <p className="text-text-secondary mb-8">
            Our team is here to help. Reach out and we&apos;ll get back to you
            within one business day.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white hover:bg-primary-light transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:scale-[1.02] active:scale-[0.98]"
            >
              <Mail size={16} />
              Contact Us
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="/assessment"
              className="rounded-full border border-border-light px-7 py-3.5 text-sm font-semibold text-text-primary hover:border-primary/50 transition-all duration-300"
            >
              Take Free Assessment
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
