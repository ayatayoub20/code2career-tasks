import { InMemoryRepository } from "../../shared/Repository";
import type { User } from "./user.entity";

class UserRepository extends InMemoryRepository<User> {

    getUserByEmail(email: string): User | undefined {
    return this.findAll().find(u => u.email.toLowerCase() === email.toLowerCase());
  }
}

export default new UserRepository();
