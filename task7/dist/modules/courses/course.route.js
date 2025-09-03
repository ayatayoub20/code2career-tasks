"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cousrse_controller_1 = __importDefault(require("./cousrse.controller"));
const courseRouter = (0, express_1.Router)();
courseRouter.get("/", cousrse_controller_1.default.list);
courseRouter.get("/:id", cousrse_controller_1.default.getById);
courseRouter.post("/", cousrse_controller_1.default.create);
courseRouter.put("/:id", cousrse_controller_1.default.updateById);
courseRouter.delete("/:id", cousrse_controller_1.default.deleteById);
exports.default = courseRouter;
//# sourceMappingURL=course.route.js.map