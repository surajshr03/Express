import { Webuser } from "../schema/model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { secretKey } from "../constant.js";
import { sendEmail } from "../utilis/sendemail.js";

// create webuser data

export let createWebuser = async (req, res, next) => {
  try {
    let webuserData = req.body;
    let hashPassword = await bcrypt.hash(webuserData.password, 10); //pw lai hash garyo.
    // ayeko data + isVerifiedEmail+ hashPassword lai as a object data ma send garyo.
    // ... ayeko data sabai tesma rakhdinxa
    let data = {
      ...webuserData,
      isVerifiedEmail: false,
      password: hashPassword,
    };

    // let result = await Webuser.create(webuserData);
    let result = await Webuser.create(data);

    //send mail with link after a registration
    //for purpose of making  isVerifiedEmail: false  to true so that we know that the user is genuine
    // but tyo link ma token attach garera pathauxm so that token supports expiry system ani tyo link kei time ma expire hunxa.

    //generate token

    let infoObj = {
      _id: result._id,
    };
    let expiryInfo = {
      expiresIn: `2d`,
    };

    let token = await jwt.sign(infoObj, secretKey, expiryInfo);

    // send email:

    await sendEmail({
      from: '"Hello" <uniquekc@gmail.com>',
      to: data.email,
      subject: "Account Create",
      html: `
      <h1>Your account has been created successfully.</h1>
      <a href="http://localhost8001/verify-email?token=${token}">
      http://localhost8001/verify-email?token=${token}</a>
      `,
    });

    res.json({
      success: true,
      message: "Webuser data created successfully.",
      result: result,
      // token : token ,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const verifyEmail = async (req, res) => {
  try {
    //get token.
    let tokenString = req.headers.authorization;
    // bearer+ token
    let tokenArray = tokenString.split(" ");
    let token = tokenArray[1];
    //verify token:
    let infoObj = await jwt.verify(token, secretKey);
    // console.log(infoObj)

    // get id from token
    let userId = infoObj._id;
    console.log(userId);

    //set isVerifiedEmail: true of userId;

    let result = await Webuser.findByIdAndUpdate(
      userId, // k ko ?
      {
        isVerifiedEmail: true, // kun data ?
      },
      {
        new: true,
      }
    );

    res.json({
      success: true,
      message: "user verified successfully.",
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const loginUser = async (req, res, next) => {
  try {
    let email = req.body.email;
    let password = req.body.password;
    // console.log(email , password)
    //find(gives all)(output in array) , findOne(gives only one from top of db)(output in object) :difference

    let user = await Webuser.findOne({ email: email });
    console.log(user);

    if (user) {
      if (user.isVerifiedEmail) {
        let isPasswordValid = await bcrypt.compare(password, user.password);
        if (isPasswordValid) {
          let infoObj = {
            _id: user._id,
          };
          let expiryInfo = {
            expiresIn: `100d`,
          };
          let token = await jwt.sign(infoObj, secretKey, expiryInfo);

          res.json({
            success: true,
            message: "user login successful.",
            data: token,
          });
        } else {
          throw new Error("credential error.");
        }
      } else {
        throw new Error("user not verified.");
      }
    } else {
      throw new Error("user doesn't exist.");
    }
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const myProfile = async (req, res, next) => {
  try {
    //getting value passed from previous middleware.
    let _id = req._id;

    let result = await Webuser.findById(_id);

    res.json({
      success: true,
      message: "user read successfully. ",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "unable to read user.",
    });
  }
};

// PRACTICE:::::::::::::::::::::::::::::::::::::

// //read all data
// export let readAllWebusers = async (req,res) =>{
//       let result = await Webuser.find({}).limit("3").skip("3").select("-_id");

//       //sorting() :c
//       //let result = await Webuser.find({}).sort("name"); //ascending sorting according to name
//       //let result = await Webuser.find({}).sort("-name"); //descending sorting according to name
//       //let result = await Webuser.find({}).sort("name age");// sort by name and if same sort by age
//       //let result = await Webuser.find({}).sort("-name age");// descending order of name and if same sort by age

//       //select():find has control over the object where as select has control over the object property
//       //let result = await Webuser.find({}) .select(age)  //find all and select those with age
//       //let result = await Webuser.find({}) .select(name age -_id)  //find all and select those with name, age and not show id
//       try{
//             res.json({
//                   success: true,
//                   message: "Webuser data read(retrieve) successfully",
//                   result: result
//             })
//       } catch(e){
//             res.json({
//                   success : false,
//                   message : e.message
//       })
// }
// }
// export let readAllWebusers2 = async (req,res) =>{
//     let result = await Webuser.find({name:"nitan",age:29});

//     try{
//           res.json({
//                 success: true,
//                 message: "Webuser data read(retrieve) successfully",
//                 result: result
//           })
//     } catch(e){
//           res.json({
//                 success : false,
//                 message : e.message
//     })
// }
// }
// export let readAllWebusers3 = async (req,res) =>{
//     let result = await Webuser.find({age:{$gt:15,$lt:25}});

//     try{
//           res.json({
//                 success: true,
//                 message: "Webuser data read(retrieve) successfully",
//                 result: result
//           })
//     } catch(e){
//           res.json({
//                 success : false,
//                 message : e.message
//     })
// }
// }
// export let readAllWebusers4 = async (req,res) =>{
//     let result = await Webuser.find({name:{$in:["nitan","ram","hari"]}})

//     try{
//           res.json({
//                 success: true,
//                 message: "Webuser data read(retrieve) successfully",
//                 result: result
//           })
//     } catch(e){
//           res.json({
//                 success : false,
//                 message : e.message
//     })
// }
// }
// export let readAllWebusers5 = async (req,res) =>{
//     let result = await Webuser.find({$or:[{name:"nitan"}, {age:29}]})

//     try{
//           res.json({
//                 success: true,
//                 message: "Webuser data read(retrieve) successfully",
//                 result: result
//           })
//     } catch(e){
//           res.json({
//                 success : false,
//                 message : e.message
//     })
// }
// }
// -------------------------------
// //read by webuser id
// export let readWebuser = async (req, res)=>{
//       let webuserId = req.params.webuserId;

//       try {
//           let result = await Webuser.findById(webuserId);
//           res.json({
//               success: true,
//               message: "Webuser read successfully",
//               result: result
//           })
//       } catch (error) {
//           res.json({
//               success: false,
//               message: error.message
//           });
//       }
//   };
//   //update
//   export let updateWebuser = async (req, res)=>{
//       let webuserId = req.params.webuserId;
//       let updateData = req.body;
//       try {
//           let result = await Webuser.findByIdAndUpdate(webuserId, updateData);
//           res.json({
//               success: true,
//               message: "Webuser updated successfully",
//               result: result
//           })
//       } catch (error) {
//           res.json({
//               success: false,
//               message: error.message
//           });
//       }
//   };
//   //delete
//  export  let deleteWebuser = async(req, res)=>{
//       let webuserId = req.params.webuserId;
//       try {
//           let result = await Webuser.findByIdAndDelete(webuserId);
//           res.json({
//               success: true,
//               message: "Webuser deleted successfully",
//               result: result
//           })
//       } catch (error) {
//           res.json({
//               success: false,
//               message: error.message
//           });
//       }
//   };
