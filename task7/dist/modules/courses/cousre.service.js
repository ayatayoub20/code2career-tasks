"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const course_repository_1 = __importDefault(require("./course.repository"));
class CourseService {
    list() {
        return course_repository_1.default.findAll();
    }
    getById(id) {
        return course_repository_1.default.findById(id);
    }
    create(data) {
        return course_repository_1.default.create({
            title: data.title,
            description: data.description,
            image: data.image,
            createdBy: data.createdBy,
        });
    }
    updateById(id, patch) {
        return course_repository_1.default.update(id, patch);
    }
    deleteById(id) {
        return course_repository_1.default.delete(id);
    }
}
exports.default = new CourseService();
//# sourceMappingURL=cousre.service.js.map