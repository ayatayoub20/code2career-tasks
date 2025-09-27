import express from "express";
import "dotenv/config";

import  {userRouter} from "./modules/user/user.route";
import  {courseRouter}  from "./modules/courses/course.route";
import   userService  from "./modules/user/user.service";

import { errorHandler, notFound } from "./shared/error.middleware";
import { authRouter } from "./modules/auth/auth.route";

const app = express();
app.use(express.json());

(async function seedAdmin() {
  const email = "admin@no.com";
  const exists = userService.list().some(u => u.email === email);
  if (!exists) {
    const admin = await userService.createUser({
      name: "Admin",
      email,
      password: "admin123",
    });
    userService.setRole(admin.id, "ADMIN"); 
    console.log("Seeded admin:", email);
  }
})();



app.use("/users", userRouter);
app.use("/courses", courseRouter);
app.use("/auth", authRouter);


app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
