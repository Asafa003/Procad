import type { CompanyInfo } from "@/types/company";

export const company: CompanyInfo = {
  name: "Procad Construction",
  legalName: "Procad Construction Pty Ltd",
  licenseNumber: "BLD 274 519",
  foundedYear: 2009,
  address: {
    line1: "142 Glen Osmond Road",
    suburb: "Parkside",
    state: "SA",
    postcode: "5063",
  },
  phone: "+2348024302868",
  phoneDisplay: "08024302868",
  email: "studio@procadconstruction.com.au",
  social: [
    { platform: "Instagram", url: "https://www.instagram.com/tijanimayowa?stkn=MWoydzY1OG5uNXhwYw==" },
    // { platform: "Houzz", url: "https://www.houzz.com/" },
    // { platform: "LinkedIn", url: "https://www.linkedin.com/" },
  ],
};
