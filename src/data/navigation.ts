import type { NavigationConfig } from "@/types/navigation";

export const navigation: NavigationConfig = {
  primary: [
    { label: "Projects", href: "/projects" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  footer: [
    { label: "Projects", href: "/projects" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Request a quote", href: "/request-a-quote" },
  ],
  social: [
    { label: "Instagram", href: "https://www.instagram.com/", icon: "instagram" },
    { label: "Houzz", href: "https://www.houzz.com/", icon: "houzz" },
    { label: "LinkedIn", href: "https://www.linkedin.com/", icon: "linkedin" },
  ],
};
