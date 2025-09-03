import { Router } from "express";
import controller from "./user.controller";
import { validate } from "../../shared/validate";
import { createUserSchema, updateUserSchema, idParamSchema } from "./user.zod";
import { authRequired, allowRoles } from "../../modules/auth/auth.middleware";
import { isSelfOrAdmin } from "./user.middleware";

const router = Router();

// ================== My Profile ==================
router.get(
  "/me",
  authRequired,
  controller.getMe
);

router.put(
  "/me",
  authRequired,
  validate(idParamSchema, "params"),
  isSelfOrAdmin,
  validate(updateUserSchema, "body"),
  controller.updateMe
);

// ================== Create COACH (ADMIN) ==================
router.post(
  "/coach",
  authRequired,
  allowRoles("ADMIN"),
  validate(createUserSchema, "body"),
  controller.createCoach
);

// ADMIN
router.get(
  "/",
  authRequired,
  allowRoles("ADMIN"),
  controller.list
);

router.get(
  "/:id",
  authRequired,
  allowRoles("ADMIN"),
  validate(idParamSchema, "params"),
  controller.getById
);

router.delete(
  "/:id",
  authRequired,
  allowRoles("ADMIN"),
  validate(idParamSchema, "params"),
  isSelfOrAdmin,
  controller.deleteById
);

// router.post("/", validate(createUserSchema, "body"), controller.createUser);

export const userRouter = router;

