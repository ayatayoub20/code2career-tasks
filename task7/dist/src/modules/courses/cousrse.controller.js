"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cousre_service_1 = __importDefault(require("./cousre.service"));
class CourseController {
    // GET /courses
    list(_req, res, next) {
        try {
            const list = cousre_service_1.default.list();
            res.json(list);
        }
        catch (e) {
            next(e);
        }
    }
    // GET /courses/:id
    getById(req, res, next) {
        try {
            const { id } = req.params;
            if (!id)
                return res.status(400).json({ message: "Course id is required" });
            const course = cousre_service_1.default.getById(id);
            if (!course)
                return res.status(404).json({ message: "Course not found" });
            res.json(course);
        }
        catch (e) {
            next(e);
        }
    }
    // POST /courses
    create(req, res, next) {
        try {
            const { title, description, image, createdBy } = req.body || {};
            if (!title || !description || !createdBy) {
                return res.status(400).json({ message: "title, description, createdBy are required" });
            }
            const created = cousre_service_1.default.create({ title, description, image, createdBy });
            res.status(201).json(created);
        }
        catch (e) {
            next(e);
        }
    }
    // PUT /courses/:id
    updateById(req, res, next) {
        try {
            const { id } = req.params;
            if (!id)
                return res.status(400).json({ message: "Course id is required" });
            const updated = cousre_service_1.default.updateById(id, req.body);
            if (!updated)
                return res.status(404).json({ message: "Course not found" });
            res.json(updated);
        }
        catch (e) {
            next(e);
        }
    }
    // DELETE /courses/:id
    deleteById(req, res, next) {
        try {
            const { id } = req.params;
            if (!id)
                return res.status(400).json({ message: "Course id is required" });
            const ok = cousre_service_1.default.deleteById(id);
            if (!ok)
                return res.status(404).json({ message: "Course not found" });
            res.json({ message: "Course deleted" });
        }
        catch (e) {
            next(e);
        }
    }
}
exports.default = new CourseController();
//# sourceMappingURL=cousrse.controller.js.map