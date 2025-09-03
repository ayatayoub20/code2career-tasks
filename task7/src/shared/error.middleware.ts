import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";
import { CustomError } from "./error";

export function errorHandler(
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  
  // Zod
  if (err instanceof ZodError) {
    return res.status(400).json({
      message: "Validation error",
      issues: err.errors.map(e => ({ path: e.path.join("."), message: e.message })),
    });
  }

  
  if (err instanceof CustomError) {
    return res.status(err.status).json({
      message: err.message,
      ...(err.details ? { details: err.details } : {}),
    });
  }

  console.error("Unhandled error:", err);
  return res.status(500).json({ message: "Internal Server Error" });
}


export function notFound(_req: Request, res: Response) {
  return res.status(404).json({ message: "Route not found" });
}
