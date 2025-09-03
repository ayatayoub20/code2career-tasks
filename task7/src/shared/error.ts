export class CustomError extends Error {
  status: number;
  details?: unknown;

  constructor(status: number, message: string, details?: unknown) {
    super(message);
    this.status = status;
    this.details = details;
  }
}

export class BadRequestError extends CustomError {
  constructor(message = "Bad Request", details?: unknown) {
    super(400, message, details);
  }
}
export class UnauthorizedError extends CustomError {
  constructor(message = "Unauthorized") {
    super(401, message);
  }
}
export class ForbiddenError extends CustomError {
  constructor(message = "Forbidden") {
    super(403, message);
  }
}
export class NotFoundError extends CustomError {
  constructor(message = "Not Found") {
    super(404, message);
  }
}
