import { Schema } from "mongoose";

let userSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "name field is required."],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "email field is required."],
    },
    password:{
      type: String,
      required:[true,"password is required."]
    },
    /*
    isMarried: {
      type: Boolean,
      required: [true, "isMarried field is required."],
    },
    */
  },
  {
    timestamps: true,
  }
);

export default userSchema;

// user => name , email, isMarried
/* 
 schema
 model
 router
 index 
*/
