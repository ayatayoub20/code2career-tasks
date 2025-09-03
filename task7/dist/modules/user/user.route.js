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
const router = (0, express_1.Router)();
router.get("/", user_controller_1.default.list);
router.get("/:id", (0, validate_1.validate)(user_zod_1.idParamSchema, "params"), user_controller_1.default.getById);
router.post("/", (0, validate_1.validate)(user_zod_1.createUserSchema, "body"), user_controller_1.default.createUser);
router.post("/coach", (0, validate_1.validate)(user_zod_1.createUserSchema, "body"), user_controller_1.default.createCoach);
router.put("/:id", (0, validate_1.validate)(user_zod_1.idParamSchema, "params"), (0, validate_1.validate)(user_zod_1.updateUserSchema, "body"), user_controller_1.default.updateById);
router.delete("/:id", (0, validate_1.validate)(user_zod_1.idParamSchema, "params"), user_controller_1.default.deleteById);
exports.userRouter = router;
//# sourceMappingURL=user.route.js.map