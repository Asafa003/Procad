import type { Metadata } from "next";
import { SITE_URL } from "./constants";

interface BuildMetadataOptions {
  title: string;
  description: string;
  path?: string;
  image?: string;
}

export function buildMetadata({
  title,
  description,
  path = "/",
  image = "/images/PHOTO-2026-03-14-19-45-03.jpg",
}: BuildMetadataOptions): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: title,
      template: "%s | Procad Construction",
    },
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Procad Construction",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      locale: "en_AU",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
