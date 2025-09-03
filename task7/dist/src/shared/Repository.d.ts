export interface BaseEntity {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}
export interface IRepository<T extends BaseEntity> {
    findAll(): T[];
    findById(id: string): T | undefined;
    create(input: Omit<T, "id" | "createdAt" | "updatedAt">): T;
    update(id: string, patch: Partial<Omit<T, "id" | "createdAt">>): T | undefined;
    delete(id: string): boolean;
}
export declare class InMemoryRepository<T extends BaseEntity> implements IRepository<T> {
    protected items: T[];
    findAll(): T[];
    findById(id: string): T | undefined;
    create(input: Omit<T, "id" | "createdAt" | "updatedAt">): T;
    update(id: string, patch: Partial<Omit<T, "id" | "createdAt">>): T | undefined;
    delete(id: string): boolean;
}
//# sourceMappingURL=Repository.d.ts.map