const mongoose = require("mongoose");


const connectDB= async (url)=>{
   return await mongoose.connect(url).then(()=>{console.log("connectedto DB successfully")})
}

module.exports=connectDB