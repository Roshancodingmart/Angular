const conn = require("../db.js");
const bcrypt = require("bcrypt");
const date = require('date-and-time');
const now = new Date();
const time = date.format(now, 'DD/MM/YY h:mm A',true)

const insertUser = (req, res) => {
    var {name, mail ,pass} = req.body;
    
    
    bcrypt.hash(pass, 10, function(err, hash) {
      conn.client.query(
        `SELECT * FROM public.new WHERE email=$1`,
        [mail],
        (err, resp) => {
          if (resp.rowCount == 0) {
            conn.client.query(
              `INSERT INTO public.new(email,name,password ,added,updated) VALUES ($1 , $2 , $3 , $4 , $5)`,
              [name, mail, hash, time, time],
              (error, respo) => {
                if (error) {
                  console.log(error);
                }
                res.send({"data":"User added to database"});
              }
            )
          } else {
  
            res.send({data:"user already exists!"});
          }
        }
      );
    });
}
  module.exports = {
    insertUser
  };
  