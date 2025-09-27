"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const auth_service_1 = __importDefault(require("./auth.service"));
class AuthController {
    // POST /auth/register
    register = async (req, res, next) => {
        try {
            const { name, email, password } = req.body;
            const user = await auth_service_1.default.register(name, email, password);
            res.status(201).json({ id: user.id, name: user.name, email: user.email, role: user.role });
        }
        catch (err) {
            next(err);
        }
    };
    // POST /auth/login
    login = async (req, res, next) => {
        try {
            const { email, password } = req.body;
            const token = await auth_service_1.default.login(email, password);
            if (!token)
                return res.status(401).json({ message: "Invalid credentials" });
            res.json({ token });
        }
        catch (err) {
            next(err);
        }
    };
}
exports.authController = new AuthController();
//# sourceMappingURL=auth.controller.js.map