const express = require('express');
const router = express.Router();
const Info = require("../models/Info");
const Stud = require("../models/Stud_info");
//const { body, validationResult } = require('express-validator');

router.post('/teacherInfo' , async(req , res)=>{
    try{
        await Info.create({
            name:req.body.name,
            slots:req.body.slots,
            durations:req.body.durations,
            fluency:req.body.fluency, 
        })
        res.send({success : 1});
    } catch(err){
        res.send({success : 0});
        console.log(err) ;
    }
})

router.post('/studentInfo' , async(req , res)=>{
    try{
        await Stud.create({
            name:req.body.name,
            slots:req.body.slots,
            durations:req.body.durations,
            fluency:req.body.fluency,
            learning:req.body.learning 
        })
        res.send({success : 1});
    } catch(err){
        res.send({success : 0});
        console.log(err) ;
    }
})


module.exports = router ;
