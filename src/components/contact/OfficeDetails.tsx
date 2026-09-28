import { company } from "@/data/company";
import { TextLink } from "@/components/ui/TextLink";
import { Button } from "@/components/ui/Button";

export function OfficeDetails({ showQuoteLink = true }: { showQuoteLink?: boolean }) {
  return (
    <div className="space-y-10">
      <div>
        <p className="label-eyebrow mb-3">Our studio</p>
        <p className="text-base leading-relaxed text-foreground">
          {company.address.line1}
          <br />
          {company.address.suburb} {company.address.state} {company.address.postcode}
        </p>
      </div>
      <div>
        <p className="label-eyebrow mb-3">Phone</p>
        <TextLink href={`tel:${company.phone}`} className="text-base text-foreground hover:text-accent">
          {company.phoneDisplay}
        </TextLink>
      </div>
      <div>
        <p className="label-eyebrow mb-3">Email</p>
        <TextLink href={`mailto:${company.email}`} className="text-base text-foreground hover:text-accent">
          {company.email}
        </TextLink>
      </div>
      <div>
        <p className="label-eyebrow mb-3">Licence</p>
        <p className="text-base text-foreground">{company.licenseNumber}</p>
      </div>
      {showQuoteLink && (
        <Button href="/request-a-quote" variant="secondary" showArrow>
          Request a quote
        </Button>
      )}
    </div>
  );
}
