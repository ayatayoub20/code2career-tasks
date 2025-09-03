"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toSafeUser = toSafeUser;
function toSafeUser(user) {
    const { password, ...safe } = user;
    return safe;
}
//# sourceMappingURL=user.types.js.map