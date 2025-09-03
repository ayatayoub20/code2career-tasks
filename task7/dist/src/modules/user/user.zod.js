"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.idParamSchema = exports.updateUserSchema = exports.createUserSchema = void 0;
const zod_1 = require("zod");
exports.createUserSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, "name is required"),
    email: zod_1.z.string().email("invalid email"),
    password: zod_1.z.string().min(4, "password too short"),
});
exports.updateUserSchema = zod_1.z.object({
    name: zod_1.z.string().min(1).optional(),
    email: zod_1.z.string().email().optional(),
    password: zod_1.z.string().min(4).optional(),
}).refine(data => Object.keys(data).length > 0, {
    message: "at least one field must be provided",
});
exports.idParamSchema = zod_1.z.object({
    id: zod_1.z.string().min(1, "id is required"),
});
//# sourceMappingURL=user.zod.js.map