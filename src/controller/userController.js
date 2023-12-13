import { User } from "../schema/model.js";
import  bcrypt from "bcrypt";
import { sendEmail } from "../utilis/sendemail.js";

export let createUser = async (req, res) => {
  let userData = req.body;
  let password= userData.password;
  
  try {
    let hashPassword=await bcrypt.hash(password,10);
    userData.password=hashPassword;
    let result = await User.create(userData);

    await sendEmail({
      from:"SUN<shresthasuraj004@gmail.com>",
     // to:["nitanthapa425@gmail.com","suraj.shr03@gmail.com"],//dherai lai pathaunu xa vaney array rakhney
     to:[req.body.email],
      subject:"Email verification",
      html:`<h1>you have successfully registered.</h1>`

    })

    res.status(201).json({
      success: true,
      message: "user created successfully.",
      result: result,
    });
  } catch (error) {
    res.status(409).json({
      success: false,
      message: error.message,
    });
  }
};

export let readUser = async (req, res) => {
  try {
    // let result = await User.find({});
    let result = await User.find({});

    res.status(200).json({
      success: true,
      message: "user read successfully.",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let readUserDetails = async (req, res) => {
  let userId = req.params.userId;
  try {
    let result = await User.findById(userId);
    res.status(200).json({
      success: true,
      message: "user read successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let updateUser = async (req, res) => {
  let userId = req.params.userId;
  let userData = req.body;

  try {
    let result = await User.findByIdAndUpdate(userId, userData);
    res.status(201).json({
      success: true,
      message: "user updated successfully.",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let deleteUser = async (req, res) => {
  let userId = req.params.userId;

  try {
    let result = await User.findByIdAndDelete(userId);

    res.status(200).json({
      success: true,
      message: "user deleted successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// export let loginUser =  ( async (req,res)=>{

//   let email=req.body.email;
//   let password=req.body.password;

//   try {
//     let user = await User.findOne({email:email})//findOne ko output ki ta object ma awuxa ki ta null awuxa.
//     console.log(user)
//     let hashPassword=user.password;
//     if(user===null){
//       res.json({
//         success:false,
//         message:"Email or Password does'nt match. "
//       })
      
//     }
//     else{
//       let isValidPassword=await bcrypt.compare(password,hashPassword);
//       if (isValidPassword){
//         res.json({
//           success:true,
//           message:"User logged in successfully."
//         })
//       }
//       else{
//         res.json({
//           success:false,
//           message:"Email or Password does'nt match.",
//         })
//       }

//     }
//   } catch (error) { }
// })

export let loginUser = (async(req,res)=>{
  let email = req.body.email;
  let password = req.body.password;
  try {
    let user = await User.findOne({email:email});
    console.log(user);
    let hashPassword = user.password;
    if(user===null){
      res.json({success:false,message:"Email or Password doesn't match."})
    }else{
      let isValidPassword = await bcrypt.compare(password,hashPassword)
      if(!isValidPassword){
        res.json({success:false,message:"Email or Password doesn't match."})
      }else{
        res.json({
          success:true,
          message:"User logged in successfully."
        })
      }
    }
    
  } catch (e) {
    
  }
})