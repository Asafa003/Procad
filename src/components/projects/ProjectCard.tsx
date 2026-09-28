import Link from "next/link";
import type { Project } from "@/types/project";
import { ImageBlock } from "@/components/ui/ImageBlock";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <ImageBlock image={project.heroImage} aspect="portrait" zoom className="group" />
      <div className="mt-5 flex items-baseline justify-between gap-4">
        <h3 className="font-display text-lg font-medium tracking-tight text-foreground group-hover:text-accent">
          {project.title}
        </h3>
        <span className="shrink-0 text-sm text-secondary">{project.year}</span>
      </div>
      <p className="mt-1 text-sm text-secondary">{project.location}</p>
    </Link>
  );
}
