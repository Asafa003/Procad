export type EnquiryIntent = "contact" | "quote";

export const PROJECT_TYPES = [
  { value: "new-home", label: "New home" },
  { value: "renovation", label: "Renovation or addition" },
  { value: "custom-home", label: "Custom design & build" },
  { value: "project-management", label: "Project management" },
  { value: "other", label: "Other" },
] as const;

export const BUDGET_RANGES = [
  { value: "under-500k", label: "Under $500k" },
  { value: "500k-1m", label: "$500k – $1m" },
  { value: "1m-2m", label: "$1m – $2m" },
  { value: "2m-plus", label: "$2m+" },
  { value: "undecided", label: "Not sure yet" },
] as const;

export const CONTACT_METHODS = [
  { value: "email", label: "Email" },
  { value: "phone", label: "Phone" },
  { value: "either", label: "Either" },
] as const;

export interface EnquiryPayload {
  intent: EnquiryIntent;
  name: string;
  email: string;
  phone: string;
  projectType: string;
  location: string;
  estimatedBudget: string;
  description: string;
  preferredContactMethod: string;
  website?: string;
}

export type EnquiryFieldErrors = Partial<Record<keyof EnquiryPayload, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function required(value: string, message: string) {
  return value.trim() ? undefined : message;
}

export function validateEnquiry(input: EnquiryPayload): EnquiryFieldErrors {
  const errors: EnquiryFieldErrors = {};

  const name = required(input.name, "Please enter your name.");
  if (name) errors.name = name;

  if (!input.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!EMAIL_PATTERN.test(input.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  const description = required(input.description, "Please tell us about your project.");
  if (description) errors.description = description;

  if (input.intent === "quote") {
    const phone = required(input.phone, "Please enter a phone number.");
    if (phone) errors.phone = phone;
    const projectType = required(input.projectType, "Please select a project type.");
    if (projectType) errors.projectType = projectType;
    const location = required(input.location, "Please enter a suburb or location.");
    if (location) errors.location = location;
    const budget = required(input.estimatedBudget, "Please select an estimated budget.");
    if (budget) errors.estimatedBudget = budget;
    const method = required(input.preferredContactMethod, "Please choose a preferred contact method.");
    if (method) errors.preferredContactMethod = method;
  }

  return errors;
}

export function isHoneypotFilled(website?: string) {
  return Boolean(website && website.trim());
}

export async function deliverEnquiry(payload: EnquiryPayload) {
  const webhook = process.env.ENQUIRY_WEBHOOK_URL;
  if (!webhook) return;

  const response = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      intent: payload.intent,
      name: payload.name.trim(),
      email: payload.email.trim(),
      phone: payload.phone.trim(),
      projectType: payload.projectType,
      location: payload.location.trim(),
      estimatedBudget: payload.estimatedBudget,
      description: payload.description.trim(),
      preferredContactMethod: payload.preferredContactMethod,
    }),
  });

  if (!response.ok) {
    throw new Error("Enquiry delivery failed");
  }
}
