import { deliverEnquiry, isHoneypotFilled, validateEnquiry, type EnquiryIntent, type EnquiryPayload } from "@/lib/enquiry";

// Best-effort, per-instance rate limit. Serverless functions can scale to
// multiple instances, so this is a lightweight deterrent against casual
// abuse/spam bursts, not a guarantee — use Upstash/Vercel KV for durable,
// cross-instance rate limiting in production if this endpoint is targeted.
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const requestLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (requestLog.get(ip) ?? []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS,
  );

  if (timestamps.length >= RATE_LIMIT_MAX_REQUESTS) {
    requestLog.set(ip, timestamps);
    return true;
  }

  timestamps.push(now);
  requestLog.set(ip, timestamps);
  return false;
}

function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  return forwardedFor?.split(",")[0]?.trim() || "unknown";
}

function asString(value: unknown) {
  return typeof value === "string" ? value : "";
}

function parsePayload(body: unknown): EnquiryPayload | null {
  if (!body || typeof body !== "object") return null;
  const data = body as Record<string, unknown>;
  const intent = data.intent;
  if (intent !== "contact" && intent !== "quote") return null;

  return {
    intent: intent as EnquiryIntent,
    name: asString(data.name),
    email: asString(data.email),
    phone: asString(data.phone),
    projectType: asString(data.projectType),
    location: asString(data.location),
    estimatedBudget: asString(data.estimatedBudget),
    description: asString(data.description),
    preferredContactMethod: asString(data.preferredContactMethod),
    website: asString(data.website),
  };
}

export async function POST(request: Request) {
  if (isRateLimited(getClientIp(request))) {
    return Response.json(
      { ok: false, error: "Too many requests. Please try again shortly." },
      { status: 429 },
    );
  }

  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const payload = parsePayload(json);
  if (!payload) {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  if (isHoneypotFilled(payload.website)) {
    return Response.json({ ok: true });
  }

  const errors = validateEnquiry(payload);
  if (Object.keys(errors).length > 0) {
    return Response.json({ ok: false, errors }, { status: 422 });
  }

  try {
    await deliverEnquiry(payload);
    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false, error: "Unable to send your enquiry right now." }, { status: 502 });
  }
}
