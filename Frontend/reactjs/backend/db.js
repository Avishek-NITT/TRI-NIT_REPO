const mongoose = require("mongoose");

const mongoDB = async()=>{
    await mongoose.connect('mongodb://localhost:27017/mydb').then(()=>{
        console.log("Successful");
    }).catch((err)=>{
        console.log(err) ;
    })
    const fetched_data = await mongoose.connection.db.collection("Students");
    fetched_data.find({}).toArray(function(err , data){
        if(!err) console.log(data) ;
        else console.log(err) ;
    })
}

module.exports = mongoDB;



