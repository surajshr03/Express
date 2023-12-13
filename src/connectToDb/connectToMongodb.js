import mongoose from "mongoose";

let connectToMongodb = async ()=>{
      try{
            await mongoose.connect("mongodb://0.0.0.0:27017/learnExpress")
            console.log("Application is successfully connected to mongodb database.")
      }
      catch(error){
            console.log(error.message);
      }
}

export default connectToMongodb;