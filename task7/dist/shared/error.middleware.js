"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = errorHandler;
exports.notFound = notFound;
const zod_1 = require("zod");
const error_1 = require("./error");
function errorHandler(err, _req, res, _next) {
    // Zod
    if (err instanceof zod_1.ZodError) {
        return res.status(400).json({
            message: "Validation error",
            issues: err.errors.map(e => ({ path: e.path.join("."), message: e.message })),
        });
    }
    if (err instanceof error_1.CustomError) {
        return res.status(err.status).json({
            message: err.message,
            ...(err.details ? { details: err.details } : {}),
        });
    }
    console.error("Unhandled error:", err);
    return res.status(500).json({ message: "Internal Server Error" });
}
function notFound(_req, res) {
    return res.status(404).json({ message: "Route not found" });
}
//# sourceMappingURL=error.middleware.js.map