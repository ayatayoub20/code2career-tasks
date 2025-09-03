"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_repository_1 = __importDefault(require("./user.repository"));
const user_repository_2 = __importDefault(require("./user.repository"));
const crypto_1 = require("../../shared/crypto");
class UserService {
    list() {
        return user_repository_1.default.findAll();
    }
    getById(id) {
        return user_repository_1.default.findById(id);
    }
    async createUser(data) {
        const exists = user_repository_2.default.getUserByEmail(data.email);
        if (exists)
            throw new Error("Email already used");
        const role = "STUDENT";
        const password = await (0, crypto_1.hashPassword)(data.password);
        return user_repository_2.default.create({
            name: data.name,
            email: data.email,
            password, // stored as hashed
            role,
        });
    }
    async createCoach(data) {
        const exists = user_repository_2.default.getUserByEmail(data.email);
        if (exists)
            throw new Error("Email already used");
        const role = "COACH";
        const password = await (0, crypto_1.hashPassword)(data.password);
        return user_repository_2.default.create({
            name: data.name,
            email: data.email,
            password,
            role,
        });
    }
    getUserByEmail(email) {
        return user_repository_2.default.getUserByEmail(email);
    }
    updateById(id, patch) {
        return user_repository_1.default.update(id, patch);
    }
    deleteById(id) {
        return user_repository_1.default.delete(id);
    }
    setRole(id, role) {
        return user_repository_2.default.update(id, { role });
    }
}
exports.default = new UserService();
//# sourceMappingURL=user.service.js.map