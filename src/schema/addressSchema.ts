import z from "zod";

export const addressSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.email("Enter a valid email"),
  phone: z.string().regex(/^[0-9]{10}$/, "Phone number must be 10 digits"),
  pincode: z.string().regex(/^[0-9]{6}$/, "Pincode must be 6 digits"),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
});

export type AddressFormData = z.infer<typeof addressSchema>;
