const express = require('express');
const router = express.Router();
const User = require("../models/User");

router.post('/createUser', async(req,res)=>{
    try{
        await User.create({
            name:"Tanush",
            password:"00495856",
            email:"tanushsomisetty@gmail.com",
            location:"nhjdjhk",
        })
        res.send({success : 1});
    } catch(err){
        res.send({success : 0});
        console.log(err) ;
    }
})

module.exports = router ;