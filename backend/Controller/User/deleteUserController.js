const conn = require("../db");
const date = require('date-and-time');
const now = new Date();
const time = date.format(now, 'DD/MM/YY h:mm A',true);


const deleteUser = (req, res) => {
  var { mail } = req.body;
  conn.client.query(
    `UPDATE public.new SET deleted=$1 WHERE email=$2`,
    [time, mail],(error, respo) => {
      if(error){
        console.log(error) 
      }
      if(respo) {
          console.log(respo);
          res.send({msg:"User deleted from the database"});
      }
    }
  );
};
module.exports = {
  deleteUser
};
