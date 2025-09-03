import UserRepository from "./user.repository";
import type { User, Role } from "./user.entity";
import userRepository from "./user.repository";
import { hashPassword } from "../../shared/crypto";

type CreateUserDTO = {
  name: string;
  email: string;
  password: string;
};

type UpdateUserDTO = Partial<Pick<User, "name" | "email" | "password">>;

class UserService {
  list(): User[] {
    return UserRepository.findAll();
  }

  getById(id: string): User | undefined {
    return UserRepository.findById(id);
  }

  async createUser(data: CreateUserDTO): Promise<User> {
    const exists = userRepository.getUserByEmail(data.email);
    if (exists) throw new Error("Email already used");

    const role: Role = "STUDENT";
    const password = await hashPassword(data.password);

    return userRepository.create({
      name: data.name,
      email: data.email,
      password,      // stored as hashed
      role,
    } as Omit<User, "id" | "createdAt" | "updatedAt">);
  }


  async createCoach(data: CreateUserDTO): Promise<User> {
    const exists = userRepository.getUserByEmail(data.email);
    if (exists) throw new Error("Email already used");

    const role: Role = "COACH";
    const password = await hashPassword(data.password);

    return userRepository.create({
      name: data.name,
      email: data.email,
      password,      
      role,
    } as Omit<User, "id" | "createdAt" | "updatedAt">);
  }

  getUserByEmail(email: string) {
  return userRepository.getUserByEmail(email);
}

  updateById(id: string, patch: UpdateUserDTO): User | undefined {
    return UserRepository.update(id, patch);
  }

  deleteById(id: string): boolean {
    return UserRepository.delete(id);
  }

  setRole(id: string, role: Role) {
    return userRepository.update(id, { role } as Partial<User>); 
  }
}

export default new UserService();
