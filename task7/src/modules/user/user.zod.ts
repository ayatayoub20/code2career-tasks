import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string().min(1, "name is required"),
  email: z.string().email("invalid email"),
  password: z.string().min(4, "password too short"),
});

export const updateUserSchema = z.object({
  name: z.string().min(1).optional(),
  email: z.string().email().optional(),
  password: z.string().min(4).optional(),
}).refine(data => Object.keys(data).length > 0, {
  message: "at least one field must be provided",
});

export const idParamSchema = z.object({
  id: z.string().min(1, "id is required"),
});
