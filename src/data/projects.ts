import type { Project } from "@/types/project";

const img = (filename: string, alt: string, width: number, height: number) => ({
  src: `/images/${encodeURIComponent(filename)}`,
  alt,
  width,
  height,
});

export const projects: Project[] = [
  {
    slug: "netherby-residence",
    title: "Netherby Residence",
    location: "Lagos, Nigeria",
    category: "new-build",
    year: 2024,
    scope: "Design & Construct",
    sizeSqm: 412,
    summary:
      "A single-storey family home built around a series of sunken courtyards and deep eaves.",
    description:
      "Set on a gently sloping block, Netherby Residence steps down through a sequence of living spaces framed by full-height glazing and board-formed concrete. Natural materials — spotted gum, limewashed brick and stone — were chosen to weather gracefully, while a restrained material palette keeps the focus on light and landscape.",
    heroImage: img(
      "PHOTO-2026-03-14-19-15-15.jpg",
      "Netherby Residence – street facade with patterned garage screens",
      1280,
      960,
    ),
    gallery: [
      img(
        "PHOTO-2026-03-14-19-45-29.jpg",
        "Netherby Residence – living room with recessed ceiling lighting",
        1920,
        2560,
      ),
      img(
        "PHOTO-2026-03-14-19-46-33.jpg",
        "Netherby Residence – pool terrace at night",
        1920,
        2560,
      ),
      img(
        "PHOTO-2026-03-14-19-45-38.jpg",
        "Netherby Residence – glass wardrobe joinery",
        1920,
        2560,
      ),
      img(
        "PHOTO-2026-03-14-19-45-02.jpg",
        "Netherby Residence – marble bathroom",
        1920,
        2560,
      ),
    ],
    featured: true,
    relatedServiceSlugs: ["new-home-construction", "custom-home-design-build"],
  },
  {
    slug: "glenside-house",
    title: "Glenside House",
    location: "Lagos, Nigeria",
    category: "renovation",
    year: 2023,
    scope: "Renovation & Addition",
    sizeSqm: 268,
    summary:
      "A heritage villa reworked with a considered rear addition that opens the home to its garden.",
    description:
      "The brief called for a sensitive addition that respected the original 1910s villa while delivering a light-filled family zone at the rear. A restrained material change — from face brick to standing-seam zinc — marks the transition between old and new without competing with the heritage streetscape.",
    heroImage: img(
      "0d6ea053-91df-45c5-8777-76af17225b9d.JPG",
      "Glenside House – proposed street elevation",
      1280,
      846,
    ),
    gallery: [
      img(
        "PHOTO-2026-03-14-19-45-04.jpg",
        "Glenside House – completed street frontage and gate",
        1280,
        960,
      ),
    ],
    featured: true,
    relatedServiceSlugs: ["renovations-additions"],
  },
  {
    slug: "toorak-gardens-residence",
    title: "Toorak Gardens Residence",
    location: "Lagos, Nigeria",
    category: "custom-home",
    year: 2023,
    scope: "Custom Design & Build",
    sizeSqm: 486,
    summary:
      "A two-storey residence designed around an internal courtyard and north-facing pool terrace.",
    description:
      "Working closely with the owners' architect, our team delivered an exacting build featuring exposed structural steel, a cantilevered upper storey and a fully integrated smart-home system, all completed to a tight 14-month program.",
    heroImage: img(
      "PHOTO-2026-03-14-19-46-36.jpg",
      "Toorak Gardens Residence – corner entrance and street elevation",
      1280,
      960,
    ),
    gallery: [
      img(
        "PHOTO-2026-03-14-19-45-02 2.jpg",
        "Toorak Gardens Residence – street elevation with screened facade",
        1280,
        960,
      ),
      img(
        "PHOTO-2026-03-14-19-38-38.jpg",
        "Toorak Gardens Residence – rear elevation",
        1280,
        960,
      ),
    ],
    featured: true,
    relatedServiceSlugs: ["custom-home-design-build", "project-management"],
  },
  {
    slug: "springfield-house",
    title: "Springfield House",
    location: "Lagos, Nigeria",
    category: "new-build",
    year: 2022,
    scope: "Design & Construct",
    sizeSqm: 356,
    summary: "A concrete and timber home nestled into a densely treed hillside block.",
    description:
      "Springfield House negotiates a steep, tree-lined site with a split-level plan that minimises excavation and preserves the site's mature canopy. Deep verandahs and operable screens allow the home to be opened up or battened down through Nigeria's seasonal extremes.",
    heroImage: img(
      "PHOTO-2026-09-22-14-18-46.jpg",
      "Springfield House – timber-clad street elevation",
      960,
      1280,
    ),
    gallery: [
      img(
        "PHOTO-2026-09-22-14-18-48.jpg",
        "Springfield House – ensuite with dual vanity",
        960,
        1280,
      ),
    ],
    featured: true,
    relatedServiceSlugs: ["new-home-construction"],
  },
  {
    slug: "hazelwood-park-residence",
    title: "Hazelwood Park Residence",
    location: "Lagos, Nigeria",
    category: "renovation",
    year: 2022,
    scope: "Whole-Home Renovation",
    sizeSqm: 298,
    summary: "A comprehensive renovation reconfiguring a 1980s home for modern family life.",
    description:
      "Rather than demolish, we stripped this 1980s home back to its structural frame and rebuilt the interior around a new double-height void, reworking the floor plan entirely while retaining the original footprint and reducing the project's embodied carbon.",
    heroImage: img(
      "PHOTO-2026-07-23-09-33-30.jpg",
      "Hazelwood Park Residence – stair hall with LED treads",
      960,
      1280,
    ),
    gallery: [
      img(
        "PHOTO-2026-07-23-09-33-29.jpg",
        "Hazelwood Park Residence – ensuite with freestanding bath",
        960,
        1280,
      ),
    ],
    relatedServiceSlugs: ["renovations-additions"],
  },
  {
    slug: "st-georges-house",
    title: "St Georges House",
    location: "Lagos, Nigeria",
    category: "custom-home",
    year: 2021,
    scope: "Custom Design & Build",
    sizeSqm: 445,
    summary: "A brick and glass residence organised around a central entry courtyard.",
    description:
      "St Georges House is arranged as three linked pavilions around a central courtyard, each tuned to a different aspect and use. Handmade brick, blackbutt timber and honed concrete give the home a tactile, grounded presence within its established garden setting.",
    heroImage: img(
      "PHOTO-2026-03-14-19-46-37.jpg",
      "St Georges House – street elevation",
      1280,
      925,
    ),
    gallery: [],
    relatedServiceSlugs: ["custom-home-design-build", "project-management"],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  return { prev, next };
}

export function getRelatedProjects(slug: string, limit = 3) {
  const project = getProjectBySlug(slug);
  if (!project) return [];

  const serviceSet = new Set(project.relatedServiceSlugs ?? []);

  return projects
    .filter((candidate) => {
      if (candidate.slug === slug) return false;
      return (candidate.relatedServiceSlugs ?? []).some((service) => serviceSet.has(service));
    })
    .slice(0, limit);
}
