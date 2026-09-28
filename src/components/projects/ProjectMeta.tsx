import type { Project } from "@/types/project";
import { PROJECT_CATEGORY_LABELS } from "@/lib/utils";

const fields: { label: string; value: (p: Project) => string | undefined }[] = [
  { label: "Location", value: (p) => p.location },
  { label: "Category", value: (p) => PROJECT_CATEGORY_LABELS[p.category] },
  { label: "Scope", value: (p) => p.scope },
  { label: "Year", value: (p) => String(p.year) },
  { label: "Size", value: (p) => (p.sizeSqm ? `${p.sizeSqm} m\u00b2` : undefined) },
];

export function ProjectMeta({ project }: { project: Project }) {
  return (
    <dl className="grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-1">
      {fields.map(({ label, value }) => {
        const v = value(project);
        if (!v) return null;
        return (
          <div key={label}>
            <dt className="label-eyebrow mb-1">{label}</dt>
            <dd className="text-base text-foreground">{v}</dd>
          </div>
        );
      })}
    </dl>
  );
}
