const mongoose = require("mongoose");

const { Schema } = mongoose

const Infoschema_v1 = new Schema({
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
    // fluency:[
    //     {
    //         language:{
    //             type:String,
    //             required:true
    //         }
    //     }
    // ],
    learning:{
        type:String,
        required:true
    }
        
    
    
})

module.exports = mongoose.model('studinfo',Infoschema_v1)
