import { services } from "@/data/services";
import { ServiceCard } from "@/components/services/ServiceCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

export function ServicesOverview() {
  return (
    <section className="section-padding">
      <div className="container-procad">
        <SectionHeading
          eyebrow="What we do"
          title="Our services"
          description="From first sketch to final handover, we manage every stage of the build."
        />

        <Stagger className="mt-14 grid grid-cols-1 gap-px overflow-hidden bg-border sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <StaggerItem key={service.slug} className="bg-background">
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
