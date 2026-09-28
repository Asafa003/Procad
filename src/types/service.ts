import type { ProjectImage } from "./project";

export interface ServiceStep {
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  title: string;
  summary: string;
  description: string;
  icon: string;
  heroImage?: ProjectImage;
  benefits?: string[];
  process?: ServiceStep[];
  relatedProjectSlugs?: string[];
  relatedServiceSlugs?: string[];
}
