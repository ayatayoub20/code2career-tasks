"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const user_controller_1 = __importDefault(require("./user.controller"));
const validate_1 = require("../../shared/validate");
const user_zod_1 = require("./user.zod");
const auth_middleware_1 = require("../../modules/auth/auth.middleware");
const user_middleware_1 = require("./user.middleware");
const router = (0, express_1.Router)();
// ================== My Profile ==================
router.get("/me", auth_middleware_1.authRequired, user_controller_1.default.getMe);
router.put("/me", auth_middleware_1.authRequired, (0, validate_1.validate)(user_zod_1.idParamSchema, "params"), user_middleware_1.isSelfOrAdmin, (0, validate_1.validate)(user_zod_1.updateUserSchema, "body"), user_controller_1.default.updateMe);
// ================== Create COACH (ADMIN) ==================
router.post("/coach", auth_middleware_1.authRequired, (0, auth_middleware_1.allowRoles)("ADMIN"), (0, validate_1.validate)(user_zod_1.createUserSchema, "body"), user_controller_1.default.createCoach);
// ADMIN
router.get("/", auth_middleware_1.authRequired, (0, auth_middleware_1.allowRoles)("ADMIN"), user_controller_1.default.list);
router.get("/:id", auth_middleware_1.authRequired, (0, auth_middleware_1.allowRoles)("ADMIN"), (0, validate_1.validate)(user_zod_1.idParamSchema, "params"), user_controller_1.default.getById);
router.delete("/:id", auth_middleware_1.authRequired, (0, auth_middleware_1.allowRoles)("ADMIN"), (0, validate_1.validate)(user_zod_1.idParamSchema, "params"), user_middleware_1.isSelfOrAdmin, user_controller_1.default.deleteById);
// router.post("/", validate(createUserSchema, "body"), controller.createUser);
exports.userRouter = router;
//# sourceMappingURL=user.route.js.map