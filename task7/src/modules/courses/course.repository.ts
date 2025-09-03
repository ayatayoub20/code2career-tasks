import  { InMemoryRepository } from "../../shared/Repository";
import type { Course } from "./course.entity";

class CourseRepository extends InMemoryRepository<Course> {

}

export default new CourseRepository();
