export interface CompanyAddress {
  line1: string;
  line2?: string;
  suburb: string;
  state: string;
  postcode: string;
}

export interface CompanySocialLink {
  platform: string;
  url: string;
}

export interface CompanyInfo {
  name: string;
  legalName?: string;
  licenseNumber: string;
  foundedYear?: number;
  address: CompanyAddress;
  phone: string;
  phoneDisplay: string;
  email: string;
  social: CompanySocialLink[];
}
