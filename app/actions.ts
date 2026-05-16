"use server"

import { z } from "zod"

const RequestSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email."),
  phone: z.string().min(6, "Please enter a valid phone number."),
  serviceType: z.string().min(1, "Please select a service type."),
  problem: z.string().min(10, "Please describe your issue (10+ characters)."),
  location: z.string().min(2, "Please share your location."),
})

export type ServiceRequestState = {
  ok: boolean
  message: string
  errors?: Partial<Record<keyof z.infer<typeof RequestSchema>, string>>
}

export async function submitServiceRequest(
  _prev: ServiceRequestState | null,
  formData: FormData,
): Promise<ServiceRequestState> {
  const data = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    serviceType: String(formData.get("serviceType") ?? ""),
    problem: String(formData.get("problem") ?? ""),
    location: String(formData.get("location") ?? ""),
  }

  const parsed = RequestSchema.safeParse(data)
  if (!parsed.success) {
    const errors: ServiceRequestState["errors"] = {}
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof typeof data
      if (!errors[key]) errors[key] = issue.message
    }
    return {
      ok: false,
      message: "Please fix the errors below and try again.",
      errors,
    }
  }

  // Simulate sending email / persisting request.
  // In production, integrate with a transactional email API or database here.
  await new Promise((r) => setTimeout(r, 900))

  console.log("[v0] New service request:", parsed.data)

  return {
    ok: true,
    message: `Thanks ${parsed.data.name.split(" ")[0]}! We received your request and will reach out within 1 business hour.`,
  }
}
