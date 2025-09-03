"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_route_1 = require("./modules/user/user.route");
const course_route_1 = __importDefault(require("./modules/courses/course.route"));
const error_middleware_1 = require("./shared/error.middleware");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/users", user_route_1.userRouter);
app.use("/courses", course_route_1.default);
app.use(error_middleware_1.notFound);
app.use(error_middleware_1.errorHandler);
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map