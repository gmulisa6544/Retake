"use client"

import { useActionState, useEffect, useRef, useState } from "react"
import {
  Send,
  Upload,
  CheckCircle2,
  MapPin,
  Mail,
  Phone,
  User,
  FileText,
  X,
} from "lucide-react"
import { toast } from "sonner"

import { submitServiceRequest, type ServiceRequestState } from "@/app/actions"
import { SectionHeader } from "@/components/site/section-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Spinner } from "@/components/ui/spinner"

const initialState: ServiceRequestState = { ok: false, message: "" }

const serviceOptions = [
  "Computer & Laptop Repair",
  "Home & On-Site Repair",
  "Pickup & Delivery",
  "Refurbished Device Purchase",
  "Web Development",
  "Other",
]

export function ServiceRequestForm() {
  const [state, formAction, pending] = useActionState(submitServiceRequest, initialState)
  const [serviceType, setServiceType] = useState("")
  const [imageName, setImageName] = useState<string | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (state?.ok) {
      toast.success("Request sent!", { description: state.message })
      formRef.current?.reset()
      setServiceType("")
      setImageName(null)
      setImagePreview(null)
    } else if (state?.message && !state.ok && state.errors) {
      toast.error("Form has errors", { description: state.message })
    }
  }, [state])

  const handleFile = (file: File | undefined) => {
    if (!file) return
    setImageName(file.name)
    const url = URL.createObjectURL(file)
    setImagePreview(url)
  }

  const clearFile = () => {
    setImageName(null)
    if (imagePreview) URL.revokeObjectURL(imagePreview)
    setImagePreview(null)
    if (fileInputRef.current) fileInputRef.current.value = ""
  }

  return (
    <section id="request" className="relative py-20 sm:py-28">
      <div
        className="absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(ellipse_at_top,_color-mix(in_oklab,var(--accent)_15%,transparent),transparent_70%)]"
        aria-hidden
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Service Request"
          title="Tell us what's broken — we'll handle the rest"
          description="Submit your request and a certified technician will reach out within the hour during business hours."
        />

        <div className="mt-12 grid lg:grid-cols-5 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-2 space-y-4">
            {[
              {
                icon: CheckCircle2,
                title: "Free diagnosis",
                desc: "We assess the issue at no cost before any work begins.",
              },
              {
                icon: CheckCircle2,
                title: "Transparent pricing",
                desc: "Approve a fixed quote before we touch your device.",
              },
              {
                icon: CheckCircle2,
                title: "90-day warranty",
                desc: "Every repair is backed by a 90-day workmanship warranty.",
              },
            ].map((b) => (
              <div
                key={b.title}
                className="flex gap-4 rounded-xl border border-border/80 glass p-4"
              >
                <b.icon className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                <div>
                  <div className="text-sm font-medium">{b.title}</div>
                  <div className="text-sm text-muted-foreground">{b.desc}</div>
                </div>
              </div>
            ))}
          </aside>

          {/* Form */}
          <div className="lg:col-span-3 relative">
            <div
              className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/30 via-accent/20 to-primary/30 blur-2xl opacity-50"
              aria-hidden
            />
            <form
              ref={formRef}
              action={formAction}
              className="relative rounded-2xl border border-border/80 glass p-6 sm:p-8 space-y-5"
            >
              {state?.ok && (
                <div className="flex items-start gap-3 rounded-lg border border-primary/40 bg-primary/10 p-4">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-medium text-foreground">
                      Request received
                    </div>
                    <div className="text-sm text-muted-foreground">{state.message}</div>
                  </div>
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-4">
                <FormField
                  label="Full name"
                  name="name"
                  icon={<User className="h-4 w-4" />}
                  placeholder="Jane Doe"
                  error={state?.errors?.name}
                />
                <FormField
                  label="Email"
                  name="email"
                  type="email"
                  icon={<Mail className="h-4 w-4" />}
                  placeholder="jane@example.com"
                  error={state?.errors?.email}
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <FormField
                  label="Phone"
                  name="phone"
                  type="tel"
                  icon={<Phone className="h-4 w-4" />}
                  placeholder="+1 (555) 123-4567"
                  error={state?.errors?.phone}
                />
                <div className="space-y-2">
                  <Label htmlFor="serviceType" className="text-sm">
                    Service type
                  </Label>
                  <Select
                    value={serviceType}
                    onValueChange={setServiceType}
                    name="serviceType"
                  >
                    <SelectTrigger
                      id="serviceType"
                      className="w-full bg-input/40 border-border/80"
                    >
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceOptions.map((s) => (
                        <SelectItem key={s} value={s}>
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {state?.errors?.serviceType && (
                    <p className="text-xs text-destructive">{state.errors.serviceType}</p>
                  )}
                </div>
              </div>

              <FormField
                label="Location"
                name="location"
                icon={<MapPin className="h-4 w-4" />}
                placeholder="City, address, or pin"
                error={state?.errors?.location}
              />

              <div className="space-y-2">
                <Label htmlFor="problem" className="text-sm inline-flex items-center gap-2">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  Describe the problem
                </Label>
                <Textarea
                  id="problem"
                  name="problem"
                  rows={4}
                  placeholder="Tell us what's happening — symptoms, error messages, when it started…"
                  className="bg-input/40 border-border/80 resize-none"
                />
                {state?.errors?.problem && (
                  <p className="text-xs text-destructive">{state.errors.problem}</p>
                )}
              </div>

              {/* File upload */}
              <div className="space-y-2">
                <Label className="text-sm">Optional: attach a photo</Label>
                <input
                  ref={fileInputRef}
                  id="device-photo"
                  type="file"
                  accept="image/*"
                  className="sr-only"
                  onChange={(e) => handleFile(e.target.files?.[0])}
                />
                {!imageName ? (
                  <label
                    htmlFor="device-photo"
                    className="flex cursor-pointer items-center justify-center gap-3 rounded-lg border border-dashed border-border/80 bg-input/20 px-4 py-6 text-sm text-muted-foreground hover:border-primary/60 hover:bg-primary/5 transition"
                  >
                    <Upload className="h-4 w-4" />
                    Click to upload an image of the device
                  </label>
                ) : (
                  <div className="flex items-center gap-3 rounded-lg border border-border/80 bg-input/40 p-3">
                    {imagePreview && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={imagePreview}
                        alt="Device preview"
                        className="h-12 w-12 rounded-md object-cover ring-1 ring-border"
                      />
                    )}
                    <div className="min-w-0 flex-1">
                      <div className="truncate text-sm">{imageName}</div>
                      <div className="text-xs text-muted-foreground">Ready to send</div>
                    </div>
                    <Button
                      type="button"
                      size="icon"
                      variant="ghost"
                      onClick={clearFile}
                      aria-label="Remove file"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>

              <Button
                type="submit"
                disabled={pending}
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-primary"
              >
                {pending ? (
                  <>
                    <Spinner className="size-4" />
                    Sending request…
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Request
                  </>
                )}
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                By submitting, you agree to be contacted about your service request.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function FormField({
  label,
  name,
  type = "text",
  icon,
  placeholder,
  error,
}: {
  label: string
  name: string
  type?: string
  icon?: React.ReactNode
  placeholder?: string
  error?: string
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={name} className="text-sm inline-flex items-center gap-2">
        {icon && <span className="text-muted-foreground">{icon}</span>}
        {label}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="bg-input/40 border-border/80"
      />
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  )
}
