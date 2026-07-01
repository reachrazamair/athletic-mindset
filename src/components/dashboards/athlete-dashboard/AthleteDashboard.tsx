"use client";

import type { User } from "@/lib/api";
import { DashboardHero } from "@/components/dashboards/athlete-dashboard/DashboardHero";
import { ScoreTeaserCard } from "@/components/dashboards/athlete-dashboard/ScoreTeaserCard";
import { GettingStartedCard } from "@/components/dashboards/athlete-dashboard/GettingStartedCard";
import { DailyTipCard } from "@/components/dashboards/athlete-dashboard/DailyTipCard";
import { PhasesPreviewCard } from "@/components/dashboards/athlete-dashboard/PhasesPreviewCard";
import { MentalSkillsCard } from "@/components/dashboards/athlete-dashboard/MentalSkillsCard";

export function AthleteDashboard({ user }: { user: User }) {
  return (
    <div className="space-y-4 md:space-y-5">
      <DashboardHero user={user} />

      {/* Bento grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-5">
        {/* Tall score teaser on the left */}
        <div className="lg:col-span-1 lg:row-span-2">
          <ScoreTeaserCard />
        </div>

        {/* Two stacked cards on the right */}
        <div className="lg:col-span-2">
          <GettingStartedCard user={user} />
        </div>
        <div className="lg:col-span-2">
          <DailyTipCard />
        </div>

        {/* Full-width previews */}
        <div className="lg:col-span-3">
          <PhasesPreviewCard />
        </div>
        <div className="lg:col-span-3">
          <MentalSkillsCard />
        </div>
      </div>
    </div>
  );
}
