import { Router } from "express";
import { createWebuser, verifyEmail } from "../controller/webuserController.js";

let webuserRouter = Router();

webuserRouter
.route("/")
.post(createWebuser)

webuserRouter
.route("/verify-email")
.patch(verifyEmail)



// .get(readAllWebusers)



{/* <div> */}

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
// </div>





// webuserRouter
// .route('/:webuserId')
// .get(readWebuser)
// .patch(updateWebuser)
// .delete(deleteWebuser);

export default webuserRouter;

