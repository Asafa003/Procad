export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export type ProjectCategory =
  | "new-build"
  | "renovation"
  | "commercial"
  | "custom-home";

export interface Project {
  slug: string;
  title: string;
  location: string;
  category: ProjectCategory;
  year: number;
  scope: string;
  sizeSqm?: number;
  summary: string;
  description: string;
  heroImage: ProjectImage;
  gallery: ProjectImage[];
  featured?: boolean;
  relatedServiceSlugs?: string[];
}
