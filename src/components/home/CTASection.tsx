import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";

interface CTASectionProps {
  eyebrow?: string;
  title: string;
  description?: string;
  buttonLabel?: string;
  buttonHref?: string;
}

export function CTASection({
  eyebrow = "Start your project",
  title,
  description,
  buttonLabel = "Request a quote",
  buttonHref = "/request-a-quote",
}: CTASectionProps) {
  return (
    <section className="section-padding">
      <div className="container-procad text-center">
        <Reveal>
          {eyebrow && <p className="label-eyebrow mb-6">{eyebrow}</p>}
          <h2 className="font-display mx-auto max-w-2xl text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mx-auto mt-4 max-w-xl text-base text-secondary md:text-lg">
              {description}
            </p>
          )}
          <div className="mt-8 flex justify-center">
            <Button href={buttonHref} showArrow>
              {buttonLabel}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
