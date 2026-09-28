import { PageHero } from "@/components/ui/PageHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { OfficeDetails } from "@/components/contact/OfficeDetails";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Get in touch with Procad Construction to discuss your next new home, renovation or addition.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your project."
        description="Fill out the form below or reach out directly — we respond to every enquiry within one business day. For a detailed brief, use Request a quote."
      />
      <section className="section-padding">
        <div className="container-procad grid grid-cols-1 gap-16 lg:grid-cols-[2fr_1fr]">
          <ContactForm />
          <OfficeDetails />
        </div>
      </section>
    </>
  );
}
