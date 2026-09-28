import { PageHero } from "@/components/ui/PageHero";
import { CompanyStory } from "@/components/about/CompanyStory";
import { ValuesList } from "@/components/about/ValuesList";
import { Approach } from "@/components/about/Approach";
import { Capabilities } from "@/components/about/Capabilities";
import { StatBlock } from "@/components/about/StatBlock";
import { CTASection } from "@/components/home/CTASection";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About",
  description:
    "Procad Construction is a Nigeria-based building company delivering considered new homes, renovations and additions since 2009.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A small team, building considered homes."
        description="We've spent over fifteen years refining how we design, document and build, so every project runs smoothly from the first meeting to the final handover."
      />
      <CompanyStory />
      <StatBlock />
      <ValuesList />
      <Approach />
      <Capabilities />
      <CTASection
        eyebrow="Work with us"
        title="Interested in building with Procad?"
        description="We take on a limited number of projects each year. Get in touch to discuss your site and timeline."
        buttonLabel="Request a quote"
        buttonHref="/request-a-quote"
      />
    </>
  );
}
