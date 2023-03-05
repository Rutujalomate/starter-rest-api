const mongoose=require("mongoose")

const blogSchema=new mongoose.Schema({
    
    
        title:{
type:String,
required:true
        },
    author:{
        type:mongoose.Schema.Types.ObjectId, 
        ref:"user",
        required:true
    },
    content:{type:String,required:true},
    image:{ type: String,
        data: Buffer}

    
     
    })
     const Blog=mongoose.model("blog",blogSchema)
     module.exports=Blog