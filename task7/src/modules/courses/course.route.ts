import { Router } from "express";
import controller from "./cousrse.controller";
import { authRequired, allowRoles } from "../../modules/auth/auth.middleware";
import { validate } from "../../shared/validate";
import { createCourseSchema, updateCourseSchema, idParamSchema } from "./course.zod";
import { setCreatedByFromToken, mustBeOwnerOrAdmin } from "./course.middleware";

export const courseRouter = Router();

courseRouter.post(
  "/",
  authRequired,
  allowRoles("ADMIN", "COACH"),
  setCreatedByFromToken,
  validate(createCourseSchema, "body"),
  controller.create
);

courseRouter.put(
  "/:id",
  authRequired,
  allowRoles("ADMIN", "COACH"),
  validate(idParamSchema, "params"),
  mustBeOwnerOrAdmin,
  validate(updateCourseSchema, "body"),
  controller.updateById
);

courseRouter.delete(
  "/:id",
  authRequired,
  allowRoles("ADMIN", "COACH"),
  validate(idParamSchema, "params"),
  mustBeOwnerOrAdmin,
  controller.deleteById
);

courseRouter.get("/", controller.list);
courseRouter.get("/:id", validate(idParamSchema, "params"), controller.getById);