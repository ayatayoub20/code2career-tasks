"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_repository_1 = __importDefault(require("./user.repository"));
class UserService {
    list() {
        return user_repository_1.default.findAll();
    }
    getById(id) {
        return user_repository_1.default.findById(id);
    }
    create(data) {
        const exists = user_repository_1.default.findAll().some((u) => u.email.toLowerCase() === data.email.toLowerCase());
        if (exists)
            throw new Error("Email already used");
        const role = "STUDENT";
        return user_repository_1.default.create({
            name: data.name,
            email: data.email,
            password: data.password,
            role,
        });
    }
    createCoach(data) {
        const exists = user_repository_1.default.findAll().some((u) => u.email.toLowerCase() === data.email.toLowerCase());
        if (exists)
            throw new Error("Email already used");
        const role = "COACH";
        return user_repository_1.default.create({
            name: data.name,
            email: data.email,
            password: data.password,
            role,
        });
    }
    updateById(id, patch) {
        return user_repository_1.default.update(id, patch);
    }
    deleteById(id) {
        return user_repository_1.default.delete(id);
    }
}
exports.default = new UserService();
//# sourceMappingURL=user.service.js.map