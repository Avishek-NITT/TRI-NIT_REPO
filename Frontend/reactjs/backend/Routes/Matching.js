const express = require('express');
const router = express.Router();
const Info = require("../models/Info");
const Stud = require("../models/Stud_info");

//This route is supposed to filter the tutors on basis of the language that the student wants to learn and the language that he is fluent with

router.post('/studMatch' , async(req , res)=>{
    const email = req.body.email ;
    const flu = req.body.fluency;
    try{
        const studentdata = await Stud.findOne({email}) ; //fetches studentdata from email which is supposed to be the primary key

        const d1 = studentdata.learning ; //The language the the student is wanting to learn

        //All the teachers that teach that particular language he wants to learn
        const prim = await Info.find({
            fluency: {$elemMatch: {language:d1}}
        });

        //It gives all the teachers among the above that are fluent in the same language as him
        let jsonarr = [];
        for(let i = 0 ; i < prim.length ; i++){
            const arr = prim[i].fluency ;
            for(let j = 0 ; j < arr.length ; j++){
                if(arr[j].language === flu){
                    jsonarr.push(prim[i]);
                    break ;
                }
            }
        }
        
        res.send(jsonarr) ;

    } catch(err){
        console.log(err);
    }
})


module.exports = router ;