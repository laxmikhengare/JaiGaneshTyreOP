import { z } from "zod";

export const leadSchema = z.object({
  kind: z.enum(["booking", "callback", "contact"]),
  branch: z.enum(["bibvewadi", "kondhwa"]).optional(),
  service: z.string().max(80).optional(),
  vehicleType: z.enum(["car", "bike", "suv", "commercial"]).optional(),
  vehicleModel: z.string().max(80).optional(),
  name: z.string().min(2, "Please enter your name").max(80),
  phone: z
    .string()
    .regex(/^(\+?91[\-\s]?)?[6-9]\d{9}$/, "Enter a valid 10-digit mobile number"),
  preferredSlot: z.string().max(60).optional(),
  message: z.string().max(800).optional(),
  source: z.string().max(120).optional(),
  // Cloudflare Turnstile token (optional when not configured)
  token: z.string().optional(),
});

export type LeadInput = z.infer<typeof leadSchema>;
