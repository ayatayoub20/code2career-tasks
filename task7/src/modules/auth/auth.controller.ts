import type { Request, Response, NextFunction, RequestHandler } from "express";
import authService from "./auth.service";
import { registerSchema, loginSchema, type RegisterDTO, type LoginDTO } from "./auth.zod";

class AuthController {
  // POST /auth/register
  register: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, email, password } = req.body as RegisterDTO;
      const user = await authService.register(name, email, password);
      res.status(201).json({ id: user.id, name: user.name, email: user.email, role: user.role });
    } catch (err) {
      next(err);
    }
  };

  // POST /auth/login
  login: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body as LoginDTO;
      const token = await authService.login(email, password); 
      if (!token) return res.status(401).json({ message: "Invalid credentials" });
      res.json({ token });
    } catch (err) {
      next(err);
    }
  };
}

export const authController = new AuthController();
