"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, ArrowRight, Tag, ExternalLink } from "lucide-react";

const featuredPost = {
  title:
    "Developing and Training Mental Toughness in Sport: What the Research Shows",
  excerpt:
    "A systematic review and meta-analysis of observational studies and experimental interventions examining whether mental toughness can be developed through structured training programs. The findings confirm that psychological skills training produces measurable improvements in mental toughness and performance outcomes across sport contexts.",
  category: "Research",
  readTime: "12 min read",
  date: "BMJ Open Sport & Exercise Medicine",
  source: "National Institutes of Health (PMC)",
  href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7299040/",
};

interface BlogFeaturedProps {
  activeCategory: string;
}

export function BlogFeatured({ activeCategory }: BlogFeaturedProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  // Hide featured post if a category is selected that doesn't match
  if (activeCategory !== "All" && activeCategory !== featuredPost.category) {
    return null;
  }

  return (
    <section className="pb-12 md:pb-16" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <a
            href={featuredPost.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="relative rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-surface-card/80 to-surface-card/50 p-8 md:p-12 overflow-hidden hover:border-primary/40 transition-all duration-300">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[80px]" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary-light">
                    <Tag size={11} />
                    {featuredPost.category}
                  </span>
                  <span className="text-xs text-text-muted flex items-center gap-1">
                    <Clock size={11} />
                    {featuredPost.readTime}
                  </span>
                  <span className="text-xs text-text-muted">
                    {featuredPost.source}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary-light transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-text-secondary leading-relaxed max-w-3xl mb-4">
                  {featuredPost.excerpt}
                </p>
                <p className="text-xs text-text-muted italic mb-6">
                  Published in: {featuredPost.date}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-primary-light group-hover:gap-3 transition-all">
                  Read Full Article
                  <ExternalLink size={14} />
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
              </div>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
