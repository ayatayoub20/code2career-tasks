"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
const validate_1 = require("../../shared/validate");
const auth_zod_1 = require("./auth.zod");
const auth_controller_1 = require("./auth.controller");
exports.authRouter = (0, express_1.Router)();
exports.authRouter.post("/register", (0, validate_1.validate)(auth_zod_1.registerSchema), auth_controller_1.authController.register);
exports.authRouter.post("/login", (0, validate_1.validate)(auth_zod_1.loginSchema), auth_controller_1.authController.login);
//# sourceMappingURL=auth.route.js.map