"use client";

import { motion } from "framer-motion";

const categories = [
  "All",
  "Research",
  "For Parents",
  "For Coaches",
  "Mental Skills",
];

interface BlogCategoriesProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function BlogCategories({
  activeCategory,
  onCategoryChange,
}: BlogCategoriesProps) {
  return (
    <section className="pb-8 md:pb-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 md:gap-3"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`rounded-full px-4 py-2 text-xs md:text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-primary text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                  : "bg-surface-card border border-border/50 text-text-secondary hover:text-text-primary hover:border-primary/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
