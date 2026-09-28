import { company } from "@/data/company";
import { SITE_URL } from "@/lib/constants";
import type { Service } from "@/types/service";

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * Combined Organization + LocalBusiness (GeneralContractor) schema for the
 * whole site. GeneralContractor is a LocalBusiness subtype in schema.org, so
 * one block satisfies both. Rendered once in the root layout.
 */
export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": `${SITE_URL}/#organization`,
    name: company.name,
    legalName: company.legalName,
    url: SITE_URL,
    telephone: company.phone,
    email: company.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.line1,
      addressLocality: company.address.suburb,
      addressRegion: company.address.state,
      postalCode: company.address.postcode,
      addressCountry: "AU",
    },
    areaServed: "Lagos, Nigeria",
    sameAs: company.social.map((s) => s.url),
  };

  return <JsonLd data={data} />;
}

export function ServiceJsonLd({ service }: { service: Service }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/services/${service.slug}#service`,
    name: service.title,
    description: service.summary,
    serviceType: service.title,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: "Lagos, Nigeria",
  };

  return <JsonLd data={data} />;
}

interface BreadcrumbEntry {
  label: string;
  href?: string;
}

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbEntry[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ label: "Home", href: "/" }, ...items].map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href ? `${SITE_URL}${item.href}` : undefined,
    })),
  };

  return <JsonLd data={data} />;
}
