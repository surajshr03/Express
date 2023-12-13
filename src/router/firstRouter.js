import {Router} from "express";

let firstRouter = Router();

firstRouter
.route("/")

// .post((req,res)=>{
//       console.log("firstRouter !!")
//       res.json("firstRouter post method.")
// })
.post((req,res,next)=>{
      console.log("firstRouter !!");
      res.json("firstRouter post method.");
      req.name = "Sun"
      req.age = 22
      req.address = "Solar"
      
      next();
},
(req,res)=>{
      console.log(req.name,req.age,req.address)

})



export default firstRouter;