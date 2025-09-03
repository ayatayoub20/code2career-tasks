import type { Course } from "./course.entity";
type CreateCourseDTO = {
    title: string;
    description: string;
    image?: string | undefined;
    createdBy: string;
};
type UpdateCourseDTO = Partial<Pick<Course, "title" | "description" | "image">>;
declare class CourseService {
    list(): Course[];
    getById(id: string): Course | undefined;
    create(data: CreateCourseDTO): Course;
    updateById(id: string, patch: UpdateCourseDTO): Course | undefined;
    deleteById(id: string): boolean;
}
declare const _default: CourseService;
export default _default;
//# sourceMappingURL=cousre.service.d.ts.map