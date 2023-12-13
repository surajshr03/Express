import {Schema} from "mongoose";

let webuserSchema = Schema(
      {
            name : {
                  type:String,
                  required:[true,"name is required."],
                  
            },
            age:{
                  type:Number,
                  required:[true,"age is required."]
            },
            
            // email:{
            //       type:String,
            //       required:[true,"email is required."]
            // },

            // phoneNumber: {
            //       type: Number,
            //       required: [true, "number field is required"],
            //       // min: 1000000000,
            //       // max: 9999999999,
            //       // validate: (value)=>{
                        
            //       // },
              
            //   },
            
      }
);

export default webuserSchema;