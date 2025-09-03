import { z } from "zod";

export const createCourseSchema = z.object({
  title: z.string().min(1, "title is required"),
  description: z.string().min(1, "description is required"),
  image: z.string().url("image must be a valid URL").optional(),
  createdBy: z.string().min(1, "creator id is required"), // لاحقاً بناخده من JWT
});

export const updateCourseSchema = z.object({
  title: z.string().min(1).optional(),
  description: z.string().min(1).optional(),
  image: z.string().url().optional(),
}).refine((data) => Object.keys(data).length > 0, {
  message: "at least one field must be provided",
});

export const idParamSchema = z.object({
  id: z.string().min(1, "id is required"),
});

export type CreateCourseDTO = z.infer<typeof createCourseSchema>;
export type UpdateCourseDTO = z.infer<typeof updateCourseSchema>;
export type IdParamDTO = z.infer<typeof idParamSchema>;
