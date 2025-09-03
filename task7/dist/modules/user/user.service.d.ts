import type { User, Role } from "./user.entity";
type CreateUserDTO = {
    name: string;
    email: string;
    password: string;
};
type UpdateUserDTO = Partial<Pick<User, "name" | "email" | "password">>;
declare class UserService {
    list(): User[];
    getById(id: string): User | undefined;
    createUser(data: CreateUserDTO): Promise<User>;
    createCoach(data: CreateUserDTO): Promise<User>;
    getUserByEmail(email: string): User | undefined;
    updateById(id: string, patch: UpdateUserDTO): User | undefined;
    deleteById(id: string): boolean;
    setRole(id: string, role: Role): User | undefined;
}
declare const _default: UserService;
export default _default;
//# sourceMappingURL=user.service.d.ts.map