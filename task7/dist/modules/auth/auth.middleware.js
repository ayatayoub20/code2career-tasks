"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRequired = authRequired;
exports.allowRoles = allowRoles;
const auth_service_1 = __importDefault(require("./auth.service"));
function authRequired(req, res, next) {
    const auth = req.headers.authorization;
    if (!auth || !auth.startsWith("Bearer ")) {
        return res.status(401).json({ message: "No token" });
    }
    const token = auth.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: "No token" });
    }
    const payload = auth_service_1.default.verify(token);
    if (!payload)
        return res.status(401).json({ message: "Invalid token" });
    req.user = { id: payload.id, role: payload.role };
    next();
}
function allowRoles(...roles) {
    return (req, res, next) => {
        if (!req.user)
            return res.status(401).json({ message: "No token" });
        if (!roles.includes(req.user.role))
            return res.status(403).json({ message: "Forbidden" });
        next();
    };
}
//# sourceMappingURL=auth.middleware.js.map