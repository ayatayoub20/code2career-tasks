import { type User } from "./user.entity";
export type SafeUser = Omit<User, "password">;
export declare function toSafeUser(user: User): SafeUser;
//# sourceMappingURL=user.types.d.ts.map