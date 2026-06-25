"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Building2, BarChart3, ExternalLink } from "lucide-react";

const disciplines = [
  {
    icon: Brain,
    title: "Sport Psychology",
    description:
      "Sport psychology applies social, cognitive, clinical, and physiological psychology to facilitate peak performance, enhance sport participation, and help athletes overcome barriers. Our assessment draws directly from validated sport psychology frameworks measuring motivation, confidence, focus, and composure.",
    links: [
      {
        label: "Association for Applied Sport Psychology (AASP)",
        href: "https://appliedsportpsych.org",
      },
      {
        label: "APA — Sports and Performance",
        href: "https://www.apa.org/education-career/guide/subfields/performance",
      },
    ],
  },
  {
    icon: Building2,
    title: "Organizational Psychology",
    description:
      "Industrial/organizational psychology is the scientific study of individual, team, and organizational performance using psychological theories and the scientific method. Our platform uses quantitative, data-driven evaluation — examining attitudes, beliefs, and behaviors using statistics to provide objective evaluations rather than subjective observations.",
    links: [
      {
        label: "Society for Industrial-Organizational Psychology (SIOP)",
        href: "https://www.siop.org",
      },
      {
        label: "APA — Industrial-Organizational",
        href: "https://www.apa.org/ed/graduate/specialize/industrial",
      },
    ],
  },
  {
    icon: BarChart3,
    title: "Psychometrics",
    description:
      "Psychometrics is the science of measuring psychological attributes reliably and validly. Every dimension in our assessment meets professional reliability standards (α ≥ .70) and is normed against 5,000+ validated athlete assessments. T-scores, percentile rankings, and factor analysis ensure every number has scientific meaning.",
    links: [
      {
        label: "International Test Commission",
        href: "https://www.intestcom.org",
      },
    ],
  },
];

export function ResearchDisciplines() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 md:py-28 border-t border-border/30" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary-light mb-4 block">
            Our Foundations
          </span>
          <h2 className="font-display text-2xl md:text-4xl font-black mb-4 uppercase tracking-tight">
            Three Scientific Disciplines
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Most sport psychology tools use qualitative methods — interviews and
            observations. We combine that tradition with the quantitative rigor
            of organizational psychology and psychometrics.
          </p>
        </motion.div>

        <div className="space-y-8">
          {disciplines.map((discipline, i) => (
            <motion.div
              key={discipline.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-border-light bg-surface-card p-6 md:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-5">
                <div className="inline-flex rounded-xl bg-primary/10 p-3 flex-shrink-0">
                  <discipline.icon size={24} className="text-primary-light" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3">{discipline.title}</h3>
                  <p className="text-sm md:text-base text-text-secondary leading-relaxed mb-4">
                    {discipline.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {discipline.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-primary-light hover:text-white transition-colors"
                      >
                        <ExternalLink size={13} />
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
