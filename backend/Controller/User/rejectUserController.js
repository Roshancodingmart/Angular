const conn = require("../db");


const rejectUser = (req, res) => {
    var {mail}=req.body;
    console.log(mail)
  conn.client.query(`DELETE FROM public.register WHERE email=$1`,[mail],(error,resp)=>{
      if(error){
          console.log(error)
      }
      if(resp.rowCount>0)
      {
        console.log("deleted");
        res.send({msg:"Deleted"})
      }
  })
};
module.exports = {
  rejectUser
};
