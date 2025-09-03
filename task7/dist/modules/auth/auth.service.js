"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_service_1 = __importDefault(require("../user/user.service"));
const crypto_1 = require("../../shared/crypto");
const SECRET = process.env.JWT_SECRET || "fallback-secret";
class AuthService {
    async register(name, email, password) {
        return user_service_1.default.createUser({ name, email, password });
    }
    async login(email, password) {
        const user = user_service_1.default.getUserByEmail(email);
        if (!user)
            return null;
        const ok = await (0, crypto_1.verifyPassword)(user.password, password);
        if (!ok)
            return null;
        return jsonwebtoken_1.default.sign({ id: user.id, role: user.role }, SECRET, { expiresIn: "1h" });
    }
    verify(token) {
        try {
            return jsonwebtoken_1.default.verify(token, SECRET);
        }
        catch {
            return null;
        }
    }
}
exports.default = new AuthService();
//# sourceMappingURL=auth.service.js.map