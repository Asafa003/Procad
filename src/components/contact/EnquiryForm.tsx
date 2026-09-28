"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import {
  BUDGET_RANGES,
  CONTACT_METHODS,
  PROJECT_TYPES,
  validateEnquiry,
  type EnquiryFieldErrors,
  type EnquiryIntent,
  type EnquiryPayload,
} from "@/lib/enquiry";

const fieldClasses =
  "peer w-full border-b bg-transparent py-3 text-base text-foreground placeholder:text-transparent focus:border-primary focus:outline-none";

const labelClasses =
  "pointer-events-none absolute left-0 top-3 text-base text-secondary transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-accent peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:text-xs";

type Status = "idle" | "submitting" | "success" | "error";

interface EnquiryFormProps {
  intent: EnquiryIntent;
  submitLabel?: string;
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-2 text-sm text-red-700" role="alert">
      {message}
    </p>
  );
}

export function EnquiryForm({ intent, submitLabel }: EnquiryFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<EnquiryFieldErrors>({});
  const [formError, setFormError] = useState<string | null>(null);
  const isQuote = intent === "quote";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const payload: EnquiryPayload = {
      intent,
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      projectType: String(data.get("projectType") ?? ""),
      location: String(data.get("location") ?? ""),
      estimatedBudget: String(data.get("estimatedBudget") ?? ""),
      description: String(data.get("description") ?? ""),
      preferredContactMethod: String(data.get("preferredContactMethod") ?? ""),
      website: String(data.get("website") ?? ""),
    };

    const nextErrors = validateEnquiry(payload);
    setErrors(nextErrors);
    setFormError(null);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as {
        ok: boolean;
        errors?: EnquiryFieldErrors;
        error?: string;
      };

      if (response.status === 422 && result.errors) {
        setErrors(result.errors);
        setStatus("idle");
        return;
      }

      if (!response.ok || !result.ok) {
        throw new Error(result.error ?? "Unable to send");
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setFormError("Something went wrong — please try again or call us directly.");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-border p-8" role="status">
        <p className="font-display text-xl font-medium text-foreground">Thank you.</p>
        <p className="mt-2 text-sm text-secondary">
          We&apos;ve received your {isQuote ? "quote request" : "message"} and will be in touch
          within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="relative space-y-8">
      <div className="hidden" aria-hidden="true">
        <label htmlFor={`${intent}-website`}>Website</label>
        <input
          id={`${intent}-website`}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div className="relative">
          <input
            id={`${intent}-name`}
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder="Name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? `${intent}-name-error` : undefined}
            className={cn(fieldClasses, errors.name ? "border-red-700" : "border-border")}
          />
          <label htmlFor={`${intent}-name`} className={labelClasses}>
            Name
          </label>
          <FieldError id={`${intent}-name-error`} message={errors.name} />
        </div>
        <div className="relative">
          <input
            id={`${intent}-email`}
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="Email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? `${intent}-email-error` : undefined}
            className={cn(fieldClasses, errors.email ? "border-red-700" : "border-border")}
          />
          <label htmlFor={`${intent}-email`} className={labelClasses}>
            Email
          </label>
          <FieldError id={`${intent}-email-error`} message={errors.email} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div className="relative">
          <input
            id={`${intent}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            required={isQuote}
            placeholder="Phone"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? `${intent}-phone-error` : undefined}
            className={cn(fieldClasses, errors.phone ? "border-red-700" : "border-border")}
          />
          <label htmlFor={`${intent}-phone`} className={labelClasses}>
            Phone{isQuote ? "" : " (optional)"}
          </label>
          <FieldError id={`${intent}-phone-error`} message={errors.phone} />
        </div>
        <div className="relative">
          <input
            id={`${intent}-location`}
            name="location"
            type="text"
            autoComplete="address-level2"
            required={isQuote}
            placeholder="Location"
            aria-invalid={Boolean(errors.location)}
            aria-describedby={errors.location ? `${intent}-location-error` : undefined}
            className={cn(fieldClasses, errors.location ? "border-red-700" : "border-border")}
          />
          <label htmlFor={`${intent}-location`} className={labelClasses}>
            Suburb / location{isQuote ? "" : " (optional)"}
          </label>
          <FieldError id={`${intent}-location-error`} message={errors.location} />
        </div>
      </div>

      {isQuote && (
        <>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="relative">
              <select
                id={`${intent}-projectType`}
                name="projectType"
                required
                defaultValue=""
                aria-invalid={Boolean(errors.projectType)}
                aria-describedby={errors.projectType ? `${intent}-projectType-error` : undefined}
                className={cn(
                  "w-full appearance-none border-b bg-transparent py-3 text-base text-foreground focus:border-primary focus:outline-none",
                  errors.projectType ? "border-red-700" : "border-border",
                )}
              >
                <option value="" disabled>
                  Select a project type
                </option>
                {PROJECT_TYPES.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <label htmlFor={`${intent}-projectType`} className="sr-only">
                Project type
              </label>
              <FieldError id={`${intent}-projectType-error`} message={errors.projectType} />
            </div>
            <div className="relative">
              <select
                id={`${intent}-estimatedBudget`}
                name="estimatedBudget"
                required
                defaultValue=""
                aria-invalid={Boolean(errors.estimatedBudget)}
                aria-describedby={
                  errors.estimatedBudget ? `${intent}-estimatedBudget-error` : undefined
                }
                className={cn(
                  "w-full appearance-none border-b bg-transparent py-3 text-base text-foreground focus:border-primary focus:outline-none",
                  errors.estimatedBudget ? "border-red-700" : "border-border",
                )}
              >
                <option value="" disabled>
                  Estimated budget
                </option>
                {BUDGET_RANGES.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <label htmlFor={`${intent}-estimatedBudget`} className="sr-only">
                Estimated budget
              </label>
              <FieldError id={`${intent}-estimatedBudget-error`} message={errors.estimatedBudget} />
            </div>
          </div>

          <fieldset>
            <legend className="mb-4 text-sm text-secondary">Preferred contact method</legend>
            <div className="flex flex-wrap gap-6">
              {CONTACT_METHODS.map((option) => (
                <label key={option.value} className="flex items-center gap-2 text-sm text-foreground">
                  <input
                    type="radio"
                    name="preferredContactMethod"
                    value={option.value}
                    className="size-4 accent-accent"
                  />
                  {option.label}
                </label>
              ))}
            </div>
            <FieldError
              id={`${intent}-preferredContactMethod-error`}
              message={errors.preferredContactMethod}
            />
          </fieldset>
        </>
      )}

      <div className="relative">
        <textarea
          id={`${intent}-description`}
          name="description"
          required
          rows={5}
          placeholder="Project description"
          aria-invalid={Boolean(errors.description)}
          aria-describedby={errors.description ? `${intent}-description-error` : undefined}
          className={cn(
            fieldClasses,
            "resize-none",
            errors.description ? "border-red-700" : "border-border",
          )}
        />
        <label htmlFor={`${intent}-description`} className={labelClasses}>
          Project description
        </label>
        <FieldError id={`${intent}-description-error`} message={errors.description} />
      </div>

      <Button type="submit" disabled={status === "submitting"} showArrow>
        {status === "submitting" ? "Sending…" : (submitLabel ?? (isQuote ? "Request a quote" : "Send message"))}
      </Button>

      {formError && (
        <p className="text-sm text-red-700" role="alert">
          {formError}
        </p>
      )}
    </form>
  );
}
