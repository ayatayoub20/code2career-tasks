import { z } from "zod";
export declare const createCourseSchema: z.ZodObject<{
    title: z.ZodString;
    description: z.ZodString;
    image: z.ZodOptional<z.ZodString>;
    createdBy: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
    description: string;
    createdBy: string;
    image?: string | undefined;
}, {
    title: string;
    description: string;
    createdBy: string;
    image?: string | undefined;
}>;
export declare const updateCourseSchema: z.ZodEffects<z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    title?: string | undefined;
    description?: string | undefined;
    image?: string | undefined;
}, {
    title?: string | undefined;
    description?: string | undefined;
    image?: string | undefined;
}>, {
    title?: string | undefined;
    description?: string | undefined;
    image?: string | undefined;
}, {
    title?: string | undefined;
    description?: string | undefined;
    image?: string | undefined;
}>;
export declare const idParamSchema: z.ZodObject<{
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
export type CreateCourseDTO = z.infer<typeof createCourseSchema>;
export type UpdateCourseDTO = z.infer<typeof updateCourseSchema>;
export type IdParamDTO = z.infer<typeof idParamSchema>;
//# sourceMappingURL=course.zod.d.ts.map