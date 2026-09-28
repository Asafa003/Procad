import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { company } from "@/data/company";

const stats = [
  { value: `${new Date().getFullYear() - (company.foundedYear ?? 2009)}+`, label: "Years in business" },
  { value: "80+", label: "Homes delivered" },
  { value: "14", label: "Full-time trades & staff" },
  { value: company.licenseNumber, label: "Licensed builder" },
];

export function StatBlock() {
  return (
    <section className="section-padding border-t border-border">
      <div className="container-procad">
        <Stagger className="grid grid-cols-2 gap-10 lg:grid-cols-4">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <p className="font-display text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-secondary">{stat.label}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
