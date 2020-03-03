const conn = require("../db.js");
const bcrypt = require("bcrypt");
const date = require('date-and-time');

const now = new Date();
const time = date.format(now, 'DD/MM/YY h:mm A',true)
const createUser = (req, res) => {
  const { mail } = req.body;
  conn.client.query(`SELECT * FROM public.register WHERE email=$1`,[mail],(erro,response)=>{
    console.log('inside sign up')
    if(erro){
      console.log(erro)
    }
    console.log(response.rows[0].name,response.rows[0].email,response.rows[0].password)
  const no="";
  bcrypt.hash(response.rows[0].password, 10, function(err, hash) {
    conn.client.query(
      `SELECT * FROM public.new WHERE email=$1`,
      [mail],
      (err, resp) => {
        if (resp.rowCount == 0 || (resp.rowCount>0 && resp.rows[0].deleted !="")) {
          if(resp.rowCount>0){
            console.log(mail)

            conn.client.query(`DELETE FROM public.new WHERE email=$1`,[mail],(e,r)=>{
              console.log(e)
              if(r){
                console.log('deleted '+mail)
              }
            })
          }
          conn.client.query(
            `INSERT INTO public.new(email,name,password ,added,updated,deleted) VALUES ($1 , $2 , $3 , $4 , $5 , $6)`,
            [mail, response.rows[0].name, hash, time, time, no],
            (error, respo) => {
              if (error) {
                console.log(error);
              }
              // console.log(respo)
              conn.client.query(`DELETE FROM public.register WHERE email=$1`,[mail])
              res.send({"data":"User added to database"});
            }
          );
        } else {

          res.send({data:"user already exists!"});
        }
      }
    );
  });
})
};
module.exports = {
  createUser
};
