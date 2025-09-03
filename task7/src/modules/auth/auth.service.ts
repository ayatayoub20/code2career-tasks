import jwt from "jsonwebtoken";
import userService from "../user/user.service";
import { verifyPassword } from "../../shared/crypto";
import type { User } from "../user/user.entity";

const SECRET = process.env.JWT_SECRET || "fallback-secret";

class AuthService {
 
  async register(name: string, email: string, password: string): Promise<User> {
    return userService.createUser({ name, email, password });
  }

  async login(email: string, password: string): Promise<string | null> {
    const user = userService.getUserByEmail(email);
    if (!user) return null;

    const ok = await verifyPassword(user.password, password);
    if (!ok) return null;

    return jwt.sign({ id: user.id, role: user.role }, SECRET, { expiresIn: "1h" });
  }

  verify(token: string) {
    try {
      return jwt.verify(token, SECRET);
    } catch {
      return null;
    }
  }
}

export default new AuthService();
