const express = require('express');
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require('express-validator');

router.post('/createUser', 
[body('email').isEmail(),
body('name').isLength({min : 4}),
body('password' , 'Incorrect password').isLength({min : 5})],
async(req,res)=>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors : errors.array()});
    }
    
    try{
        await User.create({
            name:req.body.name,
            password:req.body.password,
            email:req.body.email,
            role:req.body.role, //student or teacher lets keep it all in small letters
        })
        res.send({success : 1});
    } catch(err){
        res.send({success : 0});
        console.log(err) ;
    }
})

router.post('/loginUser' , async(req , res)=>{
    let email = req.body.email ;
    try{
        let userdata = await User.findOne({email}) ;
        if(!userdata) res.status(400).json({errors: "Not a valid email Id"}) ;

        if(req.body.password !== userdata.password){
            return res.status(400).json({errors: "Not a valid password"}) ;
        } else{
            res.send({success : 1});
        }
    } catch(err){
        res.send({success : 0});
        console.log(err) ;
    }
})

module.exports = router ;
