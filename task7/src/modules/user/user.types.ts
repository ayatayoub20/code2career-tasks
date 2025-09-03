import { type User } from "./user.entity";

export type SafeUser = Omit<User, "password">;


export function toSafeUser(user: User): SafeUser {
  const { password, ...safe } = user;
  return safe; 
}