const conn = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fs = require("fs");
var path = require("path");
var appDir = path.dirname(require.main.filename);
const privateKey = fs.readFileSync(`${appDir}/key/jwtRS256.key`, "utf8");
// console.log(privateKey)
const signinUser = (req, res) => {
  const { mail, pass } = req.body;

  conn.client.query(
    `SELECT password FROM public.new WHERE email=$1`,
    [mail],
    (err, resp) => {
      bcrypt.compare(pass, resp.rows[0].password, function(error, respo) {
        if(error){
          console.log(error)
        }
        if (respo) {
          conn.client.query(
            `SELECT * FROM public.new WHERE email=$1`,
            [mail],
            async (erro, respon) => {
              var user=respon.rows[0].name;
              try{
                var payload = {
                  email: respon.rows[0].email,
                  name: respon.rows[0].name
                };
                const signOptions = {
                  algorithm: "RS256"
                };
                // console.log(privateKey)
                const token = jwt.sign( payload, privateKey, {algorithm:"RS256"} );
                if(token){
                  console.log('Login Successful')
                  res.send({msg:"Login Successful",token:token,name:user,mail:mail})
                }
                
              }
              catch(error){console.log(error)}
            }
          );
        }
      });
    }
  );
};

module.exports = {
  signinUser
};
