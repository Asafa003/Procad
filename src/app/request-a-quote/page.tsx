import { PageHero } from "@/components/ui/PageHero";
import { EnquiryForm } from "@/components/contact/EnquiryForm";
import { OfficeDetails } from "@/components/contact/OfficeDetails";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Request a quote",
  description:
    "Request a quote from Procad Construction for a new home, renovation, custom build or project management.",
  path: "/request-a-quote",
});

export default function RequestAQuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Request a quote"
        title="Tell us about the home you want to build."
        description="Share a few details and we'll come back with next steps, typically within one business day."
      />
      <section className="section-padding">
        <div className="container-procad grid grid-cols-1 gap-16 lg:grid-cols-[2fr_1fr]">
          <EnquiryForm intent="quote" />
          <OfficeDetails showQuoteLink={false} />
        </div>
      </section>
    </>
  );
}
