const express=require('express')


const questionRoutes=express.Router();
// const bcrypt=require('bcrypt')

const Question=require('../models/Question.js')

const {sendResultEmail}=require('../Auth/mail')
const sgMail=require('@sendgrid/mail')


questionRoutes.route('/').get(function (req, res) {
    res.send("hello hie ")
})


questionRoutes.route('/add').post(function (req, res) {
    //  console.log(req.body.details)
      const question=new Question({
        answered:req.body.answered , 
        details:req.body.details, 
        // question:req.body.question , 
        // answer:req.body.answer 
    })   
      question.save(function(error,response){
        if(error){
          res.status(400).send('there is error')
        }
        
        else {
              // const keys = Object.keys(response.answered)
        //  console.log("thi is",keys)
            // console.log(response.answered[0].question)
            var array=[]
            for(var i=0;i<response.answered.length;i++)
            array.push("question",response.answered[i].question+ "answer", +response.answered[i].answer)
            console.log("this is my array",array)
            sendResultEmail(response.details.email,array)   
             res.status(200).send(response)          
        
        }
    
      })
})





module.exports= questionRoutes;