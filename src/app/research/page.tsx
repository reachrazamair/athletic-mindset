"use client";

import { Navbar } from "@/components/layout/Navbar";
import { BottomNav } from "@/components/layout/BottomNav";
import { Footer } from "@/components/layout/Footer";
import { ResearchHero } from "@/components/research/ResearchHero";
import { ResearchDisciplines } from "@/components/research/ResearchDisciplines";
import { ResearchMethodology } from "@/components/research/ResearchMethodology";
import { ResearchPublications } from "@/components/research/ResearchPublications";
import { ResearchCTA } from "@/components/research/ResearchCTA";

export default function ResearchPage() {
  return (
    <>
      <Navbar />
      <main className="pb-20 md:pb-0">
        <ResearchHero />
        <ResearchDisciplines />
        <ResearchMethodology />
        <ResearchPublications />
        <ResearchCTA />
      </main>
      <Footer />
      <BottomNav />
    </>
  );
}
