const express = require('express');
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require('express-validator');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const jwtSecret = "SAXSUX"



router.post('/createUser', 
[body('email').isEmail(),
body('name').isLength({min : 4}),
body('password' , 'Incorrect password').isLength({min : 5})],
async(req,res)=>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors : errors.array()});
    }
    
    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password, salt);


    try{
        await User.create({
            name:req.body.name,
            password:secPassword,
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

        const pwdCompare = await bcrypt.compare(req.body.password, userdata.password);
        
        if(!pwdCompare){
            return res.status(400).json({errors: "Not a valid password"}) ;
        } 

        const data = {
            user:{
                id: userdata.id
            }
        }
        //JWT stuff
        const authToken = jwt.sign(data,jwtSecret)
        console.log(authToken); 
        res.send({success : 1, authToken : authToken});
    } catch(err){
        res.send({success : 0});
        console.log(err) ;
    }
})

module.exports = router ;
