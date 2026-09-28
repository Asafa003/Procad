export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface NavigationConfig {
  primary: NavItem[];
  footer: NavItem[];
  social: SocialLink[];
}
