import type { Project } from "@/types/project";
import { ProjectCard } from "./ProjectCard";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <Stagger className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <StaggerItem key={project.slug}>
          <ProjectCard project={project} />
        </StaggerItem>
      ))}
    </Stagger>
  );
}
