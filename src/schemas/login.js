const mongoose = require("mongoose");

const LogInSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = new mongoose.model("logins" , LogInSchema)

module.exports = collection;