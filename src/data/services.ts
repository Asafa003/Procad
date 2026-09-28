import type { Service } from "@/types/service";
import { getProjectBySlug } from "@/data/projects";

export const services: Service[] = [
  {
    slug: "new-home-construction",
    title: "New Home Construction",
    summary:
      "End-to-end delivery of architecturally designed new homes, from council approval to handover.",
    description:
      "We partner with architects and designers from the earliest planning stages through to final handover, managing every trade and detail so your new home is delivered on program, on budget and to an exacting standard of finish.",
    icon: "home",
    heroImage: getProjectBySlug("netherby-residence")?.heroImage,
    benefits: [
      "Single point of accountability from contract to handover",
      "Weekly client reporting and dedicated site supervision",
      "Quality control at every trade package",
      "Workmanship warranty after completion",
    ],
    process: [
      {
        title: "Pre-construction",
        description:
          "Detailed estimating, value engineering and council/planning coordination before a single trade sets foot on site.",
      },
      {
        title: "Construction",
        description:
          "Dedicated site supervision, weekly client updates and rigorous quality control at every stage of the build.",
      },
      {
        title: "Handover",
        description:
          "A thorough defects inspection and handover walkthrough, backed by our workmanship warranty.",
      },
    ],
    relatedProjectSlugs: ["netherby-residence", "springfield-house"],
    relatedServiceSlugs: ["custom-home-design-build", "project-management"],
  },
  {
    slug: "renovations-additions",
    title: "Renovations & Additions",
    summary:
      "Considered renovations and additions that respect what's original while transforming how a home works.",
    description:
      "From heritage-sensitive additions to whole-home renovations, we specialise in the technical and logistical challenges of building onto and within existing structures — often while our clients continue living on site.",
    icon: "hammer",
    heroImage: getProjectBySlug("glenside-house")?.heroImage,
    benefits: [
      "Heritage-sensitive detailing and council coordination",
      "Staged construction to keep homes liveable where required",
      "Seamless junctions between existing and new fabric",
      "Clear sequencing and cost control on occupied sites",
    ],
    process: [
      {
        title: "Assessment",
        description:
          "Structural and heritage assessment to understand what can be retained, adapted or removed.",
      },
      {
        title: "Staged construction",
        description:
          "Careful sequencing to minimise disruption, with clear communication throughout every stage.",
      },
      {
        title: "Finishing",
        description:
          "Seamless integration of new and existing fabric, finished to match or intentionally contrast.",
      },
    ],
    relatedProjectSlugs: ["glenside-house", "hazelwood-park-residence"],
    relatedServiceSlugs: ["new-home-construction", "project-management"],
  },
  {
    slug: "custom-home-design-build",
    title: "Custom Home Design & Build",
    summary:
      "A single point of accountability for architecturally distinctive, highly detailed custom homes.",
    description:
      "For clients seeking a genuinely bespoke home, our design & build service brings architects, engineers and our construction team together from day one, reducing risk and keeping the original design intent intact through to completion.",
    icon: "ruler",
    heroImage: getProjectBySlug("toorak-gardens-residence")?.heroImage,
    benefits: [
      "Architect and builder aligned from concept",
      "Procurement of long-lead items locked in early",
      "Detail-driven site quality assurance",
      "Reduced variation risk through early collaboration",
    ],
    process: [
      {
        title: "Design collaboration",
        description:
          "Working alongside your architect from concept through to construction documentation.",
      },
      {
        title: "Detailed programming",
        description:
          "Long-lead item procurement and trade scheduling to protect complex design details.",
      },
      {
        title: "Precision delivery",
        description: "On-site quality assurance matched to the ambition of the drawings.",
      },
    ],
    relatedProjectSlugs: ["toorak-gardens-residence", "st-georges-house"],
    relatedServiceSlugs: ["new-home-construction", "project-management"],
  },
  {
    slug: "project-management",
    title: "Project Management",
    summary:
      "Independent project management for owners building directly with multiple consultants and trades.",
    description:
      "For clients who want the benefits of a managed build without a traditional head contractor, we offer standalone project management — programming, budgeting and coordinating trades on your behalf.",
    icon: "clipboard",
    heroImage: getProjectBySlug("springfield-house")?.heroImage,
    benefits: [
      "Independent programming and budget control",
      "Trade tendering and contract administration",
      "On-site coordination without a head-contract markup",
      "Clear reporting for owners and consultants",
    ],
    relatedProjectSlugs: ["toorak-gardens-residence", "st-georges-house"],
    relatedServiceSlugs: ["custom-home-design-build", "renovations-additions"],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getRelatedServices(slug: string) {
  const service = getServiceBySlug(slug);
  if (!service?.relatedServiceSlugs) return [];
  return service.relatedServiceSlugs
    .map((relatedSlug) => getServiceBySlug(relatedSlug))
    .filter((item): item is Service => Boolean(item));
}
