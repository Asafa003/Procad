import { Reveal } from "@/components/motion/Reveal";

export function IntroStatement() {
  return (
    <section className="section-padding">
      <div className="container-procad">
        <Reveal>
          <p className="font-display max-w-4xl text-2xl font-medium leading-snug tracking-tight text-foreground md:text-3xl lg:text-4xl">
            For over ten years, we&apos;ve partnered with homeowners and architects to deliver
            new homes and renovations that are considered in design, precise in execution and
            built to last well beyond the handover.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
