"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
const auth_service_1 = __importDefault(require("./auth.service"));
exports.authRouter = (0, express_1.Router)();
exports.authRouter.post("/register", async (req, res) => {
    const { name, email, password } = req.body || {};
    if (!name || !email || !password) {
        return res.status(400).json({ message: "name, email, password are required" });
    }
    const user = await auth_service_1.default.register(name, email, password);
    res.status(201).json({ id: user.id, name: user.name, email: user.email, role: user.role });
});
exports.authRouter.post("/login", (req, res) => {
    const { email, password } = req.body || {};
    if (!email || !password) {
        return res.status(400).json({ message: "email, password are required" });
    }
    const token = auth_service_1.default.login(email, password);
    if (!token)
        return res.status(401).json({ message: "Invalid credentials" });
    res.json({ token });
});
//# sourceMappingURL=auth.route.js.map