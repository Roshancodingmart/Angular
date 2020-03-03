const conn = require("../db");


const acceptUser = (req, res) => {
  conn.client.query(`SELECT email FROM public.otp`,(error,resp)=>{
      res.send(resp.rows[0].email)
  })
};
module.exports = {
  acceptUser
};
