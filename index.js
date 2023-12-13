import express, {json} from "express";
import connectToMongodb from "./src/connectToDb/connectToMongodb.js";

import firstRouter from "./src/router/firstRouter.js";
import secondRouter from "./src/router/secondRouter.js";
import webuserRouter from "./src/router/webuserRouter.js";
import nameRouter from "./src/router/nameRouter.js";
import productRouter from "./src/router/productRouter.js";
import reviewRouter from "./src/router/reviewRouter.js";
import userRouter from "./src/router/usersRouter.js";

import bcrypt from "bcrypt";//dim light means not being used
//to remove unused imports : alt+ shift + o
import jwt from "jsonwebtoken";

import fileRouter from "./src/router/fileRouter.js";
import imageRouter from "./src/router/imageRouter.js";

let expressApp = express();
expressApp.use(json());
expressApp.use(express.static("./public"));


expressApp.listen(8001,()=>{
      console.log("Server is running in port no: 8001")
});

connectToMongodb(); // calling mdb function


expressApp.use("/firsts",firstRouter);
expressApp.use("/secondRouter",secondRouter);//= localhost:8001/secondRouter

expressApp.use("/webusers",webuserRouter);
expressApp.use("/names",nameRouter);

expressApp.use("/products",productRouter);
expressApp.use("/reviews",reviewRouter);

expressApp.use("/users", userRouter);


expressApp.use("/files", fileRouter);
expressApp.use("/images", imageRouter);// practise to send images to public(static folder)
