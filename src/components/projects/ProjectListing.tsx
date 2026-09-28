"use client";

import { useMemo, useState } from "react";
import type { Project, ProjectCategory } from "@/types/project";
import { ProjectGrid } from "./ProjectGrid";
import { PROJECT_CATEGORY_LABELS } from "@/lib/utils";
import { cn } from "@/lib/utils";

const FILTERS: { value: "all" | ProjectCategory; label: string }[] = [
  { value: "all", label: "All" },
  { value: "new-build", label: PROJECT_CATEGORY_LABELS["new-build"] },
  { value: "renovation", label: PROJECT_CATEGORY_LABELS.renovation },
  { value: "custom-home", label: PROJECT_CATEGORY_LABELS["custom-home"] },
];

export function ProjectListing({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]["value"]>("all");

  const visible = useMemo(
    () => (filter === "all" ? projects : projects.filter((project) => project.category === filter)),
    [filter, projects],
  );

  return (
    <div>
      <div className="mb-12 flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
        {FILTERS.map((item) => {
          const selected = filter === item.value;
          return (
            <button
              key={item.value}
              type="button"
              aria-pressed={selected}
              onClick={() => setFilter(item.value)}
              className={cn(
                "h-10 px-4 text-xs font-medium uppercase tracking-[0.14em] transition-colors",
                selected
                  ? "bg-primary text-background"
                  : "border border-border text-secondary hover:border-primary hover:text-foreground",
              )}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      {visible.length > 0 ? (
        <ProjectGrid projects={visible} />
      ) : (
        <p className="text-sm text-secondary">No projects in this category yet.</p>
      )}
    </div>
  );
}
