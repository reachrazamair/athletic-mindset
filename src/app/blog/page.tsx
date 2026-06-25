"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { BottomNav } from "@/components/layout/BottomNav";
import { Footer } from "@/components/layout/Footer";
import { BlogHero } from "@/components/blog/BlogHero";
import { BlogCategories } from "@/components/blog/BlogCategories";
import { BlogFeatured } from "@/components/blog/BlogFeatured";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { BlogNewsletter } from "@/components/blog/BlogNewsletter";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <>
      <Navbar />
      <main className="pb-20 md:pb-0">
        <BlogHero />
        <BlogCategories
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        <BlogFeatured activeCategory={activeCategory} />
        <BlogGrid activeCategory={activeCategory} />
        <BlogNewsletter />
      </main>
      <Footer />
      <BottomNav />
    </>
  );
}
