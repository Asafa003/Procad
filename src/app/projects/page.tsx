import { PageHero } from "@/components/ui/PageHero";
import { ProjectListing } from "@/components/projects/ProjectListing";
import { CTASection } from "@/components/home/CTASection";
import { projects } from "@/data/projects";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Projects",
  description:
    "Explore new homes, renovations and custom builds completed by Procad Construction across Nigeria.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="A portfolio of considered homes."
        description="Every project reflects a close collaboration between our clients, their architect and our construction team."
      />
      <section className="section-padding">
        <div className="container-procad">
          <ProjectListing projects={projects} />
        </div>
      </section>
      <CTASection
        title="Have a project in mind?"
        description="We'd love to hear about it — get in touch to arrange a first conversation."
      />
    </>
  );
}
