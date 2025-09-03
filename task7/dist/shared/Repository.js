"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryRepository = void 0;
class InMemoryRepository {
    items = [];
    findAll() {
        return this.items;
    }
    findById(id) {
        return this.items.find(i => i.id === id);
    }
    create(input) {
        const now = new Date();
        const item = {
            ...input,
            id: genId(),
            createdAt: now,
            updatedAt: now
        };
        this.items.push(item);
        return item;
    }
    update(id, patch) {
        const idx = this.items.findIndex(i => i.id === id);
        if (idx === -1)
            return;
        const updated = { ...this.items[idx], ...patch, updatedAt: new Date() };
        this.items[idx] = updated;
        return updated;
    }
    delete(id) {
        const idx = this.items.findIndex(i => i.id === id);
        if (idx === -1)
            return false;
        this.items.splice(idx, 1);
        return true;
    }
}
exports.InMemoryRepository = InMemoryRepository;
function genId() {
    return Math.random().toString(36).slice(2) + Date.now().toString(36);
}
//# sourceMappingURL=Repository.js.map