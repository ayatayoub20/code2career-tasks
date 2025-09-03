import { Request, Response, NextFunction } from "express";

/** Only self or ADMIN can proceed (for routes with :id) */
export function isSelfOrAdmin(req: Request<{ id: string }>, res: Response, next: NextFunction) {
  if (!req.user) return res.status(401).json({ message: "No token" });
  if (req.user.role === "ADMIN" || req.user.id === req.params.id) return next();
  return res.status(403).json({ message: "Forbidden" });
}
  
  