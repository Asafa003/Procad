import { Reveal } from "@/components/motion/Reveal";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumb?: { label: string; href?: string }[];
}

export function PageHero({ eyebrow, title, description, breadcrumb }: PageHeroProps) {
  return (
    <section className="border-b border-border pb-14 pt-36 md:pt-44">
      <div className="container-procad">
        {breadcrumb && <div className="mb-6">
          <Breadcrumb items={breadcrumb} />
        </div>}
        <Reveal>
          {eyebrow && <p className="label-eyebrow mb-5">{eyebrow}</p>}
          <h1 className="font-display max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-xl text-base leading-relaxed text-secondary md:text-lg">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
