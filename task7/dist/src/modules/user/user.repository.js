"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Repository_1 = require("../../shared/Repository");
class UserRepository extends Repository_1.InMemoryRepository {
    findByEmail(email) {
        return this.findAll().find(u => u.email.toLowerCase() === email.toLowerCase());
    }
}
exports.default = new UserRepository();
//# sourceMappingURL=user.repository.js.map