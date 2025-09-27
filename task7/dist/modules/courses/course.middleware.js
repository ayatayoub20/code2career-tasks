"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCreatedByFromToken = setCreatedByFromToken;
exports.mustBeOwnerOrAdmin = mustBeOwnerOrAdmin;
const cousre_service_1 = __importDefault(require("./cousre.service"));
// Inject createdBy from logged in user into request body
function setCreatedByFromToken(req, _res, next) {
    req.body = { ...req.body, createdBy: req.user.id };
    next();
}
// Allow only ADMIN or the coach who created the course
function mustBeOwnerOrAdmin(req, res, next) {
    const course = cousre_service_1.default.getById(req.params.id);
    if (!course)
        return res.status(404).json({ message: "Course not found" });
    if (req.user.role === "ADMIN")
        return next();
    if (course.createdBy === req.user.id)
        return next();
    return res.status(403).json({ message: "Forbidden" });
}
//# sourceMappingURL=course.middleware.js.map