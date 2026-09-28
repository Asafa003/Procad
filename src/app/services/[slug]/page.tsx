import { notFound } from "next/navigation";
import { services, getServiceBySlug, getRelatedServices } from "@/data/services";
import { getProjectBySlug } from "@/data/projects";
import { PageHero } from "@/components/ui/PageHero";
import { ImageBlock } from "@/components/ui/ImageBlock";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { ServiceList } from "@/components/services/ServiceList";
import { CTASection } from "@/components/home/CTASection";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return buildMetadata({
    title: service.title,
    description: service.summary,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const relatedProjects = (service.relatedProjectSlugs ?? [])
    .map((s) => getProjectBySlug(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));
  const relatedServices = getRelatedServices(slug);

  return (
    <>
      <PageHero
        eyebrow="Service"
        title={service.title}
        description={service.summary}
        breadcrumb={[
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />

      {service.heroImage && (
        <section className="pb-0">
          <ImageBlock image={service.heroImage} aspect="wide" sizes="100vw" className="w-full" />
        </section>
      )}

      <section className="section-padding">
        <div className="container-procad grid grid-cols-1 gap-12 lg:grid-cols-[2fr_1fr] lg:gap-20">
          <Reveal>
            <p className="label-eyebrow mb-5">Introduction</p>
            <p className="text-base leading-relaxed text-secondary md:text-lg">
              {service.description}
            </p>
          </Reveal>
          {service.benefits && (
            <Reveal delay={0.1}>
              <p className="label-eyebrow mb-5">Capabilities</p>
              <ul className="space-y-3">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="text-sm leading-relaxed text-secondary">
                    {benefit}
                  </li>
                ))}
              </ul>
            </Reveal>
          )}
        </div>
      </section>

      {service.process && (
        <section className="section-padding border-t border-border bg-muted">
          <div className="container-procad">
            <Stagger className="grid grid-cols-1 gap-10 md:grid-cols-3">
              {service.process.map((step, index) => (
                <StaggerItem key={step.title}>
                  <span className="label-eyebrow">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="font-display mt-3 text-lg font-medium tracking-tight text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-secondary">
                    {step.description}
                  </p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      )}

      {relatedProjects.length > 0 && (
        <section className="section-padding border-t border-border">
          <div className="container-procad">
            <p className="label-eyebrow mb-10">Related projects</p>
            <ProjectGrid projects={relatedProjects} />
          </div>
        </section>
      )}

      {relatedServices.length > 0 && (
        <section className="section-padding border-t border-border">
          <div className="container-procad">
            <p className="label-eyebrow mb-10">Related services</p>
            <ServiceList services={relatedServices} />
          </div>
        </section>
      )}

      <CTASection
        title={`Ready to talk about ${service.title.toLowerCase()}?`}
        buttonLabel="Request a quote"
        buttonHref="/request-a-quote"
      />
    </>
  );
}
