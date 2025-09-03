import  type{ Request, Response, NextFunction } from "express";
import  userService from "./user.service"; 
import { toSafeUser,type SafeUser } from "./user.types"; 

class UserController {
  // GET /users
  list(_req: Request, res: Response, next: NextFunction) {
    try {
      const users = userService.list();
      const safe: SafeUser[] = users.map(u => toSafeUser(u));
      res.json(safe);
    } catch (e) { next(e); }
  }

  // GET /users/:id
  getById(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ message: "User id is required" });

      const user = userService.getById(id);
      if (!user) return res.status(404).json({ message: "User not found" });

      res.json(toSafeUser(user) as SafeUser);
    } catch (e) { next(e); }
  }

  // POST /users  (STUDENT by default)
  async createUser(
    req: Request<{}, {}, { name: string; email: string; password: string }>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { name, email, password } = req.body || {};
      if (!name || !email || !password) {
        return res.status(400).json({ message: "name, email, password are required" });
      }

      const created = userService.createUser({ name, email, password });
      res.status(201).json(toSafeUser(await created) as SafeUser);
    } catch (e) { next(e); }
  }
  // GET /users/me  (My Profile)
  getMe = (req: Request, res: Response, next: NextFunction) => {
    try {
      const me = userService.getById(req.user!.id);
      if (!me) return res.status(404).json({ message: "User not found" });
      const { password, ...safe } = me;
      res.json(safe);
    } catch (e) { next(e); }
  };
  // PUT /users/me
  updateMe = (req: Request, res: Response, next: NextFunction) => {
    try {
      const updated = userService.updateById(req.user!.id, req.body);
      if (!updated) return res.status(404).json({ message: "User not found" });
      const { password, ...safe } = updated;
      res.json(safe);
    } catch (e) { next(e); }
  };
  // POST /users/coach  (COACH)
  async createCoach(
    req: Request<{}, {}, { name: string; email: string; password: string }>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { name, email, password } = req.body || {};
      if (!name || !email || !password) {
        return res.status(400).json({ message: "name, email, password are required" });
      }

      const coach = userService.createCoach({ name, email, password });
      res.status(201).json(toSafeUser(await coach) as SafeUser);
    } catch (e) { next(e); }
  }

  // PUT /users/:id
  updateById(
    req: Request<{ id: string }, {}, { name?: string; email?: string; password?: string }>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ message: "User id is required" });

      const updated = userService.updateById(id, req.body);
      if (!updated) return res.status(404).json({ message: "User not found" });

      res.json(toSafeUser(updated) as SafeUser);
    } catch (e) { next(e); }
  }

  // DELETE /users/:id
  deleteById(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ message: "User id is required" });

      const ok = userService.deleteById(id);
      if (!ok) return res.status(404).json({ message: "User not found" });

      res.json({ message: "User deleted" });
    } catch (e) { next(e); }
  }
}

export default new UserController();
