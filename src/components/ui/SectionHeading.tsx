import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <Reveal>
        {eyebrow && <p className="label-eyebrow mb-4">{eyebrow}</p>}
        <h2 className="font-display text-3xl font-semibold leading-[1.15] tracking-tight text-foreground md:text-4xl lg:text-[2.75rem]">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-base leading-relaxed text-secondary md:text-lg">
            {description}
          </p>
        )}
      </Reveal>
    </div>
  );
}
