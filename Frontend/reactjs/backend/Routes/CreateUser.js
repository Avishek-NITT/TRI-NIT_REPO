const express = require('express')
const router = express.Router()
const User = require("../models/User")


router.post("/createuser", async (req,res) =>{
    try{
        await User.create({

        })
        console.log("Success")
    }catch(error){
        console.log("Error")
    }
})