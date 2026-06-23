"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "This really was very accurate about me. Since I play soccer I've been told by other coaches what my flaws are and one major flaw is that I need to stay calm on the field and concentrate. This test helped me show what else I'm good at but also what I can improve on. I feel like the stuff that it told me to do will make me a better player.",
    author: "Roko Radovani",
    sport: "Soccer",
  },
  {
    quote:
      "I feel that the assessment is essential in self-reflection, something every athlete should have to take. It puts your strengths and weaknesses at the forefront of the mind. The fact that it puts words to one's behavior and actions is a big deal. It brings feelings into life, into reality.",
    author: "Gail Banawis",
    sport: "Athlete",
  },
  {
    quote:
      "This assessment exam exposed the truth on some of my weaknesses and strengths. I was asked questions that was stimulating to my mind and allowed me to look at things from a different aspect. The results disclosed characteristics of myself, that I knew I had, but was in denial about.",
    author: "Damilola Odugbemi",
    sport: "Athlete",
  },
  {
    quote:
      "The feedback I received is informative about highlighting my strengths and weaknesses both extrinsically and intrinsically. It provides a detailed account of how my personal qualities measure up to the standards of a typical athlete, and suggests how I should improve steadily.",
    author: "Michael Ojeranti",
    sport: "Athlete",
  },
];

export function AthleteTestimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-20 md:py-28" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface-light/30 to-surface" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary-light mb-4 block">
            From Real Athletes
          </span>
          <h2 className="text-2xl md:text-5xl font-bold mb-4">
            Athletes Like You{" "}
            <span className="gradient-text">Agree</span>
          </h2>
        </motion.div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl border border-border/50 bg-surface-card/50 p-6 flex flex-col"
            >
              <Quote className="h-6 w-6 text-primary/30 mb-3 flex-shrink-0" />
              <p className="text-sm text-text-secondary leading-relaxed mb-4 flex-1">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-3 border-t border-border/50">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <span className="text-[10px] font-bold text-primary-light">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-text-primary">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-text-muted">{testimonial.sport}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
