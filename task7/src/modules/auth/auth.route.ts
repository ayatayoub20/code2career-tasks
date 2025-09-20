import { Router } from "express";
import { validate } from "../../shared/validate";
import { loginSchema, registerSchema } from "./auth.zod";
import { authController } from "./auth.controller";

export const authRouter = Router();

authRouter.post("/register", validate(registerSchema), authController.register);
authRouter.post("/login",    validate(loginSchema),    authController.login);
