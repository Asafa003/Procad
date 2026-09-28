import Link from "next/link";
import { Home, Hammer, Ruler, ClipboardList, ArrowRight, type LucideIcon } from "lucide-react";
import type { Service } from "@/types/service";

const icons: Record<string, LucideIcon> = {
  home: Home,
  hammer: Hammer,
  ruler: Ruler,
  clipboard: ClipboardList,
};

export function ServiceCard({ service }: { service: Service }) {
  const Icon = icons[service.icon] ?? Home;

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex h-full flex-col justify-between gap-10 p-8"
    >
      <Icon className="size-7 text-accent" aria-hidden />
      <div>
        <h3 className="font-display text-lg font-medium tracking-tight text-foreground">
          {service.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-secondary">{service.summary}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-accent">
          Learn more
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" aria-hidden />
        </span>
      </div>
    </Link>
  );
}
