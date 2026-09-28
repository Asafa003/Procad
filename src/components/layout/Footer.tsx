import { navigation } from "@/data/navigation";
import { company } from "@/data/company";
import { TextLink } from "@/components/ui/TextLink";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted">
      <div className="container-procad grid grid-cols-2 gap-10 py-16 md:grid-cols-4 md:py-20">
        <div className="col-span-2 md:col-span-1">
          <p className="font-display text-lg font-semibold tracking-tight">{company.name}</p>
          <p className="mt-4 text-sm leading-relaxed text-secondary">
            Licensed builder 
            <br />
            Designing and building premium homes across Nigeria .
          </p>
        </div>

        <div>
          <p className="label-eyebrow mb-4">Navigate</p>
          <ul className="space-y-3">
            {navigation.footer.map((item) => (
              <li key={item.href}>
                <TextLink href={item.href}>{item.label}</TextLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="label-eyebrow mb-4">Contact</p>
          <ul className="space-y-3 text-sm text-secondary">
            <li>
              {company.address.line1}
              <br />
              {company.address.suburb} {company.address.state} {company.address.postcode}
            </li>
            <li>
              <TextLink href={`tel:${company.phone}`}>{company.phoneDisplay}</TextLink>
            </li>
            <li>
              <TextLink href={`mailto:${company.email}`}>{company.email}</TextLink>
            </li>
          </ul>
        </div>

        <div>
          <p className="label-eyebrow mb-4">Follow</p>
          <ul className="space-y-3">
            {navigation.social.map((item) => (
              <li key={item.href}>
                <TextLink href={item.href} external>
                  {item.label}
                </TextLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-procad flex flex-col gap-2 py-6 text-xs text-secondary md:flex-row md:items-center md:justify-between">
          <span>&copy; {new Date().getFullYear()} {company.legalName}. All rights reserved.</span>
          <span>Site by Procad Construction</span>
        </div>
      </div>
    </footer>
  );
}
