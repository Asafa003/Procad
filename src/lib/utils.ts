import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { ProjectCategory } from "@/types/project";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const PROJECT_CATEGORY_LABELS: Record<ProjectCategory, string> = {
  "new-build": "New build",
  renovation: "Renovation",
  commercial: "Commercial",
  "custom-home": "Custom home",
};
