import { Router } from "express";

import { createUser, deleteUser, loginUser, readUser, readUserDetails, updateUser } from "../controller/userController.js";

let userRouter = Router();

userRouter.route("/").post(createUser).get(readUser);

userRouter.route("/login").post(loginUser);

userRouter
  .route("/:userId") //localhstudentIdost:8000/student/:
  .delete(deleteUser)
  .get(readUserDetails)
  .patch(updateUser);

export default userRouter;
