var mongoose = require('mongoose');
var QuestionSchema = new mongoose.Schema({
      answered:[{
            type:Object
      }],
      details:Object
        

// Questions:[{
//      step:{
//          type:Number
//      },
//     questions:{
//    type:String
//     },
//     options:[{
//    type:String
//     }],

//     chooseOption:{
//     type:String
//     },
// }],
//     email:{
//         type:String
// }
        
        
},
{timestamps:true
})

var Question=mongoose.model('question', QuestionSchema) 

module.exports=Question


