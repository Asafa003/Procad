import { notFound } from "next/navigation";
import { projects, getProjectBySlug, getAdjacentProjects, getRelatedProjects } from "@/data/projects";
import { ImageBlock } from "@/components/ui/ImageBlock";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ProjectMeta } from "@/components/projects/ProjectMeta";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { ProjectNav } from "@/components/projects/ProjectNav";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { CTASection } from "@/components/home/CTASection";
import { Reveal } from "@/components/motion/Reveal";
import { BreadcrumbJsonLd } from "@/components/seo/StructuredData";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return buildMetadata({
    title: project.title,
    description: project.summary,
    path: `/projects/${project.slug}`,
    image: project.heroImage.src,
  });
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(slug);
  const related = getRelatedProjects(slug);

  return (
    <>
      <BreadcrumbJsonLd items={[{ label: "Projects", href: "/projects" }, { label: project.title }]} />
      <section className="pt-24 md:pt-28">
        <div className="container-procad pb-8">
          <Breadcrumb items={[{ label: "Projects", href: "/projects" }, { label: project.title }]} />
        </div>
        <ImageBlock image={project.heroImage} aspect="wide" priority sizes="100vw" className="w-full" />
      </section>

      <section className="section-padding">
        <div className="container-procad grid grid-cols-1 gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
          <Reveal>
            <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              {project.title}
            </h1>
            <div className="mt-10">
              <ProjectMeta project={project} />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-base leading-relaxed text-secondary md:text-lg">
              {project.description}
            </p>
          </Reveal>
        </div>
      </section>

      {project.gallery.length > 0 && (
        <section className="pb-24 md:pb-32">
          <div className="container-procad">
            <ProjectGallery images={project.gallery} />
          </div>
        </section>
      )}

      <div className="container-procad">
        <ProjectNav prev={prev} next={next} />
      </div>

      {related.length > 0 && (
        <section className="section-padding border-t border-border">
          <div className="container-procad">
            <p className="label-eyebrow mb-10">Related projects</p>
            <ProjectGrid projects={related} />
          </div>
        </section>
      )}

      <CTASection
        title="Ready to start a project like this?"
        description="Share your site and brief — we'll follow up to arrange a consultation."
        buttonLabel="Request a quote"
        buttonHref="/request-a-quote"
      />
    </>
  );
}
