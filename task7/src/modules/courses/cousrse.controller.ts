import type { Request, Response, NextFunction } from "express";
import courseService from "./cousre.service";
import type { Course } from "./course.entity";

class CourseController {
  // GET /courses
  list(_req: Request, res: Response, next: NextFunction) {
    try {
      const list: Course[] = courseService.list();
      res.json(list);
    } catch (e) { next(e); }
  }

  // GET /courses/:id
  getById(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ message: "Course id is required" });

      const course = courseService.getById(id);
      if (!course) return res.status(404).json({ message: "Course not found" });

      res.json(course );
    } catch (e) { next(e); }
  }

  // POST /courses
  create(
    req: Request<{}, {}, { title: string; description: string; image?: string; createdBy: string }>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { title, description, image, createdBy } = req.body || {};
      if (!title || !description || !createdBy) {
        return res.status(400).json({ message: "title, description, createdBy are required" });
      }

      const created = courseService.create({ title, description, image, createdBy });
      res.status(201).json(created );
    } catch (e) { next(e); }
  }

  // PUT /courses/:id
  updateById(
    req: Request<{ id: string }, {}, { title?: string; description?: string; image?: string }>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ message: "Course id is required" });

      const updated = courseService.updateById(id, req.body);
      if (!updated) return res.status(404).json({ message: "Course not found" });

      res.json(updated);
    } catch (e) { next(e); }
  }

  // DELETE /courses/:id
  deleteById(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ message: "Course id is required" });

      const ok = courseService.deleteById(id);
      if (!ok) return res.status(404).json({ message: "Course not found" });

      res.json({ message: "Course deleted" });
    } catch (e) { next(e); }
  }
}

export default new CourseController();
