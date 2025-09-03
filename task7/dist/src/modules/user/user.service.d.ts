import type { User } from "./user.entity";
type CreateUserDTO = {
    name: string;
    email: string;
    password: string;
};
type UpdateUserDTO = Partial<Pick<User, "name" | "email" | "password">>;
declare class UserService {
    list(): User[];
    getById(id: string): User | undefined;
    create(data: CreateUserDTO): User;
    createCoach(data: CreateUserDTO): User;
    updateById(id: string, patch: UpdateUserDTO): User | undefined;
    deleteById(id: string): boolean;
}
declare const _default: UserService;
export default _default;
//# sourceMappingURL=user.service.d.ts.map