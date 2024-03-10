const mongoose = require("mongoose");

const { Schema } = mongoose

const Infoschema = new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    
    slots:[
        {
            slot:{
                type:String,
                required:true
            }    
        }
    ],
    durations:[
        {
            time:{
                type:Number,
                required:true
            }
        }
    ],
    fluency:[
        {
            language:{
                type:String,
                required:true
            }
        }
    ]
})

module.exports = mongoose.model('tutorinfo',Infoschema)
