import { Request, Response, NextFunction } from "express";
import authService from "./auth.service";

declare global {
  namespace Express {
    interface Request {
      user?: { id: string; role: "ADMIN" | "COACH" | "STUDENT" };
    }
  }
}

export function authRequired(req: Request, res: Response, next: NextFunction) {
  const auth = req.headers.authorization;
  if (!auth || !auth.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No token" });
  }
  const token = auth.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "No token" });
  }
  const payload = authService.verify(token);
  if (!payload) return res.status(401).json({ message: "Invalid token" });

  req.user = { id: (payload as any).id, role: (payload as any).role };
  next();
}

export function allowRoles(...roles: Array<"ADMIN" | "COACH" | "STUDENT">) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) return res.status(401).json({ message: "No token" });
    if (!roles.includes(req.user.role)) return res.status(403).json({ message: "Forbidden" });
    next();
  };
}
