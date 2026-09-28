import { PageHero } from "@/components/ui/PageHero";
import { ServiceList } from "@/components/services/ServiceList";
import { CTASection } from "@/components/home/CTASection";
import { services } from "@/data/services";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "New home construction, renovations & additions, custom home design & build, and independent project management from Procad Construction.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Built around how you want to build."
        description="Whatever stage your project is at, we offer a service model to suit — from full design & construct through to independent project management."
      />
      <section className="section-padding">
        <div className="container-procad">
          <ServiceList services={services} />
        </div>
      </section>
      <CTASection
        title="Not sure which service is right for you?"
        description="Get in touch and we'll help you scope the right approach for your project."
      />
    </>
  );
}
