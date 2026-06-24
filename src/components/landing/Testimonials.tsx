"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const featuredTestimonial = {
  quote:
    "On Saturday I took my girls field hockey team to a 1v1 shootout and one of the players said 'My assessment said I have a hard time under pressure and this is what I have to do' — she was referring to one of the Athletic Mindset relaxation techniques, and then went out and scored a huge goal for us. From that moment on the rest of my girls bought into the program. I went on to be coach of the year, and now all juniors and seniors at Friends Academy utilize this amazing platform.",
  author: "Christine Botti",
  role: "Head Field Hockey Coach",
  org: "Friends Academy",
};

const testimonials = [
  {
    quote:
      "I feel that the assessment is essential in self-reflection, something every athlete should have to take. It puts your strengths and weaknesses at the forefront of the mind. It brings feelings into life, into reality.",
    author: "Gail Banawis",
    role: "Athlete",
    org: "",
  },
  {
    quote:
      "This really was very accurate about me. This test helped me show what else I'm good at but also what I can improve on. I feel like the stuff that it told me to do will make me a better player.",
    author: "Roko Radovani",
    role: "Soccer Player",
    org: "",
  },
  {
    quote:
      "To be frank, this assessment exposed the horrifying truth on some of my weaknesses and strengths. I was asked questions that stimulated my mind and allowed me to look at things from a different aspect.",
    author: "Damilola Odugbemi",
    role: "Athlete",
    org: "",
  },
  {
    quote:
      "The feedback highlights my strengths and weaknesses both extrinsically and intrinsically. It provides a detailed account of how my personal qualities measure up to the standards of a typical athlete.",
    author: "Michael Ojeranti",
    role: "Athlete",
    org: "",
  },
  {
    quote:
      "All of our girls completed their individual assessment. I have LOVED seeing the individual results! The summary is awesome — very helpful!",
    author: "Jen O'Brien",
    role: "Women's Lacrosse Coach",
    org: "Virginia Commonwealth University",
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative py-24 lg:py-36 overflow-hidden" ref={ref}>
      {/* Blue-tinted alternating section */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030508] via-[#0a0e14] to-[#030508]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 md:mb-20"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary-light mb-4 block">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-black mb-5 uppercase tracking-tight">
            Real Athletes.{" "}
            <span className="gradient-text">Real Results.</span>
          </h2>
        </motion.div>

        {/* Featured Testimonial — Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-14 md:mb-20"
        >
          <div className="relative rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 via-surface-card/80 to-surface-card/50 p-8 md:p-12 lg:p-16">
            <Quote className="h-10 w-10 md:h-14 md:w-14 text-primary/20 mb-6" />
            <p className="text-lg md:text-xl lg:text-2xl text-text-primary leading-relaxed mb-8 font-medium">
              &ldquo;{featuredTestimonial.quote}&rdquo;
            </p>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center">
                <span className="text-sm font-bold text-white">CB</span>
              </div>
              <div>
                <p className="text-base font-bold text-text-primary">
                  {featuredTestimonial.author}
                </p>
                <p className="text-sm text-text-secondary">
                  {featuredTestimonial.role} · {featuredTestimonial.org}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Carousel — Other Testimonials */}
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {[0, 1, 2].map((offset) => {
                const idx = (currentIndex + offset) % testimonials.length;
                const t = testimonials[idx];
                return (
                  <div
                    key={`${currentIndex}-${offset}`}
                    className="rounded-2xl border border-border/30 bg-surface-card/40 p-6 md:p-8 flex flex-col"
                  >
                    <Quote className="h-6 w-6 text-primary/20 mb-4 flex-shrink-0" />
                    <p className="text-sm text-text-secondary leading-relaxed mb-6 flex-1">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="flex items-center gap-3 pt-4 border-t border-border/30">
                      <div className="h-9 w-9 rounded-full bg-surface-light border border-border/30 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold text-primary-light">
                          {t.author.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-text-primary">
                          {t.author}
                        </p>
                        <p className="text-xs text-text-muted">
                          {t.role}
                          {t.org && ` · ${t.org}`}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prevSlide}
              className="h-10 w-10 rounded-full border border-border/40 flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-primary/50 transition-all duration-300"
              aria-label="Previous testimonials"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === currentIndex
                      ? "w-6 bg-primary"
                      : "w-1.5 bg-border-light hover:bg-primary/50"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="h-10 w-10 rounded-full border border-border/40 flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-primary/50 transition-all duration-300"
              aria-label="Next testimonials"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
