import { z } from "zod";

export const checkoutSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit Indian phone number"),
  address: z.string().min(6, "Please provide complete street address"),
  city: z.string().min(2, "Please enter city"),
  state: z.string().min(2, "Please select or enter state"),
  pincode: z.string().regex(/^\d{6}$/, "Pincode must be 6 digits"),
  paymentMethod: z.enum(["cod", "upi", "card"], {
    message: "Please select a payment method",
  }),
});

export type CheckoutFormData = z.infer<typeof checkoutSchema>;

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Subject should be at least 3 characters"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export type NewsletterFormData = z.infer<typeof newsletterSchema>;
