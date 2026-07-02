import { z } from "zod";

export const changePasswordSchema = z
  .object({
    currentPassword: z.string().min(1, "Current password is required"),

    newPassword: z
      .string()
      .min(8, "Password must contain at least 8 characters.")
      .regex(/[A-Z]/, "Password must contain one uppercase letter.")
      .regex(/\d/, "Password must contain one number.")
      .regex(/[^A-Za-z0-9]/, "Password must contain one special character."),

    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match.",
  });
