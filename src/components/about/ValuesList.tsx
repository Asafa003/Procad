import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

const values = [
  {
    title: "Transparency",
    description:
      "Open-book costing and clear, regular communication so there are no surprises through the build.",
  },
  {
    title: "Craft",
    description:
      "We work with a trusted network of tradespeople who take the same pride in their work that we do.",
  },
  {
    title: "Accountability",
    description:
      "A single point of contact from contract to handover, backed by our workmanship warranty.",
  },
  {
    title: "Longevity",
    description:
      "We build for the next fifty years, not just for the handover photos.",
  },
];

export function ValuesList() {
  return (
    <section className="section-padding bg-muted">
      <div className="container-procad">
        <SectionHeading eyebrow="What we value" title="How we work" />
        <Stagger className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <StaggerItem key={value.title}>
              <h3 className="font-display text-lg font-medium tracking-tight text-foreground">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-secondary">{value.description}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
