"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSelfOrAdmin = isSelfOrAdmin;
/** Only self or ADMIN can proceed (for routes with :id) */
function isSelfOrAdmin(req, res, next) {
    if (!req.user)
        return res.status(401).json({ message: "No token" });
    if (req.user.role === "ADMIN" || req.user.id === req.params.id)
        return next();
    return res.status(403).json({ message: "Forbidden" });
}
//# sourceMappingURL=user.middleware.js.map