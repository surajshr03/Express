import { Schema } from "mongoose";

let webuserSchema = Schema({
  fullName: {
    type: String,
    required: [true, "fullName is required."],
  },
  age: {
    type: Number,
    required: [true, "age is required."],
  },

//   phoneNumber: {
//     type: Number,
//     required: [true, "number field is required"],
//     min: 1000000000,
//     max: 9999999999,
//   },

// dob:{
// type:Date,
// required:[true,"dob is required."]
// },

role:{
    type:String,
    required:[true,"role is required."]
},
  email: {
    type: String,
    required: [true, "email is required."],
  },
  password: {
    type: String,
    required: [true, "password is required."],
  },
},
{
      timestamps:true
});

export default webuserSchema;
