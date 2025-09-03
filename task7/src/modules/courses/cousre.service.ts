import courseRepo from "./course.repository";
import type { Course } from "./course.entity";

type CreateCourseDTO = {
  title: string;
  description: string;
  image?: string | undefined;
  createdBy: string; // userId (هنستخدمها لاحقًا للصلاحيات)
};

type UpdateCourseDTO = Partial<Pick<Course, "title" | "description" | "image">>;

class CourseService {
  list(): Course[] {
    return courseRepo.findAll();
  }

  getById(id: string): Course | undefined {
    return courseRepo.findById(id);
  }

  create(data: CreateCourseDTO): Course {
    return courseRepo.create({
      title: data.title,
      description: data.description,
      image: data.image,
      createdBy: data.createdBy,
    } as Omit<Course, "id" | "createdAt" | "updatedAt">);
  }

  updateById(id: string, patch: UpdateCourseDTO): Course | undefined {
    return courseRepo.update(id, patch);
  }

  deleteById(id: string): boolean {
    return courseRepo.delete(id);
  }
}

export default new CourseService();
