import {Webuser} from "../schema/model.js";


//create webuser data
export let createWebuser = async (req,res) => {
      let webuserData = req.body;
      try{
            let result = await Webuser.create(webuserData);
            res.json({
                  success : true,
                  message : "Webuser data created successfully."
            })
      }catch(e){
            res.json({
                  success : false,
                  message : e.message
            })
      }
}

//read all data
export let readAllWebusers = async (req,res) =>{
      let result = await Webuser.find({}).limit("3").skip("3").select("-_id");

      //sorting() :c
      //let result = await Webuser.find({}).sort("name"); //ascending sorting according to name
      //let result = await Webuser.find({}).sort("-name"); //descending sorting according to name
      //let result = await Webuser.find({}).sort("name age");// sort by name and if same sort by age
      //let result = await Webuser.find({}).sort("-name age");// descending order of name and if same sort by age

      //select():find has control over the object where as select has control over the object property
      //let result = await Webuser.find({}) .select(age)  //find all and select those with age
      //let result = await Webuser.find({}) .select(name age -_id)  //find all and select those with name, age and not show id
      try{
            res.json({
                  success: true,
                  message: "Webuser data read(retrieve) successfully",
                  result: result
            })
      } catch(e){
            res.json({
                  success : false,
                  message : e.message
      })
}
}

export let readAllWebusers2 = async (req,res) =>{
    let result = await Webuser.find({name:"nitan",age:29});

    try{
          res.json({
                success: true,
                message: "Webuser data read(retrieve) successfully",
                result: result
          })
    } catch(e){
          res.json({
                success : false,
                message : e.message
    })
}
}

export let readAllWebusers3 = async (req,res) =>{
    let result = await Webuser.find({age:{$gt:15,$lt:25}});

    try{
          res.json({
                success: true,
                message: "Webuser data read(retrieve) successfully",
                result: result
          })
    } catch(e){
          res.json({
                success : false,
                message : e.message
    })
}
}
export let readAllWebusers4 = async (req,res) =>{
    let result = await Webuser.find({name:{$in:["nitan","ram","hari"]}})

    try{
          res.json({
                success: true,
                message: "Webuser data read(retrieve) successfully",
                result: result
          })
    } catch(e){
          res.json({
                success : false,
                message : e.message
    })
}
}
export let readAllWebusers5 = async (req,res) =>{
    let result = await Webuser.find({$or:[{name:"nitan"}, {age:29}]})

    try{
          res.json({
                success: true,
                message: "Webuser data read(retrieve) successfully",
                result: result
          })
    } catch(e){
          res.json({
                success : false,
                message : e.message
    })
}
}







//read by webuser id
export let readWebuser = async (req, res)=>{
      let webuserId = req.params.webuserId;
  
      try {
          let result = await Webuser.findById(webuserId);
          res.json({
              success: true,
              message: "Webuser read successfully",
              result: result
          })
      } catch (error) {
          res.json({
              success: false,
              message: error.message
          });
      }
  };

  //update
  export let updateWebuser = async (req, res)=>{
      let webuserId = req.params.webuserId;
      let updateData = req.body;
      try {
          let result = await Webuser.findByIdAndUpdate(webuserId, updateData);
          res.json({
              success: true,
              message: "Webuser updated successfully",
              result: result
          })
      } catch (error) {
          res.json({
              success: false,
              message: error.message
          });      
      }
  };

  //delete
 export  let deleteWebuser = async(req, res)=>{
      let webuserId = req.params.webuserId;
      try {
          let result = await Webuser.findByIdAndDelete(webuserId);
          res.json({
              success: true,
              message: "Webuser deleted successfully",
              result: result
          })
      } catch (error) {
          res.json({
              success: false,
              message: error.message
          });
      }
  };



