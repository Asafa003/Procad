import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

const steps = [
  {
    title: "Listen",
    description:
      "We start with the site, the brief and how you want to live — not a standard product range.",
  },
  {
    title: "Plan",
    description:
      "Budgets, programs and consultant coordination are locked in before construction begins.",
  },
  {
    title: "Build",
    description:
      "Dedicated site supervision and a trusted trade network keep quality and communication tight.",
  },
  {
    title: "Handover",
    description:
      "A thorough defects process, clear warranties and a team that remains available after completion.",
  },
];

export function Approach() {
  return (
    <section className="section-padding">
      <div className="container-procad">
        <SectionHeading
          eyebrow="Our approach"
          title="A considered process from first meeting to keys."
        />
        <Stagger className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <StaggerItem key={step.title}>
              <span className="label-eyebrow">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="font-display mt-3 text-lg font-medium tracking-tight text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-secondary">{step.description}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
