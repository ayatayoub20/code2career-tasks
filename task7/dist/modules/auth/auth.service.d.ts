import jwt from "jsonwebtoken";
import type { User } from "../user/user.entity";
declare class AuthService {
    register(name: string, email: string, password: string): Promise<User>;
    login(email: string, password: string): Promise<string | null>;
    verify(token: string): string | jwt.JwtPayload | null;
}
declare const _default: AuthService;
export default _default;
//# sourceMappingURL=auth.service.d.ts.map