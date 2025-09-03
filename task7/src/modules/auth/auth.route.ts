import { Router } from "express";
import authService from "./auth.service";

export const authRouter = Router();

authRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body || {};
  if (!name || !email || !password) {
    return res.status(400).json({ message: "name, email, password are required" });
  }
  const user = await authService.register(name, email, password);
  res.status(201).json({ id: user.id, name: user.name, email: user.email, role: user.role });
});

authRouter.post("/login", (req, res) => {
  const { email, password } = req.body || {};
  if (!email || !password) {
    return res.status(400).json({ message: "email, password are required" });
  }
  const token = authService.login(email, password);
  if (!token) return res.status(401).json({ message: "Invalid credentials" });
  res.json({ token });
});
