import { ImageBlock } from "@/components/ui/ImageBlock";
import { Reveal } from "@/components/motion/Reveal";

export function CompanyStory() {
  return (
    <section className="section-padding">
      <div className="container-procad grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="label-eyebrow mb-5">Our story</p>
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl">
            Founded on the belief that a build should be as considered as the design.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-secondary md:text-lg">
            <p>
              Procad Construction was founded in Nigeria in 2009 by a small team of builders
              frustrated by an industry that too often treated construction as an afterthought
              to design. We set out to build a company where architects and homeowners could
              trust that the drawings would be honoured, right down to the smallest detail.
            </p>
            <p>
              Today we remain a deliberately small operation, taking on a limited number of
              projects each year so every build receives the attention it deserves from our
              founding directors through to handover.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <ImageBlock
            image={{
              src: "/images/PHOTO-2026-03-12-19-01-13.jpg",
              alt: "Procad Construction team surveying a site",
              width: 960,
              height: 1280,
            }}
            aspect="portrait"
          />
        </Reveal>
      </div>
    </section>
  );
}
