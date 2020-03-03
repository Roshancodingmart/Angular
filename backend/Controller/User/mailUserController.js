const conn = require("../db");
var nodemailer = require("nodemailer");

const mailUser =(req,res)=>{
  var { subject, text } = req.body;
    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "roshandd7@gmail.com",
          pass: "9894255827"
        }
      });
  
      var mailOptions = {
        from: "roshandd7@gmail.com",
        to: "roshandd77@gmail.com",
        subject: subject,
        text: text
      };
  
      transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      })
      res.send({msg:"Email sent"})
}
module.exports = {
    mailUser
  };