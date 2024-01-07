import { Router } from "express";
import {
  createWebuser,
  deleteSpecificUser,
  loginUser,
  myProfile,
  passwordUpdate,
  profileUpdate,
  readAllWebusers,
  readSpecificWebuser,
  updateSpecificUser,
  verifyEmail,
} from "../controller/webuserController.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

let webuserRouter = Router();

webuserRouter.route("/").post(createWebuser).get(readAllWebusers);

webuserRouter.route("/verify-email").patch(verifyEmail);

webuserRouter.route("/login").post(loginUser);

webuserRouter.route("/my-profile").get(isAuthenticated, myProfile);
//isAuth middleware le myProfile middleware ma value pass garxa.
webuserRouter.route("/update-profile").get(isAuthenticated, profileUpdate);

webuserRouter.route("/update-password").patch(isAuthenticated, passwordUpdate);

webuserRouter
  .route("/:id")
  .get(readSpecificWebuser)
  .patch(updateSpecificUser)
  .delete(deleteSpecificUser);

export default webuserRouter;

// .get(readAllWebusers)

// webuserRouter.route("/nitan29")
// .get(readAllWebusers2);

// webuserRouter.route("/age:>15&<17")
// .get(readAllWebusers3);

// webuserRouter.route("/age:>15&<17")
// .get(readAllWebusers3);

// webuserRouter.route("/in/ram/nitan/hari")
// .get(readAllWebusers4);

// webuserRouter.route("/n=nit/a=29")
// .get(readAllWebusers5);

// webuserRouter
// .route('/:webuserId')
// .get(readWebuser)
// .patch(updateWebuser)
// .delete(deleteWebuser);
