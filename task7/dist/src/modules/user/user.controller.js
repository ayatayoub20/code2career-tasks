"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = __importDefault(require("./user.service"));
const user_types_1 = require("./user.types");
class UserController {
    // GET /users
    list(_req, res, next) {
        try {
            const users = user_service_1.default.list();
            const safe = users.map(u => (0, user_types_1.toSafeUser)(u));
            res.json(safe);
        }
        catch (e) {
            next(e);
        }
    }
    // GET /users/:id
    getById(req, res, next) {
        try {
            const { id } = req.params;
            if (!id)
                return res.status(400).json({ message: "User id is required" });
            const user = user_service_1.default.getById(id);
            if (!user)
                return res.status(404).json({ message: "User not found" });
            res.json((0, user_types_1.toSafeUser)(user));
        }
        catch (e) {
            next(e);
        }
    }
    // POST /users  (إنشاء طالب افتراضيًا STUDENT)
    createUser(req, res, next) {
        try {
            const { name, email, password } = req.body || {};
            if (!name || !email || !password) {
                return res.status(400).json({ message: "name, email, password are required" });
            }
            const created = user_service_1.default.create({ name, email, password });
            res.status(201).json((0, user_types_1.toSafeUser)(created));
        }
        catch (e) {
            next(e);
        }
    }
    // POST /users/coach  (إنشاء مدرّب COACH)
    createCoach(req, res, next) {
        try {
            const { name, email, password } = req.body || {};
            if (!name || !email || !password) {
                return res.status(400).json({ message: "name, email, password are required" });
            }
            const coach = user_service_1.default.createCoach({ name, email, password });
            res.status(201).json((0, user_types_1.toSafeUser)(coach));
        }
        catch (e) {
            next(e);
        }
    }
    // PUT /users/:id
    updateById(req, res, next) {
        try {
            const { id } = req.params;
            if (!id)
                return res.status(400).json({ message: "User id is required" });
            const updated = user_service_1.default.updateById(id, req.body);
            if (!updated)
                return res.status(404).json({ message: "User not found" });
            res.json((0, user_types_1.toSafeUser)(updated));
        }
        catch (e) {
            next(e);
        }
    }
    // DELETE /users/:id
    deleteById(req, res, next) {
        try {
            const { id } = req.params;
            if (!id)
                return res.status(400).json({ message: "User id is required" });
            const ok = user_service_1.default.deleteById(id);
            if (!ok)
                return res.status(404).json({ message: "User not found" });
            res.json({ message: "User deleted" });
        }
        catch (e) {
            next(e);
        }
    }
}
exports.default = new UserController();
//# sourceMappingURL=user.controller.js.map