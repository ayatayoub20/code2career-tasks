"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = validate;
const error_1 = require("./error");
function validate(schema, part = "body") {
    return (req, _res, next) => {
        const result = schema.safeParse(req[part]);
        if (!result.success) {
            return next(new error_1.BadRequestError("Validation error", result.error.errors));
        }
        req[part] = result.data;
        next();
    };
}
//# sourceMappingURL=validate.js.map