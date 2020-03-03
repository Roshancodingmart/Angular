const conn = require("../db");

const registerUser = (req, res) => {
  var {name,mail,pass}=req.body;
  conn.client.query(`SELECT * FROM public.new where email=$1`,[mail],(err,response)=>{
    if(err){
      console.log(err)
    }
    if(response.rowCount==0 || (response.rowCount>0 && response.rows[0].deleted !="")){
      conn.client.query(`INSERT INTO public.register(email,name,password) VALUES ($1 , $2 , $3)`,
      [mail, name, pass],(error,resp)=>{
        if(error){
          console.log(error)
        }
          if(resp){
              res.send({msg:"User added"})
          }
      })
    }
    else{
      console.log("user already exists")
    }
  })
};
module.exports = {
  registerUser
};
