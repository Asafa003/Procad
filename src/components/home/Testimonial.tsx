import { testimonials } from "@/data/testimonials";
import { Reveal } from "@/components/motion/Reveal";

export function Testimonial() {
  const featured = testimonials[0];

  return (
    <section className="section-padding bg-primary text-background">
      <div className="container-procad">
        <Reveal>
          <blockquote className="mx-auto max-w-3xl text-center">
            <p className="font-display text-2xl font-medium leading-snug tracking-tight md:text-3xl lg:text-4xl">
              &ldquo;{featured.quote}&rdquo;
            </p>
            <footer className="label-eyebrow mt-8 text-background/70">
              {featured.author}
              {featured.location ? ` — ${featured.location}` : ""}
            </footer>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
