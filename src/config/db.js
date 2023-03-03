const mongoose=require("mongoose")

const main=async()=>{
    return mongoose.connect("mongodb+srv://r:lo@cluster0.3507kfr.mongodb.net/?retryWrites=true&w=majority")
    .then(()=>console.log('connected to database'))
    .catch((e)=>console.log(e))
   // console.log("conneted")
   // conn.disconnect()
}

module.exports=main