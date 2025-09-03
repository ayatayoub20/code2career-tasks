export declare class CustomError extends Error {
    status: number;
    details?: unknown;
    constructor(status: number, message: string, details?: unknown);
}
export declare class BadRequestError extends CustomError {
    constructor(message?: string, details?: unknown);
}
export declare class UnauthorizedError extends CustomError {
    constructor(message?: string);
}
export declare class ForbiddenError extends CustomError {
    constructor(message?: string);
}
export declare class NotFoundError extends CustomError {
    constructor(message?: string);
}
//# sourceMappingURL=error.d.ts.map