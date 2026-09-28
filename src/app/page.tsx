import { Hero } from "@/components/home/Hero";
import { IntroStatement } from "@/components/home/IntroStatement";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { Testimonial } from "@/components/home/Testimonial";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <IntroStatement />
      <FeaturedProjects />
      <ServicesOverview />
      <Testimonial />
      <CTASection
        title="Ready to start planning your next home?"
        description="Tell us about your site and vision — we'll be in touch to arrange an obligation-free consultation."
      />
    </>
  );
}
