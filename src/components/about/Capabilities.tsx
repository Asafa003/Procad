import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceList } from "@/components/services/ServiceList";
import { services } from "@/data/services";

export function Capabilities() {
  return (
    <section className="section-padding border-t border-border">
      <div className="container-procad">
        <SectionHeading
          eyebrow="Capabilities"
          title="What we deliver."
          description="Four service models, one standard of finish — so you can engage us at the right stage of your project."
        />
        <div className="mt-14">
          <ServiceList services={services} />
        </div>
      </div>
    </section>
  );
}
