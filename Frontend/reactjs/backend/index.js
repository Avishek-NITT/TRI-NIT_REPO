const port = 4000;
const express = require("express");
const path = require("path");
const app = express();
const mongoDB = require("./db");
mongoDB();

app.use("/api/")

app.listen(port , (error)=>{
    if(error){
        console.log(error);
    } else{
        console.log("Server active on port : "+port);
    }
}) ;

