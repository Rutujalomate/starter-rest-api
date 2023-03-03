const mongoose=require("mongoose")

const blogSchema=new mongoose.Schema({
    
    isCompleted:
    {type: Boolean,
        default: false},
    author:{
        type:mongoose.Schema.Types.ObjectId, 
        ref:"user",
        required:true
    },
    content:{type:String,required:true}

    
     
    })
     const Blog=mongoose.model("blog",blogSchema)
     module.exports=Blog