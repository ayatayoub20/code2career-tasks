"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundError = exports.ForbiddenError = exports.UnauthorizedError = exports.BadRequestError = exports.CustomError = void 0;
class CustomError extends Error {
    status;
    details;
    constructor(status, message, details) {
        super(message);
        this.status = status;
        this.details = details;
    }
}
exports.CustomError = CustomError;
class BadRequestError extends CustomError {
    constructor(message = "Bad Request", details) {
        super(400, message, details);
    }
}
exports.BadRequestError = BadRequestError;
class UnauthorizedError extends CustomError {
    constructor(message = "Unauthorized") {
        super(401, message);
    }
}
exports.UnauthorizedError = UnauthorizedError;
class ForbiddenError extends CustomError {
    constructor(message = "Forbidden") {
        super(403, message);
    }
}
exports.ForbiddenError = ForbiddenError;
class NotFoundError extends CustomError {
    constructor(message = "Not Found") {
        super(404, message);
    }
}
exports.NotFoundError = NotFoundError;
//# sourceMappingURL=error.js.map