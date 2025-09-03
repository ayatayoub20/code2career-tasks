import type { BaseEntity } from "../../shared/Repository";
export type Role = "ADMIN" | "COACH" | "STUDENT";
export interface User extends BaseEntity {
    name: string;
    email: string;
    password: string;
    role: Role;
}
//# sourceMappingURL=user.entity.d.ts.map