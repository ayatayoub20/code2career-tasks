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

export class InMemoryRepository<T extends BaseEntity> implements IRepository<T> {
  protected items: T[] = [];

  findAll(): T[] {
    return this.items;
  }

  findById(id: string): T | undefined {
    return this.items.find(i => i.id === id);
  }

  create(input: Omit<T, "id" | "createdAt" | "updatedAt">): T {
    const now = new Date();
    const item = {
      ...(input as any),
      id: genId(),
      createdAt: now,
      updatedAt: now
    } as T;
    this.items.push(item);
    return item;
  }

  update(id: string, patch: Partial<Omit<T, "id" | "createdAt">>): T | undefined {
    const idx = this.items.findIndex(i => i.id === id);
    if (idx === -1) return;
    const updated = { ...this.items[idx], ...patch, updatedAt: new Date() } as T;
    this.items[idx] = updated;
    return updated;
  }

  delete(id: string): boolean {
    const idx = this.items.findIndex(i => i.id === id);
    if (idx === -1) return false;
    this.items.splice(idx, 1);
    return true;
  }
}


function genId(): string {
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}
