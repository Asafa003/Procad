import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Project } from "@/types/project";

export function ProjectNav({ prev, next }: { prev: Project; next: Project }) {
  return (
    <div className="grid grid-cols-2 border-t border-border">
      <Link
        href={`/projects/${prev.slug}`}
        className="group flex flex-col gap-2 border-r border-border py-10 pr-6"
      >
        <span className="flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-secondary">
          <ArrowLeft className="size-3.5" aria-hidden />
          Previous
        </span>
        <span className="font-display text-lg font-medium group-hover:text-accent">
          {prev.title}
        </span>
      </Link>
      <Link
        href={`/projects/${next.slug}`}
        className="group flex flex-col items-end gap-2 py-10 pl-6 text-right"
      >
        <span className="flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-secondary">
          Next
          <ArrowRight className="size-3.5" aria-hidden />
        </span>
        <span className="font-display text-lg font-medium group-hover:text-accent">
          {next.title}
        </span>
      </Link>
    </div>
  );
}
