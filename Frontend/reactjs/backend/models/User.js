const mongoose = require("mongoose");

const { Schema } = mongoose

const Userschema = new Schema({
    name:{
        type:String,
        required:true,
    },
    role:{ //String shd be all in lowercase
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('user',Userschema)
