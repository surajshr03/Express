
export let handlefile=(req,res)=>{
      let links = req.files.map((value,i)=>{
            return `http://localhost:8001/${value.filename}`;
      })
      res.json({
            success:true,
            message:"file uploaded successfully.",
            result:links
      })
}

