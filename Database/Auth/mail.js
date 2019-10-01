require('dotenv').config()
const sgMail=require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
console.log(process.env.SENDGRID_API_KEY)
const Hogan=require('hogan.js');
var fs=require('fs');

var template =fs.readFileSync('./views/email.hjs','utf-8');
var compileTemplate=Hogan.compile(template);

const sendResultEmail=(email,question,answer)=>{
sgMail.send({
    to:email,
    from:'phoolan@deligence.com',
    subject:'Thanks for joining deligence :)',
    html:compileTemplate.render({question:question,answer:answer})
}).then(()=>{
console.log(email);
}).catch((error) => {
    console.log('error', error);

})
}

module.exports={
    sendResultEmail
}