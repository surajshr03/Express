import {Router} from "express";

let secondRouter = Router();

secondRouter.route("/s2")
.get((req,res)=>{
      console.log("second router !!")
      res.json("second router get method !")
      
})



export default secondRouter;