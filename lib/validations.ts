import { z } from "zod";

export const MoveSizeOptions = [
  "Few items / Single Room",
  "1 BHK",
  "1 BHK + Bike",
  "2 BHK",
  "2 BHK + Bike",
  "2 BHK + Bike + Car",
  "3 BHK",
  "3 BHK + Car + Bike",
  "4 BHK / Villa + Car + Bike",
  "Office / Commercial Shifting",
] as const;

export const quoteFormSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit Indian mobile number"),
  fromCity: z.string().min(2, "Please enter origin city/area"),
  toCity: z.string().min(2, "Please enter destination city/area"),
  moveSize: z.string().min(1, "Please select move size"),
  moveDate: z.string().optional(),
});

export type QuoteFormValues = z.infer<typeof quoteFormSchema>;

export const contactFormSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit Indian mobile number"),
  subject: z.string().min(3, "Please enter a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
