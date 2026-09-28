import { getFeaturedProjects } from "@/data/projects";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function FeaturedProjects() {
  const featured = getFeaturedProjects();

  return (
    <section className="section-padding bg-muted">
      <div className="container-procad">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Selected work"
            title="Recent projects"
            description="A selection of new homes, renovations and additions completed across Nigeria."
          />
          <Button href="/projects" variant="text" showArrow className="shrink-0">
            View all projects
          </Button>
        </div>

        <div className="mt-14">
          <ProjectGrid projects={featured} />
        </div>
      </div>
    </section>
  );
}
