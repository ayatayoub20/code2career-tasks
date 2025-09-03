import { InMemoryRepository } from "../../shared/Repository";
import type { User } from "./user.entity";
declare class UserRepository extends InMemoryRepository<User> {
    getUserByEmail(email: string): User | undefined;
}
declare const _default: UserRepository;
export default _default;
//# sourceMappingURL=user.repository.d.ts.map