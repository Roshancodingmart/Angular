const conn = require("../db.js");

const getRegister = (req, res) => {
    // console.log("inside getRegister")
    var {page}=req.body;
    // console.log(page)
conn.client.query(`SELECT
*
FROM
  public.register
ORDER BY
  name
LIMIT $1 OFFSET 0`,[page],(error,resp)=>{
    if(error){
        console.log(error);
    }
    if(resp.rowCount>0){
        // console.log(resp.rows)
        res.send(resp.rows)
    }
})
};
module.exports = {
  getRegister
};
