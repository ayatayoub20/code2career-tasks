"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const user_route_1 = require("./modules/user/user.route");
const course_route_1 = require("./modules/courses/course.route");
const user_service_1 = __importDefault(require("./modules/user/user.service"));
const error_middleware_1 = require("./shared/error.middleware");
const auth_route_1 = require("./modules/auth/auth.route");
const app = (0, express_1.default)();
app.use(express_1.default.json());
(async function seedAdmin() {
    const email = "admin@no.com";
    const exists = user_service_1.default.list().some(u => u.email === email);
    if (!exists) {
        const admin = await user_service_1.default.createUser({
            name: "Admin",
            email,
            password: "admin123",
        });
        user_service_1.default.setRole(admin.id, "ADMIN");
        console.log("Seeded admin:", email);
    }
})();
app.use("/users", user_route_1.userRouter);
app.use("/courses", course_route_1.courseRouter);
app.use("/auth", auth_route_1.authRouter);
app.use(error_middleware_1.notFound);
app.use(error_middleware_1.errorHandler);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map