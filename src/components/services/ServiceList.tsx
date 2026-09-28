import type { Service } from "@/types/service";
import { ServiceCard } from "./ServiceCard";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

export function ServiceList({ services }: { services: Service[] }) {
  return (
    <Stagger className="grid grid-cols-1 gap-px overflow-hidden bg-border sm:grid-cols-2">
      {services.map((service) => (
        <StaggerItem key={service.slug} className="bg-background">
          <ServiceCard service={service} />
        </StaggerItem>
      ))}
    </Stagger>
  );
}
