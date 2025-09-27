"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.courseRouter = void 0;
const express_1 = require("express");
const cousrse_controller_1 = __importDefault(require("./cousrse.controller"));
const auth_middleware_1 = require("../../modules/auth/auth.middleware");
const validate_1 = require("../../shared/validate");
const course_zod_1 = require("./course.zod");
const course_middleware_1 = require("./course.middleware");
exports.courseRouter = (0, express_1.Router)();
exports.courseRouter.post("/", auth_middleware_1.authRequired, (0, auth_middleware_1.allowRoles)("ADMIN", "COACH"), course_middleware_1.setCreatedByFromToken, (0, validate_1.validate)(course_zod_1.createCourseSchema, "body"), cousrse_controller_1.default.create);
exports.courseRouter.put("/:id", auth_middleware_1.authRequired, (0, auth_middleware_1.allowRoles)("ADMIN", "COACH"), (0, validate_1.validate)(course_zod_1.idParamSchema, "params"), course_middleware_1.mustBeOwnerOrAdmin, (0, validate_1.validate)(course_zod_1.updateCourseSchema, "body"), cousrse_controller_1.default.updateById);
exports.courseRouter.delete("/:id", auth_middleware_1.authRequired, (0, auth_middleware_1.allowRoles)("ADMIN", "COACH"), (0, validate_1.validate)(course_zod_1.idParamSchema, "params"), course_middleware_1.mustBeOwnerOrAdmin, cousrse_controller_1.default.deleteById);
exports.courseRouter.get("/", cousrse_controller_1.default.list);
exports.courseRouter.get("/:id", (0, validate_1.validate)(course_zod_1.idParamSchema, "params"), cousrse_controller_1.default.getById);
//# sourceMappingURL=course.route.js.map