import { Router } from "express";
import {
  createWebuser,
  loginUser,
  myProfile,
  verifyEmail,
} from "../controller/webuserController.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

let webuserRouter = Router();

webuserRouter.route("/").post(createWebuser);

webuserRouter.route("/verify-email").patch(verifyEmail);

webuserRouter.route("/login").post(loginUser);

webuserRouter.route("/my-profile").get(isAuthenticated, myProfile)//isAuth middleware le myProfile middleware ma value garxa.


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

