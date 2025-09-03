"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.idParamSchema = exports.updateCourseSchema = exports.createCourseSchema = void 0;
const zod_1 = require("zod");
exports.createCourseSchema = zod_1.z.object({
    title: zod_1.z.string().min(1, "title is required"),
    description: zod_1.z.string().min(1, "description is required"),
    image: zod_1.z.string().url("image must be a valid URL").optional(),
    createdBy: zod_1.z.string().min(1, "creator id is required"), // لاحقاً بناخده من JWT
});
exports.updateCourseSchema = zod_1.z.object({
    title: zod_1.z.string().min(1).optional(),
    description: zod_1.z.string().min(1).optional(),
    image: zod_1.z.string().url().optional(),
}).refine((data) => Object.keys(data).length > 0, {
    message: "at least one field must be provided",
});
exports.idParamSchema = zod_1.z.object({
    id: zod_1.z.string().min(1, "id is required"),
});
//# sourceMappingURL=course.zod.js.map