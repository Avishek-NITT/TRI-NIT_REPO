const express = require('express');
const router = express.Router();
const Info = require("../models/Info");
const Stud = require("../models/Stud_info");

//This route is supposed to filter the tutors on basis of the language that the student wants to learn and the language that he is fluent with

router.post('/studMatch' , async(req , res)=>{
    const email = req.body.email ;
    const flu = req.body.fluency;
    try{
        const studentdata = await Stud.findOne({email}) ;
        console.log(studentdata);
        const d1 = studentdata.learning ;
        console.log(d1);
        const prim = await Info.find({
            fluency: {$elemMatch: {language:d1}}
        });
        console.log(prim) ;

        
        const sec = await Info.find({
            fluency: {$elemMatch: {language:flu}}
        })
        console.log(sec);
        res.send(sec) ;

    } catch(err){
        console.log(err);
    }
})


module.exports = router ;