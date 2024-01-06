import { Router } from "express";

import { createUser, deleteUser, loginUser, myProfile, myProfileUpdate, readUser, readUserDetails, updateUser } from "../controller/userController.js";

let userRouter = Router();

userRouter.route("/").post(createUser).get(readUser);

userRouter.route("/login").post(loginUser);

userRouter.route("/my-profile").get(myProfile)

userRouter.route("/myprofileupdate").patch(myProfileUpdate)

userRouter
  .route("/:userId") 
  .delete(deleteUser)
  .get(readUserDetails)
  .patch(updateUser);

export default userRouter;
//dynamic route lai jaile tala rakhney