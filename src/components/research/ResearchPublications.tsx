"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const publications = [
  {
    title: "International Journal of Selection and Assessment",
    description:
      "Dr. Marentette's published research on skills assessment methodology and development systems — the scientific approach underlying our 22-dimension scoring engine.",
  },
  {
    title: "Organizational Psychology Review",
    description:
      "Research on team performance, selection, and development — the scientific foundation for our Team Orientation and Leadership Potential factors.",
  },
  {
    title: "DePaul University — Doctoral Research",
    description:
      "Dissertation completed with Dr. Suzanne Bell, an international expert on team performance who leads NASA's CREWS project for astronaut team selection and development.",
  },
];

export function ResearchPublications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 md:py-28 border-t border-border/30" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary-light mb-4 block">
            Published Research
          </span>
          <h2 className="font-display text-2xl md:text-4xl font-black mb-10 uppercase tracking-tight">
            Academic Foundations
          </h2>
        </motion.div>

        <div className="space-y-5 max-w-3xl">
          {publications.map((pub, i) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-border-light bg-surface-card p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
            >
              <h3 className="text-base font-bold mb-2">{pub.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {pub.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
