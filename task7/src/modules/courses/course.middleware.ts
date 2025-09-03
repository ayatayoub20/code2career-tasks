import { Request, Response, NextFunction } from "express";
import courseService from "./cousre.service";

  // Inject createdBy from logged in user into request body
 
export function setCreatedByFromToken(req: Request, _res: Response, next: NextFunction) {
  req.body = { ...req.body, createdBy: req.user!.id };
  next();
}

 // Allow only ADMIN or the coach who created the course
export function mustBeOwnerOrAdmin(req: Request<{ id: string }>, res: Response, next: NextFunction) {
  const course = courseService.getById(req.params.id);
  if (!course) return res.status(404).json({ message: "Course not found" });

  if (req.user!.role === "ADMIN") return next();
  if (course.createdBy === req.user!.id) return next();

  return res.status(403).json({ message: "Forbidden" });
}